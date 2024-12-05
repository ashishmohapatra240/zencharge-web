import Container from "@/app/components/ui/Container";

const stats = [
  {
    title: "5000 charging stations",
    description: "With Over 5000 charging stations across India, we are committed to making EV charging convenient and accessible for all users."
  },
  {
    title: "200 partnerships",
    description: "We have established 50 strategic partnerships with local business to enhance the EV charging experience."
  },
  {
    title: "1000 users served",
    description: "To date, we have successfully served over 200 users, ensuring a seamless charging experience for every electric vehicle owner."
  },
  {
    title: "50 cities",
    description: "Our network spans across 10 major cities, with plans to expand to 50 cities in the next year, making sustainable mobility a reality for more people"
  }
];

export default function AboutHero() {
  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-16">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold text-gray-900">
                Our Vision & Mission
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                At ZenCharge, we envision a future where electric vehicles are the
                norm, contributing to a cleaner planet. Our mission is to ensure that
                sustainable mobility is accessible to everyone through our extensive
                network of EV charging stations.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-12">
              {stats.map((stat, index) => (
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
          <div className="relative h-[600px]">
            <img
              src="/images/about/hero.png"
              alt="EV Charging Station"
              className="object-cover rounded-lg w-full h-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
} 