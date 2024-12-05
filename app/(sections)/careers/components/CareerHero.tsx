import Container from "@/app/components/ui/Container";

const opportunities = [
  {
    title: "Collaborative Work Environment",
    description: "At ZenCharge, we foster a collaborative and innovative work environment. Our team is passionate about sustainability and making a positive impact",
    image: "/images/careers/collaborative.png",
  },
  {
    title: "Innovative Charging Solutions",
    description: "Be part of a team that is transforming the EV charging landscape with our FeVL and Evaraa models, offering convenience and quality.",
    image: "/images/careers/charging.png",
  },
  {
    title: "Premium Dining Experience",
    description: "Join us in providing a unique dining and charging experience in urban areas, catering to eco-conscious professionals",
    image: "/images/careers/dining.png",
  },
];

export default function CareerHero() {
  return (
    <div className="bg-[#F5F5F5] py-16">
      <Container>
        <div className="space-y-12">
          <div className="grid lg:grid-cols-2 gap-24">
            <h1 className="text-[48px] font-bold leading-tight tracking-tight">
              Join Our Mission for a<br />Greener Future
            </h1>
            <p className="text-xl font-light leading-[34px]">
              ZenCharge offers a unique opportunity to be part of a revolutionary
              movement in sustainable mobility. Our team is dedicated to promoting
              eco-friendly solutions and enhancing the EV charging experience across
              India. Join us to grow your career while contributing to a cleaner,
              greener future.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {opportunities.map((item, index) => (
              <div key={index} className="space-y-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[390px] object-cover rounded"
                />
                <div className="space-y-8">
                  <div className="space-y-7">
                    <h2 className="text-3xl font-bold leading-10">{item.title}</h2>
                    <p className="text-lg font-light leading-7">{item.description}</p>
                  </div>
                  <button className="px-7 py-4 bg-white text-[#2D3E50] shadow rounded">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
} 