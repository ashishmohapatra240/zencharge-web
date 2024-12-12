import Container from "@/app/components/ui/Container";

export default function FindUsHero() {
  return (
    <Container className="py-16 lg:py-32">
      <div className="max-w-[800px] space-y-6 lg:space-y-8">
        <h1 className="text-3xl md:text-4xl lg:text-[48px] font-bold tracking-tight leading-[1.2]">
          Locate Your Nearest ZenCharge Station
        </h1>
        <p className="text-base md:text-lg leading-relaxed text-gray-700 max-w-[90%]">
          Explore our interactive map to find the nearest FeVL or Evaraa
          stations. Filter by station type, charger availability, or dining
          options to suit your needs. Enter your city or highway to discover
          convenient stops along your route.
        </p>
        <div className="pt-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full max-w-[400px] px-6 py-4 border border-gray-200 rounded-md text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
          />
        </div>
      </div>
    </Container>
  );
}
