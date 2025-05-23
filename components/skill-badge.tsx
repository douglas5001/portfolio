"use client"

import { motion } from "framer-motion"

interface SkillBadgeProps {
  name: string
  level: number
}

export default function SkillBadge({ name, level }: SkillBadgeProps) {
  // Calculate how many full blocks to show (out of 10)
  const blocks = Math.round(level / 10)

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="px-4 py-2 bg-zinc-900 rounded-lg border-2 border-neon-blue hover:shadow-[0_0_10px_rgba(24,240,240,0.5)] transition-all duration-300"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-xs text-neon-green">{level}%</span>
      </div>
      <div className="flex space-x-1">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className={`h-3 w-3 ${i < blocks ? "bg-neon-green" : "bg-zinc-800 border border-zinc-700"}`}
          ></div>
        ))}
      </div>
    </motion.div>
  )
}
