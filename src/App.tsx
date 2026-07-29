import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HomeView } from './components/HomeView';
import { DatosView } from './components/DatosView';
import { CrmView } from './components/CrmView';
import { NosotrosView } from './components/NosotrosView';
import { Footer } from './components/Footer';
import { ContactDrawer } from './components/ContactDrawer';
import { RoiCalculatorModal } from './components/RoiCalculatorModal';
import { ResourcesModal } from './components/ResourcesModal';
import { Calculator, MessageSquare } from 'lucide-react';

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [roiModalOpen, setRoiModalOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  
  // Custom router state
  const [path, setPath] = useState(window.location.pathname);
  
  // Bilingual state ('es' or 'en')
  const [lang, setLang] = useState<'es' | 'en'>('es');

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname);
    };
    const handleHashAndRedirect = () => {
      if (window.location.hash === '#clientes' || window.location.hash === '#nosotros') {
        navigate('/nosotros');
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handleHashAndRedirect);
    handleHashAndRedirect();

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handleHashAndRedirect);
    };
  }, []);

  const navigate = (to: string) => {
    window.history.pushState({}, '', to);
    setPath(to);
    window.scrollTo(0, 0);
  };

  // SEO & Head Meta Updates based on active path and language selection
  useEffect(() => {
    let title = lang === 'en' ? 'Six Data Solutions — Data & CRM' : 'Six Data Solutions — Datos y CRM';
    let description = lang === 'en'
      ? 'Independent data engineering and modern CRM with zero licensing fees or vendor lock-in.'
      : 'Ingeniería de datos independiente y CRM moderno sin licencias propietarias costosas ni vendor lock-in.';

    switch (path) {
      case '/soluciones-datos':
        title = lang === 'en' ? 'Data Solutions — Six Data Solutions' : 'Soluciones de Datos — Six Data Solutions';
        description = lang === 'en'
          ? 'Elastic data warehouse architectures, Data Lakes, Data Lakehouses and data pipelines using free-license Apache.'
          : 'Arquitecturas de datos elásticas, Data Lakes, Data Lakehouses e ingeniería de datos en la nube y on-premise con Apache de libre licencia.';
        break;
      case '/crm':
        title = lang === 'en' ? 'CRM Systems — Six Data Solutions' : 'Sistemas CRM — Six Data Solutions';
        description = lang === 'en'
          ? 'Move your customer records from Excel to a modern cloud CRM and automate your pipeline.'
          : 'Lleva tus datos comerciales de Excel a un CRM moderno en la nube and automatiza tu seguimiento de ventas comerciales.';
        break;
      case '/nosotros':
        title = lang === 'en' ? 'About Us — Six Data Solutions' : 'Quiénes Somos — Six Data Solutions';
        description = lang === 'en'
          ? 'We are two data scientists dedicated to data science, engineering and architecture. Custom solutions.'
          : 'Somos dos científicos de datos dedicados a la ciencia, ingeniería y arquitectura de datos. Diseñamos soluciones elásticas a tu medida.';
        break;
      default:
        break;
    }

    document.title = title;
    
    // Update meta description tag dynamically
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
  }, [path, lang]);

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#111111] font-sans selection:bg-[#5B4FE5] selection:text-white relative">
      
      {/* SHARED FIXED NAVBAR */}
      <Navbar
        currentPath={path}
        onNavigate={navigate}
        onOpenContact={() => setContactOpen(true)}
        onOpenRoiCalculator={() => setRoiModalOpen(true)}
        onOpenResources={() => setResourcesOpen(true)}
        lang={lang}
        onToggleLanguage={setLang}
      />

      {/* CONDITIONAL MAIN VIEW RENDERING */}
      <main>
        {path === '/soluciones-datos' ? (
          <DatosView
            onNavigate={navigate}
            onOpenContact={() => setContactOpen(true)}
            onOpenResources={() => setResourcesOpen(true)}
            onOpenRoiCalculator={() => setRoiModalOpen(true)}
            lang={lang}
          />
        ) : path === '/crm' ? (
          <CrmView
            onNavigate={navigate}
            onOpenContact={() => setContactOpen(true)}
            onOpenResources={() => setResourcesOpen(true)}
            onOpenRoiCalculator={() => setRoiModalOpen(true)}
            lang={lang}
          />
        ) : path === '/nosotros' ? (
          <NosotrosView
            onNavigate={navigate}
            onOpenContact={() => setContactOpen(true)}
            onOpenResources={() => setResourcesOpen(true)}
            onOpenRoiCalculator={() => setRoiModalOpen(true)}
            lang={lang}
          />
        ) : (
          <HomeView
            onNavigate={navigate}
            onOpenContact={() => setContactOpen(true)}
            onOpenResources={() => setResourcesOpen(true)}
            onOpenRoiCalculator={() => setRoiModalOpen(true)}
            lang={lang}
          />
        )}
      </main>

      {/* SHARED FOOTER */}
      <Footer
        onNavigate={navigate}
        onOpenContact={() => setContactOpen(true)}
        onOpenResources={() => setResourcesOpen(true)}
        onOpenRoiCalculator={() => setRoiModalOpen(true)}
        lang={lang}
      />

      {/* MODALS & DRAWERS */}
      <ContactDrawer
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        lang={lang}
      />

      <RoiCalculatorModal
        isOpen={roiModalOpen}
        onClose={() => setRoiModalOpen(false)}
        onOpenContact={() => setContactOpen(true)}
        lang={lang}
      />

      <ResourcesModal
        isOpen={resourcesOpen}
        onClose={() => setResourcesOpen(false)}
        onOpenContact={() => setContactOpen(true)}
        lang={lang}
      />

      {/* FLOATING ACTION BADGES IN BOTTOM RIGHT */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-2">
        <button
          onClick={() => setRoiModalOpen(true)}
          className="bg-white hover:bg-neutral-50 text-[#111111] px-3 py-2 rounded-full border border-neutral-900/20 shadow-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-all hover:scale-105 cursor-pointer"
        >
          <Calculator className="w-3.5 h-3.5 text-[#5B4FE5]" />
          <span>{lang === 'en' ? 'CRM ROI Calculator' : 'Calculadora ROI CRM'}</span>
        </button>

        <button
          onClick={() => setContactOpen(true)}
          className="bg-[#0A0A0A] hover:bg-[#5B4FE5] text-white px-4 py-2.5 rounded-full shadow-xl text-xs font-sans font-bold uppercase tracking-wider flex items-center gap-2 transition-all hover:scale-105 cursor-pointer border border-neutral-800"
        >
          <MessageSquare className="w-3.5 h-3.5 text-white" />
          <span>{lang === 'en' ? 'GET IN TOUCH' : 'CONVERSEMOS'}</span>
        </button>
      </div>

    </div>
  );
}
