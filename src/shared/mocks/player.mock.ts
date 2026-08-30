import type { PlayerProfile } from '../types/player'

export const mockPlayerProfile: PlayerProfile = {
  id: 'player-1',
  name: 'Mara',
  avatarId: 'avatar-01',
  heroSkinId: 'skin-01',
  currency: 480,
  completedPhaseIds: ['vale-do-primeiro-chamado'],
  ownedAvatarIds: ['avatar-01', 'avatar-02'],
  ownedHeroSkinIds: ['skin-01'],
  ownedShopItemIds: ['item-02'],
}
