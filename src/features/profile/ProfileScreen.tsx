import domIcon from '../../assets/dom.png'
import profileSkin from '../../assets/profile-skin.png'
import skin1 from '../../assets/skin1.png'
import skin2 from '../../assets/skin2.png'
import skin3 from '../../assets/skin3.png'
import { ScreenShell } from '../../shared/components/ScreenShell'
import { usePlayerStore } from '../../shared/store/usePlayerStore'

interface Skin {
  id: string
  name: string
  image: string
  locked: boolean
}

const skins: Skin[] = [
  { id: 'profile-skin', name: 'Padrão', image: profileSkin, locked: false },
  { id: 'skin1', name: 'R$ 5,00', image: skin1, locked: true },
  { id: 'skin2', name: 'R$ 10,00', image: skin2, locked: true },
  { id: 'skin3', name: 'R$ 20,00', image: skin3, locked: true },
]

function LockIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="10" width="16" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </svg>
  )
}

export function ProfileScreen() {
  const profile = usePlayerStore((state) => state.profile)

  return (
    <ScreenShell title="Perfil">
      <div className="max-w-3xl mx-auto px-4 pt-6">
        <div className="mb-6 flex items-center justify-between rounded-2xl border border-apostole-cream/15 bg-apostole-navydeep/70 px-5 py-4 shadow-lg backdrop-blur-md">
          <div>
            <p className="font-body text-xs uppercase tracking-wide text-apostole-cream/50">Jogador</p>
            <p className="font-display text-xl text-apostole-cream">{profile.name}</p>
          </div>
          <div className="text-right">
            <p className="font-body text-xs uppercase tracking-wide text-apostole-cream/50">Seus dons</p>
            <div className="mt-1 flex items-center justify-end gap-2">
              <img src={domIcon} alt="dons" className="h-6 w-6 rounded-full" />
              <span className="font-display text-2xl font-semibold text-apostole-gold">{profile.currency}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 sm:gap-6 max-w-3xl mx-auto px-4 py-6">
        {skins.map((skin) => (
          <div
            key={skin.id}
            className="relative flex flex-col items-center gap-2 rounded-2xl border border-apostole-cream/15 bg-apostole-navydeep/70 p-4 shadow-lg backdrop-blur-md"
          >
            <div className="relative w-full aspect-square flex items-center justify-center overflow-hidden rounded-xl bg-apostole-navydeep/50">
              <img
                src={skin.image}
                alt={skin.name}
                className={`h-full w-full object-contain ${
                  skin.locked ? 'opacity-70 grayscale' : ''
                }`}
              />

              {skin.locked && (
                <div className="absolute inset-0 flex items-center justify-center bg-apostole-navydeep/15">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-apostole-navydeep/70 text-apostole-cream/90 border border-apostole-cream/20 shadow-lg">
                    <LockIcon />
                  </span>
                </div>
              )}
            </div>

            <span
              className={`font-body text-sm font-semibold tracking-wide ${
                skin.locked ? 'text-apostole-cream/75' : 'text-apostole-cream'
              }`}
            >
              {skin.name}
            </span>
          </div>
        ))}
      </div>
    </ScreenShell>
  )
}