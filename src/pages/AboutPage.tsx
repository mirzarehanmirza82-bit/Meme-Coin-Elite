import React from 'react';
import { PageRoute } from '../types';
import { SITE_CONFIG } from '../siteConfig';
import { NoticeBanner } from '../components/NoticeBanner';
import { 
  Users, 
  MessageSquare, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  HeartHandshake, 
  Layers, 
  Palette, 
  Compass,
  FileCheck2,
  Lock,
  UserCheck,
  Flame,
  Clock
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const approachPillars = [
    {
      title: "Clear Communication",
      icon: <MessageSquare className="w-5 h-5 text-amber-400" />,
      description: "Direct 1-on-1 dialogue with founders over WhatsApp, Telegram, or email with no automated ticket mazes."
    },
    {
      title: "Simple Process",
      icon: <Compass className="w-5 h-5 text-amber-400" />,
      description: "A structured 5-step roadmap from requirement collection to launch asset delivery with crystal clear milestones."
    },
    {
      title: "Professional Design",
      icon: <Palette className="w-5 h-5 text-amber-400" />,
      description: "High-end logos crafted to your instructions, luxury color palettes, and Web3-ready branding kits."
    },
    {
      title: "Client-Focused Support",
      icon: <HeartHandshake className="w-5 h-5 text-amber-400" />,
      description: "Dedicated post-delivery support periods to ensure your launch team feels confident with every delivered file."
    },
    {
      title: "Transparent Requirements",
      icon: <FileCheck2 className="w-5 h-5 text-amber-400" />,
      description: "No hidden costs, no fake profit guarantees, and no unrequested in-app crypto transactions."
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
          <Users className="w-3.5 h-3.5" />
          <span>Our Vision & Values</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
          About <span className="text-gold-gradient">Meme Coin Elite</span>
        </h1>
        <p className="text-base sm:text-lg font-bold text-amber-300 max-w-3xl mx-auto leading-relaxed">
          {SITE_CONFIG.standOutHook}
        </p>
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl mx-auto">
          Meme Coin Elite is an exclusive digital launchpad focused on crafting unique, high-tier meme coin ventures with complete privacy and bespoke direct execution.
        </p>
      </div>

      {/* Exclusivity & 1-on-1 Privacy Framework */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* 15 Projects/Year Quota */}
        <div className="p-6 rounded-3xl bg-gradient-to-b from-[#181424] to-[#0E0C17] border-2 border-amber-500/30 space-y-3 shadow-xl">
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              <span>Strict Quota • 15 Projects / Year</span>
            </span>
            <span className="text-xs font-mono text-rose-400 font-bold">
              90% Declined
            </span>
          </div>
          <h3 className="font-heading text-xl font-bold text-white">
            High-Standard Selection Process
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            {SITE_CONFIG.exclusivityNotice}
          </p>
          <div className="p-3 rounded-xl bg-[#14121F] border border-white/5 text-xs text-amber-300/90 font-medium">
            We focus all bandwidth on the top 10% most serious creators to ensure maximum craft and execution.
          </div>
        </div>

        {/* 1-on-1 Solo Management Guarantee */}
        <div className="p-6 rounded-3xl bg-gradient-to-b from-[#111824] to-[#0A0F17] border-2 border-emerald-500/30 space-y-3 shadow-xl">
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Direct Founder Execution</span>
            </span>
            <span className="text-xs font-mono text-emerald-400 font-bold">
              100% Confidential
            </span>
          </div>
          <h3 className="font-heading text-xl font-bold text-white">
            Solely Managed 1-on-1 for Absolute Privacy
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            {SITE_CONFIG.soloManagementGuarantee}
          </p>
          <div className="p-3 rounded-xl bg-[#0D131F] border border-white/5 text-xs text-emerald-300/90 font-medium flex items-center gap-2">
            <Lock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>Zero intermediary risk: no junior freelancers or shared contractor credentials.</span>
          </div>
        </div>

      </div>

      {/* Delivery Turnaround Strip */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[#0F0F17] border border-amber-500/20 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        <div className="p-3 rounded-xl bg-[#151522] border border-white/5">
          <span className="text-[10px] text-gray-400 uppercase font-bold block">Advance Package</span>
          <span className="text-sm font-bold text-emerald-400">Delivered within 5 days</span>
        </div>
        <div className="p-3 rounded-xl bg-[#151522] border border-white/5">
          <span className="text-[10px] text-gray-400 uppercase font-bold block">Business Package</span>
          <span className="text-sm font-bold text-emerald-400">Delivered within 8 days</span>
        </div>
        <div className="p-3 rounded-xl bg-[#151522] border border-white/5">
          <span className="text-[10px] text-gray-400 uppercase font-bold block">Pro Package</span>
          <span className="text-sm font-bold text-emerald-400">Delivered within 13 days</span>
        </div>
      </div>

      {/* Prominent Startup Notice */}
      <NoticeBanner type="startup" />

      {/* Mission & Background Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        <div className="p-6 sm:p-8 rounded-3xl bg-[#0F0F17] border border-amber-500/20 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <h3 className="font-heading text-2xl font-bold text-white">
              Why Meme Coin Elite?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              In a fast-moving Web3 landscape flooded with generic token deployers and confusing interfaces, Meme Coin Elite takes a hands-on, human-centered approach. We bridge the gap between creative meme concepts and professional project readiness.
            </p>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              We do not treat your project as an automated transaction. We consult with you directly, understand your visual and tokenomics preferences, and provide bespoke branding and launch support.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#151522] border border-white/5 text-xs text-amber-200/90 font-medium">
            "Direct communication, transparent requirements, and high-craft digital execution."
          </div>
        </div>

        <div className="p-6 sm:p-8 rounded-3xl bg-[#0F0F17] border border-amber-500/20 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <h3 className="font-heading text-2xl font-bold text-white">
              Integrity & Client Freedom
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Clients are never pressured to purchase any service or upgrade. We believe in total transparency regarding blockchain risks, liquidity needs, and marketing scopes.
            </p>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              We strictly decline to work on projects designed for scams, impersonation, or fake market activities. Our goal is to build long-term relationships with earnest creators and communities.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-400 bg-[#151522] p-3.5 rounded-2xl border border-white/5">
            <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span>Ethical Web3 launch assistance & transparent terms</span>
          </div>
        </div>
      </div>

      {/* Our Approach Section (5 Pillars) */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
            Our Approach
          </h2>
          <p className="text-xs sm:text-sm text-gray-400">
            The core values that guide our client interactions and service deliveries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {approachPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#101018] border border-amber-500/15 hover:border-amber-500/40 transition-all space-y-3 shadow-lg"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center">
                {pillar.icon}
              </div>
              <h4 className="font-heading text-base font-bold text-white">
                {pillar.title}
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Box */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#17141E] via-[#111119] to-[#0A0A10] border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div>
          <h3 className="font-heading text-2xl font-bold text-white">
            Want to Discuss Your Project Directly?
          </h3>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            Reach out via WhatsApp or Telegram for a quick question or project consultation.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={SITE_CONFIG.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs sm:text-sm shadow-md transition-all"
          >
            WhatsApp
          </a>
          <button
            onClick={() => onNavigate("contact")}
            className="px-6 py-3.5 rounded-xl bg-[#1A1A28] hover:bg-[#242436] text-white hover:text-amber-300 border border-amber-500/30 font-bold text-xs sm:text-sm transition-all"
          >
            Contact Page
          </button>
        </div>
      </div>

      {/* Notice */}
      <NoticeBanner type="risk" />

    </div>
  );
};
