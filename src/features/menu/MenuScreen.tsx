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

          {/* Botões: (Jogar -- Multiplayer) em cima / (Ranking -- Loja -- Parcerias) embaixo */}
          <nav className="flex flex-col items-center justify-center gap-2.5 sm:gap-4 max-w-md w-full mt-10">
            <div className="flex items-center justify-center gap-2.5 sm:gap-4 w-full">
              {/* 1. Jogar (Maior e com mais destaque) */}
              <MenuButton
                icon={<PlayIcon />}
                label="Jogar"
                variant="primary"
                className="flex-1 min-w-[150px] sm:min-w-[200px] py-3.5 px-6 text-base sm:text-lg font-bold tracking-wider shadow-lg shadow-apostole-gold/25 hover:scale-105"
                onClick={() => window.location.href = 'https://bosque-de-luma-poc.maple-kiwi-5973.chatgpt.site/'}
              />

              {/* 2. Multiplayer (em breve) */}
              <MenuButton
                icon={<MultiplayerIcon />}
                label="Multiplayer"
                disabled
                badge="Em breve"
                className="flex-1 py-3.5 px-10 text-xs sm:text-sm justify-center min-w-[250px] sm:min-w-[250px]"
              />
            </div>

            <div className="flex items-center justify-center gap-2.5 sm:gap-4 w-full">
              {/* 3. Ranking */}
              <MenuButton
                icon={<TrophyIcon />}
                label="Ranking"
                className="flex-1 py-3.5 px-6  text-xs sm:text-sm justify-center min-w-[150px] sm:min-w-[200px]"
                onClick={() => navigate('/ranking')}
              />

              {/* 4. Loja */}
              <MenuButton
                icon={<ShopIcon />}
                label="Loja"
                className="flex-1 py-3.5 px-6  text-xs sm:text-sm justify-center min-w-[150px] sm:min-w-[200px] "
                onClick={() => navigate('/loja')}
              />

              {/* 5. Parcerias */}
              <MenuButton
                icon={<PartnershipIcon />}
                label="Parcerias"
                className="flex-1 py-3.5 px-6  text-xs sm:text-sm justify-center min-w-[150px] sm:min-w-[200px]"
                onClick={() => navigate('/parcerias')}
              />
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}
