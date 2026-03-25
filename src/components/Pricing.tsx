import { useReveal } from '../hooks/useReveal'

const features = [
  'Your daily intelligence brief — personalized to your goals, delivered every morning',
  'Cross-source pattern detection — we connect dots across platforms so you don\'t have to',
  'Slack, Telegram, or Email delivery — wherever your day starts',
  'Your brief arrives within minutes of signup — not tomorrow, right now',
  'Choose your delivery window — any time from 4 AM to 10 AM',
  'Intelligence across business, marketing, growth, content, and psychology',
  'Deep Dive on Demand — ask anything. We search the full source library and brief you back.',
]

export default function Pricing() {
  const ref = useReveal()

  return (
    <section className="py-20 px-6" id="pricing">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="reveal max-w-lg mx-auto"
      >
        <div className="text-center mb-10">
          <p className="section-label mb-3">Pricing</p>
          <h2 className="section-heading text-3xl sm:text-4xl text-white mb-4">One plan. Everything included.</h2>
          <p className="text-white/55">No tiers. No feature gating. Just the full brief, every morning.</p>
        </div>

        {/* Single pricing card — gradient border */}
        <div className="rounded-2xl p-px" style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)' }}>
          <div className="rounded-2xl p-8 sm:p-10" style={{ background: '#0F0F1A' }}>

            {/* Founding Member badge */}
            <div className="mb-4">
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full"
                style={{ background: 'rgba(168,85,247,0.15)', border: '1px solid rgba(168,85,247,0.3)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accentLight" />
                <span
                  className="text-xs font-display uppercase tracking-wider"
                  style={{ color: '#A855F7' }}
                >
                  Founding Member
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-end gap-2 mb-1">
              <span
                className="font-display text-5xl text-white"
                style={{ fontWeight: 800 }}
              >
                $29
              </span>
              <span className="text-white/45 text-lg mb-2">/mo</span>
            </div>

            {/* Rate lock anchor */}
            <p className="text-sm mb-1" style={{ color: '#A855F7' }}>
              Lock this rate forever — price increases when we launch publicly
            </p>
            <p className="text-white/40 text-sm mb-8">Billed monthly. Cancel anytime.</p>

            {/* Features */}
            <ul className="space-y-3 mb-6">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(124, 58, 237, 0.25)' }}
                  >
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4l2.5 2.5L9 1" stroke="#A855F7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-white/75 text-sm leading-snug">{f}</span>
                </li>
              ))}
            </ul>

            {/* Value anchor */}
            <p className="text-white/40 text-xs italic mb-6">
              You'd need 3+ hours of reading and watching to get what we deliver before breakfast.
            </p>

            <a href="#waitlist" className="btn-primary w-full text-center block">
              Join the Waitlist
            </a>

            <p className="text-center text-white/30 text-xs mt-4">No contracts. No setup fees. Cancel anytime.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
