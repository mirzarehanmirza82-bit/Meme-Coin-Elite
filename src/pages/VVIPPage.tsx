import React from 'react';
import { PageRoute } from '../types';
import { SITE_CONFIG } from '../siteConfig';
import { NoticeBanner } from '../components/NoticeBanner';
import { 
  Sparkles, 
  Crown, 
  Flame, 
  ShieldCheck, 
  Send, 
  MessageSquare, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Rocket, 
  Clock,
  Compass
} from 'lucide-react';

interface VVIPPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const VVIPPage: React.FC<VVIPPageProps> = ({ onNavigate }) => {
  const vvipPillars = [
    {
      title: "Highest Priority Handling",
      icon: <Flame className="w-5 h-5 text-amber-400" />,
      description: "Immediate queue placement and top resource allocation across design, token architecture, and launch readiness."
    },
    {
      title: "Direct Founder-Level Communication",
      icon: <Crown className="w-5 h-5 text-amber-400" />,
      description: "Direct round-the-clock advisory channel with the core Meme Coin Elite team leaders and technical architects."
    },
    {
      title: "Tailored Multi-Stage Project Planning",
      icon: <Compass className="w-5 h-5 text-amber-400" />,
      description: "Custom phased roadmaps including pre-launch teaser assets, smart deployment structuring, and post-launch media kits."
    },
    {
      title: "Custom Launch Scheduling",
      icon: <Clock className="w-5 h-5 text-amber-400" />,
      description: "Synchronized timeline execution aligning liquidity pool creation, community activation, and metadata lock schedules."
    },
    {
      title: "Comprehensive Launch Assistance",
      icon: <Rocket className="w-5 h-5 text-amber-400" />,
      description: "End-to-end guidance through DEX indexing checklists, promotional channel synchronization, and risk safeguards."
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 via-yellow-500/20 to-amber-500/20 border border-amber-400/50 text-amber-300 text-xs font-black uppercase tracking-widest shadow-lg">
          <Crown className="w-4 h-4 text-amber-400" />
          <span>Concierge Enterprise Tier</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
          VVIP <span className="text-gold-gradient">Clients</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
          VVIP status is our highest priority client tier, specifically tailored for large-scale, multi-stage, or intensive-requirement meme coin ventures.
        </p>
      </div>

      {/* Main Luxury Concierge Box */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#1E1928] via-[#14121F] to-[#0A0A10] border-2 border-amber-400/60 shadow-2xl shadow-amber-950/40 relative overflow-hidden space-y-8">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-500/15 to-yellow-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-2xl space-y-3">
          <span className="text-xs uppercase font-black tracking-widest text-amber-300">
            Exclusive White-Glove Support
          </span>
          <h3 className="font-heading text-2xl sm:text-3xl font-black text-white">
            Unrivaled Dedication for Flagship Launches
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            When your token concept requires multi-faceted design collateral, intricate tokenomics planning, or synchronized promotional coordination, our VVIP tier delivers full-throttle attention and customized milestone execution.
          </p>
        </div>

        {/* 5 VVIP Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {vvipPillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl bg-[#171526] border border-amber-500/25 space-y-2.5 shadow-md ${
                idx === 4 ? 'md:col-span-2' : ''
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/35 flex items-center justify-center">
                  {pillar.icon}
                </div>
                <h4 className="font-heading text-base font-bold text-white">
                  {pillar.title}
                </h4>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed pl-13">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-wrap items-center gap-4">
          <a
            href={`${SITE_CONFIG.whatsapp}&text=Hello%20Meme%20Coin%20Elite%2C%20I%20would%20like%20to%20discuss%20VVIP%20Client%20Status%20and%20tailored%20launch%20support%20for%20my%20project.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black font-black text-xs sm:text-sm shadow-xl shadow-amber-500/30 flex items-center gap-2 transition-all transform hover:scale-[1.02]"
          >
            <Crown className="w-4 h-4" />
            <span>Discuss VVIP Status on WhatsApp</span>
          </a>

          <a
            href={SITE_CONFIG.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-4 rounded-xl bg-[#229ED9] hover:bg-[#1e8ec3] text-white font-bold text-xs sm:text-sm shadow-md flex items-center gap-2 transition-all"
          >
            <Send className="w-4 h-4" />
            <span>Discuss on Telegram</span>
          </a>
        </div>

      </div>

      {/* Notice */}
      <div className="space-y-4">
        <NoticeBanner type="completion" />
        <NoticeBanner type="payment" />
      </div>

    </div>
  );
};
