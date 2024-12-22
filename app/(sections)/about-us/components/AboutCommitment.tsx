import Container from "@/app/components/ui/Container";
import Image from "next/image";

const commitmentCards = [
  {
    title: "Solar-Powered Charging Stations",
    description:
      "Our charging stations utilizes solar energy, reducing reliance on fossil fuels and promoting renewable energy. This initiative helps decrease carbon emission significantly.",
    image: "https://cdn.jsdelivr.net/gh/ashishmohapatra240/zencharge-web/public/images/about/solar-charging.png",
  },
  {
    title: "Collaborative Eco-Friendly Partnerships",
    description:
      "We partner with like-minded organizations to enhance our sustainability effort. Together, we aim to create a network of eco-consciousness businesses.",
    image: "https://cdn.jsdelivr.net/gh/ashishmohapatra240/zencharge-web/public/images/about/partnerships.png",
  },
  {
    title: "Vision for Sustainable Urban Mobility",
    description:
      "Our goal is to install 1000 chargers by 2025, transforming urban mobility and making EV charging accessible to all.",
    image: "https://cdn.jsdelivr.net/gh/ashishmohapatra240/zencharge-web/public/images/about/urban-mobility.png",
  },
];

export default function AboutCommitment() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-16">
          <h2 className="text-4xl font-bold text-gray-900 lg:w-1/3 tracking-tight">
            ZenCharge&apos;s Commitment to a Green Future
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed lg:w-2/3">
            ZenCharge is dedicated to reducing carbon emissions through
            innovative EV charging solution. Our partnerships with eco-friendly
            suppliers and our goal of installing 1000 chargers by 2025 are just
            a few ways we contribute to a sustainable future. Join us in our
            mission to revolutionize the EV landscape in India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {commitmentCards.map((card, index) => (
            <div key={index} className="flex flex-col space-y-3 md:space-y-4">
              <div className="relative w-full h-[240px] md:h-80 overflow-hidden rounded-lg">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {card.description}
              </p>
              <button className="mt-2 text-[#1E1E1E] inline-block w-fit text-base border-2 rounded hover:shadow-md py-4 px-6">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
