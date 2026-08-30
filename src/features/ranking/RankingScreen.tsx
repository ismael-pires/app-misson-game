import { useEffect, useState } from 'react'
import { ScreenShell } from '../../shared/components/ScreenShell'
import type { RankingEntry } from '../../shared/types/ranking'
import { getRanking } from './api/getRanking'
import { Podium } from './components/Podium'
import { RankingListItem } from './components/RankingListItem'

type RankingStatus = 'loading' | 'error' | 'success'

export function RankingScreen() {
  const [status, setStatus] = useState<RankingStatus>('loading')
  const [ranking, setRanking] = useState<RankingEntry[]>([])

  useEffect(() => {
    let isMounted = true

    getRanking()
      .then((data) => {
        if (!isMounted) return
        setRanking(data.ranking)
        setStatus('success')
      })
      .catch(() => {
        if (!isMounted) return
        setStatus('error')
      })

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <ScreenShell title="Ranking">
      {status === 'loading' && (
        <p className="font-body text-apostole-cream/60">Carregando ranking...</p>
      )}

      {status === 'error' && (
        <p className="font-body text-apostole-cream/60">
          Não foi possível carregar o ranking agora.
        </p>
      )}

      {status === 'success' && (
        <>
          <Podium topThree={ranking.slice(0, 3)} />
          <ul className="flex flex-col gap-2">
            {ranking.slice(3).map((entry) => (
              <RankingListItem key={entry.id} entry={entry} />
            ))}
          </ul>
        </>
      )}
    </ScreenShell>
  )
}
