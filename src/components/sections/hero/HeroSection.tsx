"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { HeroIllustration } from "./HeroIllustration";

interface HeroSectionProps {
  onScrollToDashboard: () => void;
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onScrollToDashboard,
  onOpenContact,
}) => {
  // Hero Typewriter Effect State & Hook
  const heroWords = useMemo(
    () => [
      "your business",
      "your people",
      "your finances",
      "your tasks & OKRs",
      "your approvals",
      "everyday operations",
      "business growth",
    ],
    []
  );

  const [heroWordIndex, setHeroWordIndex] = useState(0);
  const [heroSubIndex, setHeroSubIndex] = useState(heroWords[0].length);
  const [heroIsReverse, setHeroIsReverse] = useState(false);
  const [heroTypedText, setHeroTypedText] = useState(heroWords[0]);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    // When word is fully typed, pause before deleting
    if (!heroIsReverse && heroSubIndex === heroWords[heroWordIndex].length) {
      const timeout = setTimeout(() => {
        setHeroIsReverse(true);
      }, 1500);
      return () => clearTimeout(timeout);
    }

    // When word is completely deleted, switch to next word
    if (heroIsReverse && heroSubIndex === 0) {
      setHeroIsReverse(false);
      setHeroWordIndex((prev) => (prev + 1) % heroWords.length);
      return;
    }

    // Typing or deleting speed (fast backspace, smooth natural typing)
    const speed = heroIsReverse ? 35 : 75;
    const timeout = setTimeout(() => {
      setHeroSubIndex((prev) => prev + (heroIsReverse ? -1 : 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [heroSubIndex, heroWordIndex, heroIsReverse, heroWords]);

  useEffect(() => {
    setHeroTypedText(heroWords[heroWordIndex].substring(0, heroSubIndex));
  }, [heroSubIndex, heroWordIndex, heroWords]);

  // Blinking cursor effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 530);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="relative pt-8 pb-16 md:pt-12 md:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left z-10">
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>NETROM</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-gray-900 tracking-tight leading-[1.12]">
              One connected workspace for{" "}
              <span className="text-[#1d61e7]">{heroTypedText}</span>
              <span
                className="inline-block font-thin text-[#1d61e7] mx-0.5"
                style={{ opacity: cursorVisible ? 1 : 0 }}
              >
                |
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-[19px] text-gray-700 leading-relaxed font-normal max-w-2xl">
              Netrom brings your people, finances, tasks, approvals, performance
              and everyday operations into one secure business workspace,
              helping your teams spend less time switching between disconnected
              systems and more time getting work done.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3.5 sm:space-y-0 sm:space-x-4 pt-2">
              <button
                onClick={onScrollToDashboard}
                className="bg-[#e43338] hover:bg-[#d2282d] text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-md shadow-md hover:shadow-lg transition-all duration-200 uppercase tracking-wider text-center flex items-center justify-center space-x-2 group cursor-pointer"
              >
                <span>START YOUR FIRST MONTH FREE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenContact}
                className="bg-black hover:bg-gray-800 text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-md shadow-md hover:shadow-lg transition-all duration-200 uppercase tracking-wider text-center cursor-pointer"
              >
                TALK TO SALES
              </button>
            </div>
          </div>

          {/* Right Graphic Illustration Column */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center lg:justify-end">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
