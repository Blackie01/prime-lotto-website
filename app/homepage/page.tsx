import { V2Hero } from "@/components/home/v2-hero";
import { GameGrid } from "@/components/home/game-grid";
import { SplitSection } from "@/components/home/split-section";

export default function V2Homepage() {
  return (
    <div className="bg-[var(--v2-background)] text-[var(--v2-foreground)] min-h-screen font-sans overflow-x-hidden">
      <V2Hero />
      
      {/* Reusing V1 components but applying the V2 color theme locally */}
      <div 
        className="relative z-10" 
        style={{
          "--background": "var(--v2-background)",
          "--foreground": "var(--v2-foreground)",
          "--brand-primary": "var(--v2-foreground)"
        } as React.CSSProperties}
      >
        <GameGrid />
        
        <SplitSection 
          title="CONTROL YOUR LUCK"
          description="We've taken the classic lottery experience and turbocharged it for the digital age. Instant payouts, daily draws, and massive jackpots."
          features={[
            "Instant payouts to your mobile wallet",
            "Multiple ways to win every day",
            "Secure, transparent, and regulated"
          ]}
        />
        
        <SplitSection 
          title="PLAY ANYWHERE"
          description="Whether you're holding a smartphone or a basic feature phone, Prime Lotto is always one tap or USSD dial away."
          features={[
            "Dial *20205# from any phone",
            "Play via WhatsApp Bot",
            "Seamless Web Experience"
          ]}
          reversed
        />
      </div>
    </div>
  );
}
