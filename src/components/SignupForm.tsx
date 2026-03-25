import { useState } from 'react'
import type { FormEvent } from 'react'
import { supabase } from '../lib/supabase'
import { sendConfirmationEmail, sendNotificationEmail } from '../lib/email'
import { useReveal } from '../hooks/useReveal'

interface FormData {
  full_name: string
  email: string
  delivery_channel: string
  delivery_time: string
  ig_handle: string
  facebook_url: string
  linkedin_url: string
  what_building: string
  primary_goal: string
}

const initialForm: FormData = {
  full_name: '',
  email: '',
  delivery_channel: '',
  delivery_time: '',
  ig_handle: '',
  facebook_url: '',
  linkedin_url: '',
  what_building: '',
  primary_goal: '',
}

export default function SignupForm() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const ref = useReveal()

  function set(field: keyof FormData, value: string) {
    setForm(f => ({ ...f, [field]: value }))
  }

  function hasSocialProfile() {
    return form.ig_handle.trim() || form.facebook_url.trim() || form.linkedin_url.trim()
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')

    if (!hasSocialProfile()) {
      setError('Please provide at least one social profile (Instagram, Facebook, or LinkedIn).')
      return
    }

    setLoading(true)

    try {
      const { error: dbError } = await supabase.from('signalscout_signups').insert([{
        full_name: form.full_name,
        email: form.email,
        plan: '$29/mo',
        delivery_channel: form.delivery_channel,
        delivery_time: form.delivery_time,
        ig_handle: form.ig_handle || null,
        facebook_url: form.facebook_url || null,
        linkedin_url: form.linkedin_url || null,
        what_building: form.what_building,
        primary_goal: form.primary_goal,
        created_at: new Date().toISOString(),
      }])

      if (dbError) throw dbError

      await Promise.all([
        sendConfirmationEmail(form.email, form.full_name, form.delivery_channel, form.delivery_time),
        sendNotificationEmail({
          full_name: form.full_name,
          email: form.email,
          delivery_channel: form.delivery_channel,
          delivery_time: form.delivery_time,
          ig_handle: form.ig_handle,
          facebook_url: form.facebook_url,
          linkedin_url: form.linkedin_url,
          what_building: form.what_building,
          primary_goal: form.primary_goal,
        }),
      ])

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
      <section id="signup" className="py-20 px-6">
        <div className="max-w-xl mx-auto text-center glass-card p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(90deg, #7C3AED, #A855F7)' }} />
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)' }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h2 className="section-heading text-2xl text-white mb-3">You're in.</h2>
          <p className="text-white/65 leading-relaxed">
            Your first brief is being generated right now. Check your{' '}
            <strong className="text-white">{form.delivery_channel}</strong>{' '}
            within the next few minutes.
          </p>
          <p className="text-white/35 text-xs mt-4">
            Going forward, your brief arrives at <strong className="text-white/50">{form.delivery_time}</strong> every morning.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="signup" className="py-20 px-6">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="reveal max-w-xl mx-auto"
      >
        <div className="text-center mb-10">
          <p className="section-label mb-3">Get Started</p>
          <h2 className="section-heading text-3xl sm:text-4xl text-white mb-3">Start Your Morning Brief</h2>
          <p className="text-white/50">$29/mo. Your first brief arrives within minutes.</p>
        </div>

        <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5 relative overflow-hidden">
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(90deg, #7C3AED, #A855F7)' }} />

          {/* Name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="form-label">Full Name</label>
              <input
                className="form-field"
                type="text"
                required
                placeholder="Brian Stewart"
                value={form.full_name}
                onChange={e => set('full_name', e.target.value)}
              />
            </div>
            <div>
              <label className="form-label">Email Address</label>
              <input
                className="form-field"
                type="email"
                required
                placeholder="you@example.com"
                value={form.email}
                onChange={e => set('email', e.target.value)}
              />
            </div>
          </div>

          {/* Delivery channel + time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="form-label">Delivery Channel</label>
              <select
                className="form-field"
                required
                value={form.delivery_channel}
                onChange={e => set('delivery_channel', e.target.value)}
              >
                <option value="">Select channel</option>
                <option value="Slack Channel">Slack Channel</option>
                <option value="Telegram">Telegram</option>
                <option value="Email">Email</option>
              </select>
            </div>
            <div>
              <label className="form-label">Delivery Time</label>
              <select
                className="form-field"
                required
                value={form.delivery_time}
                onChange={e => set('delivery_time', e.target.value)}
              >
                <option value="">Select time</option>
                {['4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM'].map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Social profiles */}
          <div>
            <label className="form-label">
              Social Profiles{' '}
              <span className="text-white/35">(at least one required — used to personalize your brief)</span>
            </label>
            <div className="space-y-3">
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 text-sm">@</span>
                <input
                  className="form-field"
                  style={{ paddingLeft: '1.75rem' }}
                  type="text"
                  placeholder="Instagram handle"
                  value={form.ig_handle}
                  onChange={e => set('ig_handle', e.target.value)}
                />
              </div>
              <input
                className="form-field"
                type="url"
                placeholder="Facebook profile URL"
                value={form.facebook_url}
                onChange={e => set('facebook_url', e.target.value)}
              />
              <input
                className="form-field"
                type="url"
                placeholder="LinkedIn profile URL"
                value={form.linkedin_url}
                onChange={e => set('linkedin_url', e.target.value)}
              />
            </div>
          </div>

          {/* What are you building */}
          <div>
            <label className="form-label">
              What are you building?{' '}
              <span className="text-white/35">(2–3 sentences)</span>
            </label>
            <textarea
              className="form-field min-h-[88px] resize-none"
              required
              placeholder="I'm scaling a D2C ecommerce brand in the auto parts space, building an agency focused on Shopify growth..."
              value={form.what_building}
              onChange={e => set('what_building', e.target.value)}
            />
          </div>

          {/* Primary goal */}
          <div>
            <label className="form-label">Primary Goal</label>
            <select
              className="form-field"
              required
              value={form.primary_goal}
              onChange={e => set('primary_goal', e.target.value)}
            >
              <option value="">Select your goal</option>
              <option value="Grow business revenue">Grow business revenue</option>
              <option value="Scale my marketing">Scale my marketing</option>
              <option value="Build personal income">Build personal income</option>
              <option value="Learn faster">Learn faster</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Error */}
          {error && (
            <div className="rounded-lg px-4 py-3 text-sm" style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', color: '#FCA5A5' }}>
              {error}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full text-center block"
            style={{ opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12a9 9 0 11-6.219-8.56" strokeLinecap="round" />
                </svg>
                Submitting...
              </span>
            ) : 'Get My First Brief Now'}
          </button>

          <p className="text-center text-white/30 text-xs">$29/mo · Cancel anytime · No contracts</p>
        </form>
      </div>
    </section>
  )
}
