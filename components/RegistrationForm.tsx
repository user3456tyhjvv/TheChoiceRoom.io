'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const RegistrationForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);

  const backendUrl = 'https://thechoiceroomio-production.up.railway.app';


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    if (!email || !name || !phone) {
      setError('All fields are required.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(backendUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name, phone }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Something went wrong.');
        return;
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
      setError('Error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      id="register"
      className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-md">
        {!showForm ? (
          <>
            <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
              Register for Your FREE Spot
            </h2>
            <p className="mb-8 text-center text-gray-600">
              Join our exclusive community and get access to life-changing events!
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full w-full transition duration-300 transform hover:scale-105"
            >
              RESERVE YOUR SPOT NOW
            </button>
            <p className="text-center mt-4 text-sm text-gray-500">
              You'll receive a confirmation email shortly after registering&#39;s
            </p>
          </>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
                role="alert"
              >
                <strong className="font-bold">Error:</strong>
                <span className="block sm:inline"> {error}</span>
              </div>
            )}

            {isSubmitted ? (
              <div className="text-green-500 text-lg font-medium text-center">
                Thank you for subscribing! Please check your email for confirmation.
              </div>
            ) : (
              <>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Give Your Best Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="your@email.com"
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Preferred Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Your Name"
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <PhoneInput
                    international
                    countryCallingCodeEditable={false}
                    value={phone}
                    onChange={(value: string | undefined) => setPhone(value || '')}
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 transition duration-300 transform hover:scale-105"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Subscribe Now'}
                </button>
              </>
            )}
          </form>
        )}
      </div>
    </motion.div>
  );
};

export default RegistrationForm;
