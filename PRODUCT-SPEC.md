# SignalScout — Product Spec & Direction
_Last updated: 2026-03-27_
_Locked by: Brian Stewart + Cleetus_

This document is the source of truth for SignalScout's product direction, feature scope, Founders Feed standards, and new user onboarding context. Nothing ships that contradicts this spec without Brian's explicit approval.

---

## What SignalScout Is

**The one-line:** AI intelligence brief for operators and founders — delivered before the market catches on.

**The problem it solves:**
Pulling real opportunities out of 100+ YouTube channels, 50+ podcasts, LinkedIn, articles, blogs, and newsletters from the best creators, educators, and operators every day is nearly impossible. You miss things. You fall behind.

**The solution:**
SignalScout monitors hundreds of expert sources across platforms and delivers one thing every morning: the pattern everyone in your space is about to start talking about — before they do.

**The audience:**
Operators and founders building $1M–$50M businesses. People who make decisions with data, move fast, and can't afford to be a step behind.

---

## The Brief — Four Sections, Five Minutes

Every brief (Founders Feed entry + personalized brief) follows this exact structure:

| Section | Purpose |
|---|---|
| **What** | The signal worth your attention — not a content summary, the one thing worth knowing and why |
| **Why Now** | Market timing, not evergreen noise — why this matters today, not six months ago |
| **Potential** | What this unlocks — real numbers, real outcomes, not vague possibility |
| **First Move** | One concrete action — what to do this week, not someday |

---

## Founders Feed — Public Intelligence Layer

The Founders Feed is the public-facing product demo and ongoing signal feed at `/founders-feed`.

### Voice Standard — Non-Negotiable

**It reads like:** A premium operator newsletter. Bloomberg Terminal for founders. Something you'd find cited in Forbes or HBR.

**It does NOT read like:** A YouTube recap. "Hormozi says..." or "Alex Finn found..." Content summaries. Blog posts.

**The framing:** We're seeing a signal across multiple sources. Here's what it means. Here's what to do.

**Examples of correct framing:**
- ✅ "Churn data across thousands of service businesses in the $1M–$10M range reveals..."
- ✅ "Platform data from 22M+ recurring-revenue businesses shows a benchmark gap..."
- ✅ "A pattern emerging across Q1 2026 operator data..."
- ❌ "Alex Hormozi says service businesses..."
- ❌ "In a recent video, [expert] explained..."
- ❌ "New data shows..." (too vague — always anchor to something citable)

### Source Attribution Rules
- **Platform names as context = ✅** (e.g. "School.com data from 22M+ users" — this is citable, would appear in Forbes)
- **Expert names as sources = ❌** (no "Hormozi released data showing")
- **Vague attribution = ❌** ("new data across thousands" without any anchor)
- **Signal from multiple sources = ✅** ("A pattern across operator communities and platform data...")

### Relevance Filter — Every Entry Must Pass

Before any entry publishes, it must answer yes to all three:
1. Does this apply to operators running $1M–$50M businesses?
2. Is the First Move specific enough to execute Monday morning? (Not "research this" — actual step)
3. Is the timing real? (Why does this matter this week, not any week?)

### Scope — What Belongs on the Founders Feed

The feed covers the full operator stack — not just marketing tactics:
- **Growth** — acquisition, retention, pricing, conversion
- **AI & automation** — what's actually working at scale (not hype)
- **Market shifts** — where windows are opening or closing
- **Mental models** — how elite operators think about decisions
- **Infrastructure** — data, systems, tooling that compound

It does NOT need to always be a marketing playbook. A sharp AI infrastructure insight, a pricing model shift, a market timing window — all valid if it gives an operator a real edge.

### Publishing Cadence
- One entry per day, published automatically at 7:05 AM CDT
- Generated via local Qwen model from KB (43K+ expert video catalog)
- Generation prompt enforces: no expert names, no platform attribution as source, operator relevance filter, specific First Move
- All entries reviewed against this spec before going live

---

## Delivery Options

Three channels — user picks at signup:
1. **Slack Channel** — posts to team channel every morning
2. **Telegram** — one message, full brief, direct to Telegram
3. **Email** — full brief in inbox at user's chosen time (4 AM – 10 AM window)

---

## New User Onboarding — Curated Context

When a new user joins, they go through a brief setup that personalizes their brief:

### Step 1 — Tell us your goals (2-minute questionnaire)
- What are you building?
- Where do you want to grow?
- What stage is your business? (Pre-revenue / $0-500K / $500K-$5M / $5M+)

### Step 2 — Add your social profiles
- Instagram, Facebook, or LinkedIn URL
- Used to analyze context and personalize the signal relevance
- Not for posting — read-only context

### Step 3 — Pick delivery
- Slack, Telegram, or Email
- Time window: 4 AM – 10 AM (user picks their window)

### Step 4 — Brief customization
- Primary focus areas (check all that apply):
  - Too much content, not enough time
  - Missing important shifts in my industry
  - Stay ahead of trends in my niche
  - Find opportunities before competitors do
  - Faster morning briefing for me or my team
  - Overwhelmed by what to pay attention to
  - See patterns across sources, not single articles

### First Brief
- Delivered within minutes of joining
- Personalized to stated goals + focus areas
- Sets the standard for what they'll receive every morning

---

## Pricing & Access

- **Founding member rate:** $29/mo — locked forever for early joiners
- **At launch:** $29/mo starting price
- **Founding spots:** Limited to 250

### Founding Member Perks
- Daily intelligence brief — personalized, delivered every morning
- Cross-source pattern detection across 100+ sources
- Slack, Telegram, or Email delivery
- First brief within minutes of joining
- Deep Dive on Demand — ask anything, get sourced answers
- Locked founding member rate — never pay more

---

## Homepage Architecture (Current)

Page order (locked):
```
Hero
ImageBreak (laptop/desk/coffee visual)
BriefSections (What / Why Now / Potential / First Move)
HowItWorks (4-step onboarding)
OriginStory (Brian's quote + why this exists)
DeliveryOptions (Slack / Telegram / Email)
FoundingMember (waitlist signup + perk list)
FAQ
Footer
```

### Hero
- Headline: "Know what matters. Before everyone else."
- Subheadline: "SignalScout monitors hundreds of expert sources across platforms and delivers one thing every morning: the pattern everyone in your space is about to start talking about — before they do."
- Badge: "AI Intelligence Brief"
- CTA: "Join the Waitlist"
- Right panel: Live brief card demo (date-dynamic)
- Scarcity note: "Founding spots limited to 250"
- Price anchor: "$29/mo at launch · Founding members lock this rate forever"

### Origin Story (Brian's voice, locked)
> "Trying to pull real opportunities out of 100+ YouTube channels, 50+ podcasts, LinkedIn, articles, blogs, and newsletters from the best creators, educators, and operators in the game every single day is nearly impossible. You miss things. You fall behind. That's exactly why I built this."
> — Brian Stewart, Founder, SignalScout · CGO, BMP Tuning

---

## Design System (Locked)

- **Background:** `#0B0E1B` (deep navy-black)
- **Text:** `#FFFFFF`
- **Accent primary:** `#A855F7` (purple)
- **Accent gradient:** `linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)`
- **Font:** Montserrat (headings/display), Inter (body)
- **Card style:** Glass cards with subtle purple border + glow on hover
- **Scarcity badge:** Red/orange — "Founding spots limited to 250"

---

## What SignalScout Is NOT

- Not a news aggregator (we surface patterns, not headlines)
- Not a content summarizer (we extract signal, not recaps)
- Not a social media tool (no posting, no engagement — intelligence only)
- Not a generic newsletter (personalized to stated goals + business context)

---

## Feature Roadmap — Locked Scope

### Live Now
- Founders Feed (public, daily auto-update)
- Waitlist signup (Supabase + Resend)
- Static product demo on homepage

### Phase 2 (Post-launch)
- Personalized brief delivery (Slack / Telegram / Email)
- Onboarding flow (goals + social + delivery setup)
- Deep Dive on Demand (ask anything, sourced answer)
- User dashboard (brief history, preferences)

### Phase 3 (Scale)
- Team accounts (shared brief to Slack channel)
- Industry-specific brief tracks (ecom, SaaS, local service, content)
- API access for enterprise

### Never (Out of Scope)
- Social media posting or management
- Content creation tools
- Competitor tracking (standalone)
- CRM or sales tooling

---

_This document is the product north star. If Reid builds it, Sloane writes for it, or Cleetus routes to it — this is the reference. Update it when Brian makes a product decision. Never let the live product drift from this spec._
