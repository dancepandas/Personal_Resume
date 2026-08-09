import { motion } from 'framer-motion'
import { education } from '../content'
import { SectionHeading } from './About'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

export default function Education() {
  return (
    <section id="education" className="border-t border-ink-100 py-20">
      <SectionHeading title="教育经历" subtitle="Education" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={stagger()}
        className="mt-10 grid grid-cols-1 gap-x-8 gap-y-9 sm:grid-cols-2"
      >
        {education.map((e) => (
          <motion.div
            key={e.school}
            variants={fadeUp}
            transition={{ duration: 0.4 }}
            className="flex items-start gap-4 border-t border-ink-100 pt-5"
          >
            <div>
              <h3 className="text-lg font-semibold text-ink-900">{e.school}</h3>
              <p className="mt-1 text-sm text-ink-500">
                {e.degree} · {e.major}
              </p>
              <span className="mt-1 inline-block font-mono text-xs text-ink-400">
                {e.period}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
