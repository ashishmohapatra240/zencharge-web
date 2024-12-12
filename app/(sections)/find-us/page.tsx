import FindUsHero from "./components/FindUsHero";
import FindUsMap from "./components/FindUsMap";
import FindUsFAQ from "./components/FindUsFAQ";
import ContactSection from "./components/ContactSection";

export default function FindUsPage() {
  return (
    <main className="min-h-screen">
      <FindUsHero />
      <FindUsMap />
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 px-4 md:px-8 lg:px-32 py-12 lg:py-24">
        <FindUsFAQ />
        <ContactSection />
      </div>
    </main>
  );
}
