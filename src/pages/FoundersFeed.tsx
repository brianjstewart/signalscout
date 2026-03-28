import { useRef } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FEED_ENTRIES } from '../data/feedEntries'

// ---------------------------------------------------------------------------
// Canvas share card generator
// ---------------------------------------------------------------------------
function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number,
  maxLines: number,
): number {
  const words = text.split(' ')
  let line = ''
  let linesDrawn = 0

  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + ' '
    const metrics = ctx.measureText(testLine)
    if (metrics.width > maxWidth && n > 0) {
      if (linesDrawn >= maxLines - 1) {
        // truncate with ellipsis
        let truncated = line.trimEnd()
        while (ctx.measureText(truncated + '…').width > maxWidth && truncated.length > 0) {
          truncated = truncated.slice(0, -1)
        }
        ctx.fillText(truncated + '…', x, y + linesDrawn * lineHeight)
        linesDrawn++
        return linesDrawn
      }
      ctx.fillText(line, x, y + linesDrawn * lineHeight)
      line = words[n] + ' '
      linesDrawn++
    } else {
      line = testLine
    }
  }
  if (line.trim()) {
    ctx.fillText(line, x, y + linesDrawn * lineHeight)
    linesDrawn++
  }
  return linesDrawn
}

async function generateShareCard(entry: typeof FEED_ENTRIES[0]): Promise<Blob> {
  const SIZE = 1080
  const canvas = document.createElement('canvas')
  canvas.width = SIZE
  canvas.height = SIZE
  const ctx = canvas.getContext('2d')!

  // Ensure fonts are loaded
  try {
    await document.fonts.load('bold 36px Montserrat')
    await document.fonts.load('bold 28px Montserrat')
    await document.fonts.load('16px Montserrat')
  } catch (_) {
    // fallback if font load fails
  }

  // Background
  ctx.fillStyle = '#0B0E1B'
  ctx.fillRect(0, 0, SIZE, SIZE)

  // Purple radial glow behind title area
  const glow = ctx.createRadialGradient(SIZE / 2, 420, 0, SIZE / 2, 420, 380)
  glow.addColorStop(0, 'rgba(124,58,237,0.28)')
  glow.addColorStop(1, 'rgba(124,58,237,0)')
  ctx.fillStyle = glow
  ctx.fillRect(0, 0, SIZE, SIZE)

  // Top gradient accent bar (4px)
  const barGrad = ctx.createLinearGradient(0, 0, SIZE, 0)
  barGrad.addColorStop(0, '#7C3AED')
  barGrad.addColorStop(1, '#A855F7')
  ctx.fillStyle = barGrad
  ctx.fillRect(0, 0, SIZE, 4)

  // "SignalScout" wordmark — top left
  ctx.fillStyle = '#FFFFFF'
  ctx.font = 'bold 28px Montserrat, sans-serif'
  ctx.textBaseline = 'top'
  ctx.fillText('SignalScout', 60, 52)

  // "getsignalscout.com" — top right (for balance, specs say bottom-right but wordmark is top-left per spec)
  ctx.fillStyle = 'rgba(255,255,255,0.4)'
  ctx.font = '16px Montserrat, sans-serif'
  ctx.textAlign = 'right'
  ctx.fillText('getsignalscout.com', SIZE - 60, SIZE - 56)
  ctx.textAlign = 'left'

  // "OPPORTUNITY OF THE DAY" label
  ctx.fillStyle = 'rgba(168,85,247,0.9)'
  ctx.font = 'bold 14px Montserrat, sans-serif'
  ctx.letterSpacing = '3px'
  ctx.fillText('OPPORTUNITY OF THE DAY', 60, 180)
  ctx.letterSpacing = '0px'

  // Opportunity title — centered, max 2 lines
  ctx.fillStyle = '#FFFFFF'
  ctx.font = 'bold 42px Montserrat, sans-serif'
  ctx.textAlign = 'center'
  const titleLines = wrapText(ctx, entry.opportunity, SIZE / 2, 240, SIZE - 120, 56, 2)
  ctx.textAlign = 'left'

  const afterTitleY = 240 + titleLines * 56 + 52

  // Divider line
  ctx.strokeStyle = 'rgba(255,255,255,0.12)'
  ctx.lineWidth = 1
  ctx.beginPath()
  ctx.moveTo(60, afterTitleY - 20)
  ctx.lineTo(SIZE - 60, afterTitleY - 20)
  ctx.stroke()

  // "• What:" section
  const whatText = entry.what.slice(0, 120) + (entry.what.length > 120 ? '…' : '')
  ctx.fillStyle = '#FFFFFF'
  ctx.font = 'bold 20px Montserrat, sans-serif'
  ctx.fillText('• What:', 60, afterTitleY)

  ctx.fillStyle = 'rgba(255,255,255,0.72)'
  ctx.font = '20px Montserrat, sans-serif'
  // wrap the what text on next line below label
  const whatLinesDrawn = wrapText(ctx, whatText, 60, afterTitleY + 30, SIZE - 120, 30, 3)
  const afterWhatY = afterTitleY + 30 + whatLinesDrawn * 30 + 40

  // Divider
  ctx.strokeStyle = 'rgba(255,255,255,0.08)'
  ctx.lineWidth = 1
  ctx.beginPath()
  ctx.moveTo(60, afterWhatY - 20)
  ctx.lineTo(SIZE - 60, afterWhatY - 20)
  ctx.stroke()

  // "• First Move:" section
  const firstMoveText = entry.firstMove.slice(0, 100) + (entry.firstMove.length > 100 ? '…' : '')
  ctx.fillStyle = '#A855F7'
  ctx.font = 'bold 20px Montserrat, sans-serif'
  ctx.fillText('• First Move:', 60, afterWhatY)

  ctx.fillStyle = 'rgba(168,85,247,0.85)'
  ctx.font = '20px Montserrat, sans-serif'
  wrapText(ctx, firstMoveText, 60, afterWhatY + 30, SIZE - 120, 30, 3)

  // Date — bottom left
  ctx.fillStyle = 'rgba(255,255,255,0.4)'
  ctx.font = '16px Montserrat, sans-serif'
  ctx.textBaseline = 'bottom'
  ctx.fillText(entry.date, 60, SIZE - 52)

  return new Promise((resolve) => {
    canvas.toBlob((blob) => resolve(blob!), 'image/png')
  })
}

// ---------------------------------------------------------------------------
// Share icon SVG
// ---------------------------------------------------------------------------
function ShareIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" y1="2" x2="12" y2="15" />
    </svg>
  )
}

// ---------------------------------------------------------------------------
// FeedCard component
// ---------------------------------------------------------------------------
const truncate = (text: string, limit: number) =>
  text.length > limit ? text.slice(0, limit) + '...' : text

function FeedCard({ entry, faded }: { entry: typeof FEED_ENTRIES[0]; faded?: boolean }) {
  const shareRef = useRef<HTMLButtonElement>(null)

  const handleShare = async () => {
    const btn = shareRef.current
    if (btn) btn.style.opacity = '0.5'
    try {
      const blob = await generateShareCard(entry)

      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
      const canShare = isMobile && typeof navigator.share === 'function' && navigator.canShare?.({ files: [new File([blob], 'signal.png', { type: 'image/png' })] })

      if (canShare) {
        const file = new File([blob], 'signalscout-signal.png', { type: 'image/png' })
        await navigator.share({
          title: entry.opportunity,
          text: `SignalScout Signal: ${entry.opportunity}`,
          files: [file],
        })
      } else {
        // Desktop: trigger download
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `signalscout-${entry.date.replace(/[^a-z0-9]/gi, '-').toLowerCase()}.png`
        a.click()
        URL.revokeObjectURL(url)
      }
    } catch (err) {
      // User cancelled or error — silently fail
      console.error('Share failed:', err)
    } finally {
      if (btn) btn.style.opacity = ''
    }
  }

  return (
    <div className="relative">
      <div className="glass-card p-5 sm:p-6 text-left relative overflow-hidden">
        {/* Accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{ background: 'linear-gradient(90deg, #7C3AED, #A855F7)' }}
        />

        {/* Header */}
        <div className="flex items-center justify-between mb-3 pt-4">
          <div className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full bg-accentLight flex-shrink-0"
              style={{ boxShadow: '0 0 6px #A855F7' }}
            />
            <span className="text-white font-semibold text-sm">📅 {entry.date}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-4" />

        {/* Opportunity label */}
        <p className="text-white font-bold text-sm uppercase tracking-wide mb-3">OPPORTUNITY OF THE DAY</p>
        <p className="text-accentLight font-semibold text-base mb-4">{entry.opportunity}</p>

        <div className="space-y-0">
          <p className="text-white/75 text-sm leading-relaxed">
            <span className="text-white font-semibold">• What: </span>
            <span className="sm:hidden">{entry.mobileText?.what ?? truncate(entry.what, 120)}</span>
            <span className="hidden sm:inline">{entry.what}</span>
          </p>

          <div className="border-t my-4" style={{ borderColor: 'rgba(255,255,255,0.06)' }} />

          <p className="text-white/75 text-sm leading-relaxed">
            <span className="text-white font-semibold">• Why now: </span>
            <span className="sm:hidden">{entry.mobileText?.whyNow ?? truncate(entry.whyNow, 100)}</span>
            <span className="hidden sm:inline">{entry.whyNow}</span>
          </p>

          <div className="border-t my-4" style={{ borderColor: 'rgba(255,255,255,0.06)' }} />

          <p className="text-white/75 text-sm leading-relaxed">
            <span className="text-white font-semibold">• Potential: </span>
            <span className="sm:hidden">{entry.mobileText?.potential ?? truncate(entry.potential, 100)}</span>
            <span className="hidden sm:inline">{entry.potential}</span>
          </p>

          <div className="border-t my-4" style={{ borderColor: 'rgba(255,255,255,0.06)' }} />

          <p className="text-white/75 text-sm leading-relaxed">
            <span className="text-white font-semibold">• First move: </span>
            <span className="sm:hidden">{entry.mobileText?.firstMove ?? truncate(entry.firstMove, 120)}</span>
            <span className="hidden sm:inline">{entry.firstMove}</span>
          </p>
        </div>

        {/* Share button — bottom right */}
        <div className="flex justify-end mt-4">
          <button
            ref={shareRef}
            onClick={handleShare}
            title="Share this signal"
            className="text-white/30 hover:text-white/70 transition-colors duration-200 p-1.5 rounded-md hover:bg-white/5"
            aria-label="Share this signal"
          >
            <ShareIcon />
          </button>
        </div>
      </div>

      {/* Fade overlay for faded cards */}
      {faded && (
        <div
          className="absolute bottom-0 left-0 right-0 h-40 rounded-b-2xl pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(10,10,15,0.92))' }}
        />
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function FoundersFeed() {
  return (
    <div className="min-h-screen bg-bg text-white">
      <Navbar />

      {/* Hero */}
      <section
        className="relative pt-36 pb-16 overflow-hidden"
        style={{
          paddingLeft: 'max(1.25rem, env(safe-area-inset-left, 1.25rem))',
          paddingRight: 'max(1.25rem, env(safe-area-inset-right, 1.25rem))',
        }}
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.15) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accentLight animate-pulse" />
            <span className="section-label text-xs">Daily Intelligence Feed</span>
          </div>

          <h1
            className="section-heading text-3xl sm:text-4xl md:text-5xl leading-tight mb-6"
            style={{
              background: 'linear-gradient(135deg, #A855F7 0%, #ffffff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Founders Feed
          </h1>

          <p className="text-lg md:text-xl text-white/65 max-w-xl mx-auto leading-relaxed mb-10">
            Real opportunities. Delivered daily. No fluff, no filler.
          </p>

          <a href="/#waitlist" className="btn-primary text-center inline-block">
            Join the Waitlist — Get This Daily
          </a>
        </div>
      </section>

      {/* Feed */}
      <section
        className="pb-8 max-w-3xl mx-auto"
        style={{
          paddingLeft: 'max(1.25rem, env(safe-area-inset-left, 1.25rem))',
          paddingRight: 'max(1.25rem, env(safe-area-inset-right, 1.25rem))',
        }}
      >
        <div className="space-y-8">
          {/* First entry — fully visible */}
          <FeedCard entry={FEED_ENTRIES[0]} />

          {/* Second entry — partially faded */}
          <FeedCard entry={FEED_ENTRIES[1]} faded />

          {/* Third entry — more faded, suggests locked content */}
          <div className="relative">
            <FeedCard entry={FEED_ENTRIES[2]} faded />
            <div
              className="absolute bottom-0 left-0 right-0 h-56 rounded-b-2xl pointer-events-none"
              style={{ background: 'linear-gradient(to bottom, transparent, rgba(10,10,15,0.98))' }}
            />
          </div>
        </div>
      </section>

      {/* CTA below feed */}
      <section
        className="pb-24 max-w-3xl mx-auto"
        style={{
          paddingLeft: 'max(1.25rem, env(safe-area-inset-left, 1.25rem))',
          paddingRight: 'max(1.25rem, env(safe-area-inset-right, 1.25rem))',
        }}
      >
        <div
          className="rounded-2xl p-8 sm:p-10 text-center"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(124,58,237,0.2)',
            boxShadow: '0 0 60px rgba(124,58,237,0.08)',
          }}
        >
          <div className="text-3xl mb-4">📬</div>
          <h2 className="section-heading text-2xl sm:text-3xl text-white mb-4">
            Delivered to your Slack, Telegram, or inbox every morning.
          </h2>
          <p className="text-white/55 text-base mb-8 max-w-md mx-auto leading-relaxed">
            Every morning you don't have this, someone in your space does. Join the waitlist and be first in.
          </p>
          <a href="/#waitlist" className="btn-primary text-center inline-block">
            Join the Waitlist
          </a>
          <p className="text-white/35 text-xs mt-4">
            $29/mo at launch · Founding members lock this rate forever
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
