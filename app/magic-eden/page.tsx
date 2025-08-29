import { ArcadeHero } from "@/components/arcade-hero"
import FeatureSection from "@/components/feature-section"

export default function Page() {
  return (
    <main>
      <header className="bg-black text-white border-b border-pink-500">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <h1 className="font-serif text-base md:text-lg tracking-widest">NFT Tradoor </h1>
          <nav className="text-xs md:text-sm">
            <ul className="flex items-center gap-6">
              <li>
                <a className="hover:text-cyan-300" href="#features">
                  Explore
                </a>
              </li>
              <li>
                <a className="hover:text-cyan-300" href="/chat">
                  Chat
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="bg-black text-white border-x border-pink-500">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <ArcadeHero />
        </div>
      </section>

      <section className="bg-black text-white border-x border-pink-500" id="features">
        <div className="mx-auto max-w-6xl px-6 py-10 md:py-14">
          <FeatureSection />
        </div>
      </section>

      <footer className="bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 py-8 text-xs text-white/60">
          © {new Date().getFullYear()} MagicEden Agent. Automated gasless NFT trading. Play responsibly.
        </div>
      </footer>
    </main>
  )
}
