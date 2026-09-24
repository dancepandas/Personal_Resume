import type { Variants } from 'framer-motion'

/** 统一缓动：起手快、收尾长 —— Apple 式"滑到位"，不是弹簧 */
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

export const viewportOnce = { once: true, margin: '-80px' }

/**
 * 淡入上浮 —— 全站统一的入场手势（opacity + 14px 位移，0.6s）。
 * 用 custom={index} 做 60ms 级联。这是 Apple 动效纪律：只做一种入场，
 * 所有元素都说同一种话，不做花样。
 */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, delay: i * 0.06 },
  }),
}

/** 首屏装载 —— 级联延迟给 heroSeq(i) */
export const heroFrom = { opacity: 0, y: 16 }
export const heroSeq = (i: number) => ({ duration: 0.6, ease: EASE, delay: 0.06 + i * 0.08 })
