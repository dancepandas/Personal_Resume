import { FileText, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import { publications } from '../content'
import { fadeUp, viewportOnce } from '../lib/motion'
import SectionHeading from './SectionHeading'

/**
 * 状态点 —— Apple 系统更新式的绿/黄点 + 灰字，"突出重点"但不喧哗。
 * 状态按条目顺序对应 content.ts 里的行 —— 改文案时这里要跟着对一遍。
 */
function Status({ done, children }: { done: boolean; children: string }) {
  return (
    <span className="flex flex-none items-center gap-1.5 text-[13px] text-ink-400">
      <span
        className={`h-2 w-2 rounded-full ${done ? 'bg-success' : 'bg-warning'}`}
        aria-hidden="true"
      />
      {children}
    </span>
  )
}

const paperStatus = [true, true, false]
const patentStatus = [true, false]

export default function Publications() {
  return (
    <section id="publications" className="py-20 sm:py-24">
      <SectionHeading title="研究成果" subtitle="论文与发明专利" />

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="card p-6 sm:p-7"
        >
          <div className="flex items-center gap-2.5 text-ink-800">
            <FileText size={18} strokeWidth={1.8} className="text-accent" />
            <h3 className="text-[17px] font-semibold">论文</h3>
          </div>
          <ul className="mt-4 divide-y divide-line/60">
            {publications.papers.map((p, i) => (
              <li key={i} className="flex items-center justify-between gap-4 py-3 text-[14px] leading-relaxed">
                <span className="text-ink-600">{p}</span>
                <Status done={paperStatus[i] ?? true}>{paperStatus[i] ? '已发表' : '审稿中'}</Status>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="card p-6 sm:p-7"
        >
          <div className="flex items-center gap-2.5 text-ink-800">
            <Award size={18} strokeWidth={1.8} className="text-accent" />
            <h3 className="text-[17px] font-semibold">专利</h3>
          </div>
          <ul className="mt-4 divide-y divide-line/60">
            {publications.patents.map((p, i) => (
              <li key={i} className="flex items-center justify-between gap-4 py-3 text-[14px] leading-relaxed">
                <span className="text-ink-600">{p}</span>
                <Status done={patentStatus[i] ?? true}>{patentStatus[i] ? '已授权' : '受理中'}</Status>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
