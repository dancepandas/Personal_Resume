import { useMemo } from 'react'
import { hydroPath } from '../lib/hydro'

/**
 * 迷你过程线 —— 用作区块标题的测站图标（与 dotcut 仪表卡配套出现，仍保留作为栏目铭牌）。
 */
export function HydroMark({ className = '' }: { className?: string }) {
  const path = useMemo(() => hydroPath(1000, 240), [])
  return (
    <svg viewBox="0 0 1000 240" className={className} aria-hidden="true">
      <path d={path} fill="none" stroke="var(--color-accent)" strokeWidth={10} strokeLinecap="round" />
    </svg>
  )
}