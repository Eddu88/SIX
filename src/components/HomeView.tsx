import React, { useState } from 'react';
import { DotMatrixCanvas } from './DotMatrixCanvas';
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, MessageSquareQuote, Plus, Minus } from 'lucide-react';
import { TESTIMONIALS, METRIC_STATS } from '../data/viData';

interface HomeViewProps {
  onNavigate: (to: string) => void;
  onOpenContact: () => void;
  onOpenResources: () => void;
  onOpenRoiCalculator: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenContact,
  onOpenResources,
  onOpenRoiCalculator,
}) => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleNextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const currentTestimonial = TESTIMONIALS[currentTestimonialIndex];

  const homeFaqs = [
    {
      question: '¿Cómo sé si necesito Soluciones de Datos, un CRM, o ambos?',
      answer: 'Si tu principal desafío es la gestión de clientes, seguimiento de vendedores y conversión de ventas, necesitas el CRM. Si tu desafío es centralizar múltiples fuentes de información dispersas, crear tuberías de datos automáticas y consolidar reportes de negocio, necesitas Soluciones de Datos. Muchas empresas en crecimiento inician con CRM y luego integran Soluciones de Datos para unificar marketing, facturación e inventarios.'
    },
    {
      question: '¿Qué significa que la propuesta de Six sea de "libre licencia"?',
      answer: 'Significa que no te atamos a contratos de software propietarios costosos con licencias mensuales abusivas. Diseñamos e implementamos arquitecturas utilizando herramientas de código abierto o servicios cloud serverless independientes (donde solo pagas centavos por tu consumo real de cómputo y almacenamiento). El control y la propiedad del código y de tus bases de datos son 100% tuyos.'
    },
    {
      question: '¿Cómo es el proceso de trabajo inicial con Six?',
      answer: 'Comenzamos con una auditoría técnica gratuita de tus planillas o base de datos actual. Diseñamos un blueprint conceptual sin compromisos adaptado a tu presupuesto. Luego realizamos la implementación ágil en fases de 4 a 8 semanas, asegurando cero disrupción en tus reportes actuales, y te entregamos la documentación y el control total de la plataforma.'
    }
  ];

  return (
    <div className="animate-in fade-in duration-300">
      
      {/* 1. HERO SECTION */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-[#FFFFFF] border-b border-neutral-900/10 overflow-hidden relative">
        <div className="absolute top-12 right-0 w-72 h-72 bg-dot-matrix-sm opacity-20 pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-10 w-48 h-48 bg-dot-matrix-sm opacity-15 pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-50 border border-neutral-900/15 rounded-md">
              <span className="w-2 h-2 rounded-sm bg-[#5B4FE5]"></span>
              <span className="text-xs font-mono font-medium tracking-wide text-[#111111] uppercase">
                Ingeniería de Datos & CRM
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-7.5xl text-[#111111] leading-tight tracking-tight">
              Datos y CRM que <br />
              <span className="text-[#5B4FE5] italic font-serif">siguen siendo tuyos</span>.
            </h1>

            <p className="font-sans text-base sm:text-lg text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
              Six es una empresa de ingeniería especializada en dos frentes complementarios — arquitectura de datos end-to-end y CRM a tu medida — siempre de libre licencia, sin vendor lock-in y bajo tu control.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenContact}
                className="px-6 py-3.5 bg-[#0A0A0A] hover:bg-[#5B4FE5] text-white font-sans font-bold text-xs uppercase tracking-wider rounded-md transition-all duration-200 shadow-md inline-flex items-center gap-2 cursor-pointer group"
              >
                <span>INICIAR CONSULTA GRATUITA</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* TWO SIDE-BY-SIDE PRODUCT CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* PRODUCT CARD 1: SOLUCIONES DE DATOS */}
            <div
              onClick={() => onNavigate('/soluciones-datos')}
              className="bg-white border border-neutral-900/15 p-8 rounded-lg paper-cut paper-cut-fold hover:border-[#5B4FE5] transition-all duration-300 group cursor-pointer flex flex-col justify-between h-full relative"
            >
              <div>
                <div className="flex items-start justify-between mb-6">
                  <span className="text-[10px] font-mono text-[#5B4FE5] uppercase font-bold tracking-wider px-2.5 py-1 bg-[#5B4FE5]/10 rounded">
                    PRODUCTO 01
                  </span>

                  <div className="p-3 bg-neutral-50 rounded border border-neutral-200 group-hover:border-[#5B4FE5]/40 transition-colors">
                    <DotMatrixCanvas
                      shape="hourglass"
                      width={80}
                      height={80}
                      dotColor="#5B4FE5"
                      dotSize={2.4}
                      spacing={8}
                      animate={true}
                    />
                  </div>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#111111] mb-3 group-hover:text-[#5B4FE5] transition-colors">
                  Soluciones de Datos
                </h3>
                <div className="dotted-line w-full py-1 my-3" />
                <p className="font-sans text-sm text-[#6B7280] leading-relaxed mb-6">
                  Arquitectura, ingeniería, ciencia y análisis de datos end-to-end sobre AWS, Azure y Apache. Diseñamos e implementamos repositorios elásticos sin licencias que te aten.
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-xs font-mono text-[#111111] font-bold group-hover:text-[#5B4FE5]">
                  Explorar Soluciones de Datos →
                </span>
                <div className="w-10 h-10 rounded-full border border-neutral-900/20 group-hover:border-[#5B4FE5] group-hover:bg-[#5B4FE5] group-hover:text-white text-[#111111] flex items-center justify-center transition-all duration-200">
                  <ArrowRight className="w-4.5 h-4.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </div>

            {/* PRODUCT CARD 2: CRM */}
            <div
              onClick={() => onNavigate('/crm')}
              className="bg-white border border-neutral-900/15 p-8 rounded-lg paper-cut paper-cut-fold hover:border-[#5B4FE5] transition-all duration-300 group cursor-pointer flex flex-col justify-between h-full relative"
            >
              <div>
                <div className="flex items-start justify-between mb-6">
                  <span className="text-[10px] font-mono text-[#5B4FE5] uppercase font-bold tracking-wider px-2.5 py-1 bg-[#5B4FE5]/10 rounded">
                    PRODUCTO 02
                  </span>

                  <div className="p-3 bg-neutral-50 rounded border border-neutral-200 group-hover:border-[#5B4FE5]/40 transition-colors">
                    <DotMatrixCanvas
                      shape="data-flow"
                      width={80}
                      height={80}
                      dotColor="#5B4FE5"
                      dotSize={2.4}
                      spacing={8}
                      animate={true}
                    />
                  </div>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#111111] mb-3 group-hover:text-[#5B4FE5] transition-colors">
                  CRM
                </h3>
                <div className="dotted-line w-full py-1 my-3" />
                <p className="font-sans text-sm text-[#6B7280] leading-relaxed mb-6">
                  Implementación y adaptación de Twenty (CRM open source) en tu propio servidor o tu propia nube. Conserva el control total de tus contactos, notas, comisiones y tareas.
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-xs font-mono text-[#111111] font-bold group-hover:text-[#5B4FE5]">
                  Explorar CRM →
                </span>
                <div className="w-10 h-10 rounded-full border border-neutral-900/20 group-hover:border-[#5B4FE5] group-hover:bg-[#5B4FE5] group-hover:text-white text-[#111111] flex items-center justify-center transition-all duration-200">
                  <ArrowRight className="w-4.5 h-4.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. QUIÉNES SOMOS & TRACK RECORD (General) */}
      <section className="py-20 bg-[#FFFFFF] border-b border-neutral-900/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#5B4FE5] uppercase tracking-wider font-semibold">
                <span>// PROPUESTA DE VALOR</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111111] leading-snug">
                Empresa de ingeniería 100% independiente, enfocada en <span className="text-[#5B4FE5] font-serif italic">valor comercial</span>.
              </h2>

              <p className="font-sans text-base text-[#6B7280] leading-relaxed">
                En <strong>Six Data Solutions</strong> entendemos que el valor de la tecnología radica en su practicidad. Ayudamos a empresas en crecimiento a estructurar sus almacenes de datos y a centralizar su embudo de ventas en plataformas modernas sin pagar licencias de software prohibitivas.
              </p>

              <p className="font-sans text-base text-[#6B7280] leading-relaxed">
                Nuestros ingenieros combinan metodologías ágiles y nubes públicas para crear pipelines estables de información y flujos automatizados de CRM comercial, dándote total propiedad sobre tu infraestructura técnica.
              </p>

              <div className="pt-4">
                <button
                  onClick={onOpenContact}
                  className="px-5 py-3 bg-[#0A0A0A] hover:bg-[#5B4FE5] text-white font-sans font-bold text-xs uppercase tracking-wider rounded-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>MÁS INFORMACIÓN</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {METRIC_STATS.map((stat, idx) => (
                  <div
                    key={stat.id}
                    className="p-6 bg-white border border-neutral-900/15 rounded-lg paper-cut hover:border-[#5B4FE5] transition-all duration-200 group flex flex-col justify-between h-full"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-mono text-[#5B4FE5] uppercase tracking-wider font-bold px-2 py-0.5 bg-[#5B4FE5]/10 rounded">
                          {stat.highlightText}
                        </span>
                        <span className="text-xs font-mono text-[#6B7280]">0{idx + 1}</span>
                      </div>

                      <div className="font-serif text-4xl sm:text-5xl font-bold text-[#5B4FE5] tracking-tight group-hover:scale-105 transition-transform origin-left mb-2">
                        {stat.number}
                      </div>

                      <h3 className="font-sans font-bold text-sm text-[#111111] uppercase tracking-wide mb-2">
                        {stat.label}
                      </h3>

                      <p className="font-sans text-xs text-[#6B7280] leading-normal">
                        {stat.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] font-mono text-[#6B7280]">
                      <span>Engineering Agency</span>
                      <span className="text-[#5B4FE5] font-bold">100% Independiente</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. PRODUCT PRESENTATION SUMMARY */}
      <section className="py-20 bg-neutral-50/50 border-b border-neutral-900/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-[#5B4FE5] uppercase tracking-wider font-bold mb-2 block">
              // NUESTROS PRODUCTOS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111111]">
              Dos frentes especializados para <span className="text-[#5B4FE5] font-serif italic">tus necesidades</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Soluciones de Datos block */}
            <div className="bg-white p-8 rounded-lg border border-neutral-200 shadow-xs flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-2xl text-[#111111] mb-2 font-bold">
                  Soluciones de Datos
                </h3>
                <p className="text-xs text-[#6B7280] mb-6 font-sans">
                  Diseño de arquitectura e ingeniería de datos escalable para centralizar tu información.
                </p>
                <ul className="space-y-3 mb-8">
                  {['Arquitectura de Datos (Data Warehouse, Data Lake, Lakehouse)', 'Ciencia de Datos y modelos de Machine Learning (ML)', 'Ingeniería de Datos con flujos ETL/ELT automatizados', 'Análisis de Datos y dashboards ejecutivos transversales'].map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs font-sans text-[#111111]">
                      <span className="text-[#5B4FE5] font-bold shrink-0 mt-0.5">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => onNavigate('/soluciones-datos')}
                className="text-xs font-mono font-bold text-[#5B4FE5] hover:underline inline-flex items-center gap-1.5 cursor-pointer mt-auto"
              >
                <span>Ver especificaciones de Datos</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* CRM block */}
            <div className="bg-white p-8 rounded-lg border border-neutral-200 shadow-xs flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-2xl text-[#111111] mb-2 font-bold">
                  CRM
                </h3>
                <p className="text-xs text-[#6B7280] mb-6 font-sans">
                  Digitalización y automatización de tus relaciones y procesos de ventas comerciales.
                </p>
                <ul className="space-y-3 mb-8">
                  {['Implementación y despliegue de Twenty CRM (open source)', 'Integración & Migración de contactos, tareas y notas dispersas', 'Personalización del embudo y triggers a tu proceso comercial', 'Tableros de control y analítica ejecutiva sobre tu propio CRM'].map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs font-sans text-[#111111]">
                      <span className="text-[#5B4FE5] font-bold shrink-0 mt-0.5">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => onNavigate('/crm')}
                className="text-xs font-mono font-bold text-[#5B4FE5] hover:underline inline-flex items-center gap-1.5 cursor-pointer mt-auto"
              >
                <span>Ver especificaciones de CRM</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 4. QUIÉNES SOMOS (Equipo y Trayectoria) */}
      <section id="nosotros" className="py-20 bg-[#FFFFFF] border-b border-neutral-900/10 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Who We Are Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#5B4FE5] uppercase tracking-wider font-semibold">
                <span>// DETRÁS DE SIX DATA SOLUTIONS</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5.5xl text-[#111111] leading-tight">
                Dos científicos de datos con un <span className="text-[#5B4FE5] font-serif italic">propósito claro</span>: soluciones a tu medida.
              </h2>

              <p className="font-sans text-base text-[#6B7280] leading-relaxed">
                Somos dos científicos de datos, cada uno con más de 6 años de experiencia en el ámbito de datos, y con un recorrido amplio en proyectos de integración, análisis y arquitectura.
              </p>

              <p className="font-sans text-base text-[#6B7280] leading-relaxed">
                Nuestra propuesta refleja quiénes somos y lo que ofrecemos: conocimiento profundo en ciencia de datos, ingeniería de datos y arquitectura de datos, con la capacidad de adaptar soluciones a medida para cada organización.
              </p>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('/nosotros')}
                  className="px-5 py-3 bg-[#0A0A0A] hover:bg-[#5B4FE5] text-white font-sans font-bold text-xs uppercase tracking-wider rounded-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>CONOCE MÁS SOBRE NOSOTROS</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Qualifications Cards */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-5 bg-neutral-50 rounded-lg border border-neutral-200 paper-cut">
                <div className="font-mono text-xs text-[#5B4FE5] font-bold mb-1">01 · EXPERIENCIA</div>
                <h4 className="font-sans font-bold text-sm text-[#111111] uppercase mb-1">6+ Años de Recorrido</h4>
                <p className="text-xs text-[#6B7280]">Cada uno ha diseñado e implementado soluciones analíticas estables para grandes volúmenes de información.</p>
              </div>

              <div className="p-5 bg-neutral-50 rounded-lg border border-neutral-200 paper-cut">
                <div className="font-mono text-xs text-[#5B4FE5] font-bold mb-1">02 · CONOCIMIENTO</div>
                <h4 className="font-sans font-bold text-sm text-[#111111] uppercase mb-1">Stack End-to-End</h4>
                <p className="text-xs text-[#6B7280]">Dominio completo de modelos de Machine Learning, pipelines de ingeniería robustos y arquitectura en la nube u on-premise.</p>
              </div>

              <div className="p-5 bg-neutral-50 rounded-lg border border-neutral-200 paper-cut">
                <div className="font-mono text-xs text-[#5B4FE5] font-bold mb-1">03 · VALOR</div>
                <h4 className="font-sans font-bold text-sm text-[#111111] uppercase mb-1">Soluciones a Medida</h4>
                <p className="text-xs text-[#6B7280]">Sin software enlatado. Diseñamos y adaptamos las herramientas open source al presupuesto y realidad de tu empresa.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. TECH INTEGRATIONS GENERAL SUMMARY */}
      <section className="py-12 bg-[#FFFFFF] border-b border-neutral-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xs text-center md:text-left">
              <h4 className="font-serif text-xl font-bold text-[#111111]">Tecnologías Soportadas</h4>
              <p className="text-xs text-[#6B7280] font-sans mt-0.5">Integraciones ágiles e independientes en la nube o localmente.</p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-65 hover:opacity-100 transition-opacity">
              {['AWS Cloud', 'Microsoft Azure', 'Apache Spark / Airflow', 'PostgreSQL'].map((tech, i) => (
                <div key={i} className="text-sm font-mono font-bold text-neutral-400 hover:text-[#111111] transition-colors cursor-default">
                  {tech}
                </div>
              ))}
            </div>

            <button
              onClick={() => onNavigate('/soluciones-datos')}
              className="text-xs font-mono font-bold text-[#5B4FE5] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>Ver integraciones de datos →</span>
            </button>
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION (General) */}
      <section className="py-20 bg-[#FFFFFF] relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-[#5B4FE5] uppercase tracking-wider font-bold mb-2 block">
              // PREGUNTAS FRECUENTES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#111111]">
              Resuelve tus dudas sobre <span className="text-[#5B4FE5] font-serif italic">Six Data</span>
            </h2>
          </div>

          <div className="space-y-3">
            {homeFaqs.map((faq, i) => {
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
                      className={`w-7 h-7 rounded-full border border-neutral-300 shrink-0 flex items-center justify-center transition-all ${
                        isOpen
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
