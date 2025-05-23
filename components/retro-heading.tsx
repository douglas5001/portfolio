"use client"

import { motion } from "framer-motion"

interface RetroHeadingProps {
  text: string
  highlightedText?: string
  className?: string
  glowColor?: string
}

export default function RetroHeading({
  text,
  highlightedText,
  className = "",
  glowColor = "text-neon-blue",
}: RetroHeadingProps) {
  const fullText = highlightedText ? `${text} ${highlightedText}` : text
  const words = fullText.split(" ")

  // Animation for text reveal
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.h2
      className={`text-3xl md:text-4xl font-bold mb-4 ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          className={`inline-block mr-2 ${word === highlightedText ? glowColor : ""} ${
            word === highlightedText ? "relative" : ""
          }`}
          style={
            word === highlightedText
              ? {
                  textShadow: `0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor`,
                }
              : {}
          }
        >
          {word}
          {word === highlightedText && <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-current"></span>}
        </motion.span>
      ))}
    </motion.h2>
  )
}
