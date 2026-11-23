"use client";

import React, { useState, useEffect, useRef } from "react";
import { Music, Volume2, VolumeX, Sparkles, Disc } from "lucide-react";

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.6);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  const audioElementRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Recent Kalyani Remix downloaded song
    const audio = new Audio("/music/kalyani-song.mp3");
    audio.loop = true;
    audioElementRef.current = audio;

    const handleEnded = () => setIsPlaying(false);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
      audio.pause();
    };
  }, []);

  // Synchronize volume and mute states
  useEffect(() => {
    if (audioElementRef.current) {
      audioElementRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    const audio = audioElementRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.volume = isMuted ? 0 : volume;
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.error("Playback error:", err);
          setIsPlaying(false);
        });
    }
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  return (
    <div className="relative inline-flex items-center">
      <div className="flex items-center bg-white/95 backdrop-blur-md rounded-full px-3 py-1.5 shadow-sm border border-pink-200/90 hover:border-pink-300 transition-all">
        {/* Play / Pause Button */}
        <button
          onClick={togglePlay}
          className="flex items-center gap-2 text-xs font-medium text-stone-700 hover:text-pink-600 transition-colors focus:outline-none cursor-pointer"
          title={isPlaying ? "Pause Kalyani Remix" : "Play Kalyani Remix"}
          aria-label={isPlaying ? "Pause Kalyani Remix" : "Play Kalyani Remix"}
        >
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
              isPlaying
                ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-sm"
                : "bg-pink-100 text-pink-600 hover:bg-pink-200"
            }`}
          >
            {isPlaying ? (
              <span className="flex items-end gap-[2px] h-3">
                <span className="w-[2px] bg-white rounded-full wave-bar-1" />
                <span className="w-[2px] bg-white rounded-full wave-bar-2" />
                <span className="w-[2px] bg-white rounded-full wave-bar-3" />
                <span className="w-[2px] bg-white rounded-full wave-bar-4" />
              </span>
            ) : (
              <Disc className="w-3.5 h-3.5" />
            )}
          </div>
          <span className="hidden sm:inline font-sans text-xs font-semibold">
            {isPlaying ? "Kalyani Playing" : "Play Kalyani"}
          </span>
        </button>

        {/* Volume & Mute Controls (available when playing) */}
        {isPlaying && (
          <div className="flex items-center ml-2 pl-2 border-l border-pink-100">
            <button
              onClick={toggleMute}
              className="text-stone-500 hover:text-pink-600 p-1 transition-colors cursor-pointer"
              title={isMuted ? "Unmute" : "Mute"}
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? (
                <VolumeX className="w-3.5 h-3.5 text-stone-400" />
              ) : (
                <Volume2 className="w-3.5 h-3.5 text-purple-600" />
              )}
            </button>

            <div
              className="relative ml-1"
              onMouseEnter={() => setShowVolumeSlider(true)}
              onMouseLeave={() => setShowVolumeSlider(false)}
            >
              <button
                className="text-[10px] text-stone-500 hover:text-stone-700 px-1 py-0.5 rounded cursor-pointer"
                title="Adjust Volume"
              >
                {Math.round((isMuted ? 0 : volume) * 100)}%
              </button>

              {showVolumeSlider && (
                <div className="absolute right-0 bottom-full mb-2 bg-white/95 backdrop-blur-md p-2.5 rounded-xl shadow-xl border border-pink-100 flex flex-col items-center z-50 min-w-[110px]">
                  <span className="text-[10px] text-stone-600 font-medium mb-1.5 flex items-center gap-1">
                    <Music className="w-3 h-3 text-pink-500" /> Kalyani Remix
                  </span>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={isMuted ? 0 : volume}
                    onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                    className="w-20 accent-pink-500 cursor-pointer"
                  />
                  <span className="text-[9px] text-stone-600 mt-1">Looping enabled</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Sparkle Accent */}
        <span className="ml-1.5 text-pink-400">
          <Sparkles className="w-3 h-3 animate-pulse" />
        </span>
      </div>
    </div>
  );
}
