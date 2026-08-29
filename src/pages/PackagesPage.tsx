import React from 'react';
import { PageRoute } from '../types';
import { PACKAGE_CONFIG, SITE_CONFIG } from '../siteConfig';
import { NoticeBanner } from '../components/NoticeBanner';
import { 
  Check, 
  ArrowRight, 
  Info, 
  Layers, 
  Sparkles, 
  Clock, 
  FileText, 
  DollarSign, 
  ShieldAlert, 
  HelpCircle,
  Megaphone,
  Globe,
  Share2,
  PieChart,
  Coins
} from 'lucide-react';

interface PackagesPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const PackagesPage: React.FC<PackagesPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Transparent Service Tiers</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
          Meme Coin Creation <span className="text-gold-gradient">Packages</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
          Comprehensive project preparation and launch support tiers. Each package card outlines everything included, optional add-on services, and blockchain requirements.
        </p>
      </div>

      {/* 3 Standalone Full Package Cards (NO Comparison Table) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* ================= PACKAGE 1: ADVANCED ================= */}
        <div className="rounded-3xl bg-[#0F0F17] border border-amber-500/25 p-6 sm:p-8 flex flex-col justify-between shadow-xl relative">
          <div className="space-y-6">
            
            {/* Header / Discount */}
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-bold tracking-wider text-amber-300 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                {PACKAGE_CONFIG.advanced.badge}
              </span>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                SAVE ${PACKAGE_CONFIG.advanced.discount}
              </span>
            </div>

            <div>
              <h2 className="font-heading text-3xl font-extrabold text-white">
                {PACKAGE_CONFIG.advanced.name}
              </h2>
              <p className="text-xs text-gray-400 mt-1">
                {PACKAGE_CONFIG.advanced.description}
              </p>
            </div>

            {/* Price Box */}
            <div className="p-5 rounded-2xl bg-[#151522] border border-amber-500/20 space-y-2">
              <div className="flex items-baseline gap-3">
                <span className="text-sm text-gray-500 line-through">
                  ${PACKAGE_CONFIG.advanced.originalPrice}
                </span>
                <span className="text-4xl font-extrabold text-white">
                  ${PACKAGE_CONFIG.advanced.price}
                </span>
              </div>
              <div className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                <Coins className="w-4 h-4 text-amber-400" />
                <span>Project Requirement: {PACKAGE_CONFIG.advanced.solRequirement}</span>
              </div>
              <p className="text-[11px] text-gray-400 leading-snug pt-1">
                This SOL amount is part of the project's blockchain/launch requirement. It is <strong className="text-white">not a payment</strong> sent through this website. Final payment & arrangements are discussed directly.
              </p>
            </div>

            {/* Included Services */}
            <div className="space-y-3">
              <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
                <Check className="w-4 h-4 text-amber-400" />
                <span>Included In Advanced</span>
              </h4>
              <ul className="space-y-2.5 text-xs text-gray-300">
                {PACKAGE_CONFIG.advanced.includedFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Detailed Explanations */}
            <div className="p-4 rounded-xl bg-[#13131C] border border-white/5 space-y-3 text-xs text-gray-300">
              <div>
                <strong className="text-amber-300 block mb-0.5">Logo Design Included:</strong>
                <p className="text-[11px] text-gray-400">
                  No image upload needed. Simply describe color, style, mascot, and symbol in the requirements form.
                </p>
              </div>

              <div>
                <strong className="text-amber-300 block mb-0.5">Advertising Not Included:</strong>
                <p className="text-[11px] text-gray-400">
                  Promotional services are optional with separate budgets ($100, $200, $300, $500, $1,000). No views or buyers are guaranteed.
                </p>
              </div>

              <div>
                <strong className="text-amber-300 block mb-0.5">Support Period:</strong>
                <p className="text-[11px] text-gray-400">
                  {PACKAGE_CONFIG.advanced.supportPeriod} guidance for delivered project work. (Does not mean unlimited major modifications).
                </p>
              </div>
            </div>

            {/* Optional Paid Add-ons */}
            <div className="space-y-2 pt-2 border-t border-white/5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                Optional Paid Add-ons:
              </span>
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between items-center bg-[#13131C] p-2.5 rounded-lg">
                  <span className="text-gray-300">Social Media Account Setup</span>
                  <span className="text-amber-300 font-bold">+$100</span>
                </div>
                <div className="flex justify-between items-center bg-[#13131C] p-2.5 rounded-lg">
                  <span className="text-gray-300">New Dedicated Website Setup</span>
                  <span className="text-amber-300 font-bold">+$100</span>
                </div>
                <div className="flex justify-between items-center bg-[#13131C] p-2.5 rounded-lg">
                  <span className="text-gray-300">Additional Custom Changes</span>
                  <span className="text-amber-300 font-bold">+$25</span>
                </div>
              </div>
            </div>

          </div>

          {/* Action Button */}
          <div className="pt-8 mt-6 border-t border-white/5">
            <button
              onClick={() => onNavigate("requirements")}
              className="w-full py-3.5 rounded-xl bg-[#1A1A28] hover:bg-amber-500 hover:text-black text-amber-300 font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Submit Requirements for Advanced</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* ================= PACKAGE 2: BUSINESS ================= */}
        <div className="rounded-3xl bg-gradient-to-b from-[#18151F] via-[#12121B] to-[#0D0D14] border-2 border-amber-400/50 p-6 sm:p-8 flex flex-col justify-between shadow-2xl shadow-amber-950/40 relative">
          
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-yellow-500 text-black text-[11px] uppercase font-black px-4 py-1 rounded-full shadow-lg">
            {PACKAGE_CONFIG.business.badge}
          </div>

          <div className="space-y-6">
            
            {/* Header / Discount */}
            <div className="flex items-center justify-between pt-2">
              <span className="text-xs uppercase font-bold tracking-wider text-amber-300">
                Expanded Launch Kit
              </span>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                SAVE ${PACKAGE_CONFIG.business.discount}
              </span>
            </div>

            <div>
              <h2 className="font-heading text-3xl font-extrabold text-white">
                {PACKAGE_CONFIG.business.name}
              </h2>
              <p className="text-xs text-gray-400 mt-1">
                {PACKAGE_CONFIG.business.description}
              </p>
            </div>

            {/* Price Box */}
            <div className="p-5 rounded-2xl bg-[#181828] border border-amber-500/30 space-y-2">
              <div className="flex items-baseline gap-3">
                <span className="text-sm text-gray-500 line-through">
                  ${PACKAGE_CONFIG.business.originalPrice}
                </span>
                <span className="text-4xl font-black text-gold-gradient">
                  ${PACKAGE_CONFIG.business.price}
                </span>
              </div>
              <div className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                <Coins className="w-4 h-4 text-amber-400" />
                <span>Project Requirement: {PACKAGE_CONFIG.business.solRequirement}</span>
              </div>
              <p className="text-[11px] text-gray-400 leading-snug pt-1">
                Part of the project's blockchain launch requirements. No cryptocurrency transfer is processed on this site.
              </p>
            </div>

            {/* Included Services */}
            <div className="space-y-3">
              <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
                <Check className="w-4 h-4 text-amber-400" />
                <span>Included In Business</span>
              </h4>
              <ul className="space-y-2.5 text-xs text-gray-200">
                {PACKAGE_CONFIG.business.includedFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Details */}
            <div className="p-4 rounded-xl bg-[#151522] border border-amber-500/15 space-y-3 text-xs text-gray-300">
              <div>
                <strong className="text-amber-300 block mb-0.5">Marketing Preparation:</strong>
                <p className="text-[11px] text-gray-400">
                  Includes strategic launch roadmap and channel architecture. Direct ad spend remains separate.
                </p>
              </div>

              <div>
                <strong className="text-amber-300 block mb-0.5">Support Period:</strong>
                <p className="text-[11px] text-gray-400">
                  {PACKAGE_CONFIG.business.supportPeriod} extended guidance and troubleshooting.
                </p>
              </div>
            </div>

            {/* Optional Paid Add-ons */}
            <div className="space-y-2 pt-2 border-t border-amber-500/20">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                Optional Paid Add-ons:
              </span>
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between items-center bg-[#151522] p-2.5 rounded-lg">
                  <span className="text-gray-300">Social Media Account Setup</span>
                  <span className="text-amber-300 font-bold">+$100</span>
                </div>
                <div className="flex justify-between items-center bg-[#151522] p-2.5 rounded-lg">
                  <span className="text-gray-300">New Dedicated Website Setup</span>
                  <span className="text-amber-300 font-bold">+$100</span>
                </div>
                <div className="flex justify-between items-center bg-[#151522] p-2.5 rounded-lg">
                  <span className="text-gray-300">Additional Custom Changes</span>
                  <span className="text-amber-300 font-bold">+$25</span>
                </div>
              </div>
            </div>

          </div>

          {/* Action Button */}
          <div className="pt-8 mt-6 border-t border-amber-500/20">
            <button
              onClick={() => onNavigate("requirements")}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black font-extrabold text-xs transition-all shadow-lg shadow-amber-500/30 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Submit Requirements for Business</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ================= PACKAGE 3: PRO ================= */}
        <div className="rounded-3xl bg-[#0F0F17] border border-amber-500/25 p-6 sm:p-8 flex flex-col justify-between shadow-xl relative">
          <div className="space-y-6">
            
            {/* Header / Discount */}
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-bold tracking-wider text-amber-300 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                {PACKAGE_CONFIG.pro.badge}
              </span>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                SAVE ${PACKAGE_CONFIG.pro.discount}
              </span>
            </div>

            <div>
              <h2 className="font-heading text-3xl font-extrabold text-white">
                {PACKAGE_CONFIG.pro.name}
              </h2>
              <p className="text-xs text-gray-400 mt-1">
                {PACKAGE_CONFIG.pro.description}
              </p>
            </div>

            {/* Price Box */}
            <div className="p-5 rounded-2xl bg-[#151522] border border-amber-500/20 space-y-2">
              <div className="flex items-baseline gap-3">
                <span className="text-sm text-gray-500 line-through">
                  ${PACKAGE_CONFIG.pro.originalPrice}
                </span>
                <span className="text-4xl font-extrabold text-white">
                  ${PACKAGE_CONFIG.pro.price}
                </span>
              </div>
              <div className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                <Coins className="w-4 h-4 text-amber-400" />
                <span>Project Requirement: {PACKAGE_CONFIG.pro.solRequirement}</span>
              </div>
              <p className="text-[11px] text-gray-400 leading-snug pt-1">
                Part of the project's blockchain requirements. All scope and payment terms are confirmed directly with the client.
              </p>
            </div>

            {/* Included Services */}
            <div className="space-y-3">
              <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
                <Check className="w-4 h-4 text-amber-400" />
                <span>Included In Pro</span>
              </h4>
              <ul className="space-y-2.5 text-xs text-gray-300">
                {PACKAGE_CONFIG.pro.includedFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Details */}
            <div className="p-4 rounded-xl bg-[#13131C] border border-white/5 space-y-3 text-xs text-gray-300">
              <div>
                <strong className="text-amber-300 block mb-0.5">Liquidity & Marketing Assistance:</strong>
                <p className="text-[11px] text-gray-400">
                  Assistance with pool modeling, advertising planning, and post-launch scaling frameworks.
                </p>
              </div>

              <div>
                <strong className="text-amber-300 block mb-0.5">Support Period:</strong>
                <p className="text-[11px] text-gray-400">
                  {PACKAGE_CONFIG.pro.supportPeriod} priority support channel and consultation.
                </p>
              </div>
            </div>

            {/* Optional Paid Add-ons */}
            <div className="space-y-2 pt-2 border-t border-white/5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                Optional Paid Add-ons:
              </span>
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between items-center bg-[#13131C] p-2.5 rounded-lg">
                  <span className="text-gray-300">Social Media Account Setup</span>
                  <span className="text-amber-300 font-bold">+$100</span>
                </div>
                <div className="flex justify-between items-center bg-[#13131C] p-2.5 rounded-lg">
                  <span className="text-gray-300">New Dedicated Website Setup</span>
                  <span className="text-amber-300 font-bold">+$100</span>
                </div>
                <div className="flex justify-between items-center bg-[#13131C] p-2.5 rounded-lg">
                  <span className="text-gray-300">Additional Custom Changes</span>
                  <span className="text-amber-300 font-bold">+$25</span>
                </div>
              </div>
            </div>

          </div>

          {/* Action Button */}
          <div className="pt-8 mt-6 border-t border-white/5">
            <button
              onClick={() => onNavigate("requirements")}
              className="w-full py-3.5 rounded-xl bg-[#1A1A28] hover:bg-amber-500 hover:text-black text-amber-300 font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Submit Requirements for Pro</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* KEY SERVICE GUIDELINES & EXPLANATIONS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
        
        {/* Token Allocation Info */}
        <div className="p-6 rounded-2xl bg-[#111119] border border-amber-500/20 space-y-3">
          <div className="flex items-center gap-2 text-amber-300 font-bold text-sm font-heading">
            <PieChart className="w-4 h-4 text-amber-400" />
            <span>Token Allocation Options</span>
          </div>
          <p className="text-xs text-gray-300 leading-relaxed">
            During project setup, you can structure your team and launch allocation (e.g. 10%, 20%, 30%, 40%, 50%). All token allocations must be planned and disclosed responsibly according to transparent Web3 standards.
          </p>
        </div>

        {/* Liquidity Assistance Info */}
        <div className="p-6 rounded-2xl bg-[#111119] border border-amber-500/20 space-y-3">
          <div className="flex items-center gap-2 text-amber-300 font-bold text-sm font-heading">
            <Coins className="w-4 h-4 text-amber-400" />
            <span>Liquidity Assistance Notice</span>
          </div>
          <p className="text-xs text-gray-300 leading-relaxed">
            Liquidity is a separate project expense and will be discussed directly with the client according to the chosen launch mechanism. We do not provide a payment wallet or guarantee trading volume, market capitalization, or investors.
          </p>
        </div>

      </div>

      {/* Payment Explanation & Important Notices */}
      <div className="space-y-4">
        <NoticeBanner type="payment" />
        <NoticeBanner type="completion" />
        <NoticeBanner type="risk" />
      </div>

    </div>
  );
};
