import { useReveal } from '../hooks/useReveal'

export default function OriginStory() {
  const ref = useReveal()

  return (
    <section className="py-20 px-6">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="reveal max-w-3xl mx-auto text-center"
      >
        <p className="section-label mb-6">Why This Exists</p>
        <h2 className="section-heading text-2xl sm:text-3xl text-white mb-10 leading-snug">
          Built by an operator who got tired of missing what his experts were saying
        </h2>

        <div className="glass-card p-8 sm:p-10 relative">
          {/* Top accent line */}
          <div className="absolute top-0 left-8 right-8 h-[1px]" style={{ background: 'linear-gradient(90deg, transparent, rgba(168,85,247,0.4), transparent)' }} />
          {/* Quote mark */}
          <div
            className="absolute -top-5 left-8 text-7xl leading-none font-display select-none"
            style={{ color: '#7C3AED', opacity: 0.35, fontWeight: 800 }}
          >"</div>

          <blockquote className="text-white/80 text-lg sm:text-xl leading-relaxed italic mb-8 mt-4">
            I follow 20+ YouTube channels and never had time to watch them. Now I get one brief every morning with everything that matters — including connections across channels I'd never catch on my own.
          </blockquote>

          <div className="flex items-center justify-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-display text-sm"
              style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)', fontWeight: 700 }}
            >
              BS
            </div>
            <div className="text-left">
              <p className="text-white font-semibold text-sm">Brian Stewart</p>
              <p className="text-white/45 text-xs">Founder, SignalScout · CGO, BMP Tuning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
