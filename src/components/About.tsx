import { motion } from 'framer-motion'
import { Brain, Bot, Layers, BookOpen } from 'lucide-react'
import { highlights } from '../content'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'
import { HydroMark } from './Hydrograph'

const iconMap = { Brain, Bot, Layers, BookOpen }

export default function About() {
  return (
    <section id="about" className="border-t border-ink-100 py-20">
      <SectionHeading title="关于" subtitle="About" />

      <p className="mt-8 max-w-2xl text-base leading-relaxed text-ink-600">
        水文与水资源科班出身，研究方向从物理机理出发：把模型做成可解释、可部署、可演进的 AI
        系统。目前在武汉大水云做"机理 × AI"耦合的水文智能系统。
      </p>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={stagger()}
        className="mt-12 grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2"
      >
        {highlights.map((h) => {
          const Icon = iconMap[h.icon as keyof typeof iconMap]
          return (
            <motion.div
              key={h.title}
              variants={fadeUp}
              transition={{ duration: 0.4 }}
              className="group flex items-start gap-4"
            >
              <div className="mt-0.5 rounded-md bg-ink-50 p-2.5 text-ink-700 transition-colors group-hover:bg-accent group-hover:text-white">
                <Icon size={20} strokeWidth={1.5} />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-medium text-ink-900">{h.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-500">{h.desc}</p>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}

/**
 * 区块标题。
 * 传 tag 时为"测站铭牌"样式（迷你过程线 + 等宽英文标签），受 eyebrow 纪律限制，只能少量使用；
 * 不传 tag 时为纯标题，靠板块自身布局区分。
 */
export function SectionHeading({
  tag,
  title,
  subtitle,
}: {
  tag?: string
  title: string
  subtitle?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.4 }}
    >
      {tag ? (
        <div className="flex items-center gap-3">
          <HydroMark className="h-3.5 w-14" />
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-400">
            {tag}
          </span>
        </div>
      ) : null}
      <div className="mt-2 flex items-baseline gap-3">
        <h2 className="text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
          {title}
        </h2>
        {subtitle && <span className="text-sm text-ink-400">/ {subtitle}</span>}
      </div>
    </motion.div>
  )
}
