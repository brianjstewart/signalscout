import { useState, useEffect } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function close() { setMenuOpen(false) }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(10,10,15,0.95)' : 'rgba(10,10,15,0.7)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
        padding: '1rem 1.5rem',
      }}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="inline-flex items-center gap-2 font-display text-lg tracking-wide" style={{ fontWeight: 800 }}>
          <img src="/favicon.svg" alt="" className="w-5 h-5" />
          <span style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            SignalScout
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-6">
          <a href="/#how-it-works" className="text-white/60 hover:text-white text-sm transition-colors">How It Works</a>
          <a href="/founders-feed" className="text-white/60 hover:text-white text-sm transition-colors">Founders Feed</a>
          <a href="/blog" className="text-white/60 hover:text-white text-sm transition-colors">Blog</a>
          <a href="/#waitlist" className="text-white/60 hover:text-white text-sm transition-colors">Founding Access</a>
          <a href="/#faq" className="text-white/60 hover:text-white text-sm transition-colors">FAQ</a>
          <a href="/#waitlist" className="btn-primary text-sm py-2 px-5">Join the Waitlist</a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8 focus:outline-none"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-[1.5px] bg-white transition-all duration-200"
            style={{ transform: menuOpen ? 'rotate(45deg) translateY(6.5px)' : '' }} />
          <span className="block w-5 h-[1.5px] bg-white transition-all duration-200"
            style={{ opacity: menuOpen ? 0 : 1 }} />
          <span className="block w-5 h-[1.5px] bg-white transition-all duration-200"
            style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-6.5px)' : '' }} />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className="sm:hidden overflow-hidden transition-all duration-300"
        style={{ maxHeight: menuOpen ? '300px' : '0px', opacity: menuOpen ? 1 : 0 }}
      >
        <div className="max-w-5xl mx-auto flex flex-col gap-1 pt-3 pb-4">
          <a href="/#how-it-works" onClick={close} className="text-white/70 hover:text-white py-2.5 text-sm border-b border-white/5 transition-colors">How It Works</a>
          <a href="/founders-feed" onClick={close} className="text-white/70 hover:text-white py-2.5 text-sm border-b border-white/5 transition-colors">Founders Feed</a>
          <a href="/blog" onClick={close} className="text-white/70 hover:text-white py-2.5 text-sm border-b border-white/5 transition-colors">Blog</a>
          <a href="/#waitlist" onClick={close} className="text-white/70 hover:text-white py-2.5 text-sm border-b border-white/5 transition-colors">Founding Access</a>
          <a href="/#faq" onClick={close} className="text-white/70 hover:text-white py-2.5 text-sm border-b border-white/5 transition-colors">FAQ</a>
          <a href="/#waitlist" onClick={close} className="btn-primary text-center mt-3 text-sm py-3">Join the Waitlist</a>
        </div>
      </div>
    </nav>
  )
}
