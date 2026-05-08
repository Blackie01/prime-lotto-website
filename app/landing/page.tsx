import { HeroSection } from "@/components/homepage/hero-section";
import { GamesGrid } from "@/components/homepage/games-grid";
import { FeaturesSection } from "@/components/homepage/features-section";

export default function LandingPage() {
  return (
    <div className="bg-[#050505] min-h-screen">
      <HeroSection />
      <GamesGrid />
      <FeaturesSection />
    </div>
  );
}