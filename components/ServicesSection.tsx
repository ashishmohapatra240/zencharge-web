import React from "react";
import Image from "next/image";

const ServicesSection = () => {
  return (
    <div className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col gap-16">
          {/* Header */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-24">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E] leading-tight">
              Discover Our Innovative EV Charging Solutions
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              ZenCharge is transforming the EV landscape with its cutting-edge
              solutions. Our nationwide charging network ensures seamless
              travel, while our commitment to sustainable mobility drives
              innovation.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Nationwide Charging Network",
                description:
                  "Our extensive network of charging stations ensures you can travel across the country with ease.",
                image: "/images/NationwideChargingNetwork.png",
                link: "/find-us",
              },
              {
                title: "Sustainable Mobility",
                description:
                  "Committed to reducing carbon emissions by making EV adoption accessible.",
                image: "/images/SustainableMobility.png",
                link: "/franchise",
              },
              {
                title: "Premium Dining Experience",
                description:
                  "Unique dining and charging experience for eco-conscious urban professionals.",
                image: "/images/PremiumDiningExperience.png",
                link: "/our-modes",
              },
            ].map((card, index) => (
              <div key={index} className="flex flex-col gap-4">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#1E1E1E]">
                  {card.title}
                </h3>
                <p className="text-gray-600">{card.description}</p>
                <a href={card.link} className="mt-2 text-[#1E1E1E] inline-block w-fit text-base border-2 rounded hover:shadow-md py-4 px-6">
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
