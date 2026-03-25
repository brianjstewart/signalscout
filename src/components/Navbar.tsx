export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      style={{ background: 'rgba(10, 10, 15, 0.8)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <div className="font-display font-800 text-lg tracking-wide"
          style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          SignalScout
        </div>
        <div className="flex items-center gap-6">
          <a href="#pricing" className="text-white/60 hover:text-white text-sm transition-colors hidden sm:block">Pricing</a>
          <a href="#signup" className="btn-primary text-sm py-2 px-4">Get Started</a>
        </div>
      </div>
    </nav>
  )
}
