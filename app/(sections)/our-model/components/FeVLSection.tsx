import Container from "@/app/components/ui/Container";
import Image from "next/image";

const features = [
  {
    icon: "/icons/food.png",
    title: "Food",
    description:
      "A mix of quick, hearty meals, and local/international specialties. Perfect for travelers needing a fast, satisfying meal.",
  },
  {
    icon: "/icons/charging.png",
    title: "EV Charging",
    description:
      "Eco-friendly, energy-efficient charging stations for electric vehicles.",
  },
  {
    icon: "/icons/washroom.png",
    title: "Clean Washroom",
    description:
      "Washroom Facilities, Clean, modern washrooms for a refreshing stop.",
  },
  {
    icon: "/icons/sustainable.png",
    title: "Sustainable Design",
    description:
      "Built with sustainability in mind using eco-friendly materials and energy-efficient appliances.",
  },
];

export default function FeVLSection() {
  return (
    <section className="py-16 lg:py-32">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 lg:mb-32">
          <div className="relative w-full aspect-square max-w-[600px] mx-auto">
            <Image
              src="/images/models/machine.png"
              alt="FeVL Station"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-5xl font-bold font-montserrat tracking-tight leading-[1.2]">
              Food, EV Charging & Clean Facilities on the Go
            </h2>
            <p className="text-base lg:text-lg text-gray-600 tracking-tight leading-relaxed">
              A comprehensive roadside stop designed to make long journeys more
              comfortable. FeVL integrates EV charging, traveler-friendly meals,
              and modern washroom facilities at national highway locations.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center relative">
              <div className="relative mb-6">
                <div className="mx-auto w-24 h-24 lg:w-32 lg:h-32 bg-[#E1D1E1] rounded-full overflow-hidden flex items-center justify-center">
                  <div className="relative w-[100%] h-[100%]">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4">
                  <div className="w-6 h-6 bg-[#E1D1E1] rounded-full" />
                </div>
              </div>
              <h3 className="text-lg lg:text-xl font-semibold mb-3 font-montserrat tracking-tight">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed max-w-xs mx-auto tracking-tight">
                {feature.description}
              </p>
              {(index === 3 || index === 1) && (
                <div className="absolute -bottom-8 right-12">
                  <div className="w-4 h-4 bg-[#E1D1E1] rounded-full" />
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
