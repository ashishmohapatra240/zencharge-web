import Container from "@/app/components/ui/Container";

export default function FindUsHero() {
  return (
    <Container className="py-20 lg:py-36 flex flex-col lg:flex-row justify-between">
      <div className="max-w-[600px] space-y-8 lg:space-y-10">
        <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight leading-tight">
          Locate Your Nearest ZenCharge Station
        </h1>
      </div>
      <div className="max-w-[600px] space-y-8 lg:space-y-6 mt-4 lg:mt-0">
        <p className="text-lg md:text-xl leading-relaxed tracking-tight text-gray-700 max-w-[95%]">
          Explore our interactive map to find the nearest FeVL or Evaraa
          stations. Filter by station type, charger availability, or dining
          options to suit your needs. Enter your city or highway to discover
          convenient stops along your route.
        </p>
        <div className="pt-0">
          <input
            type="text"
            placeholder="Search"
            className="w-full max-w-[450px] px-8 py-5 border border-gray-300 rounded-md text-lg md:text-xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all"
          />
        </div>
      </div>
    </Container>
  );
}
