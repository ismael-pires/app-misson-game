const props = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function PlayIcon() {
  return (
    <svg {...props}>
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  )
}

export function TrophyIcon() {
  return (
    <svg {...props}>
      <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4Z" />
      <path d="M17 5h3a2 2 0 0 1-2 4M7 5H4a2 2 0 0 0 2 4" />
    </svg>
  )
}

export function ShopIcon() {
  return (
    <svg {...props}>
      <path d="M6 8V6a3 3 0 0 1 6 0v2" />
      <path d="M4 8h10l1 12H3L4 8Z" />
    </svg>
  )
}

export function ProfileIcon() {
  return (
    <svg {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.5-6 8-6s8 2 8 6" />
    </svg>
  )
}

export function ExitIcon() {
  return (
    <svg {...props}>
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <path d="M16 17l5-5-5-5M21 12H9" />
    </svg>
  )
}

export function CoinIcon() {
  return (
    <svg {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 15.5c0 1 1 1.5 2.5 1.5s2.5-.6 2.5-1.7c0-1.1-1-1.5-2.5-1.8s-2.5-.7-2.5-1.8C9.5 10.6 10.5 10 12 10s2.5.5 2.5 1.5" />
    </svg>
  )
}
