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
import PrintResume from './components/PrintResume'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      {/* 屏幕版：打印/导出 PDF 时隐藏。.dark-root 只反转屏幕版配色，
          打印版（PrintResume）在其外，导出 PDF 恒为亮色 */}
      <div className="dark-root min-h-screen bg-paper text-ink-900">
        <div className="print:hidden">
          <Header />
          <main className="mx-auto max-w-5xl px-6 sm:px-8">
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
        </div>
      </div>

      {/* 打印版：专为 A4 设计的简历，导出 PDF 时显示 */}
      <PrintResume />
    </MotionConfig>
  )
}