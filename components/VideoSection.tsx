'use client'

import React from 'react'
import YouTube from 'react-youtube'
import { motion } from 'framer-motion'

interface YouTubeEmbedProps {
  url: string
  title?: string
}

function YouTubeEmbed({ url, title = 'YouTube video player' }: YouTubeEmbedProps) {
  const videoId = url.match(/^.*((youtu.be\/)|(v\/)|(u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/)
  const id = videoId && videoId[7].length === 11 ? videoId[7] : null

  if (!id) {
    return <div className="text-red-500">Invalid YouTube URL</div>
  }

  const opts = {
    playerVars: {
      autoplay: 0 as 0 | 1,
      rel: 0,
    },
  }

  return (
    <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
      <div className="w-full h-0 pb-[56.25%] relative">
        <YouTube videoId={id} opts={opts} title={title} className="absolute top-0 left-0 w-full h-full" />
      </div>
    </div>
  )
}

export default function VideoSection() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center text-gray-800">
        Introduction to The One Choice
      </h2>
      <div className="lg:w-[80%] lg:mx-auto xl:w-[70%]">
        <YouTubeEmbed 
          url="https://youtu.be/lhBL89UZ5hw" 
          title="The One Choice Official Introduction Video"
        />
      </div>
      <p className="mt-8 text-lg sm:text-xl text-gray-600 text-center max-w-3xl mx-auto">
        Discover how The One Choice can transform your life. This video provides an in-depth overview of our unique approach and the benefits you'll experience on your journey with us.
      </p>
    </motion.div>
  )
}

