import Link from "next/link"
import { ChatWindow } from "@/components/chat/chat-window"

export default function Page() {
  return (
    <main className="bg-black text-white min-h-screen">
      <header className="border-b border-pink-500">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
          <h1 className="font-serif text-sm md:text-base tracking-widest">NFT Tradoor</h1>
          <nav className="text-xs md:text-sm">
            <ul className="flex items-center gap-6">
              <li>
                <Link className="hover:text-cyan-300" href="/magic-eden">
                  ← Back
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-4 md:px-6">
        <ChatWindow />
      </section>
    </main>
  )
}
