"use client"

import type React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

type Props = {
  href: string
  children: React.ReactNode
  variant?: "primary" | "ghost"
}

export function NeonButton({ href, children, variant = "primary" }: Props) {
  const isPrimary = variant === "primary"
  return (
    <Link
      href={href}
      className={cn(
        "relative inline-block select-none font-serif text-[10px] md:text-xs uppercase tracking-widest",
        "px-4 py-3",
        isPrimary ? "text-black bg-cyan-300" : "text-cyan-300 border border-cyan-300",
      )}
    >
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0",
          isPrimary ? "shadow-[0_0_10px_#67e8f9,0_0_20px_#67e8f9]" : "shadow-[0_0_8px_#67e8f9]",
        )}
      />
      <span aria-hidden className="absolute inset-0 border-4 border-black mix-blend-multiply" />
      <style jsx>{`
        a {
          box-shadow:
            0 0 0 2px #000 inset,
            0 0 0 4px ${isPrimary ? "#22d3ee" : "transparent"};
        }
        a:active {
          transform: translateY(1px);
        }
      `}</style>
    </Link>
  )
}
