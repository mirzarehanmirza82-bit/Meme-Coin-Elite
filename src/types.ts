export type PageRoute = 
  | "home"
  | "packages"
  | "projects"
  | "requirements"
  | "how-it-works"
  | "about"
  | "contact"
  | "faq"
  | "referral"
  | "vip"
  | "vvip"
  | "privacy-policy"
  | "terms";

export interface PackageData {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  solRequirement: string;
  advanceFee: string;
  badge?: string;
  description: string;
  supportPeriod: string;
  includedFeatures: string[];
  addOns: { name: string; price: string }[];
  notes: string[];
}

export interface RequirementsFormData {
  clientName: string;
  email: string;
  whatsapp: string;
  telegram: string;
  selectedPackage: "advanced" | "business" | "pro";
  tokenName: string;
  tokenSymbol: string;
  totalSupply: string;
  customTotalSupply: string;
  logoInstructions: string;
  existingWebsite: string;
  socialLinks: {
    twitter: string;
    telegram: string;
    discord: string;
    instagram: string;
    tiktok: string;
    youtube: string;
  };
  projectDescription: string;
  additionalRequirements: string;
  advertisementOption: string;
  socialMediaSetupOption: "guidance" | "create";
  websiteOption: "existing" | "new";
  customChangesOption: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  whatsapp: string;
  telegram: string;
  reason: string;
  subject: string;
  message: string;
}

export interface TestimonialItem {
  id: string;
  tokenName: string;
  clientName: string;
  package: string;
  feedback: string;
  rating: number;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
  highlight?: boolean;
}

export interface ProjectItem {
  id: string;
  codeName: string;
  tagline: string;
  image: string;
  category: "all" | "mega-gainer" | "high-volume" | "breakout-midcap";
  categoryLabel: string;
  categories: string[];
  chain: string;
  dex: string;
  stats: {
    peakGain24h: string;
    gainPercentage: number;
    marketCap: string;
    fdv: string;
    volume24h: string;
    liquidity: string;
    isLiquidityLocked: boolean;
    priceUsd: string;
    priceSol: string;
    transactions: string;
    buys: string;
    sells: string;
    buyVolume: string;
    sellVolume: string;
    traders: string;
    buyers: string;
    sellers: string;
  };
  channels: string[];
  summary: string;
  highlights: string[];
  privacyNotice: string;
}

