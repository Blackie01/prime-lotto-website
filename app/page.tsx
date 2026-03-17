import { HeroCounter } from "@/components/home/hero-counter";
import { TrustBar } from "@/components/home/trust-bar";
import { GameGrid } from "@/components/home/game-grid";
import { SplitSection } from "@/components/home/split-section";

export default function Home() {
  return (
    <>
      <HeroCounter />
      {/* <TrustBar /> */}
      <GameGrid />
      
      <SplitSection 
        title="CONTROL YOUR LUCK FROM YOUR PHONE"
        description="Just dial our shortcode to instantly play Daily Lotto, Wheel of Fortune, or access our Expert Portal anytime, anywhere."
        features={[
          "Direct mobile billing - no cards needed",
          "Set-and-forget automated daily draws",
          "Just ₦100 per day subscription"
        ]}
      />

      <SplitSection 
        reversed={true}
        title="TEST YOUR FOOTBALL KNOWLEDGE"
        description="More of a football fanatic? Flex your brain power with our fast-paced SMS Trivia Quiz and win massive rewards."
        features={[
          "Live interactive trivia questions",
          "Premium in-app power-ups available",
          "Dedicated shortcode *33077#"
        ]}
      />
    </>
  );
}
