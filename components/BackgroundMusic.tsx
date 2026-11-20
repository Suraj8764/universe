"use client";

import React, { useState, useEffect, useRef } from "react";
import { Music, Volume2, VolumeX, Sparkles } from "lucide-react";

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.4);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  // Audio Context refs for gentle music box chime synthesis
  const audioCtxRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);

  // Audio element fallback for custom uploaded MP3
  const audioElementRef = useRef<HTMLAudioElement | null>(null);
  const [hasCustomAudio, setHasCustomAudio] = useState(false);

  useEffect(() => {
    // Check if an MP3 file exists in /music/friendship-melody.mp3
    const audio = new Audio("/music/friendship-melody.mp3");
    audio.loop = true;
    audio.preload = "none";
    audio.oncanplay = () => {
      setHasCustomAudio(true);
    };
    audio.onerror = () => {
      setHasCustomAudio(false);
    };
    audioElementRef.current = audio;

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
        audioCtxRef.current.close().catch(() => {});
      }
      if (audioElementRef.current) {
        audioElementRef.current.pause();
      }
    };
  }, []);

  // Soft pentatonic music-box lullaby notes (dreamy friendship chords)
  // Notes in Hz: C4, E4, G4, A4, B4, C5, D5, E5, G5, A5
  const notes = [
    261.63, 329.63, 392.0, 440.0, 493.88, 523.25, 587.33, 659.25, 783.99,
    880.0,
  ];

  // A soothing arpeggio pattern representing companionship
  const melodyPattern = [
    0, 2, 5, 7, 5, 2, 3, 5, 8, 7, 5, 3, 1, 4, 6, 8, 6, 4, 2, 5, 7, 9, 7, 5,
  ];

  const playChimeNote = (freq: number) => {
    if (!audioCtxRef.current || !masterGainRef.current) return;
    const ctx = audioCtxRef.current;
    if (ctx.state === "suspended") {
      ctx.resume().catch(() => {});
    }

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const noteGain = ctx.createGain();

    // Warm bell / music-box harmonic timbre using sine & soft overtone
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, now);

    // Subtle gentle attack and ringing chime decay
    noteGain.gain.setValueAtTime(0, now);
    noteGain.gain.linearRampToValueAtTime(0.28, now + 0.04);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.2);

    osc.connect(noteGain);
    noteGain.connect(masterGainRef.current);

    osc.start(now);
    osc.stop(now + 2.3);
  };

  const startSynthesizerMusic = () => {
    if (!audioCtxRef.current) {
      const AudioCtxClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtxClass();
      masterGainRef.current = audioCtxRef.current.createGain();
      masterGainRef.current.gain.value = volume;
      masterGainRef.current.connect(audioCtxRef.current.destination);
    } else if (audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume().catch(() => {});
    }

    let step = 0;
    // Play first note immediately
    const noteIndex = melodyPattern[step % melodyPattern.length];
    playChimeNote(notes[noteIndex]);
    step++;

    timerRef.current = setInterval(() => {
      const idx = melodyPattern[step % melodyPattern.length];
      playChimeNote(notes[idx]);

      // Add a soft counter-melody bass chime occasionally
      if (step % 4 === 0) {
        const bassFreq = notes[melodyPattern[step % 4]] / 2;
        playChimeNote(bassFreq);
      }
      step++;
    }, 450);
  };

  const stopSynthesizerMusic = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      if (hasCustomAudio && audioElementRef.current) {
        audioElementRef.current.pause();
      } else {
        stopSynthesizerMusic();
      }
      setIsPlaying(false);
    } else {
      if (hasCustomAudio && audioElementRef.current) {
        audioElementRef.current.volume = isMuted ? 0 : volume;
        audioElementRef.current.play().catch(() => {
          // If custom audio fails, fallback to synth
          startSynthesizerMusic();
        });
      } else {
        startSynthesizerMusic();
      }
      setIsPlaying(true);
    }
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    if (masterGainRef.current) {
      masterGainRef.current.gain.value = isMuted ? 0 : newVolume;
    }
    if (audioElementRef.current) {
      audioElementRef.current.volume = isMuted ? 0 : newVolume;
    }
  };

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (masterGainRef.current) {
      masterGainRef.current.gain.value = nextMuted ? 0 : volume;
    }
    if (audioElementRef.current) {
      audioElementRef.current.volume = nextMuted ? 0 : volume;
    }
  };

  return (
    <div className="relative inline-flex items-center">
      <div className="flex items-center bg-white/90 backdrop-blur-md rounded-full px-3 py-1.5 shadow-sm border border-pink-200/80 hover:border-pink-300 transition-all">
        {/* Play / Pause Button */}
        <button
          onClick={togglePlay}
          className="flex items-center gap-2 text-xs font-medium text-stone-700 hover:text-pink-600 transition-colors focus:outline-none"
          title={isPlaying ? "Pause friendship melody" : "Play soothing friendship melody"}
          aria-label={isPlaying ? "Pause friendship melody" : "Play soothing friendship melody"}
        >
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
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
              <Music className="w-3.5 h-3.5" />
            )}
          </div>
          <span className="hidden sm:inline font-sans text-xs font-semibold">
            {isPlaying ? "Music Playing" : "Play Melody"}
          </span>
        </button>

        {/* Volume & Mute Controls (available when playing) */}
        {isPlaying && (
          <div className="flex items-center ml-2 pl-2 border-l border-pink-100">
            <button
              onClick={toggleMute}
              className="text-stone-500 hover:text-pink-600 p-1 transition-colors"
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
                className="text-[10px] text-stone-400 hover:text-stone-600 px-1 py-0.5 rounded"
                title="Adjust Volume"
              >
                {Math.round((isMuted ? 0 : volume) * 100)}%
              </button>

              {showVolumeSlider && (
                <div className="absolute right-0 bottom-full mb-2 bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-lg border border-pink-100 flex flex-col items-center z-50">
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={isMuted ? 0 : volume}
                    onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                    className="w-20 accent-pink-500 cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-500 mt-1">Soft Ambience</span>
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
