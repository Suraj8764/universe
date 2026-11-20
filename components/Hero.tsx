"use client";

import React from "react";
import { Heart, Sparkles, Star, ArrowDown, Compass } from "lucide-react";
import { friendshipData } from "@/data/friendship";

export default function Hero() {
  const { hero } = friendshipData.meta;

  const handleEnterWorld = (e: React.MouseEvent) => {
    e.preventDefault();
    const storySection = document.getElementById("story");
    if (storySection) {
      storySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 md:px-8 overflow-hidden"
    >
      {/* Dreamy Ambient Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[540px] md:w-[700px] h-[340px] sm:h-[540px] md:h-[700px] bg-gradient-to-tr from-pink-200/50 via-purple-200/40 to-amber-100/50 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />

      {/* Floating decorative celestial elements */}
      <div className="absolute top-28 left-[10%] hidden md:flex items-center gap-2 bg-white/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-pink-200/60 shadow-sm animate-float-slow">
        <Sparkles className="w-3.5 h-3.5 text-pink-500" />
        <span className="text-xs font-handwriting text-pink-700 text-base">Infinite Laughs</span>
      </div>

      <div className="absolute top-44 right-[12%] hidden md:flex items-center gap-2 bg-white/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-purple-200/60 shadow-sm animate-float-reverse">
        <Heart className="w-3.5 h-3.5 text-purple-500 fill-purple-400" />
        <span className="text-xs font-handwriting text-purple-700 text-base">Soul Sisters</span>
      </div>

      <div className="absolute bottom-28 left-[15%] hidden md:flex items-center gap-2 bg-white/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-rose-200/60 shadow-sm animate-float-reverse">
        <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-300" />
        <span className="text-xs font-handwriting text-stone-700 text-base">Endless 2 AM Talks</span>
      </div>

      <div className="absolute bottom-32 right-[14%] hidden md:flex items-center gap-2 bg-white/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-pink-200/60 shadow-sm animate-float-slow">
        <span className="text-xs font-handwriting text-pink-700 text-base">Secrets Kept: 100% 💌</span>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Top delicate badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-pink-200/80 shadow-sm mb-6 animate-twinkle">
          <Sparkles className="w-4 h-4 text-pink-500" />
          <span className="text-xs font-semibold tracking-wider uppercase text-pink-600 font-sans">
            A Special Digital Gift Dedicated To
          </span>
          <Sparkles className="w-4 h-4 text-purple-500" />
        </div>

        {/* Main Heading */}
        <h2 className="text-base sm:text-lg md:text-xl font-medium tracking-widest text-stone-600 uppercase mb-3">
          {hero.heading}
        </h2>

        {/* Names */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif-display font-bold tracking-tight mb-6">
          <span className="gradient-text-friendship relative inline-block">
            {hero.names}
            {/* Small decorative heart above ampersand */}
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-pink-400 text-2xl sm:text-3xl animate-bounce">
              💗
            </span>
          </span>
        </h1>

        {/* Handwritten Accent */}
        <p className="font-handwriting text-2xl sm:text-3xl md:text-4xl text-purple-700 mb-5 max-w-2xl font-normal">
          &quot;{hero.subtitle}&quot;
        </p>

        {/* Descriptive prose */}
        <p className="text-stone-600 max-w-xl text-sm sm:text-base leading-relaxed mb-10">
          Step into a constellation created solely to celebrate our milestones, candid snapshots,
          uncontrollable giggles, and an unbreakable bond that only grows deeper with time.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={handleEnterWorld}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 via-rose-400 to-purple-500 text-white font-medium text-base shadow-lg shadow-pink-300/40 hover:shadow-xl hover:shadow-pink-300/60 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <span>{hero.ctaButton}</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500" />
            </span>
          </button>

          <a
            href="#memories"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/80 hover:bg-white text-stone-700 hover:text-pink-600 font-medium text-sm border border-pink-200/70 shadow-sm hover:shadow transition-all duration-200"
          >
            <Compass className="w-4 h-4 text-purple-500" />
            <span>Explore Memories</span>
          </a>
        </div>

        {/* Quick floating indicators for mobile */}
        <div className="flex md:hidden flex-wrap justify-center gap-2 mt-8">
          {hero.floatingBadges.map((badge, idx) => (
            <span
              key={idx}
              className="text-xs bg-white/80 px-3 py-1 rounded-full border border-pink-100 text-stone-700 shadow-xs"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
