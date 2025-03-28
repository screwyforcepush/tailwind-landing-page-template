'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)
  const [buttonGlitch, setButtonGlitch] = useState<boolean>(false)

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  // Close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // Close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  // Occasional glitch effect for the hamburger button
  useEffect(() => {
    if (!mobileNavOpen) {
      const glitchInterval = setInterval(() => {
        setButtonGlitch(true)
        setTimeout(() => setButtonGlitch(false), 200)
      }, 8000)
      
      return () => clearInterval(glitchInterval)
    }
  }, [mobileNavOpen])

  return (
    <div className="flex md:hidden">
      {/* Hamburger button with glitch effect */}
      <button
        ref={trigger}
        className={`hamburger cyberpunk-border ${mobileNavOpen && 'active'} ${buttonGlitch && 'cyberpunk-card-glitch'}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg className="w-6 h-6 fill-current text-blue-400" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect y="4" width="24" height="2" />
          <rect y="11" width="24" height="2" />
          <rect y="18" width="24" height="2" />
        </svg>
      </button>

      {/* Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-gray-900 cyberpunk-grid"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {/* Cyberpunk line accent */}
          <div className="h-0.5 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
          
          {/* Menu content with futuristic style */}
          <div className="px-5 py-8">
            <div className="font-jetbrains text-lg text-blue-400 mb-6">/ SYSTEM_DIRECTORY</div>
            
            <ul className="stagger-fade-in space-y-6">
              <li>
                <a 
                  href="mailto:alex@dataadvisor.io" 
                  className="text-white hover:text-blue-400 transition-colors flex items-center py-2 px-4 glass-effect rounded-md border border-blue-900/40"
                  onClick={() => setMobileNavOpen(false)}
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-500/20 mr-3">
                    <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-lg">Email</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com/in/alexsavagedata" 
                  target="_blank" 
                  className="text-white hover:text-purple-400 transition-colors flex items-center py-2 px-4 glass-effect rounded-md border border-purple-900/40"
                  onClick={() => setMobileNavOpen(false)}
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-purple-500/20 mr-3">
                    <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="text-lg">LinkedIn</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/screwyforcepush" 
                  target="_blank" 
                  className="text-white hover:text-pink-400 transition-colors flex items-center py-2 px-4 glass-effect rounded-md border border-pink-900/40"
                  onClick={() => setMobileNavOpen(false)}
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-pink-500/20 mr-3">
                    <FontAwesomeIcon icon={faGithub} className="w-5 h-5 text-pink-400" />
                  </div>
                  <span className="text-lg">GitHub</span>
                </a>
              </li>
            </ul>
            
            {/* System status section */}
            <div className="mt-12 font-jetbrains text-xs text-gray-500">
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></div>
                <span>SYSTEM_ONLINE</span>
              </div>
              <div>STATUS: READY_FOR_CONNECTION</div>
              <div className="mt-1">VERSION: 3.7.25</div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  )
}