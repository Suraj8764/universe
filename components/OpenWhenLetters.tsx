"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Heart, X, Feather } from "lucide-react";
import { friendshipData, OpenWhenLetter } from "@/data/friendship";
import TiltCard from "./ui/TiltCard";

export default function OpenWhenLetters() {
  const { openWhenLetters } = friendshipData;
  const [activeLetter, setActiveLetter] = useState<OpenWhenLetter | null>(null);

  const handleOpenLetter = (letter: OpenWhenLetter) => {
    setActiveLetter(letter);
  };

  return (
    <section id="open-when" className="py-24 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto relative">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100/80 border border-rose-200 text-rose-700 text-xs font-semibold uppercase tracking-wider mb-3">
          <Mail className="w-3.5 h-3.5 text-rose-500" />
          <span>Handwritten With Unconditional Love</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-bold text-stone-900 mb-4">
          Open When... 💌
        </h2>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          No matter where life takes us or what mood you find yourself in, these letters are here for you.
          Pick an envelope when your heart needs it most.
        </p>
      </motion.div>

      {/* Envelopes Grid with 3D Tilt Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {openWhenLetters.map((letter: OpenWhenLetter, index: number) => {
          return (
            <motion.div
              key={letter.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <TiltCard tiltAngle={10}>
                <div
                  onClick={() => handleOpenLetter(letter)}
                  className="group relative cursor-pointer"
                >
                  {/* Envelope Container */}
                  <div
                    className={`relative w-full rounded-3xl p-7 bg-gradient-to-br ${letter.envelopeColor} border-2 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[230px] overflow-hidden`}
                  >
                    {/* Envelope Top Triangle Flap Aesthetic */}
                    <div className="absolute top-0 left-0 right-0 h-16 bg-white/40 border-b border-pink-200/50 clip-envelope-flap transition-transform group-hover:scale-y-105" />

                    {/* Wax Seal Badge */}
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 12 }}
                      className="absolute top-9 left-1/2 -translate-x-1/2 z-10"
                    >
                      <div
                        className={`w-12 h-12 rounded-full ${letter.waxColor} flex items-center justify-center shadow-md border-2 border-white/70`}
                      >
                        <Heart className="w-5 h-5 fill-white text-white animate-pulse" />
                      </div>
                    </motion.div>

                    {/* Envelope Front Header */}
                    <div className="pt-16 text-center z-10 flex flex-col items-center">
                      <span className="text-[11px] font-bold tracking-widest text-stone-600 uppercase mb-1">
                        Letter #{letter.categoryNumber}
                      </span>
                      <h3 className="text-lg sm:text-xl font-serif-display font-bold text-stone-900 group-hover:text-pink-600 transition-colors">
                        {letter.title}
                      </h3>
                    </div>

                    {/* Preview Prompt & Open Hint */}
                    <div className="mt-4 pt-3 border-t border-pink-200/40 text-center z-10">
                      <p className="text-xs text-stone-600 line-clamp-1 italic font-sans mb-3">
                        &quot;{letter.previewPrompt}&quot;
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-pink-600 group-hover:text-pink-700 bg-white/70 px-3.5 py-1.5 rounded-full shadow-2xs">
                        <Feather className="w-3.5 h-3.5" />
                        <span>Click to Open Letter</span>
                      </span>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          );
        })}
      </div>

      {/* Handwritten Letter Modal with Spring Easing */}
      <AnimatePresence>
        {activeLetter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/65 backdrop-blur-md"
            onClick={() => setActiveLetter(null)}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.88, opacity: 0, y: 30 }}
              transition={{ type: "spring", stiffness: 280, damping: 25 }}
              className="relative max-w-xl w-full bg-[#FCF8F2] rounded-3xl p-6 sm:p-9 shadow-2xl border-4 border-[#F3E8D9] overflow-y-auto max-h-[90vh]"
              style={{
                backgroundImage:
                  "radial-gradient(#E8D7C3 0.75px, transparent 0.75px), radial-gradient(#E8D7C3 0.75px, #FCF8F2 0.75px)",
                backgroundSize: "30px 30px",
                backgroundPosition: "0 0, 15px 15px",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Close Button */}
              <button
                onClick={() => setActiveLetter(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-stone-200/80 hover:bg-stone-300 text-stone-700 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close letter"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Vintage Wax Seal Header */}
              <div className="flex items-center justify-between border-b border-[#EADAC7] pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-10 h-10 rounded-full ${activeLetter.waxColor} flex items-center justify-center text-white shadow-sm`}
                  >
                    <Heart className="w-5 h-5 fill-white" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-stone-600 font-sans block">
                      Special Friendship Letter
                    </span>
                    <span className="text-xs font-semibold text-stone-700">
                      Category {activeLetter.categoryNumber}
                    </span>
                  </div>
                </div>
                <span className="text-xs text-stone-600 font-handwriting text-base">
                  For Ritu & Smurti ✨
                </span>
              </div>

              {/* Letter Title */}
              <h3 className="text-2xl sm:text-3xl font-serif-display font-bold text-stone-900 mb-6">
                {activeLetter.title}
              </h3>

              {/* Greeting */}
              <p className="font-handwriting text-2xl text-purple-800 mb-4 font-semibold">
                {activeLetter.letterGreeting}
              </p>

              {/* Body Paragraphs */}
              <div className="space-y-4 text-stone-700 font-serif leading-relaxed text-sm sm:text-base">
                {activeLetter.letterBody.map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Signature */}
              <div className="mt-8 pt-6 border-t border-[#EADAC7] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <p className="font-handwriting text-2xl text-pink-700 font-bold">
                    {activeLetter.signature}
                  </p>
                  <span className="text-[11px] text-stone-600 font-sans">
                    Written for our timeless friendship universe
                  </span>
                </div>

                <button
                  onClick={() => setActiveLetter(null)}
                  className="px-5 py-2.5 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-medium text-xs shadow-md transition-colors cursor-pointer"
                >
                  Close Letter
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
