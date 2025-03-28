'use client'

import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faArrowRight, faCode, faLaptopCode, faRobot, faBrain } from '@fortawesome/free-solid-svg-icons'
import GlitchText from './utils/glitch-text'

export default function Newsletter() {
  const [isVisible, setIsVisible] = useState(false)
  const [iconHover, setIconHover] = useState(-1)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      })
    }, { threshold: 0.1 })

    const section = document.getElementById('contact-section')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  // Floating icons in background
  const floatingIcons = [
    { icon: faCode, color: 'text-blue-500', size: 'text-3xl', style: { top: '10%', left: '10%', animationDuration: '15s' } },
    { icon: faLaptopCode, color: 'text-purple-500', size: 'text-4xl', style: { top: '20%', right: '15%', animationDuration: '18s' } },
    { icon: faRobot, color: 'text-cyan-500', size: 'text-5xl', style: { bottom: '15%', left: '20%', animationDuration: '20s' } },
    { icon: faBrain, color: 'text-pink-500', size: 'text-4xl', style: { bottom: '25%', right: '10%', animationDuration: '17s' } },
  ]

  return (
    <section id="contact-section" className="relative py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black pointer-events-none"></div>
      
      {/* Floating icons */}
      {floatingIcons.map((item, i) => (
        <div 
          key={i}
          className={`absolute ${item.size} ${item.color} opacity-10 hidden lg:block`}
          style={{ 
            ...item.style,
            animation: `float ${item.style.animationDuration} ease-in-out infinite alternate`,
          }}
        >
          <FontAwesomeIcon icon={item.icon} />
        </div>
      ))}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="pb-12 md:pb-20">

          {/* CTA box */}
          <div 
            className="relative rounded-lg py-10 px-8 md:py-16 md:px-12 overflow-hidden bg-black bg-opacity-70 shadow-2xl transform perspective-container" 
            data-aos="zoom-y-out"
          >
            {/* Circuit pattern overlay */}
            <div className="absolute inset-0 cyberpunk-grid opacity-10"></div>
            <div className="absolute inset-0 matrix-rain opacity-5"></div>
            
            {/* Glowing border */}
            <div className="absolute inset-0 cyberpunk-border pointer-events-none"></div>

            {/* Section content */}
            <div className="relative flex flex-col lg:flex-row justify-between items-center">
              <div className="text-center lg:text-left lg:max-w-xl">
                <h2 className="h3 text-white mb-6 font-jetbrains">
                  <GlitchText 
                    text="INITIATE CONNECTION" 
                    variant="medium"
                    glitchFactor={0.4}
                  />
                </h2>
                
                <p className="text-gray-300 text-lg mb-8">
                  <span className="text-scan">Ready to architect the future? </span>
                  <span className="text-blue-400">Let's collaborate on your next groundbreaking AI project.</span>
                </p>
                
             {/* Contact buttons with refined cyberpunk styling */}
             <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 stagger-fade-in">
                  {/* Email button */}
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-700 opacity-30 blur-sm rounded group-hover:opacity-50 transition-all duration-300"></div>
                    <a 
                      className="relative btn bg-black border border-blue-500/30 text-blue-200 shadow-lg flex items-center justify-center py-3 px-6 rounded-sm z-10 backdrop-blur-sm transition-all duration-300 group-hover:border-blue-400/50"
                      href="mailto:alex@dataadvisor.io"
                      onMouseEnter={() => setIconHover(0)}
                      onMouseLeave={() => setIconHover(-1)}
                    >
                      {/* Button highlight line */}
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
                      
                      <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 mr-3 text-blue-400" />
                      <span className="font-medium tracking-wide">Email</span>
                      <div className="relative ml-2 w-5 h-5 flex items-center justify-center overflow-hidden">
                        <FontAwesomeIcon 
                          icon={faArrowRight} 
                          className={`absolute transition-all duration-300 text-blue-400 ${iconHover === 0 ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`} 
                        />
                        <div className={`absolute h-px w-5 bg-blue-400 transition-all duration-300 ${iconHover === 0 ? 'translate-x-5 opacity-0' : 'translate-x-0 opacity-100'}`}></div>
                      </div>
                    </a>
                  </div>
                  
                  {/* LinkedIn button */}
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-800 opacity-30 blur-sm rounded group-hover:opacity-50 transition-all duration-300"></div>
                    <a 
                      className="relative btn bg-black border border-purple-500/30 text-purple-200 shadow-lg flex items-center justify-center py-3 px-6 rounded-sm z-10 backdrop-blur-sm transition-all duration-300 group-hover:border-purple-400/50"
                      href="https://www.linkedin.com/in/alexsavagedata/"
                      target="_blank"
                      onMouseEnter={() => setIconHover(1)}
                      onMouseLeave={() => setIconHover(-1)}
                    >
                      {/* Button highlight line */}
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent"></div>
                      
                      <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5 mr-3 text-purple-400" />
                      <span className="font-medium tracking-wide">LinkedIn</span>
                      <div className="relative ml-2 w-5 h-5 flex items-center justify-center overflow-hidden">
                        <FontAwesomeIcon 
                          icon={faArrowRight} 
                          className={`absolute transition-all duration-300 text-purple-400 ${iconHover === 1 ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`} 
                        />
                        <div className={`absolute h-px w-5 bg-purple-400 transition-all duration-300 ${iconHover === 1 ? 'translate-x-5 opacity-0' : 'translate-x-0 opacity-100'}`}></div>
                      </div>
                    </a>
                  </div>
                  </div>
                </div>

              {/* Terminal-style message */}
              <div className="mt-8 lg:mt-0 lg:ml-8 p-4 border border-gray-700 bg-black bg-opacity-50 rounded font-jetbrains text-sm text-green-400 w-full lg:w-96 h-48 overflow-hidden">
                <div className="flex items-center mb-2 pb-2 border-b border-gray-700">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-2 text-gray-400">alex@terminal:~</span>
                </div>
                <div className="typing-container">
                  <p className="terminal-text">$ initialize_contact</p>
                  <p>Connecting to neural network...</p>
                  <p>Analyzing project requirements...</p>
                  <p>Converting ideas to solutions...</p>
                  <p className="text-blue-400">Ready for collaboration!</p>
                  <p className="flex items-center">
                    <span className="mr-1">$</span> 
                    <span className="animate-pulse">▌</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer credit */}
          <div className="text-center text-gray-600 text-sm mt-8">
            © {new Date().getFullYear()} Alex Savage • AI Architect • Engineer • Strategist
          </div>
        </div>
      </div>
    </section>
  )
}