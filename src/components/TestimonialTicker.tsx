import React from 'react';
import { TestimonialItem } from '../types';
import { Star, MessageSquareQuote } from 'lucide-react';

const SAMPLE_FEEDBACKS: TestimonialItem[] = [
  {
    id: "f-1",
    tokenName: "$PEPECHAD",
    clientName: "Alex K.",
    package: "Pro Package",
    feedback: "The branding guidelines and logo instructions were executed with high precision. Smooth launch checklist assistance.",
    rating: 5,
    date: "Launch Q2"
  },
  {
    id: "f-2",
    tokenName: "$SOLCAT",
    clientName: "Dmitri V.",
    package: "Business Package",
    feedback: "Very straightforward communication. No hidden surprises, delivered our token setup and metadata files properly.",
    rating: 5,
    date: "Launch Q2"
  },
  {
    id: "f-3",
    tokenName: "$MOONSHIBA",
    clientName: "Tyler R.",
    package: "Advanced Package",
    feedback: "Loved that everything was discussed transparently on WhatsApp first. Great logo styling matching my dog mascot idea.",
    rating: 5,
    date: "Launch Q1"
  },
  {
    id: "f-4",
    tokenName: "$WOJAKSOL",
    clientName: "Marcus L.",
    package: "Pro Package",
    feedback: "The liquidity planning model and allocation structuring advice helped our team understand the launch math thoroughly.",
    rating: 5,
    date: "Launch Q1"
  },
  {
    id: "f-5",
    tokenName: "$BULLDOG",
    clientName: "Kenji S.",
    package: "Business Package",
    feedback: "Social media guidance was crystal clear. Handled all project revisions efficiently before the final handoff.",
    rating: 5,
    date: "Launch Q2"
  },
  {
    id: "f-6",
    tokenName: "$FLOKIX",
    clientName: "Carlos M.",
    package: "Advanced Package",
    feedback: "Quick turnaround for token configuration and banner assets. Honest service with zero inflated promises.",
    rating: 5,
    date: "Launch Q2"
  },
  {
    id: "f-7",
    tokenName: "$NEONFROG",
    clientName: "Siddharth P.",
    package: "Pro Package",
    feedback: "Priority communication was top-tier. They assisted us through every deployment phase on our schedule.",
    rating: 5,
    date: "Launch Q2"
  },
  {
    id: "f-8",
    tokenName: "$CHADAPE",
    clientName: "Liam W.",
    package: "Business Package",
    feedback: "Clean requirements process. We submitted the form, confirmed payment terms on Telegram, and received our full kit.",
    rating: 5,
    date: "Launch Q1"
  },
  {
    id: "f-9",
    tokenName: "$GOLDCOIN",
    clientName: "Hassan B.",
    package: "Advanced Package",
    feedback: "Appreciated the honesty regarding advertising and liquidity budgets being separate. Clear professional team.",
    rating: 5,
    date: "Launch Q2"
  },
  {
    id: "f-10",
    tokenName: "$ELITEWHALE",
    clientName: "Oliver G.",
    package: "Pro Package",
    feedback: "Comprehensive post-launch guidance and tokenomics documentation. Will definitely collaborate again.",
    rating: 5,
    date: "Launch Q2"
  },
  {
    id: "f-11",
    tokenName: "$ROCKETDOGE",
    clientName: "Elena N.",
    package: "Business Package",
    feedback: "Prompt replies during our scheduled support period. The branding kit made our social channels look authentic.",
    rating: 5,
    date: "Launch Q1"
  }
];

export const TestimonialTicker: React.FC = () => {
  // Duplicate list to create a seamless infinite marquee
  const tickerItems = [...SAMPLE_FEEDBACKS, ...SAMPLE_FEEDBACKS];

  return (
    <section className="w-full py-12 overflow-hidden relative">
      
      {/* Header section with explicit Sample Client Feedback label */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
          <span>Client Experience</span>
        </div>
        <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
          Sample Client Feedback
        </h3>
        <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto mt-1">
          Representative testimonials and project reviews from founders who prepared their token launches with Meme Coin Elite.
        </p>
      </div>

      {/* Fade Gradients on edges for smooth entry/exit */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#070709] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#070709] to-transparent z-10 pointer-events-none"></div>

      {/* Continuous Marquee Container */}
      <div className="flex w-full overflow-hidden select-none">
        <div className="animate-marquee-continuous flex items-stretch gap-4 py-2">
          {tickerItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-[290px] sm:w-[330px] flex-shrink-0 rounded-2xl bg-[#111119] border border-amber-500/15 p-5 flex flex-col justify-between hover:border-amber-500/40 hover:bg-[#151522] transition-all duration-200 shadow-lg group"
            >
              {/* Card Top: Token Tag & Rating */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-amber-500/15 text-amber-300 border border-amber-500/25">
                      {item.tokenName}
                    </span>
                    <span className="text-[10px] text-gray-400 font-medium px-2 py-0.5 rounded bg-white/5">
                      {item.package}
                    </span>
                  </div>
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Feedback Quote */}
                <div className="relative">
                  <MessageSquareQuote className="w-4 h-4 text-amber-500/30 absolute -top-1 -left-1" />
                  <p className="text-xs sm:text-sm text-gray-300 pl-4 italic leading-relaxed">
                    "{item.feedback}"
                  </p>
                </div>
              </div>

              {/* Card Footer: Client Name & Date */}
              <div className="pt-4 mt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-400">
                <span className="font-semibold text-gray-200">{item.clientName}</span>
                <span className="text-gray-500">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
