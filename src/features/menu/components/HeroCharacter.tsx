import { useNavigate } from 'react-router-dom'
import profileSkinImg from '../../../assets/profile-skin.png'
import { ProfileIcon } from './icons'

interface HeroCharacterProps {
  playerName?: string
}

export function HeroCharacter({ playerName = 'Jogador' }: HeroCharacterProps) {
  const navigate = useNavigate()

  return (
    <div className="relative flex flex-col items-center justify-center">
      {/* Botão de Perfil Menor em Cima da Personagem */}
      <button
        type="button"
        onClick={() => navigate('/perfil')}
        className="group z-20 mb-2 flex items-center gap-2.5 rounded-full border border-apostole-cream/25 bg-apostole-navydeep/80 px-4 py-1.5 font-body text-xs font-medium text-apostole-cream shadow-lg backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-apostole-gold hover:bg-apostole-navy hover:text-apostole-gold active:scale-95"
      >
        <span className="text-apostole-gold transition-transform duration-200 group-hover:scale-110">
          <ProfileIcon />
        </span>
        <span className="font-semibold tracking-wide">{playerName}</span>
        <span className="text-[10px] uppercase tracking-wider text-apostole-gold/80 bg-apostole-gold/10 px-2 py-0.5 rounded-full border border-apostole-gold/30">
          Perfil
        </span>
      </button>

      {/* Personagem com Iluminação e Efeitos Visuais */}
      <div 
        onClick={() => navigate('/perfil')}
        className="group relative flex cursor-pointer flex-col items-center transition-transform duration-300 hover:scale-[1.02]"
        title="Clique para ver o perfil"
      >
        {/* Glow / Aura mística de fundo */}
        <div className="absolute top-1/4 h-64 w-64 rounded-full bg-apostole-gold/15 blur-3xl transition-all duration-500 group-hover:bg-apostole-gold/25" />
        
        {/* Imagem da Skin / Personagem */}
        <img
          src={profileSkinImg}
          alt={`Skin de ${playerName}`}
          className="relative z-10 max-h-[38vh] sm:max-h-[46vh] lg:max-h-[55vh] w-auto select-none object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] filter transition-all duration-300"
          draggable={false}
        />

        {/* Sombra de chão */}
        <div className="mt-[-15px] h-4 w-44 rounded-[100%] bg-black/70 blur-md transition-all duration-300 group-hover:w-48 group-hover:bg-black/90" />
      </div>
    </div>
  )
}
