import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { experience } from '../content'
import { SectionHeading } from './About'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

export default function Experience() {
  return (
    <section id="experience" className="border-t border-ink-100 py-20">
      <SectionHeading tag="experience" title="工作经历" subtitle="Experience" />

      <motion.ol
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={stagger()}
        className="mt-10 space-y-10"
      >
        {experience.map((e, idx) => (
          <motion.li
            key={`${e.company}-${e.period}`}
            variants={fadeUp}
            transition={{ duration: 0.4 }}
            className="relative grid gap-4 border-l-2 border-ink-100 pl-6 sm:grid-cols-[12rem_1fr] sm:gap-8"
          >
            <span className="absolute -left-[5px] top-2 h-2 w-2 rounded-full bg-accent" />

            <div className="text-sm">
              <div className="font-mono text-ink-900">{e.period}</div>
              {e.location && (
                <div className="mt-1 inline-flex items-center gap-1 text-ink-500">
                  <MapPin size={12} />
                  {e.location}
                </div>
              )}
            </div>

            <div>
              <div className="flex flex-wrap items-baseline gap-x-2">
                <h3 className="text-lg font-semibold text-ink-900">{e.role}</h3>
                <span className="text-ink-500">@ {e.company}</span>
              </div>
              <p className="mt-1 text-sm text-ink-600">{e.summary}</p>
              {idx === 0 && (
                <span className="mt-3 inline-block rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                  当前
                </span>
              )}
              <ul className="mt-4 space-y-2">
                {e.achievements.map((a, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink-700">
                    <span className="mt-1.5 inline-block h-1 w-1 flex-none rounded-full bg-ink-300" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </section>
  )
}