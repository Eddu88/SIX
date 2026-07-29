import React, { useState } from 'react';
import { DotMatrixCanvas } from './DotMatrixCanvas';
import { ArrowRight, Check, X, ChevronLeft, ChevronRight, MessageSquareQuote, Plus, Minus, Calculator, Server, Cloud, Sliders, Settings } from 'lucide-react';
import { translations, Language } from '../data/translations';

interface CrmViewProps {
  onNavigate: (to: string) => void;
  onOpenContact: () => void;
  onOpenResources: () => void;
  onOpenRoiCalculator: () => void;
  lang: Language;
}

export const CrmView: React.FC<CrmViewProps> = ({
  onNavigate,
  onOpenContact,
  onOpenResources,
  onOpenRoiCalculator,
  lang,
}) => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'crm' | 'dashboards'>('crm');

  const testimonials = [
    {
      quote: lang === 'en'
        ? "We migrated all our sales history and customer details scattered in Excel sheets to a modern cloud CRM. Now the sales team has tracking and follow-up automations, increasing deal closures by 25%."
        : "Migramos todo nuestro historial de ventas y clientes disperso en planillas de Excel a un CRM moderno en la nube. Ahora el equipo comercial tiene trazabilidad y automatizaciones de seguimiento, incrementando los cierres en un 25%.",
      clientName: "Ing. Fernando Valdivia",
      clientRole: lang === 'en' ? "Director of Operations" : "Director de Operaciones",
      company: lang === 'en' ? "Distribuidora del Sur (Logistics & Distribution)" : "Distribuidora del Sur (Logística & Distribución)",
      metrics: lang === 'en' ? "+25% conversion rates & 0 lost spreadsheets." : "+25% en conversión de ventas & 0 planillas perdidas.",
      companyCategory: lang === 'en' ? "Logistics & Distribution" : "Logística y Distribución",
      dotMatrixShape: "hourglass"
    },
    {
      quote: lang === 'en'
        ? "We simplified contract management and commercial follow-ups. With Twenty installed on our local server, we do not depend on monthly external fees, and data never leaves our offices."
        : "Simplificamos el control de contratos y el seguimiento comercial. Con Twenty instalado en nuestro servidor local, no dependemos de cobros mensuales externos y la información de la empresa nunca sale de nuestras oficinas.",
      clientName: "Carlos M. Sotomayor",
      clientRole: lang === 'en' ? "Senior Partner" : "Socio Principal",
      company: "Logística Global Co.",
      metrics: lang === 'en' ? "Ahorro of $12K/yr in licenses & 100% local control." : "Ahorro de $12K anuales en licencias & Control 100% local.",
      companyCategory: lang === 'en' ? "Corporate Services" : "Servicios Corporativos",
      dotMatrixShape: "data-flow"
    },
    {
      quote: lang === 'en'
        ? "Twenty CRM's flexibility in our AWS cloud account gave us 100% ownership over our leads database. Sales pipelines feed dynamically into dashboards instantly."
        : "La flexibilidad de Twenty CRM en nuestra propia nube de AWS nos dio el 100% de propiedad sobre el historial de nuestros prospectos. Los tableros comerciales se alimentan de forma instantánea y automática.",
      clientName: "Dra. María Elena Ramos",
      clientRole: lang === 'en' ? "Growth Manager" : "Gerente de Growth",
      company: "FinTech Innova",
      metrics: lang === 'en' ? "+60% sales team productivity & automated reports." : "+60% productividad del equipo comercial & Reportes automáticos.",
      companyCategory: lang === 'en' ? "Financial Technology" : "Tecnología Financiera",
      dotMatrixShape: "cloud-network"
    }
  ];

  const handleNextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentTestimonialIndex];

  const matrixRows = [
    {
      prop: lang === 'en' ? 'Data Ownership' : 'Propiedad de Datos',
      cloud: lang === 'en' ? '100% Yours (Private AWS/Azure account)' : '100% Tuya (Cuenta AWS/Azure propia)',
      premise: lang === 'en' ? '100% Yours (Physical local server)' : '100% Tuya (Servidor físico local)'
    },
    {
      prop: lang === 'en' ? 'Software License Fees' : 'Costos de Licencia',
      cloud: '$0 per user monthly',
      premise: '$0 per user monthly'
    },
    {
      prop: lang === 'en' ? 'Infrastructure Costs' : 'Costos de Infraestructura',
      cloud: lang === 'en' ? 'Pay-as-you-go Cloud consumption (~$10-25/mo)' : 'Pago por consumo Cloud (~$10-25/mes)',
      premise: lang === 'en' ? '$0 monthly (Use your existing hardware)' : '$0 mensuales (Usa tu hardware existente)'
    },
    {
      prop: lang === 'en' ? 'Security' : 'Seguridad',
      cloud: lang === 'en' ? 'SSL/TLS encryption in private cloud' : 'Cifrado SSL/TLS en nube privada',
      premise: lang === 'en' ? 'Physical network control (Air-gapped offline)' : 'Física (Fuera de internet si se requiere)'
    },
    {
      prop: lang === 'en' ? 'WhatsApp/API Integration' : 'Integración WhatsApp/API',
      cloud: lang === 'en' ? 'Direct and automated in the cloud' : 'Directa y automatizada en la nube',
      premise: lang === 'en' ? 'Requires secure tunnel config' : 'Requiere túnel seguro'
    }
  ];

  const t = translations[lang].crm;

  return (
    <div className="animate-in fade-in duration-300">
      
      {/* 1. HERO SECTION */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-[#FFFFFF] border-b border-neutral-900/10 overflow-hidden relative">
        <div className="absolute top-12 right-0 w-72 h-72 bg-dot-matrix-sm opacity-20 pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-10 w-48 h-48 bg-dot-matrix-sm opacity-15 pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* LEFT: TEXT */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-50 border border-neutral-900/15 rounded-md">
                <span className="w-2 h-2 rounded-sm bg-[#5B4FE5]"></span>
                <span className="text-xs font-mono font-medium tracking-wide text-[#111111] uppercase">
                  {t.heroTag}
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6.5xl text-[#111111] leading-tight tracking-tight">
                {lang === 'en' ? (
                  <>
                    Organize contacts, notes, and tasks in a <span className="text-[#5B4FE5] italic font-serif">CRM that remains yours</span>.
                  </>
                ) : (
                  <>
                    Organiza tus contactos, notas y tareas en un <span className="text-[#5B4FE5] italic font-serif">CRM que sigue siendo tuyo</span>.
                  </>
                )}
              </h1>

              <p className="font-sans text-base text-[#6B7280] leading-relaxed">
                {t.heroSubtitle}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenRoiCalculator}
                  className="px-6 py-3.5 bg-[#0A0A0A] hover:bg-[#5B4FE5] text-white font-sans font-bold text-xs uppercase tracking-wider rounded-md transition-all duration-200 shadow-md flex items-center gap-2 cursor-pointer group"
                >
                  <Calculator className="w-4 h-4" />
                  <span>{t.ctaCalculator}</span>
                </button>

                <button
                  onClick={onOpenContact}
                  className="px-6 py-3.5 bg-transparent hover:bg-neutral-100 border border-neutral-900 text-[#111111] font-sans font-bold text-xs uppercase tracking-wider rounded-md transition-colors cursor-pointer"
                >
                  {lang === 'en' ? 'CONTACT AN EXPERT' : 'CONTACTAR UN EXPERTO'}
                </button>
              </div>
            </div>

            {/* RIGHT: CONTENT (CARRUSEL) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-[#5B4FE5] rounded flex items-center justify-center text-white text-[10px] font-bold">
                  ✓
                </div>
                <span className="font-sans font-semibold text-xs text-[#111111] uppercase tracking-wider">
                  {t.ctaTestimonial}
                </span>
              </div>

              {/* TESTIMONIAL QUOTE */}
              <div className="p-6 bg-neutral-50/90 rounded-lg border-l-2 border-[#5B4FE5] border-y border-r border-neutral-200 space-y-4">
                <div className="flex items-start gap-3">
                  <MessageSquareQuote className="w-6 h-6 text-[#5B4FE5] shrink-0 mt-0.5" />
                  <p className="font-sans text-base text-[#111111] leading-relaxed font-normal italic">
                    "{currentTestimonial.quote}"
                  </p>
                </div>
                
                <div className="mt-4 pt-3 border-t border-neutral-200/60 flex items-center justify-between text-xs">
                  <span className="font-mono text-[#5B4FE5] font-bold">
                    {currentTestimonial.metrics}
                  </span>
                  <span className="font-sans text-[#6B7280] font-medium">
                    {currentTestimonial.companyCategory}
                  </span>
                </div>
              </div>

              {/* CONTROLS */}
              <div className="flex items-center justify-between pt-2">
                <div>
                  <div className="font-sans font-bold text-sm text-[#111111]">
                    {currentTestimonial.clientName}
                  </div>
                  <div className="font-sans text-xs text-[#6B7280]">
                    {currentTestimonial.clientRole} · <span className="text-[#111111] font-medium">{currentTestimonial.company}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-semibold text-[#111111]">
                    0{currentTestimonialIndex + 1} / 0{testimonials.length}
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={handlePrevTestimonial}
                      className="w-8 h-8 rounded border border-neutral-300 hover:bg-neutral-100 text-[#111111] flex items-center justify-center transition-colors cursor-pointer"
                      aria-label="Previous Testimonial"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNextTestimonial}
                      className="w-8 h-8 rounded border border-neutral-300 hover:bg-neutral-100 text-[#111111] flex items-center justify-center transition-colors cursor-pointer"
                      aria-label="Next Testimonial"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. DEPLOYMENT MATRIX SECTION */}
      <section className="py-20 bg-[#FFFFFF] border-b border-neutral-900/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono text-[#5B4FE5] uppercase tracking-wider font-bold mb-2 block">
              // {lang === 'en' ? 'DEPLOYMENT COMPARISON' : 'MATRIZ DE DEPLOYMENT'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111111]">
              {t.matrixTitle}
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#6B7280] mt-2">
              {t.matrixSubtitle}
            </p>
          </div>

          <div className="overflow-x-auto border border-neutral-900/15 rounded-xl bg-white shadow-xs max-w-4xl mx-auto">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-50/80">
                  <th className="py-4 px-6 text-xs font-mono text-[#6B7280] uppercase tracking-wider w-1/3">
                    {t.matrixThProp}
                  </th>
                  <th className="py-4 px-6 text-xs font-mono text-[#111111] uppercase tracking-wider w-1/3 border-l border-neutral-200 bg-blue-50/10">
                    <div className="flex items-center gap-1.5 font-bold">
                      <Cloud className="w-4 h-4 text-[#5B4FE5]" />
                      <span>{t.matrixThCloud}</span>
                    </div>
                  </th>
                  <th className="py-4 px-6 text-xs font-mono text-[#111111] uppercase tracking-wider w-1/3 border-l border-neutral-200 bg-emerald-50/10">
                    <div className="flex items-center gap-1.5 font-bold">
                      <Server className="w-4 h-4 text-emerald-600" />
                      <span>{t.matrixThPrem}</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200/80 text-xs sm:text-sm font-sans">
                {matrixRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-neutral-50/50 transition-colors">
                    <td className="py-5 px-6 font-bold text-[#111111]">{row.prop}</td>
                    
                    <td className="py-5 px-6 border-l border-neutral-200 text-neutral-600 font-medium">
                      {row.cloud}
                    </td>
                    
                    <td className="py-5 px-6 border-l border-neutral-200 text-neutral-600 font-medium">
                      {row.premise}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* 3. TWENTY CRM CAPABILITIES SECTION */}
      <section className="py-20 bg-neutral-50/50 border-b border-neutral-900/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-neutral-200">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#5B4FE5] uppercase tracking-wider font-semibold mb-2">
                <span>{t.featuresTag}</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111111]">
                {t.featuresTitle}
              </h2>
            </div>
            <p className="mt-4 md:mt-0 font-sans text-xs text-[#6B7280] max-w-sm leading-relaxed">
              {t.featuresSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {t.featuresCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white border border-neutral-900/15 p-6 rounded-lg paper-cut hover:border-[#5B4FE5] transition-all duration-300 group flex flex-col justify-between h-full relative"
              >
                <div>
                  <div className="flex items-start gap-2.5 mb-4">
                    <div className="p-2 bg-[#5B4FE5]/5 rounded border border-[#5B4FE5]/25">
                      {idx === 0 && <Sliders className="w-5 h-5 text-[#5B4FE5]" />}
                      {idx === 1 && <Settings className="w-5 h-5 text-[#5B4FE5]" />}
                      {idx === 2 && <Sliders className="w-5 h-5 text-[#5B4FE5]" />}
                      {idx === 3 && <Settings className="w-5 h-5 text-[#5B4FE5]" />}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono text-[#5B4FE5] uppercase font-bold tracking-wider">
                        {lang === 'en' ? `CAPABILITY 0${idx + 1}` : `CAPACIDAD 0${idx + 1}`}
                      </span>
                      <h3 className="font-sans font-bold text-base text-[#111111] group-hover:text-[#5B4FE5] transition-colors">
                        {card.title}
                      </h3>
                    </div>
                  </div>

                  <div className="dotted-line w-full py-1 my-2" />
                  <p className="font-sans text-xs text-[#6B7280] leading-relaxed mb-4 min-h-[48px]">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#111111] font-semibold group-hover:text-[#5B4FE5]">
                    {lang === 'en' ? 'Adaptation specifications →' : 'Especificaciones de Adaptación →'}
                  </span>
                  <div className="w-9 h-9 rounded-full border border-neutral-900/20 group-hover:border-[#5B4FE5] group-hover:bg-[#5B4FE5] group-hover:text-white text-[#111111] flex items-center justify-center transition-all duration-200">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. FAQ (CRM) */}
      <section className="py-20 bg-[#FFFFFF] relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-[#5B4FE5] uppercase tracking-wider font-bold mb-2 block">
              // {t.faqTag}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#111111]">
              {lang === 'en' ? (
                <>
                  Resolve your questions about <span className="text-[#5B4FE5] font-serif italic">CRM Migration</span>
                </>
              ) : (
                <>
                  Resuelve tus dudas sobre <span className="text-[#5B4FE5] font-serif italic">Migración a CRM</span>
                </>
              )}
            </h2>
          </div>

          <div className="space-y-3">
            {t.faqItems.map((faq, i) => {
              const isOpen = activeFaq === i;

              return (
                <div
                  key={i}
                  className="bg-white border border-neutral-900/15 rounded-lg overflow-hidden transition-all duration-200 paper-cut"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : i)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-neutral-50/80 transition-colors"
                  >
                    <span className="font-sans font-bold text-sm sm:text-base text-[#111111]">
                      {faq.question}
                    </span>

                    <div
                      className={`w-7 h-7 rounded-full border border-neutral-300 shrink-0 flex items-center justify-center transition-all ${isOpen
                        ? 'bg-[#5B4FE5] text-white border-[#5B4FE5]'
                        : 'bg-white text-[#5B4FE5] hover:border-[#5B4FE5]'
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 border-t border-neutral-100 animate-in fade-in duration-200">
                      <p className="font-sans text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};
