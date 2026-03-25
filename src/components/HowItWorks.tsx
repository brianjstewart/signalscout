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
    title: 'Your first brief arrives immediately',
    description: 'Not tomorrow. Within minutes of signing up, your personalized intelligence brief is ready.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-label mb-3">How It Works</p>
          <h2 className="section-heading text-3xl sm:text-4xl text-white">Up and running in minutes</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="glass-card p-6 relative">
              <div className="font-display font-800 text-4xl mb-4 leading-none"
                style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {step.number}
              </div>
              <h3 className="font-display font-700 text-white text-base mb-2 leading-snug">{step.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-white/20 text-xl z-10">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
