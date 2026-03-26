export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div
          className="font-display text-base tracking-wide"
          style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 800 }}
        >
          SignalScout
        </div>

        {/* Copyright */}
        <p className="text-white/25 text-xs text-center">
          © {new Date().getFullYear()} SignalScout. Built for operators who don't have time to miss things.
        </p>

        {/* Links */}
        <div className="flex gap-5 text-xs text-white/35">
          <a href="#how-it-works" className="hover:text-white/65 transition-colors">How It Works</a>
          <a href="#waitlist" className="hover:text-white/65 transition-colors">Founding Access</a>
          <a href="#waitlist" className="hover:text-white/65 transition-colors">Join Waitlist</a>
          <a href="#faq" className="hover:text-white/65 transition-colors">FAQ</a>
        </div>
      </div>
    </footer>
  )
}
