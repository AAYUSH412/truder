import React from 'react'
import whyImage from '../assets/why.svg'

const Whychooseus = () => {
  return (
    <div className="min-h-screen" style={{ background: '#65BAC6' }}>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-12">
            <h2 className="text-black text-5xl font-semibold mb-8">
              WHY TRUDERS
            </h2>

            {/* Quality Section */}
            <div>
              <h3 className="text-white text-3xl font-semibold mb-4">
                QUALITY
              </h3>
              <p className="text-black font-medium leading-relaxed">
                At Truder Packaging, we are dedicated to excellence in plastic manufacturing. Our products stand as a testament to our unwavering commitment to quality.
              </p>
            </div>

            {/* Range Section */}
            <div>
              <h3 className="text-white text-3xl font-semibold mb-4">
                RANGE
              </h3>
              <p className="text-black font-medium leading-relaxed">
                Truder Packaging excels in producing a versatile range of top-notch plastic products. Our commitment to quality ensures that each item, within our wide spectrum of offerings, is crafted with precision and reliability at its core.
              </p>
            </div>

            {/* Capacity Section */}
            <div>
              <h3 className="text-white text-3xl font-semibold mb-4">
                CAPACITY
              </h3>
              <p className="text-black font-medium leading-relaxed">
                At Truder Packaging, our production capacity stands as a testament to our capability and commitment. With state-of-the-art facilities and efficient processes, we ensure a robust manufacturing capacity that meets the demands of our diverse clientele.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex items-center justify-center">
            <img 
              src={whyImage}
              alt="Why Choose Us"
              className="w-full h-auto object-contain max-w-[600px] mx-8"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Whychooseus