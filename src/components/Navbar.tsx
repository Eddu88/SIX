import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, BookOpen, Layers, Calculator } from 'lucide-react';

interface NavbarProps {
  currentPath?: string;
  onNavigate?: (to: string) => void;
  onOpenContact: () => void;
  onOpenRoiCalculator: () => void;
  onOpenResources: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath = '/',
  onNavigate,
  onOpenContact,
  onOpenRoiCalculator,
  onOpenResources,
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md ${
        isScrolled ? 'border-b border-neutral-900/15 py-3 shadow-xs' : 'border-b border-neutral-900/10 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* LOGO "Six" Isotype */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigate?.('/');
            }}
            className="flex items-center gap-3 group"
          >
            <div className="w-9 h-9 bg-[#0A0A0A] rounded-lg flex items-center justify-center text-white font-serif font-bold text-xl tracking-tight shadow-sm transition-transform group-hover:scale-105 border border-neutral-800">
              Six
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-sm tracking-widest text-[#111111] uppercase leading-none">
                SIX DATA
              </span>
              <span className="text-[10px] text-[#6B7280] font-mono tracking-tight leading-tight mt-0.5">
                DATA & CRM SOLUTIONS
              </span>
            </div>
          </a>

          {/* DESKTOP NAVIGATION MENU */}
          <nav className="hidden md:flex items-center space-x-0 border-x border-neutral-200">
            
            <a
              href="/soluciones-datos"
              onClick={(e) => {
                e.preventDefault();
                onNavigate?.('/soluciones-datos');
              }}
              className={`px-5 py-2 text-xs font-semibold tracking-wider uppercase transition-colors border-r border-neutral-200/80 ${
                currentPath === '/soluciones-datos' ? 'text-[#5B4FE5]' : 'text-[#111111] hover:text-[#5B4FE5]'
              }`}
            >
              Soluciones de Datos
            </a>

            <a
              href="/crm"
              onClick={(e) => {
                e.preventDefault();
                onNavigate?.('/crm');
              }}
              className={`px-5 py-2 text-xs font-semibold tracking-wider uppercase transition-colors border-r border-neutral-200/80 ${
                currentPath === '/crm' ? 'text-[#5B4FE5]' : 'text-[#111111] hover:text-[#5B4FE5]'
              }`}
            >
              CRM
            </a>

            {/* RECURSOS DROPDOWN */}
            <div
              className="relative border-r border-neutral-200/80"
              onMouseEnter={() => setResourcesDropdownOpen(true)}
              onMouseLeave={() => setResourcesDropdownOpen(false)}
            >
              <button
                onClick={onOpenResources}
                className="px-5 py-2 text-xs font-semibold tracking-wider uppercase text-[#111111] hover:text-[#5B4FE5] transition-colors flex items-center gap-1 cursor-pointer"
              >
                Recursos
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${resourcesDropdownOpen ? 'rotate-180 text-[#5B4FE5]' : 'text-neutral-400'}`} />
              </button>

              {/* DROPDOWN MENU */}
              {resourcesDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white border border-neutral-900/15 shadow-xl py-3 px-2 rounded-b-md transition-all animate-in fade-in duration-150">
                  <div className="px-3 py-1.5 text-[10px] font-mono text-[#6B7280] uppercase tracking-wider border-b border-neutral-100 mb-1">
                    Documentación & Blueprints
                  </div>
                  
                  <button
                    onClick={() => {
                      setResourcesDropdownOpen(false);
                      onOpenResources();
                    }}
                    className="w-full text-left px-3 py-2 text-xs font-medium text-[#111111] hover:bg-neutral-50 hover:text-[#5B4FE5] rounded flex items-center gap-2.5 transition-colors"
                  >
                    <BookOpen className="w-4 h-4 text-[#5B4FE5]" />
                    <div>
                      <div className="font-semibold">Blueprints de Arquitectura</div>
                      <div className="text-[10px] text-[#6B7280]">Diseños de bajo costo en la nube</div>
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      setResourcesDropdownOpen(false);
                      onOpenRoiCalculator();
                    }}
                    className="w-full text-left px-3 py-2 text-xs font-medium text-[#111111] hover:bg-neutral-50 hover:text-[#5B4FE5] rounded flex items-center gap-2.5 transition-colors mt-0.5"
                  >
                    <Calculator className="w-4 h-4 text-[#5B4FE5]" />
                    <div>
                      <div className="font-semibold">Calculadora ROI CRM</div>
                      <div className="text-[10px] text-[#6B7280]">Estimación de ahorro y eficiencia</div>
                    </div>
                  </button>

                  <a
                    href="#comparativa"
                    onClick={() => setResourcesDropdownOpen(false)}
                    className="w-full text-left px-3 py-2 text-xs font-medium text-[#111111] hover:bg-neutral-50 hover:text-[#5B4FE5] rounded flex items-center gap-2.5 transition-colors mt-0.5"
                  >
                    <Layers className="w-4 h-4 text-[#5B4FE5]" />
                    <div>
                      <div className="font-semibold">Excel vs CRM Table</div>
                      <div className="text-[10px] text-[#6B7280]">Comparador de productividad</div>
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
              className="px-5 py-2 text-xs font-semibold tracking-wider uppercase text-[#111111] hover:text-[#5B4FE5] transition-colors border-r border-neutral-200/80"
            >
              Nosotros
            </a>

            <button
              onClick={onOpenRoiCalculator}
              className="px-5 py-2 text-xs font-semibold tracking-wider uppercase text-[#111111] hover:text-[#5B4FE5] transition-colors flex items-center gap-1 cursor-pointer"
            >
              Precios & ROI
            </button>
          </nav>

          {/* BUTTON ACTIONS */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenContact}
              className="px-5 py-2 bg-[#0A0A0A] hover:bg-[#5B4FE5] text-white font-sans font-bold text-xs uppercase tracking-wider rounded-md transition-all duration-200 shadow-sm flex items-center gap-1.5 cursor-pointer"
            >
              CONVERSEMOS
            </button>
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
        <div className="md:hidden bg-white border-b border-neutral-900/15 px-4 pt-4 pb-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3 font-sans text-sm uppercase tracking-wider font-semibold text-[#111111] border-b border-neutral-100 pb-4">
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
              Soluciones de Datos
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
              CRM
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResources();
              }}
              className="text-left hover:text-[#5B4FE5] py-1 flex items-center justify-between"
            >
              Recursos & Blueprints
              <BookOpen className="w-4 h-4 text-[#5B4FE5]" />
            </button>
            <a
              href="/nosotros"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                onNavigate?.('/nosotros');
              }}
              className="hover:text-[#5B4FE5] py-1"
            >
              Nosotros
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRoiCalculator();
              }}
              className="text-left hover:text-[#5B4FE5] py-1 flex items-center justify-between"
            >
              Precios & Calculadora ROI
              <Calculator className="w-4 h-4 text-[#5B4FE5]" />
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 bg-[#0A0A0A] text-white font-bold text-xs uppercase tracking-wider rounded-md text-center"
            >
              CONVERSEMOS CON UN EXPERTO
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
