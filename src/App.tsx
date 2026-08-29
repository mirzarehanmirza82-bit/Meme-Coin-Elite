import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { SITE_CONFIG } from './siteConfig';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';

// Pages
import { HomePage } from './pages/HomePage';
import { PackagesPage } from './pages/PackagesPage';
import { RequirementsPage } from './pages/RequirementsPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { FAQPage } from './pages/FAQPage';
import { ReferralPage } from './pages/ReferralPage';
import { VIPPage } from './pages/VIPPage';
import { VVIPPage } from './pages/VVIPPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';

// Floating icon
import { MessageSquare, Send, ArrowUp, Mail, X } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const [showQuickContactMenu, setShowQuickContactMenu] = useState<boolean>(false);

  // Handle URL hash routing if present (e.g. #packages, #requirements)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageRoute;
      const validRoutes: PageRoute[] = [
        'home', 'packages', 'requirements', 'how-it-works', 'about', 
        'contact', 'faq', 'referral', 'vip', 'vvip', 'privacy-policy', 'terms'
      ];
      if (validRoutes.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Track scroll position for Back-to-Top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: PageRoute) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#07070B] text-gray-200 flex flex-col font-sans selection:bg-amber-400 selection:text-black relative">
      
      {/* 3D Coin Loading Animation Screen */}
      {isLoading && (
        <LoadingScreen onFinishLoading={() => setIsLoading(false)} />
      )}

      {/* Main Header / Sticky Navigation */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main className="flex-1 w-full pb-16">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'packages' && <PackagesPage onNavigate={handleNavigate} />}
        {currentPage === 'requirements' && <RequirementsPage onNavigate={handleNavigate} />}
        {currentPage === 'how-it-works' && <HowItWorksPage onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <ContactPage onNavigate={handleNavigate} />}
        {currentPage === 'faq' && <FAQPage onNavigate={handleNavigate} />}
        {currentPage === 'referral' && <ReferralPage onNavigate={handleNavigate} />}
        {currentPage === 'vip' && <VIPPage onNavigate={handleNavigate} />}
        {currentPage === 'vvip' && <VVIPPage onNavigate={handleNavigate} />}
        {currentPage === 'privacy-policy' && <PrivacyPolicyPage onNavigate={handleNavigate} />}
        {currentPage === 'terms' && <TermsPage onNavigate={handleNavigate} />}
      </main>

      {/* Floating Action Button (Quick Multi-Channel Direct Contact) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2.5 items-end">
        
        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={handleScrollToTop}
            aria-label="Scroll to top"
            className="w-10 h-10 rounded-full bg-[#1A1A28] border border-amber-500/30 text-amber-300 hover:bg-amber-500 hover:text-black flex items-center justify-center shadow-lg transition-all cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {/* Expanded Quick Contact Menu */}
        {showQuickContactMenu && (
          <div className="flex flex-col gap-2 items-end mb-1 animate-fade-in">
            
            {/* Telegram Button */}
            <a
              href={SITE_CONFIG.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#229ED9] hover:bg-[#1b8bc2] text-white px-3.5 py-2 rounded-full shadow-xl text-xs font-bold transition-all transform hover:scale-105"
            >
              <Send className="w-4 h-4" />
              <span>Telegram</span>
            </a>

            {/* Gmail Button */}
            <a
              href={SITE_CONFIG.getGmailUrl("Meme Coin Elite Inquiry", "Hello Meme Coin Elite team,\n\nI would like to inquire about your services.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-3.5 py-2 rounded-full shadow-xl text-xs font-bold transition-all transform hover:scale-105"
            >
              <Mail className="w-4 h-4" />
              <span>Gmail</span>
            </a>

            {/* WhatsApp Button */}
            <a
              href={SITE_CONFIG.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-black px-3.5 py-2 rounded-full shadow-xl text-xs font-bold transition-all transform hover:scale-105"
            >
              <MessageSquare className="w-4 h-4 fill-black" />
              <span>WhatsApp</span>
            </a>

          </div>
        )}

        {/* Main Floating Trigger Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowQuickContactMenu(!showQuickContactMenu)}
            aria-label="Toggle contact menu"
            className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 text-black font-extrabold flex items-center justify-center shadow-2xl hover:from-amber-300 hover:to-yellow-400 transition-all transform hover:scale-105 cursor-pointer"
          >
            {showQuickContactMenu ? (
              <X className="w-6 h-6" />
            ) : (
              <MessageSquare className="w-6 h-6 fill-black" />
            )}
          </button>
        </div>

      </div>

      {/* Footer */}
      <Footer currentPage={currentPage} onNavigate={handleNavigate} />

    </div>
  );
}
