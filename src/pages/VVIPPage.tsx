import React, { useState } from 'react';
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
  Compass,
  Users,
  ExternalLink,
  Lock,
  Diamond
} from 'lucide-react';

interface VVIPPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const VVIPPage: React.FC<VVIPPageProps> = ({ onNavigate }) => {
  const [repModalOpen, setRepModalOpen] = useState(false);

  const vvipPricing = SITE_CONFIG.vvipGroup.pricing;

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
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 via-yellow-500/20 to-amber-500/20 border border-amber-400/50 text-amber-300 text-xs font-black uppercase tracking-widest shadow-lg">
          <Crown className="w-4 h-4 text-amber-400" />
          <span>Concierge Enterprise Tier</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
          VVIP <span className="text-gold-gradient">Clients & Inner Circle</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
          VVIP status is our highest priority tier, tailored for large-scale meme coin ventures, multi-phase token roadmaps, and dedicated high-touch founder support.
        </p>
      </div>

      {/* VVIP Pricing Tiers */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
            VVIP Concierge <span className="text-gold-gradient">Membership</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-400">
            Select your preferred tier for comprehensive white-glove support and private access.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Monthly Plan */}
          <div className="rounded-3xl bg-[#0F0F17] border border-amber-500/25 p-6 sm:p-8 flex flex-col justify-between shadow-xl relative hover:border-amber-400/50 transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold tracking-wider text-amber-300 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                  {vvipPricing.monthly.label}
                </span>
                <span className="text-xs text-gray-400">30 Days</span>
              </div>

              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-gray-500 line-through">${vvipPricing.monthly.originalPrice}</span>
                  <span className="text-4xl font-extrabold text-white">${vvipPricing.monthly.price}</span>
                  <span className="text-xs text-gray-400">/ month</span>
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  Dedicated high-touch concierge support on a monthly cadence.
                </p>
              </div>

              <ul className="space-y-2 text-xs text-gray-300 pt-2 border-t border-white/5">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>VVIP WhatsApp & Telegram Private Circle</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>Founder-level daily coordination</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>Fast-lane token mechanics auditing</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-white/5">
              <a
                href={SITE_CONFIG.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#181826] hover:bg-amber-500 hover:text-black text-amber-300 border border-amber-500/30 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
              >
                <span>Get VVIP Monthly ($199)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Yearly Plan */}
          <div className="rounded-3xl bg-[#161222] border-2 border-amber-400/70 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-black text-[11px] font-black uppercase tracking-wider shadow-md">
              Recommended • {vvipPricing.yearly.savings}
            </div>

            <div className="space-y-4 pt-1">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold tracking-wider text-amber-300 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30">
                  {vvipPricing.yearly.label}
                </span>
                <span className="text-xs font-bold text-green-400 bg-green-500/10 px-2.5 py-0.5 rounded-full border border-green-500/20">
                  Most Preferred
                </span>
              </div>

              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-gray-500 line-through">${vvipPricing.yearly.originalPrice}</span>
                  <span className="text-4xl font-extrabold text-white">${vvipPricing.yearly.price}</span>
                  <span className="text-xs text-gray-400">/ year</span>
                </div>
                <p className="text-xs text-gray-300 mt-2">
                  Comprehensive 12-month concierge partnership for multi-launch teams.
                </p>
              </div>

              <ul className="space-y-2 text-xs text-gray-300 pt-2 border-t border-white/5">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>365 Days Unrestricted VVIP Inner Circle</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>Priority graphics & marketing rollout</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>Continuous token strategy advisory</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-white/5">
              <a
                href={SITE_CONFIG.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 transition-all transform hover:scale-[1.02] cursor-pointer"
              >
                <span>Get VVIP Yearly ($1,995)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Lifetime Plan */}
          <div className="rounded-3xl bg-[#0F0F17] border border-amber-500/25 p-6 sm:p-8 flex flex-col justify-between shadow-xl relative hover:border-amber-400/50 transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold tracking-wider text-amber-300 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                  Lifetime VVIP
                </span>
                <span className="text-[11px] font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                  Strictly Limited
                </span>
              </div>

              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-gray-500 line-through">${vvipPricing.lifetime.originalPrice}</span>
                  <span className="text-4xl font-extrabold text-white">${vvipPricing.lifetime.price}</span>
                  <span className="text-xs text-gray-400">/ once</span>
                </div>
                <p className="text-xs text-amber-300/90 font-medium mt-1">
                  {vvipPricing.lifetime.badge}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Permanent lifetime concierge seat with highest echelon founder access.
                </p>
              </div>

              <ul className="space-y-2 text-xs text-gray-300 pt-2 border-t border-white/5">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>Permanent Lifetime Concierge Status</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>Top-tier queue for all upcoming projects</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>Zero future subscription renewals</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-white/5">
              <a
                href={SITE_CONFIG.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#181826] hover:bg-amber-500 hover:text-black text-amber-300 border border-amber-500/30 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
              >
                <span>Get Lifetime VVIP ($6,349)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Mandatory VVIP Group Joining Guidance Box */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#19152B] via-[#1F1B35] to-[#19152B] border-2 border-amber-400/40 shadow-2xl space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-heading text-lg sm:text-xl font-bold text-white">
              How to Join the VVIP Group
            </h3>
            <span className="text-xs text-amber-300 font-semibold">
              Concierge onboarding protocol
            </span>
          </div>
        </div>

        {/* Highlighted Instruction */}
        <div className="p-4 rounded-2xl bg-[#0D0D15] border border-amber-500/30 text-xs sm:text-sm text-gray-200 leading-relaxed space-y-2">
          <p className="font-medium text-white">
            {SITE_CONFIG.vvipGroup.joinGuidance}
          </p>
        </div>

        {/* Group Links & Representative Action Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          
          {/* WhatsApp VVIP Group Direct Link */}
          <a
            href={SITE_CONFIG.vvipGroup.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-2xl bg-[#13131F] hover:bg-[#1A1A2B] border border-[#25D366]/40 hover:border-[#25D366] text-white transition-all group shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] group-hover:scale-105 transition-transform">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">VVIP WhatsApp Group</div>
                <div className="text-[11px] text-gray-400">Open Group Link</div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-[#25D366]" />
          </a>

          {/* Telegram VVIP Group Direct Link */}
          <a
            href={SITE_CONFIG.vvipGroup.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-2xl bg-[#13131F] hover:bg-[#1A1A2B] border border-[#229ED9]/40 hover:border-[#229ED9] text-white transition-all group shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#229ED9]/10 border border-[#229ED9]/30 flex items-center justify-center text-[#229ED9] group-hover:scale-105 transition-transform">
                <Send className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">VVIP Telegram Group</div>
                <div className="text-[11px] text-gray-400">Open Group Link</div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-[#229ED9]" />
          </a>

          {/* Contact Representative on WhatsApp Button */}
          <button
            type="button"
            onClick={() => setRepModalOpen(true)}
            className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-amber-500/20 via-amber-500/30 to-amber-500/20 hover:from-amber-500/30 hover:to-amber-500/40 border border-amber-400/60 text-white transition-all group shadow-md cursor-pointer text-left"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300 group-hover:scale-105 transition-transform">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-amber-300">Contact Representative</div>
                <div className="text-[11px] text-gray-300">WhatsApp Onboarding</div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-amber-300 group-hover:translate-x-0.5 transition-transform" />
          </button>

        </div>
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

      {/* Main Luxury Concierge Action Box */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#1E1928] via-[#14121F] to-[#0A0A10] border-2 border-amber-400/60 shadow-2xl shadow-amber-950/40 relative overflow-hidden space-y-6">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs uppercase font-black tracking-widest text-amber-300">
            Exclusive White-Glove Support
          </span>
          <h3 className="font-heading text-2xl sm:text-3xl font-black text-white">
            Connect for VVIP Concierge Access
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            Directly initiate a private channel on our verified WhatsApp Business or Telegram to review your project scope and activate your VVIP membership.
          </p>
        </div>

        <div className="pt-2 flex flex-wrap items-center gap-4">
          <a
            href={SITE_CONFIG.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black font-black text-xs sm:text-sm shadow-xl shadow-amber-500/30 flex items-center gap-2 transition-all transform hover:scale-[1.02]"
          >
            <Crown className="w-4 h-4" />
            <span>Join VVIP via WhatsApp Business</span>
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

        {/* Serious Inquiries Notice at bottom of contact button */}
        <div className="pt-4 border-t border-white/10">
          <p className="text-xs text-amber-300/90 font-medium leading-relaxed">
            {SITE_CONFIG.seriousInquiryNotice}
          </p>
        </div>
      </div>

      {/* Representative Onboarding Modal */}
      {repModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setRepModalOpen(false)}
        >
          <div 
            className="bg-[#0F0F17] border-2 border-amber-400/50 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-white">Representative Support</h3>
                <span className="text-xs text-amber-300 font-semibold">VVIP Onboarding Concierge</span>
              </div>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed">
              {SITE_CONFIG.vvipGroup.joinGuidance}
            </p>

            <div className="p-3.5 rounded-xl bg-[#151522] border border-white/10 text-xs text-gray-300">
              <span className="text-amber-300 font-semibold block mb-1">Official WhatsApp Support:</span>
              Please reach out directly through our main WhatsApp Business support channel. Our representative will verify your payment and provide immediate group entrance.
            </div>

            <div className="space-y-2.5 pt-2">
              <a
                href={SITE_CONFIG.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <span>Proceed to WhatsApp Business</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={() => setRepModalOpen(false)}
                className="w-full py-2.5 px-4 rounded-xl bg-[#171724] hover:bg-[#202030] text-gray-300 text-xs font-semibold transition-all cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Notice */}
      <div className="space-y-4">
        <NoticeBanner type="completion" />
        <NoticeBanner type="payment" />
      </div>

    </div>
  );
};
