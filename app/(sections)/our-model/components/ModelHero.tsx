import Container from "@/app/components/ui/Container";

export default function ModelHero() {
  return (
    <>
      {/* First Section - Black Background */}
      <section className="relative bg-black text-white py-12 md:py-[90px]">
        <Container className="flex flex-col md:flex-row gap-8 md:gap-[129.6px]">
          {/* Left Column */}
          <div>
            <h1 className="text-3xl md:text-[46.8px] font-bold font-montserrat leading-tight tracking-tight">
              Experience the Future of
              <br />
              Highway Travel
            </h1>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8 md:gap-[54.9px] max-w-full md:max-w-[823.5px]">
            <p className="text-base md:text-[18px] font-montserrat tracking-tight">
              FeVl stations are designed to provide a seamless experience for travellers. Enjoy fast EV
              charging, clean restrooms, and delicious meals, all in one convenient location.
            </p>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex flex-col gap-4 md:gap-[26.1px] w-full md:w-[410.4px]">
                <h3 className="text-2xl md:text-[31.5px] font-bold font-montserrat tracking-tight">
                  Eco-friendly
                </h3>
                <p className="text-sm md:text-[17.1px] tracking-tight">
                  Our stations are built with sustainable materials, ensuring minimal environmental impact.
                </p>
              </div>

              <div className="flex flex-col gap-4 md:gap-[21.6px] w-full md:w-[381.6px]">
                <h3 className="text-2xl md:text-[31.5px] font-bold font-montserrat tracking-tight">
                  Fast Charging
                </h3>
                <p className="text-sm md:text-[18.9px] tracking-tight">
                  Charge your EV quickly with minimal wait times so you can get back on the road.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Second Section - White Background */}
      <section className="py-12 md:py-[90px]">
        <Container className="flex flex-col md:flex-row gap-8 md:gap-[104.4px]">
          <div>
            <h2 className="text-3xl md:text-[46.8px] font-bold font-montserrat leading-tight tracking-tight text-black">
              Experience Luxury Dining
              <br />
              with EV Charging
            </h2>
          </div>

          <div className="flex flex-col gap-6 md:gap-[35.1px] max-w-full md:max-w-[771.3px]">
            <p className="text-base md:text-[20.7px] font-montserrat text-black tracking-tight">
              Evaraa offers a unique blend of premium dining and state-of-the-art
              EV charging stations. Perfect for urban professionals, it provides a
              convenient and sustainable solution for dining and charging.
            </p>

            <div className="flex flex-col md:flex-row gap-8 md:gap-[89.1px]">
              <div className="flex flex-col gap-6 md:gap-[35.1px] w-full md:w-[342.73px]">
                <h3 className="text-2xl md:text-[31.5px] font-bold font-montserrat text-black tracking-tight">
                  Culinary Delight
                </h3>
                <p className="text-base md:text-[18px] font-light text-black tracking-tight">
                  Indulge in a gourmet experience with dishes crafted by top chefs.
                </p>
              </div>

              <div className="flex flex-col gap-6 md:gap-[50.23px] w-full md:w-[340.97px]">
                <h3 className="text-2xl md:text-[31.5px] font-bold font-montserrat text-black tracking-tight">
                  Advanced Charging
                </h3>
                <p className="text-base md:text-[18px] font-light text-black tracking-tight">
                  Charge your EV with our cutting-edge technology while you dine.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
