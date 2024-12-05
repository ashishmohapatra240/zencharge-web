import Container from "@/app/components/ui/Container";

const positions = [
  {
    title: "EV Charging Station Manager",
    description:
      "Responsible for overseeing operations at our FeVL stations, ensuring smooth service and customer satisfaction",
    image: "/images/careers/station-manager.png",
  },
  {
    title: "Urban Dining Experience Lead",
    description:
      "Lead the Evaraa dining experience, focusing on premium service and sustainable practices in urban settings.",
    image: "/images/careers/dining-lead.png",
  },
  {
    title: "Sustainability Program Coordinator",
    description:
      "Coordinate initiatives to enhance ZenCharge's sustainability efforts, working closely with our green energy partners.",
    image: "/images/careers/sustainability.png",
  },
  {
    title: "Franchise Development Specialist",
    description:
      "Drive the expansion of ZenCharge's franchise network, identifying new opportunities and supporting partners.",
    image: "/images/careers/franchise.png",
  },
];

export default function CareerOpportunities() {
  return (
    <div className="bg-white py-24">
      <Container>
        <div className="grid lg:grid-cols-4 gap-6">
          {positions.map((position, index) => (
            <div key={index} className="flex flex-col gap-6">
              <img
                src={position.image}
                alt={position.title}
                className="w-full h-[503px] object-cover rounded"
              />
              <div className="text-center space-y-6">
                <h3 className="text-3xl font-bold leading-10">
                  {position.title}
                </h3>
                <p className="text-lg font-light leading-7">
                  {position.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
