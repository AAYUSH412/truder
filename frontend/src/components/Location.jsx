import React from "react";
import image1 from "../assets/swachh-bharat 1.png";
import image2 from "../assets/cleancity 1.png";
import image3 from "../assets/recycling 1.png";

const Location = () => {
  return (
    <div>
      {/* Map Section */}
      <div className="container mx-auto px-4 py-16">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14770.039038564222!2d73.17919945248848!3d22.25867197546162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc77f3e06c60b%3A0x69292711d6ed5a41!2sTruder%20Packaging%20Industries!5e0!3m2!1sen!2sin!4v1738224175987!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      {/* Images Section */}
      <div style={{ backgroundColor: "#3EA9B8" }} className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Image 1 */}
            <div className="flex flex-col items-center">
              <div className=" p-6 w-full">
                <img
                  src={image1}
                  alt="Swachh Bharat"
                  className="w-full h-40 object-contain mx-auto "
                />
              </div>
            </div>

            {/* Image 2 */}
            <div className="flex flex-col items-center">
              <div className=" p-6 w-full">
                <img
                  src={image2}
                  alt="Clean City"
                  className="w-full h-40 object-contain mx-auto"
                />
              </div>
            </div>

            {/* Image 3 */}
            <div className="flex flex-col items-center">
              <div className="p- w-full">
                <img
                  src={image3}
                  alt="Recycling"
                  className="w-full h-40 object-contain mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
