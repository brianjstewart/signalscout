// Email is sent via Supabase Edge Function or direct Resend API
// We call Resend REST API directly from the client for confirmation emails

const RESEND_API_KEY = 're_E9vzrQ5t_4ev9uRQKsuEtEjtGciaBo8av'

export async function sendConfirmationEmail(to: string, name: string, deliveryChannel: string, deliveryTime: string) {
  try {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'SignalScout <briefs@signalscout.ai>',
        to: [to],
        subject: 'Your first SignalScout brief is being generated',
        html: `
          <div style="font-family: Inter, sans-serif; background: #0A0A0F; color: white; padding: 40px; max-width: 600px; margin: 0 auto; border-radius: 12px;">
            <div style="background: linear-gradient(135deg, #7C3AED 0%, #A855F7 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Montserrat, sans-serif; font-size: 28px; font-weight: 800; margin-bottom: 24px;">
              SignalScout
            </div>
            <h1 style="font-size: 22px; font-weight: 700; margin-bottom: 16px; color: white;">Welcome, ${name} 👋</h1>
            <p style="color: rgba(255,255,255,0.7); line-height: 1.6; margin-bottom: 16px;">
              Your personalized intelligence brief is being generated right now. Check your <strong style="color: white;">${deliveryChannel}</strong> within the next few minutes.
            </p>
            <p style="color: rgba(255,255,255,0.7); line-height: 1.6; margin-bottom: 16px;">
              Going forward, your daily brief will arrive at <strong style="color: white;">${deliveryTime}</strong> every morning.
            </p>
            <p style="color: rgba(255,255,255,0.7); line-height: 1.6;">
              — The SignalScout Team
            </p>
          </div>
        `,
      }),
    })
  } catch (err) {
    console.error('Failed to send confirmation email:', err)
  }
}

export async function sendNotificationEmail(signupData: Record<string, string>) {
  try {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'SignalScout <briefs@signalscout.ai>',
        to: ['brian@brianstewart.co'],
        subject: `New SignalScout signup: ${signupData.full_name}`,
        html: `
          <div style="font-family: Inter, sans-serif; background: #0A0A0F; color: white; padding: 40px; max-width: 600px; margin: 0 auto; border-radius: 12px;">
            <h2 style="color: #A855F7; font-family: Montserrat, sans-serif; margin-bottom: 20px;">New Signup</h2>
            <table style="width: 100%; border-collapse: collapse;">
              ${Object.entries(signupData).map(([k, v]) => `
                <tr>
                  <td style="padding: 8px 0; color: rgba(255,255,255,0.5); font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; width: 160px;">${k.replace(/_/g, ' ')}</td>
                  <td style="padding: 8px 0; color: white;">${v || '—'}</td>
                </tr>
              `).join('')}
            </table>
          </div>
        `,
      }),
    })
  } catch (err) {
    console.error('Failed to send notification email:', err)
  }
}
