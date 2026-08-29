import React from 'react';
import { AlertTriangle, AlertCircle, Info, ShieldAlert, CheckCircle2 } from 'lucide-react';

interface NoticeBannerProps {
  type: "completion" | "risk" | "startup" | "payment" | "sol" | "response-time";
  className?: string;
}

export const NoticeBanner: React.FC<NoticeBannerProps> = ({ type, className = "" }) => {
  if (type === "response-time") {
    return (
      <div className={`p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#141422] via-[#181829] to-[#141422] border border-amber-500/30 text-xs sm:text-sm leading-relaxed shadow-lg ${className}`}>
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div className="space-y-1 w-full">
            <strong className="text-amber-300 font-bold block text-sm">
              Response Time Notice
            </strong>
            <p className="text-gray-200 text-xs sm:text-sm leading-relaxed font-medium">
              Please note: There may be a short response delay. We will review your inquiry and contact you within 1–2 business days.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (type === "completion") {
    return (
      <div className={`p-4 sm:p-5 rounded-2xl bg-[#1A1608] border-2 border-amber-500/40 text-amber-200 text-xs sm:text-sm leading-relaxed shadow-lg ${className}`}>
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="text-white font-extrabold uppercase tracking-wide block text-sm">
              IMPORTANT: Project Information & Change Scope
            </strong>
            <p className="text-gray-300">
              Please provide all important project information and requested changes before final completion. Once the project has been finalized and delivered, major changes may not be possible or may require an additional charge.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (type === "risk") {
    return (
      <div className={`p-4 sm:p-5 rounded-2xl bg-[#14141C] border border-red-500/20 text-gray-300 text-xs sm:text-sm leading-relaxed ${className}`}>
        <div className="flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-400/90 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="text-white font-bold block">
              Cryptocurrency & Meme Coin Market Disclaimer
            </strong>
            <p className="text-gray-400 text-xs leading-relaxed">
              Crypto assets and meme coin projects are highly speculative and involve significant risk. Always conduct your own research and understand the risks before investing money or starting a project. Meme Coin Elite does not provide investment advice and does not guarantee financial returns, token price, trading volume, or market success.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (type === "startup") {
    return (
      <div className={`p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#161622] to-[#12121A] border border-amber-500/25 text-gray-200 text-xs sm:text-sm leading-relaxed ${className}`}>
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="text-amber-300 font-bold block text-sm">
              Important Startup Notice
            </strong>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Meme Coin Elite is currently a growing startup. Because we are still expanding our services and team, some services or availability may be more limited than those of a large established agency. We are continuously improving our capabilities and working to provide transparent, high-touch service to our clients.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (type === "sol") {
    return (
      <div className={`p-3.5 sm:p-4 rounded-xl bg-[#13131D] border border-amber-500/20 text-xs text-gray-300 leading-relaxed ${className}`}>
        <div className="flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
          <div>
            <strong className="text-amber-200 block mb-0.5">Blockchain Project Requirement (SOL)</strong>
            <span>
              This SOL amount is part of the project's blockchain/launch requirement (such as pool initialization and token creation fees). It is <strong className="text-white">NOT a payment</strong> that you need to send through this website. Final payment and project arrangements will be discussed directly with you.
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Payment banner
  return (
    <div className={`p-4 sm:p-5 rounded-2xl bg-[#111119] border border-amber-500/20 text-xs sm:text-sm text-gray-300 ${className}`}>
      <div className="flex items-start gap-3">
        <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
        <div className="space-y-1">
          <strong className="text-white font-bold block">
            How is payment handled?
          </strong>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
            The package prices shown on this website are service package reference prices. Payment is not collected through this website. After you submit your requirements, we will discuss the project with you, confirm the final scope, and mutually agree on the payment method and terms before starting the work. No wallet connection or cryptocurrency transfer is required through this site.
          </p>
        </div>
      </div>
    </div>
  );
};
