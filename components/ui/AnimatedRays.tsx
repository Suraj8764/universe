"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AnimatedRays() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 select-none">
      {/* Central Radiance Core */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-b from-pink-300/40 via-purple-300/30 to-transparent blur-3xl"
      />

      {/* Volumetric Ray 1 */}
      <motion.div
        animate={{
          rotate: [-15, 15, -15],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ transformOrigin: "top center" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[900px] bg-[conic-gradient(from_0deg_at_50%_0%,transparent_0deg,rgba(244,114,182,0.18)_25deg,transparent_50deg,rgba(192,132,252,0.15)_80deg,transparent_110deg)] blur-2xl"
      />

      {/* Volumetric Ray 2 (Counter-oscillating) */}
      <motion.div
        animate={{
          rotate: [18, -18, 18],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ transformOrigin: "top center" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[850px] bg-[conic-gradient(from_180deg_at_50%_0%,transparent_0deg,rgba(253,224,71,0.12)_30deg,transparent_60deg,rgba(236,72,153,0.16)_95deg,transparent_130deg)] blur-2xl"
      />

      {/* Soft Ambient Horizon Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FFFDF9]/90" />
    </div>
  );
}
