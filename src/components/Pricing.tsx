import { useState } from 'react'

const features = [
  'Daily personalized intelligence brief',
  'Delivery via Slack Channel, Telegram, or Email',
  'Custom delivery time (4 AM to 10 AM)',
  'First brief within minutes of signup',
  'Deep cross-channel pattern detection',
  'Knowledge base: business, marketing, content, psychology',
  'Deep Dive on Demand — query the full transcript library',
]

export default function Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <section className="py-20 px-6" id="pricing">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-10">
          <p className="section-label mb-3">Pricing</p>
          <h2 className="section-heading text-3xl sm:text-4xl text-white mb-4">One plan. Everything included.</h2>
          <p className="text-white/60">No tiers. No feature gating. Just the full brief, every morning.</p>

          {/* Annual toggle */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <span className={`text-sm ${!annual ? 'text-white' : 'text-white/40'}`}>Monthly</span>
            <button
              onClick={() => setAnnual(a => !a)}
              className={`relative w-11 h-6 rounded-full transition-colors duration-200 focus:outline-none`}
              style={{ background: annual ? 'linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)' : 'rgba(255,255,255,0.15)' }}
              aria-label="Toggle annual billing"
            >
              <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform duration-200 ${annual ? 'translate-x-5' : 'translate-x-0'}`} />
            </button>
            <span className={`text-sm ${annual ? 'text-white' : 'text-white/40'}`}>
              Annual
              <span className="ml-2 text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(168,85,247,0.2)', color: '#A855F7' }}>Save $58</span>
            </span>
          </div>
        </div>

        {/* Single pricing card */}
        <div className="rounded-2xl p-px" style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)' }}>
          <div className="rounded-2xl p-8" style={{ background: '#0F0F1A' }}>
            <div className="flex items-end gap-2 mb-1">
              <span className="font-display font-800 text-5xl text-white">
                {annual ? '$290' : '$29'}
              </span>
              <span className="text-white/50 text-lg mb-1.5">{annual ? '/yr' : '/mo'}</span>
            </div>
            {annual && (
              <p className="text-sm text-accentLight mb-2">That's $24.17/mo — you save $58</p>
            )}
            <p className="text-white/50 text-sm mb-8">Billed {annual ? 'annually' : 'monthly'}. Cancel anytime.</p>

            <ul className="space-y-3 mb-8">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(124, 58, 237, 0.25)' }}>
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4l2.5 2.5L9 1" stroke="#A855F7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-white/80 text-sm leading-snug">{f}</span>
                </li>
              ))}
            </ul>

            <a href="#signup" className="btn-primary w-full text-center block">
              Start Your Morning Brief
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
