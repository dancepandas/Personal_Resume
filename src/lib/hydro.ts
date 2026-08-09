// 洪水过程线（hydrograph）生成器 —— 网站的测站仪表语言
// Q(t) 用对数正态型曲线：起涨 → 陡涨至峰 → 退水，是洪水预报的典型器物

export type Pt = { x: number; y: number }

/** 由采样点生成平滑 Catmull-Rom → Bezier 路径 */
export function smoothPath(pts: Pt[]): string {
  if (pts.length < 2) return ''
  let d = `M ${pts[0].x.toFixed(2)} ${pts[0].y.toFixed(2)}`
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[Math.max(0, i - 1)]
    const p1 = pts[i]
    const p2 = pts[i + 1]
    const p3 = pts[Math.min(pts.length - 1, i + 2)]
    const c1x = p1.x + (p2.x - p0.x) / 6
    const c1y = p1.y + (p2.y - p0.y) / 6
    const c2x = p2.x - (p3.x - p1.x) / 6
    const c2y = p2.y - (p3.y - p1.y) / 6
    d += ` C ${c1x.toFixed(2)} ${c1y.toFixed(2)}, ${c2x.toFixed(2)} ${c2y.toFixed(2)}, ${p2.x.toFixed(2)} ${p2.y.toFixed(2)}`
  }
  return d
}

const MU = 0.72
const SIGMA = 0.5

/** 对数正态型洪水过程线采样点 */
export function hydroPoints(
  W = 1000,
  H = 240,
  n = 120,
): Pt[] {
  const marginX = 12
  const yBase = H - 40 // 基流线
  const amp = (H - 60) * 0.9 // 洪峰振幅
  const pts: Pt[] = []
  for (let i = 0; i < n; i++) {
    const t = i / (n - 1)
    const x = marginX + t * (W - 2 * marginX)
    const u = t * 4 + 0.001
    const q = Math.exp(-((Math.log(u) - MU) ** 2) / (2 * SIGMA * SIGMA))
    const y = yBase - q * amp
    pts.push({ x, y })
  }
  return pts
}

export function hydroPath(W = 1000, H = 240): string {
  return smoothPath(hydroPoints(W, H))
}
