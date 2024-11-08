import Card from "./common/ThirdSectionCard";

const FifthSection = () => {
  return (
    <div className="w-full px-6 py-20 bg-gray-100 flex flex-col items-center">
      <div className="w-full max-w-[1495px] flex flex-col gap-16">
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

export default FifthSection;
