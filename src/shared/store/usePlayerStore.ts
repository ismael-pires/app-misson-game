import { create } from 'zustand'
import type { PlayerProfile } from '../types/player'
import { mockPlayerProfile } from '../mocks/player.mock'

interface PlayerState {
  profile: PlayerProfile
  setAvatar: (avatarId: string) => void
  setHeroSkin: (heroSkinId: string) => void
}

export const usePlayerStore = create<PlayerState>((set) => ({
  profile: mockPlayerProfile,
  setAvatar: (avatarId) =>
    set((state) => ({ profile: { ...state.profile, avatarId } })),
  setHeroSkin: (heroSkinId) =>
    set((state) => ({ profile: { ...state.profile, heroSkinId } })),
}))
