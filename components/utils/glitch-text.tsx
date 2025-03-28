'use client'

import { useState, useEffect } from 'react'

interface GlitchTextProps {
  text: string
  className?: string
  glitchFactor?: number
  delay?: number
  onAnimationComplete?: () => void
  variant?: 'subtle' | 'medium' | 'intense'
  enableHoverEffect?: boolean
}

export default function GlitchText({
  text,
  className = '',
  glitchFactor = 0.3,
  delay = 0,
  onAnimationComplete,
  variant = 'medium',
  enableHoverEffect = true
}: GlitchTextProps) {
  const [displayText, setDisplayText] = useState('')
  const [isComplete, setIsComplete] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [glitchInterval, setGlitchInterval] = useState<NodeJS.Timeout | null>(null)

  // Available character sets for glitching
  const glitchChars = {
    alphanumeric: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    symbols: '!@#$%^&*()_+-=[]{}|;:,./<>?\\\'\"',
    binary: '01',
    hex: '0123456789ABCDEF',
    katakana: 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝ'
  }

  // Get the correct character set based on variant
  const getCharSet = () => {
    switch (variant) {
      case 'subtle':
        return glitchChars.alphanumeric + glitchChars.symbols
      case 'medium':
        return glitchChars.alphanumeric + glitchChars.symbols + glitchChars.hex
      case 'intense':
        return glitchChars.alphanumeric + glitchChars.symbols + glitchChars.katakana
      default:
        return glitchChars.alphanumeric + glitchChars.symbols
    }
  }

  // Initial text reveal with glitch effect
  useEffect(() => {
    if (isComplete) return
    
    const characterSet = getCharSet()
    let currentIndex = 0
    let timeoutId: NodeJS.Timeout

    const revealNextChar = () => {
      if (currentIndex <= text.length) {
        const baseText = text.substring(0, currentIndex)
        let finalText = baseText
        
        // Add glitch characters after the current position
        if (currentIndex < text.length) {
          const glitchLength = Math.floor(Math.random() * 5) + 1
          let glitchText = ''
          
          for (let i = 0; i < glitchLength; i++) {
            glitchText += characterSet.charAt(Math.floor(Math.random() * characterSet.length))
          }
          
          finalText += glitchText
        }
        
        setDisplayText(finalText)
        currentIndex++
        
        const speed = Math.random() * 120 + 30
        timeoutId = setTimeout(revealNextChar, speed)
      } else {
        setDisplayText(text)
        setIsComplete(true)
        if (onAnimationComplete) onAnimationComplete()
      }
    }
    
    timeoutId = setTimeout(() => {
      revealNextChar()
    }, delay)
    
    return () => clearTimeout(timeoutId)
  }, [text, delay, onAnimationComplete, variant, isComplete])

  // Hover effect glitch
  useEffect(() => {
    if (!enableHoverEffect) return
    
    if (isHovering && isComplete) {
      const characterSet = getCharSet()
      const intensity = variant === 'intense' ? 0.4 : variant === 'medium' ? 0.2 : 0.1
      
      const interval = setInterval(() => {
        let glitchedText = ''
        
        for (let i = 0; i < text.length; i++) {
          if (Math.random() < intensity * glitchFactor) {
            glitchedText += characterSet.charAt(Math.floor(Math.random() * characterSet.length))
          } else {
            glitchedText += text.charAt(i)
          }
        }
        
        setDisplayText(glitchedText)
      }, 100)
      
      setGlitchInterval(interval)
      
      return () => {
        clearInterval(interval)
        setDisplayText(text)
      }
    } else if (!isHovering && isComplete) {
      if (glitchInterval) {
        clearInterval(glitchInterval)
        setGlitchInterval(null)
        setDisplayText(text)
      }
    }
  }, [isHovering, isComplete, text, variant, glitchFactor, enableHoverEffect])

  // Clean up intervals on unmount
  useEffect(() => {
    return () => {
      if (glitchInterval) clearInterval(glitchInterval)
    }
  }, [glitchInterval])

  return (
    <span
      className={`glitch-text inline-block ${className}`}
      onMouseEnter={() => isComplete && setIsHovering(true)}
      onMouseLeave={() => isComplete && setIsHovering(false)}
    >
      {displayText}
    </span>
  )
}