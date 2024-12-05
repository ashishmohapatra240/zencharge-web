import ContactSection from "@/components/ContactSection";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import ImpactSection from "@/components/ImpactSection";
import NetworkSection from "@/components/NetworkSection";
import ServicesSection from "@/components/ServicesSection";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <NetworkSection />
      <ImpactSection />
      <ContactSection />
    </main>
  );
}
