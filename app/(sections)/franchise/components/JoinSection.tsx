import Container from "@/app/components/ui/Container";

export default function JoinSection() {
  return (
    <Container className="py-12 md:py-24">
      <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8">
        <h2 className="text-3xl md:text-[48px] font-bold leading-tight">
          Join the ZenCharge Family
        </h2>
        <p className="text-lg md:text-xl leading-relaxed mx-auto max-w-2xl">
          Ready to make a difference in sustainable mobility? Follow our simple
          steps to become a franchise partner and help us revolutionise EV
          charging in India.
        </p>
        <div className="flex flex-row justify-center items-center gap-4 md:gap-6">
          <a href="/careers" className="w-fit px-6 md:px-8 py-3 md:py-4 bg-[#2D3E50] text-white rounded hover:bg-[#1E2A3B] transition">
            Start Your Journey
          </a>
          <a href="/our-models" className="mt-2 text-[#1E1E1E] inline-block w-fit text-base border-2 rounded hover:shadow-md py-4 px-6">
            Learn More
          </a>
        </div>
      </div>
    </Container>
  );
}
