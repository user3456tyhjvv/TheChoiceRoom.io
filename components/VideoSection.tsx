'use client'

import React from 'react'
import YouTube from 'react-youtube'
import { motion } from 'framer-motion'
import { ArrowRight, Lightbulb, Target, Users, Zap } from 'lucide-react'

interface YouTubeEmbedProps {
  url: string
  title?: string
  className?: string
}

function YouTubeEmbed({ url, title = 'YouTube video player', className = '' }: YouTubeEmbedProps) {
  const videoId = url.match(/^.*((youtu.be\/)|(v\/)|(u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/)
  const id = videoId && videoId[7].length === 11 ? videoId[7] : null

  if (!id) {
    return <div className="text-red-500">Invalid YouTube URL</div>
  }

  const opts = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 0 as 0 | 1,
      rel: 0,
    },
  }

  return (
    <div className={`aspect-w-16 aspect-h-9 w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg ${className}`}>
    <YouTube videoId={id} opts={opts} title={title} />
  </div>
  
  )
}

interface ThumbnailProps {
  icon: React.ReactNode
  title: string
  description: string
}

const Thumbnail: React.FC<ThumbnailProps> = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
  >
    <div className="text-primary mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
    <ArrowRight className="mt-4 text-primary" />
  </motion.div>
)

export default function VideoAndThumbnailsSection() {
  const thumbnails = [
    {
      icon: <Lightbulb size={40} />,
      title: "Discover Your Purpose",
      description: "Uncover your true calling and align your life with your deepest values."
    },
    {
      icon: <Target size={40} />,
      title: "Set Meaningful Goals",
      description: "Learn to create and achieve goals that truly matter to you."
    },
    {
      icon: <Users size={40} />,
      title: "Build Lasting Relationships",
      description: "Develop the skills to foster deep, meaningful connections with others."
    },
    {
      icon: <Zap size={40} />,
      title: "Unlock Your Potential",
      description: "Tap into your inner resources and achieve personal growth like never before."
    }
  ]

  return (
    <>
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 xl:py-20"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 text-center text-gray-800">
          Introduction to The One Choice
        </h2>
        <div className="w-full max-w-4xl mx-auto">
          <YouTubeEmbed 
            url="https://youtu.be/lhBL89UZ5hw" 
            title="The One Choice Official Introduction Video"
            className="h-64 sm:h-80 md:h-96 lg:h-[32rem] xl:h-[36rem]"
          />
        </div>
        <p className="mt-4 sm:mt-6 lg:mt-8 text-base sm:text-lg lg:text-xl text-gray-600 text-center max-w-3xl mx-auto">
          Discover how The One Choice can transform your life. This video provides an in-depth overview of our unique approach and the benefits you'll experience on your journey with us.
        </p>
      </motion.section>

      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center text-gray-800">
          Transform Your Life with The One Choice
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {thumbnails.map((item, index) => (
            <Thumbnail key={index} {...item} />
          ))}
        </div>
      </section>
    </>
  )
}

