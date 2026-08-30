import domIcon from '../../../assets/dom.png'

interface CurrencyBarProps {
  currency: number
}

export function CurrencyBar({ currency }: CurrencyBarProps) {
  return (
    <div className="mb-6 flex items-center justify-between rounded-lg border border-apostole-gold/30 bg-apostole-navy/40 px-4 py-3">
      <div>
        <p className="font-body text-xs uppercase tracking-wide text-apostole-cream/50">Seus dons</p>
        <div className="mt-1 flex items-center gap-2">
          <img src={domIcon} alt="dons" className="h-6 w-6 rounded-full" />
          <span className="font-display text-2xl font-semibold text-apostole-gold">{currency}</span>
        </div>
      </div>
      <p className="max-w-[9rem] text-right font-body text-xs text-apostole-cream/50">
        Use seus dons para resgatar itens e fortalecer seu personagem.
      </p>
    </div>
  )
}
