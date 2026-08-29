import React, { useState } from 'react';
import { PageRoute, FAQItem } from '../types';
import { SITE_CONFIG } from '../siteConfig';
import { NoticeBanner } from '../components/NoticeBanner';
import { 
  HelpCircle, 
  ChevronDown, 
  Send, 
  MessageSquare, 
  ShieldAlert, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2,
  DollarSign
} from 'lucide-react';

interface FAQPageProps {
  onNavigate: (page: PageRoute) => void;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "What do I need to start?",
    answer: "To start, all you need is a general idea for your meme coin concept (mascot, theme, or name). You will fill out our Project Requirements form with your token name, symbol, chosen supply tier, and logo description. You do not need existing files or coding skills.",
    category: "Getting Started"
  },
  {
    id: "faq-2",
    question: "How much SOL is required for my project?",
    answer: "The required SOL depends on the package selected: Advanced requires 5.7 SOL, Business requires 6–7 SOL, and Pro requires 12–13 SOL. This SOL amount represents the blockchain launch requirements (such as pool initialization and token creation fees) and is managed directly by the founder.",
    category: "Blockchain & SOL"
  },
  {
    id: "faq-3",
    question: "Is SOL payment made through the website?",
    answer: "No. The website does not collect SOL or any other payment. We do not provide wallet connections, QR codes, or deposit addresses. Project requirements, deliverables, and payment terms are discussed and agreed upon directly between the client and our team before work begins.",
    category: "Payment & Security",
    highlight: true
  },
  {
    id: "faq-4",
    question: "Can I choose my token supply?",
    answer: "Yes. You can select standard token supply benchmarks (10 Million, 100 Million, 1 Billion, 10 Billion, 100 Billion) or enter a custom supply number directly on our requirements form.",
    category: "Token Parameters"
  },
  {
    id: "faq-5",
    question: "Can I choose my token symbol (ticker)?",
    answer: "Yes. You can specify any custom ticker symbol (such as $DOGE, $PEPE, $MOON) during the requirements submission.",
    category: "Token Parameters"
  },
  {
    id: "faq-6",
    question: "Can you create my logo without me uploading an image?",
    answer: "Yes! Logo design is included in all packages. You do not need to upload any image file. You simply explain how you want the logo to look — including color preferences, mascot style, expression, and typography — and our designers will create it for you.",
    category: "Branding & Design"
  },
  {
    id: "faq-7",
    question: "Do you create social media accounts?",
    answer: "Standard packages include comprehensive guidance on creating, configuring, and managing your community accounts (X/Twitter, Telegram, Discord, TikTok, etc.). If you want our team to create and configure the accounts and community setup for you, an optional +$100 add-on is available.",
    category: "Social & Community"
  },
  {
    id: "faq-8",
    question: "Do you create a website for my token?",
    answer: "If you already have a website, you can provide the link and we will integrate it into your token metadata. If you need a new custom-built website created from scratch, it can be arranged as an optional +$100 add-on (including basic domain/hosting setup assistance where applicable).",
    category: "Website & Tech"
  },
  {
    id: "faq-9",
    question: "Is advertising included in the packages?",
    answer: "No. Direct advertising and paid promotional campaigns are not included in the standard service fee. Advertising budgets ($100, $200, $300, $500, $1,000) are separate and optional. We do not guarantee views, buyers, or trading volume from third-party ads.",
    category: "Marketing & Ads"
  },
  {
    id: "faq-10",
    question: "Is liquidity included in the package price?",
    answer: "No. Liquidity is a separate project expense and will be discussed directly with the client according to your chosen launch plan and pool size. Meme Coin Elite does not collect or manage your liquidity pool funds.",
    category: "Liquidity & Launch"
  },
  {
    id: "faq-11",
    question: "Is exchange listing guaranteed?",
    answer: "No. Third-party decentralized and centralized exchange platforms have their own independent listing rules, volume criteria, and approval processes. No third-party approvals or listings are guaranteed by Meme Coin Elite.",
    category: "Disclaimers & Risks"
  },
  {
    id: "faq-12",
    question: "Is profit or token price guaranteed?",
    answer: "No. Cryptocurrency and meme coin projects are speculative and carry substantial financial risk. Meme Coin Elite provides digital creation and preparation services; we do not provide financial advice and never guarantee profits, token prices, or market success.",
    category: "Disclaimers & Risks"
  },
  {
    id: "faq-13",
    question: "Can I change the project after completion?",
    answer: "Important project requirements and requested changes must be provided before final completion. Once the project has been finalized and delivered, major structural modifications or new feature requests may require additional development charges.",
    category: "Revisions & Support",
    highlight: true
  }
];

export const FAQPage: React.FC<FAQPageProps> = ({ onNavigate }) => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "faq-3": true, // Default open the critical payment FAQ
    "faq-1": true
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Clear Answers & Policies</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
          Frequently Asked <span className="text-gold-gradient">Questions</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
          Everything you need to know about our services, package deliverables, requirements, and operating terms.
        </p>
      </div>

      {/* Prominent Completion Notice on FAQ */}
      <NoticeBanner type="completion" />

      {/* FAQ Accordion List */}
      <div className="space-y-3.5">
        {FAQ_DATA.map((item) => {
          const isOpen = !!openItems[item.id];
          return (
            <div
              key={item.id}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                item.highlight
                  ? 'bg-[#15131E] border-amber-500/40 shadow-lg shadow-amber-950/20'
                  : 'bg-[#0F0F17] border-amber-500/15 hover:border-amber-500/30'
              }`}
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
              >
                <div className="space-y-1">
                  {item.category && (
                    <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400/70">
                      {item.category}
                    </span>
                  )}
                  <h3 className="font-heading text-base sm:text-lg font-bold text-white leading-snug">
                    {item.question}
                  </h3>
                </div>
                <div className={`w-8 h-8 rounded-full bg-[#181826] border border-white/10 flex items-center justify-center text-amber-300 transition-transform duration-200 flex-shrink-0 ${
                  isOpen ? 'rotate-180 bg-amber-500/20 border-amber-400/40' : ''
                }`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5 animate-fade-in">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Section 23: EARNING GUIDANCE SPECIAL CARD */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#181520] via-[#12121A] to-[#0A0A10] border-2 border-amber-400/40 space-y-4 shadow-xl">
        <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider">
          <DollarSign className="w-4 h-4 text-amber-400" />
          <span>Strategic Revenue Discussion</span>
        </div>

        <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
          Can you explain possible ways to earn from the project?
        </h3>

        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
          If you want to discuss possible revenue strategies, marketing methods, project management, or other ways your project may generate income, contact us separately. We can discuss your goals and provide general guidance. However, <strong className="text-white">no income, profit, investor count, or financial result is guaranteed</strong>.
        </p>

        <div className="pt-2 flex flex-wrap items-center gap-3">
          <a
            href={SITE_CONFIG.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#229ED9] hover:bg-[#1e8ec3] text-white font-bold text-xs sm:text-sm shadow-md transition-all"
          >
            <Send className="w-4 h-4" />
            <span>Discuss on Telegram</span>
          </a>

          <a
            href={SITE_CONFIG.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs sm:text-sm shadow-md transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Discuss on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Notices */}
      <div className="space-y-4">
        <NoticeBanner type="payment" />
        <NoticeBanner type="risk" />
      </div>

    </div>
  );
};
