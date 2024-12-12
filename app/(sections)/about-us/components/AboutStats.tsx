import Container from "@/app/components/ui/Container";
import { aboutStats } from "@/app/lib/constants/about-data";

export default function AboutStats() {
  return (
    <section className="py-12 sm:py-16 md:py-20">
      <Container>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {aboutStats.map((stat, index) => (
            <div key={index} className="space-y-3 sm:space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">{stat.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
