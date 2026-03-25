import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email } = req.body as { name: string; email: string }

  if (!name || !email) {
    return res.status(400).json({ error: 'Missing name or email' })
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY
  if (!RESEND_API_KEY) {
    console.error('RESEND_API_KEY not set')
    return res.status(500).json({ error: 'Email service not configured' })
  }

  const send = (payload: object) =>
    fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

  try {
    // 1. Confirmation email to the user
    await send({
      from: 'SignalScout <briefs@signalscout.ai>',
      to: [email],
      subject: "You're on the SignalScout waitlist",
      html: `
        <div style="font-family: Inter, sans-serif; background: #0A0A0F; color: white; padding: 40px; max-width: 600px; margin: 0 auto; border-radius: 12px;">
          <div style="font-family: Montserrat, sans-serif; font-size: 24px; font-weight: 800; margin-bottom: 24px; color: #A855F7;">
            SignalScout
          </div>
          <h1 style="font-size: 22px; font-weight: 700; margin-bottom: 16px; color: white;">
            You're on the list, ${name}. 🎯
          </h1>
          <p style="color: rgba(255,255,255,0.7); line-height: 1.7; margin-bottom: 16px;">
            We'll reach out when your founding access opens. As a founding member, you'll lock $29/mo for life — even when public pricing increases.
          </p>
          <p style="color: rgba(255,255,255,0.7); line-height: 1.7; margin-bottom: 24px;">
            Every morning you're on this list, we're building the system that delivers your edge before you open your inbox.
          </p>
          <p style="color: rgba(255,255,255,0.45); font-size: 13px; line-height: 1.6;">
            — The SignalScout Team
          </p>
        </div>
      `,
    })

    // 2. Notification email to Brian
    await send({
      from: 'SignalScout <briefs@signalscout.ai>',
      to: ['brian@brianstewart.co'],
      subject: `New waitlist signup: ${name}`,
      html: `
        <div style="font-family: Inter, sans-serif; background: #0A0A0F; color: white; padding: 40px; max-width: 600px; margin: 0 auto; border-radius: 12px;">
          <h2 style="color: #A855F7; font-family: Montserrat, sans-serif; margin-bottom: 20px;">New Founding Member Signup</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: rgba(255,255,255,0.5); font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; width: 120px;">Name</td>
              <td style="padding: 8px 0; color: white;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: rgba(255,255,255,0.5); font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
              <td style="padding: 8px 0; color: white;">${email}</td>
            </tr>
          </table>
        </div>
      `,
    })

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Email send error:', err)
    return res.status(500).json({ error: 'Failed to send email' })
  }
}
