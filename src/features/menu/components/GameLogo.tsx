export function GameLogo() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-display text-6xl md:text-7xl tracking-wide text-apostole-cream flex items-baseline select-none">
        <span>apos</span>
        <span className="relative mx-0.5 text-apostole-gold">
          t
          <span className="absolute left-1/2 top-[-0.62em] h-[0.62em] w-[0.1em] -translate-x-1/2 rounded-sm bg-apostole-gold" />
          <span className="absolute left-1/2 top-[-0.4em] h-[0.1em] w-[0.42em] -translate-x-1/2 rounded-sm bg-apostole-gold" />
        </span>
        <span>olē</span>
      </h1>
      <p className="mt-2 text-sm md:text-base tracking-[0.3em] uppercase text-apostole-cream/60">
        Jogo de Missões
      </p>
    </div>
  )
}
