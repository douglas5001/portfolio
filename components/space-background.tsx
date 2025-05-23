"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"

interface SpaceBackgroundProps {
  className?: string
}

export default function SpaceBackground({ className = "" }: SpaceBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Star properties
    const stars: {
      x: number
      y: number
      size: number
      color: string
      type: "pixel" | "diamond" | "cross" | "dot"
      brightness: number
      pulseSpeed: number
      pulseDirection: boolean
    }[] = []

    // Create stars
    const createStars = () => {
      stars.length = 0
      const starCount = Math.floor((canvas.width * canvas.height) / 800)

      for (let i = 0; i < starCount; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const size = Math.random() * 3 + 1

        // Create a range of colors for stars
        const colors = [
          "#ffffff", // white
          "#fffae6", // warm white
          "#e6f2ff", // cool white
          "#18f0f0", // neon blue
          "#b14aed", // neon purple
          "#ff2a6d", // neon pink
          "#05ffa1", // neon green
        ]

        const color = colors[Math.floor(Math.random() * colors.length)]

        // Different star types
        const types = ["pixel", "diamond", "cross", "dot"]
        const type = types[Math.floor(Math.random() * types.length)] as "pixel" | "diamond" | "cross" | "dot"

        // Brightness for pulsing effect
        const brightness = Math.random() * 0.5 + 0.5
        const pulseSpeed = Math.random() * 0.03 + 0.01
        const pulseDirection = Math.random() > 0.5

        stars.push({
          x,
          y,
          size,
          color,
          type,
          brightness,
          pulseSpeed,
          pulseDirection,
        })
      }
    }

    createStars()

    // Add some nebula clouds
    const nebulae: {
      x: number
      y: number
      radius: number
      color: string
      opacity: number
    }[] = []

    const createNebulae = () => {
      nebulae.length = 0
      const nebulaCount = 5

      const colors = [
        "rgba(177, 74, 237, 0.2)", // purple
        "rgba(24, 240, 240, 0.2)", // blue
        "rgba(255, 42, 109, 0.2)", // pink
        "rgba(5, 255, 161, 0.2)", // green
      ]

      for (let i = 0; i < nebulaCount; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const radius = Math.random() * 300 + 100
        const color = colors[Math.floor(Math.random() * colors.length)]
        const opacity = Math.random() * 0.2 + 0.1

        nebulae.push({ x, y, radius, color, opacity })
      }
    }

    createNebulae()

    // Animation variables
    const speed = 0.5

    // Draw different star types
    const drawStar = (star: (typeof stars)[0]) => {
      const { x, y, size, color, type, brightness } = star

      // Apply brightness
      ctx.globalAlpha = brightness
      ctx.fillStyle = color

      switch (type) {
        case "pixel":
          // Draw a square pixel
          ctx.fillRect(Math.floor(x - size / 2), Math.floor(y - size / 2), Math.ceil(size), Math.ceil(size))
          break

        case "diamond":
          // Draw a diamond shape
          ctx.beginPath()
          ctx.moveTo(x, y - size)
          ctx.lineTo(x + size, y)
          ctx.lineTo(x, y + size)
          ctx.lineTo(x - size, y)
          ctx.closePath()
          ctx.fill()
          break

        case "cross":
          // Draw a plus/cross shape
          ctx.fillRect(x - size / 2, y - size * 1.5, size, size * 3)
          ctx.fillRect(x - size * 1.5, y - size / 2, size * 3, size)
          break

        case "dot":
        default:
          // Draw a circle
          ctx.beginPath()
          ctx.arc(x, y, size, 0, Math.PI * 2)
          ctx.fill()
          break
      }

      // Reset alpha
      ctx.globalAlpha = 1
    }

    // Animation loop
    const animate = () => {
      // Clear canvas with slight trail effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.2)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw nebulae
      for (const nebula of nebulae) {
        const gradient = ctx.createRadialGradient(nebula.x, nebula.y, 0, nebula.x, nebula.y, nebula.radius)

        gradient.addColorStop(0, nebula.color)
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(nebula.x, nebula.y, nebula.radius, 0, Math.PI * 2)
        ctx.fill()

        // Move nebulae slowly downward
        nebula.y = (nebula.y + speed * 0.2) % (canvas.height + nebula.radius)
        if (nebula.y > canvas.height + nebula.radius) {
          nebula.y = -nebula.radius
          nebula.x = Math.random() * canvas.width
        }
      }

      // Draw and update stars
      for (const star of stars) {
        // Draw the star
        drawStar(star)

        // Move stars downward
        star.y += speed

        // Pulse brightness effect
        if (star.pulseDirection) {
          star.brightness += star.pulseSpeed
          if (star.brightness >= 1) {
            star.brightness = 1
            star.pulseDirection = false
          }
        } else {
          star.brightness -= star.pulseSpeed
          if (star.brightness <= 0.3) {
            star.brightness = 0.3
            star.pulseDirection = true
          }
        }

        // Reset stars that go off screen
        if (star.y > canvas.height) {
          star.y = 0
          star.x = Math.random() * canvas.width
        }
      }

      // Add occasional shooting star
      if (Math.random() < 0.01) {
        const x = Math.random() * canvas.width
        const y = 0
        const length = Math.random() * 80 + 40
        const angle = Math.PI / 6 + Math.random() * (Math.PI / 6)
        const speed = Math.random() * 15 + 10

        // Draw shooting star
        ctx.strokeStyle = "#ffffff"
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.lineTo(x + Math.cos(angle) * length, y + Math.sin(angle) * length)
        ctx.stroke()

        // Add glow effect
        ctx.strokeStyle = "rgba(255, 255, 255, 0.3)"
        ctx.lineWidth = 4
        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.lineTo(x + Math.cos(angle) * length, y + Math.sin(angle) * length)
        ctx.stroke()
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      className={`fixed top-0 left-0 w-full h-full ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    />
  )
}
