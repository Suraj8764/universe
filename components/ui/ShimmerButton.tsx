"use client";

import React from "react";
import { motion } from "framer-motion";

interface ShimmerButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function ShimmerButton({
  children,
  onClick,
  className = "",
  variant = "primary",
}: ShimmerButtonProps) {
  if (variant === "secondary") {
    return (
      <motion.button
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.96 }}
        onClick={onClick}
        className={`relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/85 hover:bg-white text-stone-700 font-medium text-sm border border-pink-200/80 shadow-xs hover:shadow-md transition-all cursor-pointer ${className}`}
      >
        {children}
      </motion.button>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center p-[2px] rounded-full overflow-hidden group shadow-lg shadow-pink-300/40 hover:shadow-xl hover:shadow-pink-300/60 transition-shadow cursor-pointer ${className}`}
    >
      {/* Animated Rotating Conic Gradient Border */}
      <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#EC4899_0%,#A855F7_50%,#FDE047_75%,#EC4899_100%)] opacity-80 group-hover:opacity-100 transition-opacity" />

      {/* Button Interior */}
      <span className="relative z-10 inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-pink-500 via-rose-400 to-purple-500 text-white font-medium text-base">
        {children}
      </span>
    </motion.button>
  );
}
