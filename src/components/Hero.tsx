import { FEED_ENTRIES, getSlug } from '../data/feedEntries'

export default function Hero() {
  const todayEntry = FEED_ENTRIES[0]
  const todaySlug = getSlug(todayEntry.opportunity)
  const truncate = (text: string, limit: number) =>
    text.length > limit ? text.slice(0, limit) + '…' : text

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

        {/* Two-column row: on mobile brief card appears ABOVE text (flex-col-reverse) */}
        <div className="flex flex-col-reverse lg:flex-row items-start gap-12 lg:gap-16">

          {/* Left: Text + CTA only */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accentLight animate-pulse" />
              <span className="section-label text-xs">AI Intelligence Brief</span>
            </div>

            {/* Headline — gradient flipped: purple → white */}
            <h1
              className="section-heading text-3xl sm:text-4xl md:text-5xl leading-tight mb-6"
              style={{ background: 'linear-gradient(135deg, #A855F7 0%, #ffffff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              Know what matters. Before everyone else.
            </h1>

            {/* Subheadline — Sloane's version */}
            <p className="text-lg md:text-xl text-white/65 max-w-2xl lg:max-w-none mx-auto leading-relaxed mb-10">
              SignalScout monitors hundreds of expert sources across platforms and delivers one thing every morning: the pattern everyone in your space is about to start talking about — before they do.
            </p>

            {/* Single CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-3">
              <a href="#waitlist" className="btn-primary text-center">Join the Waitlist</a>
            </div>

            {/* Micro-note */}
            <p className="text-white/35 text-xs text-center lg:text-left">
              $29/mo at launch · Founding members lock this rate forever
            </p>
          </div>

          {/* Right: Brief card — product demo */}
          <div className="flex-shrink-0 lg:w-[480px] xl:w-[520px] lg:sticky lg:top-28 w-full">
            <div className="glass-card p-6 text-left relative overflow-hidden">
              <div className="relative z-10">
                {/* Card accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(90deg, #7C3AED, #A855F7)' }} />

                {/* Slack-style header with Live chip inline */}
                <div className="flex items-center justify-between mb-3 pt-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accentLight flex-shrink-0" style={{ boxShadow: '0 0 6px #A855F7' }} />
                    <span className="text-white font-semibold text-sm">📅 {todayEntry.date}</span>
                  </div>
                  {/* Live Brief chip — inline right of date */}
                  <div
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-full flex-shrink-0"
                    style={{ background: 'rgba(124,58,237,0.2)', border: '1px solid rgba(168,85,247,0.35)' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs font-display uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em' }}>Live</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 mb-3" />

                {/* OPPORTUNITY OF THE DAY */}
                <p className="text-white font-bold text-sm uppercase tracking-wide mb-3">OPPORTUNITY OF THE DAY</p>
                <p className="text-accentLight font-semibold text-sm mb-3">{todayEntry.opportunity}</p>

                <div className="space-y-0">
                  <p className="text-white/75 text-sm leading-relaxed">
                    <span className="text-white font-semibold">• What: </span>
                    <span className="sm:hidden">{todayEntry.mobileText?.what ?? truncate(todayEntry.what, 100)}</span>
                    <span className="hidden sm:inline">{truncate(todayEntry.what, 220)}</span>
                  </p>

                  <div className="border-t my-4" style={{ borderColor: 'rgba(255,255,255,0.06)' }} />

                  <p className="text-white/75 text-sm leading-relaxed">
                    <span className="text-white font-semibold">• Why now: </span>
                    <span className="sm:hidden">{todayEntry.mobileText?.whyNow ?? truncate(todayEntry.whyNow, 100)}</span>
                    <span className="hidden sm:inline">{truncate(todayEntry.whyNow, 200)}</span>
                  </p>

                  <div className="border-t my-4" style={{ borderColor: 'rgba(255,255,255,0.06)' }} />

                  <p className="text-white/75 text-sm leading-relaxed">
                    <span className="text-white font-semibold">• Potential: </span>
                    <span className="sm:hidden">{todayEntry.mobileText?.potential ?? truncate(todayEntry.potential, 100)}</span>
                    <span className="hidden sm:inline">{truncate(todayEntry.potential, 200)}</span>
                  </p>

                  <div className="border-t my-4" style={{ borderColor: 'rgba(255,255,255,0.06)' }} />

                  <p className="text-white/75 text-sm leading-relaxed">
                    <span className="text-white font-semibold">• First move: </span>
                    <span className="sm:hidden">{todayEntry.mobileText?.firstMove ?? truncate(todayEntry.firstMove, 120)}</span>
                    <span className="hidden sm:inline">{truncate(todayEntry.firstMove, 200)}</span>
                  </p>
                </div>

                {/* Closing divider */}
                <div className="border-t border-white/10 mt-4" />

                {/* Links */}
                <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <a
                    href={`/blog?post=${todaySlug}`}
                    className="text-sm font-semibold transition-colors duration-200"
                    style={{ color: '#A855F7' }}
                  >
                    Read full analysis →
                  </a>
                  <a
                    href="/founders-feed"
                    className="text-sm font-medium transition-colors duration-200 text-white/45 hover:text-white/70"
                  >
                    See all opportunities →
                  </a>
                </div>
              </div>
            </div>

            {/* Micro stat — bumped opacity and size */}
            <p className="mt-4 text-white/60 text-sm font-medium text-center">
              You're not getting a summary. You're getting an intelligence layer.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}
