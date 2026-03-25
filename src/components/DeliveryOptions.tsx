const options = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    title: 'Slack Channel',
    description: 'Posts to your team channel every morning. Everyone starts with the same intel.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.91a16 16 0 006.36 6.36l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    title: 'Telegram',
    description: 'One message. Full brief. For operators who live in Telegram.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    title: 'Email',
    description: 'Lands in your inbox at your chosen time. Clean, formatted, ready to read.',
  },
]

export default function DeliveryOptions() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="section-label mb-3">Delivery Options</p>
          <h2 className="section-heading text-3xl sm:text-4xl text-white">Arrives where you already work</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {options.map((opt, i) => (
            <div key={i} className="glass-card p-6 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4"
                style={{ background: 'rgba(124, 58, 237, 0.15)', color: '#A855F7' }}>
                {opt.icon}
              </div>
              <h3 className="font-display font-700 text-white text-base mb-2">{opt.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{opt.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
