import { ArrowUpRight } from 'lucide-react'
import { projects } from '../content'
import { SectionHeading } from './About'
import { MetricReadout } from './MetricReadout'

type Project = (typeof projects)[number]

function ProjectBody({ p, featured }: { p: Project; featured?: boolean }) {
  const metrics = 'metrics' in p ? p.metrics : undefined

  return (
    <>
      <div className="flex items-start justify-between gap-2">
        <h3 className={`font-semibold text-ink-900 ${featured ? 'text-lg' : 'text-base'}`}>
          {p.name}
        </h3>
        {p.link && (
          <ArrowUpRight
            size={16}
            className="flex-none text-ink-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
          />
        )}
      </div>

      <div className="mt-2 flex flex-wrap items-center gap-2 font-mono text-xs text-ink-500">
        <span>{p.period}</span>
        <span className="h-1 w-1 rounded-full bg-ink-300" />
        <span className="font-sans">{p.role}</span>
      </div>

      <p className="mt-3 max-w-measure text-sm leading-body text-ink-600">{p.description}</p>

      <MetricReadout metrics={metrics} />

      <div className="mt-4 flex flex-wrap gap-1.5">
        {p.tags.map((t) => (
          <span key={t} className="rounded-md bg-ink-50 px-2 py-0.5 font-mono text-xs text-ink-600">
            {t}
          </span>
        ))}
      </div>
    </>
  )
}

export default function Projects() {
  const [featured, ...rest] = projects

  return (
    <section id="projects" className="border-t border-ink-100 py-20">
      <SectionHeading title="项目经历" subtitle="Projects" />

      {/* 主打项目：通栏 + 水文蓝左边条，压出层级 */}
      <div className="group sm:-ml-[26px] mt-10 border-l-2 border-accent pl-6">
        {featured.link ? (
          <a href={featured.link} target="_blank" rel="noreferrer">
            <ProjectBody p={featured} featured />
          </a>
        ) : (
          <ProjectBody p={featured} featured />
        )}
      </div>

      {/* 其余项目：2 列 registry 行，顶部发丝线，无卡片盒。
          悬停时那道发丝线亮成水文蓝 —— 像水尺上被读到的那一格 */}
      <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-9 sm:grid-cols-2">
        {rest.map((p) => (
          <div
            key={p.name}
            className="group border-t border-ink-100 pt-5 transition-colors hover:border-accent/40"
          >
            <div className="-mx-2 rounded-md px-2 pb-1 transition-colors group-hover:bg-ink-50/70 dark:group-hover:bg-ink-100/50">
              {p.link ? (
                <a href={p.link} target="_blank" rel="noreferrer" className="block">
                  <ProjectBody p={p} />
                </a>
              ) : (
                <ProjectBody p={p} />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
