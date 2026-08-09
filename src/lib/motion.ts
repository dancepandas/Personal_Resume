import type { Variants } from 'framer-motion'

// 极简 fade-in + slide-up，所有组件复用
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
}

export const stagger = (delay = 0.1): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: delay, delayChildren: 0.05 },
  },
})

export const viewportOnce = { once: true, margin: '-80px' }

// 文字遮罩扫入：clip-path 从右往左揭开。仪表式的入场，不像弹簧。
export const revealText: Variants = {
  hidden: { clipPath: 'inset(0 100% 0 0)' },
  visible: {
    clipPath: 'inset(0 0% 0 0)',
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}