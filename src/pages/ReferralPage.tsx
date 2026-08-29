import React, { useState } from 'react';
import { PageRoute } from '../types';
import { SITE_CONFIG } from '../siteConfig';
import { NoticeBanner } from '../components/NoticeBanner';
import { 
  Gift, 
  Share2, 
  MessageSquare, 
  Send, 
  Copy, 
  CheckCircle2, 
  ArrowRight, 
  Users, 
  ShieldCheck,
  Sparkles,
  Info
} from 'lucide-react';

interface ReferralPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const ReferralPage: React.FC<ReferralPageProps> = ({ onNavigate }) => {
  const [copiedCode, setCopiedCode] = useState(false);
  const sampleCode = "MCE-REF-001";

  const handleCopyCode = () => {
    navigator.clipboard.writeText(sampleCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 3000);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
          <Gift className="w-3.5 h-3.5" />
          <span>Community Growth Program</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
          Referral <span className="text-gold-gradient">Program</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
          If you introduce a new client or crypto founder to Meme Coin Elite, you may be eligible for a referral benefit according to our current program terms.
        </p>
      </div>

      {/* Visual Referral Code Box */}
      <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#1A1824] via-[#12121C] to-[#0A0A10] border-2 border-amber-400/40 text-center space-y-6 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-xl mx-auto space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-300">
            Sample Referral Identifier
          </span>
          <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
            Get Your Unique Referral Tag
          </h3>
          <p className="text-xs sm:text-sm text-gray-300">
            Contact our team to receive your personalized tracking code and current referral benefit structure.
          </p>
        </div>

        {/* Visual Referral Badge */}
        <div className="inline-flex items-center gap-3 bg-[#181826] border border-amber-500/30 p-2.5 sm:p-3 rounded-2xl shadow-inner max-w-md mx-auto">
          <span className="font-mono text-base sm:text-lg font-bold text-gold-gradient px-4 py-1">
            {sampleCode}
          </span>
          <button
            onClick={handleCopyCode}
            className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>{copiedCode ? "Copied" : "Copy Sample"}</span>
          </button>
        </div>

        {/* Transparent Notice about manual verification */}
        <div className="max-w-lg mx-auto p-4 rounded-xl bg-[#14141E] border border-white/5 text-xs text-gray-400 leading-relaxed flex items-start gap-2.5 text-left">
          <Info className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
          <span>
            Referral benefits and tracking are verified directly through founder communication rather than automated website trackers to ensure transparent terms.
          </span>
        </div>

        {/* Action Button: Request Referral Code */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`${SITE_CONFIG.whatsapp}&text=Hello%20Meme%20Coin%20Elite%2C%20I%20would%20like%20to%20request%20a%20referral%20code%20and%20review%20the%20referral%20terms.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black font-extrabold text-xs sm:text-sm shadow-lg shadow-amber-500/25 flex items-center gap-2 transition-all transform hover:scale-[1.02]"
          >
            <Gift className="w-4 h-4" />
            <span>Request Referral Code</span>
          </a>

          <a
            href={SITE_CONFIG.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-[#229ED9] hover:bg-[#1e8ec3] text-white font-bold text-xs sm:text-sm shadow-md flex items-center gap-2 transition-all"
          >
            <Send className="w-4 h-4" />
            <span>Discuss on Telegram</span>
          </a>
        </div>

      </div>

      {/* Program Details (3 Columns) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-[#0F0F17] border border-amber-500/15 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400">
            <Share2 className="w-5 h-5" />
          </div>
          <h4 className="font-heading text-base font-bold text-white">1. Introduce a Founder</h4>
          <p className="text-xs text-gray-400 leading-relaxed">
            Share Meme Coin Elite with crypto creators, meme project leads, or community builders who need branding and launch assistance.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#0F0F17] border border-amber-500/15 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <h4 className="font-heading text-base font-bold text-white">2. Project Confirmation</h4>
          <p className="text-xs text-gray-400 leading-relaxed">
            When your referred client confirms their package scope and mutually agrees on project terms with our team, the referral is logged.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#0F0F17] border border-amber-500/15 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400">
            <Gift className="w-5 h-5" />
          </div>
          <h4 className="font-heading text-base font-bold text-white">3. Receive Benefit</h4>
          <p className="text-xs text-gray-400 leading-relaxed">
            Receive the agreed referral credit, service discount, or agreed benefit in accordance with current terms.
          </p>
        </div>
      </div>

      {/* Notices */}
      <div className="space-y-4">
        <NoticeBanner type="startup" />
        <NoticeBanner type="payment" />
      </div>

    </div>
  );
};
