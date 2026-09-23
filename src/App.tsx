import { MotionConfig } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import OpenSource from './components/OpenSource'
import Skills from './components/Skills'
import Education from './components/Education'
import Publications from './components/Publications'
import Contact from './components/Contact'
import ScrollRail from './components/ScrollRail'
import PrintResume from './components/PrintResume'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      {/* 屏幕版：打印/导出 PDF 时隐藏。.dark-root 只反转屏幕版配色，
          打印版（PrintResume）在其外，导出 PDF 恒为亮色 */}
      <div className="dark-root min-h-screen bg-paper text-ink-900">
        <div className="print:hidden">
          <Header />
          {/* 宽度用 max-w-6xl（1152px）而非 5xl（1024px）：5xl 在 1920 屏上左右各空 448px，
              而 Hero 左栏只剩 524px，一句话铺不开。正文段落的上限是 max-w-measure，
              已经跟容器内容宽（1088px）对齐，段落会铺满。Header / Contact 必须同步，
              否则页头与正文错位。 */}
          <main className="mx-auto max-w-6xl px-6 sm:px-8">
            <Hero />
            <About />
            <Experience />
            <Projects />
            <OpenSource />
            <Skills />
            <Education />
            <Publications />
          </main>
          <Contact />
          {/* 右侧测站刻度（滚动读数）—— 只在 xl 以上出现，窄屏让位给内容 */}
          <ScrollRail />
        </div>
      </div>

      {/* 打印版：专为 A4 设计的简历，导出 PDF 时显示 */}
      <PrintResume />
    </MotionConfig>
  )
}