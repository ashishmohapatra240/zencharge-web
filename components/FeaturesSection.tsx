import React from "react";

const FeaturesSection = () => {
  return (
    <div className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E] leading-tight">
            Our Vision for Sustainable Mobility
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            At ZenCharge, we are dedicated to transforming the electric vehicle landscape in India. Our mission is to accelerate the adoption of electric vehicles and promote sustainable mobility by providing convenient and high-quality charging solutions. We believe in sustainability, innovation, and community, striving to build strong relationships with our customers and partners.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
