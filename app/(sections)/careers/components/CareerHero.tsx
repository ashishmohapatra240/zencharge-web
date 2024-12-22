import Container from "@/app/components/ui/Container";
import Image from "next/image";

const opportunities = [
  {
    title: "Collaborative Work Environment",
    description:
      "At ZenCharge, we foster a collaborative and innovative work environment. Our team is passionate about sustainability and making a positive impact",
    image: "https://cdn.jsdelivr.net/gh/ashishmohapatra240/zencharge-web/public/images/careers/collaborative.png",
    link: "/our-models",
  },
  {
    title: "Innovative Charging Solutions",
    description:
      "Be part of a team that is transforming the EV charging landscape with our FeVL and Evaraa models, offering convenience and quality.",
    image: "https://cdn.jsdelivr.net/gh/ashishmohapatra240/zencharge-web/public/images/careers/charging.png",
    link: "/find-us",
  },
  {
    title: "Premium Dining Experience",
    description:
      "Join us in providing a unique dining and charging experience in urban areas, catering to eco-conscious professionals",
    image: "https://cdn.jsdelivr.net/gh/ashishmohapatra240/zencharge-web/public/images/careers/dining.png",
    link: "/our-models",
  },
];

export default function CareerHero() {
  return (
    <div className="py-12 md:py-16 md:pt-40">
      <Container>
        <div className="space-y-8 md:space-y-12">
          <div className="grid md:grid-cols-2 gap-6 md:gap-24">
            <h1 className="text-3xl md:text-[48px] font-bold leading-tight tracking-tight">
              Join Our Mission for a Greener Future
            </h1>
            <p className="text-lg md:text-xl font-light leading-[1.8]">
              ZenCharge offers a unique opportunity to be part of a
              revolutionary movement in sustainable mobility. Our team is
              dedicated to promoting eco-friendly solutions and enhancing the EV
              charging experience across India. Join us to grow your career
              while contributing to a cleaner, greener future.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {opportunities.map((item, index) => (
              <div key={index} className="space-y-4 md:space-y-6">
                <div className="relative w-full h-[250px] md:h-[390px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <div className="space-y-4 md:space-y-8">
                  <div className="space-y-4 md:space-y-7">
                    <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                      {item.title}
                    </h2>
                    <p className="text-base md:text-lg font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <a href={item.link} className="mt-2 text-[#1E1E1E] text-sm md:text-base inline-block w-fit text-base border-2 rounded hover:shadow-md py-4 px-6">
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
