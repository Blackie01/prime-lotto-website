"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Feature 1: Daily Lotto */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Glowing background behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[var(--brand-primary)]/20 blur-[100px] rounded-full" />
            
            <div className="relative glass-card aspect-square max-w-md mx-auto rounded-3xl overflow-hidden flex items-center justify-center border border-white/10">
              {/* Human Image Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 to-zinc-800" />
              <div className="relative z-10 text-[var(--brand-primary)] text-6xl font-black opacity-20">01</div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-[var(--brand-primary)] text-sm font-bold tracking-widest uppercase">Daily Lotto</span>
            </div>
            <h2 className="font-heading font-black text-4xl md:text-5xl text-white mb-6 leading-tight">
              Be a lucky winner<br /> everyday
            </h2>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              Pick 4 numbers per ticket and submit as many as you want. Results for the day are announced at midnight. The more tickets you enter, the higher your chance of winning big!
            </p>
            
            <ul className="space-y-6">
              {[
                "Just ₦100 per ticket",
                "Choose multiple tickets per day",
                "Daily midnight result announcements"
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="w-6 h-6 text-[var(--brand-primary)]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{feature}</h4>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Feature 2: Football Trivia */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-green-500 text-sm font-bold tracking-widest uppercase">Football Trivia</span>
            </div>
            <h2 className="font-heading font-black text-4xl md:text-5xl text-white mb-6 leading-tight">
              Test Your Football <br /> Knowledge
            </h2>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              More of a football fanatic? Flex your brain power with our fast-paced trivia. Go through 6 short-timed multiple choice questions. If you get all 6 right, you stand a chance of winning big at the end of the day.
            </p>
            
            <ul className="space-y-6">
              {[
                "6 short-timed multiple choice questions",
                "Pass all 6 to qualify for the daily draw",
                "Final winner algorithmically chosen daily"
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{feature}</h4>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Glowing background behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-green-500/20 blur-[100px] rounded-full" />
            
            <div className="relative glass-card aspect-square max-w-md mx-auto rounded-3xl overflow-hidden flex items-center justify-center border border-white/10">
              {/* Human Image Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-bl from-zinc-900 to-zinc-800" />
              <div className="relative z-10 text-green-500 text-6xl font-black opacity-20">02</div>
            </div>
          </motion.div>
        </div>

        {/* Feature 3: Wheel of Fortune */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Glowing background behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-purple-500/20 blur-[100px] rounded-full" />
            
            <div className="relative glass-card aspect-square max-w-md mx-auto rounded-3xl overflow-hidden flex items-center justify-center border border-white/10">
              {/* Human Image Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 to-zinc-800" />
              <div className="relative z-10 text-purple-500 text-6xl font-black opacity-20">03</div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-purple-500 text-sm font-bold tracking-widest uppercase">Wheel of Fortune</span>
            </div>
            <h2 className="font-heading font-black text-4xl md:text-5xl text-white mb-6 leading-tight">
              Spin & Win <br /> Instantly
            </h2>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              Take a spin and land on Cash, Airtime, or Try Again. Each spin gives you an opportunity to win from a massive pool of ₦500,000.
            </p>
            
            <ul className="space-y-6">
              {[
                "Just ₦100 per spin",
                "Land on Cash, Airtime, or Try Again",
                "Win from a daily pool of ₦500,000"
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{feature}</h4>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Feature 4: Religious Read & Win */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-orange-500 text-sm font-bold tracking-widest uppercase">Religious Read & Win</span>
            </div>
            <h2 className="font-heading font-black text-4xl md:text-5xl text-white mb-6 leading-tight">
              Engage With <br /> Your Faith
            </h2>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              Choose your specific religion and go through 6 short-timed multiple choice questions. Get all 6 right and you stand a chance of winning big at the end of the day.
            </p>
            
            <ul className="space-y-6">
              {[
                "Choose your preferred religion",
                "6 short-timed multiple choice questions",
                "Algorithmically chosen winners daily"
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{feature}</h4>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Glowing background behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-orange-500/20 blur-[100px] rounded-full" />
            
            <div className="relative glass-card aspect-square max-w-md mx-auto rounded-3xl overflow-hidden flex items-center justify-center border border-white/10">
              {/* Human Image Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-bl from-zinc-900 to-zinc-800" />
              <div className="relative z-10 text-orange-500 text-6xl font-black opacity-20">04</div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
