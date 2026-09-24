import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { projects } from '../content'
import { fadeUp, viewportOnce } from '../lib/motion'
import SectionHeading from './SectionHeading'
import { MetricReadout } from './MetricReadout'

type Project = (typeof projects)[number]

function ProjectBody({ p, featured }: { p: Project; featured?: boolean }) {
  const metrics = 'metrics' in p ? p.metrics : undefined

  return (
    <>
      <div className="flex items-start justify-between gap-2">
        <h3
          className={`font-semibold text-ink-800 ${
            featured ? 'text-xl sm:text-2xl' : 'text-[17px]'
          }`}
        >
          {p.name}
        </h3>
        {p.link && (
          <ArrowUpRight
            size={18}
            className="flex-none text-ink-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
          />
        )}
      </div>

      <p className="tnum mt-1.5 text-[13px] text-ink-400">
        {p.period} · {p.role}
      </p>

      <p className="mt-3 max-w-measure text-[14px] leading-body text-ink-600">{p.description}</p>

      <MetricReadout metrics={metrics} />

      <div className="mt-5 flex flex-wrap gap-1.5">
        {p.tags.map((t) => (
          <span key={t} className="chip">
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
    <section id="projects" className="py-20 sm:py-24">
      <SectionHeading title="项目经历" subtitle="八个交付项目，业主内网与开源双线" />

      {/* 主打项目：通栏大卡 */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="card card-hover group mt-12 p-7 sm:p-9"
      >
        {featured.link ? (
          <a href={featured.link} target="_blank" rel="noreferrer">
            <ProjectBody p={featured} featured />
          </a>
        ) : (
          <ProjectBody p={featured} featured />
        )}
      </motion.div>

      {/* 其余项目：2 列卡片（白带上的白卡靠阴影浮起） */}
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {rest.map((p, i) => (
          <motion.div
            key={p.name}
            variants={fadeUp}
            custom={i + 1}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="card card-hover group p-6"
          >
            {p.link ? (
              <a href={p.link} target="_blank" rel="noreferrer" className="block">
                <ProjectBody p={p} />
              </a>
            ) : (
              <ProjectBody p={p} />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
