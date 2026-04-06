import React, { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#fffafa]">
      <div className="relative flex flex-col items-center">
        <div className="text-6xl animate-bounce mb-4 text-portfolio-pink">
          <span className="font-serif">♡</span>
        </div>
        <div className="relative w-24 h-24 flex items-center justify-center">
          <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 120 120">
            <circle
              className="text-portfolio-pink/20"
              strokeWidth="10"
              stroke="currentColor"
              fill="transparent"
              r="50"
              cx="60"
              cy="60"
            />
            <circle
              className="text-portfolio-pink transition-all duration-300 ease-out"
              strokeWidth="10"
              strokeDasharray={314} // Circumference = 2 * PI * r (2 * 3.14 * 50)
              strokeDashoffset={314 - (314 * progress) / 100} // Fills based on progress state
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="50"
              cx="60"
              cy="60"
            />
          </svg>
          <div className="absolute text-xl font-extrabold text-portfolio-pink tabular-nums">
            {progress}%
          </div>
        </div>
        <p className="mt-6 text-portfolio-pink font-bold tracking-widest uppercase text-xs animate-pulse">
          Loading Jaden's Portfolio
        </p>
      </div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-portfolio-pink/5 rounded-full blur-3xl decor-fade"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-portfolio-pink/5 rounded-full blur-3xl decor-fade"></div>
    </div>
  );
};

export default LoadingScreen;