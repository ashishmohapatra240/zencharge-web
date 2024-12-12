import Image from "next/image";

const ImpactSection = () => {
  return (
    <div className="w-full py-20 bg-[#2D3E50] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col gap-16">
          {/* Header Section */}
          <div className="grid lg:grid-cols-2 gap-12">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Our Environmental Commitment
            </h2>
            <div className="flex flex-col gap-6">
              <p className="text-base md:text-lg leading-relaxed">
                ZenCharge is dedicated to reducing carbon emissions by saving
                500,000 tons of CO2 annually. With over 1,000 charging stations
                nationwide, we ensure that all our chargers are powered by 100%
                renewable energy.
              </p>
              <button className="w-fit px-8 py-3 border-2 border-white text-white rounded hover:bg-white hover:text-[#1E2A3B] transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Impact Stats Image */}
          <div className="w-full bg-white rounded-lg p-8">
            <div className="relative w-full aspect-[16/9]">
              <Image
                src="/images/OurEnvironment.png"
                alt="Environmental Impact Statistics"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactSection;
