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
  FileCheck2
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
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
          Meme Coin Elite is a growing digital service platform focused on helping clients prepare meme coin projects, branding, project information, launch preparation and promotional planning.
        </p>
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
