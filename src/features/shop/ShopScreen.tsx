import { useState } from 'react'
import { ScreenShell } from '../../shared/components/ScreenShell'
import { mockShopItems } from '../../shared/mocks/shop.mock'
import { usePlayerStore } from '../../shared/store/usePlayerStore'
import type { ShopItem } from '../../shared/types/shop'
import { CurrencyBar } from './components/CurrencyBar'
import { ShopItemCard } from './components/ShopItemCard'

export function ShopScreen() {
  const profile = usePlayerStore((state) => state.profile)
  const purchaseShopItem = usePlayerStore((state) => state.purchaseShopItem)
  const redeemWithRealMoney = usePlayerStore((state) => state.redeemWithRealMoney)
  const [feedback, setFeedback] = useState<string | null>(null)

  const donsItems = mockShopItems.filter((item) => item.currency === 'dons')
  const redeemItems = mockShopItems.filter((item) => item.currency === 'real')

  function handleAction(item: ShopItem) {
    const success =
      item.currency === 'dons' ? purchaseShopItem(item.id, item.price) : redeemWithRealMoney(item.id)

    if (!success) {
      setFeedback('Dons insuficientes para este item.')
      return
    }

    setFeedback(
      item.currency === 'dons'
        ? `"${item.name}" comprado com sucesso!`
        : `Resgate de "${item.name}" confirmado! Você receberá as instruções por e-mail.`,
    )
  }

  return (
    <ScreenShell title="Loja">
      <div className="px-40"> 
      <CurrencyBar currency={profile.currency} />

      {feedback && (
        <p className="mb-4 rounded-md border border-apostole-gold/30 bg-apostole-gold/10 px-3 py-2 text-center font-body text-xs text-apostole-gold">
          {feedback}
        </p>
      )}

      <div className="flex flex-col gap-8">
        <section>
          <h2 className="font-display text-xl text-apostole-cream">Itens</h2>
          <p className="mb-3 font-body text-xs text-apostole-cream/50">
            Compre com os dons conquistados nas fases.
          </p>
          <div className="grid grid-cols-3 gap-3">
            {donsItems.map((item) => (
              <ShopItemCard
                key={item.id}
                item={item}
                owned={profile.ownedShopItemIds.includes(item.id)}
                affordable={profile.currency >= item.price}
                onAction={handleAction}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-xl text-apostole-cream">Resgates</h2>
          <p className="mb-3 font-body text-xs text-apostole-cream/50">
            Troque dinheiro real por recompensas físicas exclusivas.
          </p>
          <div className="grid grid-cols-3 gap-3">
            {redeemItems.map((item) => (
              <ShopItemCard
                key={item.id}
                item={item}
                owned={profile.ownedShopItemIds.includes(item.id)}
                affordable
                onAction={handleAction}
              />
            ))}
          </div>
        </section>
      </div>
      </div>
    </ScreenShell>
  )
}
