import { education } from '../content'
import { SectionHeading } from './About'

export default function Education() {
  return (
    <section id="education" className="border-t border-ink-100 py-20">
      <SectionHeading title="教育经历" subtitle="Education" />

      <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-9 sm:grid-cols-2">
        {education.map((e) => (
          <div
            key={e.school}
            className="border-t border-ink-100 pt-5 transition-colors hover:border-accent/40"
          >
            {/* 校徽放在校名上方而不是左边：放左边会把校名推到 160px，
                而其它板块正文都在 96px。 */}
            {e.logo && (
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white p-1.5 dark:bg-ink-50">
                <img
                  src={e.logo}
                  alt={`${e.school}校徽`}
                  className="h-full w-full object-contain"
                />
              </div>
            )}
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-ink-900">{e.school}</h3>
              <p className="mt-1 text-sm leading-body text-ink-500">
                {e.degree} · {e.major}
              </p>
              <span className="mt-1 inline-block font-mono text-xs text-ink-400">
                {e.period}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
