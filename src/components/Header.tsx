import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { FileDown, Loader2, Menu, X } from 'lucide-react'
import { useDownloadPdf } from '../lib/useDownloadPdf'

const sections = [
  { id: 'about', label: '关于' },
  { id: 'experience', label: '经历' },
  { id: 'projects', label: '项目' },
  { id: 'opensource', label: '开源' },
  { id: 'skills', label: '技能' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const { busy, run } = useDownloadPdf()
  // 水位 —— 滚动进度即"水位上涨"
  const level = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled ? 'border-ink-100 bg-paper/85 backdrop-blur-md' : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="relative mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-8">
        <a
          href="#top"
          className="font-mono text-sm font-medium tracking-tight text-ink-900"
        >
          chs<span className="text-accent">.</span>
        </a>
        <ul className="hidden gap-7 sm:flex">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="text-sm text-ink-500 transition-colors hover:text-ink-900"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-5">
          <a
            href="mailto:chs9710@163.com"
            className="text-sm font-medium text-ink-900 transition-opacity hover:opacity-60"
          >
            联系
          </a>
          <button
            type="button"
            onClick={run}
            disabled={busy}
            className="inline-flex items-center gap-1.5 rounded-md border border-ink-200 px-3 py-1.5 text-sm font-medium text-ink-700 transition-all hover:border-ink-400 hover:text-ink-900 active:scale-[0.98] disabled:cursor-wait disabled:opacity-60"
          >
            {busy ? <Loader2 size={14} className="animate-spin" /> : <FileDown size={14} />}
            {busy ? '生成中…' : '下载 PDF'}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? '关闭菜单' : '打开菜单'}
            aria-expanded={menuOpen}
            className="-mr-1 p-1 text-ink-700 transition-colors hover:text-ink-900 sm:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* 水位进度条：滚动得越深，水位涨得越高 */}
        <div className="pointer-events-none absolute inset-x-0 -bottom-px h-[2px]">
          <motion.div
            style={{ scaleX: level }}
            className="h-full origin-left bg-accent"
          />
        </div>
      </nav>

      {/* 移动端菜单 */}
      {menuOpen && (
        <div className="border-t border-ink-100 bg-paper/95 backdrop-blur-md sm:hidden">
          <nav className="mx-auto flex max-w-5xl flex-col px-6 py-2 sm:px-8">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setMenuOpen(false)}
                className="border-b border-ink-100/70 py-3 text-sm text-ink-700 transition-colors last:border-0 hover:text-ink-900"
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
