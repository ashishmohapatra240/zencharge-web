import Container from "@/app/components/ui/Container";

export default function EvaraaSection() {
  return (
    <section className="relative">
      {/* Top Banner */}
      <div className="bg-[#E1D1E1] py-8 text-center">
        <h2 className="text-3xl font-montserrat font-bold mb-2 tracking-tight">
          Evaraa Premium Dining
          <br />& EV Charging in Urban Spaces
        </h2>
        <p className="text-lg font-montserrat tracking-tight">
          Sophisticated Dining Meets Sustainable Mobility
        </p>
      </div>

      {/* Main Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-black/50">
          <Container className="h-full flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-[10vw] font-pearl text-white mb-4 tracking-tight">
              Evaraa
            </h1>
            <p className="text-xl text-white font-light font-montserrat mb-8 tracking-tight">
              Sophisticated Dining Meets Sustainable Mobility
            </p>
            <button className="px-8 py-3 border border-white text-white hover:bg-white/10 transition-colors">
              Book your Table Now
            </button>
          </Container>
        </div>
        <img
          src="/images/evaraa-bg.png"
          alt="Evaraa Dining"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bottom Gallery */}
      <Container className="py-16">
        <div className="flex flex-wrap justify-center gap-8">
          {[1, 2, 3].map((num) => (
            <div key={num} className="relative">
              <div className="w-[240px] h-[300px] rounded-t-full overflow-hidden">
                <img
                  src={`/images/evaraa-gallery-${num}.png`}
                  alt={`Gallery ${num}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-forum">
                    {String(num).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
