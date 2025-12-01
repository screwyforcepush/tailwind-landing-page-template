'use client'

import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import Logo from './logo'
import Dropdown from '@/components/utils/dropdown'
import MobileMenu from './mobile-menu'

export default function Header() {
  const [top, setTop] = useState<boolean>(true)
  const [hide, setHide] = useState<boolean>(false)

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    const scrollY = window.pageYOffset
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight
    
    scrollY > 10 ? setTop(false) : setTop(true)
    
    // Hide header when near bottom (approaching footer)
    if (documentHeight - (scrollY + windowHeight) < windowHeight / 2) {
      setHide(true)
    } else {
      setHide(false)
    }
  }  

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top, hide])

  return (
    <header 
      className={`fixed w-full z-30 transition-all duration-500 ease-in-out ${!top ? 'glass-effect backdrop-blur-md shadow-lg' : ''} ${hide ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <div className="shrink-0 mr-4 cyberpunk-angles">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Social links with neon effect */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <div className="mr-3">
                <a 
                  className="btn text-white bg-gray-900 hover:bg-blue-900 transition-all duration-300 ease-in-out w-10 h-10 mb-4 sm:w-auto sm:mb-0 flex items-center justify-center neon-box"
                  href="https://www.linkedin.com/in/alexsavagedata/" 
                  target="_blank"
                  style={{
                    background: 'rgba(15, 15, 30, 0.8)',
                    border: '1px solid rgba(50, 130, 240, 0.5)'
                  }}
                >
                  <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5 mr-2 text-blue-400" />
                  <span className="hidden sm:inline text-blue-200">LinkedIn</span>
                </a>
              </div>
              <div>
                <a 
                  className="btn text-white bg-gray-900 hover:bg-purple-900 transition-all duration-300 ease-in-out w-10 h-10 sm:w-auto sm:ml-4 flex items-center justify-center neon-box"
                  href="https://github.com/screwyforcepush" 
                  target="_blank"
                  style={{
                    background: 'rgba(15, 15, 30, 0.8)',
                    border: '1px solid rgba(180, 70, 200, 0.5)'
                  }}
                >
                  <FontAwesomeIcon icon={faGithub} className="w-5 h-5 mr-2 text-purple-400" />
                  <span className="hidden sm:inline text-purple-200">GitHub</span>
                </a>
              </div>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
      
      {/* Cyberpunk header accent line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      {/* Corner angle accents */}
      <div className="absolute top-0 left-0 w-6 h-6">
        <div className="absolute top-0 left-0 w-3 h-0.5 bg-blue-500"></div>
        <div className="absolute top-0 left-0 w-0.5 h-3 bg-blue-500"></div>
      </div>
      <div className="absolute top-0 right-0 w-6 h-6">
        <div className="absolute top-0 right-0 w-3 h-0.5 bg-purple-500"></div>
        <div className="absolute top-0 right-0 w-0.5 h-3 bg-purple-500"></div>
      </div>
    </header>
  )
}