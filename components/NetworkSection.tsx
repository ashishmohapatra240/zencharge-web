import React from "react";
import Image from "next/image";

const NetworkSection = () => {
  return (
    <div className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col gap-20">
          {/* First Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/images/ExploreOurInnovative.png"
                alt="Charging Network"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E] leading-tight">
                Accelerating the Future of Clean Transportation in India
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                ZenCharge is committed to making electric vehicle charging
                effortless and convenient. Our solutions blend sustainability
                with comfort, ensuring a seamless experience for every traveler.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Convenient locations along major highways</li>
                <li>• Unique combination of dining and charging</li>
                <li>• Support for sustainable practices</li>
              </ul>
            </div>
          </div>

          {/* Second Section */}
          <div className="flex flex-col gap-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E] leading-tight">
              Explore Our Innovative FeVL & Evaraa Models
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "FeVL Charging Stations",
                  description:
                    "Fast, efficient stops at strategic points along highways, offering quick charging and essential amenities.",
                  image: "/images/FeVLChargingStations.png",
                  link: "/our-models",
                },
                {
                  title: "Evaraa Premium Dining",
                  description:
                    "Luxury dining spaces integrated with charging facilities, perfect for urban professionals.",
                  image: "/images/EvaraaPremiumDining.png",
                  link: "/our-models",
                },
                {
                  title: "FeVL Roadside Cafe",
                  description:
                    "Experience the convenience of clean restrooms, quality food, and efficient charging in one location.",
                  image: "/images/FeVLRoadsideCafe.png",
                  link: "/our-models",
                },
              ].map((item, index) => (
                <div key={index} className="flex flex-col gap-6">
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#1E1E1E]">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                  <a href={item.link} className="mt-2 text-[#1E1E1E] inline-block w-fit text-base border-2 rounded hover:shadow-md py-4 px-6">
                    Learn More
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkSection;
