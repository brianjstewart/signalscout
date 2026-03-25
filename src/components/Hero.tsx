export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-20 blur-[120px] pointer-events-none"
        style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)' }} />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-accentLight animate-pulse" />
          <span className="section-label text-xs">AI Intelligence Brief</span>
        </div>

        {/* Headline */}
        <h1 className="section-heading text-4xl sm:text-5xl md:text-6xl leading-tight mb-6 text-white">
          Your experts published new content last night.{' '}
          <span style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Here's what actually matters.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-10">
          Tell us what you're building. SignalScout mines your goals and social profiles, then briefs you every morning with exactly what the best operators in the world are saying about it.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="#signup" className="btn-primary text-center">Start Your Morning Brief</a>
          <a href="#waitlist" className="btn-secondary text-center">Join the Waitlist</a>
        </div>

        {/* Sample Brief Card */}
        <div className="glass-card max-w-xl mx-auto p-6 text-left">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-accentLight" />
            <span className="section-label text-xs">Sample Brief — Today's Signal</span>
          </div>
          <div className="space-y-4">
            <BriefRow
              label="What"
              text="Short-form video with embedded proof loops is outperforming traditional ad creatives by 3–5x in CPM-sensitive categories."
            />
            <BriefRow
              label="Why Now"
              text="Platform algorithm shifts in Q1 2026 are deprioritizing static image ads. Operators who pivot now capture early-mover CPM advantages."
            />
            <BriefRow
              label="Potential"
              text="Brands at $1M–$5M ARR seeing 40–60% CAC reduction with this creative format in the first 30 days."
            />
            <BriefRow
              label="First Move"
              text="Repurpose your 3 best-performing testimonials into 30-second proof-loop videos. Run split test this week."
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function BriefRow({ label, text }: { label: string; text: string }) {
  return (
    <div className="flex gap-3">
      <div className="shrink-0 mt-0.5">
        <span className="inline-block px-2 py-0.5 rounded text-xs font-display font-700 uppercase tracking-wider"
          style={{ background: 'rgba(124, 58, 237, 0.25)', color: '#A855F7', fontSize: '0.7rem', letterSpacing: '0.08em' }}>
          {label}
        </span>
      </div>
      <p className="text-white/80 text-sm leading-relaxed">{text}</p>
    </div>
  )
}
