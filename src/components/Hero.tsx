import { motion, useReducedMotion } from 'framer-motion'
import { profile } from '../content'
import { fadeUp } from '../lib/motion'
import DotCutPanel from './DotCutPanel'

export default function Hero() {
  const reduced = useReducedMotion()

  return (
    <section id="top" className="pt-12 pb-16 sm:pt-16 sm:pb-20">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-14">
        {/* 左：正文 —— 状态、名字、价值一句话、两个 CTA（≤4 个文本元素） */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="space-y-5"
        >
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              {!reduced && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              )}
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="text-sm text-ink-500">Open to opportunities · 武汉</span>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="h-20 w-20 rounded-full object-cover ring-2 ring-ink-100 sm:h-24 sm:w-24"
            />
            <div className="min-w-0">
              <h1 className="text-6xl font-semibold tracking-tight text-ink-900 sm:text-7xl">
                程帅
              </h1>
              <div className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-ink-400 sm:text-sm sm:tracking-[0.25em]">
                CHENG&nbsp;SHUAI&nbsp;·&nbsp;AI&nbsp;ENGINEER
              </div>
            </div>
          </div>

          <p className="max-w-xl text-lg leading-relaxed text-ink-600">
            从物理机理出发，把深度学习落进水利现场：洪水预报、防洪调度、水资源优化。
          </p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-3 pt-2"
          >
            <a
              href="#opensource"
              className="inline-flex items-center gap-2 rounded-md bg-ink-900 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-ink-800 active:scale-[0.98] dark:bg-ink-100 dark:text-ink-900 dark:hover:bg-ink-200"
            >
              看开源项目 →
            </a>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-md border border-ink-200 px-4 py-2 text-sm font-medium text-ink-900 transition-all hover:border-ink-400 active:scale-[0.98]"
            >
              工作经历
            </a>
          </motion.div>
        </motion.div>

        {/* 右：签名 —— dotcut 点阵仪表(6 场景循环,A / rings / columns / checker / boxes / bars) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="h-[260px] overflow-hidden rounded-lg border border-ink-100 bg-paper p-3 dark:bg-ink-50 sm:h-[300px]">
            <DotCutPanel />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
