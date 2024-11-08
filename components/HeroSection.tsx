import React from "react";
import CustomButton from "./common/CustomButton";

const HeroSection = () => {
  return (
    <div
      className="w-full max-w-[1734px] h-auto md:h-[755px] px-4 md:px-[137px] py-20 md:py-[218px] bg-gradient-to-t from-black/70 to-black/70 
        rounded-[3.65px] flex flex-col items-start gap-4 md:gap-[4.5px]
        bg-[url('/images/HeroImage.png')] bg-cover bg-center"
    >
      <div className="flex flex-col items-start gap-6 md:gap-7 max-w-full md:max-w-[744px]">
        <h1 className="text-[#F3F4F6] text-3xl md:text-4xl font-bold font-poppins leading-snug md:leading-tight">
          Powering the Future of <br /> Sustainable Mobility
        </h1>
        <p className="text-[#F3F4F6] text-sm md:text-base font-montserrat font-normal leading-relaxed md:leading-[32px]">
          Seamlessly charge, dine, and relax with ZenCharge’s EV charging
          network. Experience the convenience of FeVL and Evaraa models,
          designed for eco-conscious travelers and urban professionals.
        </p>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
          <CustomButton text="Find a Station" />
          <CustomButton
            text="Explore Franchise"
            isOutlined
            textColor="#F3F4F6"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
