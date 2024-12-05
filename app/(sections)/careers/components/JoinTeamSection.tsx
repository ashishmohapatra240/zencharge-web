import Container from "@/app/components/ui/Container";

export default function JoinTeamSection() {
  return (
    <div className="bg-[#F5F5F5] py-16">
      <Container>
        <div className="space-y-5">
          <h2 className="text-[48px] font-bold tracking-tight">
            Join Our Team
          </h2>
          <p className="text-xl leading-[34px] tracking-wider font-light">
            Explore exciting career opportunities with ZenCharge today.
          </p>
          <button className="px-7 py-4 bg-[#2D3E50] text-white rounded shadow">
            View Open Positions
          </button>
        </div>
      </Container>
    </div>
  );
} 