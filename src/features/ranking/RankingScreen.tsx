import { ScreenShell } from '../../shared/components/ScreenShell'
import { mockRanking } from '../../shared/mocks/ranking.mock'
import { Podium } from './components/Podium'
import { RankingListItem } from './components/RankingListItem'

export function RankingScreen() {
  return (
    <ScreenShell title="Ranking">
      <div className="px-40">
      <Podium topThree={mockRanking.slice(0, 3)} />
      <ul className="flex flex-col gap-2">
        {mockRanking.slice(3).map((entry) => (
          <RankingListItem key={entry.id} entry={entry} />
        ))}
      </ul>
      </div>
    </ScreenShell>
  )
}
