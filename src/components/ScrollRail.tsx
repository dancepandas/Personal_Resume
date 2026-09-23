import { useEffect, useState } from 'react'

/**
 * 测站刻度 —— 右侧的滚动读数条。
 *
 * 站点把滚动条藏了（`scrollbar-width: none`），读者因此失去了位置感：不知道还剩多长，
 * 也不知道各板块的疏密。这条刻度把整页当成一根水尺：每个板块一道刻度，位置按它在
 * 文档里的真实纵向位置归一化，所以刻度之间不等距 —— 间距本身就是信息。
 *
 * 当前板块的刻度加宽、着水文蓝并显示中文标签；已经划过的刻度着淡蓝，未到的留发丝线灰。
 * 刻度可点，等于一个随时够得着的区块索引（顶部导航在手机上收进了汉堡菜单）。
 */
const stations = [
  { id: 'about', label: '关于' },
  { id: 'experience', label: '经历' },
  { id: 'projects', label: '项目' },
  { id: 'opensource', label: '开源' },
  { id: 'skills', label: '技能' },
  { id: 'education', label: '教育' },
  { id: 'publications', label: '成果' },
] as const

const RAIL_H = 240

type Mark = { id: string; label: string; ratio: number }

export default function ScrollRail() {
  const [marks, setMarks] = useState<Mark[]>([])
  const [activeId, setActiveId] = useState<string>('')

  // 量刻度位置。字体加载完 / 窗口尺寸变化都会挪动布局，所以三种时机都要重量
  useEffect(() => {
    const measure = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      if (total <= 0) return
      const vh = window.innerHeight
      const next: Mark[] = []
      for (const s of stations) {
        const el = document.getElementById(s.id)
        if (!el) continue
        const top = el.getBoundingClientRect().top + window.scrollY
        // 归一化到"该板块中心走到视口中心"的那一刻
        const ratio = (top + el.offsetHeight / 2 - vh / 2) / total
        next.push({ ...s, ratio: Math.min(1, Math.max(0, ratio)) })
      }
      setMarks(next)
    }
    const readActive = () => {
      const line = window.scrollY + window.innerHeight * 0.4
      let current = ''
      for (const s of stations) {
        const el = document.getElementById(s.id)
        if (el && el.getBoundingClientRect().top + window.scrollY <= line) current = s.id
      }
      setActiveId(current)
    }

    measure()
    readActive()
    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = window.requestAnimationFrame(() => {
        raf = 0
        readActive()
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', measure)
    const ro = new ResizeObserver(measure)
    ro.observe(document.documentElement)
    // 字体 swap 之后行高会变，第一次量到的位置是错的
    document.fonts?.ready.then(measure).catch(() => {})

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', measure)
      ro.disconnect()
      if (raf) window.cancelAnimationFrame(raf)
    }
  }, [])

  if (!marks.length) return null

  const activeIdx = marks.findIndex((m) => m.id === activeId)

  return (
    <nav
      aria-label="页内区块索引"
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 xl:block"
    >
      {/* 必须给容器一个真实宽度：里面的刻度都是绝对定位，容器宽度会塌成 0，
          元素没有布局盒 → 没有命中区域，刻度靠溢出显示纯属侥幸。
          group/rail：鼠标进到整条尺上，7 个站名一起显形 —— 相当于「读整把尺」。 */}
      <div className="group/rail relative w-24" style={{ height: RAIL_H }}>
        {/* 母尺 */}
        <span className="absolute right-0 top-0 h-full w-px bg-ink-200" aria-hidden="true" />

        {marks.map((m, i) => {
          const done = activeIdx >= 0 && i <= activeIdx
          const active = m.id === activeId
          return (
            <a
              key={m.id}
              href={`#${m.id}`}
              title={m.label}
              className="absolute right-0 flex items-center justify-end gap-2 focus-visible:outline-offset-4"
              style={{ top: `${m.ratio * RAIL_H}px`, transform: 'translateY(-50%)' }}
            >
              <span
                className={`whitespace-nowrap font-mono text-[11px] transition-opacity duration-200 ${
                  active
                    ? 'text-accent opacity-100'
                    : 'text-ink-500 opacity-0 group-hover/rail:opacity-100'
                }`}
              >
                {m.label}
              </span>
              <span
                aria-hidden="true"
                className={`block transition-all duration-300 ${
                  active
                    ? 'h-[2px] w-5 bg-accent'
                    : done
                      ? 'h-[2px] w-3 bg-accent/40'
                      : 'h-[2px] w-2.5 bg-ink-200 group-hover/rail:bg-ink-400'
                }`}
              />
            </a>
          )
        })}
      </div>
    </nav>
  )
}
