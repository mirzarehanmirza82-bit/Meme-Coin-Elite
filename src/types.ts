export type PageRoute = 
  | "home"
  | "packages"
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
