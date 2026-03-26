import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const FEED_ENTRIES = [
  {
    date: 'Wednesday, March 25, 2026',
    opportunity: 'Agentic Commerce Readiness Audit',
    what: 'Agentic Commerce Readiness Audit — a productized audit + implementation sprint helping Shopify D2C brands make their product catalogs discoverable by AI shopping agents (ChatGPT Shopping, Perplexity, Copilot, etc.)',
    whyNow: "Shopify's Winter 2026 Edition just dropped with heavy AI-agent integration baked in. AI-driven orders have risen 11x since 2025 and nearly half of D2C brands plan to invest $1M+ in AI commerce this year. Most brands have no idea their catalog is invisible to AI agents — creating a clear wedge for a fast, high-value consulting offer. First-mover advantage is closing fast.",
    potential: '$5,000–$15,000 per audit engagement (2–3 week sprint). Even 2 clients in 30 days = $10k–$30k incremental. Systematize it into a recurring service module and use it as an upsell into ongoing retainers.',
    firstMove: 'Build a 1-page "Agentic Readiness Scorecard" this week — structured data, API-readiness, schema markup, product copy intent-alignment. Pitch it to 3 current clients and publish as a lead magnet on LinkedIn.',
  },
  {
    date: 'Tuesday, March 24, 2026',
    opportunity: 'AI-Powered Customer Retention Playbook',
    what: 'Multiple independent sources — industry analyses, operator case studies, and platform reports — converged this week on the same insight: D2C brands using AI-driven post-purchase flows are seeing 40-60% improvement in 90-day retention vs. static email sequences.',
    whyNow: 'Customer acquisition costs are up 32% YoY across paid channels. Retention has become the highest-ROI lever available to D2C operators right now. The brands implementing AI retention in Q2 will have a structural advantage entering Q3.',
    potential: 'A 10% improvement in 90-day retention on a $3M/yr revenue base = $300K in recovered annual revenue. Implementation cost: 2-3 weeks of setup, minimal ongoing overhead.',
    firstMove: "Audit your current post-purchase email flow. Identify the drop-off point between purchase and second order. Build one AI-personalized sequence targeting customers who haven't returned in 45 days.",
  },
  {
    date: 'Monday, March 23, 2026',
    opportunity: 'Short-Form Video as a B2B Lead Engine',
    what: 'Cross-source analysis shows B2B founders using short-form video (60-90 second LinkedIn/YouTube Shorts) are generating 3-5x more qualified inbound leads than those relying on written content alone — with significantly lower CAC.',
    whyNow: "LinkedIn's algorithm is currently over-indexing on video content, giving early movers outsized organic reach. This window typically closes within 90-120 days once the format saturates. Several operators in the marketing and consulting space are quietly building distribution advantages right now.",
    potential: 'Operators seeing results are converting at $0-$200 CAC on short-form video vs $800-$2,000 on paid channels. For a service business targeting $50K+ clients, one video-sourced deal per quarter justifies the entire content investment.',
    firstMove: 'Record one 60-second video this week on the most common objection your prospects raise. No editing required — authenticity outperforms production value on this format. Post it on LinkedIn and track profile views over 72 hours.',
  },
]

function FeedCard({ entry, faded }: { entry: typeof FEED_ENTRIES[0], faded?: boolean }) {
  return (
    <div className="relative">
      <div
        className="glass-card p-6 text-left relative overflow-hidden"
        style={{ opacity: faded ? 1 : 1 }}
      >
        {/* Accent line */}
        <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(90deg, #7C3AED, #A855F7)' }} />

        {/* Header */}
        <div className="flex items-center justify-between mb-3 pt-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accentLight flex-shrink-0" style={{ boxShadow: '0 0 6px #A855F7' }} />
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
            {entry.what}
          </p>

          <div className="border-t my-4" style={{ borderColor: 'rgba(255,255,255,0.06)' }} />

          <p className="text-white/75 text-sm leading-relaxed">
            <span className="text-white font-semibold">• Why now: </span>
            {entry.whyNow}
          </p>

          <div className="border-t my-4" style={{ borderColor: 'rgba(255,255,255,0.06)' }} />

          <p className="text-white/75 text-sm leading-relaxed">
            <span className="text-white font-semibold">• Potential: </span>
            {entry.potential}
          </p>

          <div className="border-t my-4" style={{ borderColor: 'rgba(255,255,255,0.06)' }} />

          <p className="text-white/75 text-sm leading-relaxed">
            <span className="text-white font-semibold">• First move: </span>
            {entry.firstMove}
          </p>
        </div>
      </div>

      {/* Fade overlay for last 2 cards */}
      {faded && (
        <div
          className="absolute bottom-0 left-0 right-0 h-40 rounded-b-2xl pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(10,10,15,0.92))' }}
        />
      )}
    </div>
  )
}

export default function FoundersFeed() {
  return (
    <div className="min-h-screen bg-bg text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-16 px-6 overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.15) 0%, transparent 70%)', filter: 'blur(40px)' }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accentLight animate-pulse" />
            <span className="section-label text-xs">Daily Intelligence Feed</span>
          </div>

          <h1
            className="section-heading text-3xl sm:text-4xl md:text-5xl leading-tight mb-6"
            style={{ background: 'linear-gradient(135deg, #A855F7 0%, #ffffff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
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
      <section className="px-6 pb-8 max-w-3xl mx-auto">
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
      <section className="px-6 pb-24 max-w-3xl mx-auto">
        <div
          className="rounded-2xl p-10 text-center"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(124,58,237,0.2)',
            boxShadow: '0 0 60px rgba(124,58,237,0.08)',
          }}
        >
          <div className="text-3xl mb-4">📬</div>
          <h2 className="section-heading text-2xl sm:text-3xl text-white mb-4">
            Get this in your inbox every morning.
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
