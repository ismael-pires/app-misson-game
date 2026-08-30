export function RotateDeviceOverlay() {
  return (
    <div
      role="alert"
      aria-live="assertive"
      className="fixed inset-0 z-[9999] hidden max-[900px]:portrait:flex flex-col items-center justify-center gap-6 bg-apostole-navydeep px-8 text-center text-apostole-cream"
    >
      <svg
        width="64"
        height="64"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-rotate-device text-apostole-gold"
      >
        <rect x="6" y="2" width="12" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
      <p className="font-display text-2xl text-apostole-gold">Gire seu dispositivo</p>
      <p className="max-w-xs text-sm text-apostole-cream/60 font-body">
        Este jogo foi feito para o modo paisagem. Vire seu celular na horizontal para continuar.
      </p>
    </div>
  )
}
