import type { Variants } from 'framer-motion'

/** 统一缓动：起手快、收尾长，像仪表指针落位，不像弹簧 */
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

export const viewportOnce = { once: true, margin: '-80px' }

/**
 * 板块标题：clip-path 自右向左揭开。
 * 这是全站唯一的非交互入场动效 —— 每个板块用同一个手势，读起来是一套系统，不是零散特效。
 * （原本每个卡片各自 fade-up + stagger，那是模板的默认长相，而且会让板块在
 * IntersectionObserver 触发前一直是 opacity:0，滚动太快或 JS 出问题时是白屏。）
 */
export const revealText: Variants = {
  hidden: { clipPath: 'inset(0 100% 0 0)' },
  visible: {
    clipPath: 'inset(0 0% 0 0)',
    transition: { duration: 0.5, ease: EASE },
  },
}

/** 首屏装载 —— 整页唯一编排过的一次性入场序列，其余动效一律由交互触发 */
export const heroFrom = { opacity: 0, y: 14 }
export const heroSeq = (i: number) => ({ duration: 0.55, ease: EASE, delay: 0.05 + i * 0.09 })
