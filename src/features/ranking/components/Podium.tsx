import type { RankingEntry } from '../../../shared/types/ranking'
import { PodiumPlace } from './PodiumPlace'

interface PodiumProps {
  topThree: RankingEntry[]
}

export function Podium({ topThree }: PodiumProps) {
  return (
    <div className="relative mb-10">
      <div className="flex items-end justify-center gap-4">
        {topThree.map((entry) => (
          <PodiumPlace key={entry.id} entry={entry} />
        ))}
      </div>
      <div className="pointer-events-none absolute inset-x-8 -bottom-3 h-4 rounded-[100%] bg-black/50 blur-xl" />
    </div>
  )
}
