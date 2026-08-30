import type { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

interface ScreenShellProps {
  title: string
  children?: ReactNode
}

export function ScreenShell({ title, children }: ScreenShellProps) {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen w-full bg-apostole-navydeep bg-gradient-to-b from-apostole-navydeep to-apostole-navy px-6 py-10 text-apostole-cream">
      <div className="mx-auto max-w-2xl">
        <button
          type="button"
          onClick={() => navigate('/')}
          className="mb-8 text-sm tracking-wide text-apostole-cream/60 hover:text-apostole-gold"
        >
          ← Voltar ao menu
        </button>
        <h1 className="font-display text-4xl text-apostole-gold mb-6">{title}</h1>
        {children ?? (
          <p className="text-apostole-cream/60 font-body">Em construção.</p>
        )}
      </div>
    </div>
  )
}
