import logo from '../../../assets/logo.png'

export function GameLogo({ showSlogan = false }: { showSlogan?: boolean }) {
  return (
    <div className="flex flex-col items-center">
      <img
        src={logo}
        alt="Game Logo"
        className="h-auto w-[34vw] min-w-[140px] max-w-[320px]"
      />
      {showSlogan && (
        <p className="mt-2 text-sm md:text-base tracking-[0.3em] uppercase text-apostole-cream/60" style={{ fontSize: 12 }}>
          O Jogo que Transforma Missão em Colaboração
        </p>
      )}
    </div>
  )
}
