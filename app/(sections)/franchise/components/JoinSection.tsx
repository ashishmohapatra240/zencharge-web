import Container from "@/app/components/ui/Container";

export default function JoinSection() {
  return (
    <Container className="py-24">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-[48px] font-bold">Join the ZenCharge Family</h2>
        <p className="text-xl leading-relaxed">
          Ready to make a difference in sustainable mobility? Follow our simple
          steps to become a franchise partner and help us revolutionise EV
          charging in India.
        </p>
        <div className="flex justify-center gap-6">
          <button className="px-8 py-4 bg-[#2D3E50] text-white rounded">
            Start Your Journey
          </button>
          <button className="px-8 py-4 bg-white text-[#2D3E50] shadow rounded">
            Learn More
          </button>
        </div>
      </div>
    </Container>
  );
}
