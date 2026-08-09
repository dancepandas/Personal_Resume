import { Github, Mail, ArrowUp } from 'lucide-react'
import { profile } from '../content'

export default function Contact() {
  return (
    <footer className="mt-12 border-t border-ink-100 bg-ink-50/50">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
              期待聊聊
            </h2>
            <p className="mt-3 max-w-md text-ink-600">
              水利 AI · 时序建模 · Agent 工程方向。欢迎同行交流，也期待合适的机会，随时联系我。
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 text-ink-900 transition-opacity hover:opacity-60"
            >
              <Mail size={16} className="text-ink-400 transition-colors group-hover:text-accent" />
              <span className="font-mono">{profile.email}</span>
            </a>
            <a
              href={`https://github.com/${profile.github}`}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 text-ink-900 transition-opacity hover:opacity-60"
            >
              <Github size={16} className="text-ink-400 transition-colors group-hover:text-accent" />
              <span className="font-mono">github.com/{profile.github}</span>
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-2 border-t border-ink-200 pt-6 text-xs text-ink-500 sm:flex-row sm:items-center">
          <div>
            © {new Date().getFullYear()} {profile.name} · Built with React + Vite + TailwindCSS
          </div>
          <a
            href="#top"
            className="inline-flex items-center gap-1 transition-colors hover:text-ink-900"
          >
            <ArrowUp size={12} />
            回到顶部
          </a>
        </div>
      </div>
    </footer>
  )
}