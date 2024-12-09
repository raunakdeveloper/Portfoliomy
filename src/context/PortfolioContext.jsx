import React, { createContext, useState, useEffect, useCallback } from 'react'

const projects = [
  {
    id: 1,
    title: "Shop Cart",
    description: "A feature-rich e-commerce shopping cart implementation",
    imageUrl: "https://raunakkaushal.vercel.app/p5.png",
    github: "https://github.com/raunakkaushal/Shop-Cart",
    live: "https://raunakkaushal.github.io/Shop-Cart/",
  },
  {
    id: 2,
    title: "Giphy Generator",
    description: "A dynamic web application that generates and displays GIFs using the GIPHY API",
    imageUrl: "https://raunakkaushal.vercel.app/p1.png",
    github: "https://github.com/raunakdeveloper/GiphyGenerator",
    live: "https://giphy-gen.vercel.app/",
  },
  {
    id: 3,
    title: "B-Link URL Shortener",
    description: "A modern URL shortening service with analytics and custom link management",
    imageUrl: "https://raunakkaushal.vercel.app/p2.png",
    github: "https://github.com/raunakdeveloper/B-Link",
    live: "https://blincs.vercel.app/",
  },
  {
    id: 4,
    title: "Chale Trip Website",
    description: "A travel website showcasing destinations and trip planning features",
    imageUrl: "https://raunakkaushal.vercel.app/p3.png",
    github: "https://github.com/raunakdeveloper/Chale-Trip",
    live: "https://chaletrip.vercel.app/",
  },
  {
    id: 5,
    title: "Car Crash Game",
    description: "An exciting browser-based car racing and obstacle avoidance game",
    imageUrl: "https://raunakkaushal.vercel.app/p4.png",
    github: "https://github.com/raunakkaushal/Car-Crash-Game",
    live: "https://raunakkaushal.github.io/Car-Crash-Game/",
  },
]

export const PortfolioContext = createContext()

export const PortfolioProvider = ({ children }) => {
  const [selectedCard, setSelectedCard] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    console.log("Raunak Kaushal ❤")
    setIsLoaded(true)
  }, [])

  const prevCard = useCallback(() => {
    setSelectedCard((prev) => (prev - 1 + projects.length) % projects.length)
  }, [])

  const nextCard = useCallback(() => {
    setSelectedCard((prev) => (prev + 1) % projects.length)
  }, [])

  return (
    <PortfolioContext.Provider
      value={{
        projects,
        selectedCard,
        isLoaded,
        prevCard,
        nextCard,
        currentProject: projects[selectedCard],
      }}
    >
      {children}
    </PortfolioContext.Provider>
  )
}

