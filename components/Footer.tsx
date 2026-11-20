"use client";

import React from "react";
import { Heart, Sparkles, ArrowUp } from "lucide-react";
import { friendshipData } from "@/data/friendship";

export default function Footer() {
  const { footer, meta } = friendshipData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-b from-transparent via-pink-50/60 to-purple-50/80 pt-16 pb-12 px-4 sm:px-6 md:px-8 border-t border-pink-100">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Animated Heart Crest */}
        <div className="relative mb-6">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-pink-400 to-purple-400 flex items-center justify-center text-white shadow-md">
            <Heart className="w-6 h-6 fill-white animate-pulse" />
          </div>
          <Sparkles className="w-4 h-4 text-amber-400 absolute -top-1 -right-1" />
        </div>

        {/* Names */}
        <h3 className="text-2xl sm:text-3xl font-serif-display font-bold text-stone-800 mb-2">
          {meta.friends.shortCombo}
        </h3>

        {/* Tagline */}
        <p className="font-handwriting text-xl text-purple-700 max-w-md mb-6">
          &quot;{footer.quote}&quot;
        </p>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-stone-600 mb-8">
          <a href="#hero" className="hover:text-pink-600 transition-colors">
            Welcome
          </a>
          <a href="#story" className="hover:text-pink-600 transition-colors">
            Our Story
          </a>
          <a href="#memories" className="hover:text-pink-600 transition-colors">
            Memory Wall
          </a>
          <a href="#open-when" className="hover:text-pink-600 transition-colors">
            Open When 💌
          </a>
          <a href="#quiz" className="hover:text-pink-600 transition-colors">
            Friendship Quiz
          </a>
          <a href="#moments" className="hover:text-pink-600 transition-colors">
            Special Moments
          </a>
          <a href="#surprise" className="hover:text-pink-600 transition-colors">
            Final Surprise ❤️
          </a>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="mb-8 inline-flex items-center gap-1.5 text-xs text-stone-600 hover:text-pink-600 transition-colors bg-white/80 px-4 py-1.5 rounded-full border border-pink-100 shadow-2xs cursor-pointer"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span>Back to Top of Our Universe</span>
        </button>

        {/* Copyright / Dedication */}
        <div className="pt-6 border-t border-pink-200/60 w-full max-w-md text-xs text-stone-600 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>{footer.madeWithLove}</span>
          <span className="flex items-center gap-1">
            Forever & Always in Our Hearts ✨
          </span>
        </div>
      </div>
    </footer>
  );
}
