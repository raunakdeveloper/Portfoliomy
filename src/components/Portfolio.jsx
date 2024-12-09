import React, { useContext } from 'react'
import { PortfolioContext } from '../context/PortfolioContext'
import Header from './Header'
import ProjectCarousel from './ProjectCarousel'
import ProjectInfo from './ProjectInfo'
import Footer from './Footer'

export default function Portfolio() {
  const { isLoaded, currentProject } = useContext(PortfolioContext)

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-gray-900 to-black text-white font-sans overflow-hidden">
      <Header isLoaded={isLoaded} />
      <main className="flex-grow flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-4xl">
          <h2 className="text-2xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-teal-300 text-transparent bg-clip-text">
            Projects
          </h2>
          <ProjectCarousel />
          <ProjectInfo project={currentProject} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

