import { MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import { experience } from '../content'
import { fadeUp, viewportOnce } from '../lib/motion'
import SectionHeading from './SectionHeading'

/**
 * 工作经历 —— 白卡（灰带上的卡片浮起），卡内左时间栏 + 右成果两栏。
 * 卡片保留，单调感靠灰白交替色带和卡内排版解决。
 */
export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-24">
      <SectionHeading title="工作经历" subtitle="四段职业经历，从工程预算到水利 AI" />

      <div className="mt-10 space-y-4">
        {experience.map((e, idx) => (
          <motion.div
            key={`${e.company}-${e.period}`}
            variants={fadeUp}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="card card-hover p-6 sm:p-7"
          >
            <div className="grid grid-cols-1 gap-x-10 lg:grid-cols-[200px_1fr]">
              {/* 左：时间 + 地点（等宽数字对齐） */}
              <div className="tnum text-[13px] leading-6 text-ink-400">
                <p className="font-medium text-ink-800">{e.period}</p>
                {e.location && (
                  <p className="mt-1 flex items-center gap-1">
                    <MapPin size={12} />
                    {e.location}
                  </p>
                )}
              </div>

              {/* 右：职位 + 公司 + 成果 */}
              <div className="mt-4 min-w-0 lg:mt-0">
                <h3 className="text-[17px] font-semibold text-ink-800">
                  {e.role}
                  <span className="font-normal text-ink-400"> · {e.company}</span>
                  {idx === 0 && (
                    <span className="ml-2 rounded-full bg-accent/10 px-2 py-0.5 align-middle text-[11px] font-medium text-accent">
                      现职
                    </span>
                  )}
                </h3>
                <p className="mt-1 text-[14px] text-ink-500">{e.summary}</p>
                <ul className="mt-4 grid grid-cols-1 gap-x-10 gap-y-2 lg:grid-cols-2">
                  {e.achievements.map((a, i) => (
                    <li key={i} className="flex gap-2.5 text-[14px] leading-relaxed text-ink-600">
                      <span className="mt-[0.62em] h-1 w-1 flex-none rounded-full bg-ink-300" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
