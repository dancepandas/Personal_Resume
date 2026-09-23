import { skills } from '../content'
import { SectionHeading } from './About'

export default function Skills() {
  return (
    <section id="skills" className="border-t border-ink-100 py-20">
      <SectionHeading title="技术栈" subtitle="Skills" />

      <div className="mt-10 space-y-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="grid grid-cols-1 gap-4 sm:grid-cols-[10rem_1fr]">
            <div className="text-sm font-medium text-ink-900">{category}</div>
            <div className="flex flex-wrap gap-2">
              {items.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-ink-200 bg-white px-3 py-1 text-sm text-ink-700 transition-colors hover:border-accent/50 hover:text-ink-900 dark:bg-ink-50"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
