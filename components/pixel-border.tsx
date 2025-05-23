"use client"

import type { ReactNode } from "react"

interface PixelBorderProps {
  children: ReactNode
  className?: string
}

export default function PixelBorder({ children, className = "" }: PixelBorderProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 p-1">
        <div className="w-full h-full border-2 border-neon-blue shadow-[0_0_10px_rgba(24,240,240,0.7)] relative">
          {/* Pixel corners */}
          <div className="absolute -top-1 -left-1 w-3 h-3 bg-black border-2 border-neon-blue"></div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-black border-2 border-neon-blue"></div>
          <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-black border-2 border-neon-blue"></div>
          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-black border-2 border-neon-blue"></div>
        </div>
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}
