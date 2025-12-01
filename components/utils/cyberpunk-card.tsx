'use client'

import React, { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

interface CardLink {
  label: string
  href: string
  icon?: IconDefinition
}

interface CyberpunkCardProps {
  title: string
  description: string
  icon: IconDefinition
  color: string
  delay?: number
  extraLinks?: CardLink[]
}

export default function CyberpunkCard({ 
  title, 
  description, 
  icon, 
  color, 
  delay = 0,
  extraLinks = []
}: CyberpunkCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const [glitching, setGlitching] = useState(false)
  const [visible, setVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  // Card reveal with delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  // Glitch effect trigger
  useEffect(() => {
    if (isHovered) {
      const interval = setInterval(() => {
        setGlitching(true)
        setTimeout(() => setGlitching(false), 200)
      }, 2000)
      return () => clearInterval(interval)
    }
  }, [isHovered])

  // Track mouse position for the 3D effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    
    setCoords({ x, y })
  }

  // Prepare styles for the 3D transform effect
  const rotateX = isHovered ? (coords.y - 0.5) * 10 : 0
  const rotateY = isHovered ? (coords.x - 0.5) * -10 : 0
  const translate = isHovered ? 'translate3d(0, -10px, 40px)' : 'translate3d(0, 0, 0)'
  const boxShadowOpacity = isHovered ? 0.8 : 0.3
  const boxShadowHeight = isHovered ? 20 : 5
  const boxShadowColor = color.replace('600', '900')

  // Additional classes for the glitch animation
  const glitchClass = glitching ? 'cyberpunk-card-glitch' : ''
  const visibleClass = visible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'

  return (
    <div
      ref={cardRef}
      className={`group relative flex flex-col items-center p-6 h-full rounded-lg overflow-hidden transition-all duration-500 ease-out ${visibleClass}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      style={{
        transformStyle: 'preserve-3d',
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${translate}`,
        boxShadow: `0 ${boxShadowHeight}px 30px rgba(0, 0, 0, ${boxShadowOpacity}), 0 0 ${isHovered ? '10' : '0'}px ${boxShadowColor}`,
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        background: 'rgba(15, 15, 20, 0.95)'
      }}
    >
      {/* Border effect */}
      <div 
        className={`absolute inset-0 border border-${color} opacity-70 ${glitchClass}`}
        style={{ boxShadow: `inset 0 0 ${isHovered ? '20' : '3'}px ${isHovered ? '5' : '0'}px ${color.replace('600', '500')}` }}
      ></div>
      
      {/* Corner accents */}
      <div className={`absolute top-0 left-0 w-8 h-1 bg-${color} ${glitchClass}`}></div>
      <div className={`absolute top-0 left-0 w-1 h-8 bg-${color} ${glitchClass}`}></div>
      <div className={`absolute top-0 right-0 w-8 h-1 bg-${color} ${glitchClass}`}></div>
      <div className={`absolute top-0 right-0 w-1 h-8 bg-${color} ${glitchClass}`}></div>
      <div className={`absolute bottom-0 left-0 w-8 h-1 bg-${color} ${glitchClass}`}></div>
      <div className={`absolute bottom-0 left-0 w-1 h-8 bg-${color} ${glitchClass}`}></div>
      <div className={`absolute bottom-0 right-0 w-8 h-1 bg-${color} ${glitchClass}`}></div>
      <div className={`absolute bottom-0 right-0 w-1 h-8 bg-${color} ${glitchClass}`}></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none cyberpunk-grid"></div>
      
      {/* Icon */}
      <div 
        className={`relative w-16 h-16 p-1 -mt-1 mb-4 flex items-center justify-center rounded-full text-white shadow-md transform transition-transform duration-300 ${glitchClass}`}
        style={{ 
          background: `linear-gradient(135deg, ${color.replace('600', '700')}, ${color})`,
          boxShadow: `0 0 ${isHovered ? '15' : '5'}px ${color.replace('600', '400')}`,
          transform: `translateZ(${isHovered ? 30 : 10}px) scale(${isHovered ? 1.1 : 1})`,
        }}
      >
        <FontAwesomeIcon icon={icon} className="w-8 h-8" />
      </div>
      
      {/* Title */}
      <h4 
        className={`relative text-xl font-bold leading-snug tracking-tight mb-2 text-center text-white transition-all duration-300 ${glitchClass}`}
        style={{ 
          transform: `translateZ(${isHovered ? 50 : 20}px)`,
          textShadow: `0 0 5px ${color.replace('600', '400')}, 0 0 ${isHovered ? 10 : 0}px ${color.replace('600', '300')}` 
        }}
      >
        {title}
      </h4>
      
      {/* Description */}
      <p 
        className="relative text-gray-400 text-center mb-4 z-10"
        style={{ transform: `translateZ(${isHovered ? 40 : 15}px)` }}
      >
        {description}
      </p>

      {extraLinks.length > 0 && (
        <div 
          className="relative mt-auto flex flex-wrap justify-center gap-2 z-10"
          style={{ transform: `translateZ(${isHovered ? 45 : 20}px)` }}
        >
          {extraLinks.map(({ href, label, icon: linkIcon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-700 text-sm text-gray-300 hover:text-white hover:border-white transition-colors"
            >
              {linkIcon && <FontAwesomeIcon icon={linkIcon} className="w-3.5 h-3.5" />}
              {label}
            </a>
          ))}
        </div>
      )}
      
    </div>
  )
}