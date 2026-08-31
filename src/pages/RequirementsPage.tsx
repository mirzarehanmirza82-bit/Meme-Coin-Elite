import React, { useState } from 'react';
import { PageRoute, RequirementsFormData } from '../types';
import { PACKAGE_CONFIG, SITE_CONFIG } from '../siteConfig';
import { NoticeBanner } from '../components/NoticeBanner';
import { SubmissionModal } from '../components/SubmissionModal';
import { 
  FileText, 
  Send, 
  CheckCircle2, 
  AlertTriangle, 
  Copy, 
  Sparkles, 
  MessageSquare, 
  ChevronRight,
  Globe,
  Coins,
  Palette,
  Megaphone,
  Share2,
  Lock,
  Layers,
  Clock
} from 'lucide-react';

interface RequirementsPageProps {
  onNavigate: (page: PageRoute) => void;
}

const TOTAL_SUPPLY_OPTIONS = [
  "10 Million",
  "100 Million",
  "1 Billion",
  "10 Billion"
];

const ADVERTISEMENT_OPTIONS = [
  "No advertising",
  "$100",
  "$200",
  "$300",
  "$500",
  "$1,000",
  "Discuss with us"
];

export const RequirementsPage: React.FC<RequirementsPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<RequirementsFormData>({
    clientName: "",
    email: "",
    whatsapp: "",
    telegram: "",
    selectedPackage: "business",
    tokenName: "",
    tokenSymbol: "",
    totalSupply: "1 Billion",
    customTotalSupply: "",
    logoInstructions: "",
    existingWebsite: "",
    socialLinks: {
      twitter: "",
      telegram: "",
      discord: "",
      instagram: "",
      tiktok: "",
      youtube: ""
    },
    projectDescription: "",
    additionalRequirements: "",
    advertisementOption: "No advertising",
    socialMediaSetupOption: "guidance",
    websiteOption: "existing",
    customChangesOption: false
  });

  const [copiedNotification, setCopiedNotification] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preparedSubject, setPreparedSubject] = useState("");
  const [preparedBody, setPreparedBody] = useState("");

  const selectedPkg = PACKAGE_CONFIG[formData.selectedPackage];

  // Validation: Required fields check
  const isNameValid = formData.clientName.trim().length > 0;
  const isEmailValid = formData.email.trim().length > 0 && formData.email.includes("@");
  const isWhatsAppValid = formData.whatsapp.trim().length > 0;
  const isTokenNameValid = formData.tokenName.trim().length > 0;
  const isTokenSymbolValid = formData.tokenSymbol.trim().length > 0;
  const isSupplyValid = formData.totalSupply !== "Custom" || formData.customTotalSupply.trim().length > 0;
  const isLogoInstructionsValid = formData.logoInstructions.trim().length > 0;

  const isFormComplete = 
    isNameValid && 
    isEmailValid && 
    isWhatsAppValid && 
    isTokenNameValid && 
    isTokenSymbolValid && 
    isSupplyValid && 
    isLogoInstructionsValid;

  // Calculate estimated total package reference price
  const calculateTotalEstimate = () => {
    let base = selectedPkg.price;
    if (formData.socialMediaSetupOption === "create") base += 100;
    if (formData.websiteOption === "new") base += 100;
    if (formData.customChangesOption) base += 25;
    return base;
  };

  // Generate structured mailto content
  const generateMailBody = () => {
    const finalSupply = formData.totalSupply === "Custom" 
      ? `Custom (${formData.customTotalSupply})` 
      : formData.totalSupply;

    const socialSummary = [
      formData.socialLinks.twitter && `X/Twitter: ${formData.socialLinks.twitter}`,
      formData.socialLinks.telegram && `Telegram: ${formData.socialLinks.telegram}`,
      formData.socialLinks.discord && `Discord: ${formData.socialLinks.discord}`,
      formData.socialLinks.instagram && `Instagram: ${formData.socialLinks.instagram}`,
      formData.socialLinks.tiktok && `TikTok: ${formData.socialLinks.tiktok}`,
      formData.socialLinks.youtube && `YouTube: ${formData.socialLinks.youtube}`,
    ].filter(Boolean).join("\n") || "None specified";

    return `NEW MEME COIN ELITE PROJECT REQUIREMENTS
--------------------------------------------------
CLIENT INFORMATION:
- Client Name: ${formData.clientName}
- Email: ${formData.email}
- WhatsApp Number: ${formData.whatsapp}
- Telegram Username: ${formData.telegram || "Not provided"}

PACKAGE DETAILS:
- Selected Package: ${selectedPkg.name} Package
- Package Reference Price: $${selectedPkg.price} (Original: $${selectedPkg.originalPrice}, Discount: Save $${selectedPkg.discount})
- Blockchain SOL Project Requirement: ${selectedPkg.solRequirement}
- Estimated Total Add-On Value: $${calculateTotalEstimate()}

TOKEN SPECIFICATIONS:
- Token Name: ${formData.tokenName}
- Token Symbol: ${formData.tokenSymbol}
- Total Supply: ${finalSupply}

CREATIVE & BRANDING INSTRUCTIONS:
- Logo Instructions:
${formData.logoInstructions}

PROJECT LINKS & SOCIAL MEDIA:
- Existing Website: ${formData.existingWebsite || "None"}
- Social Media Links:
${socialSummary}

ADD-ONS & PREFERENCES:
- Social Media Setup: ${formData.socialMediaSetupOption === "create" ? "Create for me (+$100)" : "Guidance only (Included)"}
- Website Option: ${formData.websiteOption === "new" ? "I need a new website (+$100)" : "I have a website / Link only"}
- Custom Changes: ${formData.customChangesOption ? "Additional customization requested (+$25)" : "Standard scope"}
- Advertising Option: ${formData.advertisementOption}

ADDITIONAL INFORMATION:
- Project Description:
${formData.projectDescription || "None provided"}

- Additional Requirements:
${formData.additionalRequirements || "None provided"}

--------------------------------------------------
* Note: Package prices are reference rates. Final scope and payment terms will be agreed directly before starting. No cryptocurrency transfer occurs on the website.`;
  };

  const handleOrderNow = () => {
    if (!isFormComplete) return;

    const subject = `New Meme Coin Elite Project Request — [${formData.tokenName || "Meme Coin"}]`;
    const body = generateMailBody();
    setPreparedSubject(subject);
    setPreparedBody(body);
    setIsModalOpen(true);

    try {
      const mailtoUrl = SITE_CONFIG.getMailtoUrl(subject, body);
      window.location.href = mailtoUrl;
    } catch {
      // Handled in modal
    }
  };

  const handleCopySummary = () => {
    const body = generateMailBody();
    navigator.clipboard.writeText(body);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 4000);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
          <FileText className="w-3.5 h-3.5" />
          <span>Project Onboarding</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
          Project <span className="text-gold-gradient">Requirements</span> Form
        </h1>
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
          Provide your token parameters, mascot/logo concept, and optional preferences. When complete, click <strong className="text-amber-300">ORDER NOW</strong> to generate your finalized project brief.
        </p>
      </div>

      {/* Prominent Notice */}
      <NoticeBanner type="completion" />

      {/* Main Form Container */}
      <div className="bg-[#0F0F17] border border-amber-500/20 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-10">
        
        {/* SECTION 1: Client Contact Info */}
        <div className="space-y-4">
          <h3 className="font-heading text-lg sm:text-xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
            <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 text-xs flex items-center justify-center font-bold">1</span>
            <span>Client & Contact Details</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-gray-300 mb-1.5">
                Client Name <span className="text-amber-400">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Alex Morgan"
                value={formData.clientName}
                onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                className="w-full bg-[#151522] border border-amber-500/20 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-300 mb-1.5">
                Email Address <span className="text-amber-400">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="e.g. founder@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#151522] border border-amber-500/20 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-300 mb-1.5">
                WhatsApp Number <span className="text-amber-400">*</span>
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. +1 555 123 4567"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                className="w-full bg-[#151522] border border-amber-500/20 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-300 mb-1.5">
                Telegram Username (Optional / Recommended)
              </label>
              <input
                type="text"
                placeholder="e.g. @MemeProjectLeader"
                value={formData.telegram}
                onChange={(e) => setFormData({ ...formData, telegram: e.target.value })}
                className="w-full bg-[#151522] border border-amber-500/20 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors"
              />
            </div>
          </div>
        </div>

        {/* SECTION 2: Package Selection */}
        <div className="space-y-4">
          <h3 className="font-heading text-lg sm:text-xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
            <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 text-xs flex items-center justify-center font-bold">2</span>
            <span>Select Service Package</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {(["advanced", "business", "pro"] as const).map((pkgKey) => {
              const pkg = PACKAGE_CONFIG[pkgKey];
              const isSelected = formData.selectedPackage === pkgKey;
              return (
                <div
                  key={pkgKey}
                  onClick={() => setFormData({ ...formData, selectedPackage: pkgKey })}
                  className={`p-5 rounded-2xl cursor-pointer border-2 transition-all ${
                    isSelected
                      ? 'bg-[#1C1824] border-amber-400 shadow-lg shadow-amber-500/20'
                      : 'bg-[#12121A] border-white/10 hover:border-amber-500/30'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-bold text-base text-white">{pkg.name}</span>
                    <span className="text-xs font-extrabold text-amber-300">${pkg.price}</span>
                  </div>
                  <div className="text-[11px] text-gray-400 mt-1 line-through">${pkg.originalPrice}</div>
                  <div className="text-xs text-amber-300/90 font-medium mt-2">
                    SOL Req: {pkg.solRequirement}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SECTION 3: Token Parameters */}
        <div className="space-y-4">
          <h3 className="font-heading text-lg sm:text-xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
            <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 text-xs flex items-center justify-center font-bold">3</span>
            <span>Token Name, Symbol & Total Supply</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-gray-300 mb-1.5">
                Token Name <span className="text-amber-400">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Pepe Chad"
                value={formData.tokenName}
                onChange={(e) => setFormData({ ...formData, tokenName: e.target.value })}
                className="w-full bg-[#151522] border border-amber-500/20 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-300 mb-1.5">
                Token Symbol / Ticker <span className="text-amber-400">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. $PCHAD"
                value={formData.tokenSymbol}
                onChange={(e) => setFormData({ ...formData, tokenSymbol: e.target.value })}
                className="w-full bg-[#151522] border border-amber-500/20 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors font-mono"
              />
            </div>
          </div>

          {/* Total Supply Selectable Buttons */}
          <div className="space-y-2 pt-2">
            <label className="block text-xs font-bold text-gray-300">
              Total Supply Selection <span className="text-amber-400">*</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {TOTAL_SUPPLY_OPTIONS.map((opt) => {
                const isSelected = formData.totalSupply === opt;
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setFormData({ ...formData, totalSupply: opt })}
                    className={`py-3 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer border text-center ${
                      isSelected
                        ? 'bg-amber-400 text-black border-amber-400 shadow-md shadow-amber-500/20 font-extrabold'
                        : 'bg-[#151522] text-gray-300 border-white/10 hover:border-amber-500/40 hover:text-white'
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* SECTION 4: Logo Instructions (No File Upload) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <h3 className="font-heading text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 text-xs flex items-center justify-center font-bold">4</span>
              <span>Logo Design Instructions (Included)</span>
            </h3>
            <span className="text-[11px] text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
              No Upload Needed
            </span>
          </div>

          <p className="text-xs text-gray-400 leading-relaxed">
            You only need to tell us how you want your logo to look — for example its color, shape, style, mascot, symbol, text or overall idea. Our team will create the logo according to your instructions.
          </p>

          <div>
            <textarea
              required
              rows={4}
              placeholder="Example: I want a golden cartoon dog logo with black background, aggressive expression and the token name below it."
              value={formData.logoInstructions}
              onChange={(e) => setFormData({ ...formData, logoInstructions: e.target.value })}
              className="w-full bg-[#151522] border border-amber-500/20 focus:border-amber-400 rounded-xl p-4 text-sm text-white placeholder-gray-500 outline-none transition-colors leading-relaxed"
            />
          </div>
        </div>

        {/* SECTION 5: Add-on Choices & Advertising */}
        <div className="space-y-4">
          <h3 className="font-heading text-lg sm:text-xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
            <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 text-xs flex items-center justify-center font-bold">5</span>
            <span>Add-On Services & Preferences</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            {/* Social Media Setup Option */}
            <div className="p-4 rounded-2xl bg-[#13131C] border border-white/5 space-y-3">
              <label className="block text-xs font-bold text-white">
                Social Media Setup:
              </label>
              <div className="space-y-2 text-xs">
                <label className="flex items-center gap-2.5 cursor-pointer text-gray-300">
                  <input
                    type="radio"
                    name="socialSetup"
                    checked={formData.socialMediaSetupOption === "guidance"}
                    onChange={() => setFormData({ ...formData, socialMediaSetupOption: "guidance" })}
                    className="accent-amber-400"
                  />
                  <span>I only need guidance (Included)</span>
                </label>

                <label className="flex items-center gap-2.5 cursor-pointer text-gray-300">
                  <input
                    type="radio"
                    name="socialSetup"
                    checked={formData.socialMediaSetupOption === "create"}
                    onChange={() => setFormData({ ...formData, socialMediaSetupOption: "create" })}
                    className="accent-amber-400"
                  />
                  <span>I want you to create accounts for me (<strong className="text-amber-300">+$100</strong>)</span>
                </label>
              </div>
            </div>

            {/* Website Option */}
            <div className="p-4 rounded-2xl bg-[#13131C] border border-white/5 space-y-3">
              <label className="block text-xs font-bold text-white">
                Website Requirement:
              </label>
              <div className="space-y-2 text-xs">
                <label className="flex items-center gap-2.5 cursor-pointer text-gray-300">
                  <input
                    type="radio"
                    name="websiteOption"
                    checked={formData.websiteOption === "existing"}
                    onChange={() => setFormData({ ...formData, websiteOption: "existing" })}
                    className="accent-amber-400"
                  />
                  <span>I already have a website (or link only)</span>
                </label>

                <label className="flex items-center gap-2.5 cursor-pointer text-gray-300">
                  <input
                    type="radio"
                    name="websiteOption"
                    checked={formData.websiteOption === "new"}
                    onChange={() => setFormData({ ...formData, websiteOption: "new" })}
                    className="accent-amber-400"
                  />
                  <span>I need a new project website (<strong className="text-amber-300">+$100</strong>)</span>
                </label>
              </div>
            </div>

            {/* Custom Changes Option */}
            <div className="p-4 rounded-2xl bg-[#13131C] border border-white/5 space-y-2">
              <label className="block text-xs font-bold text-white">
                Additional Customization:
              </label>
              <label className="flex items-center gap-2.5 cursor-pointer text-xs text-gray-300">
                <input
                  type="checkbox"
                  checked={formData.customChangesOption}
                  onChange={(e) => setFormData({ ...formData, customChangesOption: e.target.checked })}
                  className="accent-amber-400 w-4 h-4 rounded"
                />
                <span>Include extra scope revisions / customization (<strong className="text-amber-300">+$25</strong>)</span>
              </label>
              <p className="text-[11px] text-gray-400">
                Covers reasonable additional customization within agreed project scope.
              </p>
            </div>

            {/* Advertising Budget Selector */}
            <div className="p-4 rounded-2xl bg-[#13131C] border border-white/5 space-y-2">
              <label className="block text-xs font-bold text-white">
                Optional Advertising Budget:
              </label>
              <select
                value={formData.advertisementOption}
                onChange={(e) => setFormData({ ...formData, advertisementOption: e.target.value })}
                className="w-full bg-[#1A1A26] border border-amber-500/20 rounded-xl px-3 py-2.5 text-xs text-white outline-none cursor-pointer"
              >
                {ADVERTISEMENT_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              <p className="text-[11px] text-gray-400">
                Advertising is optional and separate. No views or investor counts are guaranteed.
              </p>
            </div>

          </div>
        </div>

        {/* SECTION 6: Project Description & Social Links (Optional) */}
        <div className="space-y-4">
          <h3 className="font-heading text-lg sm:text-xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
            <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 text-xs flex items-center justify-center font-bold">6</span>
            <span>Links & Description (Optional)</span>
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-300 mb-1">
                Existing Website URL (Optional)
              </label>
              <input
                type="url"
                placeholder="https://yourtoken.com"
                value={formData.existingWebsite}
                onChange={(e) => setFormData({ ...formData, existingWebsite: e.target.value })}
                className="w-full bg-[#151522] border border-amber-500/20 focus:border-amber-400 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
              <input
                type="text"
                placeholder="X / Twitter handle/link"
                value={formData.socialLinks.twitter}
                onChange={(e) => setFormData({
                  ...formData,
                  socialLinks: { ...formData.socialLinks, twitter: e.target.value }
                })}
                className="bg-[#151522] border border-white/10 rounded-xl px-3 py-2 text-white placeholder-gray-500 outline-none"
              />

              <input
                type="text"
                placeholder="Telegram group link"
                value={formData.socialLinks.telegram}
                onChange={(e) => setFormData({
                  ...formData,
                  socialLinks: { ...formData.socialLinks, telegram: e.target.value }
                })}
                className="bg-[#151522] border border-white/10 rounded-xl px-3 py-2 text-white placeholder-gray-500 outline-none"
              />

              <input
                type="text"
                placeholder="Discord invite link"
                value={formData.socialLinks.discord}
                onChange={(e) => setFormData({
                  ...formData,
                  socialLinks: { ...formData.socialLinks, discord: e.target.value }
                })}
                className="bg-[#151522] border border-white/10 rounded-xl px-3 py-2 text-white placeholder-gray-500 outline-none"
              />

              <input
                type="text"
                placeholder="Instagram link"
                value={formData.socialLinks.instagram}
                onChange={(e) => setFormData({
                  ...formData,
                  socialLinks: { ...formData.socialLinks, instagram: e.target.value }
                })}
                className="bg-[#151522] border border-white/10 rounded-xl px-3 py-2 text-white placeholder-gray-500 outline-none"
              />

              <input
                type="text"
                placeholder="TikTok profile"
                value={formData.socialLinks.tiktok}
                onChange={(e) => setFormData({
                  ...formData,
                  socialLinks: { ...formData.socialLinks, tiktok: e.target.value }
                })}
                className="bg-[#151522] border border-white/10 rounded-xl px-3 py-2 text-white placeholder-gray-500 outline-none"
              />

              <input
                type="text"
                placeholder="YouTube channel"
                value={formData.socialLinks.youtube}
                onChange={(e) => setFormData({
                  ...formData,
                  socialLinks: { ...formData.socialLinks, youtube: e.target.value }
                })}
                className="bg-[#151522] border border-white/10 rounded-xl px-3 py-2 text-white placeholder-gray-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-300 mb-1">
                Project Narrative / Concept Description
              </label>
              <textarea
                rows={3}
                placeholder="Describe your meme token lore, community theme, target audience, or launch ideas..."
                value={formData.projectDescription}
                onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                className="w-full bg-[#151522] border border-amber-500/20 rounded-xl p-3 text-xs text-white placeholder-gray-500 outline-none leading-relaxed"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-300 mb-1">
                Any Additional Requirements or Notes
              </label>
              <textarea
                rows={2}
                placeholder="Special timeline needs, specific questions, or notes for our team..."
                value={formData.additionalRequirements}
                onChange={(e) => setFormData({ ...formData, additionalRequirements: e.target.value })}
                className="w-full bg-[#151522] border border-amber-500/20 rounded-xl p-3 text-xs text-white placeholder-gray-500 outline-none leading-relaxed"
              />
            </div>
          </div>
        </div>

        {/* ORDER SUMMARY & SUBMISSION BOX */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#1A1822] via-[#12121B] to-[#0A0A10] border-2 border-amber-400/40 space-y-6">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <h4 className="font-heading text-xl font-black text-white">
                Project Summary & Submission
              </h4>
              <p className="text-xs text-gray-400 mt-0.5">
                Review your selections before generating the project email brief.
              </p>
            </div>

            <div className="text-right sm:text-right">
              <span className="text-[11px] text-gray-400 uppercase font-bold block">
                Estimated Reference Value
              </span>
              <span className="text-2xl sm:text-3xl font-black text-gold-gradient">
                ${calculateTotalEstimate()}
              </span>
            </div>
          </div>

          {/* Validation Status Indicator */}
          {!isFormComplete && (
            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>Complete the required project information to continue (Name, Email, WhatsApp, Token Name, Symbol, and Logo instructions).</span>
            </div>
          )}

          {/* ORDER NOW Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            
            {/* The ORDER NOW Button */}
            <button
              type="button"
              id="order-now-button"
              disabled={!isFormComplete}
              onClick={handleOrderNow}
              className={`w-full sm:flex-1 py-4 px-6 rounded-xl font-extrabold text-sm sm:text-base flex items-center justify-center gap-3 transition-all ${
                isFormComplete
                  ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black shadow-xl shadow-amber-500/30 cursor-pointer transform hover:scale-[1.02]'
                  : 'bg-gray-800 text-gray-500 cursor-not-allowed border border-gray-700'
              }`}
            >
              <Send className="w-4 h-4" />
              <span>ORDER NOW</span>
            </button>

            {/* Direct Contact Option */}
            <a
              href={SITE_CONFIG.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] border border-[#25D366]/40 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Contact Us Directly</span>
            </a>

            {/* Fallback Copy Button */}
            {isFormComplete && (
              <button
                type="button"
                onClick={handleCopySummary}
                className="w-full sm:w-auto px-4 py-4 rounded-xl bg-[#1C1C2C] hover:bg-[#26263A] text-amber-300 border border-amber-500/30 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                title="Copy full text in case your email client does not open"
              >
                <Copy className="w-4 h-4" />
                <span>{copiedNotification ? "Copied!" : "Copy Text"}</span>
              </button>
            )}

          </div>

          <p className="text-[11px] text-gray-400 text-center leading-relaxed">
            Clicking <strong className="text-amber-300">ORDER NOW</strong> will prepare your project brief and open direct submission options (Gmail, WhatsApp, Telegram, or Email). No payments or crypto transactions occur on this site.
          </p>

          <div className="pt-3 border-t border-white/10 text-center">
            <p className="text-xs text-amber-300/90 font-medium">
              {SITE_CONFIG.seriousInquiryNotice}
            </p>
          </div>

        </div>

      </div>

      {/* Interactive Project Submission Modal */}
      <SubmissionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Project Brief Ready to Submit"
        subtitle="Choose your preferred channel below to send your structured token brief to the founder team."
        subject={preparedSubject}
        body={preparedBody}
        recipientEmail={SITE_CONFIG.email}
      />

    </div>
  );
};
