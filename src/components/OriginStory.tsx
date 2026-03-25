export default function OriginStory() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="section-label mb-6">Why This Exists</p>
        <h2 className="section-heading text-2xl sm:text-3xl text-white mb-10 leading-snug">
          Built by an operator who got tired of missing what his experts were saying
        </h2>

        <div className="glass-card p-8 relative">
          {/* Quote mark */}
          <div className="absolute -top-5 left-8 text-6xl leading-none font-display text-accent opacity-40 select-none">"</div>
          <blockquote className="text-white/80 text-lg leading-relaxed italic mb-6">
            I follow 20+ YouTube channels and never had time to watch them. Now I get one brief every morning with everything that matters — including connections across channels I'd never catch on my own.
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-display font-700 text-sm"
              style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)' }}>
              BS
            </div>
            <div className="text-left">
              <p className="text-white font-semibold text-sm">Brian Stewart</p>
              <p className="text-white/50 text-xs">Founder, SignalScout</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
