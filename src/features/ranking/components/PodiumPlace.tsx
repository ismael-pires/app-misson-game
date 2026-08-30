import domIcon from '../../../assets/dom.png'
import type { RankingEntry } from '../../../shared/types/ranking'
import { AvatarBadge } from './AvatarBadge'

interface PodiumPlaceProps {
  entry: RankingEntry
}

const placeStyles = {
  1: {
    order: 'order-2',
    height: 'h-36',
    avatarSize: 'lg' as const,
    ring: 'border-apostole-gold',
    glow: 'bg-apostole-gold/50',
    main: 'bg-apostole-gold',
    highlight: 'bg-apostole-goldpale',
    depth: '#8f6a1f',
    medal: 'bg-apostole-gold border-apostole-goldpale',
    numberColor: 'text-apostole-cream',
    donsColor: 'text-apostole-gold',
    tilt: '',
    crown: true,
  },
  2: {
    order: 'order-1',
    height: 'h-28',
    avatarSize: 'md' as const,
    ring: 'border-[#9aa1ab]',
    glow: 'bg-[#9aa1ab]/40',
    main: 'bg-[#9aa1ab]',
    highlight: 'bg-[#c7cdd6]',
    depth: '#565b62',
    medal: 'bg-[#9aa1ab] border-[#c7cdd6]',
    numberColor: 'text-apostole-cream',
    donsColor: 'text-[#c7cdd6]',
    tilt: '[transform:rotateY(28deg)]',
    crown: false,
  },
  3: {
    order: 'order-3',
    height: 'h-24',
    avatarSize: 'md' as const,
    ring: 'border-[#b5651d]',
    glow: 'bg-[#b5651d]/40',
    main: 'bg-[#b5651d]',
    highlight: 'bg-[#e0975a]',
    depth: '#6e3c12',
    medal: 'bg-[#b5651d] border-[#e0975a]',
    numberColor: 'text-apostole-cream',
    donsColor: 'text-[#e0975a]',
    tilt: '[transform:rotateY(-28deg)]',
    crown: false,
  },
}

export function PodiumPlace({ entry }: PodiumPlaceProps) {
  const style = placeStyles[entry.position as 1 | 2 | 3]

  return (
    <div className={`flex flex-1 flex-col items-center ${style.order}`}>
      {/* <div className="flex h-7 items-center justify-center">
        {style.crown && (
          <CrownIcon className="h-7 w-7 animate-float-crown text-apostole-gold drop-shadow-[0_3px_4px_rgba(0,0,0,0.6)]" />
        )}
      </div> */}

      <div className="relative">
        <div className={`absolute inset-0 rounded-full blur-lg ${style.glow}`} />
        <AvatarBadge
          username={entry.username}
          avatar={entry.avatar}
          size={style.avatarSize}
          ringClassName={style.ring}
          className="shadow-[0_4px_12px_rgba(0,0,0,0.55)]"
        />
        {/* <div
          className={`absolute -bottom-1.5 left-1/2 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full border-2 font-display text-xs font-bold shadow-md ${style.medal} ${style.numberColor}`}
        >
          {entry.position}
        </div> */}
      </div>

      <p className="mt-3 max-w-[6rem] truncate font-body text-sm font-semibold text-apostole-cream">
        {entry.username}
      </p>
      <div className="mb-3 mt-0.5 flex items-center gap-1">
        <img src={domIcon} alt="dons" className="h-4 w-4" />
        <span className={`font-body text-xs font-bold ${style.donsColor}`}>{entry.donsCount} XP</span>
      </div>

      <div className={`w-full ${style.height} [perspective:450px]`}>
        <div className={`flex h-full flex-col ${style.tilt}`} style={{ transformStyle: 'preserve-3d' }}>
          {/* <div className={`h-3 shrink-0 rounded-t-lg border border-b-0 border-black/25 ${style.highlight}`} /> */}
          <div
            className={`-mt-px flex flex-1 items-center justify-center rounded-b-md border border-black/25 ${style.main}`}
            style={{
              boxShadow: `inset 0 2px 0 rgba(255,255,255,0.3), 0 6px 0 0 ${style.depth}, 0 14px 18px -6px rgba(0,0,0,0.6)`,
            }}
          >
            <span className={`mt-2 font-body text-3xl font-bold ${style.numberColor}`}>{entry.position}º</span>
          </div>
        </div>
      </div>
    </div>
  )
}
