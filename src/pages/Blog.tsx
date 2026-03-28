import { useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FEED_ENTRIES, getSlug } from '../data/feedEntries'

// ---------------------------------------------------------------------------
// Canvas share card (reused from FoundersFeed)
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
  try {
    await document.fonts.load('bold 36px Montserrat')
    await document.fonts.load('bold 28px Montserrat')
    await document.fonts.load('16px Montserrat')
  } catch (_) {}
  ctx.fillStyle = '#0B0E1B'
  ctx.fillRect(0, 0, SIZE, SIZE)
  const glow = ctx.createRadialGradient(SIZE / 2, 420, 0, SIZE / 2, 420, 380)
  glow.addColorStop(0, 'rgba(124,58,237,0.28)')
  glow.addColorStop(1, 'rgba(124,58,237,0)')
  ctx.fillStyle = glow
  ctx.fillRect(0, 0, SIZE, SIZE)
  const barGrad = ctx.createLinearGradient(0, 0, SIZE, 0)
  barGrad.addColorStop(0, '#7C3AED')
  barGrad.addColorStop(1, '#A855F7')
  ctx.fillStyle = barGrad
  ctx.fillRect(0, 0, SIZE, 4)
  ctx.fillStyle = '#FFFFFF'
  ctx.font = 'bold 28px Montserrat, sans-serif'
  ctx.textBaseline = 'top'
  ctx.fillText('SignalScout', 60, 52)
  ctx.fillStyle = 'rgba(255,255,255,0.4)'
  ctx.font = '16px Montserrat, sans-serif'
  ctx.textAlign = 'right'
  ctx.fillText('signalscout.io', SIZE - 60, SIZE - 56)
  ctx.textAlign = 'left'
  ctx.fillStyle = 'rgba(168,85,247,0.9)'
  ctx.font = 'bold 14px Montserrat, sans-serif'
  ctx.fillText('OPPORTUNITY OF THE DAY', 60, 180)
  ctx.fillStyle = '#FFFFFF'
  ctx.font = 'bold 42px Montserrat, sans-serif'
  ctx.textAlign = 'center'
  const titleLines = wrapText(ctx, entry.opportunity, SIZE / 2, 240, SIZE - 120, 56, 2)
  ctx.textAlign = 'left'
  const afterTitleY = 240 + titleLines * 56 + 52
  ctx.strokeStyle = 'rgba(255,255,255,0.12)'
  ctx.lineWidth = 1
  ctx.beginPath()
  ctx.moveTo(60, afterTitleY - 20)
  ctx.lineTo(SIZE - 60, afterTitleY - 20)
  ctx.stroke()
  const whatText = entry.what.slice(0, 120) + (entry.what.length > 120 ? '…' : '')
  ctx.fillStyle = '#FFFFFF'
  ctx.font = 'bold 20px Montserrat, sans-serif'
  ctx.fillText('• What:', 60, afterTitleY)
  ctx.fillStyle = 'rgba(255,255,255,0.72)'
  ctx.font = '20px Montserrat, sans-serif'
  const whatLinesDrawn = wrapText(ctx, whatText, 60, afterTitleY + 30, SIZE - 120, 30, 3)
  const afterWhatY = afterTitleY + 30 + whatLinesDrawn * 30 + 40
  ctx.strokeStyle = 'rgba(255,255,255,0.08)'
  ctx.lineWidth = 1
  ctx.beginPath()
  ctx.moveTo(60, afterWhatY - 20)
  ctx.lineTo(SIZE - 60, afterWhatY - 20)
  ctx.stroke()
  const firstMoveText = entry.firstMove.slice(0, 100) + (entry.firstMove.length > 100 ? '…' : '')
  ctx.fillStyle = '#A855F7'
  ctx.font = 'bold 20px Montserrat, sans-serif'
  ctx.fillText('• First Move:', 60, afterWhatY)
  ctx.fillStyle = 'rgba(168,85,247,0.85)'
  ctx.font = '20px Montserrat, sans-serif'
  wrapText(ctx, firstMoveText, 60, afterWhatY + 30, SIZE - 120, 30, 3)
  ctx.fillStyle = 'rgba(255,255,255,0.4)'
  ctx.font = '16px Montserrat, sans-serif'
  ctx.textBaseline = 'bottom'
  ctx.fillText(entry.date, 60, SIZE - 52)
  return new Promise((resolve) => {
    canvas.toBlob((blob) => resolve(blob!), 'image/png')
  })
}

// ---------------------------------------------------------------------------
// Lock icon
// ---------------------------------------------------------------------------
function LockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}

// ---------------------------------------------------------------------------
// Share icon
// ---------------------------------------------------------------------------
function ShareIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" y1="2" x2="12" y2="15" />
    </svg>
  )
}

// ---------------------------------------------------------------------------
// Blog Index Card
// ---------------------------------------------------------------------------
function BlogCard({ entry, locked }: { entry: typeof FEED_ENTRIES[0]; locked?: boolean }) {
  const slug = getSlug(entry.opportunity)
  const excerpt = entry.what.length > 160 ? entry.what.slice(0, 160) + '…' : entry.what

  if (locked) {
    return (
      <div className="relative">
        <div
          className="rounded-2xl p-6 text-left overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(124,58,237,0.2)',
          }}
        >
          {/* Accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(90deg, #7C3AED, #A855F7)' }} />
          <div className="pt-2">
            <p className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-2">{entry.date}</p>
            <h3 className="font-display font-bold text-lg text-white/50 mb-3 leading-snug">{entry.opportunity}</h3>
            <p className="text-white/30 text-sm leading-relaxed line-clamp-2">{excerpt}</p>
          </div>
        </div>
        {/* Lock overlay */}
        <div
          className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center gap-3"
          style={{ background: 'rgba(11,14,27,0.82)', backdropFilter: 'blur(2px)' }}
        >
          <div className="text-white/40">
            <LockIcon />
          </div>
          <p className="text-white/60 text-sm font-medium text-center px-4">Full archives available to members</p>
          <a
            href="/#waitlist"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)' }}
          >
            Join waitlist to unlock →
          </a>
        </div>
      </div>
    )
  }

  return (
    <div
      className="relative rounded-2xl p-6 text-left overflow-hidden transition-all duration-200 hover:border-purple-500/40 group"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(124,58,237,0.2)',
      }}
    >
      {/* Accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(90deg, #7C3AED, #A855F7)' }} />
      <div className="pt-2">
        <p className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-2">{entry.date}</p>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full mb-3" style={{ background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(168,85,247,0.3)' }}>
          <span className="text-xs font-medium" style={{ color: '#A855F7' }}>OPPORTUNITY OF THE DAY</span>
        </div>
        <h3 className="font-display font-bold text-lg text-white mb-3 leading-snug group-hover:text-purple-300 transition-colors">{entry.opportunity}</h3>
        <p className="text-white/65 text-sm leading-relaxed mb-5">{excerpt}</p>
        <a
          href={`/blog?post=${slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
          style={{ color: '#A855F7' }}
        >
          Read Full Analysis →
        </a>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Blog Index Page
// ---------------------------------------------------------------------------
export function BlogIndex() {
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
            <span className="section-label text-xs">Operator Intelligence</span>
          </div>
          <h1
            className="section-heading text-3xl sm:text-4xl md:text-5xl leading-tight mb-6"
            style={{
              background: 'linear-gradient(135deg, #A855F7 0%, #ffffff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            The Signal Blog
          </h1>
          <p className="text-lg md:text-xl text-white/65 max-w-xl mx-auto leading-relaxed">
            Deep-dive operator intelligence. Every opportunity, fully unpacked.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section
        className="pb-24 max-w-5xl mx-auto"
        style={{
          paddingLeft: 'max(1.25rem, env(safe-area-inset-left, 1.25rem))',
          paddingRight: 'max(1.25rem, env(safe-area-inset-right, 1.25rem))',
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First post — fully visible */}
          <BlogCard entry={FEED_ENTRIES[0]} />

          {/* Rest — locked */}
          {FEED_ENTRIES.slice(1).map((entry) => (
            <BlogCard key={entry.opportunity} entry={entry} locked />
          ))}
        </div>

        {/* CTA */}
        <div
          className="mt-16 rounded-2xl p-8 sm:p-10 text-center"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(124,58,237,0.2)',
            boxShadow: '0 0 60px rgba(124,58,237,0.08)',
          }}
        >
          <div className="text-3xl mb-4">📬</div>
          <h2 className="section-heading text-2xl sm:text-3xl text-white mb-4">
            Get intelligence like this every morning.
          </h2>
          <p className="text-white/55 text-base mb-8 max-w-md mx-auto leading-relaxed">
            Delivered to your Slack, Telegram, or inbox. One signal. Fully unpacked. Every day.
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

// ---------------------------------------------------------------------------
// Blog Post Page
// ---------------------------------------------------------------------------
export function BlogPost({ slug }: { slug: string }) {
  const shareRef = useRef<HTMLButtonElement>(null)

  const entry = FEED_ENTRIES.find((e) => getSlug(e.opportunity) === slug) ?? FEED_ENTRIES[0]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  const handleShare = async () => {
    const btn = shareRef.current
    if (btn) btn.style.opacity = '0.5'
    try {
      const blob = await generateShareCard(entry)
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
      const canShare = isMobile && typeof navigator.share === 'function' && navigator.canShare?.({ files: [new File([blob], 'signal.png', { type: 'image/png' })] })
      if (canShare) {
        const file = new File([blob], 'signalscout-signal.png', { type: 'image/png' })
        await navigator.share({ title: entry.opportunity, text: `SignalScout Signal: ${entry.opportunity}`, files: [file] })
      } else {
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `signalscout-${entry.date.replace(/[^a-z0-9]/gi, '-').toLowerCase()}.png`
        a.click()
        URL.revokeObjectURL(url)
      }
    } catch (err) {
      console.error('Share failed:', err)
    } finally {
      if (btn) btn.style.opacity = ''
    }
  }

  return (
    <div className="min-h-screen bg-bg text-white">
      <Navbar />

      <article
        className="pt-32 pb-24 max-w-3xl mx-auto"
        style={{
          paddingLeft: 'max(1.25rem, env(safe-area-inset-left, 1.25rem))',
          paddingRight: 'max(1.25rem, env(safe-area-inset-right, 1.25rem))',
        }}
      >
        {/* Background glow */}
        <div
          className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.12) 0%, transparent 70%)',
            filter: 'blur(60px)',
            zIndex: 0,
          }}
        />

        <div className="relative z-10">
          {/* Back link */}
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white/80 transition-colors mb-10"
          >
            ← Back to The Signal Blog
          </a>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-white/40 text-xs font-semibold uppercase tracking-wider">{entry.date}</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full" style={{ background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(168,85,247,0.3)' }}>
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: '#A855F7' }}>OPPORTUNITY OF THE DAY</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-12">
            {entry.opportunity}
          </h1>

          {/* Sections */}
          <div className="space-y-10">

            {/* What's Happening */}
            <div>
              <h2 className="font-display font-bold text-xl text-white mb-4 uppercase tracking-wide" style={{ color: '#A855F7' }}>
                What's Happening
              </h2>
              <p className="text-white/80 text-base leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.8' }}>
                {entry.what}
              </p>
            </div>

            <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }} />

            {/* Why Now */}
            <div>
              <h2 className="font-display font-bold text-xl text-white mb-4 uppercase tracking-wide" style={{ color: '#A855F7' }}>
                Why Now
              </h2>
              <p className="text-white/80 text-base leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.8' }}>
                {entry.whyNow}
              </p>
            </div>

            <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }} />

            {/* The Potential */}
            <div>
              <h2 className="font-display font-bold text-xl text-white mb-4 uppercase tracking-wide" style={{ color: '#A855F7' }}>
                The Potential
              </h2>
              <p className="text-white/80 text-base leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.8' }}>
                {entry.potential}
              </p>
            </div>

            <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }} />

            {/* First Move — action box */}
            <div
              className="rounded-xl p-6 sm:p-8"
              style={{
                background: 'rgba(124,58,237,0.06)',
                border: '1px solid rgba(124,58,237,0.4)',
                borderLeft: '3px solid #7C3AED',
              }}
            >
              <h2 className="font-display font-bold text-lg text-white mb-3 uppercase tracking-wide">
                Your First Move
              </h2>
              <p className="text-white/80 text-base leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.8' }}>
                {entry.firstMove}
              </p>
            </div>

          </div>

          {/* Share button */}
          <div className="flex items-center justify-end mt-8 mb-10">
            <button
              ref={shareRef}
              onClick={handleShare}
              title="Share this signal"
              className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors px-4 py-2 rounded-lg hover:bg-white/5"
            >
              <ShareIcon />
              Share this signal
            </button>
          </div>

          {/* Bottom CTA */}
          <div
            className="rounded-2xl p-8 text-center"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(124,58,237,0.2)',
              boxShadow: '0 0 40px rgba(124,58,237,0.08)',
            }}
          >
            <p className="text-white/50 text-sm uppercase tracking-wider font-semibold mb-3">Get this daily</p>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-4 leading-snug">
              Get this intelligence daily in your Slack, Telegram, or inbox.
            </h3>
            <p className="text-white/55 text-sm mb-6 max-w-sm mx-auto">
              One signal. Fully unpacked. Every morning before everyone else.
            </p>
            <a href="/#waitlist" className="btn-primary text-center inline-block">
              Join the Waitlist
            </a>
            <p className="text-white/30 text-xs mt-3">
              $29/mo at launch · Founding members lock this rate forever
            </p>
          </div>

          {/* Back to blog */}
          <div className="mt-10 text-center">
            <a href="/blog" className="text-sm text-white/40 hover:text-white/70 transition-colors">
              ← Browse all signals in The Signal Blog
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}

// ---------------------------------------------------------------------------
// Default export — routes between index and post
// ---------------------------------------------------------------------------
export default function Blog() {
  const params = new URLSearchParams(window.location.search)
  const post = params.get('post')

  if (post) {
    return <BlogPost slug={post} />
  }

  return <BlogIndex />
}
