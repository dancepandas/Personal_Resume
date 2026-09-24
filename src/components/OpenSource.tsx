import { Github, Lock, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { openSource } from '../content'
import { fadeUp, viewportOnce } from '../lib/motion'
import SectionHeading from './SectionHeading'
import { MetricReadout } from './MetricReadout'

type Repo = (typeof openSource)[number]

function RepoBody({ r, featured }: { r: Repo; featured?: boolean }) {
  const metrics = 'metrics' in r ? r.metrics : undefined

  return (
    <>
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
        {r.url ? (
          <Github
            size={16}
            className="flex-none text-ink-400 transition-colors group-hover:text-ink-800"
          />
        ) : (
          <Lock size={16} className="flex-none text-ink-400" />
        )}
        <span className="text-[14px] font-semibold text-ink-800">{r.repo}</span>
        {r.highlight && (
          <span className="chip flex-none font-medium text-accent">{r.highlight}</span>
        )}
        {/* 0 星不显示 —— GitHub 自己也不显示，列 9 个「没人用」是负分 */}
        {r.stars > 0 && (
          <span className="tnum flex flex-none items-center gap-1 text-[12px] text-ink-400">
            <Star size={12} />
            {r.stars}
          </span>
        )}
      </div>

      <h3
        className={`mt-3 font-semibold text-ink-800 ${
          featured ? 'text-xl sm:text-2xl' : 'text-[17px]'
        }`}
      >
        {r.name}
      </h3>

      <p className="mt-2 max-w-measure text-[14px] leading-body text-ink-600">{r.description}</p>

      <MetricReadout metrics={metrics} />

      <div className="mt-5 flex flex-wrap gap-1.5">
        {r.tech.map((t) => (
          <span key={t} className="chip">
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
    <section id="opensource" className="py-20 sm:py-24">
      <SectionHeading title="开源项目" subtitle="十个仓库，从洪水预报到 Agent Runtime" />

      {/* 主打仓库：通栏大卡 */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="card card-hover group mt-12 p-7 sm:p-9"
      >
        {featured.url ? (
          <a href={featured.url} target="_blank" rel="noreferrer">
            <RepoBody r={featured} featured />
          </a>
        ) : (
          <RepoBody r={featured} featured />
        )}
      </motion.div>

      {/* 其余仓库：2 列卡片 */}
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {rest.map((r, i) => (
          <motion.div
            key={r.name}
            variants={fadeUp}
            custom={i + 1}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="card card-hover group p-6"
          >
            {r.url ? (
              <a href={r.url} target="_blank" rel="noreferrer" className="block">
                <RepoBody r={r} />
              </a>
            ) : (
              <RepoBody r={r} />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
