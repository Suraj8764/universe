"use client";

import React, { useState, useEffect } from "react";
import { Heart, Sparkles, Menu, X } from "lucide-react";
import BackgroundMusic from "./BackgroundMusic";

const navLinks = [
  { name: "Our Story", href: "#story" },
  { name: "Memories", href: "#memories" },
  { name: "Open When 💌", href: "#open-when" },
  { name: "Quiz", href: "#quiz" },
  { name: "Moments", href: "#moments" },
  { name: "Surprise ❤️", href: "#surprise", isSpecial: true },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 md:px-8 py-3 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-pink-100/70 py-2.5"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Brand / Names */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, "#hero")}
          className="group flex items-center gap-2 text-stone-800 hover:opacity-90 transition-opacity"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-400 via-rose-300 to-purple-400 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
            <Heart className="w-4 h-4 fill-white animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif-display font-semibold text-base sm:text-lg tracking-wide text-stone-800 flex items-center gap-1">
              Ritu & Smurti
              <Sparkles className="w-3.5 h-3.5 text-amber-400 inline" />
            </span>
            <span className="text-[10px] uppercase tracking-widest text-stone-600 font-sans hidden sm:inline">
              Our Little Universe
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-pink-100 shadow-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-200 ${
                link.isSpecial
                  ? "bg-gradient-to-r from-pink-500 to-rose-400 text-white font-semibold shadow-sm hover:opacity-90 hover:scale-105"
                  : "text-stone-600 hover:text-pink-600 hover:bg-pink-50/80"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Audio Toggle & Mobile Menu Trigger */}
        <div className="flex items-center gap-2">
          <BackgroundMusic />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-white/80 border border-pink-100 text-stone-700 hover:text-pink-600 focus:outline-none shadow-sm"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 bg-white/95 backdrop-blur-xl rounded-2xl p-4 border border-pink-100 shadow-xl max-w-sm mx-auto flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`text-sm px-4 py-2.5 rounded-xl text-center font-medium transition-colors ${
                link.isSpecial
                  ? "bg-gradient-to-r from-pink-500 to-rose-400 text-white font-semibold shadow-sm"
                  : "text-stone-700 hover:bg-pink-50 hover:text-pink-600"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
