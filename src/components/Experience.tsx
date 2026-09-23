import { MapPin } from 'lucide-react'
import { experience } from '../content'
import { SectionHeading } from './About'

export default function Experience() {
  return (
    <section id="experience" className="border-t border-ink-100 py-20">
      <SectionHeading tag="experience" title="工作经历" subtitle="Experience" />

      {/* 单栏，日期压在职位上方 —— 原来日期占左侧 12rem 栏，把职位/概要/每条经历
          全推到 x=320，而「关于」整块在 96，两段读起来就是没对齐。
          -ml-[26px] 把时间轴竖线（2px 边框 + pl-6 的 24px）挪进左侧留白，
          竖线落在 70px，仍在外层容器的内边距里，不会碰到屏幕边缘。 */}
      <ol className="mt-10 space-y-10 sm:-ml-[26px]">
        {experience.map((e, idx) => (
          <li
            key={`${e.company}-${e.period}`}
            className="relative border-l-2 border-ink-100 pl-6 transition-colors hover:border-accent/40"
          >
            <span className="absolute -left-[5px] top-2 h-2 w-2 rounded-full bg-accent" />

            <div className="flex flex-wrap items-center gap-x-2 font-mono text-xs text-ink-500">
              <span className="text-ink-900">{e.period}</span>
              {e.location && (
                <span className="inline-flex items-center gap-1">
                  <MapPin size={12} />
                  {e.location}
                </span>
              )}
            </div>

            <div className="mt-1.5 flex flex-wrap items-baseline gap-x-2">
              <h3 className="text-lg font-semibold text-ink-900">{e.role}</h3>
              <span className="text-ink-500">@ {e.company}</span>
              {idx === 0 && (
                <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                  当前
                </span>
              )}
            </div>

            <p className="mt-1 text-sm leading-body text-ink-600">{e.summary}</p>

            <ul className="mt-4 max-w-measure space-y-2">
              {e.achievements.map((a, i) => (
                <li key={i} className="flex gap-3 text-sm leading-body text-ink-700">
                  <span className="mt-1.5 inline-block h-1 w-1 flex-none rounded-full bg-ink-300" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  )
}
