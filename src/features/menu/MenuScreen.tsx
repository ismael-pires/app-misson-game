import { useNavigate } from 'react-router-dom'
import { usePlayerStore } from '../../shared/store/usePlayerStore'
import { BackgroundScene } from './components/BackgroundScene'
import { GameLogo } from './components/GameLogo'
import { MenuButton } from './components/MenuButton'
import { PhaseProgressDots } from './components/PhaseProgressDots'
import { ExitIcon, PlayIcon, ProfileIcon, ShopIcon, TrophyIcon } from './components/icons'

export function MenuScreen() {
  const navigate = useNavigate()
  const currency = usePlayerStore((state) => state.profile.currency)

  const handleExit = () => {
    if (window.confirm('Deseja sair do jogo?')) {
      window.close()
    }
  }

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      <BackgroundScene />

      <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full border border-apostole-cream/20 bg-apostole-navydeep/60 px-4 py-1.5 text-apostole-cream backdrop-blur-sm">
        <span className="text-apostole-gold">
          <img src={`/src/assets/dom.png`} alt="dons" className="h-6 w-6 rounded-full" />
        </span>
        <span className="font-body text-sm font-semibold">{currency}</span>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8 px-6 py-12">
        <GameLogo />
        <PhaseProgressDots />

        <nav className="flex flex-col items-center gap-3 mt-2">
          <MenuButton
            icon={<PlayIcon />}
            label="Jogar"
            variant="primary"
            onClick={() => navigate('/fases')}
          />
          <MenuButton
            icon={<TrophyIcon />}
            label="Ranking"
            onClick={() => navigate('/ranking')}
          />
          <MenuButton
            icon={<ShopIcon />}
            label="Loja"
            onClick={() => navigate('/loja')}
          />
          <MenuButton
            icon={<ProfileIcon />}
            label="Perfil"
            onClick={() => navigate('/perfil')}
          />
          <MenuButton icon={<ExitIcon />} label="Sair" onClick={handleExit} />
        </nav>
      </div>
    </div>
  )
}
