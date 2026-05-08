"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Feature 1 */}
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
              <span className="text-[var(--brand-primary)] text-sm font-bold tracking-widest uppercase">We Are PrimeLotto</span>
            </div>
            <h2 className="font-heading font-black text-4xl md:text-5xl text-white mb-6 leading-tight">
              Control Your Luck <br /> From Your Phone
            </h2>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              Just dial our shortcode to instantly play Daily Lotto, Wheel of Fortune, Football Trivia or Religious Read and Win anytime, anywhere. The quality of your experience is vital to us.
            </p>
            
            <ul className="space-y-6">
              {[
                "Direct mobile billing - no cards needed",
                "Set-and-forget automated daily draws",
                "Just ₦100 per day subscription"
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="w-6 h-6 text-[var(--brand-primary)]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{feature.split(' - ')[0]}</h4>
                    {feature.split(' - ')[1] && <p className="text-white/60 text-sm">{feature.split(' - ')[1]}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-[var(--brand-primary)] text-sm font-bold tracking-widest uppercase">Football Trivia</span>
            </div>
            <h2 className="font-heading font-black text-4xl md:text-5xl text-white mb-6 leading-tight">
              Test Your Football <br /> Knowledge
            </h2>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              More of a football fanatic? Flex your brain power with our fast-paced SMS Trivia Quiz and win massive rewards.
            </p>
            
            <ul className="space-y-6">
              {[
                "Live interactive trivia questions",
                "Premium in-app power-ups available",
                "Dedicated shortcode *33077#"
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

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Glowing background behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-500/20 blur-[100px] rounded-full" />
            
            <div className="relative glass-card aspect-square max-w-md mx-auto rounded-3xl overflow-hidden flex items-center justify-center border border-white/10">
              {/* Human Image Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-bl from-zinc-900 to-zinc-800" />
              <div className="relative z-10 text-blue-500 text-6xl font-black opacity-20">02</div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
