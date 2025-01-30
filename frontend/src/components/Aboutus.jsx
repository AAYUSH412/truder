import React from 'react'
import manufacturingProcess from '../assets/Manufacturing Process-bro (1) 1.svg'


const Aboutus = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-12">
            <div>
                <h2 className="text-black text-5xl font-semibold mb-4">ABOUT US</h2>
            </div>
            {/* Who We Are Section */}
            <div>
              <h2 className="text-[#3EA9B8] text-3xl font-semibold mb-4">WHO WE ARE</h2>
              <p className="text-black font-medium leading-relaxed">
                Truder Packaging is a leading plastic bag manufacturing company, renowned for its commitment to quality and innovation. With a focus on sustainability, we offer a diverse range of reliable and eco-friendly packaging solutions to meet the evolving needs of businesses across various industries.
              </p>
            </div>

            {/* Mission & Vision Section */}
            <div>
              <h2 className="text-[#3EA9B8] text-3xl font-semibold mb-4">MISSION & VISION</h2>
              <p className="text-black font-medium leading-relaxed">
                Our mission is to deliver top-notch plastic bag solutions that combine innovation, quality, and sustainability. We aim to empower businesses with packaging that not only meets their needs but also contributes to a greener future.
              </p>
            </div>

            {/* Our Strategy Section */}
            <div>
              <h2 className="text-[#3EA9B8] text-3xl font-semibold mb-4">OUR STRATEGY</h2>
              <p className="text-black font-medium leading-relaxed">
                Our strategy revolves around leveraging cutting-edge technology and sustainable practices to create versatile plastic bag solutions. By fostering close partnerships with clients, we tailor our offerings to their specific needs, ensuring optimal functionality and environmental responsibility. Through innovation, customization, and a strong commitment to quality, we aim to remain at the forefront of the packaging industry.
              </p>
            </div>

            {/* Read More Button */}
            <button className="bg-black text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-800 transition duration-300">
              Read More
            </button>
          </div>

          {/* Right Column - Can be used for images or additional content */}
          {/* Right Column - Adding the image */}
          <div className="flex items-center justify-center">
            <img 
              src={manufacturingProcess} 
              alt="Manufacturing Process" 
              className="w-full h-auto object-contain max-w-[600px] ml-32"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutus