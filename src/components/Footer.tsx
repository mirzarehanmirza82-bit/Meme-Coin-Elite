import React from 'react';
import { PageRoute } from '../types';
import { Logo } from './Logo';
import { SITE_CONFIG } from '../siteConfig';
import { MessageSquare, Send, Mail, ShieldAlert } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageRoute) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0F] border-t border-amber-500/15 pt-16 pb-12 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand & Description (Col span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <div onClick={() => handleNav("home")}>
              <Logo size="md" />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Professional meme coin creation, branding, project preparation, and launch support. Transparent requirements, clear deliverables, and direct client communication with zero automated payment gateways.
            </p>

            {/* Direct Contact Channels */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={SITE_CONFIG.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#14141E] hover:bg-[#1E1E2D] border border-amber-500/20 text-xs font-semibold text-gray-200 hover:text-amber-300 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>

              <a
                href={SITE_CONFIG.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#14141E] hover:bg-[#1E1E2D] border border-amber-500/20 text-xs font-semibold text-gray-200 hover:text-amber-300 transition-colors"
              >
                <Send className="w-3.5 h-3.5 text-[#229ED9]" />
                <span>Telegram</span>
              </a>

              <a
                href={SITE_CONFIG.getGmailUrl("Meme Coin Elite Inquiry", "Hello Meme Coin Elite team,\n\nI would like to inquire about your services.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#14141E] hover:bg-[#1E1E2D] border border-amber-500/20 text-xs font-semibold text-gray-200 hover:text-amber-300 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>{SITE_CONFIG.email}</span>
              </a>
            </div>

            <p className="text-[11px] text-gray-400 pt-1 leading-relaxed">
              <span className="text-amber-300 font-semibold">Response Notice: </span>
              {SITE_CONFIG.responseNotice}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-heading text-xs font-bold text-white uppercase tracking-wider">
              Core Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav("home")} className="hover:text-amber-300 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav("packages")} className="hover:text-amber-300 transition-colors">
                  Packages & Pricing
                </button>
              </li>
              <li>
                <button onClick={() => handleNav("requirements")} className="hover:text-amber-300 transition-colors">
                  Project Requirements
                </button>
              </li>
              <li>
                <button onClick={() => handleNav("how-it-works")} className="hover:text-amber-300 transition-colors">
                  How It Works (5 Steps)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav("about")} className="hover:text-amber-300 transition-colors">
                  About Meme Coin Elite
                </button>
              </li>
              <li>
                <button onClick={() => handleNav("contact")} className="hover:text-amber-300 transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Programs & FAQ */}
          <div className="space-y-3">
            <h4 className="font-heading text-xs font-bold text-white uppercase tracking-wider">
              Programs & FAQs
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav("faq")} className="hover:text-amber-300 transition-colors">
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button onClick={() => handleNav("referral")} className="hover:text-amber-300 transition-colors">
                  Referral Program
                </button>
              </li>
              <li>
                <button onClick={() => handleNav("vip")} className="hover:text-amber-300 transition-colors">
                  VIP Club
                </button>
              </li>
              <li>
                <button onClick={() => handleNav("vvip")} className="hover:text-amber-300 transition-colors">
                  VVIP Club
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div className="space-y-3">
            <h4 className="font-heading text-xs font-bold text-white uppercase tracking-wider">
              Legal & Disclaimers
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav("privacy-policy")} className="hover:text-amber-300 transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => handleNav("terms")} className="hover:text-amber-300 transition-colors">
                  Terms & Conditions
                </button>
              </li>
            </ul>

            <div className="p-2.5 rounded-lg bg-[#14141E] border border-amber-500/10 text-[11px] text-gray-400 mt-3 leading-relaxed space-y-1">
              <div>
                <span className="text-amber-300/90 font-semibold block mb-0.5">No In-App Payment</span>
                Payment and terms are discussed directly before starting. No SOL transfers are requested through this website.
              </div>
              <div className="pt-1 border-t border-white/5 text-[10px] text-amber-300/80 font-medium">
                {SITE_CONFIG.seriousInquiryNotice}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-2 text-center md:text-left">
            <ShieldAlert className="w-4 h-4 text-amber-500/70 flex-shrink-0" />
            <span>
              Crypto assets and meme coin projects are speculative. Please conduct independent research. No financial advice or profit guarantees provided.
            </span>
          </div>
          <div className="whitespace-nowrap font-medium text-gray-400">
            © 2026 Meme Coin Elite. All Rights Reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};
