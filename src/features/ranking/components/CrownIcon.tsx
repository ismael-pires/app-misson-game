interface CrownIconProps {
  className?: string
}

export function CrownIcon({ className }: CrownIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M3 8.5 7 11l5-6.5L17 11l4-2.5-1.6 9.5H4.6L3 8.5Z" />
      <path
        d="M4.6 20h14.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}
