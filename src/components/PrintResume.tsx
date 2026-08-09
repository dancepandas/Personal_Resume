import {
  profile,
  skills,
  experience,
  projects,
  education,
  publications,
} from '../content'

/**
 * 打印版简历 —— 专为 A4 设计的紧凑版式。
 * 屏幕上看不见（hidden），打印/导出 PDF 时显示（print:block）。
 * 直接渲染 content.ts，与网页同源，因此导出的 PDF 永远与网站最新内容一致。
 */
export default function PrintResume() {
  return (
    <div
      data-print-resume
      aria-hidden="true"
      // 屏幕：定位到屏幕外（保留布局供 PDF 下载捕获），不占空间不挡交互
      // 打印：回到正常文档流，配合 @media print 输出 A4
      className="pointer-events-none fixed left-[-99999px] top-0 z-[-1] w-[665px] print:static print:left-0 print:z-auto print:pointer-events-auto print:w-auto"
    >
      <div className="mx-auto max-w-[176mm] text-[9.5pt] leading-snug text-ink-900">
        {/* 头部 */}
        <header className="flex items-start justify-between gap-4 border-b-2 border-ink-900 pb-2.5">
          <div className="min-w-0 flex-1">
            <h1 className="text-[20pt] font-bold leading-none tracking-tight">
              程帅
              <span className="ml-2 text-[11pt] font-normal text-ink-600">
                Cheng Shuai · AI Engineer
              </span>
            </h1>
            <p className="mt-1.5 text-[8.5pt] text-ink-700">
              {profile.location} · {profile.email} · github.com/{profile.github}
            </p>
            <p className="mt-1.5 text-[9pt] leading-snug text-ink-800">
              {profile.summary}
            </p>
          </div>
          <img
            src={profile.avatar}
            alt=""
            className="h-[20mm] w-[20mm] shrink-0 rounded-sm border border-ink-200 object-cover"
          />
        </header>

        {/* 技术栈 */}
        <section className="mt-3 break-inside-avoid">
          <h2 className="mb-1 text-[10pt] font-bold uppercase tracking-wider">
            技术栈
          </h2>
          {Object.entries(skills).map(([cat, items]) => (
            <p key={cat} className="mb-0.5 text-[8.5pt]">
              <span className="font-semibold">{cat}：</span>
              {items.join(' · ')}
            </p>
          ))}
        </section>

        {/* 工作经历 */}
        <section className="mt-3">
          <h2 className="mb-1.5 text-[10pt] font-bold uppercase tracking-wider">
            工作经历
          </h2>
          {experience.map((e) => (
            <div key={`${e.company}-${e.period}`} className="mb-2.5 break-inside-avoid">
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-[9.5pt] font-semibold">
                  {e.role} · {e.company}
                </span>
                <span className="shrink-0 text-[8.5pt] text-ink-500">{e.period}</span>
              </div>
              {e.summary && <p className="text-[8.5pt] text-ink-600">{e.summary}</p>}
              <ul className="mt-0.5 list-disc pl-4 text-[8.5pt] leading-snug">
                {e.achievements.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* 项目经历 */}
        <section className="mt-3">
          <h2 className="mb-1.5 text-[10pt] font-bold uppercase tracking-wider">
            项目经历
          </h2>
          {projects.map((p) => (
            <div key={p.name} className="mb-2 break-inside-avoid">
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-[9.5pt] font-semibold">
                  {p.name}
                  <span className="font-normal text-ink-600"> · {p.role}</span>
                </span>
                <span className="shrink-0 text-[8.5pt] text-ink-500">{p.period}</span>
              </div>
              <p className="text-[8.5pt] leading-snug text-ink-800">{p.description}</p>
              <p className="mt-0.5 text-[8pt] text-ink-500">{p.tags.join(' · ')}</p>
            </div>
          ))}
        </section>

        {/* 教育 + 研究成果（双栏，尽量同页） */}
        <section className="mt-3 grid grid-cols-2 gap-6">
          <div className="break-inside-avoid">
            <h2 className="mb-1.5 text-[10pt] font-bold uppercase tracking-wider">
              教育经历
            </h2>
            {education.map((e) => (
              <div key={e.school} className="mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-[9pt] font-semibold">{e.school}</span>
                </div>
                <div className="flex items-baseline justify-between gap-3">
                  <p className="text-[8.5pt] text-ink-600">
                    {e.degree} · {e.major}
                  </p>
                  <span className="shrink-0 text-[8.5pt] text-ink-500">{e.period}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="break-inside-avoid">
            <h2 className="mb-1.5 text-[10pt] font-bold uppercase tracking-wider">
              研究成果
            </h2>
            <p className="text-[8.5pt] font-semibold text-ink-800">论文</p>
            <ul className="mb-1.5 list-disc pl-4 text-[8.5pt] leading-snug">
              {publications.papers.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
            <p className="text-[8.5pt] font-semibold text-ink-800">专利</p>
            <ul className="list-disc pl-4 text-[8.5pt] leading-snug">
              {publications.patents.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}
