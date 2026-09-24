import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { FileDown, Loader2, Menu, X } from 'lucide-react'
import { profile } from '../content'
import { useDownloadPdf } from '../lib/useDownloadPdf'

// 导航项与板块标题一一对应（label = section 里的 h2）
const sections = [
  { id: 'experience', label: '工作经历' },
  { id: 'projects', label: '项目经历' },
  { id: 'opensource', label: '开源项目' },
  { id: 'skills', label: '技术栈' },
  { id: 'education', label: '教育经历' },
  { id: 'publications', label: '研究成果' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState('')
  const { busy, run } = useDownloadPdf()

  // 滚动进度 —— 页头下缘一根发丝级蓝线
  const { scrollYProgress } = useScroll()
  const level = useSpring(scrollYProgress, { stiffness: 140, damping: 26, mass: 0.4 })

  // scrollspy + 页头滚动态：判定线取页头下方一点，最后一个越过判定线的板块即当前板块
  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        setScrolled(window.scrollY > 8)
        const line = window.scrollY + 120
        let current = ''
        for (const s of sections) {
          const el = document.getElementById(s.id)
          if (el && el.getBoundingClientRect().top + window.scrollY <= line) current = s.id
        }
        setActiveId(current)
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-xl transition-colors duration-300 ${
        scrolled
          ? 'border-b border-line/70 bg-paper/70'
          : 'border-b border-transparent bg-paper/40'
      }`}
    >
      <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <img
            src={profile.avatar}
            alt=""
            className="h-7 w-7 rounded-full object-cover ring-1 ring-black/10"
          />
          <span className="text-[15px] font-semibold tracking-tight text-ink-800">
            {profile.name}
          </span>
        </a>
        <ul className="hidden gap-7 lg:flex">
          {sections.map((s) => {
            const active = s.id === activeId
            return (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  aria-current={active ? 'true' : undefined}
                  className={`rounded-full px-3 py-1.5 text-[13px] transition-colors ${
                    active
                      ? 'bg-accent/10 font-semibold text-accent'
                      : 'font-normal text-ink-500 hover:text-ink-800'
                  }`}
                >
                  {s.label}
                </a>
              </li>
            )
          })}
        </ul>
        <div className="flex items-center gap-4">
          <a
            href="mailto:chs9710@163.com"
            className="hidden text-[13px] text-ink-500 transition-colors hover:text-ink-800 lg:inline"
          >
            联系
          </a>
          <button
            type="button"
            onClick={run}
            disabled={busy}
            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3.5 py-1.5 text-[13px] font-medium text-white transition-all hover:opacity-90 active:scale-[0.97] disabled:cursor-wait disabled:opacity-60"
          >
            {busy ? <Loader2 size={13} className="animate-spin" /> : <FileDown size={13} />}
            {busy ? '生成中…' : '下载 PDF'}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? '关闭菜单' : '打开菜单'}
            aria-expanded={menuOpen}
            className="-mr-1 p-1 text-ink-600 transition-colors hover:text-ink-800 lg:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* 滚动进度发丝线 */}
      <motion.div
        aria-hidden="true"
        className="absolute bottom-[-1px] left-0 h-[2px] w-full origin-left bg-accent"
        style={{ scaleX: level }}
      />

      {/* 移动端菜单 */}
      {menuOpen && (
        <div className="border-t border-line/70 bg-paper/90 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-6 py-2 sm:px-8">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setMenuOpen(false)}
                className="border-b border-line/50 py-3 text-sm text-ink-600 transition-colors last:border-0 hover:text-ink-800"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
