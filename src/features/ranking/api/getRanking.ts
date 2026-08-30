import { apiGet } from '../../../shared/api/client'
import type { RankingEntry } from '../../../shared/types/ranking'

export function getRanking() {
  return apiGet<{ ranking: RankingEntry[] }>('/ranking')
}
