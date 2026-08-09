import { useEffect, useRef } from 'react'
import { DotCut } from '../dotcut/engine'

/**
 * dotcut 仪表：~42 圆网格，6 场景循环（A / rings / columns / checker / boxes / bars），
 * 颜色走水文蓝家族。圆点本身即签名元素，颜色与站点 token 一致。
 *
 * 鼠标在容器内移动时,附近圆格被"擦掉"形成局部负空间，鼠标离开后自动回流。
 */
export default function DotCutPanel() {
  const hostRef = useRef<HTMLDivElement>(null)
  const engineRef = useRef<DotCut | null>(null)

  useEffect(() => {
    const host = hostRef.current
    if (!host) return
    // 用站点主字体渲染字符,跟站点排版一致
    const fontFamily =
      '"Inter", "PingFang SC", "Microsoft YaHei", system-ui, sans-serif'
    const engine = new DotCut(host, fontFamily)
    engineRef.current = engine
    if (!engine.ok) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      engine.renderStill()
    } else {
      engine.start()
    }

    // 鼠标交互 —— 把屏幕坐标换算成 cell 坐标,送入 engine
    const onMove = (e: PointerEvent) => {
      const rect = host.getBoundingClientRect()
      const px = e.clientX - rect.left
      const py = e.clientY - rect.top
      engine.setPointer(engine.toCell(px, py))
    }
    const onLeave = () => engine.setPointer(null)
    host.addEventListener('pointermove', onMove)
    host.addEventListener('pointerleave', onLeave)

    // 离开视口时暂停,降低功耗
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (!reduced) engine.start()
          } else {
            engine.stop()
          }
        }
      },
      { threshold: 0 },
    )
    io.observe(host)

    return () => {
      host.removeEventListener('pointermove', onMove)
      host.removeEventListener('pointerleave', onLeave)
      io.disconnect()
      engine.destroy()
      engineRef.current = null
    }
  }, [])

  return (
    <div
      ref={hostRef}
      className="relative h-full w-full overflow-hidden rounded-md bg-paper dark:bg-ink-50"
      aria-label="测站仪表:点阵网格循环显示 A / rings / columns / checker / boxes / bars 六种切模"
    />
  )
}