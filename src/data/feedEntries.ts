export function getSlug(opportunity: string): string {
  return opportunity
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

export const FEED_ENTRIES = [
  {
    date: 'Saturday, March 28, 2026',
    opportunity: 'The GrowthOS Commoditization Clock Is Running',
    what: "Low-code and no-code AI tools are collapsing the technical barrier to build what specialized marketing systems do. The operators with documented proof cases — real client results, real numbers, real methodology — have a 12-month window before that proof becomes table stakes. After that window closes, the tool is indistinguishable from every other AI marketing platform. The differentiator is not the stack. It is the receipts.",
    whyNow: "HubSpot, Salesforce, Shopify, and a dozen AI-native tools are all racing to commoditize the same workflows. The operators who document and publish their proof cases now — specific CPL drops, revenue lifts, margin improvements with named verticals — lock in authority before the market catches up. Every month of delay is market share ceded to the next operator who publishes first.",
    potential: "A documented methodology with 3-5 published case studies commands 3-5x the pricing of an undocumented alternative. For a $3,000/mo engagement, that delta is $9,000-$15,000/mo in pricing power — purely from proof visibility. Operators who build the case study library now will price at a premium for years after the commodity wave hits everyone else.",
    firstMove: "Pull your last 3 client engagements. For each one, find one number: CPL drop, ROAS lift, revenue delta, margin improvement. Write one sentence per result. That is your proof stack. Publish the first one this week — not a case study, just the number and what caused it. The library starts with one post.",
    mobileText: {
      what: "Low-code AI tools are commoditizing marketing systems fast. Operators with documented proof cases have a 12-month window before the receipts become table stakes. After that — you're just another platform.",
      whyNow: "HubSpot, Salesforce, Shopify are all racing to own the same workflows. Operators who publish real results now lock in authority before the market levels. Every month of delay is pricing power lost.",
      potential: "Documented methodology with 3-5 case studies commands 3-5x the pricing of an undocumented alternative. On a $3K/mo engagement that's $9K-$15K/mo in pricing power — from proof visibility alone.",
      firstMove: "Pull your last 3 engagements. Find one number each: CPL drop, ROAS lift, revenue delta. Write one sentence per result. Publish the first one this week. The case study library starts with one post.",
    },
  },
  {
    date: 'Friday, March 27, 2026',
    opportunity: 'The Pricing Middle Ground Is Killing Service Businesses',
    what: "Churn data across thousands of service businesses in the $1M–$10M range reveals a consistent pattern: mid-market pricing — not cheap enough to remove buyer hesitation, not premium enough to signal commitment — produces the worst retention rates in the category. Average customer tenure at this price band runs 4-6 months. The businesses escaping this trap share one trait: a deliberate choice to either compress to a frictionless entry price or anchor at a premium that attracts buyers who stay.",
    whyNow: "Customer acquisition costs are rising across every channel heading into Q2 2026. At 4-6 month average tenure, businesses in the pricing middle are spending to replace their entire customer base multiple times per year. Every dollar of ad spend becomes a retention cost, not a growth investment. The window to reprice before Q3 — when acquisition costs historically spike — is closing.",
    potential: "A $500K ARR service business churning 25% monthly is replacing its customer base 3x per year. Compress churn to 10% through clear price positioning and the same acquisition spend compounds into an asset. That math shifts a $500K business toward $2M with no increase in marketing spend — just fewer customers leaving.",
    firstMove: "Pull your last 90 days of cancellations. Sort by price tier. If your highest churn cluster sits in your mid-range pricing — not your lowest, not your highest — you're in the death band. This week: model what happens to LTV if you move 30% of those customers either down to a no-brainer entry offer or up to a premium commitment tier. The model tells you which direction to go.",
    mobileText: {
      what: "Mid-range pricing produces the worst retention in service businesses — avg tenure just 4-6 months. Operators escaping this trap pick a lane: frictionless entry or premium commitment. Never the middle.",
      whyNow: "CAC is rising across every channel heading into Q2. At 4-6 month avg tenure, you're replacing your customer base multiple times per year. Every ad dollar is a retention cost. The repricing window closes before Q3.",
      potential: "A $500K ARR business churning 25% monthly replaces its customer base 3x per year. Fix price positioning, compress churn to 10%, and the same acquisition spend compounds toward $2M — no new marketing spend.",
      firstMove: "Pull your last 90 days of cancellations. Sort by price tier. If your highest churn cluster sits in the mid-range — not cheapest, not most expensive — you're in the death band. Model the exit this week.",
    },
  },
  {
    date: 'Thursday, March 26, 2026',
    opportunity: 'The Retention Benchmark Nobody Is Tracking',
    what: "New platform data from 22M+ recurring-revenue businesses reveals a stark benchmark gap: best-in-class businesses retain 90%+ monthly (under 10% churn). The market average is 80%. The danger zone — where acquisition spend is just refilling a leaky bucket — starts below 70% monthly retention. Most operators in the $1M–$10M range have no idea which bucket they're in because they're not tracking joins vs. cancels as a primary KPI.",
    whyNow: "Paid acquisition costs are elevated and trending higher. Every operator is focused on the top of funnel. That's the wrong lever. If you're at 80% retention and your competitor is at 90%, they compound every month while you rebuild. The gap compounds silently until it's a structural disadvantage. Q2 is the window to fix it before Q3 ad costs spike again.",
    potential: "For a recurring revenue business at $50K MRR, moving from 20% monthly churn to 10% churn = $60K+ in additional annual revenue without acquiring a single new customer. At $200K MRR the math becomes $240K/yr recovered. It's the highest-ROI lever available in any recurring model — and it's invisible until you measure it.",
    firstMove: "Pull your last 90 days of data. Count monthly joins and monthly cancels. Calculate your retention rate. Benchmark it against these three numbers — 90% (best-in-class), 80% (average), 70% (danger zone). If you don't know your number, that's your first move: know your number before you spend another dollar on acquisition.",
  },
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
