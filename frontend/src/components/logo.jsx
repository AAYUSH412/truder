import React from 'react'
import image1 from '../assets/download 1.png'
import image2 from '../assets/download 2.png'
import image3 from '../assets/download 3.png'

const logo = () => {
  return (
    <div className="min-h-auto bg-white my-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center h-full">
          {/* Originality */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 mb-4">
              <img 
                src={image1} 
                alt="Originality" 
                className="w-full h-full object-contain bg-transparent"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Originality</h3>
          </div>

          {/* Collaboration */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 mb-4">
              <img 
                src={image2}
                alt="Collaboration" 
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Collaboration</h3>
          </div>

          {/* Infrastructure */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 mb-4">
              <img 
                src={image3}
                alt="Infrastructure" 
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Infrastructure</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default logo