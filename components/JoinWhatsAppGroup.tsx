'use client'

import React from "react"
import { motion } from "framer-motion"
import { WhatsappIcon } from "react-share"

const JoinWhatsAppGroup = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-white px-4 py-16"
    >
      <div className="max-w-4xl w-full text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Secure Your Spot in Our
          <span className="text-yellow-400"> Exclusive Community</span>
        </h2>
        <p className="text-xl mb-12">Here's what you should do next...</p>

        <motion.div 
          className="w-full bg-gray-700 h-4 rounded-full mb-12 relative overflow-hidden"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="bg-yellow-400 h-full rounded-full"></div>
          <span className="absolute right-2 top-0 text-xs text-black font-semibold">100%</span>
        </motion.div>

        <motion.div 
          className="bg-gray-800 rounded-lg p-8 shadow-2xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-6">Join Our Private WhatsApp Group</h3>
          <p className="text-gray-300 mb-8">
            Get instant access to our Private WhatsApp group to download your 2025 Plan of Attack + all the free resources we'll share throughout the event for each episode.
          </p>
          <a
            href="https://chat.whatsapp.com/FWnKIR99gt835V0qH53NO0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-green-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-green-600 transition duration-300 transform hover:scale-105"
          >
            <WhatsappIcon size={32} round className="mr-2" />
            JOIN THE WHATSAPP GROUP
          </a>
          <p className="mt-6 text-sm text-gray-400">
            Don't have WhatsApp? <a href="https://www.whatsapp.com/download" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Download it here</a>. It's essential for our communication.
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default JoinWhatsAppGroup

