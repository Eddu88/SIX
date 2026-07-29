import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, BookOpen, Layers, Calculator } from 'lucide-react';
import { translations, Language } from '../data/translations';

interface NavbarProps {
  currentPath?: string;
  onNavigate?: (to: string) => void;
  onOpenContact: () => void;
  onOpenRoiCalculator: () => void;
  onOpenResources: () => void;
  lang: Language;
  onToggleLanguage: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath = '/',
  onNavigate,
  onOpenContact,
  onOpenRoiCalculator,
  onOpenResources,
  lang,
  onToggleLanguage,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = translations[lang].navbar;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md ${
        isScrolled ? 'border-b border-neutral-900/15 py-3 shadow-xs' : 'border-b border-neutral-900/10 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* LOGO "Six" Isotype */}
          <div className="flex items-center gap-3">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate?.('/');
              }}
              className="w-9 h-9 bg-[#0A0A0A] hover:bg-[#5B4FE5] text-[#FFFFFF] rounded-lg flex items-center justify-center font-serif font-bold text-xl transition-colors cursor-pointer"
            >
              Six
            </a>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-sm tracking-widest text-[#111111] uppercase leading-none">
                SIX DATA
              </span>
              <span className="text-[9px] text-[#6B7280] font-mono mt-0.5 tracking-wider">
                DATA & CRM
              </span>
            </div>
          </div>

          {/* DESKTOP NAVIGATION MENU */}
          <nav className="hidden md:flex items-center">
            
            <a
              href="/soluciones-datos"
              onClick={(e) => {
                e.preventDefault();
                onNavigate?.('/soluciones-datos');
              }}
              className={`px-5 py-2 text-xs font-semibold tracking-wider uppercase transition-colors border-r border-neutral-200/80 hover:text-[#5B4FE5] ${
                currentPath === '/soluciones-datos' ? 'text-[#5B4FE5]' : 'text-[#111111]'
              }`}
            >
              {t.soluciones}
            </a>

            <a
              href="/crm"
              onClick={(e) => {
                e.preventDefault();
                onNavigate?.('/crm');
              }}
              className={`px-5 py-2 text-xs font-semibold tracking-wider uppercase transition-colors border-r border-neutral-200/80 hover:text-[#5B4FE5] ${
                currentPath === '/crm' ? 'text-[#5B4FE5]' : 'text-[#111111]'
              }`}
            >
              {t.crm}
            </a>

            {/* DROPDOWN RESOURCES & BLUEPRINTS */}
            <div className="relative border-r border-neutral-200/80">
              <button
                onClick={() => setResourcesDropdownOpen(!resourcesDropdownOpen)}
                className="px-5 py-2 text-xs font-semibold tracking-wider uppercase text-[#111111] hover:text-[#5B4FE5] transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>{t.recursos}</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#5B4FE5]" />
              </button>

              {resourcesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2.5 w-64 bg-white border border-neutral-950/15 rounded-lg shadow-xl p-3 space-y-2.5 animate-in fade-in duration-150 z-50">
                  <button
                    onClick={() => {
                      setResourcesDropdownOpen(false);
                      onOpenResources();
                    }}
                    className="w-full flex items-start gap-3 p-2 hover:bg-neutral-50 rounded text-left cursor-pointer transition-colors"
                  >
                    <BookOpen className="w-4 h-4 text-[#5B4FE5] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-xs text-[#111111]">{t.recursos}</div>
                      <div className="text-[10px] text-[#6B7280]">{t.recursosSub}</div>
                    </div>
                  </button>

                  <a
                    href="/crm"
                    onClick={(e) => {
                      e.preventDefault();
                      setResourcesDropdownOpen(false);
                      onNavigate?.('/crm');
                    }}
                    className="w-full flex items-start gap-3 p-2 hover:bg-neutral-50 rounded text-left cursor-pointer transition-colors"
                  >
                    <Layers className="w-4 h-4 text-[#5B4FE5] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-xs text-[#111111]">{t.excelVsCrm}</div>
                      <div className="text-[10px] text-[#6B7280]">{t.excelVsCrmSub}</div>
                    </div>
                  </a>
                </div>
              )}
            </div>

            <a
              href="/nosotros"
              onClick={(e) => {
                e.preventDefault();
                onNavigate?.('/nosotros');
              }}
              className={`px-5 py-2 text-xs font-semibold tracking-wider uppercase transition-colors border-r border-neutral-200/80 hover:text-[#5B4FE5] ${
                currentPath === '/nosotros' ? 'text-[#5B4FE5]' : 'text-[#111111]'
              }`}
            >
              {t.nosotros}
            </a>

            <button
              onClick={onOpenRoiCalculator}
              className="px-5 py-2 text-xs font-semibold tracking-wider uppercase text-[#111111] hover:text-[#5B4FE5] transition-colors flex items-center gap-1 cursor-pointer"
            >
              {t.calculadora}
            </button>
          </nav>

          {/* BUTTON ACTIONS & LANGUAGE SELECTOR */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenContact}
              className="px-5 py-2 bg-[#0A0A0A] hover:bg-[#5B4FE5] text-white font-sans font-bold text-xs uppercase tracking-wider rounded-md transition-all duration-200 shadow-sm flex items-center gap-1.5 cursor-pointer"
            >
              {t.conversar}
            </button>

            {/* Language Selector: EN | ES */}
            <div className="flex items-center bg-neutral-100 rounded-md p-0.5 border border-neutral-200 shadow-xs">
              <button
                onClick={() => onToggleLanguage('es')}
                className={`px-2 py-1 rounded text-[10px] font-mono font-bold transition-all cursor-pointer ${
                  lang === 'es'
                    ? 'bg-[#5B4FE5] text-white shadow-sm'
                    : 'text-neutral-500 hover:text-[#111111]'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => onToggleLanguage('en')}
                className={`px-2 py-1 rounded text-[10px] font-mono font-bold transition-all cursor-pointer ${
                  lang === 'en'
                    ? 'bg-[#5B4FE5] text-white shadow-sm'
                    : 'text-neutral-500 hover:text-[#111111]'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* MOBILE MENU TOGGLE BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#111111] hover:text-[#5B4FE5] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-neutral-900/15 p-5 space-y-4 absolute top-full left-0 right-0 shadow-lg animate-in slide-in-from-top duration-200 z-40">
          <div className="flex flex-col gap-3 font-sans text-xs font-bold uppercase tracking-wider text-[#111111]">
            <a
              href="/soluciones-datos"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                onNavigate?.('/soluciones-datos');
              }}
              className={`hover:text-[#5B4FE5] py-1 text-left ${
                currentPath === '/soluciones-datos' ? 'text-[#5B4FE5]' : ''
              }`}
            >
              {t.soluciones}
            </a>
            
            <a
              href="/crm"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                onNavigate?.('/crm');
              }}
              className={`hover:text-[#5B4FE5] py-1 text-left ${
                currentPath === '/crm' ? 'text-[#5B4FE5]' : ''
              }`}
            >
              {t.crm}
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResources();
              }}
              className="text-left hover:text-[#5B4FE5] py-1 flex items-center justify-between cursor-pointer"
            >
              {t.recursos}
              <BookOpen className="w-4 h-4 text-[#5B4FE5]" />
            </button>
            <a
              href="/nosotros"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                onNavigate?.('/nosotros');
              }}
              className="hover:text-[#5B4FE5] py-1 text-left"
            >
              {t.nosotros}
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRoiCalculator();
              }}
              className="text-left hover:text-[#5B4FE5] py-1 flex items-center justify-between cursor-pointer"
            >
              {t.calculadora}
              <Calculator className="w-4 h-4 text-[#5B4FE5]" />
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 bg-[#0A0A0A] hover:bg-[#5B4FE5] text-white font-bold text-xs uppercase tracking-wider rounded-md text-center cursor-pointer transition-colors"
            >
              {t.conversar}
            </button>

            {/* Mobile Language Switcher */}
            <div className="flex items-center justify-between p-2 bg-neutral-100 rounded-md border border-neutral-200">
              <span className="text-xs font-sans font-semibold text-[#111111]">
                {lang === 'en' ? 'Select Language:' : 'Seleccionar Idioma:'}
              </span>
              <div className="flex items-center gap-1 bg-white rounded p-0.5 border border-neutral-200/80">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onToggleLanguage('es');
                  }}
                  className={`px-2.5 py-1 rounded text-[10px] font-mono font-bold transition-all cursor-pointer ${
                    lang === 'es' ? 'bg-[#5B4FE5] text-white' : 'text-neutral-500'
                  }`}
                >
                  ES
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onToggleLanguage('en');
                  }}
                  className={`px-2.5 py-1 rounded text-[10px] font-mono font-bold transition-all cursor-pointer ${
                    lang === 'en' ? 'bg-[#5B4FE5] text-white' : 'text-neutral-500'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
