"use client"

type Row = {
  rank: number
  player: string
  collection: string
  profit: string
}

const rows: Row[] = [
  { rank: 1, player: "ARC8-AGENT", collection: "Laser Eyes Apes", profit: "+4.20Ξ" },
  { rank: 2, player: "PIXEL-SNPR", collection: "Retro Runners", profit: "+3.05Ξ" },
  { rank: 3, player: "ME-PLAYER1", collection: "Magic Cats", profit: "+2.77Ξ" },
  { rank: 4, player: "TRAIT-HUNT", collection: "Moon Helmets", profit: "+1.92Ξ" },
  { rank: 5, player: "BOT-NOVA", collection: "Neon Ninjas", profit: "+1.51Ξ" },
]

export function Leaderboard() {
  return (
    <div className="overflow-hidden rounded border-4 border-white">
      <div className="bg-black px-4 py-3 font-serif text-xs tracking-widest">SCOREBOARD</div>
      <div className="grid grid-cols-4 gap-0 border-t border-white/20 bg-black text-xs">
        <div className="px-4 py-2 text-white/60">RANK</div>
        <div className="px-4 py-2 text-white/60">AGENT</div>
        <div className="px-4 py-2 text-white/60">COLLECTION</div>
        <div className="px-4 py-2 text-white/60">P/L</div>
      </div>
      <ul className="divide-y divide-white/10 bg-black">
        {rows.map((r) => (
          <li key={r.rank} className="grid grid-cols-4 items-center bg-black px-4 py-3 hover:bg-white/5">
            <div className="font-serif text-pink-500">{r.rank.toString().padStart(2, "0")}</div>
            <div className="text-white">{r.player}</div>
            <div className="text-white/90">{r.collection}</div>
            <div className="font-serif text-cyan-300">{r.profit}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
