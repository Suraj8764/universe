"use client";

import React, { useState, useEffect, useRef } from "react";
import { Music, Volume2, VolumeX, Sparkles, Disc } from "lucide-react";

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState<"full" | "clip">("full");

  const audioElementRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio element once on mount
  useEffect(() => {
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

  // Update track source when selectedTrack changes
  useEffect(() => {
    const audio = audioElementRef.current;
    if (!audio) return;

    const newSrc =
      selectedTrack === "full" ? "/music/kalyani-full.mp3" : "/music/kalyani-clip.mp3";

    if (audio.src !== new URL(newSrc, window.location.href).href) {
      const wasPlaying = !audio.paused;
      audio.src = newSrc;
      if (wasPlaying) {
        audio.play().catch(() => setIsPlaying(false));
      }
    }
  }, [selectedTrack]);

  // Keep volume & mute synchronized
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
          console.error("Playback failed:", err);
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
          title={isPlaying ? "Pause Kalyani song" : "Play Kalyani song"}
          aria-label={isPlaying ? "Pause Kalyani song" : "Play Kalyani song"}
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
                <div className="absolute right-0 bottom-full mb-2 bg-white/95 backdrop-blur-md p-2.5 rounded-xl shadow-xl border border-pink-100 flex flex-col items-center z-50 min-w-[120px]">
                  <span className="text-[10px] text-stone-600 font-medium mb-1.5 flex items-center gap-1">
                    <Music className="w-3 h-3 text-pink-500" /> Kalyani Song
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
                  <div className="flex items-center gap-1 mt-2 pt-1 border-t border-pink-100 w-full justify-between">
                    <button
                      onClick={() => setSelectedTrack("full")}
                      className={`text-[9px] px-1.5 py-0.5 rounded cursor-pointer transition-colors ${
                        selectedTrack === "full"
                          ? "bg-pink-500 text-white font-semibold"
                          : "text-stone-500 hover:text-stone-800"
                      }`}
                    >
                      Full (3m 54s)
                    </button>
                    <button
                      onClick={() => setSelectedTrack("clip")}
                      className={`text-[9px] px-1.5 py-0.5 rounded cursor-pointer transition-colors ${
                        selectedTrack === "clip"
                          ? "bg-pink-500 text-white font-semibold"
                          : "text-stone-500 hover:text-stone-800"
                      }`}
                    >
                      Clip (35s)
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tiny sparkle accent */}
        <span className="ml-1.5 text-pink-400">
          <Sparkles className="w-3 h-3 animate-pulse" />
        </span>
      </div>
    </div>
  );
}
