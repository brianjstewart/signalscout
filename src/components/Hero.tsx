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
        {/* Split layout: text left, image right on desktop */}
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
              Your experts published new content last night.{' '}
              <span style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline' }}>
                Here's what actually matters.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-white/65 max-w-2xl lg:max-w-none mx-auto leading-relaxed mb-10">
              Tell us what you're building. SignalScout analyzes your goals and social profiles, then briefs you every morning with exactly what the best operators in the world are saying about it.
            </p>

            {/* Single CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a href="#signup" className="btn-primary text-center">Start Your Morning Brief</a>
            </div>

            {/* Sample Brief Card */}
            <div
              className="glass-card max-w-xl mx-auto lg:mx-0 p-6 text-left relative overflow-hidden"
              style={{
                backgroundImage: 'url(/brief-card-bg.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Dark overlay for readability */}
              <div className="absolute inset-0 rounded-xl" style={{ background: 'rgba(10,10,15,0.75)' }} />

              {/* Card content (above overlay) */}
              <div className="relative z-10">
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
                    text={
                      <>
                        <strong className="text-purple-400">Alex Hormozi</strong> published a new offer stacking framework Tuesday.{' '}
                        <strong className="text-purple-400">Dan Martell</strong> independently validated the same model in a separate video Thursday. Two of the top operator creators converged on the same idea in 72 hours.
                      </>
                    }
                  />
                  <BriefRow
                    label="Why Now"
                    text="This isn't a coincidence — it's a signal. When creators at this level publish independently on the same framework within days, it means the idea is hitting the operator market hard right now. Early movers who implement in Q2 will have a 90-day head start on competitors who catch it in newsletters 6 weeks later."
                  />
                  <BriefRow
                    label="Potential"
                    text="Offer stacking has historically driven 3–5x improvement in conversion rates for D2C brands in the $1M–$5M ARR range. If you're running paid ads, this is worth a 2-hour implementation test this week."
                  />
                  <BriefRow
                    label="First Move"
                    text={
                      <>
                        Pull your current offer structure. Add one irresistible bonus to your primary offer (not a discount). Test it on your next ad creative this week.{' '}
                        <strong className="text-purple-400">Hormozi's</strong> exact framework: the bonus must be worth more perceived value than the core offer price.
                      </>
                    }
                  />
                </div>
              </div>
            </div>

            {/* Micro stat */}
            <p className="mt-6 text-white/30 text-xs text-center lg:text-left">No fluff. No filler. Every section is actionable.</p>
          </div>

          {/* Right: Hero Image (desktop only) */}
          <div className="hidden lg:block flex-shrink-0 w-[420px] xl:w-[480px]">
            <div className="relative rounded-2xl overflow-hidden" style={{ boxShadow: '0 0 60px rgba(124,58,237,0.25), 0 0 120px rgba(124,58,237,0.1)' }}>
              <img
                src="/hero-image.jpg"
                alt="SignalScout morning intelligence brief on a dark desk at dawn"
                className="w-full h-auto object-cover"
                style={{ maxHeight: '580px' }}
              />
              {/* Subtle purple tint overlay */}
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.08) 0%, transparent 60%)' }} />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function BriefRow({ label, text }: { label: string; text: React.ReactNode }) {
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
