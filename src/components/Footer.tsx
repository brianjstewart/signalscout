export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-display font-800 text-base tracking-wide"
          style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          SignalScout
        </div>
        <p className="text-white/30 text-xs text-center">
          © {new Date().getFullYear()} SignalScout. Built for operators who don't have time to miss things.
        </p>
        <div className="flex gap-4 text-xs text-white/40">
          <a href="#signup" className="hover:text-white/70 transition-colors">Get Started</a>
          <a href="#waitlist" className="hover:text-white/70 transition-colors">Waitlist</a>
        </div>
      </div>
    </footer>
  )
}
