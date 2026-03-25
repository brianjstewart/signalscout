import { useState } from 'react'
import type { FormEvent } from 'react'
import { supabase } from '../lib/supabase'

export default function WaitlistForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [reason, setReason] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
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
        <div className="max-w-md mx-auto text-center glass-card p-10">
          <div className="text-3xl mb-4">🎯</div>
          <h2 className="section-heading text-xl text-white mb-2">You're on the list.</h2>
          <p className="text-white/60 text-sm">We'll reach out when your spot opens up.</p>
        </div>
      </section>
    )
  }

  return (
    <section id="waitlist" className="py-20 px-6">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <p className="section-label mb-3">Waitlist</p>
          <h2 className="section-heading text-2xl sm:text-3xl text-white mb-2">Not ready yet?</h2>
          <p className="text-white/60 text-sm">Reserve your spot. We'll let you know when it's time.</p>
        </div>

        <form onSubmit={handleSubmit} className="glass-card p-6 space-y-4">
          <div>
            <label className="form-label">Name</label>
            <input className="form-field" type="text" required placeholder="Your name"
              value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div>
            <label className="form-label">Email</label>
            <input className="form-field" type="email" required placeholder="you@example.com"
              value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div>
            <label className="form-label">What drew you to SignalScout?</label>
            <textarea className="form-field min-h-[80px] resize-none"
              placeholder="I'm tired of missing content from creators I follow..."
              value={reason} onChange={e => setReason(e.target.value)} />
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button type="submit" disabled={loading}
            className="btn-secondary w-full text-center block"
            style={{ opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}>
            {loading ? 'Joining...' : 'Join the Waitlist'}
          </button>
        </form>
      </div>
    </section>
  )
}
