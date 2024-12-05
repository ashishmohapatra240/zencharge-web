import FranchiseDetails from "./components/FranchiseDetails";
import FranchiseHero from "./components/FranchiseHero";
import FranchiseModels from "./components/FranchiseModels";
import JoinSection from "./components/JoinSection";

export default function FranchisePage() {
  return (
    <main className="min-h-screen">
      <FranchiseHero />
      <FranchiseModels />
      <FranchiseDetails />
      <JoinSection />
    </main>
  );
}
