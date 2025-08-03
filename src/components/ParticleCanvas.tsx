"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  life: number
  maxLife: number
  type: "particle" | "star" | "orb"
  color: string
}

interface ParticleCanvasProps {
  particleCount?: number
  starCount?: number
  orbCount?: number
}

export default function ParticleCanvas({ particleCount = 60, starCount = 30, orbCount = 3 }: ParticleCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const particlesRef = useRef<Particle[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticle = (type: "particle" | "star" | "orb"): Particle => {
      const colors = {
        particle: "rgba(255, 255, 255, 0.8)",
        star: "rgba(255, 255, 255, 1)",
        orb: "rgba(139, 92, 246, 0.6)",
      }

      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: type === "particle" ? -0.3 - Math.random() * 0.5 : (Math.random() - 0.5) * 0.2,
        size: type === "orb" ? 20 + Math.random() * 10 : type === "star" ? 1 + Math.random() * 2 : 1,
        opacity: type === "orb" ? 0.3 + Math.random() * 0.3 : 0.3 + Math.random() * 0.7,
        life: 0,
        maxLife: type === "orb" ? 1000 : type === "star" ? 800 : 600,
        type,
        color: colors[type],
      }
    }

    const initParticles = () => {
      particlesRef.current = []

      // Add particles
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push(createParticle("particle"))
      }

      // Add stars
      for (let i = 0; i < starCount; i++) {
        particlesRef.current.push(createParticle("star"))
      }

      // Add orbs
      for (let i = 0; i < orbCount; i++) {
        particlesRef.current.push(createParticle("orb"))
      }
    }

    const updateParticle = (particle: Particle) => {
      particle.x += particle.vx
      particle.y += particle.vy
      particle.life++

      // Particle-specific behavior
      if (particle.type === "particle") {
        particle.opacity = Math.sin((particle.life / particle.maxLife) * Math.PI) * 0.8
      } else if (particle.type === "star") {
        particle.opacity = 0.3 + Math.sin((particle.life / 100) * Math.PI) * 0.7
      } else if (particle.type === "orb") {
        particle.x += Math.sin(particle.life * 0.01) * 0.5
        particle.y += Math.cos(particle.life * 0.008) * 0.3
        particle.opacity = 0.3 + Math.sin((particle.life / 200) * Math.PI) * 0.3
      }

      // Reset particle when it dies or goes off screen
      if (
        particle.life >= particle.maxLife ||
        particle.x < -50 ||
        particle.x > canvas.width + 50 ||
        particle.y < -50 ||
        particle.y > canvas.height + 50
      ) {
        const newParticle = createParticle(particle.type)
        Object.assign(particle, newParticle)
      }
    }

    const drawParticle = (particle: Particle) => {
      ctx.save()
      ctx.globalAlpha = particle.opacity

      if (particle.type === "orb") {
        // Draw orb with gradient
        const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.size)
        gradient.addColorStop(0, "rgba(139, 92, 246, 0.6)")
        gradient.addColorStop(0.5, "rgba(139, 92, 246, 0.3)")
        gradient.addColorStop(1, "rgba(139, 92, 246, 0)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
      } else {
        // Draw simple circle for particles and stars
        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.restore()
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((particle) => {
        updateParticle(particle)
        drawParticle(particle)
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    initParticles()
    animate()

    window.addEventListener("resize", resizeCanvas)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [particleCount, starCount, orbCount])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: "transparent" }} />
  )
}
