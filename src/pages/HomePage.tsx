import React from 'react';
import { PageRoute } from '../types';
import { PACKAGE_CONFIG, SITE_CONFIG } from '../siteConfig';
import { SpecialOfferBanner } from '../components/SpecialOfferBanner';
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
  Coins
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
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight max-w-5xl mx-auto leading-[1.1]">
          Build Your Meme Coin Project <br className="hidden sm:inline" />
          <span className="text-gold-gradient">With Confidence</span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-normal leading-relaxed">
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
            <span>Fast Preparation</span>
          </div>
        </div>

      </section>

      {/* 2. SPECIAL STARTUP OFFER & WHATSAPP NOTICE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SpecialOfferBanner onNavigate={onNavigate} />
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
            <div className="space-y-6">
              
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold tracking-wider text-amber-400/90 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                  {PACKAGE_CONFIG.advanced.badge}
                </span>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full">
                  SAVE ${PACKAGE_CONFIG.advanced.discount}
                </span>
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
              <div className="p-4 rounded-2xl bg-[#151522] border border-white/5 space-y-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-xs text-gray-500 line-through">
                    ${PACKAGE_CONFIG.advanced.originalPrice}
                  </span>
                  <span className="text-3xl font-extrabold text-white">
                    ${PACKAGE_CONFIG.advanced.price}
                  </span>
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
                  <span>Token setup (10M - 10B)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Social media guidance (X, TG, Discord)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>14 Days client support for delivered work</span>
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

            <div className="space-y-6">
              
              <div className="flex items-center justify-between pt-2">
                <span className="text-xs uppercase font-bold tracking-wider text-amber-300">
                  Full Branding & Token Kit
                </span>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full">
                  SAVE ${PACKAGE_CONFIG.business.discount}
                </span>
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
              <div className="p-4 rounded-2xl bg-[#181826] border border-amber-500/30 space-y-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-xs text-gray-500 line-through">
                    ${PACKAGE_CONFIG.business.originalPrice}
                  </span>
                  <span className="text-3xl font-black text-gold-gradient">
                    ${PACKAGE_CONFIG.business.price}
                  </span>
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
                  <span>30 Days client support & troubleshooting</span>
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
            <div className="space-y-6">
              
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold tracking-wider text-amber-400/90 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                  {PACKAGE_CONFIG.pro.badge}
                </span>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full">
                  SAVE ${PACKAGE_CONFIG.pro.discount}
                </span>
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
              <div className="p-4 rounded-2xl bg-[#151522] border border-white/5 space-y-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-xs text-gray-500 line-through">
                    ${PACKAGE_CONFIG.pro.originalPrice}
                  </span>
                  <span className="text-3xl font-extrabold text-white">
                    ${PACKAGE_CONFIG.pro.price}
                  </span>
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
                  <span>Priority 60-day support & post-launch guidance</span>
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

        {/* Clear Payment Explanation Notice */}
        <NoticeBanner type="payment" />

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
