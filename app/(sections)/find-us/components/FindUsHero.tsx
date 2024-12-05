import Container from "@/app/components/ui/Container";

export default function FindUsHero() {
  return (
    <Container className="py-24">
      <div className="max-w-[800px] space-y-8">
        <h1 className="text-[48px] font-bold tracking-tight">
          Locate Your Nearest ZenCharge
          <br />
          Station
        </h1>
        <p className="text-lg leading-relaxed">
          Explore our interactive map to find the nearest FeVL or Evaraa stations. Filter by
          station type, charger availability, or dining options to suit your needs. Enter your city
          or highway to discover convenient stops along your route.
        </p>
        <div>
          <input
            type="text"
            placeholder="Search"
            className="w-full max-w-[400px] px-6 py-4 border border-gray-200 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-[#2D3E50]/20"
          />
        </div>
      </div>
    </Container>
  );
} 