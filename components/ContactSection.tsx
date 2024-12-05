import React from "react";

const ContactSection = () => {
  return (
    <div className="w-full bg-[#8D6D36] px-6 md:px-[135px] py-[93px] flex flex-col items-start gap-10">
      <div className="w-full max-w-[1728px] flex flex-col gap-16">
        {/* Top Content Section */}
        <div className="flex flex-col lg:flex-row justify-start items-start gap-10 lg:gap-[317px]">
          {/* Title */}
          <h2 className="text-[#F3F4F6] text-[2.7rem] md:text-[43.31px] font-semibold font-montserrat leading-tight">
            Our Environmental <br /> Commitment
          </h2>

          {/* Description and Button */}
          <div className="max-w-full lg:max-w-[605px] flex flex-col gap-6">
            <p className="text-[#F3F4F6] text-base leading-[29.64px] font-montserrat">
              ZenCharge is dedicated to reducing carbon emissions by saving
              500,000 tons of CO2 annually. With over 1,000 charging stations
              nationwide, we ensure that all our chargers are powered by 100%
              renewable energy. Click on each data point to learn more about our
              impact.
            </p>
            <button className="px-6 py-4 text-lg font-normal text-[#F3F4F6] bg-transparent border border-[#F3F4F6] rounded-md shadow-sm hover:bg-[#F3F4F6] hover:text-[#8D6D36] transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Image Section */}
        <img
          src="/images/OurEnvironment.png"
          alt="Environmental Commitment"
          className="w-full h-auto max-h-[812px] object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default ContactSection;
