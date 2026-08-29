import React from 'react';
import { PageRoute } from '../types';
import { SITE_CONFIG } from '../siteConfig';
import { NoticeBanner } from '../components/NoticeBanner';
import { 
  Package, 
  FileText, 
  MessageSquare, 
  CheckCircle2, 
  Rocket, 
  ArrowRight, 
  Sparkles, 
  Clock, 
  ShieldCheck,
  ChevronRight,
  HelpCircle
} from 'lucide-react';

interface HowItWorksPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onNavigate }) => {
  const steps = [
    {
      stepNumber: "01",
      title: "Choose Your Package",
      icon: <Package className="w-6 h-6 text-amber-400" />,
      description: "Review our Advanced ($1,299), Business ($1,999), or Pro ($2,750) service tiers to find the right level of token creation assistance, branding, and launch preparation for your project goals.",
      keyPoints: [
        "Select according to your branding & support needs",
        "Transparent reference pricing and SOL launch requirements",
        "Clear add-on options for community setup and custom website"
      ]
    },
    {
      stepNumber: "02",
      title: "Submit Your Project Requirements",
      icon: <FileText className="w-6 h-6 text-amber-400" />,
      description: "Complete our structured Project Requirements form with your token name, symbol, chosen supply tier, and a detailed description of your desired mascot/logo aesthetics (no image upload required).",
      keyPoints: [
        "Define your logo theme, mascot, colors, and typography",
        "Choose token supply (10M - 100B or custom supply)",
        "Select optional advertising budget or website integration preferences"
      ]
    },
    {
      stepNumber: "03",
      title: "Discuss Your Project With Us",
      icon: <MessageSquare className="w-6 h-6 text-amber-400" />,
      description: "Connect directly with our team over WhatsApp, Telegram, or email. We review your submitted details, answer questions, and discuss any unique project nuances or launch timelines.",
      keyPoints: [
        "1-on-1 direct founder consultation",
        "Review tokenomics and liquidity allocation guidelines",
        "Clarify expectations, deliverables, and timeline milestones"
      ]
    },
    {
      stepNumber: "04",
      title: "Confirm Scope & Payment Terms",
      icon: <CheckCircle2 className="w-6 h-6 text-amber-400" />,
      description: "We mutually finalize the project scope, confirm all deliverables, and agree on direct payment terms before any development begins. No payment or crypto transfer is processed through this website.",
      keyPoints: [
        "Clear itemized project agreement",
        "Mutually agreed payment methods and schedules",
        "Zero automated checkout or mystery fees"
      ]
    },
    {
      stepNumber: "05",
      title: "Project Creation & Delivery",
      icon: <Rocket className="w-6 h-6 text-amber-400" />,
      description: "Our team executes your custom logo, token configuration, branding assets, and launch checklist. You receive everything organized for your official deployment with included support.",
      keyPoints: [
        "High-fidelity branding kit and logo files delivered",
        "Complete smart token configuration & metadata assets",
        "Dedicated post-delivery support period for your package"
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Transparent 5-Step Process</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
          How It <span className="text-gold-gradient">Works</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
          From concept submission to final launch delivery, here is our simple, step-by-step collaboration model.
        </p>
      </div>

      {/* Mandatory Process Agreement Callout */}
      <div className="p-5 sm:p-6 rounded-2xl bg-[#14121A] border-2 border-amber-400/40 text-center space-y-2 max-w-3xl mx-auto shadow-lg">
        <div className="text-xs font-extrabold uppercase tracking-widest text-amber-300">
          Core Operating Principle
        </div>
        <p className="text-sm sm:text-base font-bold text-white leading-relaxed">
          The project begins only after the scope and payment terms have been mutually agreed upon.
        </p>
        <p className="text-xs text-gray-400">
          No automated charges, no mystery deposits, and no cryptocurrency transfers are collected on this website.
        </p>
      </div>

      {/* 5 Step Cards */}
      <div className="space-y-6">
        {steps.map((step, idx) => (
          <div
            key={step.stepNumber}
            className="p-6 sm:p-8 rounded-3xl bg-[#0F0F17] border border-amber-500/20 hover:border-amber-500/40 transition-all duration-200 shadow-xl flex flex-col md:flex-row items-start gap-6 relative group"
          >
            {/* Step Number & Icon */}
            <div className="flex-shrink-0 flex items-center md:flex-col gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#181826] border border-amber-500/30 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                {step.icon}
              </div>
              <span className="font-mono text-xl sm:text-2xl font-black text-gold-gradient">
                {step.stepNumber}
              </span>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-[11px] uppercase font-bold tracking-wider text-amber-400/80 px-2.5 py-0.5 rounded bg-amber-500/10">
                  Step {idx + 1}
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                  {step.title}
                </h3>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed">
                {step.description}
              </p>

              {/* Key points */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-gray-400">
                {step.keyPoints.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2 bg-[#14141E] p-2.5 rounded-xl border border-white/5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#181520] via-[#12121A] to-[#0A0A10] border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="space-y-2">
          <h3 className="font-heading text-2xl font-bold text-white">
            Ready to Begin Step 1?
          </h3>
          <p className="text-xs sm:text-sm text-gray-400 max-w-lg">
            Choose your package or submit your requirements form to kick off direct communication with our team.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => onNavigate("packages")}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black font-extrabold text-xs sm:text-sm shadow-lg shadow-amber-500/25 transition-all cursor-pointer"
          >
            Explore Packages
          </button>
          <button
            onClick={() => onNavigate("requirements")}
            className="px-6 py-3.5 rounded-xl bg-[#1A1A28] hover:bg-[#222234] text-white hover:text-amber-300 border border-amber-500/30 font-bold text-xs sm:text-sm transition-all cursor-pointer"
          >
            Submit Requirements
          </button>
        </div>
      </div>

      {/* Notices */}
      <div className="space-y-4">
        <NoticeBanner type="completion" />
        <NoticeBanner type="payment" />
      </div>

    </div>
  );
};
