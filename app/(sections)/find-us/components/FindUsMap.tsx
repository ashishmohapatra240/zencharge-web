import Container from "@/app/components/ui/Container";
import Image from "next/image";

export default function FindUsMap() {
  return (
    <div>
      <Container>
        <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-lg relative">
          <Image
            src="/images/find-us/maps.png"
            alt="ZenCharge Locations Map"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          />
        </div>
      </Container>
    </div>
  );
}
