import type { ReactNode } from 'react'

interface Step {
  label: ReactNode
  state: 'done' | 'locked'
}

function LockIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  )
}

const STEPS: Step[] = [
  { label: '1', state: 'done' },
  { label: '2', state: 'done' },
  { label: '3', state: 'done' },
  { label: <LockIcon />, state: 'locked' },
  { label: <LockIcon />, state: 'locked' },
]

export function PhaseProgressDots() {
  return (
    <div className="flex items-center gap-2">
      {STEPS.map((step, i) => (
        <div key={i} className="flex items-center">
          <div
            className={
              'flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold border ' +
              (step.state === 'done'
                ? 'bg-apostole-gold text-apostole-navydeep border-apostole-gold'
                : 'bg-transparent text-apostole-cream/40 border-apostole-cream/30')
            }
          >
            {step.label}
          </div>
          {i < STEPS.length - 1 && (
            <div
              className={
                'h-px w-6 ' +
                (step.state === 'done' && STEPS[i + 1].state === 'done'
                  ? 'bg-apostole-gold'
                  : 'bg-apostole-cream/20')
              }
            />
          )}
        </div>
      ))}
    </div>
  )
}
