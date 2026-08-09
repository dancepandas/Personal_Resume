import { motion } from 'framer-motion'
import { Github, Star } from 'lucide-react'
import { openSource } from '../content'
import { SectionHeading } from './About'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

export default function OpenSource() {
  const [featured, ...rest] = openSource

  return (
    <section id="opensource" className="border-t border-ink-100 py-20">
      <SectionHeading tag="open-source" title="开源项目" subtitle="Open Source" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={stagger()}
        className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2"
      >
        {[featured, ...rest].map((repo, i) => (
          <motion.a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noreferrer"
            variants={fadeUp}
            transition={{ duration: 0.4 }}
            className={`group block rounded-lg border border-ink-100 bg-white p-5 transition-all hover:border-ink-300 hover:shadow-sm dark:bg-ink-50 ${
              i === 0 ? 'sm:col-span-2' : ''
            }`}
          >
            <div className="flex items-baseline justify-between gap-3">
              <div className="flex min-w-0 items-center gap-2">
                <Github
                  size={16}
                  className="flex-none text-ink-400 transition-colors group-hover:text-ink-900"
                />
                <span className="truncate font-mono text-sm font-medium text-ink-900">
                  {repo.repo}
                </span>
                {repo.highlight && (
                  <span className="flex-none whitespace-nowrap rounded-full bg-ink-900 px-2 py-0.5 text-[10px] font-medium text-white dark:bg-ink-100 dark:text-ink-900">
                    {repo.highlight}
                  </span>
                )}
              </div>
              <span className="flex flex-none items-center gap-1 text-xs text-ink-500">
                <Star size={12} />
                {repo.stars}
              </span>
            </div>

            <h3 className="mt-3 text-base font-semibold text-ink-900">{repo.name}</h3>

            <p className="mt-2 text-sm leading-relaxed text-ink-600">{repo.description}</p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {repo.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-ink-50 px-2 py-0.5 font-mono text-xs text-ink-600"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  )
}
