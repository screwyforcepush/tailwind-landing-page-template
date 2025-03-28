'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  opacity: number
  pulse: boolean
  pulseSpeed: number
  connections: number[]
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: undefined as number | undefined, y: undefined as number | undefined })
  const hueRef = useRef(0)
  const frameRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      particlesRef.current = []
      const particleCount = Math.floor(window.innerWidth * window.innerHeight / 15000)
      
      for (let i = 0; i < particleCount; i++) {
        const size = Math.random() * 2 + 0.5
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const speedX = Math.random() * 0.5 - 0.25
        const speedY = Math.random() * 0.5 - 0.25
        const hue = Math.random() * 60 + 180 // Cyan to blue range
        const opacity = Math.random() * 0.5 + 0.2
        const pulse = Math.random() > 0.7
        const pulseSpeed = Math.random() * 0.02 + 0.005

        particlesRef.current.push({
          x,
          y,
          size,
          speedX,
          speedY,
          color: `hsla(${hue}, 100%, 50%, ${opacity})`,
          opacity,
          pulse,
          pulseSpeed,
          connections: []
        })
      }
    }

    const updateParticles = () => {
      for (let i = 0; i < particlesRef.current.length; i++) {
        const p = particlesRef.current[i]
        
        // Update position
        p.x += p.speedX
        p.y += p.speedY
        
        // Bounds checking
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
        
        // Pulse effect
        if (p.pulse) {
          p.opacity += p.pulseSpeed
          if (p.opacity > 0.7 || p.opacity < 0.2) {
            p.pulseSpeed *= -1
          }
          p.color = p.color.replace(/[\d.]+\)$/, `${p.opacity})`)
        }
        
        // Mouse interaction
        if (mouseRef.current.x !== undefined && mouseRef.current.y !== undefined) {
          const dx = mouseRef.current.x - p.x
          const dy = mouseRef.current.y - p.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 100) {
            const angle = Math.atan2(dy, dx)
            p.speedX -= Math.cos(angle) * 0.03
            p.speedY -= Math.sin(angle) * 0.03
          }
        }
        
        // Apply friction
        p.speedX *= 0.99
        p.speedY *= 0.99
      }
    }

    const findConnections = () => {
      const connectDistance = 120
      
      // Clear existing connections
      for (let i = 0; i < particlesRef.current.length; i++) {
        particlesRef.current[i].connections = []
      }
      
      // Find new connections
      for (let i = 0; i < particlesRef.current.length; i++) {
        const p1 = particlesRef.current[i]
        
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p2 = particlesRef.current[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < connectDistance) {
            p1.connections.push(j)
            p2.connections.push(i)
          }
        }
      }
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw connections first
      for (let i = 0; i < particlesRef.current.length; i++) {
        const p1 = particlesRef.current[i]
        
        for (const j of p1.connections) {
          const p2 = particlesRef.current[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const opacity = 1 - distance / 120
          
          ctx.beginPath()
          ctx.strokeStyle = `hsla(${hueRef.current}, 100%, 50%, ${opacity * 0.2})`
          ctx.lineWidth = 0.5
          ctx.moveTo(p1.x, p1.y)
          ctx.lineTo(p2.x, p2.y)
          ctx.stroke()
        }
      }
      
      // Draw particles
      for (const p of particlesRef.current) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.fill()
      }
    }

    const animate = () => {
      updateParticles()
      
      // Only update connections every 10 frames for performance
      if (frameRef.current % 10 === 0) {
        findConnections()
        hueRef.current = (hueRef.current + 0.1) % 360
      }
      
      drawParticles()
      frameRef.current++
      requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.x, y: e.y }
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: undefined, y: undefined }
    }

    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)
    
    resizeCanvas()
    initParticles()
    animate()
    
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(frameRef.current)
    }
  }, [])

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  )
}