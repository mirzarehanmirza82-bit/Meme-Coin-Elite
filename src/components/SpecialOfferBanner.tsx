import React from 'react';
import { Sparkles, MessageSquare, ArrowRight, ShieldCheck, Flame } from 'lucide-react';
import { SITE_CONFIG } from '../siteConfig';
import { PageRoute } from '../types';

interface SpecialOfferBannerProps {
  onNavigate: (page: PageRoute) => void;
}

export const SpecialOfferBanner: React.FC<SpecialOfferBannerProps> = ({ onNavigate }) => {
  return (
    <div className="w-full space-y-6">
      
      {/* 1. Large Premium Highlighted Startup Offer Card */}
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#1F190B] via-[#15131A] to-[#0D0D14] border-2 border-amber-400/40 p-6 sm:p-8 shadow-2xl shadow-amber-950/40 group">
        
        {/* Decorative corner glows */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-yellow-500/10 rounded-full blur-2xl pointer-events-none -ml-20 -mb-20"></div>
        
        {/* Subtle patterned grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
          
          {/* Left Content */}
          <div className="space-y-3 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/50 text-amber-300 text-xs font-extrabold uppercase tracking-widest">
              <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>SPECIAL STARTUP OFFER • FIRST 2 CLIENTS ONLY</span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              ANY PACKAGE — <span className="text-gold-gradient text-3xl sm:text-4xl lg:text-5xl">$250</span>
            </h3>

            <p className="text-sm sm:text-base text-gray-300 max-w-xl font-normal leading-relaxed">
              The first two confirmed clients can receive their selected package (Advanced, Business, or Pro) for just <strong className="text-amber-300 font-bold">$250</strong>. Experience our dedicated branding and launch preparation firsthand.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs text-amber-200/80 font-medium">
              <span className="flex items-center gap-1.5 bg-black/40 px-3 py-1 rounded-md border border-amber-500/20">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                Limited to the first 2 confirmed clients
              </span>
              <span className="text-gray-400">
                Direct consultation & scope confirmation included
              </span>
            </div>
          </div>

          {/* Right Action Trigger */}
          <div className="flex-shrink-0 flex flex-col items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => onNavigate("requirements")}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black font-extrabold text-sm sm:text-base shadow-xl shadow-amber-500/30 transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 cursor-pointer"
            >
              <Sparkles className="w-5 h-5" />
              <span>Claim $250 Offer Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <span className="text-[11px] text-gray-400 text-center">
              Fill project requirements to lock in offer
            </span>
          </div>

        </div>
      </div>

      {/* 2. IMPORTANT CONTACT NOTICE (Immediately Below Offer) */}
      <div className="rounded-2xl bg-[#111118]/90 border border-amber-500/25 p-5 sm:p-6 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-5 shadow-lg">
        <div className="space-y-1.5 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#25D366] animate-ping"></span>
            <h4 className="font-heading text-base sm:text-lg font-bold text-white">
              Want More Information?
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-gray-300 max-w-2xl">
            If you want to know more about our services, packages, project process or requirements before ordering, contact us first. We will explain the details and answer your questions directly.
          </p>
        </div>

        <a
          href={SITE_CONFIG.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs sm:text-sm shadow-lg shadow-[#25D366]/20 transition-all transform hover:scale-105"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Contact Us on WhatsApp</span>
        </a>
      </div>

    </div>
  );
};
