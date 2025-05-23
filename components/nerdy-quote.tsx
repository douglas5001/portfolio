"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const quotes = [
  {
    text: "It's not a bug, it's a feature.",
    author: "Anonymous Programmer",
  },
  {
    text: "The code is more what you'd call guidelines than actual rules.",
    author: "Pirates of the Caribbean (modified)",
  },
  {
    text: "I'm not a great programmer; I'm just a good programmer with great habits.",
    author: "Kent Beck",
  },
  {
    text: "May the Force be with your code.",
    author: "Star Wars (modified)",
  },
  {
    text: "One does not simply write secure code.",
    author: "Boromir (modified)",
  },
  {
    text: "With great power comes great electricity bill.",
    author: "Dr. Who (modified)",
  },
]

export default function NerdyQuote() {
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
      className="bg-zinc-800 border border-zinc-700 rounded-lg p-4 cursor-pointer hover:border-emerald-400 transition-colors duration-300"
    >
      <div className="flex items-start">
        <Quote className="h-6 w-6 text-emerald-400 mr-2 shrink-0 mt-1" />
        <div>
          <p className="italic text-gray-300">{quote.text}</p>
          <p className="text-right text-sm text-emerald-400 mt-2">— {quote.author}</p>
        </div>
      </div>
    </motion.div>
  )
}
