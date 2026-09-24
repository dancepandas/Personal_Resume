import type { Metric } from '../content'

/**
 * 指标读数 —— Apple 式：去掉装饰线，小灰 label + 半粗 value，等宽数字对齐。
 * 没有可核指标的项目不传 metrics，这里返回 null，不留空位。
 */
export function MetricReadout({ metrics }: { metrics?: readonly Metric[] }) {
  if (!metrics?.length) return null

  return (
    <dl className="mt-5 flex flex-wrap items-baseline gap-x-6 gap-y-2">
      {metrics.map((m) => (
        <div key={m.k} className="flex items-baseline gap-2">
          <dt className="text-[12px] text-ink-400">{m.k}</dt>
          <dd className="tnum text-[14px] font-semibold text-ink-800">{m.v}</dd>
        </div>
      ))}
    </dl>
  )
}
