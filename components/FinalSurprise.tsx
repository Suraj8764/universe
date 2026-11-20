"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, X, Gift, RotateCcw } from "lucide-react";
import { friendshipData } from "@/data/friendship";
import ShimmerButton from "./ui/ShimmerButton";

export default function FinalSurprise() {
  const [isOpen, setIsOpen] = useState(false);
  const { finalSurprise } = friendshipData;

  const triggerCelebration = () => {
    const end = Date.now() + 2.8 * 1000;
    const colors = ["#F472B6", "#EC4899", "#A855F7", "#C084FC", "#FDE047", "#FFFFFF"];

    const frame = () => {
      confetti({
        particleCount: 6,
        angle: 60,
        spread: 60,
        origin: { x: 0, y: 0.7 },
        colors: colors,
      });
      confetti({
        particleCount: 6,
        angle: 120,
        spread: 60,
        origin: { x: 1, y: 0.7 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();

    setTimeout(() => {
      confetti({
        particleCount: 90,
        spread: 110,
        origin: { y: 0.5 },
        colors: ["#F43F5E", "#FB7185", "#F472B6", "#A855F7", "#FBBF24"],
      });
    }, 550);
  };

  const handleOpenSurprise = () => {
    setIsOpen(true);
    triggerCelebration();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <section id="surprise" className="py-28 px-4 sm:px-6 md:px-8 max-w-4xl mx-auto relative text-center">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-200/35 via-purple-200/35 to-rose-200/35 rounded-3xl blur-3xl -z-10" />

      {/* Decorative Top Pill */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100/90 border border-rose-200 text-rose-700 text-xs font-semibold uppercase tracking-wider mb-6 animate-pulse"
      >
        <Gift className="w-3.5 h-3.5 text-rose-500" />
        <span>A Sacred Moment for You Two</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-5xl font-serif-display font-bold text-stone-900 mb-4"
      >
        Ready for Something Special?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-stone-600 text-sm sm:text-base max-w-lg mx-auto mb-10 leading-relaxed"
      >
        Before you close this chapter of our universe today, there is one last gift waiting for Ritu and Smurti.
      </motion.p>

      {/* Big Surprise CTA with Vengeance UI Shimmer Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="inline-block"
      >
        <ShimmerButton onClick={handleOpenSurprise}>
          <Heart className="w-6 h-6 fill-white animate-bounce" />
          <span className="font-serif-display font-bold text-lg sm:text-xl">
            {finalSurprise.buttonLabel}
          </span>
          <Sparkles className="w-6 h-6 text-amber-300 animate-spin" />
        </ShimmerButton>
      </motion.div>

      <p className="text-xs text-stone-600 mt-5 font-sans">
        {finalSurprise.buttonSubtitle}
      </p>

      {/* Fullscreen Surprise Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/80 backdrop-blur-xl overflow-y-auto"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 40 }}
              transition={{ type: "spring", stiffness: 240, damping: 25 }}
              className="relative max-w-2xl w-full bg-gradient-to-b from-[#FFFDF9] via-[#FFF5F8] to-[#FAF5FF] rounded-3xl p-6 sm:p-12 shadow-2xl border-2 border-pink-200 text-center my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-pink-100 hover:bg-pink-200 text-stone-700 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close surprise"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Glowing Heart Crest */}
              <motion.div
                animate={{ scale: [1, 1.12, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 rounded-full bg-gradient-to-tr from-pink-500 via-rose-400 to-purple-500 flex items-center justify-center text-white shadow-xl"
              >
                <Heart className="w-8 h-8 sm:w-10 sm:h-10 fill-white" />
              </motion.div>

              <span className="text-xs font-bold tracking-widest uppercase text-pink-600 font-sans block mb-2">
                To Our Beloved Best Friends
              </span>

              <h3 className="text-3xl sm:text-4xl font-serif-display font-bold text-stone-900 mb-8">
                Ritu & Smurti
              </h3>

              {/* The Exact Required Message Lines */}
              <div className="space-y-6 text-stone-700 font-serif leading-relaxed text-base sm:text-lg max-w-xl mx-auto">
                <p className="text-stone-800 font-medium">
                  {finalSurprise.exactMessageLines[0]}
                </p>

                <p className="text-stone-700">
                  {finalSurprise.exactMessageLines[1]}
                </p>

                <div className="py-2">
                  <p className="font-handwriting text-3xl sm:text-4xl text-purple-700 font-bold">
                    {finalSurprise.exactMessageLines[2]}
                  </p>
                </div>

                <p className="text-stone-800 font-semibold tracking-wide text-lg sm:text-xl">
                  {finalSurprise.exactMessageLines[3]}
                </p>

                <div className="pt-2">
                  <p className="font-serif-display text-2xl sm:text-3xl text-pink-600 font-bold">
                    {finalSurprise.exactMessageLines[4]}
                  </p>
                </div>
              </div>

              {/* Closing Actions */}
              <div className="mt-10 pt-6 border-t border-pink-200/80 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={triggerCelebration}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-medium text-xs sm:text-sm shadow-md transition-all cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Celebrate Again 🎉</span>
                </button>

                <button
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-2.5 rounded-full bg-white hover:bg-stone-100 text-stone-700 border border-stone-200 font-medium text-xs sm:text-sm shadow-2xs transition-colors cursor-pointer"
                >
                  Close Surprise
                </button>
              </div>

              <p className="text-[11px] text-stone-600 font-handwriting text-base mt-4">
                {finalSurprise.closingDedication}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
