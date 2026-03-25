import { useReveal } from '../hooks/useReveal'

const steps = [
  {
    number: '01',
    title: 'Tell us your goals',
    description: 'Complete a 2-minute questionnaire about what you\'re building and where you want to grow.',
  },
  {
    number: '02',
    title: 'Add your social profiles',
    description: 'Share your IG, Facebook, or LinkedIn. We mine your context to personalize your brief.',
  },
  {
    number: '03',
    title: 'Pick your delivery',
    description: 'Slack Channel, Telegram, or Email. Pick your time window — 4 AM to 10 AM.',
  },
  {
    number: '04',
    title: 'First brief in minutes',
    description: 'Not tomorrow. Within minutes of signing up, your personalized intelligence brief is ready.',
  },
]

export default function HowItWorks() {
  const titleRef = useReveal()
  const gridRef = useReveal(0.1)

  return (
    <section className="py-20 px-6" id="how-it-works">
      <div className="max-w-5xl mx-auto">
        <div
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className="reveal text-center mb-14"
        >
          <p className="section-label mb-3">How It Works</p>
          <h2 className="section-heading text-3xl sm:text-4xl text-white">Up and running in minutes</h2>
        </div>

        <div
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((step, i) => (
            <div key={i} className="glass-card p-6 relative group hover:border-accent/40 transition-colors duration-300">
              {/* Step number */}
              <div
                className="font-display text-4xl mb-4 leading-none"
                style={{
                  background: 'linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 800,
                }}
              >
                {step.number}
              </div>
              <h3 className="font-display text-white text-base mb-2 leading-snug" style={{ fontWeight: 700 }}>
                {step.title}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">{step.description}</p>

              {/* Arrow connector (desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="rgba(168,85,247,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
