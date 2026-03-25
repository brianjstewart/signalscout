import { useReveal } from '../hooks/useReveal'

const options = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    title: 'Slack Channel',
    description: 'Posts to your team channel every morning. Everyone starts with the same intel — no forwarding required.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.5 2L2 8.5l7.5 3.5 3.5 7.5L21.5 2z" />
        <path d="M9.5 12L14 17" />
      </svg>
    ),
    title: 'Telegram',
    description: 'One message. Full brief. Delivered directly to your Telegram — ideal for operators who live there.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    title: 'Email',
    description: 'Lands in your inbox at your chosen time. Clean, formatted, and ready to action.',
  },
]

export default function DeliveryOptions() {
  const titleRef = useReveal()
  const gridRef = useReveal(0.1)

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className="reveal text-center mb-12"
        >
          <p className="section-label mb-3">Delivery Options</p>
          <h2 className="section-heading text-3xl sm:text-4xl text-white">Arrives where you already work</h2>
        </div>

        <div
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className="reveal-stagger grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {options.map((opt, i) => (
            <div
              key={i}
              className="glass-card p-6 text-center group hover:border-accent/40 transition-all duration-300 hover:translate-y-[-2px]"
            >
              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 transition-colors duration-300"
                style={{ background: 'rgba(124, 58, 237, 0.15)', color: '#A855F7' }}
              >
                {opt.icon}
              </div>
              <h3 className="font-display text-white text-base mb-2" style={{ fontWeight: 700 }}>
                {opt.title}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">{opt.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
