import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

export default function ProjectInfo({ project }) {
  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="mt-3 text-center"
    >
      <h2 className="text-xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text mb-1">
        {project.title}
      </h2>
      <p className="text-gray-400 text-sm mb-2">{project.description}</p>
      <div className="flex justify-center space-x-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-gray-700 text-white px-3 py-1 rounded-full text-sm hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 transition-colors duration-300"
        >
          <Github size={16} className="mr-1" />
          GitHub
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-gray-700 text-white px-3 py-1 rounded-full text-sm hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-400 transition-colors duration-300"
        >
          <ExternalLink size={16} className="mr-1" />
          Live Demo
        </a>
      </div>
    </motion.div>
  )
}

