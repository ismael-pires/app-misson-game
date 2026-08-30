import { create } from 'zustand'
import type { PlayerProfile } from '../types/player'
import { mockPlayerProfile } from '../mocks/player.mock'

interface PlayerState {
  profile: PlayerProfile
  setAvatar: (avatarId: string) => void
  setHeroSkin: (heroSkinId: string) => void
  purchaseShopItem: (itemId: string, price: number) => boolean
  redeemWithRealMoney: (itemId: string) => boolean
}

export const usePlayerStore = create<PlayerState>((set, get) => ({
  profile: mockPlayerProfile,
  setAvatar: (avatarId) =>
    set((state) => ({ profile: { ...state.profile, avatarId } })),
  setHeroSkin: (heroSkinId) =>
    set((state) => ({ profile: { ...state.profile, heroSkinId } })),
  purchaseShopItem: (itemId, price) => {
    const { profile } = get()
    if (profile.ownedShopItemIds.includes(itemId) || profile.currency < price) {
      return false
    }

    set({
      profile: {
        ...profile,
        currency: profile.currency - price,
        ownedShopItemIds: [...profile.ownedShopItemIds, itemId],
      },
    })
    return true
  },
  redeemWithRealMoney: (itemId) => {
    const { profile } = get()
    if (profile.ownedShopItemIds.includes(itemId)) {
      return false
    }

    set({
      profile: {
        ...profile,
        ownedShopItemIds: [...profile.ownedShopItemIds, itemId],
      },
    })
    return true
  },
}))
