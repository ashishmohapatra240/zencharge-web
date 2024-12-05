import EvaraaSection from "./components/EvaraaSection";
import FeVLSection from "./components/FeVLSection";
import ModelHero from "./components/ModelHero";
import ClientTestimonials from "./components/ClientTestimonials";

export default function ModelsPage() {
  return (
    <main className="min-h-screen">
      <ModelHero />
      <FeVLSection />
      <EvaraaSection />
      <ClientTestimonials />
    </main>
  );
}
