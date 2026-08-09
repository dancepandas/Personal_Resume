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

export async function downloadResumePdf(): Promise<void> {
  const node = document.querySelector<HTMLElement>('[data-print-resume]')
  if (!node) return

  // 按需加载，避免拖慢首屏
  const [{ toCanvas }, { jsPDF }] = await Promise.all([
    import('html-to-image'),
    import('jspdf'),
  ])

  const canvas = await toCanvas(node, {
    pixelRatio: PIXEL_RATIO,
    backgroundColor: '#ffffff',
    // 捕获时把元素摆正（克隆在 SVG foreignObject 里），并固定宽度
    style: { position: 'static', left: '0', top: '0', margin: '0', width: '665px' },
  })

  const cssW = canvas.width / PIXEL_RATIO
  const cssH = canvas.height / PIXEL_RATIO
  const mmPerCssPx = CONTENT_W_MM / cssW
  const totalHmm = cssH * mmPerCssPx
  const pageCount = Math.max(1, Math.ceil((totalHmm - 1e-6) / CONTENT_H_MM))

  const doc = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait', compress: true })

  for (let p = 0; p < pageCount; p++) {
    if (p > 0) doc.addPage()
    // 当前页对应画布里的横向切片
    const srcY = p * (CONTENT_H_MM / mmPerCssPx) * PIXEL_RATIO
    const srcH = Math.min(canvas.height - srcY, (CONTENT_H_MM / mmPerCssPx) * PIXEL_RATIO)
    if (srcH <= 0) break

    const slice = document.createElement('canvas')
    slice.width = canvas.width
    slice.height = Math.round(srcH)
    const ctx = slice.getContext('2d')
    if (!ctx) break
    ctx.drawImage(canvas, 0, srcY, canvas.width, srcH, 0, 0, canvas.width, srcH)

    const sliceHmm = (srcH / PIXEL_RATIO) * mmPerCssPx
    // 白底文字用 JPEG 压缩，体积小且视觉无差别
    doc.addImage(slice.toDataURL('image/jpeg', 0.92), 'JPEG', MARGIN_MM, MARGIN_MM, CONTENT_W_MM, sliceHmm, undefined, 'FAST')
  }

  const date = new Date().toISOString().slice(0, 10)
  doc.save(`程帅简历-${date}.pdf`)
}
