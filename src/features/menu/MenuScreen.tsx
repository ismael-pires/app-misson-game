import { useNavigate } from 'react-router-dom'
import { usePlayerStore } from '../../shared/store/usePlayerStore'
import { BackgroundScene } from './components/BackgroundScene'
import { GameLogo } from './components/GameLogo'
import { HeroCharacter } from './components/HeroCharacter'
import { MenuButton } from './components/MenuButton'
import { PartnershipIcon, PlayIcon, ShopIcon, TrophyIcon } from './components/icons'

export function MenuScreen() {
  const navigate = useNavigate()
  const profile = usePlayerStore((state) => state.profile)

  return (
    <div className="relative flex h-screen w-full flex-col justify-between overflow-hidden px-4 py-4 sm:px-8 lg:px-12 select-none">
      <BackgroundScene />

      {/* Área Central: Personagem + (Logo/Slogan/Botões empilhados) */}
      <div className="relative z-10 flex-1 flex w-full max-w-6xl items-center justify-center gap-6 lg:gap-12 py-2 -mt-6 sm:-mt-10 lg:-mt-16">
        {/* Esquerda: Skin da Personagem (maior) */}
        <div className="flex flex-1 items-center justify-center scale-110 lg:scale-125">
          <HeroCharacter playerName={profile.name} />
        </div>

        {/* Direita: Logo + Slogan + Botões */}
        <div className="flex flex-1 flex-col items-center justify-center gap-6 text-center">
          <div className="scale-110 lg:scale-125 -translate-y-4">
            <GameLogo showSlogan={true} />
          </div>

          {/* Botões: Jogar -- Ranking -- Loja -- Parcerias */}
          <nav className="flex items-center justify-center gap-2.5 sm:gap-4 max-w-md w-full mt-10">
            {/* 1. Jogar (Maior e com mais destaque) */}
            <MenuButton
              icon={<PlayIcon />}
              label="Jogar"
              variant="primary"
              className="flex-1 sm:flex-initial min-w-[150px] sm:min-w-[200px] py-3.5 px-6 text-base sm:text-lg font-bold tracking-wider shadow-lg shadow-apostole-gold/25 hover:scale-105"
              onClick={() => navigate('/fases')}
            />

            {/* 2. Ranking */}
            <MenuButton
              icon={<TrophyIcon />}
              label="Ranking"
              className="flex-1 py-3.5 px-6  text-xs sm:text-sm justify-center min-w-[150px] sm:min-w-[200px]"
              onClick={() => navigate('/ranking')}
            />

            {/* 3. Loja */}
            <MenuButton
              icon={<ShopIcon />}
              label="Loja"
              className="flex-1 py-3.5 px-6  text-xs sm:text-sm justify-center min-w-[150px] sm:min-w-[200px] "
              onClick={() => navigate('/loja')}
            />

            {/* 4. Parcerias */}
            <MenuButton
              icon={<PartnershipIcon />}
              label="Parcerias"
              className="flex-1 py-3.5 px-6  text-xs sm:text-sm justify-center min-w-[150px] sm:min-w-[200px]"
              onClick={() => navigate('/parcerias')}
            />
          </nav>
        </div>
      </div>
    </div>
  )
}
