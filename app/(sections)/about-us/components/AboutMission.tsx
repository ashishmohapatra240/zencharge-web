import Container from "@/app/components/ui/Container";

export default function AboutMission() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900">
              Our Vision & Mission
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At ZenCharge, we envision a future where electric vehicles are the
              norm, contributing to a cleaner planet. Our mission is to ensure that
              sustainable mobility is accessible to everyone through our extensive
              network of EV charging stations.
            </p>
          </div>
          <div className="relative h-[600px]">
            <img
              src="/images/about/mission.jpg"
              alt="EV Charging Station"
              className="object-cover rounded-lg w-full h-full"
            />
          </div>
        </div>
      </Container>
    </section>
  )
} 