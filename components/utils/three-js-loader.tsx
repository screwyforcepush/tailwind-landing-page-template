'use client'

import { useEffect, useRef } from 'react'
import Script from 'next/script'

interface ThreeJSLoaderProps {
  containerId: string
}

export default function ThreeJSLoader({ containerId }: ThreeJSLoaderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<any>(null)
  
  // Cleanup function for the animation
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && window.threeAnimation) {
        window.threeAnimation.destroy()
      }
    }
  }, [])

  return (
    <>
      {/* Load Three.js from CDN */}
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js" 
        strategy="beforeInteractive"
      />
      
      {/* Load our custom animation script */}
      <Script
        src="/js/three-animation.js"
        strategy="afterInteractive"
      />
      
      {/* Container for the Three.js animation */}
      <div 
        id={containerId} 
        ref={containerRef} 
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
      ></div>
    </>
  )
}

// Add typings for global window object
declare global {
  interface Window {
    threeAnimation: any
  }
}