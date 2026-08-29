import React from 'react';

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ size = "md", showText = true }) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-9 h-9",
    lg: "w-12 h-12"
  };

  return (
    <div className="flex items-center gap-3 cursor-pointer group">
      {/* 3D-Look Coin Emblem */}
      <div className={`relative ${sizeClasses[size]} flex items-center justify-center`}>
        {/* Outer Glow */}
        <div className="absolute inset-0 rounded-full bg-amber-500/20 blur-md group-hover:bg-amber-400/40 transition-all duration-300"></div>
        
        {/* Coin Edge */}
        <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#F5D77F] via-[#D4AF37] to-[#785404] p-[1.5px] shadow-lg shadow-amber-950/40 group-hover:scale-105 transition-transform duration-300">
          <div className="w-full h-full rounded-full bg-[#121217] flex items-center justify-center p-[2px]">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-[#1E1E28] via-[#15151D] to-[#0D0D12] flex items-center justify-center relative overflow-hidden border border-amber-500/30">
              
              {/* Internal Coin Ring Detail */}
              <div className="absolute inset-[2px] rounded-full border border-dashed border-amber-400/30"></div>
              
              {/* Center Emblem: Stylized Geometric Coin / Dollar & Diamond Mesh */}
              <svg 
                viewBox="0 0 24 24" 
                className="w-3/5 h-3/5 text-amber-300 drop-shadow-[0_0_4px_rgba(245,215,127,0.7)]"
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <polygon points="12 2 19 8.5 12 15 5 8.5 12 2" stroke="url(#goldGrad)" fill="rgba(212,175,55,0.15)"/>
                <line x1="12" y1="15" x2="12" y2="22" stroke="url(#goldGrad)"/>
                <path d="M9 18.5h6" stroke="url(#goldGrad)"/>
                <path d="M10 7h4c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5h-4v-3z" stroke="url(#goldGrad)"/>
                <defs>
                  <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFF0B8" />
                    <stop offset="50%" stopColor="#D4AF37" />
                    <stop offset="100%" stopColor="#AA7C11" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="font-heading font-extrabold tracking-wider text-base sm:text-lg text-white leading-tight flex items-center gap-1.5">
            MEME COIN <span className="text-gold-gradient font-black">ELITE</span>
          </span>
          <span className="text-[9px] uppercase tracking-[0.2em] text-amber-300/70 font-semibold leading-none">
            Launch & Branding
          </span>
        </div>
      )}
    </div>
  );
};
