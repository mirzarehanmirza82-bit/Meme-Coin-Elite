/**
 * MEME COIN ELITE - Global Site & Package Configuration
 * Easily update contact links, package prices, support durations, and business details here.
 */

export const SITE_CONFIG = {
  siteName: "Meme Coin Elite",
  tagline: "MEME COIN CREATION • BRANDING • LAUNCH SUPPORT",
  
  // WhatsApp Business & Direct Channels
  whatsapp: "https://wa.me/message/NI5MWSRWGEGKN1",
  telegram: "https://t.me/MirzaRehan6",
  email: "memecoinelite@gmail.com",

  // VIP Community Links & Pricing
  vipGroup: {
    whatsapp: "https://chat.whatsapp.com/D1TcCUq8DK70B2oIntKkb3?s=sw&p=a&mlu=0&ilr=4",
    telegram: "https://t.me/+sC1Wezg3TqNkNzVk",
    pricing: {
      monthly: { price: 95, originalPrice: 100, label: "Monthly Access" },
      yearly: { price: 999, originalPrice: 1140, label: "Yearly Pass", savings: "Save $141" },
      lifetime: { price: 4499, originalPrice: 6199, label: "Lifetime VIP Access", badge: "Limited Slots / Limited Time Offer" }
    },
    joinGuidance: "To join the group, click on the WhatsApp button below. Our representative will guide you on how to join the group after fee payment."
  },

  // VVIP Community Links & Pricing
  vvipGroup: {
    whatsapp: "https://chat.whatsapp.com/KEBolqepYZ8BHW2UihTng5?s=sh&p=a&mlu=0&ilr=4",
    telegram: "https://t.me/+6IYTH2aqd0A0NGNk",
    pricing: {
      monthly: { price: 199, originalPrice: 225, label: "Monthly Access" },
      yearly: { price: 1995, originalPrice: 2380, label: "Yearly Pass", savings: "Save $385" },
      lifetime: { price: 6349, originalPrice: 8449, label: "Lifetime VVIP Concierge", badge: "Limited Slots / Limited Time Offer" }
    },
    joinGuidance: "To join the group, click on the WhatsApp button below. Our representative will guide you on how to join the group after fee payment."
  },

  // Direct Communication Link Generators
  getWhatsAppUrl: (_text?: string) => {
    return "https://wa.me/message/NI5MWSRWGEGKN1";
  },
  getTelegramUrl: () => "https://t.me/MirzaRehan6",
  getGmailUrl: (subject: string, body: string) => 
    `https://mail.google.com/mail/?view=cm&fs=1&to=memecoinelite@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
  getMailtoUrl: (subject: string, body: string) =>
    `mailto:memecoinelite@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,

  // Disclaimers & Notices
  responseNotice: "Please note: There may be a short response delay. We will review your inquiry and contact you within 1–2 business days.",
  seriousInquiryNotice: "Notice: Serious inquiries only. Please refrain from spam, time-wasting, or unsolicited bargaining. Unserious messages will be disregarded.",

  // Business Operational Info
  supportDays: "14 Days",
  businessHours: {
    weekdays: "Monday – Thursday: 10:00 AM – 9:00 PM",
    weekend: "Friday – Saturday: 3:00 PM – 6:00 PM",
    sunday: "Sunday: Closed",
    timezone: "Pakistan Standard Time (PKT)"
  },

  // Advance SOL Fee Terms
  advanceFeeNotice: "An advance fee is required based on the requirements of the individual package and is needed up front as part of the package terms to proceed with the meme coin project.",
  advanceTerms: "Work begins only after the advance fee is received. We will then confirm your coin specifications, gather requirements, and proceed with creation and listing as instructed. Remaining balance is due upon project completion, based on your chosen package.",
  supportPeriodDisclaimer: "Included package support periods (e.g. 14 Days for Advanced, 21 Days for Business, 30 Days for Pro) cover operational guidance and standard troubleshooting for delivered deliverables, and do not constitute unlimited revision labor.",
  mainHeadline: "Your Vision, Our Expertise: Launch Your Meme Coin Project Profitably"
};

export const PACKAGE_CONFIG = {
  advanced: {
    id: "advanced",
    name: "Advanced",
    price: 1299,
    originalPrice: 1380,
    discount: 81,
    advanceFee: "5–7 SOL",
    solRequirement: "5.7 SOL",
    badge: "Popular Starter",
    description: "Essential full-service meme coin setup and launch preparation for aspiring project founders.",
    supportPeriod: "14 Days",
    includedFeatures: [
      "Meme coin creation & smart token configuration",
      "Professional branding & visual styling guide",
      "Custom logo design based on your instructions (No image upload required)",
      "Token supply setup (10M, 100M, 1B, or 10B)",
      "Project requirement & launch checklist preparation",
      "Website link & metadata project integration",
      "Social media setup & management guidance (X, Telegram, Discord, TikTok, etc.)",
      "Launch day preparation & deployment assistance",
      "Liquidity planning guidance & allocation strategy",
      "14 Days client support for delivered work"
    ],
    addOns: [
      { name: "Full Social Media / Community Setup", price: "+$100" },
      { name: "New Dedicated Project Website & Basic Hosting", price: "+$100" },
      { name: "Additional Custom Changes (Scope revisions)", price: "+$25" }
    ],
    notes: [
      "Advance Fee: 5–7 SOL required up front as part of the package terms to proceed with the project",
      "Project Requirement: 5.7 SOL (blockchain launch requirement, not sent through website)",
      "Advertising is not included (optional budgets: $100, $200, $300, $500, $1,000)",
      "No guaranteed profits, token prices, or market volume"
    ]
  },

  business: {
    id: "business",
    name: "Business",
    price: 1999,
    originalPrice: 2238,
    discount: 239,
    advanceFee: "6–7 SOL",
    solRequirement: "6–7 SOL",
    badge: "Most Recommended",
    description: "Expanded branding, marketing preparation, and project guidance for dedicated meme coin teams.",
    supportPeriod: "21 Days",
    includedFeatures: [
      "Advanced meme coin creation assistance",
      "Professional branding & comprehensive aesthetic suite",
      "Logo design tailored to client's detailed creative vision",
      "Token setup & custom parameter structuring",
      "Project requirement preparation & launch document pack",
      "Website link/project integration",
      "Social media management & channel architecture guidance",
      "Launch preparation & community hype strategy walkthrough",
      "Advanced customization within project scope",
      "Extended 21-day client support & issue troubleshooting",
      "Marketing preparation & initial campaign roadmap",
      "Project guidance & tokenomics review"
    ],
    addOns: [
      { name: "Full Social Media / Community Setup", price: "+$100" },
      { name: "New Dedicated Project Website & Basic Hosting", price: "+$100" },
      { name: "Additional Custom Changes", price: "+$25" }
    ],
    notes: [
      "Advance Fee: 6–7 SOL required up front as part of the package terms to proceed with the project",
      "Project Requirement: 6–7 SOL (blockchain launch requirement, not sent through website)",
      "Marketing preparation included; advertising budgets separate",
      "No payment or crypto transfer collected on website"
    ]
  },

  pro: {
    id: "pro",
    name: "Pro",
    price: 2750,
    originalPrice: 3100,
    discount: 350,
    advanceFee: "12–13 SOL",
    solRequirement: "12–13 SOL",
    badge: "Elite Launchpad",
    description: "Highest-tier full-scale launch support, priority communication, liquidity strategy, and post-launch guidance.",
    supportPeriod: "30 Days",
    includedFeatures: [
      "Premium meme coin creation assistance & custom structuring",
      "Premium branding, banners, color palettes & badges",
      "Professional logo design crafted to high fidelity",
      "Advanced project preparation & tokenomics documentation",
      "Website/project link integration & SEO-ready structure",
      "Social media guidance & community growth manual",
      "Launch preparation & multi-phase rollout framework",
      "Liquidity planning assistance & pool depth modeling",
      "Marketing planning & tailored promotion framework",
      "Advertising planning & targeted channel selection",
      "Advanced customization & dedicated review sessions",
      "Priority client support (30 Days)",
      "Post-launch guidance & ecosystem scaling advice"
    ],
    addOns: [
      { name: "Full Social Media / Community Setup", price: "+$100" },
      { name: "New Dedicated Project Website & Basic Hosting", price: "+$100" },
      { name: "Additional Custom Changes", price: "+$25" }
    ],
    notes: [
      "Advance Fee: 12–13 SOL required up front as part of the package terms to proceed with the project",
      "Project Requirement: 12–13 SOL (blockchain launch requirement, not sent through website)",
      "Advertising & liquidity are separate direct expenses",
      "No financial guarantees or exchange approval promises"
    ]
  }
};
