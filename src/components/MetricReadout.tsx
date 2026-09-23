import type { Metric } from '../content'

/**
 * 测站读数 —— 把关键指标从描述句子里提出来，排成一行等宽 label/value。
 *
 * 左侧细竖线是「仪表刻度」的暗示：读数属于这条记录，但不属于正文。
 * 数值走等宽 + tabular-nums，小数点在多行之间能对齐。
 * 没有可核指标的项目不传 metrics，这里返回 null，不留空位。
 */
export function MetricReadout({ metrics }: { metrics?: readonly Metric[] }) {
  if (!metrics?.length) return null

  return (
    <dl className="mt-4 flex flex-wrap items-baseline gap-x-7 gap-y-1.5 border-l border-ink-200 pl-3 dark:border-ink-300">
      {metrics.map((m) => (
        <div key={m.k} className="flex items-baseline gap-2">
          <dt className="font-mono text-[11px] text-ink-500">{m.k}</dt>
          <dd className="font-mono text-xs font-medium tabular-nums text-ink-900">{m.v}</dd>
        </div>
      ))}
    </dl>
  )
}
