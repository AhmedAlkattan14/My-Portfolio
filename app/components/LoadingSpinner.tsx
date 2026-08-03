"use client";

import { useEffect, useState } from "react";

interface LoadingSpinnerProps {
  onComplete?: () => void;
}

export default function LoadingSpinner({ onComplete }: LoadingSpinnerProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            onComplete?.();
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[999999] bg-black flex items-center justify-center">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full bg-gradient-to-r from-[var(--primary-light-1)] to-[var(--primary-light-2)] blur-[100px] sm:blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full bg-gradient-to-r from-[var(--primary-light-1)] to-[var(--primary-light-2)] blur-[100px] sm:blur-[120px] -z-10"></div>

      <div className="text-center">
        {/* Logo/Name */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-unbounded text-white mb-2">
            Ahmed{" "}
            <span className="text-[var(--primary-color)]">Alkattan</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 font-sora">
            Frontend Developer & UI Designer
          </p>
        </div>

        {/* Animated Spinner */}
        <div className="relative mb-8">
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto relative">
            {/* Outer Ring */}
            <div className="absolute inset-0 rounded-full border-4 border-gray-700"></div>
            {/* Animated Ring */}
            <div 
              className="absolute inset-0 rounded-full border-4 border-transparent border-t-[var(--primary-color)] animate-spin"
              style={{ animationDuration: '1.5s' }}
            ></div>
            {/* Inner Glow */}
            <div className="absolute inset-2 rounded-full bg-gradient-to-r from-[var(--primary-light-1)] to-[var(--primary-light-2)] opacity-30 animate-pulse"></div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 sm:w-80 md:w-96 mx-auto mb-4">
          <div className="w-full bg-gray-800 rounded-full h-2 sm:h-3">
            <div 
              className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-light-2)] h-2 sm:h-3 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Progress Text */}
        <p className="text-sm sm:text-base text-gray-400 font-sora">
          Loading Portfolio... {Math.round(progress)}%
        </p>

        {/* Loading Dots Animation */}
        <div className="flex justify-center mt-4 space-x-1">
          <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
}

