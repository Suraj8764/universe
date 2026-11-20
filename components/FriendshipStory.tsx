"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Heart,
  Laugh,
  PartyPopper,
  ShieldCheck,
  Calendar,
  Quote,
  ChevronDown,
} from "lucide-react";
import { friendshipData, TimelineMilestone } from "@/data/friendship";

const iconMap = {
  Sparkles: Sparkles,
  Heart: Heart,
  Laugh: Laugh,
  PartyPopper: PartyPopper,
  ShieldCheck: ShieldCheck,
  Compass: Sparkles,
};

export default function FriendshipStory() {
  const { timelineMilestones } = friendshipData;
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="story" className="py-20 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto relative">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-100/80 border border-pink-200 text-pink-700 text-xs font-semibold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5 text-pink-500" />
          <span>Our Journey Through Time</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-bold text-stone-900 mb-4">
          Our Friendship Story
        </h2>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          Every great friendship is an epic story written one day, one laugh, and one shared secret at a time.
          Here is how our constellation came together.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Central glowing vertical timeline spine */}
        <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-1 -translate-x-1/2 bg-gradient-to-b from-pink-300 via-purple-300 to-rose-300 rounded-full hidden sm:block opacity-70" />
        <div className="absolute left-6 top-4 bottom-4 w-1 -translate-x-1/2 bg-gradient-to-b from-pink-300 via-purple-300 to-rose-300 rounded-full sm:hidden opacity-70" />

        <div className="space-y-12 sm:space-y-16">
          {timelineMilestones.map((milestone: TimelineMilestone, index: number) => {
            const IconComponent = iconMap[milestone.iconName] || Sparkles;
            const isEven = index % 2 === 0;
            const isExpanded = expandedId === milestone.id;

            return (
              <div
                key={milestone.id}
                className={`relative flex flex-col sm:flex-row items-start ${
                  isEven ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Milestone Node on Spine */}
                <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 top-6 z-20 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-pink-400 shadow-md flex items-center justify-center text-pink-500 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-4 h-4 fill-pink-100" />
                  </div>
                </div>

                {/* Content Card (Left or Right on desktop, offset on mobile) */}
                <div
                  className={`w-full sm:w-[calc(50%-40px)] pl-14 sm:pl-0 ${
                    isEven ? "sm:pr-8 sm:text-right" : "sm:pl-8 sm:text-left"
                  }`}
                >
                  <div className="glass-card rounded-2xl p-6 sm:p-7 hover:shadow-xl transition-all duration-300 border border-white/80 relative overflow-hidden group">
                    {/* Top chapter badge & date */}
                    <div
                      className={`flex flex-wrap items-center gap-2 mb-3 ${
                        isEven ? "sm:justify-end" : "sm:justify-start"
                      }`}
                    >
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-700">
                        {milestone.phase}
                      </span>
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-pink-50 text-pink-700 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {milestone.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-serif-display font-bold text-stone-800 mb-2 group-hover:text-pink-600 transition-colors">
                      {milestone.title}
                    </h3>

                    {/* Description */}
                    <p className="text-stone-600 text-sm leading-relaxed mb-4">
                      {milestone.description}
                    </p>

                    {/* Quote callout box */}
                    <div
                      className={`p-3.5 rounded-xl bg-pink-50/70 border-l-4 border-pink-400 text-stone-700 italic text-xs leading-relaxed flex items-start gap-2.5 mb-3 ${
                        isEven ? "sm:border-l-0 sm:border-r-4 sm:flex-row-reverse" : ""
                      }`}
                    >
                      <Quote className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                      <span className="font-handwriting text-base font-normal">
                        &quot;{milestone.highlightQuote}&quot;
                      </span>
                    </div>

                    {/* Interactive "Memory Note" expand toggle */}
                    <button
                      onClick={() => toggleExpand(milestone.id)}
                      className={`text-xs font-medium text-pink-600 hover:text-pink-700 inline-flex items-center gap-1 transition-colors cursor-pointer ${
                        isEven ? "sm:ml-auto" : ""
                      }`}
                    >
                      <span>{isExpanded ? "Hide Note" : "Read Reflection"}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isExpanded && (
                      <div className="mt-3 pt-3 border-t border-pink-100 text-xs text-stone-600 leading-relaxed animate-fadeIn">
                        <p className="font-handwriting text-stone-700 text-sm">
                          💌 Note to Ritu & Smurti: Whenever you look back at this chapter, remember
                          how effortlessly everything fell into place. The best chapters of our
                          friendship are still being written!
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Empty slot on the other side for balance on desktop */}
                <div className="hidden sm:block sm:w-[calc(50%-40px)]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
