import { useState } from 'react'

const items = [
  {
    q: 'How is this different from just following YouTube channels?',
    a: 'Subscribing gives you a feed. SignalScout gives you synthesis. We don\'t just tell you a video was published — we extract the transcript, identify frameworks, spot patterns across creators, and compress it into a 4-section brief you can read in 5 minutes. You\'d need 3+ hours of watching to get what we deliver before breakfast.',
  },
  {
    q: 'How do you personalize my brief?',
    a: 'You tell us your goals and share your social profiles. We analyze your context — what industry you\'re in, what stage of business you\'re at, what topics you\'re already engaging with — and map that against our knowledge base to surface what\'s most relevant to you specifically.',
  },
  {
    q: 'What if I want my whole team briefed?',
    a: 'Choose Slack Channel delivery. Your brief posts to a shared channel every morning. No forwarding, no "did you see that" threads. Everyone starts with the same intelligence.',
  },
  {
    q: 'How fast is the first brief?',
    a: 'Within minutes of completing signup. We generate your personalized brief immediately from your questionnaire and social profile data. You don\'t wait until tomorrow.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="section-label mb-3">FAQ</p>
          <h2 className="section-heading text-3xl sm:text-4xl text-white">Common questions</h2>
        </div>

        <div className="space-y-3">
          {items.map((item, i) => (
            <div key={i} className="glass-card overflow-hidden">
              <button
                className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 focus:outline-none"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-display font-700 text-white text-sm leading-snug">{item.q}</span>
                <span className="shrink-0 mt-0.5 transition-transform duration-200 text-accentLight"
                  style={{ transform: open === i ? 'rotate(45deg)' : 'none' }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-white/60 text-sm leading-relaxed">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
