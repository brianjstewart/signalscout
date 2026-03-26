import React from 'react'
import { useReveal } from '../hooks/useReveal'

const steps = [
  {
    number: '01',
    title: 'Tell us your goals',
    description: 'Complete a 2-minute questionnaire about what you\'re building and where you want to grow.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="6"/>
        <circle cx="12" cy="12" r="2"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Add your social profiles',
    description: 'Share your IG, Facebook, or LinkedIn. We analyze your context to personalize your brief.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Pick your delivery',
    description: 'Slack Channel, Telegram, or Email. Pick your time window — 4 AM to 10 AM.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/>
        <path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'First brief in minutes',
    description: 'Not tomorrow. Within minutes of signing up, your personalized intelligence brief is ready.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
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
          <h2 className="section-heading text-3xl sm:text-4xl text-white">You're reading your first brief before breakfast.</h2>
        </div>

        <div
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((step, i) => (
            <div key={i} className="glass-card p-6 relative group hover:border-accent/40 transition-colors duration-300">
              {/* Icon */}
              <div className="mb-4">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(124,58,237,0.15)', border: '2px solid rgba(124,58,237,0.35)' }}
                >
                  {step.icon}
                </div>
              </div>

              {/* Step number */}
              <div
                className="font-display text-2xl mb-3 leading-none"
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
