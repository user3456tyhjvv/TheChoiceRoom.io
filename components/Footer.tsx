"use client";

import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  const [notification, setNotification] = useState(false);

  const showNotification = () => {
    setNotification(true);
    setTimeout(() => {
      setNotification(false);
    }, 3000); // Notification disappears after 3 seconds
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">The-One-Choice</h3>
            <p className="mb-4">
              Empowering your journey to success through strategic choices and
              continuous growth.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#events" className="hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#register" className="hover:text-white transition-colors">
                  Register
                </Link>
              </li>
              <li>
                <button
                  onClick={showNotification}
                  className="hover:text-white transition-colors underline"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={showNotification}
                  className="hover:text-white transition-colors underline"
                >
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://web.facebook.com/sams.page.584306/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://www.instagram.com/sammymuigai131"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.twitter.com/@sammymuigai416"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/sammy-muigai-1390a0259/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <div className="text-center">
          <p className="text-sm mb-4">
            This site is not part of Domainhood or Domainhood Inc. Additionally,
            this site is NOT endorsed by Domainhood in any way.{" "}
            <span className="font-bold">Domainhood</span> is a trademark of{" "}
            <span className="font-bold">Domainhood, Inc.</span>
          </p>
          <p className="text-sm">©2025 The-One-Choice. All Rights Reserved.</p>
        </div>
      </div>

      {/* Notification */}
      {notification && (
        <div className="absolute top-0 left-0 w-full flex justify-center">
          <div className="bg-blue-600 text-white px-4 py-2 rounded shadow-lg">
            The Privacy Policy and Terms & Conditions will be provided upon
            request. Please contact us at{" "}
            <a
              href="mailto:theonechoice416@gmail.com"
              className="underline font-semibold"
            >
              theonechoice416@gmail.com
            </a>
            .
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
