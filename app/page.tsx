"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, Github, Joystick, Linkedin, Mail, Rocket, Zap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import SkillBadge from "@/components/skill-badge"
import GameQuotes from "@/components/game-quotes"
import RetroHeading from "@/components/retro-heading"
import PixelDivider from "@/components/pixel-divider"
import PixelBorder from "@/components/pixel-border"
import SpaceBackground from "@/components/space-background"

export default function Portfolio() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])

  // Blinking cursor effect
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white" ref={ref}>
      {/* Space Background */}
      <SpaceBackground className="z-0" />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 z-10" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 z-5 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(#18f0f0 1px, transparent 1px), linear-gradient(90deg, #18f0f0 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <motion.div
          className="relative z-20 text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div className="text-5xl md:text-7xl font-bold mb-4 font-mono" style={{ y: textY }}>
            <span className="text-neon-green">Portella5001</span>
            <span className="text-white">::</span>
            <span className="text-neon-pink">READY</span>
            <span
              className={`inline-block w-5 h-12 ml-2 bg-neon-blue ${showCursor ? "opacity-100" : "opacity-0"}`}
            ></span>
          </motion.div>
          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="text-neon-blue">FullStack Developer</span> exploring the
            <span className="text-neon-pink"> galaxy</span> of
            <span className="text-neon-green"> code</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button
              variant="outline"
              size="lg"
              className="rounded-none border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(24,240,240,0.5)]"
              onClick={() => {
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              PRESS START <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-0 right-0 flex justify-center z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="flex space-x-4">
            <Link href="https://github.com/douglas5001" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-none hover:bg-neon-blue/20 border border-neon-blue"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-none hover:bg-neon-blue/20 border border-neon-blue"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:douglasportella5001@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-none hover:bg-neon-blue/20 border border-neon-blue"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4 md:px-8 bg-zinc-950/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <RetroHeading text="About" highlightedText="Me" glowColor="text-neon-pink" />
            <PixelDivider color="bg-neon-pink" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <PixelBorder>
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4D03AQFYZWXJbLSjXA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1711645336099?e=1753315200&v=beta&t=oc3hiJ8s7UEQ98nAvLaxPhUmi3ERQ3bJAeSYagWhoNw"
                    alt="Developer Portrait"
                    className="w-full h-full object-cover"
                    style={{ imageRendering: "pixelated" }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-2 font-mono text-neon-green text-center">
                    PLAYER_1: DOUGLAS PORTELLA
                  </div>
                </div>
              </PixelBorder>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 font-mono">
                FullTack Developer & <span className="text-neon-green">Space Explorer</span>
              </h3>
              <p className="text-gray-300 mb-6">
                Sou desenvolvedor FullStack em constante aprendizado, com grande entusiasmo por desenvolver soluções que conectam tecnologia e praticidade. Tenho paixão por ciência e tecnologia em geral, e um interesse especial por Física — área que sempre me instigou a entender o mundo em sua essência. Busco unir lógica, criatividade e conhecimento técnico para construir aplicações funcionais e bem estruturadas, sempre seguindo boas práticas de desenvolvimento. 
              </p>
              <p className="text-gray-300 mb-6">
                Quando não estou programando, você pode me encontrar explorando galáxias virtuais, criando pixel art ou aprendendo sobre
                novas tecnologias. Acredito que um bom código é como um sistema estelar bem mapeado: deve ser organizado,
                navegável e cheio de possibilidades.
              </p>

              <GameQuotes />

              <div className="mt-8">
                <Button
                  className="bg-neon-green hover:bg-neon-green/80 text-black rounded-none border-2 border-neon-green shadow-[0_0_10px_rgba(5,255,161,0.5)]"
                  onClick={() => {
                    document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  CHECK MY STATS <Joystick className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 px-4 md:px-8 bg-black/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <RetroHeading text="My" highlightedText="Stats" glowColor="text-neon-green" />
            <PixelDivider color="bg-neon-green" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center font-mono">
                <Zap className="mr-2 h-6 w-6 text-neon-blue" />
                TECH SKILLS
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <SkillBadge name="Python" level={70} />
                <SkillBadge name="SQL / SGDBs" level={75} />
                <SkillBadge name="JavaScript" level={40} />
                <SkillBadge name="React" level={50} />
                <SkillBadge name="Tailwind CSS" level={40} />
                <SkillBadge name="Figma" level={70} />
                <SkillBadge name="Git" level={90} />
                <SkillBadge name="Flutter" level={20} />
                <SkillBadge name="Linux" level={60} />
                <SkillBadge name="Docker" level={80} />
                <SkillBadge name="Kubernets" level={40} />
                <SkillBadge name="Airflow" level={85} />
                <SkillBadge name="AWS - Amazon" level={40} />
                <SkillBadge name="Azure - Microsoft" level={45} />
                
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center font-mono">
                <Rocket className="mr-2 h-6 w-6 text-neon-purple" />
                SOFT SKILLS
              </h3>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2 font-mono">
                    <span className="font-medium">PROBLEM SOLVING</span>
                    <span className="text-neon-purple">LVL 8</span>
                  </div>
                  <div className="w-full bg-zinc-800 h-4 border border-neon-purple">
                    <div className="bg-neon-purple h-full" style={{ width: "80%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2 font-mono">
                    <span className="font-medium">TEAM COLLABORATION</span>
                    <span className="text-neon-purple">LVL 9</span>
                  </div>
                  <div className="w-full bg-zinc-800 h-4 border border-neon-purple">
                    <div className="bg-neon-purple h-full" style={{ width: "90%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2 font-mono">
                    <span className="font-medium">COMMUNICATION</span>
                    <span className="text-neon-purple">LVL 6</span>
                  </div>
                  <div className="w-full bg-zinc-800 h-4 border border-neon-purple">
                    <div className="bg-neon-purple h-full" style={{ width: "60%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2 font-mono">
                    <span className="font-medium">ADAPTABILITY</span>
                    <span className="text-neon-purple">LVL 10</span>
                  </div>
                  <div className="w-full bg-zinc-800 h-4 border border-neon-purple">
                    <div className="bg-neon-purple h-full" style={{ width: "100%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2 font-mono">
                    <span className="font-medium">TIME MANAGEMENT</span>
                    <span className="text-neon-purple">LVL 7</span>
                  </div>
                  <div className="w-full bg-zinc-800 h-4 border border-neon-purple">
                    <div className="bg-neon-purple h-full" style={{ width: "70%" }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-4 md:px-8 bg-zinc-950/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <RetroHeading text="My" highlightedText="Quests" glowColor="text-neon-yellow" />
            <PixelDivider color="bg-neon-yellow" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="Desenvolvi uma api Ao vivo"
              description="Neste projeto era meu 1º mês trabalhando com python, então fiz um video para mostrar minhas habilidades iniciais, apresentado no youtube"
              image="/api_rest_python.png?height=300&width=500"
              tags={["Python", "Postgres", "Docker", "Linux"]}
              githubLink="https://github.com/douglas5001"
              demoLink="https://www.youtube.com/watch?v=gC7w8p6mTQQ&t=21s"
              delay={0}
            />

            <ProjectCard
              title="FRONT + BACK"
              description="Desenvolvi sozinho um sitema seguindo todas STACKS, nele possui uma estrutura pronta para escalonar para projetos maiores, apresentado no Likedin"
              image="/web-front.png?height=300&width=500"
              tags={["Python", "JavaScript", "Postgres", "CSS", "HTML"]}
              githubLink="https://github.com/douglas5001"
              demoLink="https://www.linkedin.com/feed/update/urn:li:activity:7316598120824365056/"
              delay={0.2}
            />

            <ProjectCard
              title="Api- Loja Online (Descontinuado)"
              description="Estava em processo um projeto para uma loja online, mas o projeto foi descontinuado devido ao tempo. Pretendo dar continuidade em 2026"
              image="/api-loja-online.png?height=300&width=500"
              tags={["Python", "Postgres", "Docker"]}
              githubLink="https://github.com/douglas5001/Api-Loja-online/tree/main"
              demoLink="https://github.com/douglas5001/Api-Loja-online/blob/main/entidades.png"
              delay={0.4}
            />

            <ProjectCard
              title="Cluste Kubernets - Sem nuvem"
              description="Em estudos solos, por mo tivos de aprendizado resolvi desenvolver sem o auxilio de numvem cluster Kubernetes para trabalhar com aplicações com altas cargas de acessos"
              image="/clusterKubernets.png?height=300&width=500"
              tags={["DockerDI", "Kubernets", "MetalLB", "Linux"]}
              githubLink="https://github.com/douglas5001/Nginx-Ingress-Controller"
              demoLink="https://github.com/douglas5001/Nginx-Ingress-Controller/blob/main/nodeport.jpg"
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-4 md:px-8 bg-black/80 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <RetroHeading text="Send" highlightedText="Message" glowColor="text-neon-blue" />
            <PixelDivider color="bg-neon-blue" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <PixelBorder className="bg-zinc-950 p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 font-mono">
                      NAME
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 bg-zinc-900 border-2 border-neon-blue rounded-none focus:outline-none focus:ring-2 focus:ring-neon-blue"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 font-mono">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 bg-zinc-900 border-2 border-neon-blue rounded-none focus:outline-none focus:ring-2 focus:ring-neon-blue"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 font-mono">
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 bg-zinc-900 border-2 border-neon-blue rounded-none focus:outline-none focus:ring-2 focus:ring-neon-blue"
                    placeholder="Subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 font-mono">
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 bg-zinc-900 border-2 border-neon-blue rounded-none focus:outline-none focus:ring-2 focus:ring-neon-blue"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-neon-blue hover:bg-neon-blue/80 text-black font-medium py-3 rounded-none border-2 border-neon-blue shadow-[0_0_10px_rgba(24,240,240,0.5)] font-mono"
                >
                  SEND MESSAGE
                </Button>
              </form>
            </PixelBorder>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-4 bg-zinc-950/90 text-center border-t-2 border-neon-purple backdrop-blur-sm">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center space-x-6 mb-6">
            <Link href="https://github.com/douglas5001" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-none hover:bg-neon-purple/20 border-2 border-neon-purple"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/douglas-portella-1755b8250/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-none hover:bg-neon-purple/20 border-2 border-neon-purple"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:douglasportella5001@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-none hover:bg-neon-purple/20 border-2 border-neon-purple"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>

          <p className="text-neon-blue text-sm font-mono">&copy; {new Date().getFullYear()} Duglas Portella</p>
          <p className="text-zinc-500 text-xs mt-2 font-mono">
            EXPLORING THE <span className="text-neon-pink">GALAXY OF CODE</span>
          </p>
        </div>
      </footer>
    </div>
  )
}
