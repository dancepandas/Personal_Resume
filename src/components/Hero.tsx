import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { heroIntro, profile } from '../content'
import { heroFrom, heroSeq } from '../lib/motion'
import DotCutPanel from './DotCutPanel'

// 名字下方的打字机循环。reduced-motion 时定格在第一项,不打字不闪烁。
// 时序:输入 ~60ms/字 → 停 1800ms → 退格 ~30ms/字 → 切下一词。
function Typewriter({
  words,
  className,
}: {
  words: readonly string[]
  className?: string
}) {
  const reduced = useReducedMotion()
  const [idx, setIdx] = useState(0)
  const [text, setText] = useState(reduced ? words[0] ?? '' : '')

  useEffect(() => {
    if (reduced) return
    const word = words[idx % words.length]
    if (!word) return
    let typing: number | undefined
    let hold: number | undefined
    let erasing: number | undefined

    let i = 0
    const type = () => {
      if (i <= word.length) {
        setText(word.slice(0, i))
        i += 1
        typing = window.setTimeout(type, 60)
      } else {
        hold = window.setTimeout(() => {
          const erase = () => {
            if (i > 0) {
              i -= 1
              setText(word.slice(0, i))
              erasing = window.setTimeout(erase, 30)
            } else {
              setIdx((x) => x + 1)
            }
          }
          erase()
        }, 1800)
      }
    }
    type()
    return () => {
      if (typing) clearTimeout(typing)
      if (hold) clearTimeout(hold)
      if (erasing) clearTimeout(erasing)
    }
  }, [idx, reduced, words])

  return (
    <span className={className}>
      {text}
      {!reduced && (
        <span
          aria-hidden="true"
          className="ml-[1px] inline-block h-[1em] w-[7px] -mb-[0.18em] bg-current opacity-70"
        />
      )}
    </span>
  )
}

/**
 * 首屏是整页唯一编排过入场序列的地方：状态 → 头像与名字 → 打字机 → 价值一句 → 两个 CTA，
 * 依次落位（heroSeq 给定下标）。其余板块没有入场动画，只在标题上做一次 clip 揭开。
 */
export default function Hero() {
  const reduced = useReducedMotion()
  const step = (i: number) => (reduced ? { duration: 0 } : heroSeq(i))

  return (
    <section id="top" className="pt-12 pb-16 sm:pt-16 sm:pb-20">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-14">
        {/* 左：正文 —— 状态、名字、价值一句话、两个 CTA（≤4 个文本元素） */}
        <div className="space-y-5">
          <motion.div
            initial={heroFrom}
            animate={{ opacity: 1, y: 0 }}
            transition={step(0)}
            className="flex items-center gap-2.5"
          >
            <span className="relative flex h-2 w-2">
              {!reduced && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              )}
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="text-sm text-ink-500">Open to opportunities · 武汉</span>
          </motion.div>

          {/* 头像放在名字上方而不是左边：放左边会把「程帅」推到 x=212，
              而全页正文的左边缘是 96（容器内边距），名字就成了唯一不在这条线上的元素。 */}
          <motion.div
            initial={heroFrom}
            animate={{ opacity: 1, y: 0 }}
            transition={step(1)}
          >
            <img
              src={profile.avatar}
              alt={profile.name}
              className="h-20 w-20 rounded-full object-cover ring-2 ring-ink-100 sm:h-24 sm:w-24"
            />
            <div className="mt-5 min-w-0">
              <h1 className="text-6xl font-semibold tracking-tight text-ink-900 sm:text-7xl">
                程帅
              </h1>
              <div className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-ink-400 sm:text-sm sm:tracking-[0.25em]">
                CHENG&nbsp;SHUAI&nbsp;·&nbsp;AI&nbsp;ENGINEER
              </div>
              <div className="mt-1.5 font-mono text-xs tracking-[0.08em] text-accent sm:text-sm sm:tracking-[0.1em]">
                <Typewriter
                  words={[
                    'Agent',
                    '物理约束 DL',
                    '时序建模',
                    '边缘端 ONNX',
                    '多目标调度',
                  ]}
                />
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={heroFrom}
            animate={{ opacity: 1, y: 0 }}
            transition={step(2)}
            className="max-w-measure text-lg leading-body text-ink-600"
          >
            {heroIntro}
          </motion.p>

          <motion.div
            initial={heroFrom}
            animate={{ opacity: 1, y: 0 }}
            transition={step(3)}
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
              className="inline-flex items-center gap-2 rounded-md border border-ink-200 px-4 py-2 text-sm font-medium text-ink-900 transition-all hover:border-accent/50 active:scale-[0.98]"
            >
              工作经历
            </a>
          </motion.div>
        </div>

        {/* 右：签名 —— dotcut 点阵仪表(6 场景循环,A / rings / columns / checker / boxes / bars) */}
        <motion.div
          initial={heroFrom}
          animate={{ opacity: 1, y: 0 }}
          transition={step(1)}
        >
          <div className="h-[260px] overflow-hidden rounded-lg border border-ink-100 bg-paper p-3 dark:bg-ink-50 sm:h-[300px]">
            <DotCutPanel />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
