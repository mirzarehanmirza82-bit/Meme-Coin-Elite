import React, { useState } from 'react';
import { PageRoute, ProjectItem } from '../types';
import { PROJECTS_DATA, PROJECT_CATEGORIES } from '../data/projectsData';
import { SITE_CONFIG } from '../siteConfig';
import { 
  TrendingUp, 
  ShieldCheck, 
  Lock, 
  ExternalLink, 
  Eye, 
  X, 
  ArrowRight, 
  Activity, 
  Users, 
  Coins, 
  DollarSign, 
  BarChart3, 
  Globe, 
  MessageSquare,
  Sparkles,
  Info,
  CheckCircle2
} from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((project) => project.categories.includes(selectedCategory));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      {/* 1. PAGE HEADER */}
      <div className="text-center space-y-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs sm:text-sm font-bold tracking-wider">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>PROVEN TRACK RECORD • VERIFIED ON-CHAIN LAUNCHES</span>
        </div>

        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Client Project Showcase & <span className="text-gold-gradient">DEX Performance</span>
        </h1>

        <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Explore actual decentralized exchange performance metrics, trading volumes, and peak market gains from meme coins launched and assisted through our technical pipeline.
        </p>
      </div>

      {/* 2. CLIENT CONFIDENTIALITY & PRIVACY NOTICE BANNER */}
      <div className="rounded-2xl bg-[#12121D] border-2 border-amber-500/30 p-5 sm:p-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-2xl pointer-events-none -mr-16 -mt-16"></div>
        
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 relative z-10">
          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex-shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>

          <div className="space-y-1.5 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded-md border border-amber-400/20">
                Client Privacy Policy Notice
              </span>
              <span className="text-xs text-gray-400">• Strict NDA Compliance</span>
            </div>
            <h3 className="font-heading text-base sm:text-lg font-bold text-white">
              Why Specific Contract Addresses and Client Identifiers Are Hidden
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              To protect the confidentiality, ongoing marketing strategies, and security of our clients, all identifying markers—such as exact contract addresses (CA), developer wallet addresses, and personal client identities—are strictly redacted. Only verified, on-chain decentralized exchange metrics (24H peak gains, liquidity pool size, trading volumes, and transaction ratios) are published as authentic case studies.
            </p>
          </div>
        </div>
      </div>

      {/* 3. AT-A-GLANCE METRICS STRIP */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 sm:p-5 rounded-2xl bg-[#0F0F16] border border-amber-500/20 flex flex-col justify-between">
          <div className="flex items-center justify-between text-gray-400 text-xs">
            <span>Peak 24H Gain</span>
            <TrendingUp className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="mt-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400">+6,344%</span>
            <p className="text-[11px] text-gray-400 mt-0.5">Top performing case study</p>
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-[#0F0F16] border border-amber-500/20 flex flex-col justify-between">
          <div className="flex items-center justify-between text-gray-400 text-xs">
            <span>Combined 24H Volume</span>
            <DollarSign className="w-4 h-4 text-amber-400" />
          </div>
          <div className="mt-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-amber-300">$9.0M+</span>
            <p className="text-[11px] text-gray-400 mt-0.5">Across showcase launches</p>
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-[#0F0F16] border border-amber-500/20 flex flex-col justify-between">
          <div className="flex items-center justify-between text-gray-400 text-xs">
            <span>Total DEX Transactions</span>
            <BarChart3 className="w-4 h-4 text-yellow-400" />
          </div>
          <div className="mt-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-white">366,000+</span>
            <p className="text-[11px] text-gray-400 mt-0.5">Buys & sells logged</p>
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-[#0F0F16] border border-amber-500/20 flex flex-col justify-between">
          <div className="flex items-center justify-between text-gray-400 text-xs">
            <span>Unique Token Traders</span>
            <Users className="w-4 h-4 text-amber-400" />
          </div>
          <div className="mt-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-white">33,900+</span>
            <p className="text-[11px] text-gray-400 mt-0.5">Participating market makers</p>
          </div>
        </div>
      </div>

      {/* 4. CATEGORY FILTER TABS */}
      <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap border-b border-white/5 pb-4">
        {PROJECT_CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.id;
          const count = cat.id === 'all' 
            ? PROJECTS_DATA.length 
            : PROJECTS_DATA.filter(p => p.categories.includes(cat.id)).length;

          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                isActive
                  ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-black shadow-lg shadow-amber-500/20 font-bold'
                  : 'bg-[#12121C] text-gray-300 hover:text-white hover:bg-[#1A1A28] border border-white/5'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                isActive ? 'bg-black/20 text-black font-extrabold' : 'bg-white/10 text-gray-400'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* 5. PROJECTS GALLERY GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="rounded-3xl bg-[#0D0D14] border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl group"
          >
            {/* Top Bar with Project Meta */}
            <div className="p-6 border-b border-white/5 space-y-3">
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-300">
                    {project.chain}
                  </span>
                  <span className="text-xs text-gray-500">•</span>
                  <span className="text-xs text-gray-400">{project.dex}</span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>24H Peak: {project.stats.peakGain24h}</span>
                </div>
              </div>

              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {project.codeName}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">
                  {project.tagline}
                </p>
              </div>
            </div>

            {/* Image Preview & Interactive Lightbox Trigger */}
            <div className="p-6 bg-[#09090E] border-b border-white/5">
              <div 
                onClick={() => setActiveModalProject(project)}
                className="relative rounded-2xl overflow-hidden border border-amber-500/25 bg-black/60 group/img cursor-pointer aspect-auto max-h-[360px] flex items-center justify-center"
              >
                <img
                  src={project.image}
                  alt={`${project.codeName} DexScreener Chart Analytics`}
                  className="w-full max-h-[360px] object-contain transition-transform duration-300 group-hover/img:scale-105"
                  loading="lazy"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-bold">
                  <div className="px-4 py-2 rounded-xl bg-amber-500 text-black flex items-center gap-2 shadow-2xl">
                    <Eye className="w-4 h-4" />
                    <span>View Full-Size Proof Screenshot</span>
                  </div>
                </div>

                {/* Always visible zoom hint badge */}
                <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md text-[10px] text-amber-300 border border-amber-500/30 flex items-center gap-1.5">
                  <Eye className="w-3 h-3" />
                  <span>Click to Enlarge</span>
                </div>
              </div>
            </div>

            {/* Financial Metrics Dashboard Grid */}
            <div className="p-6 space-y-6">
              
              {/* 6 Key Stats Cells */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                
                {/* 1. Market Cap / FDV */}
                <div className="p-3 rounded-xl bg-[#13131D] border border-white/5 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
                    Peak Mkt Cap (FDV)
                  </span>
                  <div className="text-base sm:text-lg font-bold text-white">
                    {project.stats.marketCap}
                  </div>
                  <div className="text-[10px] text-emerald-400 font-medium">
                    At peak launch velocity
                  </div>
                </div>

                {/* 2. 24H Volume */}
                <div className="p-3 rounded-xl bg-[#13131D] border border-white/5 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
                    24H DEX Volume
                  </span>
                  <div className="text-base sm:text-lg font-bold text-amber-300">
                    {project.stats.volume24h}
                  </div>
                  <div className="text-[10px] text-gray-400">
                    High turnover rate
                  </div>
                </div>

                {/* 3. Liquidity Locked */}
                <div className="p-3 rounded-xl bg-[#13131D] border border-white/5 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block flex items-center gap-1">
                    <Lock className="w-3 h-3 text-emerald-400" />
                    <span>Locked Liquidity</span>
                  </span>
                  <div className="text-base sm:text-lg font-bold text-emerald-400">
                    {project.stats.liquidity}
                  </div>
                  <div className="text-[10px] text-gray-400">
                    100% On-Chain Lock
                  </div>
                </div>

                {/* 4. Price USD & SOL */}
                <div className="p-3 rounded-xl bg-[#13131D] border border-white/5 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
                    Token Price
                  </span>
                  <div className="text-sm sm:text-base font-bold text-white truncate">
                    {project.stats.priceUsd}
                  </div>
                  <div className="text-[10px] text-gray-400 font-mono truncate">
                    {project.stats.priceSol}
                  </div>
                </div>

                {/* 5. Transactions (Buys vs Sells) */}
                <div className="p-3 rounded-xl bg-[#13131D] border border-white/5 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
                    Transactions
                  </span>
                  <div className="text-base sm:text-lg font-bold text-white">
                    {project.stats.transactions}
                  </div>
                  <div className="text-[10px] text-emerald-400 font-medium truncate">
                    {project.stats.buys} Buys / {project.stats.sells} Sells
                  </div>
                </div>

                {/* 6. Active Traders */}
                <div className="p-3 rounded-xl bg-[#13131D] border border-white/5 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
                    Total Traders
                  </span>
                  <div className="text-base sm:text-lg font-bold text-amber-300">
                    {project.stats.traders}
                  </div>
                  <div className="text-[10px] text-gray-400 truncate">
                    {project.stats.buyers} Unique Buyers
                  </div>
                </div>

              </div>

              {/* Volume Buy vs Sell Bar */}
              <div className="p-3 rounded-xl bg-[#13131D] border border-white/5 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">Volume Flow Distribution:</span>
                  <span className="text-gray-300 font-mono text-[11px]">
                    <span className="text-emerald-400 font-bold">Buy Vol: {project.stats.buyVolume}</span> | <span className="text-rose-400 font-bold">Sell Vol: {project.stats.sellVolume}</span>
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden flex">
                  <div className="bg-emerald-400 h-full w-1/2"></div>
                  <div className="bg-rose-500 h-full w-1/2"></div>
                </div>
              </div>

              {/* Case Summary Writeup */}
              <div className="space-y-2 text-xs sm:text-sm text-gray-300 leading-relaxed bg-[#11111A] p-4 rounded-xl border border-white/5">
                <div className="font-bold text-white text-xs uppercase tracking-wider flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-amber-400" />
                  <span>Launch Summary & Performance</span>
                </div>
                <p>{project.summary}</p>
              </div>

              {/* Key Deliverables & Highlights */}
              <div className="space-y-1.5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Key Achievements & Deliverables
                </div>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Client Privacy Protection Note */}
              <div className="p-3 rounded-xl bg-amber-500/5 border border-amber-500/20 text-[11px] text-gray-400 flex items-start gap-2.5">
                <Info className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong className="text-amber-300">Confidentiality Note: </strong>
                  {project.privacyNotice}
                </span>
              </div>

            </div>

            {/* Bottom Card Footer Actions */}
            <div className="p-5 border-t border-white/5 bg-[#101017] flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={() => setActiveModalProject(project)}
                className="w-full sm:w-auto text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center justify-center gap-1.5 py-2 cursor-pointer transition-colors"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Enlarge Chart Screenshot</span>
              </button>

              <button
                onClick={() => onNavigate('requirements')}
                className="w-full sm:w-auto px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black text-xs font-bold transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Launch Similar Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </article>
        ))}
      </div>

      {/* 6. MODAL LIGHTBOX FOR ENLARGED PROOF SCREENSHOT */}
      {activeModalProject && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          onClick={() => setActiveModalProject(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#111119] border border-amber-500/40 rounded-3xl shadow-2xl overflow-hidden my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-6 border-b border-amber-500/20 flex items-center justify-between bg-[#151522]">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase">
                    {activeModalProject.chain} • {activeModalProject.dex}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold">
                    Peak Gain: {activeModalProject.stats.peakGain24h}
                  </span>
                </div>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-white mt-1">
                  {activeModalProject.codeName} — DexScreener Verified Analytics
                </h3>
              </div>

              <button
                onClick={() => setActiveModalProject(null)}
                aria-label="Close modal"
                className="p-2 rounded-xl bg-[#222233] text-gray-300 hover:text-white hover:bg-amber-500/20 border border-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body with Full Image */}
            <div className="p-4 sm:p-6 bg-black flex flex-col items-center justify-center">
              <div className="max-h-[70vh] overflow-auto rounded-xl border border-white/10 bg-[#0a0a0f] p-2 flex items-center justify-center">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.codeName}
                  className="max-h-[65vh] w-auto object-contain rounded-lg shadow-2xl"
                />
              </div>

              <div className="mt-4 w-full p-3 rounded-xl bg-[#14141E] border border-amber-500/20 text-xs text-gray-300 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Verified DEX Capture: </strong>
                  Showing price USD {activeModalProject.stats.priceUsd}, {activeModalProject.stats.volume24h} 24h volume, and {activeModalProject.stats.transactions} total transactions. Contract address and proprietary owner addresses are anonymized to honor non-disclosure agreements.
                </span>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 border-t border-amber-500/20 bg-[#151522] flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-gray-400">
                Want similar token deployment, DEX listing, and branding?
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => {
                    setActiveModalProject(null);
                    onNavigate('packages');
                  }}
                  className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-[#222233] hover:bg-[#2A2A3D] text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  View Packages
                </button>
                <button
                  onClick={() => {
                    setActiveModalProject(null);
                    onNavigate('requirements');
                  }}
                  className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black text-xs font-bold transition-all shadow-md cursor-pointer"
                >
                  Start Your Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 7. BOTTOM CTA SECTION */}
      <section className="rounded-3xl bg-gradient-to-b from-[#141420] to-[#0B0B11] border border-amber-500/25 p-8 sm:p-12 text-center space-y-6 shadow-2xl">
        <div className="max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <span>Ready To Launch?</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
            Transform Your Meme Coin Idea Into an On-Chain Reality
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            From smart contract generation and metadata locking to liquidity pool setup, branding assets, and DEX verification. Work starts immediately upon package advance fee confirmation.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('requirements')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-600 hover:from-amber-300 hover:to-yellow-500 text-black font-extrabold text-sm shadow-xl shadow-amber-500/25 transition-all transform hover:scale-105 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Submit Project Requirements</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={SITE_CONFIG.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-sm shadow-lg shadow-[#25D366]/20 transition-all flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Consult on WhatsApp</span>
          </a>

          <button
            onClick={() => onNavigate('packages')}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#1C1C28] hover:bg-[#262638] text-gray-200 hover:text-white border border-amber-500/30 font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Review Packages & Advance Fees</span>
          </button>
        </div>
      </section>

    </div>
  );
};
