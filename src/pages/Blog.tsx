import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { BLOG_ARTICLES, BLOG_TAGS, type BlogArticle } from '../data/blogArticles'

// ─── Waitlist gate check (mirrors FoundersFeed pattern) ──────────────────────
function isUnlocked(): boolean {
  return !!localStorage.getItem('signalscout_waitlist_unlocked')
}

// ─── Article card ─────────────────────────────────────────────────────────────
function ArticleCard({
  article,
  featured,
  locked,
  onRead,
}: {
  article: BlogArticle
  featured?: boolean
  locked: boolean
  onRead: (slug: string) => void
}) {
  const tagColors: Record<string, string> = {
    'Operator Intelligence': '#7C3AED',
    'GrowthOS': '#A855F7',
    'AI Marketing': '#00C2FF',
    'Case Studies': '#22c55e',
    'Market Data': '#3b82f6',
    'Frameworks': '#f97316',
    'Paid Acquisition': '#ec4899',
    'Retention & LTV': '#eab308',
  }

  return (
    <div
      className={`rounded-xl border flex flex-col transition-all duration-200 hover:border-purple-500/40 cursor-pointer group ${featured ? 'md:flex-row' : ''}`}
      style={{
        background: 'rgba(255,255,255,0.03)',
        borderColor: 'rgba(124,58,237,0.2)',
      }}
      onClick={() => !locked && onRead(article.slug)}
    >
      {/* Content */}
      <div className={`p-6 flex flex-col gap-3 flex-1 ${featured ? 'md:p-8' : ''}`}>
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {article.tags.map(tag => (
            <span
              key={tag}
              className="text-xs font-semibold px-2 py-0.5 rounded"
              style={{
                background: (tagColors[tag] || '#7C3AED') + '22',
                color: tagColors[tag] || '#A855F7',
                border: `1px solid ${tagColors[tag] || '#7C3AED'}44`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h2
          className={`font-montserrat font-black leading-tight text-white group-hover:text-purple-300 transition-colors ${featured ? 'text-2xl md:text-3xl' : 'text-lg'}`}
        >
          {article.title}
        </h2>

        {/* Excerpt */}
        <p className={`text-white/60 leading-relaxed ${featured ? 'text-base' : 'text-sm'}`}>
          {article.excerpt}
        </p>

        {/* Meta + CTA */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/5">
          <div className="flex items-center gap-3">
            <span className="text-xs text-white/40">{article.date}</span>
            <span className="text-xs text-white/30">·</span>
            <span className="text-xs text-white/40">{article.readTime}</span>
          </div>
          {locked ? (
            <a
              href="/#waitlist"
              onClick={e => e.stopPropagation()}
              className="text-xs font-semibold px-3 py-1.5 rounded border transition-colors"
              style={{ color: '#A855F7', borderColor: 'rgba(168,85,247,0.4)' }}
            >
              Join to read →
            </a>
          ) : (
            <span
              className="text-xs font-semibold text-purple-400 group-hover:text-purple-300 transition-colors"
            >
              Read →
            </span>
          )}
        </div>
      </div>

      {/* Locked overlay for non-featured locked articles */}
      {locked && !featured && (
        <div
          className="mx-6 mb-6 rounded-lg p-3 text-center text-xs"
          style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.2)' }}
        >
          🔒 Members only · <a href="/#waitlist" className="text-purple-400 hover:text-purple-300">Join the waitlist →</a>
        </div>
      )}
    </div>
  )
}

// ─── Full article view ────────────────────────────────────────────────────────
function ArticleView({ slug, onBack }: { slug: string; onBack: () => void }) {
  const article = BLOG_ARTICLES.find(a => a.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#0B0E1B' }}>
        <div className="text-center">
          <p className="text-white/50 mb-4">Article not found.</p>
          <button onClick={onBack} className="text-purple-400 hover:text-purple-300 text-sm">
            ← Back to Blog
          </button>
        </div>
      </div>
    )
  }

  const tagColors: Record<string, string> = {
    'Operator Intelligence': '#7C3AED',
    'GrowthOS': '#A855F7',
    'AI Marketing': '#00C2FF',
    'Case Studies': '#22c55e',
    'Market Data': '#3b82f6',
    'Frameworks': '#f97316',
    'Paid Acquisition': '#ec4899',
    'Retention & LTV': '#eab308',
  }

  // Parse content: **bold** and paragraph breaks
  const renderContent = (text: string) => {
    return text.split('\n\n').map((para, i) => {
      if (para.startsWith('**') && para.endsWith('**') && para.split('**').length === 3) {
        return (
          <h3
            key={i}
            className="font-montserrat font-black text-white text-xl mt-8 mb-3"
          >
            {para.slice(2, -2)}
          </h3>
        )
      }
      // Inline bold
      const parts = para.split(/(\*\*[^*]+\*\*)/)
      return (
        <p key={i} className="text-white/75 leading-relaxed text-base mb-0">
          {parts.map((part, j) =>
            part.startsWith('**') && part.endsWith('**')
              ? <strong key={j} className="text-white font-semibold">{part.slice(2, -2)}</strong>
              : part
          )}
        </p>
      )
    })
  }

  return (
    <div className="min-h-screen" style={{ background: '#0B0E1B' }}>
      <Navbar />
      {/* Top gradient bar */}
      <div style={{ height: 3, background: 'linear-gradient(90deg, #7C3AED, #A855F7)' }} />

      <article className="max-w-3xl mx-auto px-6 pt-16 pb-24">
        {/* Back */}
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-sm text-white/40 hover:text-white/70 mb-10 transition-colors"
        >
          ← Blog
        </button>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {article.tags.map(tag => (
            <span
              key={tag}
              className="text-xs font-semibold px-2.5 py-1 rounded"
              style={{
                background: (tagColors[tag] || '#7C3AED') + '22',
                color: tagColors[tag] || '#A855F7',
                border: `1px solid ${tagColors[tag] || '#7C3AED'}44`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="font-montserrat font-black text-3xl md:text-4xl text-white leading-tight mb-4">
          {article.title}
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-3 mb-10 pb-8 border-b border-white/10">
          <span className="text-sm text-white/40">{article.date}</span>
          <span className="text-white/20">·</span>
          <span className="text-sm text-white/40">{article.readTime}</span>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-5">
          {renderContent(article.content)}
        </div>

        {/* Footer CTA */}
        <div
          className="mt-16 rounded-xl p-8 text-center"
          style={{
            background: 'rgba(124,58,237,0.08)',
            border: '1px solid rgba(124,58,237,0.2)',
          }}
        >
          <p className="font-montserrat font-black text-xl text-white mb-2">
            Get the daily operator brief
          </p>
          <p className="text-sm text-white/50 mb-6">
            Signal, opportunity, and first move — delivered every morning before 6am.
          </p>
          <a
            href="/#waitlist"
            className="inline-block px-6 py-3 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #7C3AED, #A855F7)' }}
          >
            Join the waitlist →
          </a>
        </div>
      </article>

      <Footer />
    </div>
  )
}

// ─── Blog Index ───────────────────────────────────────────────────────────────
export default function Blog() {
  const params = new URLSearchParams(window.location.search)
  const postParam = params.get('post')

  const [activeTag, setActiveTag] = useState<string>('All')
  const [currentSlug, setCurrentSlug] = useState<string | null>(postParam)
  const unlocked = isUnlocked()

  const handleRead = (slug: string) => {
    if (!unlocked) {
      window.location.href = '/#waitlist'
      return
    }
    setCurrentSlug(slug)
    window.history.pushState({}, '', `/blog?post=${slug}`)
  }

  const handleBack = () => {
    setCurrentSlug(null)
    window.history.pushState({}, '', '/blog')
  }

  // Handle browser back
  useEffect(() => {
    const onPop = () => {
      const p = new URLSearchParams(window.location.search).get('post')
      setCurrentSlug(p)
    }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  if (currentSlug) {
    return <ArticleView slug={currentSlug} onBack={handleBack} />
  }

  const featured = BLOG_ARTICLES.find(a => a.featured)
  const filtered = BLOG_ARTICLES.filter(a => {
    if (activeTag === 'All') return true
    return a.tags.includes(activeTag)
  })
  const rest = filtered.filter(a => !a.featured || activeTag !== 'All')

  return (
    <div className="min-h-screen" style={{ background: '#0B0E1B' }}>
      <Navbar />
      <div style={{ height: 3, background: 'linear-gradient(90deg, #7C3AED, #A855F7)' }} />

      <main className="max-w-5xl mx-auto px-6 pt-16 pb-24">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-3">
            SignalScout Blog
          </p>
          <h1 className="font-montserrat font-black text-4xl md:text-5xl text-white leading-tight mb-4">
            Operator Intelligence
          </h1>
          <p className="text-white/50 text-lg max-w-2xl">
            Long-form frameworks, market data, and operator playbooks from the SignalScout research engine.
          </p>
        </div>

        {/* Tag filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {['All', ...BLOG_TAGS].map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className="text-xs font-semibold px-3 py-1.5 rounded-full border transition-all"
              style={
                activeTag === tag
                  ? { background: 'rgba(124,58,237,0.3)', color: '#fff', borderColor: '#7C3AED' }
                  : { background: 'transparent', color: 'rgba(255,255,255,0.4)', borderColor: 'rgba(255,255,255,0.1)' }
              }
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Featured article */}
        {featured && activeTag === 'All' && (
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-3">
              Latest
            </p>
            <ArticleCard
              article={featured}
              featured
              locked={false}
              onRead={handleRead}
            />
          </div>
        )}

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {rest.map((article, i) => (
            <ArticleCard
              key={article.slug}
              article={article}
              locked={!unlocked && i >= 1}
              onRead={handleRead}
            />
          ))}
        </div>

        {!unlocked && (
          <div
            className="mt-12 rounded-xl p-8 text-center"
            style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.2)' }}
          >
            <p className="font-montserrat font-black text-xl text-white mb-2">
              Full access for founding members
            </p>
            <p className="text-sm text-white/50 mb-6">
              All articles, the daily brief, and early access to every new feature.
            </p>
            <a
              href="/#waitlist"
              className="inline-block px-6 py-3 rounded-lg text-sm font-semibold text-white hover:opacity-90 transition-opacity"
              style={{ background: 'linear-gradient(135deg, #7C3AED, #A855F7)' }}
            >
              Join the waitlist →
            </a>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
