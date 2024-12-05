import React from "react";

const NetworkSection = () => {
  return (
    <div className="w-full flex flex-col items-center gap-32 px-6 py-20 bg-gray-100">
      {/* Main Content with Image and Text */}
      <div className="w-full max-w-[1436px] flex flex-col lg:flex-row items-center justify-center gap-10">
        {/* Image */}
        <img
          src="/images/ExploreOurInnovative.png"
          alt="Accelerating Clean Transportation"
          className="w-full max-w-[692px] h-auto rounded-lg"
        />

        {/* Text Content */}
        <div className="flex flex-col items-start gap-10">
          <h2 className="text-[#1E1E1E] text-4xl font-bold font-montserrat leading-snug">
            Accelerating the Future of <br /> Clean Transportation in <br />{" "}
            India
          </h2>
          <p className="text-[#1E1E1E] text-base font-normal leading-[32px] font-montserrat">
            ZenCharge is committed to making electric vehicle charging
            effortless and convenient. Our solutions blend sustainability with
            comfort, ensuring a seamless experience for every traveler.
            Convenient locations along major highways. Unique combination of
            dining and charging. Support for sustainable practices.
          </p>
        </div>
      </div>

      {/* Bottom Section with Two Columns */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-10">
        <h2 className="text-[#1E1E1E] text-4xl font-bold font-montserrat leading-snug text-center lg:text-left">
          Explore Our Innovative FeVL & Evaraa Models
        </h2>
        <p className="text-[#1E1E1E] text-base font-normal leading-[32px] font-montserrat text-center lg:text-left">
          ZenCharge is revolutionizing the EV charging experience with two
          unique models. The FeVL Model offers a convenient stop along highways,
          integrating food, EV charging, and clean restrooms. The Evaraa Model
          provides a premium dining experience with urban EV charging, catering
          to professionals and eco-conscious diners.
        </p>
      </div>
    </div>
  );
};

export default NetworkSection;
