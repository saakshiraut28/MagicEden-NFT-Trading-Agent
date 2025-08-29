"use client"

import { useEffect, useMemo, useState } from "react"

type Spark = { id: string; top: number; left: number; delay: number }

export function PixelSparkles({ count = 12 }: { count?: number }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const sparks = useMemo<Spark[]>(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: `spark-${i}`,
        top: Math.random() * 90 + 5,
        left: Math.random() * 90 + 5,
        delay: Math.random() * 2,
      })),
    [count],
  )

  if (!mounted) return null

  return (
    <div className="pointer-events-none absolute inset-0">
      {sparks.map((s) => (
        <span
          key={s.id}
          className="absolute h-1 w-1 bg-cyan-300"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            animation: `sparkle 1.6s ${s.delay.toFixed(2)}s infinite`,
            imageRendering: "pixelated" as any,
          }}
          aria-hidden
        />
      ))}
      <style jsx>{`
        @keyframes sparkle {
          0% { opacity: 0; transform: scale(1); }
          10% { opacity: 1; transform: scale(1.2); }
          50% { opacity: 0.6; transform: scale(1); }
          100% { opacity: 0; transform: scale(1); }
        }
      `}</style>
    </div>
  )
}
