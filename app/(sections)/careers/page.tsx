import CareerHero from "./components/CareerHero";
import CareerOpportunities from "./components/CareerOpportunities";
import JoinTeamSection from "./components/JoinTeamSection";
import TeamSection from "./components/TeamSection";

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <CareerHero />
      <CareerOpportunities />
      <TeamSection />
      <JoinTeamSection />
    </main>
  );
}
