'use client'

import { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faTerminal, faAngleRight } from '@fortawesome/free-solid-svg-icons'

interface BootLog {
  text: string;
  timestamp: string;
}

export default function Footer() {
  const [bootSequence, setBootSequence] = useState<BootLog[]>([])
  const [bootComplete, setBootComplete] = useState(false)
  const [selectedOption, setSelectedOption] = useState(0) // 0: LinkedIn, 1: Email
  const [cursorVisible, setCursorVisible] = useState(true)
  const footerRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  const bootLogs = [
    "Terminating ornamental animations... DONE",
    "Booting bare-metal command shell...",
    "Restoring profile: ALEX_SAVAGE.vcfg ... OK",
    "Routing traffic to secure comms node...",
    "Integrity check: PASS (0 anomalies)",
    "Opening outbound ports: LINKEDIN, EMAIL",
    "Handshake routines armed.",
    "Standing by for connection request."
  ]

  // Handle Intersection Observer to start boot sequence
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      })
    }, { threshold: 0.5 })

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Boot sequence animation
  useEffect(() => {
    if (!isVisible) return

    let currentIndex = 0
    
    // Clear any existing sequence when becoming visible to restart fresh
    setBootSequence([])

    const interval = setInterval(() => {
      if (currentIndex < bootLogs.length) {
        const now = new Date()
        const timeString = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`
        
        setBootSequence(prev => {
          // Prevent duplicate lines if the interval fires too quickly
          if (prev.length >= bootLogs.length) return prev;
          return [...prev, { text: bootLogs[currentIndex], timestamp: timeString }]
        })
        currentIndex++
      } else {
        clearInterval(interval)
        setTimeout(() => setBootComplete(true), 500)
      }
    }, 400)

    return () => clearInterval(interval)
  }, [isVisible])

  // Cursor blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(v => !v)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  const executeOption = (index: number) => {
    const link = index === 0 
      ? "https://www.linkedin.com/in/alexsavagedata/" 
      : "mailto:alex@dataadvisor.io"
    window.open(link, '_blank')
  }

  // Keyboard navigation
  useEffect(() => {
    if (!bootComplete) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedOption(prev => (prev === 0 ? 1 : 0))
      }
      if (e.key === 'Enter') {
        e.preventDefault()
        executeOption(selectedOption)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [bootComplete, selectedOption])

  return (
    <footer ref={footerRef} className="relative h-screen w-full bg-black font-mono text-green-500 p-4 md:p-8 flex flex-col overflow-hidden">
      {/* Scanlines background */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none opacity-30"></div>
      
      {/* CRT Flicker - Static, no pulse */}
      <div className="absolute inset-0 bg-white opacity-[0.02] pointer-events-none"></div>

      {/* Terminal Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-start items-start">
        
        {/* Header */}
        <div className="w-full border-b border-green-800 pb-2 mb-4 flex items-center justify-between">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faTerminal} className="mr-3" />
            <span className="text-sm md:text-base tracking-widest">ROOT_ACCESS_TERMINAL</span>
          </div>
          <div className="text-xs">ONLINE</div>
        </div>

        {/* Boot Logs */}
        <div className="w-full space-y-1 mb-8 font-mono text-sm md:text-base">
          {bootSequence.map((log, index) => (
            <div key={index} className="opacity-80">
              {/* Show timestamp for all lines except the last one in the predefined log list */}
              {index < bootLogs.length - 1 ? (
                <span className="text-green-700 mr-3">[{log.timestamp}]</span>
              ) : null}
              {log.text}
            </div>
          ))}
          {!bootComplete && (
            <div className="inline-block w-3 h-5 bg-green-500 ml-1 animate-pulse"></div>
          )}
        </div>

        {/* Interactive Prompt */}
        {bootComplete && (
          <div className="animate-fadeIn w-full">
            <h3 className="text-xl md:text-2xl mb-6 font-bold glitch" data-text="INITIATE CONNECTION?">
              INITIATE CONNECTION?
            </h3>

            <div className="space-y-2 text-base md:text-lg">
              
              {/* LinkedIn Option */}
              <div 
                className={`flex items-center cursor-pointer transition-all duration-200 p-1 ${selectedOption === 0 ? 'text-green-400' : 'text-green-800 opacity-60'}`}
                onClick={() => { setSelectedOption(0); executeOption(0); }}
                onMouseEnter={() => setSelectedOption(0)}
              >
                <div className="w-6 mr-2 font-bold">
                  {selectedOption === 0 ? '>' : ''}
                </div>
                <FontAwesomeIcon icon={faLinkedin} className="mr-3" />
                <span className={selectedOption === 0 ? 'underline decoration-2 underline-offset-4' : ''}>LINKEDIN_PROTOCOL</span>
              </div>

              {/* Email Option */}
              <div 
                className={`flex items-center cursor-pointer transition-all duration-200 p-1 ${selectedOption === 1 ? 'text-green-400' : 'text-green-800 opacity-60'}`}
                onClick={() => { setSelectedOption(1); executeOption(1); }}
                onMouseEnter={() => setSelectedOption(1)}
              >
                <div className="w-6 mr-2 font-bold">
                  {selectedOption === 1 ? '>' : ''}
                </div>
                <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
                <span className={selectedOption === 1 ? 'underline decoration-2 underline-offset-4' : ''}>EMAIL_UPLINK</span>
              </div>

            </div>

            <div className="mt-6 text-lg flex items-center">
              <span className="text-green-500 mr-2">user@root:~$</span>
              <span className="text-green-300">
                {selectedOption === 0 ? 'exec ./connect_linkedin.sh' : 'exec ./send_email.sh'}
              </span>
              <span className={`ml-2 w-2 h-5 bg-green-500 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}></span>
            </div>
          </div>
        )}
      </div>
    </footer>
  )
}
