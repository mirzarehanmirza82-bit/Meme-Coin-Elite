import React, { useState } from 'react';
import { PageRoute } from '../types';
import { SITE_CONFIG } from '../siteConfig';
import { NoticeBanner } from '../components/NoticeBanner';
import { 
  Crown, 
  Zap, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck,
  Star,
  Users,
  Lock,
  Sparkles,
  DollarSign,
  AlertCircle,
  ExternalLink
} from 'lucide-react';

interface VIPPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const VIPPage: React.FC<VIPPageProps> = ({ onNavigate }) => {
  const [repModalOpen, setRepModalOpen] = useState(false);

  const vipPricing = SITE_CONFIG.vipGroup.pricing;

  const benefits = [
    {
      title: "Priority Communication & Support",
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      description: "Direct access to our dedicated VIP support line with expedited turnaround for questions, token updates, and advisory."
    },
    {
      title: "Exclusive Alpha & Market Insights",
      icon: <Star className="w-5 h-5 text-amber-400" />,
      description: "Curated research, trending meme token narratives, DEX strategy guides, and ecosystem signals shared directly in the group."
    },
    {
      title: "VIP WhatsApp & Telegram Group Access",
      icon: <Users className="w-5 h-5 text-amber-400" />,
      description: "Private networking hub with vetted founders, serious project creators, and experienced community builders."
    },
    {
      title: "Expedited Asset & Branding Review",
      icon: <Clock className="w-5 h-5 text-amber-400" />,
      description: "Priority queue placement for custom logo iterations, graphical collateral, and launch metadata checks."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider shadow-sm">
          <Crown className="w-3.5 h-3.5 text-amber-400" />
          <span>Exclusive Private Community</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
          VIP <span className="text-gold-gradient">Membership & Community</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
          Accelerate your meme coin journey with private group access, expert guidance, market insights, and prioritized client handling.
        </p>
      </div>

      {/* VIP Pricing Tiers */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
            VIP Membership <span className="text-gold-gradient">Plans</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-400">
            Select the membership period that fits your project roadmap.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Monthly Plan */}
          <div className="rounded-3xl bg-[#0F0F17] border border-amber-500/25 p-6 sm:p-8 flex flex-col justify-between shadow-xl relative hover:border-amber-400/50 transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold tracking-wider text-amber-300 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                  {vipPricing.monthly.label}
                </span>
                <span className="text-xs text-gray-400">30-Day Pass</span>
              </div>

              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-gray-500 line-through">${vipPricing.monthly.originalPrice}</span>
                  <span className="text-4xl font-extrabold text-white">${vipPricing.monthly.price}</span>
                  <span className="text-xs text-gray-400">/ month</span>
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  Standard flexible monthly membership for active founders.
                </p>
              </div>

              <ul className="space-y-2 text-xs text-gray-300 pt-2 border-t border-white/5">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>VIP WhatsApp & Telegram Groups</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>Daily curated market alpha</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>Direct founder network access</span>
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
                <span>Get Monthly ($95)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Yearly Plan */}
          <div className="rounded-3xl bg-[#14121E] border-2 border-amber-400/60 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-black text-[11px] font-black uppercase tracking-wider shadow-md">
              Most Popular • {vipPricing.yearly.savings}
            </div>

            <div className="space-y-4 pt-1">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold tracking-wider text-amber-300 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30">
                  {vipPricing.yearly.label}
                </span>
                <span className="text-xs font-bold text-green-400 bg-green-500/10 px-2.5 py-0.5 rounded-full border border-green-500/20">
                  Best Value
                </span>
              </div>

              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-gray-500 line-through">${vipPricing.yearly.originalPrice}</span>
                  <span className="text-4xl font-extrabold text-white">${vipPricing.yearly.price}</span>
                  <span className="text-xs text-gray-400">/ year</span>
                </div>
                <p className="text-xs text-gray-300 mt-2">
                  Full 12-month access with dedicated priority perks and major savings.
                </p>
              </div>

              <ul className="space-y-2 text-xs text-gray-300 pt-2 border-t border-white/5">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>365 Days Uninterrupted VIP Access</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>Priority fast-track branding support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>Direct consulting sessions with team</span>
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
                <span>Get Yearly Pass ($999)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Lifetime Plan */}
          <div className="rounded-3xl bg-[#0F0F17] border border-amber-500/25 p-6 sm:p-8 flex flex-col justify-between shadow-xl relative hover:border-amber-400/50 transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold tracking-wider text-amber-300 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                  Lifetime Pass
                </span>
                <span className="text-[11px] font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                  Limited Slots
                </span>
              </div>

              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-gray-500 line-through">${vipPricing.lifetime.originalPrice}</span>
                  <span className="text-4xl font-extrabold text-white">${vipPricing.lifetime.price}</span>
                  <span className="text-xs text-gray-400">/ once</span>
                </div>
                <p className="text-xs text-amber-300/90 font-medium mt-1">
                  {vipPricing.lifetime.badge}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  One-time investment for permanent VIP perks and future community upgrades.
                </p>
              </div>

              <ul className="space-y-2 text-xs text-gray-300 pt-2 border-t border-white/5">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>Permanent Lifetime VIP Status</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>Permanent access to all future groups</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>Zero recurring subscription fees</span>
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
                <span>Get Lifetime ($4,499)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Mandatory VIP Group Joining Guidance Box */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#171526] via-[#1A182E] to-[#171526] border-2 border-amber-400/40 shadow-2xl space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-heading text-lg sm:text-xl font-bold text-white">
              How to Join the VIP Group
            </h3>
            <span className="text-xs text-amber-300 font-semibold">
              Step-by-step onboarding protocol
            </span>
          </div>
        </div>

        {/* Highlighted Instruction */}
        <div className="p-4 rounded-2xl bg-[#0D0D15] border border-amber-500/30 text-xs sm:text-sm text-gray-200 leading-relaxed space-y-2">
          <p className="font-medium text-white">
            {SITE_CONFIG.vipGroup.joinGuidance}
          </p>
        </div>

        {/* Group Links & Representative Action Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          
          {/* WhatsApp VIP Group Direct Link */}
          <a
            href={SITE_CONFIG.vipGroup.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-2xl bg-[#13131F] hover:bg-[#1A1A2B] border border-[#25D366]/40 hover:border-[#25D366] text-white transition-all group shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] group-hover:scale-105 transition-transform">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">VIP WhatsApp Group</div>
                <div className="text-[11px] text-gray-400">Open Group Link</div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-[#25D366]" />
          </a>

          {/* Telegram VIP Group Direct Link */}
          <a
            href={SITE_CONFIG.vipGroup.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-2xl bg-[#13131F] hover:bg-[#1A1A2B] border border-[#229ED9]/40 hover:border-[#229ED9] text-white transition-all group shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#229ED9]/10 border border-[#229ED9]/30 flex items-center justify-center text-[#229ED9] group-hover:scale-105 transition-transform">
                <Send className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">VIP Telegram Group</div>
                <div className="text-[11px] text-gray-400">Open Group Link</div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-[#229ED9]" />
          </a>

          {/* Contact Representative on WhatsApp Button (Button added as requested) */}
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

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {benefits.map((benefit, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-[#0F0F17] border border-amber-500/20 space-y-2.5 shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                {benefit.icon}
              </div>
              <h4 className="font-heading text-sm font-bold text-white">
                {benefit.title}
              </h4>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed pl-13">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>

      {/* Main VIP Action Card */}
      <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#1C1826] via-[#12121D] to-[#0A0A10] border-2 border-amber-400/50 shadow-2xl relative overflow-hidden space-y-6">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs uppercase font-extrabold tracking-widest text-amber-300">
            Direct Support Line
          </span>
          <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
            Connect for VIP Access
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            Reach out via our verified WhatsApp Business channel to verify membership slots, complete onboarding, and join the private groups.
          </p>
        </div>

        <div className="pt-2 flex flex-wrap items-center gap-4">
          <a
            href={SITE_CONFIG.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black font-extrabold text-xs sm:text-sm shadow-xl shadow-amber-500/25 flex items-center gap-2 transition-all transform hover:scale-[1.02]"
          >
            <Crown className="w-4 h-4" />
            <span>Join VIP via WhatsApp Business</span>
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

      {/* VVIP Cross-Link */}
      <div className="p-6 rounded-2xl bg-[#0F0F17] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <h4 className="font-heading text-lg font-bold text-white">
            Looking for Concierge VVIP Tier?
          </h4>
          <p className="text-xs text-gray-400 mt-0.5">
            Explore our highest-tier VVIP concierge level for large-scale meme coin operations.
          </p>
        </div>
        <button
          onClick={() => onNavigate("vvip")}
          className="px-5 py-2.5 rounded-xl bg-[#1A1A28] hover:bg-[#252538] text-amber-300 border border-amber-500/30 font-bold text-xs flex items-center gap-2 transition-all cursor-pointer flex-shrink-0"
        >
          <span>View VVIP Tier</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
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
                <span className="text-xs text-amber-300 font-semibold">Group Onboarding Assistant</span>
              </div>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed">
              {SITE_CONFIG.vipGroup.joinGuidance}
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

      {/* Notices */}
      <div className="space-y-4">
        <NoticeBanner type="payment" />
        <NoticeBanner type="startup" />
      </div>

    </div>
  );
};
