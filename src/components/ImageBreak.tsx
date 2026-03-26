export default function ImageBreak() {
  return (
    <section className="px-6 py-4">
      <div className="max-w-5xl mx-auto">
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            boxShadow: '0 0 60px rgba(124,58,237,0.2)',
            border: '1px solid rgba(124,58,237,0.2)',
          }}
        >
          <img
            src="/hero-image.jpg"
            alt="SignalScout morning intelligence brief"
            className="w-full h-auto object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
          />
        </div>
      </div>
    </section>
  )
}
