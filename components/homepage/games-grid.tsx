"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Play, ArrowRight } from "lucide-react";

const games = [
  {
    title: "Daily Lotto",
    description: "Pick 4 numbers per ticket at ₦100 each. Enter multiple tickets per day to increase your chance of winning. Results are announced at midnight.",
    color: "from-blue-500 to-cyan-400",
    image: "/images/daily-lotto-image.png",
    link: "https://app.primelotto.games/daily-lotto"
  },
  {
    title: "Football Trivia",
    description: "Go through 6 short-timed multiple choice questions. Get all 6 right and stand a chance of winning big at the end of the day.",
    color: "from-green-500 to-emerald-400",
    image: "/images/messi.png",
    link: "https://app.primelotto.games/football-trivia"
  },
  {
    title: "Wheel of Fortune",
    description: "Spin for ₦100 to land on Cash, Airtime, or Try Again. Each spin gives you an opportunity to win from a pool of ₦500,000 daily.",
    color: "from-purple-500 to-pink-400",
    image: "/images/wheel-fortune.png",
    link: "https://app.primelotto.games/wheel-of-fortune"
  },
  {
    title: "Religious Read & Win",
    description: "Choose a specific religion and go through 6 short-timed multiple choice questions. Get all 6 right to stand a chance of winning big.",
    color: "from-orange-500 to-yellow-400",
    image: "/images/religious-leaders.png",
    link: "https://app.primelotto.games/religious-read-and-win"
  }
];

export function GamesGrid() {
  return (
    <section id="games" className="py-24 bg-[#050505] relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-4xl md:text-5xl text-white mb-6">
            Available Games <br />
            <span className="text-[var(--brand-primary)]">Play & Win</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Choose from our selection of premium gaming experiences. Whether you prefer luck or skill, there's a game for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group glass-card rounded-2xl overflow-hidden relative"
            >              
              <div className="p-6">
                <Link href={game.link} className="block relative w-full aspect-[4/3] rounded-xl mb-6 overflow-hidden bg-zinc-900">
                  <Image 
                    src={game.image} 
                    alt={game.title} 
                    fill 
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10" />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-[var(--brand-primary)] flex items-center justify-center text-black shadow-[0_0_20px_rgba(43,201,106,0.4)]">
                      <Play fill="currentColor" className="w-5 h-5 ml-1" />
                    </div>
                  </div>
                </Link>

                <h3 className="font-heading font-bold text-xl text-white mb-2">{game.title}</h3>
                <p className="text-white/60 text-sm mb-6 line-clamp-4">{game.description}</p>

                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                  <div className="text-xs text-white/40 uppercase tracking-wider font-medium">
                    Starting at <span className="text-[var(--brand-primary)]">₦100</span>
                  </div>
                  <Link href={game.link} className="text-white/80 hover:text-[var(--brand-primary)] transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
