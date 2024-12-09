import React from 'react'
import { Github, Linkedin, MessageSquare } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="pb-4 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/raunakkaushal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/raunakkaushal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition-colors duration-300"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://wa.me/919369511514"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors duration-300"
          >
            <MessageSquare className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}

