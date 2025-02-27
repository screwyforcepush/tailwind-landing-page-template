import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie, faChartLine, faBriefcase, faBuilding, faBrain, faUsers, faCode, faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function FeaturesBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Portfolio</h2>
            <p className="text-xl text-gray-600">Multi-Startup Entrepreneur • AI Product Engineer • Ideation → Build → Deploy</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <a className="group relative flex flex-col items-center p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden" href="https://www.linkedin.com/posts/alexsavagedata_i-created-a-digital-twin-generator-for-sales-activity-7289475272842625025-gBGw" target="_blank">
              <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <div className="w-16 h-16 p-1 -mt-1 mb-4 flex items-center justify-center bg-blue-600 rounded-full text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                <FontAwesomeIcon icon={faUserTie} className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-2 text-center group-hover:text-blue-600 transition-colors duration-300">Sales Roleplay with Digital Twin</h4>
              <p className="text-gray-600 text-center">A digital twin generator for sales training that allows realistic roleplaying scenarios with AI-powered customer personas.</p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center text-blue-600 font-medium">
                View Project <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </a>

            {/* 2nd item */}
            <a className="group relative flex flex-col items-center p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden" href="https://www.startupsim.pro/" target="_blank">
              <div className="absolute inset-0 bg-green-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <div className="w-16 h-16 p-1 -mt-1 mb-4 flex items-center justify-center bg-green-600 rounded-full text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                <FontAwesomeIcon icon={faChartLine} className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-2 text-center group-hover:text-green-600 transition-colors duration-300">Startup Simulator</h4>
              <p className="text-gray-600 text-center">An interactive simulation platform for entrepreneurs to test business strategies and scenarios in a risk-free environment. Built for MENA clients.</p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center text-green-600 font-medium">
                View Project <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </a>

            {/* 3rd item */}
            <a className="group relative flex flex-col items-center p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden" href="https://bizsim.flowguard.app/" target="_blank">
              <div className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <div className="w-16 h-16 p-1 -mt-1 mb-4 flex items-center justify-center bg-purple-600 rounded-full text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                <FontAwesomeIcon icon={faBriefcase} className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-2 text-center group-hover:text-purple-600 transition-colors duration-300">Business Advisor Simulation</h4>
              <p className="text-gray-600 text-center">An AI-powered business advisor that provides personalized guidance and recommendations for business growth and optimization.</p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center text-purple-600 font-medium">
                View Project <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </a>

            {/* 4th item */}
            <a className="group relative flex flex-col items-center p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden" href="https://www.aimme.app/" target="_blank">
              <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <div className="w-16 h-16 p-1 -mt-1 mb-4 flex items-center justify-center bg-red-600 rounded-full text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                <FontAwesomeIcon icon={faBrain} className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-2 text-center group-hover:text-red-600 transition-colors duration-300">Business AI Maturity Assessment</h4>
              <p className="text-gray-600 text-center">A comprehensive tool that evaluates and scores a company's AI implementation maturity, providing actionable insights for improvement.</p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center text-red-600 font-medium">
                View Project <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </a>

            {/* 5th item */}
            <a className="group relative flex flex-col items-center p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden" href="https://github.com/screwyforcepush/ai-team-collaboration" target="_blank">
              <div className="absolute inset-0 bg-yellow-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <div className="w-16 h-16 p-1 -mt-1 mb-4 flex items-center justify-center bg-yellow-600 rounded-full text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                <FontAwesomeIcon icon={faUsers} className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-2 text-center group-hover:text-yellow-600 transition-colors duration-300">Multi Persona AI Team Collaboration</h4>
              <p className="text-gray-600 text-center">A platform that enables collaboration between multiple AI personas, each with unique expertise, to solve complex business problems.</p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center text-yellow-600 font-medium">
                View Project <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </a>

            {/* 6th item */}
            <a className="group relative flex flex-col items-center p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden" href="https://github.com/screwyforcepush/linkedpost" target="_blank">
              <div className="absolute inset-0 bg-indigo-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <div className="w-16 h-16 p-1 -mt-1 mb-4 flex items-center justify-center bg-indigo-600 rounded-full text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                <FontAwesomeIcon icon={faCode} className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-2 text-center group-hover:text-indigo-600 transition-colors duration-300">Research and Blog Generation Pipeline</h4>
              <p className="text-gray-600 text-center">An automated pipeline for research aggregation and blog content generation, streamlining the content creation process.</p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center text-indigo-600 font-medium">
                View Project <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </a>

            {/* 7th item - Additional project */}
            <a className="group relative flex flex-col items-center p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden md:col-span-3 lg:col-span-3" href="https://github.com/screwyforcepush/self-optimising-content-gen" target="_blank">
              <div className="absolute inset-0 bg-teal-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <div className="w-16 h-16 p-1 -mt-1 mb-4 flex items-center justify-center bg-teal-600 rounded-full text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                <FontAwesomeIcon icon={faChartLine} className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-2 text-center group-hover:text-teal-600 transition-colors duration-300">Research to LinkedIn Post with RL Feedback Loop Pipeline</h4>
              <p className="text-gray-600 text-center">An advanced content generation system that uses reinforcement learning to optimize LinkedIn posts based on engagement metrics and feedback.</p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center text-teal-600 font-medium">
                View Project <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </a>

          </div>

        </div>
      </div>
    </section>
  )
}