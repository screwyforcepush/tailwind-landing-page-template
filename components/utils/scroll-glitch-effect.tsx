'use client'

import { useEffect, useState } from 'react'

export default function ScrollGlitchEffect() {
  const [trigger, setTrigger] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (hasTriggered) return
      
      // Calculate distance to bottom of page
      const scrollPosition = window.scrollY + window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const distanceToBottom = documentHeight - scrollPosition
      
      // Trigger as soon as the footer (assuming ~100vh) starts to come into view
      // We use window.innerHeight + a small buffer to ensure it triggers 
      // just before or immediately as the user reaches the bottom section
      if (distanceToBottom < window.innerHeight + 50 && !trigger) {
        setTrigger(true)
        setHasTriggered(true)
        
        // Disable scroll
        document.body.style.overflow = 'hidden'
        
        // After glitch animation, transport to bottom (footer)
        setTimeout(() => {
          setTrigger(false)
          document.body.style.overflow = ''
          
          // Scroll to bottom
          window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'auto' })
        }, 800) 
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasTriggered, trigger])

  if (!trigger) return null

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden flex items-center justify-center">
      {/* Base Glitch Overlay - Distortion & Blur */}
      <div className="absolute inset-0 backdrop-blur-md bg-black/20 animate-distortion"></div>
      
      {/* Flash Effect (Invert/White) */}
      <div className="absolute inset-0 bg-white mix-blend-exclusion animate-flash"></div>
      
      {/* RGB Channel Splits */}
      <div className="absolute inset-0 bg-red-500/30 mix-blend-screen animate-rgb-shift-1"></div>
      <div className="absolute inset-0 bg-blue-500/30 mix-blend-screen animate-rgb-shift-2"></div>
      
      {/* Noise Overlay */}
      <div className="absolute inset-0 opacity-50 bg-noise animate-noise mix-blend-overlay"></div>
      
      {/* Scanlines */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none opacity-50"></div>
      
      {/* Central Error Message */}
      <div className="relative z-10 animate-glitch-text">
        <div className="bg-blue-600 text-white font-jetbrains font-bold text-xl md:text-4xl p-4 border-2 border-white shadow-[0_0_20px_rgba(0,0,255,0.8)] transform rotate-2">
          SYSTEM_REBOOT_INITIATED
          <div className="text-xs md:text-sm mt-2 font-mono opacity-80">
            Code: 0xREBOOT_SEQ
            <br/>
            Reinitializing Kernel...
          </div>
        </div>
      </div>

      {/* Random colored blocks mimicking graphical artifacting */}
      <div className="absolute top-1/4 left-1/4 w-32 h-2 bg-cyan-400 animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/3 w-24 h-64 bg-pink-500 mix-blend-multiply opacity-40 animate-pulse"></div>
    </div>
  )
}
