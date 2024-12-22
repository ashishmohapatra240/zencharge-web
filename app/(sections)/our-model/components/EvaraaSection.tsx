import Container from "@/app/components/ui/Container";
import Image from "next/image";

export default function EvaraaSection() {
  return (
    <section className="relative">
      {/* Top Banner */}
      <div className="bg-[#E1D1E1] py-8 lg:py-12 text-center">
        <Container>
          <h2 className="text-2xl lg:text-3xl font-montserrat font-bold mb-2 tracking-tight">
            Evaraa Premium Dining & EV Charging in Urban Spaces
          </h2>
          <p className="text-base lg:text-lg font-montserrat tracking-tight">
            Sophisticated Dining Meets Sustainable Mobility
          </p>
        </Container>
      </div>

      {/* Main Hero Section */}
      <div className="relative h-[60vh] lg:h-screen">
        <div className="absolute inset-0 bg-black/50 z-10">
          <Container className="h-full flex flex-col items-center justify-center text-center">
            <h1 className="text-[64px] lg:text-[84px] font-tanpearl text-white mb-4 tracking-tight leading-none">
              Evaraa
            </h1>
            <p className="text-lg lg:text-xl text-white font-light font-montserrat mb-8 tracking-tight">
              Sophisticated Dining Meets Sustainable Mobility
            </p>
            <button className="px-8 py-3 border border-white text-white hover:bg-white/10 transition-colors tracking-tight">
              Book your Table Now
            </button>
          </Container>
        </div>
        <Image
          src="https://cdn.jsdelivr.net/gh/ashishmohapatra240/zencharge-web/public/images/evaraa-bg.png"
          alt="Evaraa Dining"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Bottom Gallery
      <Container className="py-16 lg:py-24">
        <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
          {[1, 2, 3].map((num) => (
            <div key={num} className="relative">
              <div className="w-[200px] lg:w-[240px] h-[250px] lg:h-[300px] rounded-t-full overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src={`https://cdn.jsdelivr.net/gh/ashishmohapatra240/zencharge-web/public/images/evaraa-gallery-${num}.png`}
                    alt={`Gallery ${num}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white text-xl lg:text-2xl font-forum">
                    {String(num).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container> */}
    </section>
  );
}
