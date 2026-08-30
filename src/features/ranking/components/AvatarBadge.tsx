interface AvatarBadgeProps {
  username: string
  avatar?: string
  size?: 'sm' | 'md' | 'lg'
  ringClassName?: string
  className?: string
}

const sizeClasses = {
  sm: 'h-10 w-10 text-sm border-2',
  md: 'h-14 w-14 text-lg border-2',
  lg: 'h-20 w-20 text-3xl border-[3px]',
}

export function AvatarBadge({ username, avatar, size = 'md', ringClassName, className }: AvatarBadgeProps) {
  const initial = username.charAt(0).toUpperCase()

  return (
    <div
      className={
        `flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-b from-apostole-navy to-apostole-navydeep font-display font-semibold text-apostole-cream ${sizeClasses[size]} ` +
        (ringClassName ?? 'border-apostole-cream/25') +
        (className ? ` ${className}` : '')
      }
    >
      {avatar ? (
        <img src={avatar} alt={username} className="h-full w-full object-cover" />
      ) : (
        initial
      )}
    </div>
  )
}
