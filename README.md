# 程帅 · 个人简介网站

个人简介 / 简历单页网站，展示工作经历、项目经历、开源项目、技术栈与研究成果。

## 技术栈

- **Vite 6** + **React 19** + **TypeScript**
- **TailwindCSS 4**（CSS-first 配置，见 `src/index.css`）
- **Framer Motion** — 滚动渐入动效
- **react-type-animation** — Hero 打字机效果
- **Lucide Icons** — 图标

## 本地开发

```bash
npm install
npm run dev      # http://localhost:5173
```

## 构建

```bash
npm run build    # 产物在 dist/
npm run preview  # 本地预览构建产物
```

构建产物是**纯静态文件**，可部署到任意静态托管：

- **Vercel** / **Netlify**：导入本仓库即可，构建命令 `npm run build`，输出目录 `dist`
- **GitHub Pages**：推送到仓库后开 GitHub Pages，或直接部署 dist/ 内容

## 内容维护

所有文案集中在 **`src/content.ts`**（工作经历、项目、开源仓库、技能、教育、论文专利），改这一个文件即可，无需动组件。

个人信息字段（姓名、邮箱、GitHub、头像、简介）在 `content.ts` 顶部的 `profile` 对象。

头像：放到 `public/avatar.jpg`（当前未提供，缺失时 Hero 不展示头像，布局不受影响）。

## 下载 PDF

页面右上角（以及 Hero 区）有"下载 PDF"按钮：点击后**直接下载**一份 A4 简历 PDF（`程帅简历-YYYY-MM-DD.pdf`），无需弹打印框。

- **内容永远与网站同步**：打印/下载版式（`src/components/PrintResume.tsx`）直接渲染 `content.ts`，与网页同数据源，改内容后导出的 PDF 即最新。
- **实现**：`src/lib/downloadPdf.ts` 用 html-to-image 把打印版式渲染成高清位图（182 DPI），再用 jsPDF 切成 A4 多页 PDF；两个库按需加载，不拖慢首屏。
- **打印备用**：`src/index.css` 的 `@media print` 仍保留，Ctrl+P 也能另存为 PDF。
- 纯前端、零依赖、静态托管即可用。
