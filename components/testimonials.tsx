'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import GlitchText from './utils/glitch-text'
import TestimonialImage from '@/public/images/headshot.jpg'

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      })
    }, { threshold: 0.1 })

    const section = document.getElementById('testimonials-section')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const partnerLogos = [
    { name: "Fox", src: "/images/logos/Fox.png" },
    { name: "Ericsson", src: "/images/logos/ericsson.png" },
    { name: "ABS-CBN", src: "/images/logos/ABS-CBN.svg" },
    { name: "iflix", src: "/images/logos/iflix7255.jpeg" },
    { name: "DataZoom", src: "/images/logos/datazoom_logo.webp" },
    { name: "Shine", src: "/images/logos/shine_logo.jpeg" }
  ]

  return (
    <section id="testimonials-section" className="relative py-20 overflow-hidden">
      {/* Cyberpunk background with grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-black z-0">
        <div className="cyberpunk-grid absolute inset-0 opacity-5"></div>
        <div className="matrix-rain absolute inset-0 opacity-5"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="text-3xl md:text-4xl font-jetbrains text-white mb-6">
              <GlitchText 
                text="EXPERTISE MATRIX" 
                variant="medium" 
                enableHoverEffect={false}
              />
            </h2>
            <p className="text-xl text-gray-400" data-aos="zoom-y-out">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Product • Process • People<br/>
                Business • Data • Technology
              </span>
            </p>
          </div>

          {/* Expertise hexagons */}
          <div 
            className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 mb-16"
            data-aos="fade-up"
          >
            {/* Hexagon 1 */}
            <div className={`cyberpunk-border p-6 text-center ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
              <div className="font-jetbrains text-xl text-blue-400 mb-2">AI Architecture</div>
              <p className="text-gray-400 text-sm">Designing robust, scalable AI systems with technical excellence</p>
            </div>
            
            {/* Hexagon 2 */}
            <div className={`cyberpunk-border p-6 text-center ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <div className="font-jetbrains text-xl text-purple-400 mb-2">ML Strategy</div>
              <p className="text-gray-400 text-sm">Aligning machine learning capabilities with business objectives</p>
            </div>
            
            {/* Hexagon 3 */}
            <div className={`cyberpunk-border p-6 text-center ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <div className="font-jetbrains text-xl text-pink-400 mb-2">Engineering</div>
              <p className="text-gray-400 text-sm">Implementing production-grade AI solutions with precision</p>
            </div>
            
            {/* Hexagon 4 */}
            <div className={`cyberpunk-border p-6 text-center ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              <div className="font-jetbrains text-xl text-cyan-400 mb-2">Product Design</div>
              <p className="text-gray-400 text-sm">Creating intuitive, powerful AI-enhanced product experiences</p>
            </div>
            
            {/* Hexagon 5 */}
            <div className={`cyberpunk-border p-6 text-center ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
              <div className="font-jetbrains text-xl text-green-400 mb-2">Corporate Innovation</div>
              <p className="text-gray-400 text-sm">Transforming business models with cutting-edge AI approaches</p>
            </div>
            
            {/* Hexagon 6 */}
            <div className={`cyberpunk-border p-6 text-center ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
              <div className="font-jetbrains text-xl text-yellow-400 mb-2">System Integration</div>
              <p className="text-gray-400 text-sm">Seamlessly connecting AI systems with existing infrastructure</p>
            </div>
          </div>

          {/* Stats counters */}
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-jetbrains text-blue-400 mb-2">20M+</div>
              <p className="text-gray-400">Portfolio MAU</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-jetbrains text-purple-400 mb-2">15+</div>
              <p className="text-gray-400">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-jetbrains text-pink-400 mb-2">50+</div>
              <p className="text-gray-400">Projects Delivered</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-jetbrains text-cyan-400 mb-2">3</div>
              <p className="text-gray-400">Founded Startups</p>
            </div>
          </div>

          {/* Partner logos */}
          <div className="relative mb-16">
            <div className="max-w-5xl mx-auto">

              
              {/* Cyberpunk container */}
              <div className="relative bg-gradient-to-r from-transparent via-black/30 to-transparent p-10">
              <h3 className="text-center text-xl font-jetbrains mb-2 tracking-widest">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                  SELECTED CLIENTS
                </span>
              </h3>
                {/* Cyberpunk grid overlay */}
                <div className="absolute inset-0 cyberpunk-grid opacity-10"></div>
                
                {/* Circuit lines connecting logos */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center transform rotate-45">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-400/10 to-transparent"></div>
                </div>
                
                {/* Glowing edges */}
                <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
                <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
                
                {/* Floating data elements */}
                <div className="absolute top-4 left-1/3 w-1 h-1 bg-cyan-400 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute bottom-4 right-1/4 w-1 h-1 bg-purple-400 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-blue-400 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
                
                <div className="relative grid gap-8 grid-cols-3 md:grid-cols-6 items-center justify-items-center py-8">
                  {partnerLogos.map((logo, index) => (
                    <div 
                      key={index} 
                      className="group" 
                      data-aos="fade-up" 
                      data-aos-delay={index * 100}
                    >
                      <div className="relative w-24 h-24 transition-all duration-300 group-hover:scale-105">
                        {/* Main logo container with cyberpunk styling */}
                        <div className="cyberpunk-border relative w-full h-full bg-white shadow-xl group-hover:shadow-blue-400/30 transition-all duration-300">
                          
                          {/* Corner angle cuts matching site theme */}
                          <div className="absolute -top-1 -left-1 w-4 h-4 border-l-2 border-t-2 border-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                          <div className="absolute -top-1 -right-1 w-4 h-4 border-r-2 border-t-2 border-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                          <div className="absolute -bottom-1 -left-1 w-4 h-4 border-l-2 border-b-2 border-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r-2 border-b-2 border-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                          
                          {/* Subtle scan line effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          
                          {/* Logo */}
                          <div className="flex items-center justify-center w-full h-full p-3 relative z-10">
                            <Image 
                              src={logo.src} 
                              alt={logo.name} 
                              width={72} 
                              height={48} 
                              className="transition-all duration-300 group-hover:brightness-105"
                              style={{ 
                                objectFit: 'contain', 
                                maxWidth: '100%',
                                maxHeight: '100%'
                              }} 
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Alex's Bio - Cyberpunk styled but using original content */}
          <div 
            className="max-w-3xl mx-auto mt-20 pt-10" 
            data-aos="zoom-y-out"
          >
            <div className="relative flex items-start border-2 border-gray-800 rounded bg-black bg-opacity-70 glass-effect">
              {/* RGB edge glow effect */}
              <div className="absolute inset-0 rgb-edge rounded opacity-30"></div>
              
              {/* Circuit-like pattern overlay */}
              <div className="absolute inset-0 cyberpunk-grid opacity-5 rounded"></div>
              
              {/* Content */}
              <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0 relative z-10">
                <div className="absolute -top-10 -mt-8 left-1/2 transform -translate-x-1/2">
                  <div className="rounded-full overflow-hidden cyberpunk-border p-1 bg-black">
                    <Image 
                      className="relative rounded-full" 
                      src={TestimonialImage} 
                      width={150} 
                      height={150} 
                      alt="Alex Savage" 
                    />
                  </div>
                </div>
                
                <blockquote className="text-xl font-medium mb-4 text-gray-200">
                  Experienced Leader, melding data, AI, and product strategy to drive business outcomes worldwide. Known for integrating data insights, business acumen, and technical skill, I've pioneered impactful innovations and data-driven decision-making, leading diverse teams to align with key business objectives.
                </blockquote>
                
                <cite className="block font-bold text-lg not-italic mb-1 text-blue-400 font-jetbrains">Alex Savage</cite>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}