export interface PlayerProfile {
  id: string
  name: string
  avatarId: string
  heroSkinId: string
  currency: number
  completedPhaseIds: string[]
  ownedAvatarIds: string[]
  ownedHeroSkinIds: string[]
}
