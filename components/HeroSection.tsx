import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-4/5">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://cdn.jsdelivr.net/gh/ashishmohapatra240/zencharge-web/public/images/HeroImage.png"
          alt="EV Charging Station"
          fill
          priority
          className="object-cover"
        />
        {/* Gradient Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#E6E6FA]/90 to-[#F5F5F5]/80" /> */}
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-white leading-tight">
            Powering the Future of Sustainable Mobility
          </h1>
          <p className="text-base md:text-lg text-white font-montserrat leading-relaxed mt-6">
            Seamlessly charge, dine, and relax with ZenCharge&apos;s EV charging
            network. Experience the convenience of FeVL and Evaraa models.
          </p>
          <div className="flex flex-row items-center gap-4 md:gap-6 py-8">
            <a href="/about-us" className="w-fit px-6 md:px-8 py-3 md:py-4 bg-white text-black rounded hover:bg-gray-100 transition">
              Find a Station
            </a>
            <a href="/franchise" className="w-fit px-6 md:px-8 py-3 md:py-4 border-2 border-white text-white rounded hover:bg-white hover:text-black transition">
              Explore Franchise
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
