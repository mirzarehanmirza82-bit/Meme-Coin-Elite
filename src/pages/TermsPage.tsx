import React from 'react';
import { PageRoute } from '../types';
import { SITE_CONFIG } from '../siteConfig';
import { NoticeBanner } from '../components/NoticeBanner';
import { 
  FileText, 
  ShieldAlert, 
  CheckCircle2, 
  AlertTriangle, 
  Coins, 
  Scale 
} from 'lucide-react';

interface TermsPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
          <Scale className="w-3.5 h-3.5" />
          <span>Legal & Service Agreements</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
          Terms & <span className="text-gold-gradient">Conditions</span>
        </h1>
        <p className="text-xs sm:text-sm text-gray-400">
          Last Updated: February 2025 • Meme Coin Elite
        </p>
      </div>

      {/* Prominent Completion Notice on Terms */}
      <NoticeBanner type="completion" />

      {/* Main Content */}
      <div className="bg-[#0F0F17] border border-amber-500/20 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 text-xs sm:text-sm text-gray-300 leading-relaxed">
        
        {/* Section 1: Nature of Services */}
        <section className="space-y-3">
          <h3 className="font-heading text-lg font-bold text-white flex items-center gap-2">
            <span className="text-amber-400">1.</span>
            <span>Nature of Services</span>
          </h3>
          <p>
            Operating under our core mission: <strong className="text-white">"Your Vision, Our Expertise: Launch Your Meme Coin Project Profitably,"</strong> Meme Coin Elite provides digital design, branding, project preparation, and launch coordination services for meme coin initiatives. We operate as an independent creative and technical service provider assisting founders with asset structuring and setup guidance.
          </p>
        </section>

        {/* Section 2: Reference Pricing, Advance Fee & Payment Agreement */}
        <section className="space-y-3">
          <h3 className="font-heading text-lg font-bold text-white flex items-center gap-2">
            <span className="text-amber-400">2.</span>
            <span>Reference Pricing, Advance SOL Fee & Payment Terms</span>
          </h3>
          <p>
            The package prices displayed on this website are reference rates for service preparation. <strong className="text-white">No payment, checkout transaction, or cryptocurrency transfer is executed directly through this website.</strong>
          </p>
          <div className="p-4 sm:p-5 rounded-2xl bg-[#161320] border border-amber-500/30 text-xs sm:text-sm text-gray-200 space-y-3">
            <strong className="text-amber-300 font-bold block text-sm uppercase tracking-wide">
              Advance Fee & Project Initiation Terms:
            </strong>
            <p>
              An advance fee is required based on the requirements of the individual package and is needed up front as part of the package terms to proceed with the meme coin project.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 py-1 text-xs">
              <div className="p-2.5 rounded-xl bg-[#0E0E17] border border-amber-500/30">
                <span className="text-gray-400 block font-bold">Advanced Package</span>
                <span className="text-amber-300 font-extrabold text-sm">5–7 SOL Advance</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#0E0E17] border border-amber-500/30">
                <span className="text-gray-400 block font-bold">Business Package</span>
                <span className="text-amber-300 font-extrabold text-sm">6–7 SOL Advance</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#0E0E17] border border-amber-500/30">
                <span className="text-gray-400 block font-bold">Pro Package</span>
                <span className="text-amber-300 font-extrabold text-sm">12–13 SOL Advance</span>
              </div>
            </div>
            <p className="text-amber-200/90 font-medium pt-2 border-t border-amber-500/20 leading-relaxed">
              <strong>Execution Terms:</strong> Work begins only after the advance fee is received. We will then confirm your coin specifications, gather requirements, and proceed with creation and listing as instructed. Remaining balance is due upon project completion, based on your chosen package.
            </p>
          </div>
          <p className="text-xs text-gray-400">
            All services follow standard published package rates; previous introductory startup offers have concluded. Inquiries and correspondence are handled via direct interactive contact buttons (WhatsApp, Telegram, and Email redirection) rather than raw public email display to protect communication integrity.
          </p>
        </section>

        {/* Section 3: Revisions & Project Completion Notice */}
        <section className="p-5 rounded-2xl bg-[#161320] border border-amber-500/30 space-y-3">
          <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            <span>3. Revisions Scope & Project Completion Policy</span>
          </div>
          <p className="text-xs text-gray-300 leading-relaxed">
            All essential project requirements, mascot details, naming specifications, and token parameters must be clearly provided before final delivery. Once the project package assets have been finalized and delivered, the project is considered complete. Major structural modifications, brand overhauls, or secondary development requested after delivery will require an additional development fee.
          </p>
          <p className="text-xs text-gray-400 leading-relaxed">
            Included package support periods (e.g. 14 Days for Advanced, 21 Days for Business, 30 Days for Pro) cover operational guidance and standard troubleshooting for delivered deliverables, and do not constitute unlimited revision labor.
          </p>
        </section>

        {/* Section 4: Client Responsibility & Prohibited Use */}
        <section className="space-y-3">
          <h3 className="font-heading text-lg font-bold text-white flex items-center gap-2">
            <span className="text-amber-400">4.</span>
            <span>Client Responsibility & Prohibited Projects</span>
          </h3>
          <p>
            The client retains sole responsibility for how their token, branding, and smart contract assets are deployed, marketed, and managed. Meme Coin Elite strictly reserves the right to decline or terminate services for any project intended for illicit activities, fraud, unauthorized copyright infringement, malicious rug-pulls, or scams.
          </p>
        </section>

        {/* Section 5: Third-Party Platforms & No Guarantees */}
        <section className="space-y-3">
          <h3 className="font-heading text-lg font-bold text-white flex items-center gap-2">
            <span className="text-amber-400">5.</span>
            <span>Third-Party Platforms & External Listings</span>
          </h3>
          <p>
            Decentralized exchanges (DEXs), centralized exchanges (CEXs), token trackers (e.g. CoinGecko, CoinMarketCap, DexScreener), social media platforms, and ad networks operate under their own autonomous policies and verification systems. Meme Coin Elite has no control over third-party approval outcomes and cannot guarantee indexing, verification badges, or listing approvals.
          </p>
        </section>

        {/* Section 6: Disclaimers & No Financial Advice */}
        <section className="space-y-3">
          <h3 className="font-heading text-lg font-bold text-white flex items-center gap-2">
            <span className="text-amber-400">6.</span>
            <span>No Financial Advice & Cryptocurrency Risk Disclaimer</span>
          </h3>
          <p>
            Meme Coin Elite does not provide investment, legal, tax, or financial advice. Cryptocurrency tokens, meme coins, and blockchain assets are highly volatile and speculative. We make zero guarantees regarding token price performance, market capitalization, investor acquisition, trading volume, or financial return.
          </p>
        </section>

        {/* Section 7: Limitation of Liability */}
        <section className="pt-4 border-t border-white/10 space-y-3">
          <h3 className="font-heading text-lg font-bold text-white">
            7. Limitation of Liability
          </h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            To the maximum extent permitted by applicable law, Meme Coin Elite and its team members shall not be liable for any direct, indirect, incidental, consequential, or punitive damages resulting from your token launch, market volatility, community management, or reliance on materials provided through our services.
          </p>
        </section>

      </div>

      {/* Risk Notice */}
      <NoticeBanner type="risk" />

    </div>
  );
};
