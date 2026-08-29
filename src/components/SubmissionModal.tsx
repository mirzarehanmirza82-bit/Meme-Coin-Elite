import React, { useState } from 'react';
import { SITE_CONFIG } from '../siteConfig';
import { 
  X, 
  Send, 
  MessageSquare, 
  Mail, 
  Copy, 
  Check, 
  ExternalLink, 
  Clock, 
  ShieldCheck,
  Globe
} from 'lucide-react';

interface SubmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  subject: string;
  body: string;
  recipientEmail?: string;
}

export const SubmissionModal: React.FC<SubmissionModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  subject,
  body,
  recipientEmail = SITE_CONFIG.email
}) => {
  const [copied, setCopied] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showFullPreview, setShowFullPreview] = useState(false);

  if (!isOpen) return null;

  const handleCopyBody = () => {
    navigator.clipboard.writeText(body);
    setCopied(true);
    setTimeout(() => setCopied(false), 3500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(recipientEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3500);
  };

  const gmailUrl = SITE_CONFIG.getGmailUrl(subject, body);
  const mailtoUrl = SITE_CONFIG.getMailtoUrl(subject, body);
  // Short summary for WhatsApp to avoid URL character limit issues on some mobile devices
  const shortWhatsAppText = `Hello Meme Coin Elite! I have submitted an inquiry for "${subject}". Here are my details:\n\n${body.slice(0, 800)}${body.length > 800 ? '...\n[Full brief available]' : ''}`;
  const whatsappUrl = SITE_CONFIG.getWhatsAppUrl(shortWhatsAppText);
  const telegramUrl = SITE_CONFIG.getTelegramUrl();

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-[#0D0D15] border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[92vh] flex flex-col justify-between overflow-y-auto my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#181824] hover:bg-amber-500/20 text-gray-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2 pr-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Send className="w-3 h-3" />
            <span>Ready to Send</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xs sm:text-sm text-gray-300">
              {subtitle}
            </p>
          )}
        </div>

        {/* Response Time Notice */}
        <div className="p-4 rounded-2xl bg-[#161622] border border-amber-500/30 text-xs space-y-1.5">
          <div className="flex items-center gap-2 text-amber-300 font-bold">
            <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span>Important Response Notice</span>
          </div>
          <p className="text-gray-200 text-xs leading-relaxed font-medium">
            {SITE_CONFIG.responseNotice}
          </p>
        </div>

        {/* Action Channels Grid */}
        <div className="space-y-3">
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider">
            Choose Your Preferred Contact Method:
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            
            {/* 1. Gmail Webmail (100% Reliable browser mail) */}
            <a
              href={gmailUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-2xl bg-[#171724] hover:bg-[#202032] border border-amber-500/25 hover:border-amber-400 text-white transition-all group shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-xs text-white flex items-center gap-1.5">
                    <span>Send via Gmail</span>
                    <span className="text-[10px] bg-red-500/20 text-red-300 px-1.5 py-0.2 rounded font-semibold">Web</span>
                  </div>
                  <div className="text-[11px] text-gray-400">Opens pre-filled email in browser</div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-amber-300 transition-colors" />
            </a>

            {/* 2. WhatsApp Direct Chat */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-2xl bg-[#171724] hover:bg-[#202032] border border-amber-500/25 hover:border-[#25D366] text-white transition-all group shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-xs text-white flex items-center gap-1.5">
                    <span>Chat on WhatsApp</span>
                    <span className="text-[10px] bg-[#25D366]/20 text-[#25D366] px-1.5 py-0.2 rounded font-semibold">Direct</span>
                  </div>
                  <div className="text-[11px] text-gray-400">Send brief to founder on WhatsApp</div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#25D366] transition-colors" />
            </a>

            {/* 3. Telegram Direct Chat */}
            <a
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-2xl bg-[#171724] hover:bg-[#202032] border border-amber-500/25 hover:border-[#229ED9] text-white transition-all group shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#229ED9]/10 border border-[#229ED9]/30 flex items-center justify-center text-[#229ED9] group-hover:scale-105 transition-transform">
                  <Send className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-xs text-white flex items-center gap-1.5">
                    <span>Message on Telegram</span>
                    <span className="text-[10px] bg-[#229ED9]/20 text-[#229ED9] px-1.5 py-0.2 rounded font-semibold">Fast</span>
                  </div>
                  <div className="text-[11px] text-gray-400">Direct message channel</div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#229ED9] transition-colors" />
            </a>

            {/* 4. Default Mail App (Mailto) */}
            <a
              href={mailtoUrl}
              className="flex items-center justify-between p-3.5 rounded-2xl bg-[#171724] hover:bg-[#202032] border border-amber-500/25 hover:border-amber-400 text-white transition-all group shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-xs text-white flex items-center gap-1.5">
                    <span>Default Mail App</span>
                    <span className="text-[10px] bg-amber-500/20 text-amber-300 px-1.5 py-0.2 rounded font-semibold">Outlook / Apple</span>
                  </div>
                  <div className="text-[11px] text-gray-400">Launch system email client</div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-amber-300 transition-colors" />
            </a>

          </div>
        </div>

        {/* Copy Options Section */}
        <div className="p-4 rounded-2xl bg-[#11111A] border border-white/10 space-y-3">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="text-xs">
              <span className="text-gray-400 block text-[11px]">Official Email Address:</span>
              <span className="text-white font-mono font-bold">{recipientEmail}</span>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex-1 sm:flex-initial px-3 py-2 rounded-xl bg-[#1A1A26] hover:bg-[#242436] border border-white/10 text-xs font-semibold text-gray-200 hover:text-white flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? "Email Copied!" : "Copy Email"}</span>
              </button>

              <button
                type="button"
                onClick={handleCopyBody}
                className="flex-1 sm:flex-initial px-3.5 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-xs font-bold text-amber-300 hover:text-amber-200 flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Message Copied!" : "Copy Full Message"}</span>
              </button>
            </div>
          </div>

          {/* Toggle Full Preview */}
          <div className="pt-2 border-t border-white/5">
            <button
              type="button"
              onClick={() => setShowFullPreview(!showFullPreview)}
              className="text-[11px] text-gray-400 hover:text-amber-300 underline cursor-pointer"
            >
              {showFullPreview ? "Hide Message Preview" : "View Prepared Message Draft"}
            </button>

            {showFullPreview && (
              <pre className="mt-2 p-3 rounded-xl bg-[#09090D] border border-white/5 text-[11px] text-gray-300 font-mono overflow-x-auto whitespace-pre-wrap max-h-48 leading-relaxed">
                {body}
              </pre>
            )}
          </div>
        </div>

        {/* Security & Agreement Footer */}
        <div className="flex items-center justify-between text-[11px] text-gray-400 pt-2 border-t border-white/5">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>No automatic payment — direct founder communication only.</span>
          </div>
          <button
            onClick={onClose}
            className="text-xs text-gray-400 hover:text-white underline cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
