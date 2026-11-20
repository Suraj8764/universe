"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Laugh,
  MessagesSquare,
  Swords,
  KeyRound,
  Sparkles,
  Heart,
} from "lucide-react";
import { friendshipData, SpecialMomentCard } from "@/data/friendship";
import TiltCard from "./ui/TiltCard";

const iconMap = {
  Laugh: Laugh,
  MessagesSquare: MessagesSquare,
  Swords: Swords,
  KeyRound: KeyRound,
  Sparkles: Sparkles,
};

export default function SpecialMoments() {
  const { specialMoments } = friendshipData;

  return (
    <section id="moments" className="py-24 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto relative">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-100/80 border border-pink-200 text-pink-700 text-xs font-semibold uppercase tracking-wider mb-3">
          <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
          <span>The Pillars of Our Bond</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-bold text-stone-900 mb-4">
          Our Special Moments
        </h2>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          Friendship isn&apos;t just about the grand adventures; it&apos;s made of the quiet, hilarious, and
          precious everyday moments that bind Ritu and Smurti together.
        </p>
      </motion.div>

      {/* Cards Grid with TiltCard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {specialMoments.map((moment: SpecialMomentCard, index: number) => {
          const IconComponent = iconMap[moment.iconName] || Sparkles;
          const isLarge = index === 4;

          return (
            <motion.div
              key={moment.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={isLarge ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <TiltCard tiltAngle={8} className="h-full">
                <div className="glass-card rounded-3xl p-8 hover:shadow-xl transition-all duration-300 border border-white/85 relative flex flex-col justify-between h-full">
                  <div>
                    {/* Icon & Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${moment.accentGradient} text-white flex items-center justify-center shadow-md`}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-stone-100 text-stone-600">
                        {moment.statsText}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-serif-display font-bold text-stone-900 mb-1">
                      {moment.title}
                    </h3>
                    <p className="text-xs font-handwriting text-purple-700 text-lg mb-3">
                      &quot;{moment.subtitle}&quot;
                    </p>

                    {/* Description */}
                    <p className="text-stone-600 text-sm leading-relaxed mb-6">
                      {moment.description}
                    </p>
                  </div>

                  {/* Bottom decorative bar */}
                  <div className="pt-4 border-t border-pink-100/70 flex items-center justify-between text-xs text-stone-600">
                    <span className="flex items-center gap-1 text-pink-600 font-medium">
                      <Heart className="w-3.5 h-3.5 fill-pink-500" />
                      Ritu & Smurti
                    </span>
                    <span className="font-handwriting text-stone-600 text-base">Always & Forever</span>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
