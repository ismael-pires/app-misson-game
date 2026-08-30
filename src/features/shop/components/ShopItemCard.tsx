import domIcon from '../../../assets/dom.png'
import type { ShopItem } from '../../../shared/types/shop'

interface ShopItemCardProps {
  item: ShopItem
  owned: boolean
  affordable: boolean
  onAction: (item: ShopItem) => void
}

function formatBRL(value: number) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

export function ShopItemCard({ item, owned, affordable, onAction }: ShopItemCardProps) {
  const isReal = item.currency === 'real'
  const disabled = owned || (!isReal && !affordable)
  const ownedLabel = isReal ? 'Resgatado' : 'Adquirido'
  const actionLabel = isReal ? 'Resgatar' : 'Comprar'

  return (
    <div className="flex flex-col items-center rounded-lg border border-apostole-cream/15 bg-apostole-navy/40 p-3 text-center">
      <div
        className={`flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-2 border-apostole-cream/20 ${
          isReal ? 'bg-apostole-cream' : 'bg-apostole-navydeep'
        }`}
      >
        <img
          src={item.image}
          alt={item.name}
          className={`h-full w-full ${isReal ? 'object-cover' : 'object-contain'}`}
        />
      </div>

      <p className="mt-2 line-clamp-2 h-8 font-body text-[11px] font-semibold leading-tight text-apostole-cream">
        {item.name}
      </p>

      <p className="mt-1 line-clamp-2 h-7 font-body text-[10px] leading-tight text-apostole-cream/50">
        {item.description}
      </p>

      <div className="mt-1 flex items-center gap-1">
        {isReal ? (
          <span className="font-body text-xs font-semibold text-apostole-cream">{formatBRL(item.price)}</span>
        ) : (
          <>
            <img src={domIcon} alt="dons" className="h-3.5 w-3.5 rounded-full" />
            <span className="font-body text-xs font-semibold text-apostole-gold">{item.price}</span>
          </>
        )}
      </div>

      <button
        type="button"
        disabled={disabled}
        onClick={() => onAction(item)}
        className={`mt-2 w-full rounded-md py-1.5 font-body text-[11px] font-semibold transition-colors ${
          owned
            ? 'cursor-default bg-apostole-cream/10 text-apostole-cream/50'
            : !isReal && !affordable
              ? 'cursor-not-allowed bg-apostole-cream/10 text-apostole-cream/30'
              : isReal
                ? 'bg-apostole-ember text-apostole-cream hover:bg-apostole-ember/80'
                : 'bg-apostole-gold text-apostole-navydeep hover:bg-apostole-goldlight'
        }`}
      >
        {owned ? ownedLabel : !isReal && !affordable ? 'Sem dons' : actionLabel}
      </button>
    </div>
  )
}
