import type { ReactNode } from 'react'

interface MenuButtonProps {
  icon: ReactNode
  label: string
  onClick: () => void
  variant?: 'primary' | 'secondary'
}

export function MenuButton({ icon, label, onClick, variant = 'secondary' }: MenuButtonProps) {
  const isPrimary = variant === 'primary'

  return (
    <button
      type="button"
      onClick={onClick}
      className={
        'group flex w-64 items-center gap-3 rounded-lg border px-5 py-3 font-body text-base tracking-wide transition-all duration-150 ' +
        (isPrimary
          ? 'border-apostole-gold bg-apostole-gold text-apostole-navydeep hover:bg-apostole-goldlight'
          : 'border-apostole-cream/25 bg-apostole-navy/40 text-apostole-cream hover:border-apostole-gold hover:bg-apostole-navy/70')
      }
    >
      <span
        className={
          'text-lg ' + (isPrimary ? 'text-apostole-navydeep' : 'text-apostole-gold')
        }
      >
        {icon}
      </span>
      {label}
    </button>
  )
}
