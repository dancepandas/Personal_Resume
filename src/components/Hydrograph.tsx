import { useEffect, useMemo } from 'react'
import { animate, motion, useMotionValue, useReducedMotion, useTransform } from 'framer-motion'
import { hydroPath, hydroPoints } from '../lib/hydro'

const VIEW_W = 1000
const VIEW_H = 240

/**
 * 洪水过程线 —— 本网站的记忆点。
 * 一条随滚动绘制的过程线，一个沿曲线缓慢巡游的 "now" 指示点，
 * 像一台在遥测站里盯着水位涨落的仪表。
 */
export function Hydrograph({ className = '' }: { className?: string }) {
  const reduced = useReducedMotion()
  const path = useMemo(() => hydroPath(VIEW_W, VIEW_H), [])
  const pts = useMemo(() => hydroPoints(VIEW_W, VIEW_H, 320), [])

  // now 指示点：基于过程线解析点插值，随 motion value 巡游
  const idx = useMotionValue(0)
  const pos = useTransform(idx, (v) => {
    const i = Math.min(pts.length - 1, Math.max(0, Math.round(v)))
    return pts[i] ?? pts[0]
  })
  const cx = useTransform(pos, (p) => p.x)
  const cy = useTransform(pos, (p) => p.y)

  useEffect(() => {
    if (reduced) return
    const controls = animate(idx, pts.length - 1, {
      duration: 14,
      ease: 'linear',
      repeat: Infinity,
    })
    return () => controls.stop()
  }, [idx, pts.length, reduced])

  return (
    <svg
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      className={className}
      role="img"
      aria-label="洪水过程线示意图：流量随时间起涨、到达洪峰后退水"
    >
      <defs>
        <linearGradient id="hydroFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.10" />
          <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.02" />
        </linearGradient>
      </defs>

      {/* 水位网格线 */}
      {[50, 100, 150, 200].map((y) => (
        <line
          key={`h${y}`}
          x1={12}
          x2={988}
          y1={y}
          y2={y}
          stroke="var(--color-ink-100)"
          strokeWidth={1}
        />
      ))}
      {/* 时间分划 */}
      {[0.25, 0.5, 0.75].map((t) => {
        const x = 12 + t * 976
        return (
          <line
            key={`t${t}`}
            x1={x}
            x2={x}
            y1={36}
            y2={200}
            stroke="var(--color-ink-100)"
            strokeWidth={1}
          />
        )
      })}
      {/* 基流线 */}
      <line x1={12} x2={988} y1={200} y2={200} stroke="var(--color-ink-200)" strokeWidth={1} strokeDasharray="2 4" />

      {/* 过程线下方淡色面积 */}
      <path d={`${path} L 988 200 L 12 200 Z`} fill="url(#hydroFill)" />

      {/* 过程线本身：滚动时绘制 */}
      <motion.path
        d={path}
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth={2.5}
        strokeLinecap="round"
        initial={reduced ? false : { pathLength: 0 }}
        whileInView={reduced ? undefined : { pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: 'easeInOut' }}
      />

      {/* now 指示点 */}
      {!reduced && (
        <motion.circle
          style={{ cx, cy }}
          r={5}
          fill="var(--color-accent)"
          stroke="#ffffff"
          strokeWidth={2}
        />
      )}
    </svg>
  )
}

/** 迷你过程线 —— 用作区块标题的测站图标（与主图共用 1000×240 坐标，按 viewBox 缩放） */
export function HydroMark({ className = '' }: { className?: string }) {
  const path = useMemo(() => hydroPath(1000, 240), [])
  return (
    <svg viewBox="0 0 1000 240" className={className} aria-hidden="true">
      <path d={path} fill="none" stroke="var(--color-accent)" strokeWidth={10} strokeLinecap="round" />
    </svg>
  )
}