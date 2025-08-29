"use client"

import { NeonButton } from "./neon-button"
import { PixelSparkles } from "./pixel-sparkles"

export function ArcadeHero() {
  return (
    <div className="grid items-center gap-10 md:grid-cols-2">
      <div>
        <div className="inline-block rounded border-4 border-white px-3 py-1 font-serif text-[10px] md:text-xs leading-none mb-4">
          🔵 Coming Soon
        </div>
        <h1 className="font-serif text-balance text-xl md:text-3xl lg:text-4xl neon-flicker">
          Your NFT Trading Agent – Always Playing the Game for You!
        </h1>
        <p className="mt-4 text-pretty text-white/80 leading-relaxed">
          Place collection-wide or trait-specific bids gaslessly. Sit back, and let the agent do the trading.
        </p>

        <div className="mt-6 flex items-center gap-4" id="start">
          <NeonButton href="/chat" variant="primary">
            Start the Trade
          </NeonButton>
          <NeonButton href="#how" variant="ghost">
            See How It Works
          </NeonButton>
        </div>
      </div>

      <div className="relative">
        <div className="crt relative mx-auto aspect-[4/3] w-full max-w-md rounded-lg border-4 border-white bg-black">
          <div className="absolute inset-0 m-2 rounded bg-black/90 ring-4 ring-pink-500 shadow-[0_0_24px_#ec4899]" />
          <PixelSparkles />

          <div className="relative z-10 flex h-full flex-col items-center justify-center p-6">
            <div className="text-center">
              <div className="mx-auto mb-3 h-10 w-10 md:h-12 md:w-12">
                <img
                  src="/images/pixel-robot-arcade-character.png"
                  alt="Arcade agent character"
                  className="h-full w-full image-render-pixel"
                />
              </div>
              <div className="inline-flex items-center gap-2 rounded border-2 border-cyan-300 bg-black px-3 py-2 shadow-[0_0_16px_#67e8f9]">
                <img
                  src="/images/pixel-laser-eyes-ape-nft-icon.png"
                  alt="Laser Eyes Ape NFT icon"
                  className="h-5 w-5 md:h-6 md:w-6 image-render-pixel"
                />
                <span className="font-serif text-[10px] md:text-xs text-cyan-300">PICKUP NFT!</span>
              </div>
              <p className="mt-3 text-xs text-white/80">Tell me you are rich, without telling me you are rich</p>
            </div>

            <div className="mt-4 h-1 w-40 animate-pulse bg-pink-500" />
          </div>
        </div>

        <div className="mx-auto mt-4 flex w-full max-w-md items-center justify-center gap-3" aria-hidden>
          <div className="h-4 w-4 rounded-full bg-pink-500 shadow-[0_0_8px_#ec4899]" />
          <div className="h-4 w-4 rounded-full bg-cyan-300 shadow-[0_0_8px_#67e8f9]" />
          <div className="h-4 w-4 rounded-full bg-white" />
        </div>
      </div>

      <style jsx>{`
        .neon-flicker {
          text-shadow:
            0 0 6px rgba(103, 232, 249, 0.8),
            0 0 14px rgba(103, 232, 249, 0.6);
          animation: neon-flicker 2.8s infinite;
        }
        @keyframes neon-flicker {
          0% { opacity: 1; }
          10% { opacity: 0.95; }
          12% { opacity: 1; }
          20% { opacity: 0.9; }
          22% { opacity: 1; }
          30% { opacity: 0.92; }
          100% { opacity: 1; }
        }
        .image-render-pixel { image-rendering: pixelated; }
        /* CRT scanline effect */
        .crt::after {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.06),
            rgba(255, 255, 255, 0.06) 1px,
            transparent 1px,
            transparent 3px
          );
          opacity: 0.06;
          pointer-events: none;
          mix-blend-mode: screen;
          border-radius: 0.5rem;
        }
      `}</style>
    </div>
  )
}