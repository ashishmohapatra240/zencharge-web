import Container from "@/app/components/ui/Container";

export default function FranchiseModels() {
  return (
    <>
      <Container className="py-24">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-[48px] font-bold mb-8 tracking-tight">
              Explore Our Franchise
              <br />
              Models
            </h2>
          </div>
          <div className="space-y-8">
            <p className="text-xl tracking-tight">
              ZenCharge offers two innovative franchise models designed to
              enhance the EV charging experience. The FeVL model integrates food
              and charging stations along highways, while Evaraa provides a
              premium dining experience in urban areas.
            </p>
            <div className="grid lg:grid-cols-2 gap-16">
              <div className="space-y-4">
                <h3 className="text-[34px] font-bold tracking-tight">
                  FeVL Model
                </h3>
                <p className="text-base tracking-tight">
                  Combines food, EV charging, and
                  <br />
                  restrooms for travelers. Ideal for highway
                  <br />
                  locations.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-[34px] font-bold tracking-tight">
                  Evaraa Model
                </h3>
                <p className="text-base tracking-tight">
                  Premium dining EV charging for
                  <br />
                  urban professionals. Perfect for city centers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Charging Station Image Section */}
      <div className="relative py-24">
        <Container>
          <div className="max-w-[600px] mx-auto relative">
            <img
              src="/images/models/machine.png"
              alt="EV Charging Station"
              className="w-full h-auto"
            />
          </div>
        </Container>
      </div>
    </>
  );
}
