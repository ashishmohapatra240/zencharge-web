import Container from "@/app/components/ui/Container";

export default function FranchiseHero() {
  return (
    <div className="bg-black text-white py-16">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h1 className="text-[49px] font-bold leading-tight">
              Discover the Benefits of<br />
              Franchising with<br />
              ZenCharge
            </h1>
          </div>
          <div className="space-y-8">
            <p className="text-base">
              Join ZenCharge and be part of a sustainable future. Our FoCo and CoCo models offer
              unparalleled support and training, ensuring your success in the EV charging industry.
              Experience the growth potential with ZenCharge&apos;s innovative solutions
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <h2 className="text-[35px] font-bold">Comprehensive<br />Training</h2>
                <p className="text-base">
                  Receive extensive training to ensure your<br />
                  franchise&apos;s success.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-[35px] font-bold">Ongoing Support</h2>
                <p className="text-base">
                  Benefit from continuous support and resources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
} 