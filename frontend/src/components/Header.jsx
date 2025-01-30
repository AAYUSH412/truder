import React from "react";
import shoppingBag from "../assets/Shopping bag-pana 1.svg";
import shoppingBagAmico from "../assets/Shopping bag-amico 1.svg";

const Header = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#D8EEF1] from-10% to-[#3EA9B8] to-100%" />
      
      {/* Top Right Image Layer - Hidden on small screens */}
      <div className="absolute top-0 right-1 hidden sm:block">
        <img
          src={shoppingBagAmico}
          alt="Shopping Bag Amico"
          className="w-[150px] sm:w-[200px] md:w-[250px] object-contain"
        />
      </div>
      
      {/* Right Image Layer */}
      <div className="absolute bottom-0 right-0 sm:right-52 w-full">

        <div className="flex justify-end">
          <img
            src={shoppingBag}
            alt="Shopping Bag"
            className="w-full sm:w-[80%] md:w-[60%] lg:w-[50%] max-h-[60vh] sm:max-h-[80vh] object-contain"
          />
        </div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 pt-10 sm:pt-16 md:pt-44">
          <div className="flex flex-col items-start max-w-[90%] sm:max-w-[80%] md:max-w-[777px]">
            {/* Main Heading */}
            <h1 className="font-inter text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight md:leading-[121.02px] text-left">
              YOUR TRUSTED
            </h1>

            {/* Subheading */}
            <div className="mt-2 sm:mt-0">
              <h2 className="font-inter text-xl sm:text-2xl md:text-4xl font-semibold bg-[#3EA9B8] text-white px-3 py-2 rounded-md inline-block">
                PLASTIC MANUFACTURER
              </h2>
            </div>

            {/* Description */}
            <p className="font-inter text-lg sm:text-xl md:text-[32px] font-semibold text-left mt-4 sm:mt-6 md:mt-10 max-w-full sm:max-w-[592px]">
              Carry Bags, Garbage Bags and More...
            </p>

            {/* Contact Button */}
            <div className="mt-4 sm:mt-6 md:mt-8 w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-black text-white font-inter text-lg sm:text-xl md:text-[30px] font-semibold rounded-md hover:bg-gray-800 transition duration-300 px-4 py-2 sm:px-6 sm:py-3">
                CONTACT US NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;