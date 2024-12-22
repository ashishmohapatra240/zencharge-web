import FindUsHero from "./components/FindUsHero";
import FindUsMap from "./components/FindUsMap";
import FindUsFAQ from "./components/FindUsFAQ";
import ContactSection from "./components/ContactSection";

export default function FindUsPage() {
  return (
    <main className="min-h-screen">
      <FindUsHero />
      <FindUsMap />
        <FindUsFAQ />
        <ContactSection />
    </main>
  );
}
