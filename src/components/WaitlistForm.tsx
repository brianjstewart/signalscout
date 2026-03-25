import { useState } from 'react'
import type { FormEvent } from 'react'
import { supabase } from '../lib/supabase'
import { useReveal } from '../hooks/useReveal'

const checkboxOptions = [
  "I'm spending too much time consuming content and not enough acting on it",
  "I keep missing important industry shifts until it's too late",
  "I want to know what's working for other operators in my space right now",
  "I need a faster way to brief myself (or my team) every morning",
  "I'm interested in cross-source pattern detection (not just single-article summaries)",
  "I heard about it from someone I trust",
]

export default function WaitlistForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [checkedOptions, setCheckedOptions] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const ref = useReveal()

  function toggleOption(option: string) {
    setCheckedOptions(prev =>
      prev.includes(option) ? prev.filter(o => o !== option) : [...prev, option]
    )
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    const reason = checkedOptions.join(', ')
    try {
      const { error: dbError } = await supabase.from('signalscout_waitlist').insert([{
        full_name: name,
        email,
        reason,
        created_at: new Date().toISOString(),
      }])
      if (dbError) throw dbError
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
          <h2 className="section-heading text-xl text-white mb-2">You're on the list.</h2>
          <p className="text-white/50 text-sm">We'll reach out when your spot opens up.</p>
        </div>
      </section>
    )
  }

  return (
    <section id="waitlist" className="py-20 px-6">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="reveal max-w-md mx-auto"
      >
        <div className="text-center mb-8">
          <p className="section-label mb-3">Waitlist</p>
          <h2 className="section-heading text-2xl sm:text-3xl text-white mb-2">Reserve your brief.</h2>
          <p className="text-white/50 text-sm">SignalScout is launching soon. Join the waitlist and be first to get your daily intelligence brief.</p>
        </div>

        <form onSubmit={handleSubmit} className="glass-card p-6 space-y-4 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: 'linear-gradient(90deg, transparent, rgba(168,85,247,0.3), transparent)' }} />

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

          <div>
            <label className="form-label mb-3 block">What drew you to SignalScout? (select all that apply)</label>
            <div className="space-y-2.5">
              {checkboxOptions.map((option) => (
                <label
                  key={option}
                  className="flex items-start gap-3 cursor-pointer group"
                >
                  <div className="relative shrink-0 mt-0.5">
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={checkedOptions.includes(option)}
                      onChange={() => toggleOption(option)}
                    />
                    <div
                      className="w-5 h-5 rounded transition-all duration-150 flex items-center justify-center"
                      style={{
                        background: checkedOptions.includes(option) ? 'rgba(124,58,237,0.35)' : 'rgba(255,255,255,0.06)',
                        border: checkedOptions.includes(option) ? '1.5px solid #A855F7' : '1.5px solid rgba(255,255,255,0.2)',
                      }}
                    >
                      {checkedOptions.includes(option) && (
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4l2.5 2.5L9 1" stroke="#A855F7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="text-white/65 text-sm leading-snug group-hover:text-white/85 transition-colors duration-150">
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {error && (
            <div className="rounded-lg px-4 py-3 text-sm" style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', color: '#FCA5A5' }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="btn-secondary w-full text-center block"
            style={{ opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
          >
            {loading ? 'Joining...' : 'Join the Waitlist'}
          </button>
        </form>
      </div>
    </section>
  )
}
