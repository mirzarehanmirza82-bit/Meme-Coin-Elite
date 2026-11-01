import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types';
import { Logo } from './Logo';
import { 
  MoreVertical, 
  X, 
  Home, 
  Package, 
  FileText, 
  Cpu, 
  Users, 
  Mail, 
  HelpCircle, 
  Gift, 
  Crown, 
  ShieldCheck, 
  FileCheck,
  ChevronRight,
  Sparkles,
  BarChart3
} from 'lucide-react';
import { SITE_CONFIG } from '../siteConfig';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when drawer is open on mobile
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [drawerOpen]);

  const navLinks: { label: string; page: PageRoute }[] = [
    { label: "Home", page: "home" },
    { label: "Packages", page: "packages" },
    { label: "Projects", page: "projects" },
    { label: "How It Works", page: "how-it-works" },
    { label: "Requirements", page: "requirements" },
    { label: "About", page: "about" },
    { label: "Contact", page: "contact" }
  ];

  const drawerMenuItems: { label: string; page: PageRoute; icon: React.ReactNode; badge?: string }[] = [
    { label: "Home", page: "home", icon: <Home className="w-4 h-4" /> },
    { label: "Packages", page: "packages", icon: <Package className="w-4 h-4" /> },
    { label: "Projects Gallery", page: "projects", icon: <BarChart3 className="w-4 h-4 text-emerald-400" />, badge: "Proof" },
    { label: "Project Requirements", page: "requirements", icon: <FileText className="w-4 h-4" /> },
    { label: "How It Works", page: "how-it-works", icon: <Cpu className="w-4 h-4" /> },
    { label: "About Us", page: "about", icon: <Users className="w-4 h-4" /> },
    { label: "Contact Us", page: "contact", icon: <Mail className="w-4 h-4" /> },
    { label: "FAQ", page: "faq", icon: <HelpCircle className="w-4 h-4" /> },
    { label: "Referral Program", page: "referral", icon: <Gift className="w-4 h-4" />, badge: "Rewards" },
    { label: "VIP Club", page: "vip", icon: <Crown className="w-4 h-4 text-amber-400" /> },
    { label: "VVIP Club", page: "vvip", icon: <Sparkles className="w-4 h-4 text-yellow-300" /> },
    { label: "Privacy Policy", page: "privacy-policy", icon: <ShieldCheck className="w-4 h-4" /> },
    { label: "Terms & Conditions", page: "terms", icon: <FileCheck className="w-4 h-4" /> }
  ];

  const handleNavClick = (page: PageRoute) => {
    onNavigate(page);
    setDrawerOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#070709]/90 backdrop-blur-md border-b border-amber-500/20 py-3 shadow-xl shadow-black/60' 
            : 'bg-[#070709]/60 backdrop-blur-sm border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo (Left) */}
          <div onClick={() => handleNavClick("home")}>
            <Logo size="md" />
          </div>

          {/* Desktop Navigation Links (Center) */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#121218]/80 border border-amber-500/15 rounded-full px-4 py-1.5 shadow-inner">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  id={`nav-${link.page}`}
                  onClick={() => handleNavClick(link.page)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                    isActive 
                      ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-black shadow-md shadow-amber-500/30' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action & Three-Dot Menu Trigger */}
          <div className="flex items-center gap-3">
            {/* Quick Action button on desktop */}
            <button
              onClick={() => handleNavClick("requirements")}
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-600 hover:from-amber-300 hover:to-yellow-500 text-black text-xs font-bold px-4 py-2.5 rounded-full shadow-lg shadow-amber-500/25 transition-all transform hover:scale-[1.02] cursor-pointer"
            >
              <span>Start Project</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            {/* Three-Dot Menu Button (Working Side Drawer Trigger) */}
            <button
              id="three-dot-menu-button"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open navigation menu"
              className="p-2.5 rounded-xl bg-[#161622] hover:bg-[#1E1E2E] border border-amber-500/30 text-amber-300 hover:text-white transition-all shadow-md cursor-pointer flex items-center justify-center group"
            >
              <MoreVertical className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop for Animated Side Drawer */}
      <div
        className={`fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
          drawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setDrawerOpen(false)}
      />

      {/* Animated Side Drawer (Right slide-in) */}
      <aside
        id="side-navigation-drawer"
        className={`fixed top-0 right-0 z-[101] w-full max-w-sm h-full bg-[#0D0D14] border-l border-amber-500/25 shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-amber-500/15 flex items-center justify-between bg-[#12121C]">
          <div onClick={() => handleNavClick("home")} className="cursor-pointer">
            <Logo size="sm" />
          </div>
          <button
            id="close-drawer-button"
            onClick={() => setDrawerOpen(false)}
            className="p-2 rounded-lg bg-[#1A1A28] text-gray-400 hover:text-white hover:bg-amber-500/20 border border-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>


        {/* Navigation List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-1.5">
          <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 px-3 py-1">
            Navigation Directory
          </div>
          {drawerMenuItems.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <button
                key={item.page}
                id={`drawer-link-${item.page}`}
                onClick={() => handleNavClick(item.page)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-500/20 to-yellow-500/10 text-amber-300 border border-amber-500/40 font-semibold shadow-sm'
                    : 'text-gray-300 hover:bg-[#181826] hover:text-white border border-transparent'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={isActive ? "text-amber-400" : "text-gray-400"}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </div>
                {item.badge ? (
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
                    {item.badge}
                  </span>
                ) : (
                  <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
                )}
              </button>
            );
          })}
        </div>

        {/* Drawer Footer Contact Bar */}
        <div className="p-4 border-t border-amber-500/15 bg-[#12121C] space-y-2">
          <a
            href={SITE_CONFIG.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] border border-[#25D366]/40 py-2.5 rounded-xl text-xs font-bold transition-colors"
          >
            <span>Discuss on WhatsApp</span>
          </a>
          <p className="text-[10px] text-center text-gray-500">
            No crypto or payment transfer collected on website.
          </p>
        </div>
      </aside>
    </>
  );
};
