"use client";

import { motion } from "framer-motion";
import { ArrowRight, Trophy, Target, HelpCircle, BookOpen } from "lucide-react";
import Link from "next/link";

interface GameCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  brandColor: string;
  image: string;
  delay: number;
}

const GameCard = ({ title, description, icon, brandColor, image, delay }: GameCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      whileHover={{ 
        boxShadow: `0 0 0 1px ${brandColor}, 0 10px 40px -10px ${brandColor}40` 
      }}
      className="relative group w-full h-[60vh] md:h-[75vh] flex flex-col overflow-hidden bg-white border border-[var(--brand-primary)]/20 transition-all duration-500 cursor-pointer"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 opacity-90"
          style={{ backgroundImage: `url('${image}')` }}
        />
      </div>
      
      {/* Solid text container at the bottom (No Gradients Rule) */}
      <div className="relative mt-auto bg-white/95 backdrop-blur-md border-t border-[var(--brand-primary)]/10 p-8 pt-10 transition-transform duration-500 transform translate-y-4 group-hover:translate-y-0">
        <div 
          className="absolute -top-6 left-8 w-12 h-12 flex items-center justify-center bg-white border border-[var(--brand-primary)]/20 z-10 transition-colors duration-300"
          style={{ color: brandColor }}
        >
          {icon}
        </div>
        
        <h3 className="dune-heading text-xl md:text-2xl mb-4 font-normal tracking-[0.15em]">
          {title}
        </h3>
        
        <p className="text-zinc-600 font-light text-sm leading-loose mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
          {description}
        </p>
        
        <Link target="_blank" href="https://app.primelotto.games/auth/signup" 
          className="flex items-center gap-3 font-light text-xs uppercase tracking-[0.2em] transition-colors"
          style={{ color: brandColor }}
        >
          Play Now <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
        </Link>
      </div>
    </motion.div>
  );
};

export function GameGrid() {
  return (
    <section id="games" className="py-32 bg-[var(--background)] relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="dune-heading text-3xl md:text-5xl mb-6">
            Choose Your <br/><span className="font-normal mt-2 block">Game</span>
          </h2>
          <p className="text-lg text-zinc-500 font-light tracking-wide">
            Four incredible ways to win every single day. From instant spins to daily draws and football trivia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
          <GameCard 
            title="Wheel of Fortune" 
            description="Spin the wheel for an instant win. Watch for the bonus balls to multiply your payout instantly."
            brandColor="var(--brand-secondary)" // #FF6B00
            icon={<Target size={24} strokeWidth={1.5} />}
            image="/images/game-wheel.png"
            delay={0}
          />
          <GameCard 
            title="Daily Lotto" 
            description="Pick 4 out of 20 numbers. Our set-and-forget system means you never miss a draw again."
            brandColor="var(--brand-primary)" // #2E3192
            icon={<Trophy size={24} strokeWidth={1.5} />}
            image="/images/game-lotto.png"
            delay={0.1}
          />
          <GameCard 
            title="Football Trivia" 
            description="Test your knowledge of the beautiful game. Answer correctly and win amazing cash prizes."
            brandColor="var(--brand-tertiary)" // #10B981
            icon={<HelpCircle size={24} strokeWidth={1.5} />}
            image="/images/game-football.png"
            delay={0.2}
          />
          <GameCard 
            title="Religious Read and Win" 
            description="It's a game where players choose their religion and answer trivia questions on select topics for a chance to win."
            brandColor="var(--brand-quaternary)" // #8B5CF6
            icon={<BookOpen size={24} strokeWidth={1.5} />}
            image="/images/game-expert.png"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}
