import { Github, Lock, Star } from 'lucide-react'
import { openSource } from '../content'
import { SectionHeading } from './About'
import { MetricReadout } from './MetricReadout'

type Repo = (typeof openSource)[number]

function RepoBody({ r, featured }: { r: Repo; featured?: boolean }) {
  const metrics = 'metrics' in r ? r.metrics : undefined

  return (
    <>
      {/* 仓库名一行：不截断，装不下就换行 —— 把 dancepandas/Monitoring-and-Forecasting-System
          截成 "…Forecasti…" 比换行更难看 */}
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
        {r.url ? (
          <Github
            size={16}
            className="flex-none text-ink-400 transition-colors group-hover:text-ink-900"
          />
        ) : (
          <Lock size={16} className="flex-none text-ink-400" />
        )}
        <span className="font-mono text-sm font-medium text-ink-900">{r.repo}</span>
        {r.highlight && (
          <span className="flex-none whitespace-nowrap rounded-full bg-ink-900 px-2 py-0.5 text-[10px] font-medium text-white dark:bg-ink-100 dark:text-ink-900">
            {r.highlight}
          </span>
        )}
        {/* 0 星不显示 —— GitHub 自己也不显示，列 9 个「没人用」是负分 */}
        {r.stars > 0 && (
          <span className="flex flex-none items-center gap-1 font-mono text-xs text-ink-500">
            <Star size={12} />
            {r.stars}
          </span>
        )}
      </div>

      <h3 className={`mt-3 font-semibold text-ink-900 ${featured ? 'text-lg' : 'text-base'}`}>
        {r.name}
      </h3>

      <p className="mt-2 max-w-measure text-sm leading-body text-ink-600">{r.description}</p>

      <MetricReadout metrics={metrics} />

      <div className="mt-4 flex flex-wrap gap-1.5">
        {r.tech.map((t) => (
          <span key={t} className="rounded-md bg-ink-50 px-2 py-0.5 font-mono text-xs text-ink-600">
            {t}
          </span>
        ))}
      </div>
    </>
  )
}

export default function OpenSource() {
  const [featured, ...rest] = openSource

  return (
    <section id="opensource" className="border-t border-ink-100 py-20">
      <SectionHeading tag="open-source" title="开源项目" subtitle="Open Source" />

      {/* 主打仓库：通栏 + 水文蓝左边条，与「项目经历」同一套层级语言 */}
      <div className="group sm:-ml-[26px] mt-10 border-l-2 border-accent pl-6">
        {featured.url ? (
          <a href={featured.url} target="_blank" rel="noreferrer">
            <RepoBody r={featured} featured />
          </a>
        ) : (
          <RepoBody r={featured} featured />
        )}
      </div>

      {/* 其余仓库：发丝线 registry 行，不做卡片盒 —— 十个等距圆角盒是最典型的模板味 */}
      <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-9 sm:grid-cols-2">
        {rest.map((r) => (
          <div
            key={r.name}
            className="group border-t border-ink-100 pt-5 transition-colors hover:border-accent/40"
          >
            <div className="-mx-2 rounded-md px-2 pb-1 transition-colors group-hover:bg-ink-50/70 dark:group-hover:bg-ink-100/50">
              {r.url ? (
                <a href={r.url} target="_blank" rel="noreferrer" className="block">
                  <RepoBody r={r} />
                </a>
              ) : (
                <RepoBody r={r} />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
