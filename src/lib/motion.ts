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