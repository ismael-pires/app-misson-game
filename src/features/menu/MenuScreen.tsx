import { useNavigate } from 'react-router-dom'
import { usePlayerStore } from '../../shared/store/usePlayerStore'
import { BackgroundScene } from './components/BackgroundScene'
import { GameLogo } from './components/GameLogo'
import { HeroCharacter } from './components/HeroCharacter'
import { MenuButton } from './components/MenuButton'
import { MultiplayerIcon, PartnershipIcon, PlayIcon, ShopIcon, TrophyIcon } from './components/icons'

export function MenuScreen() {
  const navigate = useNavigate()
  const profile = usePlayerStore((state) => state.profile)

  return (
    <div className="relative flex h-dvh w-full flex-col justify-between overflow-hidden px-3 py-3 md:px-8 md:py-4 lg:px-12 select-none">
      <BackgroundScene />

      {/* Área Central: Personagem + (Logo/Slogan/Botões empilhados) */}
      <div className="relative z-10 flex-1 flex w-full max-w-6xl items-center justify-center gap-3 md:gap-6 lg:gap-12 py-2 lg:-mt-16 min-h-0">
        {/* Esquerda: Skin da Personagem (maior) */}
        <div className="flex flex-1 min-w-0 items-center justify-center lg:scale-125">
          <HeroCharacter playerName={profile.name} />
        </div>

        {/* Direita: Logo + Slogan + Botões */}
        <div className="flex flex-1 min-w-0 flex-col items-center justify-center gap-3 md:gap-6 text-center">
          <div className="lg:scale-125">
            <span className="mt-2 text-sm md:text-base tracking-[0.3em] uppercase text-apostole-cream/60" style={{ fontSize: 12, left: -40, position: 'relative' }}>αποστολή</span>
            <GameLogo showSlogan={true} />
          </div>

          {/* Botões: (Jogar -- Multiplayer) em cima / (Ranking -- Loja -- Parcerias) embaixo */}
          <nav className="flex flex-col items-center justify-center gap-1.5 md:gap-4 max-w-md w-full mt-2 md:mt-10">
            <div className="flex items-center justify-center gap-1.5 md:gap-4 w-full">
              {/* 1. Jogar (Maior e com mais destaque) */}
              <MenuButton
                icon={<PlayIcon />}
                label="Jogar"
                variant="primary"
                className="flex-1 min-w-0 py-2 md:py-3.5 px-3 md:px-6 text-sm md:text-lg font-bold tracking-wider shadow-lg shadow-apostole-gold/25 hover:scale-105"
                onClick={() => window.location.href = 'https://app-gameplay-mission-game.onrender.com'}
              />

              {/* 2. Multiplayer (em breve) */}
              <MenuButton
                icon={<MultiplayerIcon />}
                label="Multiplayer"
                disabled
                badge="Em breve"
                className="flex-1 py-2 md:py-3.5 px-3 md:px-10 text-[10px] md:text-sm justify-center min-w-0"
              />
            </div>

            <div className="flex items-center justify-center gap-1.5 md:gap-4 w-full">
              {/* 3. Ranking */}
              <MenuButton
                icon={<TrophyIcon />}
                label="Ranking"
                className="flex-1 py-2 md:py-3.5 px-2 md:px-6 text-[10px] md:text-sm justify-center min-w-0"
                onClick={() => navigate('/ranking')}
              />

              {/* 4. Loja */}
              <MenuButton
                icon={<ShopIcon />}
                label="Loja"
                className="flex-1 py-2 md:py-3.5 px-2 md:px-6 text-[10px] md:text-sm justify-center min-w-0"
                onClick={() => navigate('/loja')}
              />

              {/* 5. Parcerias */}
              <MenuButton
                icon={<PartnershipIcon />}
                label="Parcerias"
                className="flex-1 py-2 md:py-3.5 px-2 md:px-6 text-[10px] md:text-sm justify-center min-w-0"
                onClick={() => navigate('/parcerias')}
              />
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}
