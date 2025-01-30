import React, { useState } from 'react'
import logo from '../assets/cropped-cropped-Asset-1 1.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-[#D8EEF1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img className="h-12 w-auto" src={logo} alt="Logo" />
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">About us</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Product</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Contact us</a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block text-gray-700 hover:text-gray-900 px-3 py-2">Home</a>
            <a href="#" className="block text-gray-700 hover:text-gray-900 px-3 py-2">About us</a>
            <a href="#" className="block text-gray-700 hover:text-gray-900 px-3 py-2">Product</a>
            <a href="#" className="block text-gray-700 hover:text-gray-900 px-3 py-2">Contact us</a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar