import eismeaquiLogo from '../../assets/eis-me-aqui.png'
import frontiersLogo from '../../assets/frontiers.png'
import jocumLogo from '../../assets/jocum-logo.svg'
import portasAbertasLogo from '../../assets/portas-abertas.webp'
import { ScreenShell } from '../../shared/components/ScreenShell'

interface Partner {
  id: string
  name: string
  tagline: string
  description: string
  logo: string
  tag: string
}

const partners: Partner[] = [
  {
    id: 'jocum',
    name: 'JOCUM',
    tagline: 'Jovens Com Uma Missão (YWAM)',
    description:
      'Movimento global de voluntários cristãos dedicados a mobilizar jovens para a evangelização, treinamento de lideranças e ministérios de misericórdia pelo mundo todo.',
    logo: jocumLogo,
    tag: 'Mobilização & Treinamento',
  },
  {
    id: 'frontiers',
    name: 'Frontiers',
    tagline: 'Frontiers Brasil',
    description:
      'Organização internacional focada em enviar trabalhadores e equipar comunidades para plantar grupos de fiéis entre os povos menos alcançados da Terra.',
    logo: frontiersLogo,
    tag: 'Povos Não Alcançados',
  },
  {
    id: 'eis-me-aqui',
    name: 'Eis me Aqui',
    tagline: 'Ministério Missionário',
    description:
      'Capacitação, apoio e envio de missionários com foco no atendimento a populações em extrema vulnerabilidade social e spiritual.',
    logo: eismeaquiLogo,
    tag: 'Ação Social & Envio',
  },
  {
    id: 'portas-abertas',
    name: 'Portas Abertas',
    tagline: 'Open Doors Brasil',
    description:
      'Organização internacional dedicada a fortalecer e apoiar cristãos perseguidos por sua fé em mais de 60 países, oferecendo Bíblias, treinamento, ajuda humanitária e defesa da liberdade religiosa.',
    logo: portasAbertasLogo,
    tag: 'Perseguição & Apoio',
  },
]

export function PartnershipsScreen() {
  return (
    <ScreenShell title="Parcerias Missionárias">
      <p className="mb-8 font-body text-base text-apostole-cream/80 leading-relaxed">
        Conheça as organizações missionárias parceiras que compartilham da visão de transformar vidas e levar o evangelho a todas as nações.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="group flex flex-col justify-between rounded-2xl border border-apostole-cream/15 bg-apostole-navy/70 p-6 backdrop-blur-md shadow-xl transition-all duration-300 hover:border-apostole-gold/60 hover:bg-apostole-navy/90 hover:shadow-2xl hover:shadow-apostole-gold/10 hover:-translate-y-1"
          >
            <div>
              {/* Logo Container */}
              <div className="flex h-28 w-full items-center justify-center rounded-xl bg-white/95 p-4 shadow-inner mb-5 transition-transform duration-300 group-hover:scale-[1.02]">
                <img
                  src={partner.logo}
                  alt={`Logo ${partner.name}`}
                />
              </div>

              {/* Tag */}
              <span className="inline-block rounded-full bg-apostole-gold/15 px-3 py-1 text-xs font-semibold text-apostole-gold border border-apostole-gold/30 mb-3">
                {partner.tag}
              </span>

              {/* Title & Tagline */}
              <h2 className="font-display text-2xl font-bold text-apostole-cream group-hover:text-apostole-gold transition-colors">
                {partner.name}
              </h2>
              <p className="text-xs font-semibold text-apostole-cream/60 mb-3">
                {partner.tagline}
              </p>

              {/* Description */}
              <p className="font-body text-sm text-apostole-cream/80 leading-relaxed">
                {partner.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </ScreenShell>
  )
}