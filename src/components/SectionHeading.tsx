import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../lib/motion'

/**
 * 区块标题 —— Apple 式：大标题 + 一行灰色副题，不加序号、不加装饰线。
 * 层级全靠字重和灰度，"突出重点"靠副题一句话说清这个板块是什么。
 */
export default function SectionHeading({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <h2 className="text-3xl font-semibold tracking-tight text-ink-800 sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-2 text-base text-ink-400">{subtitle}</p>}
    </motion.div>
  )
}
