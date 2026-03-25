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

      <div className="relative max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left: Text + CTA + Sample Brief */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accentLight animate-pulse" />
              <span className="section-label text-xs">AI Intelligence Brief</span>
            </div>

            {/* Headline */}
            <h1 className="section-heading text-4xl sm:text-5xl md:text-6xl leading-tight mb-6 text-white">
              The trends that matter to your business.{' '}
              <span style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline' }}>
                Delivered every morning before you open your inbox.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-white/65 max-w-2xl lg:max-w-none mx-auto leading-relaxed mb-10">
              SignalScout scans hundreds of expert sources across platforms — then distills everything into a personalized 5-minute brief built around your goals. You're not getting a summary. You're getting an intelligence layer.
            </p>

            {/* Single CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-3">
              <a href="#waitlist" className="btn-primary text-center">Join the Waitlist</a>
            </div>

            {/* Micro-note */}
            <p className="text-white/35 text-xs text-center lg:text-left mb-12">
              $29/mo when we launch · Founding members lock this rate forever · No commitment to join the list
            </p>

            {/* Sample Brief Card */}
            <div className="glass-card max-w-xl mx-auto lg:mx-0 p-6 text-left relative overflow-hidden">
              <div className="relative z-10">
                {/* Card accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(90deg, #7C3AED, #A855F7)' }} />

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accentLight" style={{ boxShadow: '0 0 6px #A855F7' }} />
                    <span className="section-label text-xs">Sample Brief — Today's Signal</span>
                  </div>
                  <span className="text-white/25 text-xs">March 25, 2026</span>
                </div>

                {/* OPPORTUNITY OF THE DAY label */}
                <div className="mb-4">
                  <span
                    className="text-xs font-display uppercase tracking-widest"
                    style={{ color: '#A855F7', fontWeight: 700, letterSpacing: '0.15em' }}
                  >
                    Opportunity of the Day
                  </span>
                </div>

                <div className="space-y-4">
                  <BriefRow
                    label="What"
                    text="Bundled offer structures are dramatically outperforming single-SKU pricing in direct-to-consumer categories. This isn't one person's take — it's showing up independently across case studies, keynote transcripts, and industry analyses published this week."
                  />
                  <BriefRow
                    label="Why Now"
                    text="Conversion costs in paid acquisition are up 18% quarter over quarter. Brands that restructured their offer architecture in the last 90 days are reporting 2x or higher return on ad spend compared to those still running single-product campaigns. The window is now — before this becomes standard practice and the advantage disappears."
                  />
                  <BriefRow
                    label="Potential"
                    text="Operators in the $1M to $10M revenue range who implemented bundled offer models saw an average 34% increase in average order value within 60 days. For a business running $50K/mo in ad spend, that translates to roughly $200K in incremental annual revenue with no increase in traffic costs."
                  />
                  <BriefRow
                    label="First Move"
                    text="Pull your top three products by margin. Build one bundled offer where the perceived value of the bonus exceeds the price of the core item. Test it against your current best-performing ad creative this week. Measure AOV shift over 7 days before scaling."
                  />
                </div>
              </div>
            </div>

            {/* Micro stat */}
            <p className="mt-6 text-white/30 text-xs text-center lg:text-left">
              You're not getting a summary. You're getting an intelligence layer.
            </p>
          </div>

          {/* Right: Hero image */}
          <div className="flex-shrink-0 lg:w-[380px] xl:w-[420px]">
            {/* Gradient border wrapper */}
            <div
              className="rounded-2xl p-px"
              style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.5), rgba(168,85,247,0.3))' }}
            >
              <div className="rounded-2xl overflow-hidden relative">
                {/* Purple tint overlay */}
                <div
                  className="absolute inset-0 z-10 rounded-2xl pointer-events-none"
                  style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.12) 0%, transparent 60%)' }}
                />
                <img
                  src="/hero-image.jpg"
                  alt="Brian Stewart — Founder, SignalScout"
                  className="w-full h-auto block"
                  style={{
                    boxShadow: '0 0 80px rgba(124,58,237,0.4), 0 0 160px rgba(124,58,237,0.15)',
                  }}
                />
              </div>
            </div>
          </div>

        </div>
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
