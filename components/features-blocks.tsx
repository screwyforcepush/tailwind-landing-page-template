'use client'

import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie, faChartLine, faBriefcase, faBuilding, faBrain, faUsers, faCode, faArrowRight, faMicrochip, faPhone, faShieldHalved } from '@fortawesome/free-solid-svg-icons'
import CyberpunkCard from './utils/cyberpunk-card'
import GlitchText from './utils/glitch-text'

export default function FeaturesBlocks() {
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

    const section = document.getElementById('portfolio-section')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="portfolio-section" className="relative py-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-80 pointer-events-none overflow-hidden z-0">
        <div className="data-flow-bg absolute inset-0"></div>
      </div>
      
      {/* Scrolling tech keywords */}
      <div className="scrolling-keywords absolute top-20 w-full z-0 opacity-5 overflow-hidden">
        <div className="scrolling-keywords-inner text-7xl font-jetbrains font-bold text-blue-500">
          AI ARCHITECTURE MACHINE-LEARNING NEURAL-NETWORKS DESIGN-SYSTEMS ENGINEERING STRATEGY INNOVATION PROBLEMSOLVING
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 z-10">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <div className="inline-block cyberpunk-border p-2">
              <h2 className="h2 mb-4 text-white font-jetbrains">
                <GlitchText text="PORTFOLIO" variant="medium" enableHoverEffect={false} />
              </h2>
            </div>
            <p className="text-xl text-gray-400 mt-6">
              <span className="text-scan">Product Showcase: </span>
              <span className="text-blue-400"> Learn more about my creations</span>
            </p>
          </div>

          {/* Portfolio grid */}
          <div className="perspective-container max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none stagger-fade-in">
            <CyberpunkCard
              title="Crankshaft - AI Sales Engine"
              description="An end to end solution to verify buyer intent and deliver high-quality live-transfer calls. Features real-time voice analysis and automated CRM integration."
              icon={faPhone}
              color="cyan-600"
              link="https://www.crankshaft.ai/"
              delay={100}
            />

            <CyberpunkCard
              title="FlowGuard - AI Value Platform"
              description="An all-in-one platform for building, optimizing, and securing AI initiatives. Helps businesses quantify ROI, eliminate vendor lock-in, and accelerate AI deployment."
              icon={faShieldHalved}
              color="emerald-600"
              link="https://www.flowguard.ai/"
              delay={200}
            />

            <CyberpunkCard
              title="Sales Roleplay with Digital Twin"
              description="A digital twin generator for sales training that allows realistic roleplaying scenarios with AI-powered customer personas."
              icon={faUserTie}
              color="blue-600"
              link="https://www.linkedin.com/posts/alexsavagedata_i-created-a-digital-twin-generator-for-sales-activity-7289475272842625025-gBGw"
              delay={300}
            />

            <CyberpunkCard
              title="Startup Simulator"
              description="An interactive simulation platform for entrepreneurs to test business strategies and scenarios in a risk-free environment. Built for MENA clients."
              icon={faChartLine}
              color="green-600"
              link="https://www.startupsim.pro/"
              delay={400}
            />

            <CyberpunkCard
              title="Business Advisor Simulation"
              description="An AI-powered business advisor that provides personalized guidance and recommendations for business growth and optimization."
              icon={faBriefcase}
              color="purple-600"
              link="https://bizsim.flowguard.app/"
              delay={500}
            />

            <CyberpunkCard
              title="Business AI Maturity Assessment"
              description="A tool to assess a company's AI maturity. Additionally, a guardrails dashboard for tracking the tool's adherance to the objective."
              icon={faBrain}
              color="red-600"
              link="https://www.aimm.me/"
              delay={600}
            />

            <CyberpunkCard
              title="Multi Persona AI Team Collaboration"
              description="A platform that enables collaboration between multiple AI personas, each with unique expertise, to solve complex business problems."
              icon={faUsers}
              color="yellow-600"
              link="https://www.loom.com/share/5029d37bfd1743a780adf9c177167045"
              delay={700}
            />

            <CyberpunkCard
              title="Research and Blog Generation Pipeline"
              description="An automated pipeline for research aggregation and blog content generation, streamlining the content creation process."
              icon={faCode}
              color="indigo-600"
              link="https://github.com/screwyforcepush/linkedpost"
              delay={800}
            />

            <CyberpunkCard
              title="Research to LinkedIn Post with RL Feedback Loop Pipeline"
              description="An advanced content generation system that uses reinforcement learning to optimize LinkedIn posts based on engagement metrics and feedback."
              icon={faMicrochip}
              color="teal-600"
              link="https://github.com/screwyforcepush/self-optimising-content-gen"
              delay={900}
            />
          </div>
        </div>
      </div>

      {/* Circuit pattern overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
    </section>
  )
}