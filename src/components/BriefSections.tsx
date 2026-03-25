const cards = [
  {
    label: 'What',
    title: 'The signal worth your attention',
    description: 'The specific trend, framework, or insight worth your attention today — extracted from transcripts, not just headlines.',
  },
  {
    label: 'Why Now',
    title: 'Market timing, not evergreen noise',
    description: 'Why this matters today, not six months ago. We surface what\'s moving right now so you act with context.',
  },
  {
    label: 'Potential',
    title: 'Quantified opportunity',
    description: 'What this is worth to a business at your stage. Not vague upside — real numbers from operators who\'ve done it.',
  },
  {
    label: 'First Move',
    title: 'One concrete action',
    description: 'What to do this week, not someday. Every brief ends with a single, executable next step.',
  },
]

export default function BriefSections() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-label mb-3">What's In Your Brief</p>
          <h2 className="section-heading text-3xl sm:text-4xl text-white">Four sections. Five minutes. Done.</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <div key={i} className="glass-card p-6">
              <div className="inline-block px-3 py-1 rounded mb-4"
                style={{ background: 'rgba(124, 58, 237, 0.2)', color: '#A855F7', fontFamily: 'Montserrat', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                {card.label}
              </div>
              <h3 className="font-display font-700 text-white text-lg mb-2">{card.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
