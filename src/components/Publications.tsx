import { FileText, Award } from 'lucide-react'
import { publications } from '../content'
import { SectionHeading } from './About'

export default function Publications() {
  return (
    <section id="publications" className="border-t border-ink-100 py-20">
      <SectionHeading title="研究成果" subtitle="Publications & Patents" />

      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <div className="flex items-center gap-2 text-ink-900">
            <FileText size={18} strokeWidth={1.5} />
            <h3 className="text-base font-semibold">论文</h3>
          </div>
          <ul className="mt-4 space-y-2.5">
            {publications.papers.map((p, i) => (
              <li key={i} className="-ml-4 flex gap-3 text-sm leading-body text-ink-600">
                <span className="mt-2 inline-block h-1 w-1 flex-none rounded-full bg-ink-300" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex items-center gap-2 text-ink-900">
            <Award size={18} strokeWidth={1.5} />
            <h3 className="text-base font-semibold">专利</h3>
          </div>
          <ul className="mt-4 space-y-2.5">
            {publications.patents.map((p, i) => (
              <li key={i} className="-ml-4 flex gap-3 text-sm leading-body text-ink-600">
                <span className="mt-2 inline-block h-1 w-1 flex-none rounded-full bg-ink-300" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
