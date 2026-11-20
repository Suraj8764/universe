"use client";

import React, { useState } from "react";
import { Sparkles, MapPin, Calendar, X, ZoomIn, Heart, Camera } from "lucide-react";
import { friendshipData, MemoryPhoto } from "@/data/friendship";

// Artistic pastel SVG illustrations for default photo placeholders
function IllustrationArt({ type }: { type: MemoryPhoto["svgIllustrationType"] }) {
  switch (type) {
    case "sunset":
      return (
        <svg viewBox="0 0 320 240" className="w-full h-full object-cover">
          <defs>
            <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FDA4AF" />
              <stop offset="45%" stopColor="#FDBA74" />
              <stop offset="85%" stopColor="#FDE68A" />
              <stop offset="100%" stopColor="#DDD6FE" />
            </linearGradient>
            <linearGradient id="sunGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FEF08A" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
          </defs>
          <rect width="320" height="240" fill="url(#skyGrad)" />
          <circle cx="160" cy="140" r="45" fill="url(#sunGrad)" opacity="0.9" />
          {/* Gentle hills */}
          <path d="M0,170 Q80,140 170,175 T320,160 L320,240 L0,240 Z" fill="#C084FC" opacity="0.5" />
          <path d="M0,190 Q90,165 200,195 T320,180 L320,240 L0,240 Z" fill="#9333EA" opacity="0.4" />
          {/* Two stylized silhouettes holding hands */}
          <circle cx="150" cy="165" r="5" fill="#4A044E" />
          <circle cx="168" cy="167" r="5" fill="#4A044E" />
          <path d="M147,170 C147,185 153,195 153,195" stroke="#4A044E" strokeWidth="4" strokeLinecap="round" />
          <path d="M168,172 C168,187 165,195 165,195" stroke="#4A044E" strokeWidth="4" strokeLinecap="round" />
          <path d="M152,178 Q159,183 166,179" stroke="#4A044E" strokeWidth="3" strokeLinecap="round" />
          {/* Tiny birds */}
          <path d="M80,80 Q90,75 100,80 Q110,75 120,80" fill="none" stroke="#be185d" strokeWidth="1.5" />
          <path d="M220,60 Q228,56 236,60 Q244,56 252,60" fill="none" stroke="#be185d" strokeWidth="1.5" />
        </svg>
      );
    case "coffee":
      return (
        <svg viewBox="0 0 320 240" className="w-full h-full object-cover">
          <rect width="320" height="240" fill="#FCE7F3" />
          <circle cx="160" cy="120" r="90" fill="#FDF2F8" />
          {/* Two coffee mugs with heart latte art */}
          <rect x="80" y="90" width="60" height="70" rx="8" fill="#F472B6" />
          <path d="M140,105 C155,105 155,140 140,140" fill="none" stroke="#F472B6" strokeWidth="6" strokeLinecap="round" />
          <ellipse cx="110" cy="90" rx="30" ry="10" fill="#E879F9" />
          <path d="M110,87 C108,84 103,84 103,88 C103,91 110,95 110,95 C110,95 117,91 117,88 C117,84 112,84 110,87 Z" fill="#FFFFFF" />

          <rect x="180" y="90" width="60" height="70" rx="8" fill="#C084FC" />
          <path d="M180,105 C165,105 165,140 180,140" fill="none" stroke="#C084FC" strokeWidth="6" strokeLinecap="round" />
          <ellipse cx="210" cy="90" rx="30" ry="10" fill="#A855F7" />
          <path d="M210,87 C208,84 203,84 203,88 C203,91 210,95 210,95 C210,95 217,91 217,88 C217,84 212,84 210,87 Z" fill="#FFFFFF" />

          {/* Steam wisps */}
          <path d="M110,75 Q115,65 110,55" fill="none" stroke="#F472B6" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
          <path d="M210,75 Q205,65 210,55" fill="none" stroke="#C084FC" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
        </svg>
      );
    case "stars":
      return (
        <svg viewBox="0 0 320 240" className="w-full h-full object-cover">
          <defs>
            <linearGradient id="nightSky" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E1B4B" />
              <stop offset="50%" stopColor="#312E81" />
              <stop offset="100%" stopColor="#4C1D95" />
            </linearGradient>
          </defs>
          <rect width="320" height="240" fill="url(#nightSky)" />
          {/* Crescent moon */}
          <path d="M250,50 A25,25 0 1,0 270,90 A20,20 0 1,1 250,50 Z" fill="#FDE047" />
          {/* Star specks */}
          {[
            [40, 40], [70, 80], [110, 30], [150, 70], [190, 40],
            [60, 140], [120, 110], [210, 130], [280, 140], [90, 180]
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={i % 2 === 0 ? 2 : 1.5} fill="#FFFFFF" opacity="0.8" />
          ))}
          {/* Shooting star trail */}
          <path d="M60,30 L130,70" stroke="url(#nightSky)" strokeWidth="1.5" />
          <line x1="60" y1="30" x2="110" y2="55" stroke="#FBCFE8" strokeWidth="2" strokeLinecap="round" />
          {/* Friendship constellation line */}
          <polyline points="70,160 120,130 180,150 230,120" fill="none" stroke="#DDD6FE" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.7" />
          <circle cx="70" cy="160" r="3" fill="#F472B6" />
          <circle cx="120" cy="130" r="3" fill="#F472B6" />
          <circle cx="180" cy="150" r="3" fill="#F472B6" />
          <circle cx="230" cy="120" r="3" fill="#F472B6" />
        </svg>
      );
    case "roadtrip":
      return (
        <svg viewBox="0 0 320 240" className="w-full h-full object-cover">
          <rect width="320" height="240" fill="#E0E7FF" />
          {/* Mountains */}
          <polygon points="0,170 80,90 160,170" fill="#C7D2FE" />
          <polygon points="120,170 200,100 280,170" fill="#DDD6FE" />
          <polygon points="220,170 270,120 320,170" fill="#FBCFE8" />
          {/* Road */}
          <polygon points="120,170 200,170 260,240 60,240" fill="#64748B" />
          <line x1="160" y1="170" x2="160" y2="240" stroke="#FDE047" strokeWidth="3" strokeDasharray="10,8" />
          {/* Cute vintage car */}
          <rect x="135" y="185" width="50" height="24" rx="6" fill="#F43F5E" />
          <rect x="143" y="174" width="34" height="15" rx="4" fill="#FECDD3" />
          <circle cx="145" cy="210" r="7" fill="#1E293B" />
          <circle cx="175" cy="210" r="7" fill="#1E293B" />
        </svg>
      );
    case "rain":
      return (
        <svg viewBox="0 0 320 240" className="w-full h-full object-cover">
          <rect width="320" height="240" fill="#EDE9FE" />
          {/* Cloud */}
          <path d="M110,60 Q130,40 160,50 Q190,35 210,60 Q230,70 220,90 Q200,100 120,95 Q90,90 110,60 Z" fill="#C4B5FD" opacity="0.6" />
          {/* Rain drops */}
          {[
            [90, 110], [115, 130], [140, 115], [165, 140],
            [190, 120], [215, 145], [240, 125], [130, 160], [175, 170]
          ].map(([x, y], i) => (
            <line key={i} x1={x} y1={y} x2={x - 4} y2={y + 12} stroke="#818CF8" strokeWidth="2" strokeLinecap="round" />
          ))}
          {/* Big yellow & pink umbrella */}
          <path d="M125,180 A35,35 0 0,1 195,180 Z" fill="#F472B6" />
          <path d="M160,180 L160,205 A5,5 0 0,0 150,205" fill="none" stroke="#7C3AED" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "party":
      return (
        <svg viewBox="0 0 320 240" className="w-full h-full object-cover">
          <rect width="320" height="240" fill="#FFF1F2" />
          {/* Balloons */}
          <circle cx="120" cy="90" r="30" fill="#F472B6" opacity="0.85" />
          <path d="M120,120 L135,170" stroke="#F472B6" strokeWidth="1.5" />
          <circle cx="170" cy="75" r="32" fill="#A855F7" opacity="0.85" />
          <path d="M170,107 L150,170" stroke="#A855F7" strokeWidth="1.5" />
          <circle cx="210" cy="100" r="28" fill="#FBBF24" opacity="0.85" />
          <path d="M210,128 L160,170" stroke="#FBBF24" strokeWidth="1.5" />
          {/* Confetti specks */}
          {[
            [60, 50], [90, 30], [250, 60], [280, 110], [70, 130], [240, 170]
          ].map(([x, y], i) => (
            <rect key={i} x={x} y={y} width="7" height="7" rx="1.5" transform={`rotate(${i * 25} ${x} ${y})`} fill={i % 2 === 0 ? "#EC4899" : "#8B5CF6"} />
          ))}
          {/* Cake with candle */}
          <rect x="135" y="175" width="50" height="30" rx="4" fill="#FBCFE8" />
          <path d="M135,182 Q147,190 160,182 Q173,190 185,182" fill="none" stroke="#F43F5E" strokeWidth="3" />
          <line x1="160" y1="175" x2="160" y2="165" stroke="#F59E0B" strokeWidth="2.5" />
          <circle cx="160" cy="162" r="3" fill="#EF4444" />
        </svg>
      );
    case "study":
      return (
        <svg viewBox="0 0 320 240" className="w-full h-full object-cover">
          <rect width="320" height="240" fill="#FAF5FF" />
          {/* Open notebooks */}
          <rect x="70" y="90" width="85" height="100" rx="6" fill="#FCE7F3" stroke="#F472B6" strokeWidth="2" />
          <rect x="165" y="90" width="85" height="100" rx="6" fill="#EDE9FE" stroke="#A855F7" strokeWidth="2" />
          {/* Sticky notes */}
          <rect x="90" y="110" width="45" height="40" fill="#FEF08A" rx="2" />
          <rect x="185" y="110" width="45" height="40" fill="#BAE6FD" rx="2" />
          {/* Pencils */}
          <line x1="155" y1="80" x2="165" y2="190" stroke="#EC4899" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );
    case "hug":
    default:
      return (
        <svg viewBox="0 0 320 240" className="w-full h-full object-cover">
          <rect width="320" height="240" fill="#FFF5F5" />
          <circle cx="160" cy="120" r="85" fill="#FFE4E6" />
          {/* Giant loving heart */}
          <path
            d="M160,95 C150,75 120,75 110,95 C95,120 160,165 160,165 C160,165 225,120 210,95 C200,75 170,75 160,95 Z"
            fill="#F43F5E"
            opacity="0.85"
          />
          <circle cx="140" cy="115" r="5" fill="#FFFFFF" />
          <circle cx="180" cy="115" r="5" fill="#FFFFFF" />
          <path d="M152,130 Q160,138 168,130" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        </svg>
      );
  }
}

export default function MemoryWall() {
  const { polaroidMemories } = friendshipData;
  const [activeTab, setActiveTab] = useState<"all" | "candid" | "adventures" | "celebrations">("all");
  const [selectedPhoto, setSelectedPhoto] = useState<MemoryPhoto | null>(null);

  const filteredMemories =
    activeTab === "all"
      ? polaroidMemories
      : polaroidMemories.filter((m) => m.category === activeTab);

  return (
    <section id="memories" className="py-20 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto relative">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/80 border border-purple-200 text-purple-700 text-xs font-semibold uppercase tracking-wider mb-3">
          <Camera className="w-3.5 h-3.5 text-purple-500" />
          <span>Captured in Starlight</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-bold text-stone-900 mb-4">
          Our Memory Wall
        </h2>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          Frozen snapshots of pure happiness. Click any Polaroid to open the memory note and see the full story.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {[
            { id: "all", label: "All Moments" },
            { id: "candid", label: "Candid Laughs" },
            { id: "adventures", label: "Adventures" },
            { id: "celebrations", label: "Celebrations" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeTab === tab.id
                  ? "bg-pink-500 text-white shadow-md shadow-pink-200 scale-105"
                  : "bg-white/80 text-stone-600 hover:bg-pink-50 hover:text-pink-600 border border-pink-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Polaroid Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 pt-4">
        {filteredMemories.map((photo) => (
          <div
            key={photo.id}
            onClick={() => setSelectedPhoto(photo)}
            className="group cursor-pointer relative"
            style={{
              transform: `rotate(${photo.rotationDeg}deg)`,
            }}
          >
            {/* Washi tape decoration */}
            <div className="washi-tape" />

            <div className="polaroid-frame relative flex flex-col items-center">
              {/* Photo Area */}
              <div className="w-full aspect-[4/3] rounded overflow-hidden bg-pink-50 relative">
                {photo.imagePath ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={photo.imagePath}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <IllustrationArt type={photo.svgIllustrationType} />
                )}

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-stone-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/90 backdrop-blur-sm text-stone-800 text-xs px-3 py-1.5 rounded-full font-medium flex items-center gap-1 shadow-sm">
                    <ZoomIn className="w-3 h-3 text-pink-600" /> View Memory
                  </span>
                </div>
              </div>

              {/* Handwritten style caption */}
              <div className="w-full pt-3 px-1 text-center">
                <p className="font-handwriting text-stone-800 text-lg font-semibold leading-tight line-clamp-1">
                  {photo.title}
                </p>
                <p className="text-[11px] text-stone-600 font-sans mt-0.5 flex items-center justify-center gap-1">
                  <Calendar className="w-3 h-3 text-pink-400" />
                  {photo.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Information Tip for Customizing Photos */}
      <div className="mt-14 max-w-xl mx-auto p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-pink-200/60 text-center">
        <p className="text-xs text-stone-600 flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-pink-500" />
          <span>
            <strong>Pro Tip:</strong> You can drop actual photos of Ritu & Smurti in{" "}
            <code className="text-pink-600 bg-pink-50 px-1 py-0.5 rounded">public/images/</code> and link them in{" "}
            <code className="text-pink-600 bg-pink-50 px-1 py-0.5 rounded">data/friendship.ts</code>!
          </span>
        </p>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-pink-100 relative animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-stone-900/60 hover:bg-stone-900 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close photo preview"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Image View */}
            <div className="w-full aspect-[4/3] bg-pink-50 relative overflow-hidden">
              {selectedPhoto.imagePath ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={selectedPhoto.imagePath}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <IllustrationArt type={selectedPhoto.svgIllustrationType} />
              )}
            </div>

            {/* Modal Details */}
            <div className="p-6">
              <div className="flex items-center justify-between text-xs text-stone-600 mb-2">
                <span className="flex items-center gap-1 text-pink-600 font-medium">
                  <Calendar className="w-3.5 h-3.5" />
                  {selectedPhoto.date}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-purple-500" />
                  {selectedPhoto.location}
                </span>
              </div>

              <h3 className="text-2xl font-serif-display font-bold text-stone-900 mb-2">
                {selectedPhoto.title}
              </h3>

              <p className="font-handwriting text-xl text-purple-700 mb-4 font-normal">
                &quot;{selectedPhoto.caption}&quot;
              </p>

              <div className="bg-pink-50/60 rounded-xl p-4 border border-pink-100/70 mb-4">
                <p className="text-sm text-stone-700 leading-relaxed">
                  {selectedPhoto.longStory}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-pink-100">
                <span className="text-xs text-stone-600 flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
                  Forever locked in our universe
                </span>
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="px-4 py-1.5 rounded-full bg-pink-100 text-pink-700 text-xs font-semibold hover:bg-pink-200 transition-colors"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
