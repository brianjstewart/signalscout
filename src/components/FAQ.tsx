import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

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
  {
    q: 'Isn\'t this just ChatGPT summarizing YouTube transcripts?',
    a: 'No. ChatGPT doesn\'t watch 20 expert channels overnight, cross-reference patterns across all of them, and tell you when Hormozi and Martell publish the same framework in the same week. Generic AI summarization gives you one video at a time. SignalScout gives you the intelligence layer on top — the connections, the timing, and the \'why this matters now\' that no single-video summary can deliver.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const ref = useReveal()

  return (
    <section className="py-20 px-6" id="faq">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="reveal max-w-2xl mx-auto"
      >
        <div className="text-center mb-12">
          <p className="section-label mb-3">FAQ</p>
          <h2 className="section-heading text-3xl sm:text-4xl text-white">Common questions</h2>
        </div>

        <div className="space-y-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="glass-card overflow-hidden transition-colors duration-200"
              style={{ borderColor: open === i ? 'rgba(124,58,237,0.35)' : 'rgba(255,255,255,0.1)' }}
            >
              <button
                className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 focus:outline-none"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span
                  className="font-display text-white text-sm leading-snug"
                  style={{ fontWeight: 700 }}
                >
                  {item.q}
                </span>
                <span
                  className="shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{
                    background: open === i ? 'rgba(124,58,237,0.25)' : 'rgba(255,255,255,0.07)',
                    color: open === i ? '#A855F7' : 'rgba(255,255,255,0.4)',
                    transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
              </button>

              {/* Smooth accordion */}
              <div
                className="faq-answer"
                style={{ gridTemplateRows: open === i ? '1fr' : '0fr' }}
              >
                <div>
                  <p className="px-6 pb-5 text-white/55 text-sm leading-relaxed">{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
