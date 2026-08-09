import { motion } from 'framer-motion'
import { skills } from '../content'
import { SectionHeading } from './About'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

export default function Skills() {
  return (
    <section id="skills" className="border-t border-ink-100 py-20">
      <SectionHeading title="技术栈" subtitle="Skills" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={stagger()}
        className="mt-10 space-y-8"
      >
        {Object.entries(skills).map(([category, items]) => (
          <motion.div
            key={category}
            variants={fadeUp}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-[10rem_1fr]"
          >
            <div className="text-sm font-medium text-ink-900">{category}</div>
            <div className="flex flex-wrap gap-2">
              {items.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-ink-200 bg-white px-3 py-1 text-sm text-ink-700 transition-colors hover:border-ink-400 dark:bg-ink-50"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}