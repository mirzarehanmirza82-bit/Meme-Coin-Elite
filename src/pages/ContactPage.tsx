import React, { useState } from 'react';
import { PageRoute, ContactFormData } from '../types';
import { SITE_CONFIG } from '../siteConfig';
import { NoticeBanner } from '../components/NoticeBanner';
import { SubmissionModal } from '../components/SubmissionModal';
import { 
  Mail, 
  MessageSquare, 
  Send, 
  Clock, 
  Copy, 
  Check, 
  ArrowRight,
  ShieldCheck,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Globe
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageRoute) => void;
}

const REASON_OPTIONS = [
  "I want more information",
  "I want to confirm an order",
  "I want to request changes",
  "I need project guidance",
  "I want to discuss advertising",
  "I want to discuss VIP/VVIP",
  "Other"
];

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    whatsapp: "",
    telegram: "",
    reason: "I want more information",
    subject: "",
    message: ""
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preparedSubject, setPreparedSubject] = useState("");
  const [preparedBody, setPreparedBody] = useState("");

  const isFormValid = 
    formData.name.trim().length > 0 && 
    formData.email.trim().length > 0 && 
    formData.email.includes("@") &&
    formData.message.trim().length > 0;

  const buildMessageContent = () => {
    const finalSubject = formData.subject.trim() 
      ? `Meme Coin Elite Inquiry: ${formData.subject}` 
      : `Meme Coin Elite Inquiry — ${formData.reason} (${formData.name})`;

    const body = `MEME COIN ELITE - DIRECT CLIENT INQUIRY
--------------------------------------------------
SENDER DETAILS:
- Name: ${formData.name}
- Email: ${formData.email}
- WhatsApp / Phone: ${formData.whatsapp || "Not provided"}
- Telegram: ${formData.telegram || "Not provided"}

INQUIRY DETAILS:
- Purpose: ${formData.reason}
- Subject: ${formData.subject || formData.reason}

MESSAGE:
${formData.message}

--------------------------------------------------
* Please note: Our team will review your inquiry and contact you within 1–2 days.
Sent via Meme Coin Elite Official Platform`;

    return { subject: finalSubject, body };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    const { subject, body } = buildMessageContent();
    setPreparedSubject(subject);
    setPreparedBody(body);
    setIsModalOpen(true);

    // Also attempt mailto in background if available
    try {
      const mailtoUrl = SITE_CONFIG.getMailtoUrl(subject, body);
      window.location.href = mailtoUrl;
    } catch {
      // Handled via modal
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SITE_CONFIG.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">
      
      {/* Top Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Direct Founder Communication</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
          Contact <span className="text-gold-gradient">Meme Coin Elite</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
          Need More Information? If you want to know more about our services, packages, requirements, or launch strategy, reach out to us directly. We are happy to answer all your questions before starting.
        </p>
      </div>

      {/* Prominent Response Timeline Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-[#12121D] via-[#171728] to-[#12121D] border border-amber-500/30 p-6 sm:p-7 shadow-xl space-y-2">
        <div className="flex items-center gap-2.5 text-amber-300 font-bold text-sm">
          <Clock className="w-5 h-5 text-amber-400" />
          <span>Expected Response Timeline</span>
        </div>
        <p className="text-gray-200 text-xs sm:text-sm leading-relaxed font-medium">
          {SITE_CONFIG.responseNotice}
        </p>
      </div>

      {/* 3 Dedicated Communication Channel Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: WhatsApp */}
        <div className="rounded-3xl bg-[#0F0F17] border border-amber-500/20 p-6 sm:p-8 flex flex-col justify-between hover:border-[#25D366]/60 transition-all shadow-xl group">
          <div className="space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform">
              <MessageSquare className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-white">
                WhatsApp
              </h3>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                Connect directly for instant questions, scope reviews, or token launch discussions.
              </p>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-white/5 space-y-2.5">
            <a
              href={SITE_CONFIG.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20 transition-all cursor-pointer"
            >
              <span>Chat on WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Card 2: Telegram */}
        <div className="rounded-3xl bg-[#0F0F17] border border-amber-500/20 p-6 sm:p-8 flex flex-col justify-between hover:border-[#229ED9]/60 transition-all shadow-xl group">
          <div className="space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-[#229ED9]/10 border border-[#229ED9]/30 flex items-center justify-center text-[#229ED9] group-hover:scale-110 transition-transform">
              <Send className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-white">
                Telegram
              </h3>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                Send your project brief, discuss token mechanics, or request community strategy advice.
              </p>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-white/5 space-y-2.5">
            <a
              href={SITE_CONFIG.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-[#229ED9] hover:bg-[#1e8ec3] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#229ED9]/20 transition-all cursor-pointer"
            >
              <span>Message on Telegram</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Card 3: Email */}
        <div className="rounded-3xl bg-[#0F0F17] border border-amber-500/20 p-6 sm:p-8 flex flex-col justify-between hover:border-amber-400/60 transition-all shadow-xl group">
          <div className="space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
              <Mail className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-white">
                Email
              </h3>
              <p className="text-xs text-amber-300/90 font-mono mt-0.5 break-all">
                {SITE_CONFIG.email}
              </p>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                Send comprehensive specifications, requirements lists, or partnership inquiries.
              </p>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-white/5 space-y-2">
            <a
              href={SITE_CONFIG.getGmailUrl("Meme Coin Elite Inquiry", "Hello Meme Coin Elite team,\n\nI would like to discuss a project with you.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 rounded-xl bg-red-600/20 hover:bg-red-600/30 border border-red-500/40 text-red-300 hover:text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Open in Gmail</span>
            </a>

            <div className="flex items-center gap-2">
              <a
                href={SITE_CONFIG.getMailtoUrl("Meme Coin Elite Inquiry", "Hello Meme Coin Elite team,\n\nI would like to inquire about your services.")}
                className="flex-1 py-2 px-3 rounded-xl bg-[#1C1C2C] hover:bg-amber-500 hover:text-black text-amber-300 border border-amber-500/30 font-semibold text-[11px] flex items-center justify-center gap-1 transition-all"
              >
                <span>Mail App</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex-1 py-2 px-3 rounded-xl bg-[#1C1C2C] hover:bg-[#28283E] text-gray-300 border border-white/10 font-semibold text-[11px] flex items-center justify-center gap-1 transition-all cursor-pointer"
              >
                {copiedEmail ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedEmail ? "Copied!" : "Copy Email"}</span>
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Two Column Layout: Business Hours & Interactive Contact Form */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        
        {/* Left Column: Business Hours & Operational Details (Col 2) */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Business Hours Card */}
          <div className="p-6 sm:p-7 rounded-3xl bg-[#0F0F17] border border-amber-500/20 space-y-5 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-white">
                  Operational Schedule
                </h3>
                <span className="text-[11px] text-amber-300/80 font-medium">
                  {SITE_CONFIG.businessHours.timezone}
                </span>
              </div>
            </div>

            <div className="space-y-3 text-xs text-gray-300">
              <div className="p-3 rounded-xl bg-[#14141F] border border-white/5 flex flex-col gap-0.5">
                <span className="text-gray-400 font-medium">Monday – Thursday</span>
                <span className="text-white font-bold text-sm">10:00 AM – 9:00 PM (PKT)</span>
              </div>

              <div className="p-3 rounded-xl bg-[#14141F] border border-white/5 flex flex-col gap-0.5">
                <span className="text-gray-400 font-medium">Friday – Saturday</span>
                <span className="text-white font-bold text-sm">3:00 PM – 6:00 PM (PKT)</span>
              </div>

              <div className="p-3 rounded-xl bg-[#14141F] border border-white/5 flex items-center justify-between">
                <span className="text-gray-400 font-medium">Sunday</span>
                <span className="text-amber-400/90 font-bold">Closed</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#161622] border border-amber-500/15 text-[11px] text-gray-300 leading-relaxed">
              <span className="text-amber-300 font-semibold block mb-0.5">Response Time Notice:</span>
              Due to high client volume, we review inquiries carefully and respond within 1–2 business days.
            </div>
          </div>

          {/* Quick Notice */}
          <div className="p-5 rounded-2xl bg-[#111118] border border-white/10 text-xs text-gray-300 space-y-2">
            <div className="flex items-center gap-2 text-amber-300 font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Direct Agreement Principle</span>
            </div>
            <p className="text-gray-400 leading-relaxed text-[11px]">
              No cryptocurrency or credit card payment is collected on this website. Final payment methods and milestones are mutually agreed upon in direct writing before work begins.
            </p>
          </div>

        </div>

        {/* Right Column: Contact Form (Col 3) */}
        <div className="lg:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-8 rounded-3xl bg-[#0F0F17] border border-amber-500/25 shadow-2xl space-y-5"
          >
            <div className="border-b border-white/10 pb-4 space-y-1">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                Send Direct Inquiry
              </h3>
              <p className="text-xs text-gray-400">
                Fill out the form below. Submitting will prepare your inquiry and open direct sending options (Gmail, WhatsApp, Telegram, or Email).
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1.5">
                  Your Name <span className="text-amber-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#151522] border border-amber-500/20 focus:border-amber-400 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1.5">
                  Your Email <span className="text-amber-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. founder@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#151522] border border-amber-500/20 focus:border-amber-400 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1.5">
                  WhatsApp Number (Optional)
                </label>
                <input
                  type="tel"
                  placeholder="e.g. +1 234 567 8900"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  className="w-full bg-[#151522] border border-amber-500/20 focus:border-amber-400 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1.5">
                  Telegram Username (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. @MyTelegramUser"
                  value={formData.telegram}
                  onChange={(e) => setFormData({ ...formData, telegram: e.target.value })}
                  className="w-full bg-[#151522] border border-amber-500/20 focus:border-amber-400 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-300 mb-1.5">
                Reason for Contact <span className="text-amber-400">*</span>
              </label>
              <select
                value={formData.reason}
                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                className="w-full bg-[#151522] border border-amber-500/20 focus:border-amber-400 rounded-xl px-4 py-2.5 text-xs text-white outline-none cursor-pointer"
              >
                {REASON_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-300 mb-1.5">
                Subject (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Question regarding Business Package & launch timeline"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full bg-[#151522] border border-amber-500/20 focus:border-amber-400 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-300 mb-1.5">
                Message / What do you need help with? <span className="text-amber-400">*</span>
              </label>
              <textarea
                required
                rows={4}
                placeholder="Tell us about your token concept, preferred timeline, questions about package deliverables, or custom requirements..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#151522] border border-amber-500/20 focus:border-amber-400 rounded-xl p-3.5 text-xs text-white placeholder-gray-500 outline-none leading-relaxed"
              />
            </div>

            {/* Action Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={!isFormValid}
                className={`w-full py-4 px-6 rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
                  isFormValid
                    ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-600 hover:from-amber-300 hover:to-yellow-500 text-black shadow-lg shadow-amber-500/25 cursor-pointer transform hover:scale-[1.01]'
                    : 'bg-gray-800 text-gray-500 cursor-not-allowed border border-gray-700'
                }`}
              >
                <Send className="w-4 h-4" />
                <span>Submit Inquiry (Open Contact Channels)</span>
              </button>
            </div>

            <div className="space-y-2 pt-1 text-center">
              <p className="text-[11px] text-gray-400">
                Direct founder communication. We reply within 1–2 business days.
              </p>
              <p className="text-[11px] text-amber-300/90 font-medium">
                {SITE_CONFIG.seriousInquiryNotice}
              </p>
            </div>
          </form>
        </div>

      </div>

      {/* Interactive Submission Hub Modal */}
      <SubmissionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Inquiry Prepared Successfully"
        subtitle="Choose your preferred contact method below to deliver your message to the founder team."
        subject={preparedSubject}
        body={preparedBody}
        recipientEmail={SITE_CONFIG.email}
      />

      {/* Notices */}
      <div className="space-y-4">
        <NoticeBanner type="completion" />
        <NoticeBanner type="risk" />
      </div>

    </div>
  );
};
