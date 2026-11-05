import React from 'react';
import { PageRoute } from '../types';
import { PACKAGE_CONFIG, SITE_CONFIG } from '../siteConfig';
import { NoticeBanner } from '../components/NoticeBanner';
import { PackageAdvanceNotice } from '../components/PackageAdvanceNotice';
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
  Coins,
  UserCheck,
  Flame,
  Lock
} from 'lucide-react';

interface PackagesPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const PackagesPage: React.FC<PackagesPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-4xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Exclusive Bespoke Launchpad</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
          Meme Coin Creation <span className="text-gold-gradient">Packages</span>
        </h1>
        <p className="text-base sm:text-lg font-bold text-amber-300 max-w-3xl mx-auto leading-relaxed">
          {SITE_CONFIG.standOutHook}
        </p>
        <p className="text-xs sm:text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Comprehensive project preparation and launch support tiers. Each package card outlines everything included, delivery turnaround, and blockchain requirements.
        </p>
      </div>

      {/* 15 Projects/Year Exclusivity & 1-on-1 Solo Management Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Exclusivity Cap */}
        <div className="p-6 rounded-3xl bg-gradient-to-b from-[#181424] to-[#0E0C17] border-2 border-amber-500/30 space-y-3 shadow-xl">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[11px] font-extrabold uppercase tracking-wider">
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              <span>Strict Quota • 15 Projects / Year</span>
            </span>
            <span className="text-xs font-mono font-bold text-amber-400">
              Acceptance: Top 10%
            </span>
          </div>
          <h3 className="font-heading text-lg sm:text-xl font-bold text-white">
            Selective Client Onboarding
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            {SITE_CONFIG.exclusivityNotice}
          </p>
          <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-gray-400">
            <span className="text-amber-300">• 15 Projects Maximum</span>
            <span className="text-rose-400">• 90% Requests Declined</span>
            <span className="text-emerald-400">• 100% Focus on Serious Founders</span>
          </div>
        </div>

        {/* 1-on-1 Solo Management Guarantee */}
        <div className="p-6 rounded-3xl bg-gradient-to-b from-[#121824] to-[#0B0F17] border-2 border-emerald-500/30 space-y-3 shadow-xl">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[11px] font-extrabold uppercase tracking-wider">
              <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Direct Founder Execution</span>
            </span>
            <span className="text-xs font-mono font-bold text-emerald-400">
              Zero Data Compromise
            </span>
          </div>
          <h3 className="font-heading text-lg sm:text-xl font-bold text-white">
            Solely Managed 1-on-1 for Absolute Privacy
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            {SITE_CONFIG.soloManagementGuarantee}
          </p>
          <div className="pt-2 flex items-center gap-2 text-xs font-medium text-emerald-300/90">
            <Lock className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
            <span>Coin Creation • Listing • Branding • Socials • Email • Website</span>
          </div>
        </div>

      </div>

      {/* Support Period & Advance Fee Banner */}
      <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#171422] via-[#1A1629] to-[#171422] border-2 border-amber-500/40 text-xs sm:text-sm text-gray-200 leading-relaxed shadow-lg">
        <div className="flex items-start gap-3">
          <Clock className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="text-amber-300 font-extrabold uppercase tracking-wide block">
              Package Support Periods & Operational Scope
            </strong>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Included package support periods (e.g. 14 Days for Advanced, 21 Days for Business, 30 Days for Pro) cover operational guidance and standard troubleshooting for delivered deliverables, and do not constitute unlimited revision labor.
            </p>
          </div>
        </div>
      </div>

      {/* 3 Standalone Full Package Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* ================= PACKAGE 1: ADVANCED ================= */}
        <div className="rounded-3xl bg-[#0F0F17] border border-amber-500/25 p-6 sm:p-8 flex flex-col justify-between shadow-xl relative">
          <div className="space-y-6">
            
            <PackageAdvanceNotice 
              packageName={PACKAGE_CONFIG.advanced.name} 
              advanceFeeAmount={PACKAGE_CONFIG.advanced.advanceFee} 
            />

            {/* Header / Discount */}
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-bold tracking-wider text-amber-300 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                {PACKAGE_CONFIG.advanced.badge}
              </span>
              <span className="text-sm sm:text-base font-black text-emerald-300 bg-emerald-950/90 border-2 border-emerald-400/60 px-4 py-1.5 rounded-xl shadow-lg shadow-emerald-950/70 tracking-wider uppercase">
                SAVE ${PACKAGE_CONFIG.advanced.discount}
              </span>
            </div>

            {/* Delivery Turnaround Badge */}
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
              <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>{PACKAGE_CONFIG.advanced.deliveryTime}</span>
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
            <div className="p-5 rounded-2xl bg-[#151522] border border-amber-500/20 space-y-3">
              <div className="flex items-baseline gap-3">
                <span className="text-sm text-gray-500 line-through">
                  ${PACKAGE_CONFIG.advanced.originalPrice}
                </span>
                <span className="text-4xl font-extrabold text-white">
                  ${PACKAGE_CONFIG.advanced.price}
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-amber-500/15 border border-amber-400/40 text-xs text-amber-200 flex items-center justify-between">
                <span className="font-bold text-gray-200">Advance Fee Required:</span>
                <span className="text-sm font-black text-amber-300 underline decoration-amber-400">{PACKAGE_CONFIG.advanced.advanceFee}</span>
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
                <strong className="text-amber-300 block mb-0.5">Advance SOL Fee:</strong>
                <p className="text-[11px] text-gray-400">
                  {PACKAGE_CONFIG.advanced.advanceFee} is required up front as part of the package terms to proceed with the meme coin project. Work begins only after the advance fee is received.
                </p>
              </div>

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
                <strong className="text-amber-300 block mb-0.5">Support Period ({PACKAGE_CONFIG.advanced.supportPeriod}):</strong>
                <p className="text-[11px] text-gray-400">
                  {PACKAGE_CONFIG.advanced.supportPeriod} operational guidance and standard troubleshooting for delivered deliverables. (Does not constitute unlimited revision labor).
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
            
            <PackageAdvanceNotice 
              packageName={PACKAGE_CONFIG.business.name} 
              advanceFeeAmount={PACKAGE_CONFIG.business.advanceFee} 
            />

            {/* Header / Discount */}
            <div className="flex items-center justify-between pt-2">
              <span className="text-xs uppercase font-bold tracking-wider text-amber-300">
                Expanded Launch Kit
              </span>
              <span className="text-sm sm:text-base font-black text-emerald-300 bg-emerald-950/90 border-2 border-emerald-400/60 px-4 py-1.5 rounded-xl shadow-lg shadow-emerald-950/70 tracking-wider uppercase">
                SAVE ${PACKAGE_CONFIG.business.discount}
              </span>
            </div>

            {/* Delivery Turnaround Badge */}
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
              <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>{PACKAGE_CONFIG.business.deliveryTime}</span>
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
            <div className="p-5 rounded-2xl bg-[#181828] border border-amber-500/30 space-y-3">
              <div className="flex items-baseline gap-3">
                <span className="text-sm text-gray-500 line-through">
                  ${PACKAGE_CONFIG.business.originalPrice}
                </span>
                <span className="text-4xl font-black text-gold-gradient">
                  ${PACKAGE_CONFIG.business.price}
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-amber-500/15 border border-amber-400/40 text-xs text-amber-200 flex items-center justify-between">
                <span className="font-bold text-gray-200">Advance Fee Required:</span>
                <span className="text-sm font-black text-amber-300 underline decoration-amber-400">{PACKAGE_CONFIG.business.advanceFee}</span>
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
                <strong className="text-amber-300 block mb-0.5">Advance SOL Fee:</strong>
                <p className="text-[11px] text-gray-400">
                  {PACKAGE_CONFIG.business.advanceFee} is required up front as part of the package terms to proceed with the meme coin project. Work begins only after the advance fee is received.
                </p>
              </div>

              <div>
                <strong className="text-amber-300 block mb-0.5">Marketing Preparation:</strong>
                <p className="text-[11px] text-gray-400">
                  Includes strategic launch roadmap and channel architecture. Direct ad spend remains separate.
                </p>
              </div>

              <div>
                <strong className="text-amber-300 block mb-0.5">Support Period ({PACKAGE_CONFIG.business.supportPeriod}):</strong>
                <p className="text-[11px] text-gray-400">
                  {PACKAGE_CONFIG.business.supportPeriod} operational guidance and standard troubleshooting for delivered deliverables. (Does not constitute unlimited revision labor).
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
            
            <PackageAdvanceNotice 
              packageName={PACKAGE_CONFIG.pro.name} 
              advanceFeeAmount={PACKAGE_CONFIG.pro.advanceFee} 
            />

            {/* Header / Discount */}
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-bold tracking-wider text-amber-300 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                {PACKAGE_CONFIG.pro.badge}
              </span>
              <span className="text-sm sm:text-base font-black text-emerald-300 bg-emerald-950/90 border-2 border-emerald-400/60 px-4 py-1.5 rounded-xl shadow-lg shadow-emerald-950/70 tracking-wider uppercase">
                SAVE ${PACKAGE_CONFIG.pro.discount}
              </span>
            </div>

            {/* Delivery Turnaround Badge */}
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
              <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>{PACKAGE_CONFIG.pro.deliveryTime}</span>
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
            <div className="p-5 rounded-2xl bg-[#151522] border border-amber-500/20 space-y-3">
              <div className="flex items-baseline gap-3">
                <span className="text-sm text-gray-500 line-through">
                  ${PACKAGE_CONFIG.pro.originalPrice}
                </span>
                <span className="text-4xl font-extrabold text-white">
                  ${PACKAGE_CONFIG.pro.price}
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-amber-500/15 border border-amber-400/40 text-xs text-amber-200 flex items-center justify-between">
                <span className="font-bold text-gray-200">Advance Fee Required:</span>
                <span className="text-sm font-black text-amber-300 underline decoration-amber-400">{PACKAGE_CONFIG.pro.advanceFee}</span>
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
                <strong className="text-amber-300 block mb-0.5">Advance SOL Fee:</strong>
                <p className="text-[11px] text-gray-400">
                  {PACKAGE_CONFIG.pro.advanceFee} is required up front as part of the package terms to proceed with the meme coin project. Work begins only after the advance fee is received.
                </p>
              </div>

              <div>
                <strong className="text-amber-300 block mb-0.5">Liquidity & Marketing Assistance:</strong>
                <p className="text-[11px] text-gray-400">
                  Assistance with pool modeling, advertising planning, and post-launch scaling frameworks.
                </p>
              </div>

              <div>
                <strong className="text-amber-300 block mb-0.5">Support Period ({PACKAGE_CONFIG.pro.supportPeriod}):</strong>
                <p className="text-[11px] text-gray-400">
                  {PACKAGE_CONFIG.pro.supportPeriod} operational guidance and standard troubleshooting for delivered deliverables. (Does not constitute unlimited revision labor).
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
