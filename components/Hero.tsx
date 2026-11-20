"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, Star, ArrowDown, Compass } from "lucide-react";
import { friendshipData } from "@/data/friendship";
import AnimatedRays from "./ui/AnimatedRays";
import ShimmerButton from "./ui/ShimmerButton";
import TextReveal from "./ui/TextReveal";

export default function Hero() {
  const { hero } = friendshipData.meta;

  const handleEnterWorld = () => {
    const storySection = document.getElementById("story");
    if (storySection) {
      storySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 md:px-8 overflow-hidden"
    >
      {/* Vengeance UI Animated Volumetric Rays */}
      <AnimatedRays />

      {/* Floating decorative celestial elements */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute top-28 left-[10%] hidden md:flex items-center gap-2 bg-white/75 backdrop-blur-md px-4 py-2 rounded-full border border-pink-200/70 shadow-sm animate-float-slow"
      >
        <Sparkles className="w-4 h-4 text-pink-500 animate-spin" />
        <span className="font-handwriting text-pink-700 text-lg">Infinite Laughs</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute top-44 right-[12%] hidden md:flex items-center gap-2 bg-white/75 backdrop-blur-md px-4 py-2 rounded-full border border-purple-200/70 shadow-sm animate-float-reverse"
      >
        <Heart className="w-4 h-4 text-purple-500 fill-purple-400 animate-pulse" />
        <span className="font-handwriting text-purple-700 text-lg">Soul Sisters</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-28 left-[14%] hidden md:flex items-center gap-2 bg-white/75 backdrop-blur-md px-4 py-2 rounded-full border border-rose-200/70 shadow-sm animate-float-reverse"
      >
        <Star className="w-4 h-4 text-amber-500 fill-amber-300" />
        <span className="font-handwriting text-stone-700 text-lg">Endless 2 AM Talks</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-32 right-[14%] hidden md:flex items-center gap-2 bg-white/75 backdrop-blur-md px-4 py-2 rounded-full border border-pink-200/70 shadow-sm animate-float-slow"
      >
        <span className="font-handwriting text-pink-700 text-lg">Secrets Kept: 100% 💌</span>
      </motion.div>

      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Top delicate badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-pink-200/80 shadow-sm mb-6 animate-twinkle"
        >
          <Sparkles className="w-4 h-4 text-pink-500" />
          <span className="text-xs font-semibold tracking-wider uppercase text-pink-600 font-sans">
            A Special Digital Gift Dedicated To
          </span>
          <Sparkles className="w-4 h-4 text-purple-500" />
        </motion.div>

        {/* Main Heading with Vengeance UI Text Reveal */}
        <h2 className="text-base sm:text-lg md:text-xl font-medium tracking-widest text-stone-600 uppercase mb-4">
          <TextReveal text={hero.heading} delay={0.1} />
        </h2>

        {/* Hero Names with Spring Entrance */}
        <motion.h1
          initial={{ opacity: 0, y: 25, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
          className="text-6xl sm:text-7xl md:text-9xl font-serif-display font-bold tracking-tight mb-6"
        >
          <span className="gradient-text-friendship relative inline-block">
            {hero.names}
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-pink-400 text-3xl sm:text-4xl animate-bounce">
              💗
            </span>
          </span>
        </motion.h1>

        {/* Handwritten Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-handwriting text-2xl sm:text-3xl md:text-4xl text-purple-700 mb-6 max-w-2xl font-normal leading-relaxed"
        >
          &quot;{hero.subtitle}&quot;
        </motion.p>

        {/* Descriptive prose */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-stone-600 max-w-xl text-sm sm:text-base leading-relaxed mb-10"
        >
          Step into a constellation created solely to celebrate our milestones, candid snapshots,
          uncontrollable giggles, and an unbreakable bond that only grows deeper with time.
        </motion.p>

        {/* CTA Buttons with Vengeance UI Shimmer Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <ShimmerButton onClick={handleEnterWorld}>
            <span>{hero.ctaButton}</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </ShimmerButton>

          <a
            href="#memories"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/85 hover:bg-white text-stone-700 hover:text-pink-600 font-medium text-sm border border-pink-200/80 shadow-xs hover:shadow-md transition-all duration-200"
          >
            <Compass className="w-4 h-4 text-purple-500" />
            <span>Explore Memories</span>
          </a>
        </motion.div>

        {/* Quick floating indicators for mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex md:hidden flex-wrap justify-center gap-2 mt-8"
        >
          {hero.floatingBadges.map((badge, idx) => (
            <span
              key={idx}
              className="text-xs bg-white/80 px-3 py-1 rounded-full border border-pink-100 text-stone-700 shadow-2xs"
            >
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
