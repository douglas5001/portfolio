"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import PixelBorder from "./pixel-border"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  githubLink: string
  demoLink: string
  delay?: number
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  githubLink,
  demoLink,
  delay = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="group"
    >
      <PixelBorder className="h-full">
        <div className="bg-zinc-900 h-full flex flex-col">
          <div className="relative overflow-hidden">
            <div className="aspect-video">
              <img
                src={image || "/placeholder.svg"}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
              <div className="flex space-x-2">
                <Link href={githubLink} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="rounded-none bg-black/50 hover:bg-neon-purple hover:text-black"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub Repository</span>
                  </Button>
                </Link>
                <Link href={demoLink} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="rounded-none bg-black/50 hover:bg-neon-purple hover:text-black"
                  >
                    <ExternalLink className="h-5 w-5" />
                    <span className="sr-only">Live Demo</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold mb-2 text-white group-hover:text-neon-pink transition-colors duration-300">
              {title}
            </h3>
            <p className="text-gray-300 mb-4 flex-grow">{description}</p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-zinc-800 text-xs text-neon-green border border-neon-green"
                  style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </PixelBorder>
    </motion.div>
  )
}
