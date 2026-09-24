import { Github, Mail, ArrowUp } from 'lucide-react'
import { motion } from 'framer-motion'
import { profile } from '../content'
import { fadeUp, viewportOnce } from '../lib/motion'

export default function Contact() {
  return (
    <footer className="border-t border-line/60 bg-ink-100/60">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-4xl font-semibold tracking-tight text-ink-800 sm:text-5xl">
            期待聊聊
          </h2>
          <p className="mt-4 text-[17px] leading-body text-ink-500">
            水利 AI · 时序建模 · Agent 工程方向。欢迎同行交流，也期待合适的机会。
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-[15px] font-medium text-white transition-all hover:opacity-90 active:scale-[0.97]"
            >
              <Mail size={16} />
              {profile.email}
            </a>
            <a
              href={`https://github.com/${profile.github}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 text-[15px] font-medium text-ink-800 ring-1 ring-line transition-colors hover:bg-ink-50 active:scale-[0.97]"
            >
              <Github size={16} />
              github.com/{profile.github}
            </a>
          </div>
        </motion.div>

        <div className="mt-20 flex flex-col items-center justify-between gap-3 border-t border-line/60 pt-6 text-[12px] text-ink-400 sm:flex-row">
          <div>
            © {new Date().getFullYear()} {profile.name} · Built with React + Vite + TailwindCSS
          </div>
          <a
            href="#top"
            className="inline-flex items-center gap-1 transition-colors hover:text-ink-800"
          >
            <ArrowUp size={12} />
            回到顶部
          </a>
        </div>
      </div>
    </footer>
  )
}
