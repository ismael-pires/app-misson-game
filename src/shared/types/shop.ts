export type ShopItemCurrency = 'dons' | 'real'

export interface ShopItem {
  id: string
  name: string
  description: string
  image: string
  price: number
  currency: ShopItemCurrency
}
