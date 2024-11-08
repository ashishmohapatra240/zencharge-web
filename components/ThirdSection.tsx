import React from "react";
import Card from "./common/ThirdSectionCard";

const ThirdSection = () => {
  return (
    <div className="w-full px-6 py-20 bg-gray-100 flex flex-col items-center">
      <div className="w-full max-w-[1495px] flex flex-col gap-16">
        {/* Header Section */}
        <div className="w-full max-w-[1290px] mx-auto flex flex-col md:flex-row items-start justify-center gap-12 md:gap-[239px] px-4 md:px-0">
          <div className="text-[#1E1E1E] text-3xl md:text-4xl font-bold font-montserrat leading-snug md:leading-none">
            Discover Our Innovative EV Charging Solutions
          </div>
          <div className="text-[#1E1E1E] text-sm md:text-base font-normal font-montserrat leading-relaxed md:leading-[31.92px]">
            ZenCharge is transforming the EV landscape with its cutting-edge
            solutions. Our nationwide charging network ensures seamless travel,
            while our commitment to sustainable mobility reduces carbon
            emissions. Experience the perfect blend of premium dining and EV
            charging with our Evaraa model, designed for urban professionals.
          </div>
        </div>

        {/* Cards Section */}
        <div className="w-full flex flex-col md:flex-row justify-center items-start gap-8 md:gap-12">
          <Card
            title="Nationwide Charging Network"
            description="Our extensive network of charging stations ensures that you can travel across the country with ease, knowing that a charge is always within reach."
            imageSrc="/images/NationwideChargingNetwork.png"
          />
          <Card
            title="Sustainable Mobility"
            description="ZenCharge is committed to reducing carbon emissions by making EV adoption easy and accessible, contributing to a cleaner environment."
            imageSrc="/images/SustainableMobility.png"
          />
          <Card
            title="Premium Dining Experience"
            description="Evaraa combines gourmet dining with EV charging, offering a luxurious experience for eco-conscious diners in urban settings."
            imageSrc="/images/PremiumDiningExperience.png"
          />
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
