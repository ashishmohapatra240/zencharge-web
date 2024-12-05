import FindUsHero from "./components/FindUsHero";
import FindUsMap from "./components/FindUsMap";
import FindUsFAQ from "./components/FindUsFAQ";
import ContactSection from "./components/ContactSection";

export default function FindUsPage() {
  return (
    <main className="min-h-screen">
      <FindUsHero />
      <FindUsMap />
      <div className="grid lg:grid-cols-2 gap-16 px-32 py-24">
        <FindUsFAQ />
        <ContactSection />
      </div>
    </main>
  );
}
