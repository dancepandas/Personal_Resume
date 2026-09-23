// 直接下载 PDF 简历 —— 渲染打印版式（PrintResume）为高清位图，再组装成 A4 多页 PDF。
// 因为打印版式与网页共用 content.ts 数据源，下载的 PDF 永远与网站最新内容一致。

const A4_W_MM = 210
const A4_H_MM = 297
const MARGIN_MM = 12
// A4 减去边距后的内容区
const CONTENT_W_MM = A4_W_MM - MARGIN_MM * 2 // 186
const CONTENT_H_MM = A4_H_MM - MARGIN_MM * 2 // 273
// 捕获分辨率（css px → 画布像素倍率），约 182 DPI，清晰可打印
const PIXEL_RATIO = 2

/**
 * 收集所有文字／图片行盒的纵向占用区间（相对内容区顶部，单位 css px）。
 * 用于把页边界挪到不压任何一行字的位置。
 */
function collectBands(inner: HTMLElement): { top: number; bottom: number }[] {
  const base = inner.getBoundingClientRect().top
  const bands: { top: number; bottom: number }[] = []
  for (const el of inner.querySelectorAll('*')) {
    if (el.children.length) continue
    const r = el.getBoundingClientRect()
    if (r.height <= 0) continue
    bands.push({ top: r.top - base, bottom: r.bottom - base })
  }
  return bands.sort((a, b) => a.top - b.top)
}

/**
 * 把切线向上吸附到最近的空档。
 * 只向上找：向下吸会让切片高过整页内容区，图片会溢到页边距外面去。
 * 向上吸的代价是第一页底部多一点留白，比第二页从句子中间开始好接受得多。
 */
function snapUp(target: number, bands: { top: number; bottom: number }[], limit = 72): number {
  const free = (y: number) => !bands.some((b) => b.top < y && b.bottom > y)
  if (free(target)) return target
  for (let d = 1; d <= limit; d++) {
    if (target - d > 0 && free(target - d)) return target - d
  }
  return target // 找不到空档就退回硬切
}

export async function downloadResumePdf(): Promise<void> {
  const node = document.querySelector<HTMLElement>('[data-print-resume]')
  if (!node) return
  const inner = node.firstElementChild as HTMLElement | null
  if (!inner) return

  // 按需加载，避免拖慢首屏
  const [{ toCanvas }, { jsPDF }] = await Promise.all([
    import('html-to-image'),
    import('jspdf'),
  ])

  // 先量行盒再截图：截图时元素会被克隆进 SVG foreignObject，
  // 但宽度被固定成同一个 665px，布局高度一致，所以量出来的坐标可以直接用。
  const bands = collectBands(inner)

  const canvas = await toCanvas(node, {
    pixelRatio: PIXEL_RATIO,
    backgroundColor: '#ffffff',
    // 捕获时把元素摆正（克隆在 SVG foreignObject 里），并固定宽度
    style: { position: 'static', left: '0', top: '0', margin: '0', width: '665px' },
  })

  const cssW = canvas.width / PIXEL_RATIO
  const cssH = canvas.height / PIXEL_RATIO
  const mmPerCssPx = CONTENT_W_MM / cssW
  const pagePx = CONTENT_H_MM / mmPerCssPx // 每页能装多少 css px

  // 逐页向前推切线，直到剩下的内容装得进最后一页
  const cuts: number[] = []
  let prev = 0
  let guard = 0
  while (cssH - prev > pagePx && guard++ < 50) {
    const target = prev + pagePx
    const y = snapUp(target, bands)
    // 吸附过头（把这一页压得太短）就退回硬切
    const next = y > prev + pagePx * 0.5 ? y : target
    cuts.push(next)
    prev = next
  }
  const pageCount = cuts.length + 1

  const doc = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait', compress: true })

  for (let p = 0; p < pageCount; p++) {
    if (p > 0) doc.addPage()
    const fromPx = p === 0 ? 0 : cuts[p - 1]!
    const toPx = p < cuts.length ? cuts[p]! : cssH
    const srcY = fromPx * PIXEL_RATIO
    const srcH = (toPx - fromPx) * PIXEL_RATIO
    if (srcH <= 0) break

    const slice = document.createElement('canvas')
    slice.width = canvas.width
    slice.height = Math.round(srcH)
    const ctx = slice.getContext('2d')
    if (!ctx) break
    ctx.drawImage(canvas, 0, srcY, canvas.width, srcH, 0, 0, canvas.width, srcH)

    const sliceHmm = (srcH / PIXEL_RATIO) * mmPerCssPx
    // 白底文字用 JPEG 压缩，体积小且视觉无差别
    doc.addImage(
      slice.toDataURL('image/jpeg', 0.92),
      'JPEG',
      MARGIN_MM,
      MARGIN_MM,
      CONTENT_W_MM,
      sliceHmm,
      undefined,
      'FAST',
    )
  }

  const date = new Date().toISOString().slice(0, 10)
  doc.save(`程帅简历-${date}.pdf`)
}
