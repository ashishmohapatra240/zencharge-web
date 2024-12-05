import Container from "@/app/components/ui/Container";

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
    <section className="py-32">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="relative">
            <img
              src="/images/models/machine.png"
              alt="FeVL Station"
              className="w-full max-w-[600px] mx-auto h-auto object-contain"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-5xl font-bold">
              Food, EV Charging & Clean
              <br />
              Facilities on the Go
            </h2>
            <p className="text-lg text-gray-600">
              A comprehensive roadside stop designed to make long journeys more
              comfortable. FeVL integrates EV charging, traveler-friendly meals,
              and modern washroom facilities at national highway locations.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center relative">
              <div className="relative mb-6">
                <div className="mx-auto w-32 h-32 bg-[#E1D1E1] rounded-full overflow-hidden flex items-center justify-center">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4">
                  <div className="w-6 h-6 bg-[#E1D1E1] rounded-full" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed max-w-xs mx-auto">
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
