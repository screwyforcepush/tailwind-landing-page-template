'use client'

import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faCheck, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

interface CopyMarkdownButtonProps {
  markdown: string
}

type CopyState = 'idle' | 'copied' | 'failed'

export default function CopyMarkdownButton({ markdown }: CopyMarkdownButtonProps) {
  const [state, setState] = useState<CopyState>('idle')

  useEffect(() => {
    if (state === 'idle') return
    const t = setTimeout(() => setState('idle'), 2000)
    return () => clearTimeout(t)
  }, [state])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(markdown)
      setState('copied')
    } catch {
      setState('failed')
    }
  }

  const label = state === 'copied' ? 'COPIED' : state === 'failed' ? 'COPY FAILED' : 'COPY MARKDOWN'
  const icon = state === 'copied' ? faCheck : state === 'failed' ? faTriangleExclamation : faCopy
  const tone =
    state === 'copied'
      ? 'text-green-300 border-green-500/60'
      : state === 'failed'
      ? 'text-pink-300 border-pink-500/60'
      : 'text-blue-200 border-blue-500/50 hover:bg-blue-900/40'

  return (
    <button
      type="button"
      onClick={copy}
      aria-live="polite"
      className={`btn font-jetbrains text-xs tracking-wider inline-flex items-center px-3 py-2 border transition-all duration-300 ${tone}`}
      style={{ background: 'rgba(15, 15, 30, 0.8)' }}
    >
      <FontAwesomeIcon icon={icon} className="w-4 h-4 mr-2" />
      {label}
    </button>
  )
}
