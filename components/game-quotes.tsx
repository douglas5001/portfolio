"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const quotes = [
  {
    text: "It's dangerous to go alone! Take this.",
    author: "The Legend of Zelda",
  },
  {
    text: "War. War never changes.",
    author: "Fallout",
  },
  {
    text: "A man chooses, a slave obeys.",
    author: "BioShock",
  },
  {
    text: "The cake is a lie.",
    author: "Portal",
  },
  {
    text: "Do a barrel roll!",
    author: "Star Fox 64",
  },
  {
    text: "You have died of dysentery.",
    author: "The Oregon Trail",
  },
  {
    text: "All your base are belong to us.",
    author: "Zero Wing",
  },
  {
    text: "Stay a while and listen!",
    author: "Diablo",
  },
]

export default function GameQuotes() {
  const [quote, setQuote] = useState(quotes[0])
  const [key, setKey] = useState(0)

  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    setQuote(randomQuote)
  }, [])

  const changeQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    setQuote(randomQuote)
    setKey((prev) => prev + 1)
  }

  return (
    <motion.div
      key={key}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      onClick={changeQuote}
      className="bg-zinc-900 border-2 border-neon-blue rounded-lg p-4 cursor-pointer hover:shadow-[0_0_10px_rgba(24,240,240,0.5)] transition-all duration-300"
    >
      <div className="flex items-start">
        <Quote className="h-6 w-6 text-neon-blue mr-2 shrink-0 mt-1" />
        <div>
          <p className="italic text-gray-300">{quote.text}</p>
          <p className="text-right text-sm text-neon-blue mt-2">— {quote.author}</p>
        </div>
      </div>
    </motion.div>
  )
}
