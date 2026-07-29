import React, { useState } from 'react';
import { DotMatrixCanvas } from './DotMatrixCanvas';
import { ArrowRight, Check, Brain, Database, Network, Plus, Minus, Linkedin } from 'lucide-react';
import { translations, Language } from '../data/translations';

interface NosotrosViewProps {
  onNavigate: (to: string) => void;
  onOpenContact: () => void;
  onOpenResources: () => void;
  onOpenRoiCalculator: () => void;
  lang: Language;
}

export const NosotrosView: React.FC<NosotrosViewProps> = ({
  onNavigate,
  onOpenContact,
  onOpenResources,
  onOpenRoiCalculator,
  lang,
}) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const stats = [
    {
      number: lang === 'en' ? '6+ Yrs' : '6+ Años',
      label: lang === 'en' ? 'Professional Experience' : 'De Experiencia Profesional',
      desc: lang === 'en' ? 'Individual track record designing and implementing analytical data setups.' : 'Trayectoria individual diseñando e implementando entornos de datos analíticos.'
    },
    {
      number: '50+',
      label: lang === 'en' ? 'Projects Delivered' : 'Proyectos Entregados',
      desc: lang === 'en' ? 'Migrations, pipelines, and dashboards live in production across industries.' : 'Migraciones, pipelines y tableros en producción en múltiples industrias.'
    },
    {
      number: '100%',
      label: lang === 'en' ? 'Independent Architecture' : 'Propuesta Independiente',
      desc: lang === 'en' ? 'Focused on open-source and serverless cloud systems to avoid vendor lock-in.' : 'Enfocados en código abierto y cloud serverless para evitar el vendor lock-in.'
    }
  ];

  const expertises = [
    {
      title: lang === 'en' ? 'Data Science' : 'Ciencia de Datos',
      desc: lang === 'en' ? 'Development of predictive models and custom Machine Learning algorithms matching real queries.' : 'Desarrollo de modelos predictivos y algoritmos de Machine Learning adaptados a las preguntas reales de tu negocio.',
      icon: <Brain className="w-5 h-5 text-[#5B4FE5]" />,
      bullets: lang === 'en'
        ? ['Demand projection models', 'Advanced client segmentation', 'Custom algorithms']
        : ['Modelos de proyección de demanda', 'Segmentación avanzada de clientes', 'Algoritmos a medida']
    },
    {
      title: lang === 'en' ? 'Data Engineering' : 'Ingeniería de Datos',
      desc: lang === 'en' ? 'Building robust pipelines and automated ETL/ELT flows to integrate live streams.' : 'Construcción de pipelines de datos robustos y automatización de flujos ETL/ELT para integrar todas tus fuentes en vivo.',
      icon: <Database className="w-5 h-5 text-[#5B4FE5]" />,
      bullets: lang === 'en'
        ? ['Ingress and clean de-duplication', 'Data pipeline orchestration', 'API integrations']
        : ['Ingesta y limpieza de duplicados', 'Orquestación de flujos de datos', 'Integraciones mediante APIs']
    },
    {
      title: lang === 'en' ? 'Data Architecture' : 'Arquitectura de Datos',
      desc: lang === 'en' ? 'Design of modern warehouses, from classic DBs to elastic Data Lakes and Lakehouses.' : 'Diseño de almacenes de datos modernos, desde Data Warehouses tradicionales hasta lagos de datos elásticos.',
      icon: <Network className="w-5 h-5 text-[#5B4FE5]" />,
      bullets: lang === 'en'
        ? ['Data Lakes & Lakehouses', 'Medallion structures', 'Cloud and hybrid support']
        : ['Data Lakes & Lakehouses', 'Arquitectura de medallones', 'Soporte cloud e híbrido']
    }
  ];

  const faqs = [
    {
      question: lang === 'en' ? 'Why choose an independent engineering team over a traditional consultancy?' : '¿Por qué elegir un equipo de ingeniería independiente en lugar de una consultoría tradicional?',
      answer: lang === 'en'
        ? 'Traditional consultancies recommend proprietary software with high license costs due to sales commission partnerships. We are 100% independent; we focus on open-source and serverless clouds. This means ingestion code and databases are fully yours, with no mandatory licensing fees.'
        : 'Las consultorías tradicionales suelen recomendar software propietario con licencias costosas por usuario debido a alianzas comerciales. Nosotros somos 100% independientes; nos enfocamos en herramientas open source y cloud serverless. De esta forma, el código de los pipelines y la base de datos son de tu propiedad absoluta, sin cuotas mensuales obligatorias.'
    },
    {
      question: lang === 'en' ? 'What technical profiles do the founders have?' : '¿Qué perfiles técnicos tienen los fundadores de Six?',
      answer: lang === 'en'
        ? 'We are two data scientists with more than 6 years of experience each. We have led data engineering, business intelligence, and predictive modeling across sectors (logistics to fintech), which helps us bridge technical specifications with executive board business indicators.'
        : 'Somos dos científicos de datos con más de 6 años de experiencia cada uno. Hemos trabajado liderando la ingeniería de datos, el análisis de negocio y el modelamiento predictivo en diversas industrias, desde logística hasta fintech, lo que nos permite entender tanto el lenguaje técnico como las necesidades comerciales de la gerencia.'
    },
    {
      question: lang === 'en' ? 'How do you transfer knowledge at project close?' : '¿Cómo aseguran la transferencia de conocimientos al terminar el proyecto?',
      answer: lang === 'en'
        ? 'At project close, we deliver full documentation on architecture layouts and data lineage. We also train your engineering or business reps to run the CRM or BI dashboards autonomously. We do not generate lock-in; we want you to fully own your setups.'
        : 'Al finalizar la implementación, entregamos la documentación completa de la arquitectura y el linaje de datos. Además, capacitamos a tu equipo técnico o comercial para que puedan operar el CRM o los tableros de BI de forma autónoma. No creamos dependencias artificiales; queremos que seas dueño de tu infraestructura.'
    },
    {
      question: lang === 'en' ? 'Do you work with our current cloud setup?' : '¿Trabajan con nuestras herramientas de nube actuales?',
      answer: lang === 'en'
        ? 'Yes. We design models compatible with your existing cloud tools in AWS or Azure, or configure local databases (on-premise) if you prefer to keep your records physically inside your network. We adapt to your starting line.'
        : 'Sí. Diseñamos soluciones compatibles con tu infraestructura actual en AWS o Azure, o configuramos servidores locales (on-premise) si prefieres mantener los datos físicamente en tu oficina. Nos adaptamos a tu punto de partida.'
    }
  ];

  const t = translations[lang].nosotros;

  return (
    <div className="animate-in fade-in duration-300">

      {/* 1. HERO SECTION */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-[#FFFFFF] border-b border-neutral-900/10 overflow-hidden relative">
        <div className="absolute top-12 right-0 w-72 h-72 bg-dot-matrix-sm opacity-20 pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-10 w-48 h-48 bg-dot-matrix-sm opacity-15 pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* LEFT: TEXT */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-50 border border-neutral-900/15 rounded-md">
                <span className="w-2 h-2 rounded-sm bg-[#5B4FE5]"></span>
                <span className="text-xs font-mono font-medium tracking-wide text-[#111111] uppercase">
                  {t.heroTag}
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6.5xl text-[#111111] leading-tight tracking-tight">
                {lang === 'en' ? (
                  <>
                    Deep data knowledge to design your <span className="text-[#5B4FE5] italic font-serif">base of decisions</span>.
                  </>
                ) : (
                  <>
                    Conocimiento profundo de datos para diseñar tu <span className="text-[#5B4FE5] italic font-serif">base de decisiones</span>.
                  </>
                )}
              </h1>

              <p className="font-sans text-base text-[#6B7280] leading-relaxed">
                {t.heroSubtitle}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenContact}
                  className="px-6 py-3.5 bg-[#0A0A0A] hover:bg-[#5B4FE5] text-white font-sans font-bold text-xs uppercase tracking-wider rounded-md transition-all duration-200 shadow-md flex items-center gap-2 cursor-pointer group"
                >
                  <span>{t.ctaConversar}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={onOpenResources}
                  className="px-6 py-3.5 bg-transparent hover:bg-neutral-100 border border-neutral-900 text-[#111111] font-sans font-bold text-xs uppercase tracking-wider rounded-md transition-colors cursor-pointer"
                >
                  {t.ctaBlueprints}
                </button>
              </div>
            </div>

            {/* RIGHT: ABSTRACT GRAPHIC */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 bg-neutral-50/80 rounded-xl border border-neutral-200/80 relative paper-cut-lg paper-cut-fold group transition-all duration-300 hover:border-[#5B4FE5]/40">
              <div className="absolute top-3 left-3 text-[10px] font-mono text-[#6B7280] uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FE5]"></span>
                {t.independentTag}
              </div>

              <div className="py-6 flex items-center justify-center my-2">
                <DotMatrixCanvas
                  shape="data-flow"
                  width={260}
                  height={260}
                  dotColor="#5B4FE5"
                  dotSize={2.8}
                  spacing={10}
                  animate={true}
                />
              </div>

              <div className="w-full dotted-line py-2 my-2" />

              <div className="w-full flex items-center justify-between text-xs font-mono text-[#111111]">
                <span className="font-semibold text-[#5B4FE5]">{t.independentTag}</span>
                <span className="text-[#6B7280]">{t.independentVal}</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. NUESTRA PROPUESTA (Lo que Ofrecemos) */}
      <section className="py-20 bg-[#FFFFFF] border-b border-neutral-900/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono text-[#5B4FE5] uppercase tracking-wider font-bold block">
                {t.propuestaTag}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111111] leading-tight">
                {lang === 'en' ? (
                  <>
                    Knowledge adapted to your organization's <span className="text-[#5B4FE5] italic font-serif">reality</span>.
                  </>
                ) : (
                  <>
                    Conocimiento adaptado a la <span className="text-[#5B4FE5] italic font-serif">realidad</span> de tu organización.
                  </>
                )}
              </h2>
            </div>
            <div className="lg:col-span-6">
              <p className="font-sans text-base text-[#6B7280] leading-relaxed">
                {t.propuestaDesc}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {expertises.map((exp, idx) => (
              <div
                key={idx}
                className="bg-white border border-neutral-900/15 p-6 rounded-lg paper-cut hover:border-[#5B4FE5] transition-all duration-300 group flex flex-col justify-between h-full relative"
              >
                <div>
                  <div className="flex items-start gap-2.5 mb-4">
                    <div className="p-2 bg-[#5B4FE5]/5 rounded border border-[#5B4FE5]/25">
                      {exp.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono text-[#5B4FE5] uppercase font-bold tracking-wider">
                        {t.ejeTrabajo} 0{idx + 1}
                      </span>
                      <h3 className="font-sans font-bold text-base text-[#111111] group-hover:text-[#5B4FE5] transition-colors">
                        {exp.title}
                      </h3>
                    </div>
                  </div>

                  <div className="dotted-line w-full py-1 my-2" />
                  
                  <p className="font-sans text-xs text-[#6B7280] leading-relaxed mb-4 min-h-[48px]">
                    {exp.desc}
                  </p>

                  <div className="space-y-2 my-4">
                    {exp.bullets.map((bullet, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[11px] text-[#111111]">
                        <Check className="w-3.5 h-3.5 text-[#5B4FE5] shrink-0" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#111111] font-semibold group-hover:text-[#5B4FE5]">
                    {t.saberMas}
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

      {/* 3. TRAYECTORIA & ESTADÍSTICAS */}
      <section className="py-20 bg-neutral-50/50 border-b border-neutral-900/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono text-[#5B4FE5] uppercase tracking-wider font-bold block">
                {t.respaldoTag}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#111111] leading-tight">
                {t.respaldoTitle}
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                {t.respaldoDesc}
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white border border-neutral-900/15 rounded-lg paper-cut hover:border-[#5B4FE5] transition-all duration-200 group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-mono text-[#6B7280] block mb-2">0{idx + 1}</span>
                    <div className="font-serif text-3xl sm:text-4xl font-bold text-[#5B4FE5] mb-2">{stat.number}</div>
                    <h4 className="font-sans font-bold text-xs text-[#111111] uppercase tracking-wider mb-2">{stat.label}</h4>
                    <p className="text-[11px] text-[#6B7280] leading-normal">{stat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 4. EQUIPO FUNDADOR */}
      <section className="py-20 bg-[#FFFFFF] border-b border-neutral-900/10 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono text-[#5B4FE5] uppercase tracking-wider font-bold mb-2 block">
              {t.sociosTag}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#111111] font-bold">
              {t.sociosTitle}
            </h2>
            <p className="font-sans text-xs text-[#6B7280] mt-1">
              {t.sociosSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* FOUNDER 1 */}
            <div className="bg-white border border-neutral-900/15 p-6 rounded-lg paper-cut hover:border-[#5B4FE5] transition-all duration-300 group flex flex-col justify-between relative h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-[10px] font-mono text-[#5B4FE5] uppercase font-bold tracking-wider block mb-1">
                      CO-FOUNDER & DATA GOVERNANCE
                    </span>
                    <h3 className="font-sans font-bold text-lg text-[#111111]">
                      Ing. Víctor Ayaipoma
                    </h3>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/victor-ayaipoma-496a681b5/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full border border-neutral-200 hover:border-[#5B4FE5] hover:bg-[#5B4FE5] hover:text-white text-[#111111] flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="LinkedIn Víctor"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
                <div className="dotted-line w-full py-1 mb-4" />
                <p className="font-sans text-xs text-[#6B7280] leading-relaxed">
                  {lang === 'en'
                    ? "More than 6 years of experience leading predictive modeling projects, Machine Learning, and exploiting business data. Specialized in structuring business hypotheses from clean data datasets."
                    : "Más de 6 años de experiencia liderando proyectos de modelamiento predictivo, Machine Learning y explotación de datos de negocio. Especializado en estructurar hipótesis de negocio a partir de datos limpios."}
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-neutral-100 text-[10px] font-mono text-neutral-400">
                <span>victor@six-data.cloud</span>
              </div>
            </div>

            {/* FOUNDER 2 */}
            <div className="bg-white border border-neutral-900/15 p-6 rounded-lg paper-cut hover:border-[#5B4FE5] transition-all duration-300 group flex flex-col justify-between relative h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-[10px] font-mono text-[#5B4FE5] uppercase font-bold tracking-wider block mb-1">
                      CO-FOUNDER & DATA ENGINEER / ANALYTICS
                    </span>
                    <h3 className="font-sans font-bold text-lg text-[#111111]">
                      Ing. Mizael Morales
                    </h3>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/mizael-morales/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full border border-neutral-200 hover:border-[#5B4FE5] hover:bg-[#5B4FE5] hover:text-white text-[#111111] flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="LinkedIn Gabriel"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
                <div className="dotted-line w-full py-1 mb-4" />
                <p className="font-sans text-xs text-[#6B7280] leading-relaxed">
                  {lang === 'en'
                    ? "More than 6 years of experience specializing in elastic data streams, Apache ETL/ELT orchestration, and local/cloud hosting. Focused on the reliability of storage."
                    : "Más de 6 años de experiencia especializándose en flujos de datos elásticos, orquestación de ETL/ELT con Apache y hosting local/nube. Enfocado en la fiabilidad del almacenamiento."}
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-neutral-100 text-[10px] font-mono text-neutral-400">
                <span>gabriel@six-data.cloud</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. FAQ DE NOSOTROS */}
      <section className="py-20 bg-[#FFFFFF] relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-[#5B4FE5] uppercase tracking-wider font-bold mb-2 block">
              {t.faqTag}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#111111]">
              {lang === 'en' ? (
                <>
                  Resolve your questions about the <span className="text-[#5B4FE5] font-serif italic">founding team</span>
                </>
              ) : (
                <>
                  Resuelve tus dudas sobre el <span className="text-[#5B4FE5] font-serif italic">equipo fundador</span>
                </>
              )}
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;

              return (
                <div
                  key={idx}
                  className="bg-white border border-neutral-900/15 rounded-lg overflow-hidden transition-all duration-200 paper-cut"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
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
