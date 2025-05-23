"use client"

interface PixelDividerProps {
  color?: string
}

export default function PixelDivider({ color = "bg-neon-blue" }: PixelDividerProps) {
  return (
    <div className="flex justify-center my-4">
      <div className="flex space-x-1">
        <div className={`w-2 h-2 ${color}`}></div>
        <div className={`w-4 h-2 ${color}`}></div>
        <div className={`w-8 h-2 ${color}`}></div>
        <div className={`w-16 h-2 ${color}`}></div>
        <div className={`w-8 h-2 ${color}`}></div>
        <div className={`w-4 h-2 ${color}`}></div>
        <div className={`w-2 h-2 ${color}`}></div>
      </div>
    </div>
  )
}
