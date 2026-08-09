import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../content'
import { SectionHeading } from './About'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

type Project = (typeof projects)[number]

function ProjectBody({ p, featured }: { p: Project; featured?: boolean }) {
  return (
    <>
      <div className="flex items-start justify-between gap-2">
        <h3 className={`font-semibold text-ink-900 ${featured ? 'text-lg' : 'text-base'}`}>
          {p.name}
        </h3>
        {p.link && (
          <ArrowUpRight
            size={16}
            className="flex-none text-ink-400 transition-colors group-hover:text-accent"
          />
        )}
      </div>

      <div className="mt-2 flex items-center gap-2 text-xs text-ink-500">
        <span className="font-mono">{p.period}</span>
        <span className="h-1 w-1 rounded-full bg-ink-300" />
        <span>{p.role}</span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-ink-600">{p.description}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {p.tags.map((t) => (
          <span
            key={t}
            className="rounded-md bg-ink-50 px-2 py-0.5 font-mono text-xs text-ink-600"
          >
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
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={stagger()}
        className="mt-10 space-y-12"
      >
        <motion.div variants={fadeUp} transition={{ duration: 0.4 }}>
          <div className="group border-l-2 border-accent pl-5">
            {featured.link ? (
              <a href={featured.link} target="_blank" rel="noreferrer">
                <ProjectBody p={featured} featured />
              </a>
            ) : (
              <ProjectBody p={featured} featured />
            )}
          </div>
        </motion.div>

        {/* 其余项目：2 列 registry 行，顶部发丝线，无卡片盒 */}
        <motion.div
          variants={stagger()}
          className="grid gap-x-8 gap-y-9 sm:grid-cols-2"
        >
          {rest.map((p) => (
            <motion.div
              key={p.name}
              variants={fadeUp}
              transition={{ duration: 0.4 }}
              className="group border-t border-ink-100 pt-5"
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
        </motion.div>
      </motion.div>
    </section>
  )
}
