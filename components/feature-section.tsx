"use client"

export default function FeatureSection() {
  const features = [
    {
      title: "Gasless Transactions",
      blurb: "Backed by @0xGasless. The agent handles the gas completely for you.",
      icon: "bolt",
      live: false,
      comingSoon: false,
    },
    {
      title: "Real-Time Marketplace Monitoring",
      blurb: "Constantly polls across collections to get the best price for you.",
      icon: "radar",
      live: true,
      comingSoon: false,
    },
    {
      title: "Trait-Based Bidding Logic (Coming Soon)",
      blurb:
        "Advanced filters let you define trait-specific targets (e.g., Laser Eyes, Gold Fur). The agent only bids when those exact NFTs are listed.",
      icon: "target",
      live: false,
      comingSoon: true,
    },
  ] as const

  return (
    <section aria-label="Features" id="features" className="relative z-0">
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
              className="group relative overflow-hidden rounded-lg border border-cyan-600/40 bg-black/40 p-4 md:p-5 shadow-[0_0_0_1px_rgba(0,0,0,0.4)] transition-transform duration-300 will-change-transform hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(34,211,238,0.25)] focus-within:shadow-[0_0_24px_rgba(34,211,238,0.25)]"
            >
              <span aria-hidden className="pointer-events-none absolute left-0 top-0 h-1.5 w-1.5 bg-pink-500" />
              <span aria-hidden className="pointer-events-none absolute right-0 top-0 h-1.5 w-1.5 bg-pink-500" />
              <span aria-hidden className="pointer-events-none absolute left-0 bottom-0 h-1.5 w-1.5 bg-pink-500" />
              <span aria-hidden className="pointer-events-none absolute right-0 bottom-0 h-1.5 w-1.5 bg-pink-500" />

              <div className="scanline pointer-events-none absolute inset-x-0 -top-10 h-10 opacity-0 group-hover:opacity-100" />

              <div className="flex items-start gap-3 md:gap-4">
                <div className="relative mt-0.5">
                  <FeatureIcon name={f.icon} />
                  {f.live ? (
                    <span
                      className="absolute -right-2 -top-2 inline-flex items-center gap-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-1.5 py-0.5 text-[10px] font-medium text-cyan-300"
                      aria-label="Live monitoring"
                      title="Live"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.7)] animate-pulse" />
                      LIVE
                    </span>
                  ) : null}
                </div>

                <div className="min-w-0">
                  <h3 className="text-white font-medium text-lg leading-tight">
                    {f.title}
                    {f.comingSoon ? (
                      <span className="ml-2 align-middle rounded-sm border border-pink-500/40 bg-pink-500/10 px-1.5 py-0.5 text-xs font-medium text-pink-400">
                        Coming Soon
                      </span>
                    ) : null}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">{f.blurb}</p>

                  <div className="mt-4 h-px w-full bg-cyan-500/10" />
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="mt-3 inline-flex items-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-xs font-medium text-cyan-300 outline-none transition-colors hover:text-cyan-200 focus-visible:border-cyan-500/40 focus-visible:ring-2 focus-visible:ring-cyan-500/30"
                    aria-disabled="true"
                  >
                    Learn more
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="stroke-current"
                      aria-hidden="true"
                    >
                      <path
                        d="M7 17L17 7M17 7H9M17 7V15"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scanline {
          background: repeating-linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.06),
            rgba(255, 255, 255, 0.06) 1px,
            rgba(0, 0, 0, 0) 2px,
            rgba(0, 0, 0, 0) 4px
          );
        }
        .group:hover .scanline {
          animation: scanline 1.1s ease-in-out forwards;
        }
        @keyframes scanline {
          0% {
            transform: translateY(-140%);
          }
          100% {
            transform: translateY(220%);
          }
        }
        @keyframes flicker {
          0%, 100% { filter: drop-shadow(0 0 0px rgba(34,211,238,0.0)); opacity: 0.95; }
          50% { filter: drop-shadow(0 0 10px rgba(34,211,238,0.6)); opacity: 1; }
        }
        @keyframes sweep {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes ping {
          0% { transform: scale(0.8); opacity: 0.8; }
          70% { transform: scale(1.15); opacity: 0.15; }
          100% { transform: scale(1.2); opacity: 0; }
        }
      `}</style>
    </section>
  )
}

function FeatureIcon({ name }: { name: "bolt" | "radar" | "target" }) {
  if (name === "bolt") {
    return (
      <div className="grid place-items-center h-9 w-9 rounded-md border border-cyan-500/40 bg-black/60" aria-hidden>
        <svg
          className="text-cyan-400"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="currentColor"
          style={{ animation: "flicker 1.6s ease-in-out infinite" }}
        >
          <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
        </svg>
      </div>
    )
  }

  if (name === "radar") {
    return (
      <div
        className="relative grid place-items-center h-9 w-9 rounded-md border border-cyan-500/40 bg-black/60"
        aria-hidden
      >
        <div className="h-6 w-6 rounded-full border border-cyan-500/40" />
        <div
          className="absolute h-6 w-px origin-bottom bg-cyan-400/80"
          style={{ animation: "sweep 2s linear infinite" }}
        />
      </div>
    )
  }

  return (
    <div
      className="relative grid place-items-center h-9 w-9 rounded-md border border-cyan-500/40 bg-black/60"
      aria-hidden
    >
      <div className="absolute h-6 w-6 rounded-full border border-pink-500/40" />
      <div className="absolute h-4 w-4 rounded-full border border-pink-500/40" />
      <div className="absolute h-1.5 w-1.5 rounded-full bg-pink-500 shadow-[0_0_8px_rgba(244,114,182,0.65)]" />
      <div
        className="absolute h-6 w-6 rounded-full border border-pink-500/40"
        style={{ animation: "ping 1.8s ease-out infinite" }}
      />
    </div>
  )
}