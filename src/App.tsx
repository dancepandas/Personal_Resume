import { MotionConfig } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import OpenSource from './components/OpenSource'
import Skills from './components/Skills'
import Education from './components/Education'
import Publications from './components/Publications'
import Contact from './components/Contact'
import PrintResume from './components/PrintResume'

/** 内容容器 —— 每个板块内部的统一宽度与内边距 */
const wrap = 'mx-auto max-w-6xl px-6 sm:px-8'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      {/* 屏幕版：打印/导出 PDF 时隐藏。.dark-root 只反转屏幕版配色，
          打印版（PrintResume）在其外，导出 PDF 恒为亮色 */}
      <div className="dark-root min-h-screen bg-paper text-ink-800">
        <div className="print:hidden">
          <Header />
          <main>
            {/* 白 / 灰交替色带：全宽灰带 + 内部容器，是页面色彩节奏的来源。
                灰带上的卡片用白色（浮起），白带上的列表行用发丝线（沉降）——
                卡片只留给"主打"内容，其余一律让位给排版。 */}
            <div className={wrap}>
              <Hero />
            </div>
            <div className="bg-ink-100/50">
              <div className={wrap}>
                <Experience />
              </div>
            </div>
            <div className={wrap}>
              <Projects />
            </div>
            <div className="bg-ink-100/50">
              <div className={wrap}>
                <OpenSource />
              </div>
            </div>
            <div className={wrap}>
              <Skills />
            </div>
            <div className="bg-ink-100/50">
              <div className={wrap}>
                <Education />
              </div>
            </div>
            <div className={wrap}>
              <Publications />
            </div>
          </main>
          <Contact />
        </div>
      </div>

      {/* 打印版：专为 A4 设计的简历，导出 PDF 时显示 */}
      <PrintResume />
    </MotionConfig>
  )
}
