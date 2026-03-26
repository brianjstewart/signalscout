import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const FEED_ENTRIES = [
  {
    date: 'Wednesday, March 25, 2026',
    opportunity: "Meta's Creator-Commerce Integration",
    what: "At Shoptalk 2026, Meta announced major updates to creator-commerce infrastructure: cleaner product tagging in Reels, deeper catalog integrations, and expanded affiliate partnerships. Multiple industry sources flagged the same signal: creators are now the primary product discovery channel. The gap between seeing a product and buying it is collapsing.",
    whyNow: "Meta's algorithm is currently over-rewarding creator-commerce content as it builds out this infrastructure. Brands that establish creator partnerships and catalog integrations in Q2 will capture organic reach that disappears once the format saturates — typically a 90–120 day window.",
    potential: "Early movers in creator-commerce are reporting 15–40% conversion lift on Reels-tagged products vs. standard catalog ads. For a brand doing $500K/mo in Meta revenue, a 20% lift = $100K/mo incremental with lower CAC than paid acquisition.",
    firstMove: "Audit your top 5 products for Reel-ability — visual, demonstrable, transformative. Identify 3 micro-creators (10K–100K followers) in your category. Reach out with an affiliate arrangement this week — not a paid post, an affiliate link. Test organic performance for 30 days before adding paid amplification.",
  },
  {
    date: 'Tuesday, March 24, 2026',
    opportunity: 'The Mid-Market Retention Gap',
    what: "Multiple expert sources converged this week on a retention insight: businesses in the $1M–$10M range are leaving massive LTV on the table because they're using either cheap automation OR over-investing in high-touch service. Neither works at scale. AI-powered retention fills the gap at a price point this segment can afford.",
    whyNow: "Customer acquisition costs are up 32% YoY. Retention is the highest-ROI lever available right now. Operators who implement AI retention systems in Q2 will have a structural advantage entering Q3 when ad costs typically spike again.",
    potential: "A 10% improvement in 90-day retention on a $3M/yr revenue base = $300K in recovered annual revenue. Systematize it as a productized service at $3,000–$5,000/mo.",
    firstMove: "Audit your 3 best customers. Identify the exact moment they re-engaged after their first purchase. Build one AI sequence targeting customers who match that pattern but haven't returned in 45 days.",
  },
  {
    date: 'Sunday, March 23, 2026',
    opportunity: 'The Local AI Execution Layer',
    what: "Multiple independent sources converged on a fundamental shift: frontier cloud models as orchestrators, local open-source models (Qwen 3.5, Neotron 3) as execution muscles. The result is continuous 24/7 AI operation at near-zero cost.",
    whyNow: "Operators running 100% on cloud APIs face runaway costs as they scale. Local model quality has crossed the threshold where it's viable for most execution tasks. The hardware to run it is accessible. First movers build infrastructure competitors will spend months trying to replicate.",
    potential: "A power user spending $2,000–$3,000/mo on cloud API credits can reduce that by 60–80% by offloading execution to local models. The bigger value: 24/7 agent operation becomes economically viable — continuous opportunity scanning and always-on research that are cost-prohibitive on cloud alone.",
    firstMove: "Identify one high-volume repetitive task your AI setup handles. Install Ollama, pull Qwen 3.5 9B, and route that one task locally for one week. Measure cost difference and output quality before scaling.",
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
