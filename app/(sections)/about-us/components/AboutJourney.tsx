import Container from "@/app/components/ui/Container";
import Image from "next/image";

const journeyStats = [
  {
    title: "2023 years",
    description: "Since our inception, we have been dedicated to providing accessible EV charging solutions, making it easier for travelers to recharge their vehicles while enjoying quality services."
  },
  {
    title: "500 stations",
    description: "We have successfully installed over 500 charging stations across India, making electric vehicle charging more accessible than ever."
  },
  {
    title: "10000 kWh",
    description: "Our stations have delivered over 10,000 kWh of energy, significantly contributing to the reduction of carbon footprints in the regions we serve."
  },
  {
    title: "100 partners",
    description: "We are proud to have partnered with over 100 businesses to expand our network and promote sustainable practices in the community."
  }
];

export default function AboutJourney() {
  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="relative w-full h-[300px] md:h-[600px]">
            <Image
              src="https://cdn.jsdelivr.net/gh/ashishmohapatra240/zencharge-web/public/images/about/charging-station.png"
              alt="ZenCharge Charging Station"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="space-y-16">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
                Our Journey to Sustainable Mobility
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                ZenCharge was founded with a vision to transform the electric
                vehicle landscape in India. Our innovative models, FeVL and
                Evaraa, cater to the growing demand for sustainable mobility,
                ensuring convenient charging solutions for all.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-12">
              {journeyStats.map((stat, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {stat.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
