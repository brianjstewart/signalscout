import { useReveal } from '../hooks/useReveal'

const cards = [
  {
    label: 'What',
    title: 'The signal worth your attention',
    description: 'The specific trend, framework, or insight that rose above the noise today. Not a summary of what was published — the one thing worth knowing and why.',
    gradient: 'rgba(124,58,237,0.18)',
  },
  {
    label: 'Why Now',
    title: 'Market timing, not evergreen noise',
    description: 'Why this matters today, not six months ago. We surface what\'s moving right now so you act with context.',
    gradient: 'rgba(109,40,217,0.18)',
  },
  {
    label: 'Potential',
    title: 'What this unlocks for you',
    description: 'Whether you\'re running a business, a campaign, or a content channel — we quantify the upside. Real numbers, real outcomes, not vague possibility.',
    gradient: 'rgba(139,92,246,0.18)',
  },
  {
    label: 'First Move',
    title: 'One concrete action',
    description: 'What to do this week, not someday. Every brief ends with a single, specific next step you can take before your next meeting.',
    gradient: 'rgba(168,85,247,0.18)',
  },
]

export default function BriefSections() {
  const titleRef = useReveal()
  const gridRef = useReveal(0.1)

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className="reveal text-center mb-14"
        >
          <p className="section-label mb-3">What's In Your Brief</p>
          <h2 className="section-heading text-3xl sm:text-4xl text-white">Four sections. Five minutes. Done.</h2>
        </div>

        <div
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className="glass-card p-6 group hover:border-accent/40 transition-all duration-300 hover:translate-y-[-2px]"
            >
              <div
                className="inline-block px-3 py-1 rounded mb-4 font-display uppercase"
                style={{
                  background: card.gradient,
                  color: '#A855F7',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                }}
              >
                {card.label}
              </div>
              <h3 className="font-display text-white text-lg mb-2" style={{ fontWeight: 700 }}>
                {card.title}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
