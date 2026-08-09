import { useState } from 'react'
import { downloadResumePdf } from './downloadPdf'

/** 下载 PDF 按钮的通用逻辑：点击后生成并保存 PDF，期间禁用按钮防重复触发 */
export function useDownloadPdf() {
  const [busy, setBusy] = useState(false)

  const run = async () => {
    if (busy) return
    setBusy(true)
    try {
      await downloadResumePdf()
    } catch (err) {
      console.error(err)
      alert('生成 PDF 失败，请重试；或按 Ctrl+P 使用浏览器打印保存。')
    } finally {
      setBusy(false)
    }
  }

  return { busy, run }
}
