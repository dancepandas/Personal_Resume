import { motion } from 'framer-motion'
import { education } from '../content'
import { fadeUp, viewportOnce } from '../lib/motion'
import SectionHeading from './SectionHeading'

export default function Education() {
  return (
    <section id="education" className="py-20 sm:py-24">
      <SectionHeading title="教育经历" subtitle="水利工程科班，水文与水资源方向" />

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {education.map((e, i) => (
          <motion.div
            key={e.school}
            variants={fadeUp}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="card card-hover flex items-center gap-5 p-6"
          >
            {e.logo && (
              <div className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-paper ring-1 ring-black/5">
                <img src={e.logo} alt={`${e.school}校徽`} className="h-9 w-9 object-contain" />
              </div>
            )}
            <div className="min-w-0 flex-1">
              <h3 className="text-[17px] font-semibold text-ink-800">{e.school}</h3>
              <p className="mt-0.5 text-[14px] text-ink-400">
                {e.degree} · {e.major}
              </p>
            </div>
            <span className="tnum flex-none text-[13px] text-ink-400">{e.period}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
