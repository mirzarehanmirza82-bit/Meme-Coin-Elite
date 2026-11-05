import React from 'react';
import { PageRoute } from '../types';
import { PACKAGE_CONFIG, SITE_CONFIG } from '../siteConfig';
import { PROJECTS_DATA } from '../data/projectsData';
import { PackageAdvanceNotice } from '../components/PackageAdvanceNotice';
import { TestimonialTicker } from '../components/TestimonialTicker';
import { NoticeBanner } from '../components/NoticeBanner';
import { 
  Check, 
  ArrowRight, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  Layers, 
  FileEdit, 
  Cpu, 
  MessageSquare, 
  HelpCircle,
  Clock,
  Coins,
  TrendingUp,
  Lock,
  Eye,
  BarChart3,
  UserCheck,
  Flame,
  CalendarCheck
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full space-y-16 sm:space-y-24 py-6 sm:py-10">
      
      {/* 1. HERO SECTION */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-6 sm:pt-12">
        
        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-3xl h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

        {/* Hero Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#161622] border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-bold tracking-wider mb-6 shadow-md">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>MEME COIN CREATION • BRANDING • LAUNCH SUPPORT</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight max-w-5xl mx-auto leading-[1.15]">
          Your Vision, Our Expertise: <br className="hidden sm:inline" />
          <span className="text-gold-gradient">Launch Your Meme Coin Project Profitably</span>
        </h1>

        {/* Hook */}
        <p className="mt-6 text-base sm:text-xl font-bold text-amber-300 max-w-3xl mx-auto leading-relaxed">
          {SITE_CONFIG.standOutHook}
        </p>

        {/* Subheading */}
        <p className="mt-3 text-sm sm:text-base text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Professional meme coin creation, branding, project preparation and launch support — with clear requirements and direct client communication.
        </p>

        {/* Hero CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onNavigate("packages")}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-600 hover:from-amber-300 hover:to-yellow-500 text-black font-extrabold text-sm sm:text-base shadow-xl shadow-amber-500/25 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Explore Packages</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onNavigate("requirements")}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#151520] hover:bg-[#1C1C2C] text-white hover:text-amber-300 border border-amber-500/30 font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <FileEdit className="w-4 h-4 text-amber-400" />
            <span>Start Your Project</span>
          </button>
        </div>

        {/* Quick Highlights Strip */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto text-xs text-gray-300">
          <div className="p-3 rounded-xl bg-[#111118] border border-amber-500/15 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Zero In-App Payments</span>
          </div>
          <div className="p-3 rounded-xl bg-[#111118] border border-amber-500/15 flex items-center justify-center gap-2">
            <Coins className="w-4 h-4 text-amber-400" />
            <span>Custom Logo Included</span>
          </div>
          <div className="p-3 rounded-xl bg-[#111118] border border-amber-500/15 flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>Direct Communication</span>
          </div>
          <div className="p-3 rounded-xl bg-[#111118] border border-amber-500/15 flex items-center justify-center gap-2">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>Fast Turnaround</span>
          </div>
        </div>

      </section>

      {/* 1.5 EXCLUSIVITY & 1-ON-1 SOLO MANAGEMENT GUARANTEE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Card 1: 15 Exclusive Projects / Year Cap */}
          <div className="rounded-3xl bg-gradient-to-b from-[#161322] via-[#100E1A] to-[#0A0A10] border-2 border-amber-500/30 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none -mr-12 -mt-12"></div>
            
            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[11px] font-extrabold uppercase tracking-wider">
                  <Flame className="w-3.5 h-3.5 text-amber-400" />
                  <span>Strict Annual Quota</span>
                </span>
                <span className="text-xs font-mono font-bold text-gray-400">
                  Priority: Top 10% Serious Only
                </span>
              </div>

              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-black text-white">
                  Only 15 Exclusive Projects Accepted Per Year
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {SITE_CONFIG.exclusivityNotice}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2.5 pt-2 text-center">
                <div className="p-2.5 rounded-xl bg-[#181525] border border-amber-500/20">
                  <span className="text-[10px] text-gray-400 block uppercase">Annual Cap</span>
                  <span className="text-base sm:text-lg font-black text-amber-400">15 Total</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#181525] border border-rose-500/20">
                  <span className="text-[10px] text-gray-400 block uppercase">Declined</span>
                  <span className="text-base sm:text-lg font-black text-rose-400">90%</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#181525] border border-emerald-500/20">
                  <span className="text-[10px] text-gray-400 block uppercase">Accepted</span>
                  <span className="text-base sm:text-lg font-black text-emerald-400">Top 10%</span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
              <span>Strict selection ensures dedicated execution</span>
              <button
                onClick={() => onNavigate("requirements")}
                className="text-amber-400 font-bold hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>Apply for Slot</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: 1-on-1 Solo Management & Absolute Privacy */}
          <div className="rounded-3xl bg-gradient-to-b from-[#131622] via-[#0D101A] to-[#0A0A10] border-2 border-emerald-500/30 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none -mr-12 -mt-12"></div>
            
            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[11px] font-extrabold uppercase tracking-wider">
                  <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Solo Founder Execution</span>
                </span>
                <span className="text-xs font-mono font-bold text-emerald-400">
                  Absolute Privacy Guaranteed
                </span>
              </div>

              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-black text-white">
                  Managed Solely by Me: 1-on-1 Confidentiality
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {SITE_CONFIG.soloManagementGuarantee}
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-[#0F1420] border border-emerald-500/20 text-xs text-gray-300 space-y-1.5">
                <div className="font-bold text-white text-[11px] uppercase tracking-wider flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Zero Data Compromise Scope</span>
                </div>
                <p className="text-[11px] text-gray-400">
                  Initial coin creation • Listing • Branding • Social platform setup • Email configuration • Website design. No outside freelancers, no leaks.
                </p>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
              <span>Direct encrypted communication</span>
              <a
                href={SITE_CONFIG.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 font-bold hover:underline flex items-center gap-1"
              >
                <span>Direct WhatsApp Line</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Delivery Timelines Strip */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#0D0D14] border border-amber-500/25 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="p-3 rounded-xl bg-[#14141E] border border-amber-500/15 flex items-center justify-between sm:justify-center gap-3">
            <div className="text-left sm:text-center">
              <span className="text-[10px] text-gray-400 uppercase font-bold block">Advance Package</span>
              <span className="text-sm font-black text-emerald-400">Delivered within 5 days</span>
            </div>
            <Clock className="w-5 h-5 text-amber-400" />
          </div>

          <div className="p-3 rounded-xl bg-[#14141E] border border-amber-500/15 flex items-center justify-between sm:justify-center gap-3">
            <div className="text-left sm:text-center">
              <span className="text-[10px] text-gray-400 uppercase font-bold block">Business Package</span>
              <span className="text-sm font-black text-emerald-400">Delivered within 8 days</span>
            </div>
            <Clock className="w-5 h-5 text-amber-400" />
          </div>

          <div className="p-3 rounded-xl bg-[#14141E] border border-amber-500/15 flex items-center justify-between sm:justify-center gap-3">
            <div className="text-left sm:text-center">
              <span className="text-[10px] text-gray-400 uppercase font-bold block">Pro Package</span>
              <span className="text-sm font-black text-emerald-400">Delivered within 13 days</span>
            </div>
            <Clock className="w-5 h-5 text-amber-400" />
          </div>
        </div>
      </section>

      {/* 2. DIRECT CONSULTATION & INQUIRY NOTICE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#111118]/90 border border-amber-500/25 p-5 sm:p-6 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-5 shadow-lg">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#25D366] animate-ping"></span>
              <h4 className="font-heading text-base sm:text-lg font-bold text-white">
                Want More Information Before Ordering?
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 max-w-2xl">
              If you want to know more about our services, packages, project process, advance fee, or requirements before ordering, contact us first. We will explain the details and answer your questions directly.
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
      </section>

      {/* 3. PACKAGES PREVIEW SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/5 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
              <span>Service Tiers</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
              Launch Support Packages
            </h2>
            <p className="text-sm text-gray-400 mt-1 max-w-xl">
              Transparent service tiers designed to fit every project phase. Reference prices shown below; final scope agreed mutually before starting.
            </p>
          </div>

          <button
            onClick={() => onNavigate("packages")}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors"
          >
            <span>View Complete Details</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Advanced Package */}
          <div className="rounded-3xl bg-[#101017] border border-amber-500/20 p-6 sm:p-8 flex flex-col justify-between hover:border-amber-500/40 transition-all shadow-xl group">
            <div className="space-y-5">
              
              <PackageAdvanceNotice 
                compact={true} 
                packageName={PACKAGE_CONFIG.advanced.name} 
                advanceFeeAmount={PACKAGE_CONFIG.advanced.advanceFee} 
              />

              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold tracking-wider text-amber-400/90 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                  {PACKAGE_CONFIG.advanced.badge}
                </span>
                <span className="text-sm sm:text-base font-black text-emerald-300 bg-emerald-950/90 border-2 border-emerald-400/60 px-3.5 py-1 rounded-xl shadow-lg shadow-emerald-950/70 tracking-wider uppercase">
                  SAVE ${PACKAGE_CONFIG.advanced.discount}
                </span>
              </div>

              {/* Delivery Turnaround Badge */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
                <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{PACKAGE_CONFIG.advanced.deliveryTime}</span>
              </div>

              <div>
                <h3 className="font-heading text-2xl font-bold text-white">
                  {PACKAGE_CONFIG.advanced.name}
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  {PACKAGE_CONFIG.advanced.description}
                </p>
              </div>

              {/* Price display */}
              <div className="p-4 rounded-2xl bg-[#151522] border border-white/5 space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-xs text-gray-500 line-through">
                    ${PACKAGE_CONFIG.advanced.originalPrice}
                  </span>
                  <span className="text-3xl font-extrabold text-white">
                    ${PACKAGE_CONFIG.advanced.price}
                  </span>
                </div>
                <div className="p-2 rounded-lg bg-amber-500/15 border border-amber-400/40 text-xs text-amber-200 flex items-center justify-between">
                  <span className="font-bold text-gray-200 text-[11px]">Advance Fee:</span>
                  <span className="text-xs font-black text-amber-300 underline decoration-amber-400">{PACKAGE_CONFIG.advanced.advanceFee}</span>
                </div>
                <div className="text-[11px] text-amber-300/80 font-medium">
                  Project Requirement: {PACKAGE_CONFIG.advanced.solRequirement}
                </div>
              </div>

              {/* Top features list */}
              <ul className="space-y-2.5 text-xs text-gray-300">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Meme coin creation & smart configuration</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Logo design based on your instructions</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Token setup (10M, 100M, 1B, 10B)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Social media guidance (X, TG, Discord)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>{PACKAGE_CONFIG.advanced.supportPeriod} client support for delivered work</span>
                </li>
              </ul>

            </div>

            <div className="pt-6 mt-6 border-t border-white/5">
              <button
                onClick={() => onNavigate("requirements")}
                className="w-full py-3 rounded-xl bg-[#1A1A28] hover:bg-amber-500 hover:text-black text-amber-300 font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Select Advanced Package</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Business Package (Featured) */}
          <div className="rounded-3xl bg-gradient-to-b from-[#18151D] via-[#111119] to-[#0E0E15] border-2 border-amber-400/50 p-6 sm:p-8 flex flex-col justify-between shadow-2xl shadow-amber-950/50 relative group">
            
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-yellow-500 text-black text-[10px] uppercase font-black px-4 py-1 rounded-full shadow-md">
              {PACKAGE_CONFIG.business.badge}
            </div>

            <div className="space-y-5">
              
              <PackageAdvanceNotice 
                compact={true} 
                packageName={PACKAGE_CONFIG.business.name} 
                advanceFeeAmount={PACKAGE_CONFIG.business.advanceFee} 
              />

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs uppercase font-bold tracking-wider text-amber-300">
                  Full Branding & Token Kit
                </span>
                <span className="text-sm sm:text-base font-black text-emerald-300 bg-emerald-950/90 border-2 border-emerald-400/60 px-3.5 py-1 rounded-xl shadow-lg shadow-emerald-950/70 tracking-wider uppercase">
                  SAVE ${PACKAGE_CONFIG.business.discount}
                </span>
              </div>

              {/* Delivery Turnaround Badge */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
                <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{PACKAGE_CONFIG.business.deliveryTime}</span>
              </div>

              <div>
                <h3 className="font-heading text-2xl font-bold text-white">
                  {PACKAGE_CONFIG.business.name}
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  {PACKAGE_CONFIG.business.description}
                </p>
              </div>

              {/* Price display */}
              <div className="p-4 rounded-2xl bg-[#181826] border border-amber-500/30 space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-xs text-gray-500 line-through">
                    ${PACKAGE_CONFIG.business.originalPrice}
                  </span>
                  <span className="text-3xl font-black text-gold-gradient">
                    ${PACKAGE_CONFIG.business.price}
                  </span>
                </div>
                <div className="p-2 rounded-lg bg-amber-500/15 border border-amber-400/40 text-xs text-amber-200 flex items-center justify-between">
                  <span className="font-bold text-gray-200 text-[11px]">Advance Fee:</span>
                  <span className="text-xs font-black text-amber-300 underline decoration-amber-400">{PACKAGE_CONFIG.business.advanceFee}</span>
                </div>
                <div className="text-[11px] text-amber-200 font-medium">
                  Project Requirement: {PACKAGE_CONFIG.business.solRequirement}
                </div>
              </div>

              {/* Features list */}
              <ul className="space-y-2.5 text-xs text-gray-200">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Advanced meme coin creation assistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Professional branding & tailored logo design</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Project requirement & launch checklist pack</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Website link & project integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Marketing preparation & strategy roadmap</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>{PACKAGE_CONFIG.business.supportPeriod} client support & troubleshooting</span>
                </li>
              </ul>

            </div>

            <div className="pt-6 mt-6 border-t border-amber-500/20">
              <button
                onClick={() => onNavigate("requirements")}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black font-extrabold text-xs transition-all shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Select Business Package</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Pro Package */}
          <div className="rounded-3xl bg-[#101017] border border-amber-500/20 p-6 sm:p-8 flex flex-col justify-between hover:border-amber-500/40 transition-all shadow-xl group">
            <div className="space-y-5">
              
              <PackageAdvanceNotice 
                compact={true} 
                packageName={PACKAGE_CONFIG.pro.name} 
                advanceFeeAmount={PACKAGE_CONFIG.pro.advanceFee} 
              />

              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold tracking-wider text-amber-400/90 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                  {PACKAGE_CONFIG.pro.badge}
                </span>
                <span className="text-sm sm:text-base font-black text-emerald-300 bg-emerald-950/90 border-2 border-emerald-400/60 px-3.5 py-1 rounded-xl shadow-lg shadow-emerald-950/70 tracking-wider uppercase">
                  SAVE ${PACKAGE_CONFIG.pro.discount}
                </span>
              </div>

              {/* Delivery Turnaround Badge */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
                <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{PACKAGE_CONFIG.pro.deliveryTime}</span>
              </div>

              <div>
                <h3 className="font-heading text-2xl font-bold text-white">
                  {PACKAGE_CONFIG.pro.name}
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  {PACKAGE_CONFIG.pro.description}
                </p>
              </div>

              {/* Price display */}
              <div className="p-4 rounded-2xl bg-[#151522] border border-white/5 space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-xs text-gray-500 line-through">
                    ${PACKAGE_CONFIG.pro.originalPrice}
                  </span>
                  <span className="text-3xl font-extrabold text-white">
                    ${PACKAGE_CONFIG.pro.price}
                  </span>
                </div>
                <div className="p-2 rounded-lg bg-amber-500/15 border border-amber-400/40 text-xs text-amber-200 flex items-center justify-between">
                  <span className="font-bold text-gray-200 text-[11px]">Advance Fee:</span>
                  <span className="text-xs font-black text-amber-300 underline decoration-amber-400">{PACKAGE_CONFIG.pro.advanceFee}</span>
                </div>
                <div className="text-[11px] text-amber-300/80 font-medium">
                  Project Requirement: {PACKAGE_CONFIG.pro.solRequirement}
                </div>
              </div>

              {/* Features list */}
              <ul className="space-y-2.5 text-xs text-gray-300">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Premium meme coin creation assistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>High-fidelity branding & logo design</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Liquidity planning & pool depth assistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Marketing & advertising campaign planning</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>{PACKAGE_CONFIG.pro.supportPeriod} priority support & post-launch guidance</span>
                </li>
              </ul>

            </div>

            <div className="pt-6 mt-6 border-t border-white/5">
              <button
                onClick={() => onNavigate("requirements")}
                className="w-full py-3 rounded-xl bg-[#1A1A28] hover:bg-amber-500 hover:text-black text-amber-300 font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Select Pro Package</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Support Period Policy Banner */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#171422] via-[#1A1629] to-[#171422] border-2 border-amber-500/30 text-xs sm:text-sm text-gray-200 leading-relaxed shadow-lg">
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-amber-300 font-extrabold uppercase tracking-wide block mb-0.5">
                Package Support Periods & Operational Scope
              </strong>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Included package support periods (e.g. 14 Days for Advanced, 21 Days for Business, 30 Days for Pro) cover operational guidance and standard troubleshooting for delivered deliverables, and do not constitute unlimited revision labor.
              </p>
            </div>
          </div>
        </div>

        {/* Clear Payment Explanation Notice */}
        <NoticeBanner type="payment" />

      </section>

      {/* 3.5 CLIENT PROJECTS SHOWCASE & DEX ANALYTICS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/5 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
              <BarChart3 className="w-3.5 h-3.5 text-amber-400" />
              <span>Proven Track Record</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
              Client Project Launches & DEX Analytics
            </h2>
            <p className="text-sm text-gray-400 mt-1 max-w-xl">
              Authentic on-chain trading performance from projects launched via our technical pipeline.
            </p>
          </div>

          <button
            onClick={() => onNavigate("projects")}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 hover:text-white text-xs sm:text-sm font-bold transition-all cursor-pointer"
          >
            <span>View Full Project Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Client Privacy Notice Pill */}
        <div className="p-3.5 rounded-xl bg-[#12121C] border border-amber-500/20 text-xs text-gray-300 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span>
              <strong className="text-amber-300">Client Confidentiality: </strong>
              Detailed contract addresses and creator wallets are withheld to safeguard client privacy and proprietary strategies.
            </span>
          </div>
          <button
            onClick={() => onNavigate("projects")}
            className="hidden sm:inline-flex text-xs text-amber-400 font-bold hover:underline whitespace-nowrap cursor-pointer"
          >
            Learn More →
          </button>
        </div>

        {/* 4 Project Preview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              onClick={() => onNavigate("projects")}
              className="rounded-2xl bg-[#0D0D14] border border-amber-500/20 hover:border-amber-500/50 p-4 transition-all duration-300 cursor-pointer flex flex-col justify-between group shadow-lg hover:shadow-amber-500/10"
            >
              <div className="space-y-3">
                {/* Image snippet */}
                <div className="relative rounded-xl overflow-hidden border border-white/5 bg-black/50 aspect-video flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.codeName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-black/80 text-[10px] font-bold text-emerald-400 border border-emerald-500/40">
                    24H: {project.stats.peakGain24h}
                  </div>
                </div>

                <div>
                  <div className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                    {project.categoryLabel}
                  </div>
                  <h4 className="font-heading text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                    {project.codeName}
                  </h4>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px] pt-1 border-t border-white/5">
                  <div className="p-2 rounded-lg bg-[#14141E]">
                    <span className="text-gray-400 block text-[9px] uppercase">Peak Mkt Cap</span>
                    <span className="font-bold text-white">{project.stats.marketCap}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#14141E]">
                    <span className="text-gray-400 block text-[9px] uppercase">24H Volume</span>
                    <span className="font-bold text-amber-300">{project.stats.volume24h}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-gray-400 group-hover:text-amber-300">
                <span>View Full DEX Metrics</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* 4. HOW IT WORKS SNAPSHOT (5 Steps) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <span>Seamless Process</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
            How Meme Coin Elite Works
          </h2>
          <p className="text-xs sm:text-sm text-gray-400">
            A simple, transparent 5-step journey with clear milestones and direct consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          
          <div className="p-5 rounded-2xl bg-[#101017] border border-amber-500/15 text-center space-y-2">
            <span className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-300 text-xs font-black flex items-center justify-center mx-auto border border-amber-500/30">
              1
            </span>
            <h4 className="font-heading text-sm font-bold text-white">Choose Package</h4>
            <p className="text-[11px] text-gray-400 leading-relaxed">
              Select Advanced, Business, or Pro based on your project requirements.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#101017] border border-amber-500/15 text-center space-y-2">
            <span className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-300 text-xs font-black flex items-center justify-center mx-auto border border-amber-500/30">
              2
            </span>
            <h4 className="font-heading text-sm font-bold text-white">Submit Info</h4>
            <p className="text-[11px] text-gray-400 leading-relaxed">
              Fill the requirements form with token name, symbol, supply, & logo concept.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#101017] border border-amber-500/15 text-center space-y-2">
            <span className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-300 text-xs font-black flex items-center justify-center mx-auto border border-amber-500/30">
              3
            </span>
            <h4 className="font-heading text-sm font-bold text-white">Discuss With Us</h4>
            <p className="text-[11px] text-gray-400 leading-relaxed">
              Connect directly via WhatsApp, Telegram, or email to clarify every detail.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#101017] border border-amber-500/15 text-center space-y-2">
            <span className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-300 text-xs font-black flex items-center justify-center mx-auto border border-amber-500/30">
              4
            </span>
            <h4 className="font-heading text-sm font-bold text-white">Confirm Terms</h4>
            <p className="text-[11px] text-gray-400 leading-relaxed">
              Mutually agree on final scope and payment arrangement before starting.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#101017] border border-amber-500/15 text-center space-y-2">
            <span className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-300 text-xs font-black flex items-center justify-center mx-auto border border-amber-500/30">
              5
            </span>
            <h4 className="font-heading text-sm font-bold text-white">Creation & Delivery</h4>
            <p className="text-[11px] text-gray-400 leading-relaxed">
              Receive your complete branding, token config, and launch support materials.
            </p>
          </div>

        </div>

        <div className="text-center">
          <button
            onClick={() => onNavigate("how-it-works")}
            className="inline-flex items-center gap-2 text-xs text-amber-400 hover:text-amber-300 font-bold"
          >
            <span>Explore full 5-step process walkthrough</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </section>

      {/* 5. TESTIMONIAL TICKER (11 Sample Feedbacks Moving Horizontally) */}
      <TestimonialTicker />

      {/* 6. FAQ PREVIEW & CONTACT CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="rounded-3xl bg-[#0F0F16] border border-amber-500/25 p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-bold uppercase">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Questions & Guidance</span>
            </div>

            <h3 className="font-heading text-3xl font-extrabold text-white">
              Ready to Discuss Your Meme Coin Concept?
            </h3>

            <p className="text-sm text-gray-300 leading-relaxed">
              Whether you want guidance on supply allocation, logo direction, or launch requirements, our team is ready to assist you directly.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href={SITE_CONFIG.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs sm:text-sm shadow-md transition-all"
              >
                Chat on WhatsApp
              </a>

              <a
                href={SITE_CONFIG.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-[#229ED9] hover:bg-[#1e8ec3] text-white font-bold text-xs sm:text-sm shadow-md transition-all"
              >
                Chat on Telegram
              </a>

              <button
                onClick={() => onNavigate("faq")}
                className="px-6 py-3 rounded-xl bg-[#1A1A26] hover:bg-[#242436] text-amber-300 border border-amber-500/30 font-bold text-xs sm:text-sm transition-all cursor-pointer"
              >
                Read All FAQs
              </button>
            </div>

            <div className="pt-3 border-t border-white/10 max-w-lg mx-auto">
              <p className="text-xs text-amber-300/90 font-medium">
                {SITE_CONFIG.seriousInquiryNotice}
              </p>
            </div>
          </div>
        </div>

        {/* Prominent Completion Notice & Risk Notice */}
        <div className="space-y-4">
          <NoticeBanner type="completion" />
          <NoticeBanner type="risk" />
        </div>

      </section>

    </div>
  );
};
