import { motion } from 'framer-motion'
import { skills } from '../content'
import { fadeUp, viewportOnce } from '../lib/motion'
import SectionHeading from './SectionHeading'

/**
 * 技术栈 —— 灰底分组列表（Apple 设置页式）：灰容器 + 行内分隔线 + 白 chip。
 * 白带上的灰块与灰带上的白卡互为反转，是"卡片太多"的解法之一。
 */
export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-24">
      <SectionHeading title="技术栈" subtitle="四个领域，全部在项目上用过" />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-10 divide-y divide-line/60 rounded-[22px] bg-ink-100/70"
      >
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="grid grid-cols-1 gap-x-8 gap-y-3 px-6 py-6 sm:grid-cols-[10rem_1fr] sm:px-7"
          >
            <div className="pt-0.5 text-[14px] font-semibold text-ink-800">{category}</div>
            <div className="flex flex-wrap gap-1.5">
              {items.map((s) => (
                <span key={s} className="chip bg-paper">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
