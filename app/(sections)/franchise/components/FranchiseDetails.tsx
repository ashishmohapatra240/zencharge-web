import Container from "@/app/components/ui/Container";

const focoModel = [
  {
    title: "Evaraa: Premium Dining with Consistent Quality",
    description:
      "Under the FoCo model, Evaraa Cafes are owned by franchisees but operated by the company, ensuring a uniform premium dining experience. Rigorous operational standards, comprehensive training, and expert management maintain Evaraa's reputation for gourmet food, refined ambiance, and exceptional service, catering to urban professionals and eco-conscious diners.",
  },
  {
    title: "FeVL: Reliable Roadside Amenities for Travelers",
    description:
      "In the FoCo model, FeVL Cafes blend franchise ownership with company operations to deliver consistent quality across national highways. This model ensures that every FeVL stop provides seamless EV charging, delicious meals, and hygienic facilities, meeting the high expectations of commuters and long-distance travelers.",
  },
];

const cocoModel = [
  {
    title: "Evaraa: Flagship Cafes Setting the Benchmark",
    description:
      "In the CoCo model, Evaraa Cafes are fully owned and operated by the company, ensuring unmatched control over quality, service, and ambiance. These flagship locations showcase the best of Evaraa, from gourmet dining to innovative customer experiences, serving as hubs for training, testing, and setting standards for the brand.",
  },
  {
    title: "FeVL: Excellence on the Highways",
    description:
      "FeVL Cafes under the CoCo model are company-owned and directly managed to provide the highest level of reliability and quality. These locations serve as ideal roadside stops, offering top-tier EV charging, freshly prepared meals, and spotless facilities, embodying FeVL's commitment to sustainable and traveler-friendly solutions.",
  },
];

export default function FranchiseDetails() {
  return (
    <div className="bg-[#2D3E50] text-white py-24">
      <Container>
        <div className="space-y-40">
          {/* FoCo Model Section */}
          <div className="space-y-16">
            <div className="grid lg:grid-cols-2 gap-12">
              <h2 className="text-[48px] font-bold">
                FoCo Model: Franchise-Owned, Company-Operated Excellence
              </h2>
              <p className="text-xl leading-relaxed tracking-wide">
                The FoCo model allows franchisees to own the cafes while the company manages operations. 
                This ensures consistent quality, efficient service, and a uniform customer experience across 
                all locations, enabling rapid expansion with strong brand control.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-14">
              {focoModel.map((model, index) => (
                <div key={index} className="space-y-10">
                  <h3 className="text-[36px] font-bold leading-tight">
                    {model.title}
                  </h3>
                  <p className="text-lg leading-relaxed">
                    {model.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CoCo Model Section */}
          <div className="space-y-24">
            <div className="grid lg:grid-cols-2 gap-12">
              <h2 className="text-[48px] font-bold">
                CoCo Model: Company-Owned, Company-Operated Precision
              </h2>
              <p className="text-xl leading-relaxed tracking-wide">
                In the CoCo model, the company retains full ownership and control of the cafes, 
                ensuring unmatched quality, innovation, and operational excellence. These locations 
                set the standard for the brand, showcasing its best offerings and serving as hubs 
                for training and innovation.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-14">
              {cocoModel.map((model, index) => (
                <div key={index} className="space-y-5">
                  <h3 className="text-[36px] font-bold leading-tight">
                    {model.title}
                  </h3>
                  <p className="text-lg leading-relaxed">
                    {model.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
} 