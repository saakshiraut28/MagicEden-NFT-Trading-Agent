"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import Image from "next/image"

type Msg = {
  id: string
  role: "assistant" | "user"
  content: string
}

export function ChatWindow() {
  const [messages, setMessages] = useState<Msg[]>([
    {
      id: "w1",
      role: "assistant",
      content:
        "Let's go!",
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" })
  }, [messages])

  // Function to return waiting message for all prompts
  function findMatchingResponse(userInput: string): string {
    return "you'll have to wait a bit. we will soon be live 👀"
  }

  function sendMessage() {
    const text = input.trim()
    if (!text) return
    
    const user: Msg = { id: crypto.randomUUID(), role: "user", content: text }
    setMessages((m) => [...m, user])
    setInput("")
    setIsTyping(true)

    // Find matching response and simulate 5-second delay
    const responseText = findMatchingResponse(text)
    
    setTimeout(() => {
      const reply: Msg = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: responseText,
      }
      setMessages((m) => [...m, reply])
      setIsTyping(false)
    }, 5000) // 5 second delay
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="relative flex h-[calc(100vh-6rem)] flex-col py-4">
      {/* Chat area */}
      <div
        ref={scrollRef}
        className="relative flex-1 overflow-y-auto rounded border border-white/10 bg-black/80 p-4 shadow-[inset_0_0_24px_rgba(236,72,153,0.15)]"
      >
        {/* subtle scanlines */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded"
          style={{
            background:
              "repeating-linear-gradient(to bottom, rgba(255,255,255,0.06), rgba(255,255,255,0.06) 1px, transparent 1px, transparent 3px)",
            opacity: 0.05,
            mixBlendMode: "screen",
          }}
        />

        <ul className="relative z-10 space-y-4">
          {messages.map((m) => (
            <li
              key={m.id}
              className={cn("flex items-start gap-3", m.role === "user" ? "justify-end" : "justify-start")}
            >
              {m.role === "assistant" && (
                <Image 
                  src="/images/pixel-robot-arcade-character.png" 
                  alt="agent-img" 
                  width={50} 
                  height={50} 
                  className="rounded-full"
                />
              )}

              <div
                className={cn(
                  "max-w-[80%] rounded-md px-3 py-2 text-sm leading-relaxed whitespace-pre-line break-words",
                  m.role === "assistant"
                    ? "border border-cyan-300/60 bg-black/60 text-white shadow-[0_0_16px_rgba(103,232,249,0.25)]"
                    : "border border-pink-500/70 bg-black/60 text-white shadow-[0_0_16px_rgba(236,72,153,0.25)]",
                )}
              >
                {m.content}
              </div>

              {m.role === "user" && (
                <Image 
                  src="/images/pixel-laser-eyes-ape-nft-icon.png" 
                  alt="agent-img" 
                  width={50} 
                  height={50} 
                  className="rounded-full"
                />
              )}
            </li>
          ))}
          
          {/* Typing indicator */}
          {isTyping && (
            <li className="flex items-start gap-3 justify-start">
              <Image 
                  src="/images/pixel-robot-arcade-character.png" 
                  alt="agent-img" 
                  width={50} 
                  height={50} 
                  className="rounded-full"
                />
              <div className="border border-cyan-300/60 bg-black/60 text-white shadow-[0_0_16px_rgba(103,232,249,0.25)] rounded-md px-3 py-2 text-sm">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            </li>
          )}
        </ul>
      </div>

      {/* Composer */}
      <div className="sticky bottom-0 mt-4 rounded border border-white/15 bg-black/80 p-3 backdrop-blur">
        <div className="flex items-end gap-3">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder='Describe your strategy: "Bid on Laser Eyes Apes under 0.3Ξ, rank < 1500, 24h duration."'
            className="min-h-[56px] flex-1 resize-none bg-black text-white placeholder:text-white/40 focus-visible:ring-pink-500"
            disabled={isTyping}
          />
          <Button
            onClick={sendMessage}
            disabled={isTyping}
            className="border-2 border-pink-500 bg-black font-serif text-xs text-pink-500 hover:bg-pink-500 hover:text-black disabled:opacity-50"
          >
            {isTyping ? "..." : "SEND"}
          </Button>
        </div>
        <p className="mt-2 text-[11px] text-white/50">Press Enter to send • Shift+Enter for new line</p>
      </div>
    </div>
  )
}