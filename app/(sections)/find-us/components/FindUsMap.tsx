import Container from "@/app/components/ui/Container";

export default function FindUsMap() {
  return (
    <div className="bg-[#F5F5F5] py-24">
      <Container>
        <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/images/find-us/maps.png"
            alt="ZenCharge Locations Map"
            className="w-full h-full object-cover"
          />
        </div>
      </Container>
    </div>
  );
} 