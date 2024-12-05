import AboutHero from "./components/AboutHero";
import AboutJourney from "./components/AboutJourney";
import AboutCommitment from "./components/AboutCommitment";
import AboutBlog from "./components/AboutBlog";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <AboutJourney />
      <AboutCommitment />
      <AboutBlog />
    </main>
  );
}
