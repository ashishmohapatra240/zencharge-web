import Container from "@/app/components/ui/Container";
import Image from "next/image";

const positions = [
  {
    title: "EV Charging Station Manager",
    description:
      "Responsible for overseeing operations at our FeVL stations, ensuring smooth service and customer satisfaction",
    image: "https://cdn.jsdelivr.net/gh/ashishmohapatra240/zencharge-web/public/images/careers/station-manager.png",
  },
  {
    title: "Urban Dining Experience Lead",
    description:
      "Lead the Evaraa dining experience, focusing on premium service and sustainable practices in urban settings.",
    image: "https://cdn.jsdelivr.net/gh/ashishmohapatra240/zencharge-web/public/images/careers/dining-lead.png",
  },
  {
    title: "Sustainability Program Coordinator",
    description:
      "Coordinate initiatives to enhance ZenCharge's sustainability efforts, working closely with our green energy partners.",
    image: "https://cdn.jsdelivr.net/gh/ashishmohapatra240/zencharge-web/public/images/careers/sustainability.png",
  },
  {
    title: "Franchise Development Specialist",
    description:
      "Drive the expansion of ZenCharge's franchise network, identifying new opportunities and supporting partners.",
    image: "https://cdn.jsdelivr.net/gh/ashishmohapatra240/zencharge-web/public/images/careers/franchise.png",
  },
];

export default function CareerOpportunities() {
  return (
    <div className="bg-white py-16 md:py-24">
      <Container>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {positions.map((position, index) => (
            <div key={index} className="flex flex-col gap-4 md:gap-6">
              <div className="relative w-full h-[300px] md:h-[503px]">
                <Image
                  src={position.image}
                  alt={position.title}
                  fill
                  className="object-cover rounded"
                />
              </div>
              <div className="text-center space-y-4 md:space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                  {position.title}
                </h3>
                <p className="text-base md:text-lg font-light leading-relaxed">
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
