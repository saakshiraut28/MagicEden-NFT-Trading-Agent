export default function FeatureSection() {
  const features = [
    {
      title: "Gasless Transactions",
      blurb:
        "Backed by @0xGasless. The agent handles the gas completely for you.",
    },
    {
      title: "Real-Time Marketplace Monitoring",
      blurb:
        "Constantly polls across collections to get the best price for you.",
    },
    {
      title: "Trait-Based Bidding Logic (Coming Soon)",
      blurb:
        "Advanced filters let you define trait-specific targets (e.g., Laser Eyes, Gold Fur). The agent only bids when those exact NFTs are listed.",
    },
  ]

  return (
    <section aria-label="Features" className="relative z-0">
      <div className="mx-auto max-w-5xl px-4 md:px-6 py-12 md:py-16">
        <header className="mb-8 md:mb-10">
          <h2 className="text-balance text-2xl md:text-3xl font-semibold tracking-tight text-white">
            Trade smarter with agent-grade features
          </h2>
          <p className="mt-2 text-sm md:text-base text-white/70 max-w-2xl">
            Built for speed, precision, and safety on Magic Eden—no extra steps, just results.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {features.map((f) => (
            <article
              key={f.title}
              className="group rounded-lg border border-cyan-600/40 bg-black/40 p-4 md:p-5 shadow-[0_0_0_1px_rgba(0,0,0,0.4)] transition-all hover:border-cyan-400 hover:shadow-[0_0_24px_rgba(34,211,238,0.25)] focus-within:border-cyan-400"
            >
              <div className="flex items-start gap-3">
                {/* Accent marker */}
                <span
                  aria-hidden
                  className="mt-1 h-2 w-2 flex-shrink-0 rounded-sm bg-pink-400 shadow-[0_0_8px_rgba(244,114,182,0.65)]"
                />
                <div>
                  <h3 className="text-white font-medium text-lg leading-tight">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">{f.blurb}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
