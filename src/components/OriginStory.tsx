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
          Every day the best intelligence in your industry goes unread. Here's why that changes.
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
            Trying to pull real opportunities out of 100+ YouTube channels, 50+ podcasts, LinkedIn, articles, blogs, and newsletters from the best creators, educators, and operators in the game every single day is nearly impossible. You miss things. You fall behind. That's exactly why I built this.
          </blockquote>

          <div className="flex items-center justify-center gap-3">
            <img
              src="/hero-image.jpg"
              alt="Brian Stewart"
              className="w-10 h-10 rounded-full object-cover"
              style={{ border: '2px solid rgba(124,58,237,0.5)' }}
            />
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
