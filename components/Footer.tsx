import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">The-One-Choice</h3>
            <p className="mb-4">Empowering your journey to success through strategic choices and continuous growth.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#events" className="hover:text-white transition-colors">Events</Link></li>
              <li><Link href="#register" className="hover:text-white transition-colors">Register</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="https://web.facebook.com/sams.page.584306/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <FaFacebookF size={24} />
              </a>
              <a href="https://www.instagram.com/sammymuigai131" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.twitter.com/@sammymuigai416" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.linkedin.com/in/sammy-muigai-1390a0259/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <div className="text-center">
          <p className="text-sm mb-4">
            This site is not part of Domainhood or Domainhood Inc. Additionally, this site is NOT endorsed by Domainhood in any way.{' '}
            <span className="font-bold">Domainhood</span> is a trademark of{' '}
            <span className="font-bold">Domainhood, Inc.</span>
          </p>
          <p className="text-sm">©2025 The-One-Choice. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

