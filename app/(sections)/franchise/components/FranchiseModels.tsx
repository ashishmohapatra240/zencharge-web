import Image from "next/image";
import Container from "@/app/components/ui/Container";

export default function FranchiseModels() {
  return (
    <>
      <Container className="py-12 md:py-24">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12">
          <div>
            <h2 className="text-3xl md:text-[48px] font-bold tracking-tight leading-tight">
              Explore Our Franchise Models
            </h2>
          </div>
          <div className="space-y-6 md:space-y-8">
            <p className="text-lg md:text-xl tracking-tight leading-relaxed">
              ZenCharge offers two innovative franchise models designed to
              enhance the EV charging experience. The FeVL model integrates food
              and charging stations along highways, while Evaraa provides a
              premium dining experience in urban areas.
            </p>
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-2xl md:text-[34px] font-bold tracking-tight leading-tight">
                  FeVL Model
                </h3>
                <p className="text-base tracking-tight leading-relaxed">
                  Combines food, EV charging, and restrooms for travelers. Ideal for highway locations.
                </p>
              </div>
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-2xl md:text-[34px] font-bold tracking-tight leading-tight">
                  Evaraa Model
                </h3>
                <p className="text-base tracking-tight leading-relaxed">
                  Premium dining EV charging for urban professionals. Perfect for city centers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="relative py-12 md:py-24 bg-gradient-to-b from-white to-[#E6E6FA]/30">
        <Container>
          <div className="max-w-[600px] mx-auto relative h-[300px] md:h-[600px]">
            <Image
              src="/images/models/machine.png"
              alt="EV Charging Station"
              fill
              priority
              className="object-contain"
            />
          </div>
        </Container>
      </div>
    </>
  );
}
