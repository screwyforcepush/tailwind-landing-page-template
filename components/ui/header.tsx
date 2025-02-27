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

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }  

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? 'bg-white backdrop-blur-sm shadow-lg' : ''}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <div>
                <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-10 h-10 mb-4 sm:w-auto sm:mb-0 flex items-center justify-center" href="https://www.linkedin.com/in/alexsavagedata/" target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5 mr-2" />
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>
              </div>
              <div>
                <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-10 h-10 sm:w-auto sm:ml-4 flex items-center justify-center" href="https://github.com/screwyforcepush" target="_blank">
                  <FontAwesomeIcon icon={faGithub} className="w-5 h-5 mr-2" />
                  <span className="hidden sm:inline">GitHub</span>
                </a>
              </div>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
