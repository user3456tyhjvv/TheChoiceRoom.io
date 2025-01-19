'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Modal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-5 rounded shadow-md max-w-sm text-center">
        <h2 className="text-lg font-bold mb-2">Important Notification</h2>
        <p className="mb-4">
          Beware of fraudulent contacts. For secure communication, please contact us only through our official email.
        </p>
        <p className="mb-4">
          <a 
            href="mailto:theonechoice@gmail.com" 
            className="text-blue-500 underline hover:text-blue-700"
          >
            theonechoice416@gmail.com
          </a>
        </p>
        <p className="text-sm text-gray-600 mb-4">
          Remember, we will never ask for sensitive information like passwords or payment details via any email other than our official one.
        </p>
        <button 
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  )
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleContactClick = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <>
      <nav className="bg-gray-800 p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-white text-lg font-bold">The-One-Choice</Link>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <ul className={`md:flex space-x-4 ${isOpen ? 'block absolute top-full left-0 right-0 bg-gray-800 p-4' : 'hidden'} md:relative md:bg-transparent`}>
            <li><Link href="#events" className="text-gray-300 hover:text-white block py-2 md:inline md:py-0">Events</Link></li>
            <li><Link href="#register" className="text-gray-300 hover:text-white block py-2 md:inline md:py-0">Register</Link></li>
            <li><button onClick={handleContactClick} className="text-gray-300 hover:text-white block py-2 md:inline md:py-0">Contact</button></li>
          </ul>
        </div>
      </nav>

      <Modal isOpen={modalOpen} onClose={closeModal} />

      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 md:p-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to The-One-Choice</h1>
          <p className="text-xl md:text-2xl mb-8">
            Discover the ultimate experience with us. Learn more about our events and how you can be part of them.
          </p>
          <Link 
            href="#register"
            className="px-8 py-3 bg-yellow-400 text-gray-900 rounded-full font-semibold text-lg hover:bg-yellow-300 transition duration-300"
          >
            Reserve Your Spot Now
          </Link>
        </div>
      </section>
    </>
  )
}

export default Navbar

