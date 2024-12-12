import Container from "@/app/components/ui/Container";

export default function JoinTeamSection() {
  return (
    <div className="bg-[#F5F5F5] py-12 md:py-16">
      <Container>
        <div className="space-y-4 md:space-y-5">
          <h2 className="text-3xl md:text-[48px] font-bold tracking-tight">
            Join Our Team
          </h2>
          <p className="text-lg md:text-xl leading-relaxed tracking-tight font-light">
            Explore exciting career opportunities with ZenCharge today.
          </p>
          <button className="px-5 md:px-7 py-3 md:py-4 bg-[#2D3E50] text-white rounded shadow hover:bg-opacity-90 transition-colors">
            View Open Positions
          </button>
        </div>
      </Container>
    </div>
  );
} 