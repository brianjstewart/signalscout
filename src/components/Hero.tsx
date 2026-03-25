export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-28 pb-24 overflow-hidden">
      {/* Background glow — dual orbs */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.18) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(168,85,247,0.08) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accentLight animate-pulse" />
          <span className="section-label text-xs">AI Intelligence Brief</span>
        </div>

        {/* Headline */}
        <h1 className="section-heading text-4xl sm:text-5xl md:text-6xl leading-tight mb-6 text-white">
          Your experts published new content last night.{' '}
          <span style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline' }}>
            Here's what actually matters.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-white/65 max-w-2xl mx-auto leading-relaxed mb-10">
          Tell us what you're building. SignalScout mines your goals and social profiles, then briefs you every morning with exactly what the best operators in the world are saying about it.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="#signup" className="btn-primary text-center">Start Your Morning Brief</a>
          <a href="#waitlist" className="btn-secondary text-center">Join the Waitlist</a>
        </div>

        {/* Sample Brief Card */}
        <div className="glass-card max-w-xl mx-auto p-6 text-left relative overflow-hidden">
          {/* Card accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(90deg, #7C3AED, #A855F7)' }} />

          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accentLight" style={{ boxShadow: '0 0 6px #A855F7' }} />
              <span className="section-label text-xs">Sample Brief — Today's Signal</span>
            </div>
            <span className="text-white/25 text-xs">March 25, 2026</span>
          </div>

          <div className="space-y-4">
            <BriefRow
              label="What"
              text="Short-form video with embedded proof loops is outperforming traditional ad creatives by 3–5x in CPM-sensitive categories."
            />
            <BriefRow
              label="Why Now"
              text="Platform algorithm shifts in Q1 2026 are deprioritizing static image ads. Operators who pivot now capture early-mover CPM advantages before costs inflate."
            />
            <BriefRow
              label="Potential"
              text="Brands at $1M–$5M ARR seeing 40–60% CAC reduction with this creative format in the first 30 days of deployment."
            />
            <BriefRow
              label="First Move"
              text="Repurpose your 3 best-performing testimonials into 30-second proof-loop videos. Run a split test this week — results within 72 hours."
            />
          </div>
        </div>

        {/* Micro stat */}
        <p className="mt-6 text-white/30 text-xs">No fluff. No filler. Every section is actionable.</p>
      </div>
    </section>
  )
}

function BriefRow({ label, text }: { label: string; text: string }) {
  return (
    <div className="flex gap-3 items-start">
      <div className="shrink-0 pt-0.5">
        <span
          className="inline-block px-2 py-0.5 rounded font-display uppercase"
          style={{
            background: 'rgba(124,58,237,0.25)',
            color: '#A855F7',
            fontSize: '0.65rem',
            letterSpacing: '0.1em',
            fontWeight: 700,
            lineHeight: '1.6',
            whiteSpace: 'nowrap',
          }}
        >
          {label}
        </span>
      </div>
      <p className="text-white/75 text-sm leading-relaxed">{text}</p>
    </div>
  )
}
