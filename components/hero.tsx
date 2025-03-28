'use client'

import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import GlitchText from './utils/glitch-text'
import ThreeJSLoader from './utils/three-js-loader'

export default function Hero() {
  const [scrolled, setScrolled] = useState(false)
  const [animationComplete, setAnimationComplete] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* 3D Animation Background */}
      <ThreeJSLoader containerId="hero-animation" />
      
      {/* Fallback background and effects in case ThreeJS doesn't load */}
      <div className="absolute inset-0 cyberpunk-grid opacity-10 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-purple-900/20 z-0"></div>
      <div className="absolute inset-0 matrix-rain z-0"></div>

      {/* Angled corner decorations */}
      <div className="absolute top-0 left-0 w-16 h-16 z-10">
        <div className="absolute top-0 left-0 w-8 h-1 bg-blue-500"></div>
        <div className="absolute top-0 left-0 w-1 h-8 bg-blue-500"></div>
      </div>
      <div className="absolute top-0 right-0 w-16 h-16 z-10">
        <div className="absolute top-0 right-0 w-8 h-1 bg-purple-500"></div>
        <div className="absolute top-0 right-0 w-1 h-8 bg-purple-500"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-16 h-16 z-10">
        <div className="absolute bottom-0 left-0 w-8 h-1 bg-cyan-500"></div>
        <div className="absolute bottom-0 left-0 w-1 h-8 bg-cyan-500"></div>
      </div>
      <div className="absolute bottom-0 right-0 w-16 h-16 z-10">
        <div className="absolute bottom-0 right-0 w-8 h-1 bg-pink-500"></div>
        <div className="absolute bottom-0 right-0 w-1 h-8 bg-pink-500"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Hero content */}
        <div className="text-center pb-12 md:pb-16 relative">
          {/* Glitched heading */}
          <div className="relative inline-block">
            <h1 
              className="text-6xl md:text-7xl font-jetbrains font-extrabold leading-tighter tracking-tighter mb-4 glitch" 
              data-text="ALEX SAVAGE"
              data-aos="zoom-y-out"
            >
              <GlitchText 
                text="ALEX SAVAGE" 
                className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                variant="intense"
                glitchFactor={0.5}
                onAnimationComplete={() => setAnimationComplete(true)}
              />
            </h1>
            
            {/* Glowing underline */}
            <div className="h-px w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 neon-box"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Subtitle with staggered reveal */}
            <div 
              className="relative overflow-hidden h-8 my-4"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <p 
                className={`text-xl text-gray-300 transition-all duration-1000 ${animationComplete ? 'opacity-100 transform-none' : 'opacity-0 translate-y-full'}`}
              >
                Entrepreneur • Data Architect • AI Product Engineer
              </p>
            </div>
            
            {/* Terminal-style text */}
            <div 
              className="font-jetbrains text-sm text-cyan-400 mt-6 mb-8 terminal-text"
              data-aos="fade-up"
              data-aos-delay="300"
              style={{ 
                maxWidth: 'fit-content',
                margin: '0 auto',
                visibility: animationComplete ? 'visible' : 'hidden' 
              }}
            >
              Ideate → Build → Deploy
            </div>
            
            {/* Social buttons with refined cyberpunk styling */}
            <div 
              className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center mt-8" 
              data-aos="zoom-y-out" 
              data-aos-delay="450"
              style={{ 
                opacity: animationComplete ? 1 : 0,
                transform: animationComplete ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.5s ease, transform 0.5s ease',
                transitionDelay: '1s'
              }}
            >
              <div className="relative mb-4 sm:mb-0 group">
                <div className="absolute inset-0 bg-blue-500 opacity-30 blur-sm rounded-md group-hover:opacity-40 group-hover:blur transition-all duration-300"></div>
                <a 
                  className="relative btn text-blue-100 border border-blue-500/50 bg-gray-900/90 w-full sm:w-auto sm:mb-0 overflow-hidden flex items-center justify-center py-3 px-6 rounded-sm z-10 backdrop-blur-sm transition-all duration-300 group-hover:border-blue-400/70 group-hover:text-blue-50 shadow-inner"  
                  href="https://www.linkedin.com/in/alexsavagedata/" 
                  target="_blank"
                >
                  {/* Gleaming edge effect */}
                  <div className="absolute inset-0 w-1 bg-blue-400/30 skew-x-12 transform -translate-x-10 group-hover:translate-x-80 transition-all duration-700"></div>
                  
                  <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5 mr-2 text-blue-400" />
                  <span className="tracking-wide font-medium">LinkedIn</span>
                </a>
                {/* Top-left corner accent */}
                <div className="absolute top-0 left-0 w-2 h-2 overflow-hidden">
                  <div className="w-2 h-2 bg-transparent border-l-2 border-t-2 border-blue-400 transform rotate-0"></div>
                </div>
                {/* Bottom-right corner accent */}
                <div className="absolute bottom-0 right-0 w-2 h-2 overflow-hidden">
                  <div className="w-2 h-2 bg-transparent border-r-2 border-b-2 border-blue-400 transform rotate-0"></div>
                </div>
              </div>
              
              <div className="relative sm:ml-4 group">
                <div className="absolute inset-0 bg-purple-600 opacity-30 blur-sm rounded-md group-hover:opacity-40 group-hover:blur transition-all duration-300"></div>
                <a 
                  className="relative btn text-purple-100 border border-purple-500/50 bg-gray-900/90 w-full sm:w-auto overflow-hidden flex items-center justify-center py-3 px-6 rounded-sm z-10 backdrop-blur-sm transition-all duration-300 group-hover:border-purple-400/70 group-hover:text-purple-50 shadow-inner"
                  href="https://github.com/screwyforcepush" 
                  target="_blank"
                >
                  {/* Gleaming edge effect */}
                  <div className="absolute inset-0 w-1 bg-purple-400/30 skew-x-12 transform -translate-x-10 group-hover:translate-x-80 transition-all duration-700"></div>
                  
                  <FontAwesomeIcon icon={faGithub} className="w-5 h-5 mr-2 text-purple-400" />
                  <span className="tracking-wide font-medium">GitHub</span>
                </a>
                {/* Top-left corner accent */}
                <div className="absolute top-0 left-0 w-2 h-2 overflow-hidden">
                  <div className="w-2 h-2 bg-transparent border-l-2 border-t-2 border-purple-400 transform rotate-0"></div>
                </div>
                {/* Bottom-right corner accent */}
                <div className="absolute bottom-0 right-0 w-2 h-2 overflow-hidden">
                  <div className="w-2 h-2 bg-transparent border-r-2 border-b-2 border-purple-400 transform rotate-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div 
        className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 ${scrolled ? 'opacity-0' : 'opacity-100'}`}
        style={{ 
          opacity: animationComplete ? 1 : 0,
          transition: 'opacity 0.5s ease',
          transitionDelay: '1.2s'
        }}
      >
        <div className="flex flex-col items-center text-scan">
          <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
          <FontAwesomeIcon 
            icon={faArrowDown} 
            className="text-blue-500 animate-bounce" 
            style={{ height: '1rem' }}
          />
        </div>
      </div>
    </section>
  )
}