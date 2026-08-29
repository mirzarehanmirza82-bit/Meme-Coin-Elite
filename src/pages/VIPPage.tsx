import React from 'react';
import { PageRoute } from '../types';
import { SITE_CONFIG } from '../siteConfig';
import { NoticeBanner } from '../components/NoticeBanner';
import { 
  Crown, 
  Sparkles, 
  Zap, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck,
  Star
} from 'lucide-react';

interface VIPPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const VIPPage: React.FC<VIPPageProps> = ({ onNavigate }) => {
  const benefits = [
    {
      title: "Priority Communication Channel",
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      description: "Direct priority line on WhatsApp or Telegram with expedited response times for swift project updates."
    },
    {
      title: "Expedited Asset & Logo Review",
      icon: <Clock className="w-5 h-5 text-amber-400" />,
      description: "Faster turnaround on custom logo iterations, graphic assets, and token metadata preparation."
    },
    {
      title: "Dedicated Founder Consultation",
      icon: <MessageSquare className="w-5 h-5 text-amber-400" />,
      description: "In-depth review sessions to analyze your marketing roadmap, token distribution logic, and launch pacing."
    },
    {
      title: "Special Package Consideration",
      icon: <Crown className="w-5 h-5 text-amber-400" />,
      description: "Customized service scopes tailored to your exact milestone deadlines and community scale."
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
          <Crown className="w-3.5 h-3.5 text-amber-400" />
          <span>Elevated Client Tier</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
          VIP <span className="text-gold-gradient">Clients</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
          VIP status is designed for active founders, high-velocity creators, or projects requiring prioritized support, faster communication turnaround, and dedicated project handling.
        </p>
      </div>

      {/* Main VIP Highlight Card */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#1C1826] via-[#12121D] to-[#0A0A10] border-2 border-amber-400/50 shadow-2xl relative overflow-hidden space-y-8">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-2xl space-y-3">
          <div className="flex items-center gap-2 text-xs uppercase font-extrabold tracking-widest text-amber-300">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>VIP Membership & Priority Access</span>
          </div>
          <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
            Accelerated Execution for Serious Token Launches
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            When timing in the meme coin ecosystem is critical, VIP status gives your project priority handling throughout our design, token setup, and launch-support pipeline.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#141422] border border-amber-500/20 space-y-2.5 shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                  {benefit.icon}
                </div>
                <h4 className="font-heading text-sm font-bold text-white">
                  {benefit.title}
                </h4>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed pl-12">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-wrap items-center gap-4">
          <a
            href={`${SITE_CONFIG.whatsapp}&text=Hello%20Meme%20Coin%20Elite%2C%20I%20am%20interested%20in%20discussing%20VIP%20Client%20status%20for%20my%20token%20project.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black font-extrabold text-xs sm:text-sm shadow-xl shadow-amber-500/25 flex items-center gap-2 transition-all transform hover:scale-[1.02]"
          >
            <Crown className="w-4 h-4" />
            <span>Discuss VIP Status on WhatsApp</span>
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

      {/* VVIP Cross-Link */}
      <div className="p-6 rounded-2xl bg-[#0F0F17] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <h4 className="font-heading text-lg font-bold text-white">
            Need Multistage or High-Requirement Launch Support?
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

      {/* Notices */}
      <div className="space-y-4">
        <NoticeBanner type="payment" />
        <NoticeBanner type="startup" />
      </div>

    </div>
  );
};
