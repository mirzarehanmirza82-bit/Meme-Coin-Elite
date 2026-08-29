import React from 'react';
import { PageRoute } from '../types';
import { SITE_CONFIG } from '../siteConfig';
import { NoticeBanner } from '../components/NoticeBanner';
import { 
  ShieldCheck, 
  Lock, 
  EyeOff, 
  FileText, 
  CheckCircle2, 
  Mail, 
  Clock 
} from 'lucide-react';

interface PrivacyPolicyPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Data Protection & Transparency</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
          Privacy <span className="text-gold-gradient">Policy</span>
        </h1>
        <p className="text-xs sm:text-sm text-gray-400">
          Last Updated: February 2025 • Meme Coin Elite
        </p>
      </div>

      {/* Content Container */}
      <div className="bg-[#0F0F17] border border-amber-500/20 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 text-xs sm:text-sm text-gray-300 leading-relaxed">
        
        {/* Section 1: Overview */}
        <section className="space-y-3">
          <h3 className="font-heading text-lg font-bold text-white flex items-center gap-2">
            <span className="text-amber-400">1.</span>
            <span>Overview & Commitment</span>
          </h3>
          <p>
            Meme Coin Elite respects your privacy and is committed to protecting the information you share with us. This Privacy Policy explains what details we collect when you browse our website, submit a project brief, or communicate with our team, and how that information is handled.
          </p>
        </section>

        {/* Section 2: Information We Collect */}
        <section className="space-y-3">
          <h3 className="font-heading text-lg font-bold text-white flex items-center gap-2">
            <span className="text-amber-400">2.</span>
            <span>Information We Collect</span>
          </h3>
          <p>
            We only collect information that you voluntarily provide to us when submitting our Project Requirements form, contacting us via WhatsApp/Telegram/email, or discussing a service package. This includes:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-gray-300">
            <li>Contact details such as your Name, Email address, WhatsApp number, and Telegram username.</li>
            <li>Project specifics including Token Name, Symbol/Ticker, chosen supply parameters, and logo design descriptions.</li>
            <li>Public social media handles or website URLs you wish to associate with your token launch.</li>
            <li>Communication records and notes regarding your project preferences and requirements.</li>
          </ul>
        </section>

        {/* Section 3: Absolute Security - What We NEVER Collect */}
        <section className="p-5 rounded-2xl bg-[#15131E] border border-amber-500/30 space-y-3">
          <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
            <Lock className="w-4 h-4 text-amber-400" />
            <span>Strict Financial Privacy: What We NEVER Collect</span>
          </div>
          <p className="text-xs text-gray-300 leading-relaxed">
            Meme Coin Elite <strong className="text-white">does not collect, store, or process</strong> credit card details, bank account numbers, cryptocurrency private keys, seed phrases, or automated wallet authorizations on this website. All final project payments and agreements occur outside the website through mutually agreed direct channels.
          </p>
        </section>

        {/* Section 4: How We Use Your Information */}
        <section className="space-y-3">
          <h3 className="font-heading text-lg font-bold text-white flex items-center gap-2">
            <span className="text-amber-400">3.</span>
            <span>How We Use Your Information</span>
          </h3>
          <p>Your information is used strictly for legitimate business purposes:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-gray-300">
            <li>To prepare and deliver your requested meme coin design, metadata, and token assets.</li>
            <li>To communicate with you directly regarding project milestones, review iterations, and support.</li>
            <li>To answer your questions and provide personalized consultation during your package support period.</li>
          </ul>
        </section>

        {/* Section 5: No Selling of Data */}
        <section className="space-y-3">
          <h3 className="font-heading text-lg font-bold text-white flex items-center gap-2">
            <span className="text-amber-400">4.</span>
            <span>Zero Third-Party Data Selling</span>
          </h3>
          <p>
            We do not sell, rent, trade, or monetize your personal or project data with any third-party advertisers, data brokers, or marketing syndicates.
          </p>
        </section>

        {/* Section 6: Contact Us for Privacy Inquiries */}
        <section className="pt-4 border-t border-white/10 space-y-3">
          <h3 className="font-heading text-lg font-bold text-white">
            5. Contact Us Regarding Privacy
          </h3>
          <p className="text-xs text-gray-400">
            If you have questions about this policy or wish to request the deletion of your submitted brief details, please contact us directly at <a href={`mailto:${SITE_CONFIG.email}`} className="text-amber-300 underline font-medium">{SITE_CONFIG.email}</a>.
          </p>
        </section>

      </div>

      {/* Notice */}
      <NoticeBanner type="payment" />

    </div>
  );
};
