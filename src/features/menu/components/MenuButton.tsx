import type { ReactNode } from 'react'
import { LockIcon } from './icons'

interface MenuButtonProps {
  icon: ReactNode
  label: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  className?: string
  disabled?: boolean
  badge?: string
}

export function MenuButton({
  icon,
  label,
  onClick,
  variant = 'secondary',
  className,
  disabled = false,
  badge,
}: MenuButtonProps) {
  const isPrimary = variant === 'primary'

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      title={disabled ? badge : undefined}
      className={
        'group relative flex h-14 w-64 shrink-0 items-center gap-3 whitespace-nowrap rounded-lg border px-5 font-body text-base tracking-wide transition-all duration-150 ' +
        (disabled
          ? 'cursor-not-allowed border-apostole-cream/20 bg-apostole-navy/20 text-apostole-cream/40'
          : isPrimary
            ? 'border-apostole-gold bg-apostole-gold text-apostole-navydeep hover:bg-apostole-goldlight'
            : 'border-apostole-cream/25 bg-apostole-navy/40 text-apostole-cream hover:border-apostole-gold hover:bg-apostole-navy/70') +
        (className ? ` ${className}` : '')
      }
    >
      <span
        className={
          'shrink-0 text-lg ' +
          (disabled ? 'text-apostole-cream/30' : isPrimary ? 'text-apostole-navydeep' : 'text-apostole-gold')
        }
      >
        {icon}
      </span>
      {label}

      {disabled && (
        <span className="ml-auto flex w-[100px] shrink-0 items-center gap-1 whitespace-nowrap rounded-full border border-apostole-cream/15 bg-apostole-cream/10 px-2 text-[10px] uppercase tracking-wide text-apostole-cream/50">
          <LockIcon />
          {badge}
        </span>
      )}
    </button>
  )
}
