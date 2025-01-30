import React from 'react'
import logo from '../assets/footerimage.png'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaYoutube, FaWhatsapp, FaInstagram, FaClock } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-[#19444A] text-white py-16">
      <div className="container mx-auto px-4">
        {/* Logo */}
        <div className="flex justify-start mb-12">
          <img src={logo} alt="Company Logo" className="h-16" />
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Grid 1 - Contact Us */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">CONTACT US</h3>
            <div className="space-y-4">
              <a href="https://goo.gl/maps/YourLocationLink" className="flex items-start space-x-3 hover:text-gray-300">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                <span>882/5/A Makarpura GIDC Industrial Estate Vadodara Gujarat-390010</span>
              </a>
              <a href="tel:+919408342280" className="flex items-center space-x-3 hover:text-gray-300">
                <FaPhone />
                <span>+91 9408342280</span>
              </a>
              <a href="mailto:Mail@truderpackaging.com" className="flex items-center space-x-3 hover:text-gray-300">
                <FaEnvelope />
                <span>Mail@truderpackaging.com</span>
              </a>
            </div>
          </div>

          {/* Grid 2 - Follow Us */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">FOLLOW US</h3>
            <div className="space-y-4">
              <a href="https://facebook.com/MeenaPlastic" className="flex items-center space-x-3 hover:text-gray-300">
                <FaFacebook />
                <span>MeenaPlastic@facebook.com</span>
              </a>
              <a href="https://youtube.com/MeenaPlastic" className="flex items-center space-x-3 hover:text-gray-300">
                <FaYoutube />
                <span>MeenaPlastic</span>
              </a>
              <a href="https://wa.me/919408342280" className="flex items-center space-x-3 hover:text-gray-300">
                <FaWhatsapp />
                <span>+91 94083 42280</span>
              </a>
              <a href="https://instagram.com/MeenaPlastic037" className="flex items-center space-x-3 hover:text-gray-300">
                <FaInstagram />
                <span>MeenaPlastic037</span>
              </a>
            </div>
          </div>

          {/* Grid 3 - Working Hours */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">WORKING HOURS</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaClock className="mt-1 flex-shrink-0" />
                <div>
                  <p>MONDAY-SATURDAY</p>
                  <p className="text-gray-300">9:00am - 5:00pm</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaClock className="mt-1 flex-shrink-0" />
                <div>
                  <p>SUNDAY</p>
                  <p className="text-gray-300">C L O S E D</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer