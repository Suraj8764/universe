"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Trophy, RotateCcw, CheckCircle2 } from "lucide-react";
import { friendshipData, QuizQuestion } from "@/data/friendship";

export default function FriendshipQuiz() {
  const { quiz } = friendshipData;
  const questions = quiz.questions;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isFinished, setIsFinished] = useState(false);

  const handleSelectOption = (questionId: number, target: string) => {
    const updated = { ...answers, [questionId]: target };
    setAnswers(updated);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsFinished(true);
      confetti({
        particleCount: 85,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#F472B6", "#A855F7", "#FBBF24", "#38BDF8", "#FFFFFF"],
      });
    }
  };

  const handleRestart = () => {
    setAnswers({});
    setCurrentIndex(0);
    setIsFinished(false);
  };

  const currentQ: QuizQuestion = questions[currentIndex];
  const progressPercent = Math.round(((currentIndex + (isFinished ? 1 : 0)) / questions.length) * 100);

  const rituCount = Object.values(answers).filter((v) => v === "ritu").length;
  const smurtiCount = Object.values(answers).filter((v) => v === "smurti").length;
  const bothCount = Object.values(answers).filter((v) => v === "both").length;

  return (
    <section id="quiz" className="py-24 px-4 sm:px-6 md:px-8 max-w-4xl mx-auto relative">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl mx-auto mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-200 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Interactive Friendship Test</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-bold text-stone-900 mb-4">
          {quiz.title}
        </h2>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          {quiz.subtitle}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-card rounded-3xl p-6 sm:p-10 border border-white/90 shadow-xl relative overflow-hidden"
      >
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs font-medium text-stone-600 mb-2">
            <span>
              {isFinished
                ? "Quiz Complete! 🎉"
                : `Question ${currentIndex + 1} of ${questions.length}`}
            </span>
            <span className="text-pink-600 font-semibold">{progressPercent}%</span>
          </div>
          <div className="w-full h-2.5 bg-pink-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          {!isFinished ? (
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
            >
              {/* Question Text */}
              <div className="text-center mb-8">
                <span className="text-xs uppercase tracking-widest text-purple-600 font-semibold">
                  Question #{currentQ.id}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif-display font-bold text-stone-900 mt-1 mb-2">
                  {currentQ.question}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 italic">
                  {currentQ.subtitle}
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {currentQ.options.map((option, idx) => (
                  <motion.button
                    key={idx}
                    whileHover={{ scale: 1.04, y: -4 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => handleSelectOption(currentQ.id, option.target)}
                    className="group relative p-6 rounded-2xl bg-white/80 hover:bg-white border-2 border-pink-100 hover:border-pink-400 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col items-center text-center cursor-pointer"
                  >
                    <span className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-200">
                      {option.icon}
                    </span>
                    <span className="font-semibold text-stone-800 text-base mb-1 group-hover:text-pink-600 transition-colors">
                      {option.text}
                    </span>
                    <span className="text-xs text-stone-600 leading-snug">
                      {option.subtext}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : (
            /* Result Screen */
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
              className="text-center py-4"
            >
              <div className="inline-flex p-4 rounded-full bg-gradient-to-tr from-pink-400 to-purple-400 text-white shadow-lg mb-4 animate-bounce">
                <Trophy className="w-8 h-8" />
              </div>

              <div className="inline-block px-4 py-1 rounded-full bg-pink-100 text-pink-700 font-semibold text-xs mb-2">
                Friendship Archetype
              </div>

              <h3 className="text-3xl sm:text-4xl font-serif-display font-bold text-stone-900 mb-2">
                {quiz.resultsSummary.duoArchetype}
              </h3>

              <p className="font-handwriting text-2xl text-purple-700 font-semibold mb-4">
                {quiz.resultsSummary.verdictTitle}
              </p>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-8 bg-pink-50/60 p-5 rounded-2xl border border-pink-100">
                {quiz.resultsSummary.verdictDescription}
              </p>

              {/* Answer tally badges */}
              <div className="grid grid-cols-3 gap-3 max-w-md mx-auto mb-8">
                <div className="bg-white/90 p-3 rounded-2xl border border-pink-100 shadow-2xs">
                  <span className="text-xs text-stone-600 block">Ritu Wins</span>
                  <span className="text-xl font-bold text-pink-600">{rituCount}</span>
                </div>
                <div className="bg-white/90 p-3 rounded-2xl border border-purple-100 shadow-2xs">
                  <span className="text-xs text-stone-600 block">Smurti Wins</span>
                  <span className="text-xl font-bold text-purple-600">{smurtiCount}</span>
                </div>
                <div className="bg-white/90 p-3 rounded-2xl border border-amber-100 shadow-2xs">
                  <span className="text-xs text-stone-600 block">Both of Us</span>
                  <span className="text-xl font-bold text-amber-600">{bothCount}</span>
                </div>
              </div>

              {/* Fun Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto mb-8">
                {quiz.resultsSummary.funStats.map((stat, i) => (
                  <div key={i} className="bg-white/80 p-3 rounded-2xl border border-pink-100">
                    <span className="text-[11px] text-stone-600 block">{stat.label}</span>
                    <span className="text-xs sm:text-sm font-semibold text-stone-800 flex items-center justify-center gap-1 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-pink-500" />
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Retake Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleRestart}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white text-xs sm:text-sm font-semibold shadow-md transition-all cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Retake Friendship Quiz</span>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
