import type { RankingEntry } from '../../../shared/types/ranking'
import { AvatarBadge } from './AvatarBadge'

interface RankingListItemProps {
  entry: RankingEntry
}

export function RankingListItem({ entry }: RankingListItemProps) {
  return (
    <li className="flex items-center gap-4 rounded-lg border border-apostole-cream/10 bg-apostole-navy/40 px-4 py-3">
      <span className="w-6 text-center font-body text-sm font-semibold text-apostole-cream/60">
        {entry.position}
      </span>
      <AvatarBadge username={entry.username} size="sm" />
      {/* <span className="flex-1 font-body text-sm text-apostole-cream">{entry.username}</span> */}
      <div className="flex-shrink-0" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <img
          src={`/src/assets/dom.png`}
          alt={"dons"}
          className="h-6 w-6 rounded-full"
        />
      <span className="font-body text-sm font-semibold text-apostole-gold">{entry.donsCount} XP</span>
      </div>
    </li>
  )
}
