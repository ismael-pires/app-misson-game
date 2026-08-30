const STARS = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  left: (i * 37) % 100,
  top: (i * 53) % 55,
  size: i % 3 === 0 ? 2 : 1,
  delay: (i % 5) * 0.6,
}))

export function BackgroundScene() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-apostole-navydeep">
      <div className="absolute inset-0 bg-gradient-to-b from-apostole-navydeep via-apostole-navy to-[#3a2a1a]" />

      {STARS.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full bg-apostole-cream/70 animate-pulse"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: star.size,
            height: star.size,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}

      <svg
        className="absolute bottom-0 left-0 w-full text-apostole-forest"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        fill="currentColor"
        opacity={0.9}
      >
        <path d="M0 220 L180 140 L340 210 L520 110 L700 200 L900 90 L1100 190 L1280 120 L1440 190 L1440 320 L0 320 Z" />
      </svg>
      <svg
        className="absolute bottom-0 left-0 w-full text-apostole-navydeep"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path d="M0 270 L220 190 L460 250 L680 170 L900 240 L1140 160 L1440 230 L1440 320 L0 320 Z" />
      </svg>

      <div className="absolute inset-0 shadow-[inset_0_0_180px_60px_rgba(0,0,0,0.55)]" />
    </div>
  )
}
