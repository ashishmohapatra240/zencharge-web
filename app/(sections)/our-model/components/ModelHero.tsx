import Container from "@/app/components/ui/Container";

export default function ModelHero() {
  return (
    <>
      {/* First Section - Black Background */}
      <section className="relative bg-black text-white py-40 lg:py-24 lg:pt-40">
        <Container className="flex flex-col lg:flex-row gap-8 lg:gap-32">
          {/* Left Column */}
          <div className="lg:max-w-[400px]">
            <h1 className="text-3xl lg:text-[46px] font-bold font-montserrat leading-[1.2] tracking-tight">
              Experience the Future of Highway Travel
            </h1>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8 lg:gap-14 flex-1">
            <p className="text-base lg:text-lg font-montserrat tracking-tight leading-relaxed">
              FeVl stations are designed to provide a seamless experience for
              travellers. Enjoy fast EV charging, clean restrooms, and delicious
              meals, all in one convenient location.
            </p>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
              <div className="flex flex-col gap-4 lg:gap-6">
                <h3 className="text-2xl lg:text-[32px] font-bold font-montserrat tracking-tight">
                  Eco-friendly
                </h3>
                <p className="text-sm lg:text-base tracking-tight leading-relaxed">
                  Our stations are built with sustainable materials, ensuring
                  minimal environmental impact.
                </p>
              </div>

              <div className="flex flex-col gap-4 lg:gap-6">
                <h3 className="text-2xl lg:text-[32px] font-bold font-montserrat tracking-tight">
                  Fast Charging
                </h3>
                <p className="text-sm lg:text-base tracking-tight leading-relaxed">
                  Charge your EV quickly with minimal wait times so you can get
                  back on the road.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Second Section - White Background */}
      <section className="py-16 lg:py-24">
        <Container className="flex flex-col lg:flex-row gap-8 lg:gap-32">
          <div className="lg:max-w-[400px]">
            <h2 className="text-3xl lg:text-[46px] font-bold font-montserrat leading-[1.2] tracking-tight text-black">
              Experience Luxury Dining with EV Charging
            </h2>
          </div>

          <div className="flex flex-col gap-6 lg:gap-14 flex-1">
            <p className="text-base lg:text-xl font-montserrat text-black tracking-tight leading-relaxed">
              Evaraa offers a unique blend of premium dining and
              state-of-the-art EV charging stations. Perfect for urban
              professionals, it provides a convenient and sustainable solution
              for dining and charging.
            </p>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
              <div className="flex flex-col gap-6">
                <h3 className="text-2xl lg:text-[32px] font-bold font-montserrat text-black tracking-tight">
                  Culinary Delight
                </h3>
                <p className="text-base lg:text-lg font-light text-black tracking-tight leading-relaxed">
                  Indulge in a gourmet experience with dishes crafted by top
                  chefs.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <h3 className="text-2xl lg:text-[32px] font-bold font-montserrat text-black tracking-tight">
                  Advanced Charging
                </h3>
                <p className="text-base lg:text-lg font-light text-black tracking-tight leading-relaxed">
                  Charge your EV with our cutting-edge technology while you
                  dine.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
