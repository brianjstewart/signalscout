import { useState } from 'react'
import type { FormEvent } from 'react'
import { supabase } from '../lib/supabase'
import { useReveal } from '../hooks/useReveal'

const PERKS = [
  'Your daily intelligence brief — personalized, delivered every morning',
  'Cross-source pattern detection across 100s of sources',
  'Slack, Telegram, or Email — wherever your day starts',
  'First brief within minutes of joining',
  'Deep Dive on Demand — ask anything, get sourced answers',
  'Locked founding member rate — never pay more',
]

const CHECKBOX_OPTIONS = [
  { key: 'too_much_content',  label: "Too much content, not enough time" },
  { key: 'missing_shifts',    label: "Missing important shifts in my industry" },
  { key: 'ahead_of_trends',   label: "Stay ahead of trends in my niche" },
  { key: 'competitor_edge',   label: "Find opportunities before competitors do" },
  { key: 'morning_brief',     label: "Faster morning briefing for me or my team" },
  { key: 'overwhelmed',       label: "Overwhelmed by what to pay attention to" },
  { key: 'pattern_detection', label: "See patterns across sources, not single articles" },
]

export default function FoundingMember() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [checkedKeys] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const ref = useReveal()

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const params = new URLSearchParams(window.location.search)
    const utm_source   = params.get('utm_source')   || null
    const utm_medium   = params.get('utm_medium')   || null
    const utm_campaign = params.get('utm_campaign') || null
    const utm_content  = params.get('utm_content')  || null
    const utm_term     = params.get('utm_term')     || null
    const referrer     = document.referrer           || null

    const reason = checkedKeys.join(',')

    try {
      const { error: dbError } = await supabase.from('signalscout_waitlist').insert([{
        full_name:    name,
        email,
        reason,
        utm_source,
        utm_medium,
        utm_campaign,
        utm_content,
        utm_term,
        referrer,
      }])

      if (dbError) {
        if (dbError.code === '23505') {
          setError("You're already on the list! We'll be in touch.")
          setLoading(false)
          return
        }
        throw dbError
      }

      try {
        await fetch('/api/waitlist-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email }),
        })
      } catch {
        console.error('Email send failed (non-fatal)')
      }

      setSubmitted(true)
    } catch (err) {
      console.error(err)
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <section id="waitlist" className="py-20 px-6">
        <div className="max-w-md mx-auto text-center glass-card p-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(90deg, #7C3AED, #A855F7)' }} />
          <div className="text-4xl mb-4">🎯</div>
          <h2 className="section-heading text-xl text-white mb-3">You're in.</h2>
          <p className="text-white/50 text-sm leading-relaxed">
            We'll reach out when your founding access opens. Check your email — confirmation is on its way.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="waitlist" className="py-20 px-6">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="reveal max-w-3xl mx-auto"
      >
        {/* Section header */}
        <div className="text-center mb-10">
          <p className="section-label mb-3">Founding Member Access</p>
          <h2 className="section-heading text-3xl sm:text-4xl text-white mb-3">Get your edge before we open.</h2>
          <p className="text-white/50 text-sm">$29/mo at launch · Founding members lock this rate forever</p>
        </div>

        {/* Perks — 3-column horizontal */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {PERKS.map((perk, i) => (
            <div key={i} className="flex items-start gap-3 p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(124,58,237,0.15)' }}>
              <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: 'rgba(124,58,237,0.25)' }}>
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4l2.5 2.5L9 1" stroke="#A855F7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="text-white/75 text-sm leading-snug">{perk}</span>
            </div>
          ))}
        </div>

        {/* Form — centered, max-w-md */}
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="glass-card p-6 space-y-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(90deg, #7C3AED, #A855F7)' }} />

            <div>
              <label className="form-label">Name</label>
              <input
                className="form-field"
                type="text"
                required
                placeholder="Your name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>

            <div>
              <label className="form-label">Email</label>
              <input
                className="form-field"
                type="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>

            {error && (
              <div className="rounded-lg px-4 py-3 text-sm" style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', color: '#FCA5A5' }}>
                {error}
              </div>
            )}

            <p className="text-white/40 text-xs italic text-center">
              Every morning you don't have this, someone in your space does.
            </p>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full text-center block"
              style={{ opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
            >
              {loading ? 'Claiming...' : 'Claim My Founding Spot'}
            </button>
          </form>

          <p className="text-white/40 text-xs text-center mt-3">
            Founding spots limited to 250 · 47 claimed so far
          </p>
        </div>
      </div>
    </section>
  )
}

// Keep CHECKBOX_OPTIONS export for potential future use
export { CHECKBOX_OPTIONS }
