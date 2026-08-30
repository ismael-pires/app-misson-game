export function GameLogo({ showSlogan = false }: { showSlogan?: boolean }) {
  return (
    <div className="flex flex-col items-center">
      <img src="../../../assets/logo.png" alt="Game Logo" className="w-80 h-auto md:w-80" />
      {showSlogan && (
        <p className="mt-2 text-sm md:text-base tracking-[0.3em] uppercase text-apostole-cream/60" style={{ fontSize: 12 }}>
          O Jogo que Transforma Missão em Colaboração
        </p>
      )}
    </div>
  )
}
