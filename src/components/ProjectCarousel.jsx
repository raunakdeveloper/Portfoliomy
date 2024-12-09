import React, { useContext } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { PortfolioContext } from '../context/PortfolioContext'
import ProjectCard from './ProjectCard'

export default function ProjectCarousel() {
  const { projects, selectedCard, prevCard, nextCard } = useContext(PortfolioContext)

  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50
    if (info.offset.x > swipeThreshold) {
      prevCard()
    } else if (info.offset.x < -swipeThreshold) {
      nextCard()
    }
  }

  return (
    <div className="relative h-44">
      <button
        className="absolute top-1/2 left-2 z-50 transform -translate-y-1/2 bg-white text-black p-2 rounded-full opacity-75 hover:opacity-100 transition-opacity duration-300"
        onClick={prevCard}
        aria-label="Previous project"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        className="absolute top-1/2 right-2 z-50 transform -translate-y-1/2 bg-white text-black p-2 rounded-full opacity-75 hover:opacity-100 transition-opacity duration-300"
        onClick={nextCard}
        aria-label="Next project"
      >
        <ChevronRight size={20} />
      </button>

      <div className="flex justify-center h-full relative overflow-hidden">
        <AnimatePresence initial={false}>
          {projects.map((project, index) => {
            const offset = (index - selectedCard + projects.length) % projects.length
            const isActive = offset === 0
            const xPosition = offset === 0 ? 0 : offset === 1 || offset === -projects.length + 1 ? 150 : offset === projects.length - 1 || offset === -1 ? -150 : -1000

            return (
              <motion.div
                key={project.id}
                className={`absolute select-none w-3/4 max-w-xs ${isActive ? 'z-20' : 'z-10'}`}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEnd}
                initial={{ opacity: 0, x: xPosition }}
                animate={{
                  opacity: isActive ? 1 : 0.6,
                  x: xPosition,
                  scale: isActive ? 1 : 0.85,
                }}
                exit={{ opacity: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 120,
                  damping: 14,
                }}
              >
                <ProjectCard project={project} isActive={isActive} />
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
    </div>
  )
}

