import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete?: () => void;
  onFinishLoading?: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete, onFinishLoading }) => {
  const [fading, setFading] = useState(false);
  const handleFinish = onComplete || onFinishLoading || (() => {});

  useEffect(() => {
    // 3-4 rotations takes approx 2.2 seconds, then fade out smoothly
    const timer = setTimeout(() => {
      setFading(true);
    }, 2200);

    const finishTimer = setTimeout(() => {
      handleFinish();
    }, 2700);

    return () => {
      clearTimeout(timer);
      clearTimeout(finishTimer);
    };
  }, [handleFinish]);

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-[#070709] flex flex-col items-center justify-center transition-opacity duration-500 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Subtle Ambient Glow & Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-amber-300 rounded-full blur-[1px] animate-ping opacity-30"></div>
        <div className="absolute bottom-1/3 right-1/4 w-2.5 h-2.5 bg-amber-400 rounded-full blur-[1px] animate-pulse opacity-40"></div>
        <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-amber-200 rounded-full opacity-50 animate-bounce"></div>
      </div>

      {/* 3D Rotating Golden Coin Container */}
      <div className="relative flex flex-col items-center">
        {/* Glow backdrop behind coin */}
        <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/30 via-yellow-400/20 to-amber-600/30 rounded-full blur-xl animate-pulse"></div>

        {/* The 3D Rotating Coin */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 perspective-1000">
          <div className="w-full h-full animate-coin-spin-3d rounded-full p-1 bg-gradient-to-br from-[#FFF0B8] via-[#D4AF37] to-[#785404] shadow-2xl shadow-amber-950/60">
            <div className="w-full h-full rounded-full bg-[#121217] flex items-center justify-center p-1.5">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-[#242432] via-[#161620] to-[#0A0A0E] flex items-center justify-center border-2 border-amber-400/50 relative overflow-hidden shadow-inner">
                {/* Decorative milled inner rim */}
                <div className="absolute inset-1.5 rounded-full border border-dashed border-amber-300/40"></div>
                
                {/* Coin Center Symbol */}
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-12 h-12 sm:w-14 sm:h-14 text-amber-300 drop-shadow-[0_0_8px_rgba(245,215,127,0.9)]"
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 19 8.5 12 15 5 8.5 12 2" stroke="#FFF0B8" fill="rgba(212,175,55,0.2)"/>
                  <line x1="12" y1="15" x2="12" y2="22" stroke="#F5D77F"/>
                  <path d="M9 18.5h6" stroke="#D4AF37"/>
                  <path d="M10 7h4c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5h-4v-3z" stroke="#FFF0B8"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="mt-8 flex flex-col items-center text-center">
          <h2 className="font-heading font-extrabold text-xl sm:text-2xl tracking-wider text-white">
            MEME COIN <span className="text-gold-gradient">ELITE</span>
          </h2>
          <p className="text-xs tracking-[0.25em] uppercase text-amber-300/70 font-medium mt-1">
            Meme Coin Creation & Launch Support
          </p>

          {/* Progress bar shimmer */}
          <div className="w-40 h-1 bg-[#1A1A24] rounded-full mt-5 overflow-hidden border border-amber-500/20">
            <div className="h-full bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-500 rounded-full animate-[shimmer_1.5s_infinite] w-full origin-left"></div>
          </div>
        </div>

        {/* Fast skip for low-end or impatient users */}
        <button 
          onClick={handleFinish}
          className="mt-6 text-[11px] text-gray-500 hover:text-amber-300 transition-colors uppercase tracking-wider underline cursor-pointer"
        >
          Skip Intro
        </button>
      </div>
    </div>
  );
};
