import Image from "next/image";
import Container from "@/app/components/ui/Container";

const stats = [
  {
    title: "5000 charging stations",
    description:
      "With Over 5000 charging stations across India, we are committed to making EV charging convenient and accessible for all users.",
  },
  {
    title: "200 partnerships",
    description:
      "We have established 50 strategic partnerships with local business to enhance the EV charging experience.",
  },
  {
    title: "1000 users served",
    description:
      "To date, we have successfully served over 200 users, ensuring a seamless charging experience for every electric vehicle owner.",
  },
  {
    title: "50 cities",
    description:
      "Our network spans across 10 major cities, with plans to expand to 50 cities in the next year, making sustainable mobility a reality for more people",
  },
];

export default function AboutHero() {
  return (
    <section className="py-8 sm:py-12 md:py-24 bg-gray-50">
      <Container>
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8 md:space-y-16">
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                Our Vision & Mission
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                At ZenCharge, we envision a future where electric vehicles are
                the norm, contributing to a cleaner planet. Our mission is to
                ensure that sustainable mobility is accessible to everyone
                through our extensive network of EV charging stations.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2 sm:space-y-3 md:space-y-4">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                    {stat.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[600px] mt-6 lg:mt-0">
            <Image
              src="/images/about/hero.png"
              alt="EV Charging Station"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
