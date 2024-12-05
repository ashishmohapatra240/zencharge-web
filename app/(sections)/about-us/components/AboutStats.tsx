import Container from "@/app/components/ui/Container";
import { aboutStats } from "@/app/lib/constants/about-data";

export default function AboutStats() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aboutStats.map((stat, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-3xl font-bold text-gray-900">{stat.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
