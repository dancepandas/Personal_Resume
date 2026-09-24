import { motion, useReducedMotion } from 'framer-motion'
import { Brain, Bot, Scan, BookOpen } from 'lucide-react'
import { heroIntro, highlights, profile } from '../content'
import { fadeUp, heroFrom, heroSeq } from '../lib/motion'

const iconMap = { Brain, Bot, Scan, BookOpen }

// 四条能力各配一个 iOS 系统色（蓝/靛/绿/橙）——白卡太多的解法是色彩节奏，
// 四张卡各一个颜色，扫一眼就能分开四条能力线。
const cardTones = [
  { bg: 'bg-accent/10', fg: 'text-accent' },
  { bg: 'bg-[#5e5ce6]/10', fg: 'text-[#5e5ce6]' },
  { bg: 'bg-success/10', fg: 'text-success' },
  { bg: 'bg-warning/15', fg: 'text-warning' },
] as const

/**
 * 首屏 —— 整页唯一需要的屏：左栏身份（头像/名字/简介/CTA/实绩），
 * 右栏四条能力卡（2×2）。「关于」板块已并入简介句，不再单列 —
 * 进来一屏即完成初步了解。
 */
export default function Hero() {
  const reduced = useReducedMotion()
  const step = (i: number) => (reduced ? { duration: 0 } : heroSeq(i))

  return (
    <section id="top" className="pt-10 pb-16 sm:pt-14 sm:pb-20">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_430px] lg:gap-14">
        {/* 左：身份 */}
        <div>
          <motion.div
            initial={heroFrom}
            animate={{ opacity: 1, y: 0 }}
            transition={step(0)}
            className="flex items-center gap-5 sm:gap-6"
          >
            <img
              src={profile.avatar}
              alt={profile.name}
              className="h-[72px] w-[72px] flex-none rounded-full object-cover ring-2 ring-line sm:h-24 sm:w-24"
            />
            <div className="min-w-0">
              <h1 className="text-4xl font-semibold tracking-tight text-ink-800 sm:text-6xl">
                {profile.name}
              </h1>
              <p className="mt-1 truncate text-lg font-medium text-ink-800 sm:mt-2 sm:text-2xl">
                {profile.tagline}
              </p>
            </div>
          </motion.div>

          <motion.p
            initial={heroFrom}
            animate={{ opacity: 1, y: 0 }}
            transition={step(1)}
            className="mt-3 text-[15px] text-ink-400"
          >
            {profile.title} · {profile.location}
          </motion.p>

          <motion.p
            initial={heroFrom}
            animate={{ opacity: 1, y: 0 }}
            transition={step(2)}
            className="mt-5 max-w-xl text-[16px] leading-body text-ink-500"
          >
            {heroIntro}
          </motion.p>

          <motion.div
            initial={heroFrom}
            animate={{ opacity: 1, y: 0 }}
            transition={step(3)}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <a
              href="#opensource"
              className="rounded-full bg-accent px-5 py-2.5 text-[14px] font-medium text-white transition-all hover:opacity-90 active:scale-[0.97]"
            >
              查看开源项目
            </a>
            <a
              href="#experience"
              className="rounded-full bg-ink-100 px-5 py-2.5 text-[14px] font-medium text-ink-800 transition-colors hover:bg-ink-200/70 active:scale-[0.97]"
            >
              工作经历
            </a>
          </motion.div>

          {/* 实绩行 */}
          <motion.p
            initial={heroFrom}
            animate={{ opacity: 1, y: 0 }}
            transition={step(4)}
            className="tnum mt-8 text-[13px] text-ink-400"
          >
            10 个开源仓库<span className="mx-2 text-line">·</span>3 项授权专利
            <span className="mx-2 text-line">·</span>3 篇中文核心
            <span className="mx-2 text-line">·</span>24h 洪水预见期
          </motion.p>
        </div>

        {/* 右：四条能力卡（2×2）—— 首屏右侧的能力速览 */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:gap-3.5">
          {highlights.map((h, i) => {
            const Icon = iconMap[h.icon as keyof typeof iconMap]
            const tone = cardTones[i % cardTones.length]
            return (
              <motion.div
                key={h.title}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                animate="visible"
                className="card card-hover p-5"
              >
                <span className={`inline-flex rounded-xl p-2 ${tone.bg}`}>
                  <Icon size={20} strokeWidth={1.8} className={tone.fg} />
                </span>
                <h3 className="mt-3 text-[15px] font-semibold text-ink-800">{h.title}</h3>
                <p className="mt-1 text-[13px] leading-relaxed text-ink-400">{h.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
