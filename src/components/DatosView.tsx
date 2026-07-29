import React, { useState } from 'react';
import { DotMatrixCanvas } from './DotMatrixCanvas';
import { ArrowRight, Check, Database, Layers, Network, FileSpreadsheet, BarChart3, Brain, Plus, Minus } from 'lucide-react';

interface DatosViewProps {
  onNavigate: (to: string) => void;
  onOpenContact: () => void;
  onOpenResources: () => void;
  onOpenRoiCalculator: () => void;
}

type DiagnosisType = 'none' | 'crm' | 'warehouse' | 'lake' | 'lakehouse';

export const DatosView: React.FC<DatosViewProps> = ({
  onNavigate,
  onOpenContact,
  onOpenResources,
  onOpenRoiCalculator,
}) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedDiagnosis, setSelectedDiagnosis] = useState<DiagnosisType>('none');
  const [highlightedCol, setHighlightedCol] = useState<'on-premise' | 'nube' | null>(null);

  const handleDiagnosisClick = (type: DiagnosisType) => {
    setSelectedDiagnosis(type);
    if (type === 'warehouse') {
      setHighlightedCol('nube');
    } else if (type === 'lake') {
      setHighlightedCol('nube');
    } else if (type === 'lakehouse') {
      setHighlightedCol('on-premise');
    } else {
      setHighlightedCol(null);
    }
  };

  const stats = [
    {
      num: '100%',
      label: 'Propuesta Independiente',
      desc: 'Libre de ataduras a licencias oficiales costosas y vendor lock-in.',
      tag: '01 · Enfoque Libre',
      meta: 'Data Architecture · 100% Verificado'
    },
    {
      num: '-80%',
      label: 'Consolidación de Datos',
      desc: 'Pipelines automatizados reemplazan la descarga y pegado manual de archivos.',
      tag: '02 · Eficiencia',
      meta: 'Data Architecture · 100% Verificado'
    },
    {
      num: '10x',
      label: 'Trazabilidad y Linaje',
      desc: 'Visibilidad completa del flujo de datos end-to-end para auditorías.',
      tag: '03 · Control',
      meta: 'Data Architecture · 100% Verificado'
    }
  ];

  const steps = [
    {
      num: '01',
      title: 'Entendemos tu negocio, no solo tus datos',
      desc: 'Antes de hablar de tecnología, conversamos sobre cómo operas hoy: qué decisiones te cuesta tomar, dónde se pierde tiempo o información, y qué te frena para crecer. De esa conversación sale el plan, no al revés.'
    },
    {
      num: '02',
      title: 'Ordenamos y conectamos todo en un solo lugar',
      desc: 'Integramos tus fuentes actuales (por dispersas o desordenadas que estén) y las llevamos a una base sólida y confiable, en la nube o en tus propios servidores. Una sola versión de la verdad, sin duplicados ni hojas de cálculo perdidas.'
    },
    {
      num: '03',
      title: 'Te mostramos lo que importa, no todo lo que existe',
      desc: 'Convertimos ese orden en reportes y tableros simples de leer, pensados para cada rol de tu equipo — sin tecnicismos, con los números que realmente ayudan a decidir. Si prefieres un visor personalizado, lo bautizamos bajo tu marca como Six Lens.'
    },
    {
      num: '04',
      title: 'Te acompañamos mientras tu negocio crece',
      desc: 'A medida que tu empresa cambia, tus preguntas también. Seguimos ahí para que la información se mantenga confiable, actualizada y a la altura de esas nuevas preguntas.'
    }
  ];

  const services = [
    {
      id: 'arquitectura',
      title: 'Arquitectura de Datos',
      desc: 'Diseño e implementación de Data Warehouse, Data Lake y Data Lakehouse, sobre AWS, Azure o Apache on-premise, adaptados según el diagnóstico inicial de tu volumen de información.',
      icon: <Network className="w-5 h-5 text-[#5B4FE5]" />,
      features: ['Modelos elásticos a medida', 'Separación de cómputo y storage', 'Alineado al diagnóstico']
    },
    {
      id: 'ciencia',
      title: 'Ciencia de Datos',
      desc: 'Machine Learning y técnicas avanzadas de análisis matemático para crear modelos predictivos y automatizaciones inteligentes sobre la base de tus datos previamente limpios y ordenados.',
      icon: <Brain className="w-5 h-5 text-[#5B4FE5]" />,
      features: ['Modelos de proyección', 'Clasificación de clientes', 'Algoritmos predictivos']
    },
    {
      id: 'ingenieria',
      title: 'Ingeniería de Datos',
      desc: 'Procesos ETL/ELT robustos y construcción de pipelines automatizados que integran, estructuran y mantienen actualizadas tus diversas fuentes de información sin intervención manual.',
      icon: <Database className="w-5 h-5 text-[#5B4FE5]" />,
      features: ['Ingesta automatizada', 'Limpieza y calidad del dato', 'Orquestación de flujos']
    },
    {
      id: 'analisis',
      title: 'Análisis de Datos',
      desc: 'Business Intelligence, reportes dinámicos y tableros interactivos adaptados al lenguaje real del negocio, con los indicadores clave que cada área de tu equipo requiere visualizar.',
      icon: <BarChart3 className="w-5 h-5 text-[#5B4FE5]" />,
      features: ['Dashboards directos e interactivos', 'KPIs comerciales limpios', 'Diseño sin tecnicismos']
    }
  ];

  const comparison = [
    {
      criterion: 'Costos',
      onPremise: 'Inversión ya realizada en infraestructura (CAPEX amortizado), sin costos de licencia adicionales.',
      cloud: 'Modelo de pago por uso (OPEX), sin inversión inicial en hardware.'
    },
    {
      criterion: 'Escalabilidad',
      onPremise: 'Escalable, dentro de la capacidad física instalada.',
      cloud: 'Elástica, escala bajo demanda sin límite práctico.'
    },
    {
      criterion: 'Control de datos',
      onPremise: 'Control total sobre la infraestructura y ubicación del dato.',
      cloud: 'Control gestionado con cumplimiento y cifrado del proveedor cloud.'
    },
    {
      criterion: 'Tiempo de implementación',
      onPremise: 'Aprovecha servidores ya disponibles; configuración a medida.',
      cloud: 'Servicios administrados listos para usar, despliegue más rápido.'
    },
    {
      criterion: 'Mantenimiento',
      onPremise: 'A cargo del equipo interno, con control total del entorno.',
      cloud: 'Compartido/gestionado por el proveedor cloud.'
    },
    {
      criterion: 'Te conviene si...',
      onPremise: 'Ya invertiste en hardware propio o tienes regulaciones estrictas de residencia de datos.',
      cloud: 'Aún no invertiste en infraestructura y priorizas rapidez de despliegue o crecimiento variable.'
    }
  ];

  const faqs = [
    {
      question: '¿Qué diferencia una arquitectura de medallones de un Data Warehouse tradicional?',
      answer: 'Un Data Warehouse tradicional es rígido, costoso de escalar y requiere transformar los datos antes de guardarlos (schema-on-write). La arquitectura de medallones organiza los datos de forma progresiva en capas (Bronze: datos crudos, Silver: filtrados y limpios, Gold: agregados para analítica). Utiliza formatos de archivos abiertos altamente eficientes (como Apache Iceberg o Delta Lake), lo que permite separar el almacenamiento barato del cómputo que consultas, reduciendo costos de licencia y hardware.'
    },
    {
      question: '¿Puedo combinar componentes on-premise (Apache) con servicios cloud (AWS/Azure)?',
      answer: 'Sí. Diseñamos soluciones híbridas independientes. Por ejemplo, puedes procesar datos localmente con Apache Spark y orquestar con Airflow, pero almacenar los resultados históricos en nubes elásticas de bajo costo como AWS S3 o Azure Storage. Esto te permite tener soberanía sobre tus operaciones físicas diarias y resiliencia en la nube.'
    },
    {
      question: '¿Qué gobernanza de datos aplican en los Data Lakehouses?',
      answer: 'Aplicamos marcos de gobernanza independientes para control de accesos a nivel de filas o columnas, catalogado automático con diccionarios de datos, y enmascaramiento automático de información sensible (PII). Todo esto se implementa en pipelines automatizados de manera transparente.'
    },
    {
      question: '¿Ofrecen soporte y optimización para los pipelines en producción?',
      answer: 'Sí. Acompañamos el soporte técnico post-implementación de tus flujos e implementamos auditorías de optimización para reducir facturación cloud redundante y prevenir interrupciones en tus dashboards de análisis de negocio.'
    }
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
                  Infraestructura & Ingeniería de Datos
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6.5xl text-[#111111] leading-tight tracking-tight">
                Del dato disperso a la <span className="text-[#5B4FE5] italic font-serif">decisión</span> que tu negocio entiende.
              </h1>

              <p className="font-sans text-base text-[#6B7280] leading-relaxed">
                Integramos, migramos, modelamos, almacenamos y explotamos tu información sobre AWS, Azure o Apache on-premise — libre de licencias y sin vendor lock-in.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenContact}
                  className="px-6 py-3.5 bg-[#0A0A0A] hover:bg-[#5B4FE5] text-white font-sans font-bold text-xs uppercase tracking-wider rounded-md transition-all duration-200 shadow-md flex items-center gap-2 cursor-pointer group"
                >
                  <span>CONVERSEMOS</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={onOpenResources}
                  className="px-6 py-3.5 bg-transparent hover:bg-neutral-100 border border-neutral-900 text-[#111111] font-sans font-bold text-xs uppercase tracking-wider rounded-md transition-colors cursor-pointer"
                >
                  VER BLUEPRINTS DE ARQUITECTURA
                </button>
              </div>
            </div>

            {/* RIGHT: ILLUSTRATION */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 bg-neutral-50/80 rounded-xl border border-neutral-200/80 relative paper-cut-lg paper-cut-fold group transition-all duration-300 hover:border-[#5B4FE5]/40">
              <div className="absolute top-3 left-3 text-[10px] font-mono text-[#6B7280] uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FE5]"></span>
                DATA PIPELINE SCHEMATIC
              </div>

              <div className="py-6 flex items-center justify-center my-2">
                <DotMatrixCanvas
                  shape="lakehouse"
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
                <span className="font-semibold text-[#5B4FE5]">SIX DATA STACK 3.0</span>
                <span className="text-[#6B7280]">Open Cloud Storage</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. DIAGNÓSTICO: ¿QUÉ NECESITA TU NEGOCIO HOY? */}
      <section className="py-16 bg-neutral-50/70 border-b border-neutral-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono text-[#5B4FE5] uppercase tracking-wider font-bold mb-1 block">
              // DIAGNÓSTICO INTERACTIVO
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#111111] font-bold">
              ¿Qué necesita tu negocio hoy?
            </h2>
            <p className="font-sans text-xs text-[#6B7280] mt-1">
              Selecciona la situación actual de tus datos para identificar el camino y modelo de almacenamiento recomendado:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-8">

            {/* OPTION 1 */}
            <div
              onClick={() => handleDiagnosisClick('crm')}
              className={`p-5 rounded-lg border cursor-pointer transition-all duration-200 flex flex-col justify-between ${selectedDiagnosis === 'crm'
                  ? 'border-[#5B4FE5] bg-[#5B4FE5]/5 shadow-xs'
                  : 'border-neutral-200 bg-white hover:border-neutral-400'
                }`}
            >
              <div>
                <FileSpreadsheet className={`w-6 h-6 mb-3 ${selectedDiagnosis === 'crm' ? 'text-[#5B4FE5]' : 'text-neutral-400'}`} />
                <h4 className="font-sans font-bold text-xs text-[#111111] uppercase tracking-wider mb-2">
                  ¿No tienes base de datos?
                </h4>
                <p className="text-[11px] text-[#6B7280] leading-relaxed">
                  Usas principalmente hojas de cálculo locales de Excel para registrar clientes y ventas.
                </p>
              </div>
              <span className="text-[10px] font-mono text-[#5B4FE5] font-bold mt-4 block">Seleccionar →</span>
            </div>

            {/* OPTION 2 */}
            <div
              onClick={() => handleDiagnosisClick('warehouse')}
              className={`p-5 rounded-lg border cursor-pointer transition-all duration-200 flex flex-col justify-between ${selectedDiagnosis === 'warehouse'
                  ? 'border-[#5B4FE5] bg-[#5B4FE5]/5 shadow-xs'
                  : 'border-neutral-200 bg-white hover:border-neutral-400'
                }`}
            >
              <div>
                <Database className={`w-6 h-6 mb-3 ${selectedDiagnosis === 'warehouse' ? 'text-[#5B4FE5]' : 'text-neutral-400'}`} />
                <h4 className="font-sans font-bold text-xs text-[#111111] uppercase tracking-wider mb-2">
                  ¿Bases desordenadas?
                </h4>
                <p className="text-[11px] text-[#6B7280] leading-relaxed">
                  Tienes datos en un volumen pequeño-mediano, pero están duplicados e inconexos.
                </p>
              </div>
              <span className="text-[10px] font-mono text-[#5B4FE5] font-bold mt-4 block">Seleccionar →</span>
            </div>

            {/* OPTION 3 */}
            <div
              onClick={() => handleDiagnosisClick('lake')}
              className={`p-5 rounded-lg border cursor-pointer transition-all duration-200 flex flex-col justify-between ${selectedDiagnosis === 'lake'
                  ? 'border-[#5B4FE5] bg-[#5B4FE5]/5 shadow-xs'
                  : 'border-neutral-200 bg-white hover:border-neutral-400'
                }`}
            >
              <div>
                <Layers className={`w-6 h-6 mb-3 ${selectedDiagnosis === 'lake' ? 'text-[#5B4FE5]' : 'text-neutral-400'}`} />
                <h4 className="font-sans font-bold text-xs text-[#111111] uppercase tracking-wider mb-2">
                  ¿Volumen y no estructurados?
                </h4>
                <p className="text-[11px] text-[#6B7280] leading-relaxed">
                  Datos estructurados pero necesitas integrar múltiples fuentes raw variadas en gran escala.
                </p>
              </div>
              <span className="text-[10px] font-mono text-[#5B4FE5] font-bold mt-4 block">Seleccionar →</span>
            </div>

            {/* OPTION 4 */}
            <div
              onClick={() => handleDiagnosisClick('lakehouse')}
              className={`p-5 rounded-lg border cursor-pointer transition-all duration-200 flex flex-col justify-between ${selectedDiagnosis === 'lakehouse'
                  ? 'border-[#5B4FE5] bg-[#5B4FE5]/5 shadow-xs'
                  : 'border-neutral-200 bg-white hover:border-neutral-400'
                }`}
            >
              <div>
                <Network className={`w-6 h-6 mb-3 ${selectedDiagnosis === 'lakehouse' ? 'text-[#5B4FE5]' : 'text-neutral-400'}`} />
                <h4 className="font-sans font-bold text-xs text-[#111111] uppercase tracking-wider mb-2">
                  ¿Gobernanza + Volumen?
                </h4>
                <p className="text-[11px] text-[#6B7280] leading-relaxed">
                  Necesitas la flexibilidad de un gran volumen combinada con control de transacciones SQL.
                </p>
              </div>
              <span className="text-[10px] font-mono text-[#5B4FE5] font-bold mt-4 block">Seleccionar →</span>
            </div>

          </div>

          {/* DIAGNOSIS RESPONSE BLOCK */}
          {selectedDiagnosis !== 'none' && (
            <div className="max-w-3xl mx-auto p-6 bg-white border border-neutral-300 rounded-lg animate-in fade-in slide-in-from-top-1 duration-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h5 className="font-sans font-bold text-xs text-[#5B4FE5] uppercase tracking-wider mb-1">
                  RECOMENDACIÓN TÉCNICA SIX DATA
                </h5>
                <p className="font-sans text-xs text-[#111111] leading-relaxed max-w-xl">
                  {selectedDiagnosis === 'crm' && (
                    <><strong>Te conviene empezar por un CRM.</strong> Si tu equipo comercial sigue trabajando con planillas locales y correos sueltos, el primer paso es organizar tus procesos en un CRM centralizado en la nube para obtener trazabilidad inmediata.</>
                  )}
                  {selectedDiagnosis === 'warehouse' && (
                    <><strong>Te conviene un Data Warehouse.</strong> Ideal para datos estructurados de volumen pequeño o mediano. Recomendamos centralizar en un almacén de datos SQL listo para conectar a tableros de visualización de BI.</>
                  )}
                  {selectedDiagnosis === 'lake' && (
                    <><strong>Te conviene un Data Lake.</strong> Si tienes múltiples fuentes crudas (APIs, logs, imágenes, bases operacionales) en gran volumen, necesitas un repositorio elástico en la nube para ingestar sin fricciones.</>
                  )}
                  {selectedDiagnosis === 'lakehouse' && (
                    <><strong>Te conviene un Data Lakehouse.</strong> Combina el bajo costo y escala de un Data Lake con las transacciones ACID y velocidad SQL de un Data Warehouse usando capas de medallones.</>
                  )}
                </p>
              </div>

              {selectedDiagnosis === 'crm' ? (
                <button
                  onClick={() => onNavigate('/crm')}
                  className="px-4 py-2.5 bg-[#5B4FE5] hover:bg-[#4A3FD2] text-white text-xs font-sans font-bold uppercase tracking-wider rounded-md transition-colors whitespace-nowrap cursor-pointer"
                >
                  Explorar CRM →
                </button>
              ) : (
                <button
                  onClick={() => {
                    if (selectedDiagnosis === 'warehouse') scrollToSection('arquitectura');
                    else if (selectedDiagnosis === 'lake') scrollToSection('ingenieria');
                    else scrollToSection('arquitectura');
                    scrollToSection('comparativa');
                  }}
                  className="px-4 py-2.5 bg-[#0A0A0A] hover:bg-[#5B4FE5] text-white text-xs font-sans font-bold uppercase tracking-wider rounded-md transition-colors whitespace-nowrap cursor-pointer"
                >
                  Ver Comparativa ↓
                </button>
              )}
            </div>
          )}

        </div>
      </section>

      {/* 3. QUIÉNES SOMOS & PROPUESTA TÉCNICA (Datos) */}
      <section className="py-20 bg-[#FFFFFF] border-b border-neutral-900/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#5B4FE5] uppercase tracking-wider font-semibold">
                <span>// PROPUESTA TÉCNICA</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111111] leading-snug">
                Soluciones en la nube y on-premise, <span className="text-[#5B4FE5] font-serif italic">libres de ataduras</span> propietarias.
              </h2>

              <p className="font-sans text-base text-[#6B7280] leading-relaxed">
                Nuestra propuesta técnica en Soluciones de Datos se fundamenta en la rentabilidad y la flexibilidad. Diseñamos modelos elásticos e independientes para que no tengas dependencias obligatorias de licencias corporativas excesivas.
              </p>

              <p className="font-sans text-base text-[#6B7280] leading-relaxed">
                Modelamos bases de datos relacionales estables y automatizamos flujos de ETL para simplificar la toma de decisiones basada en reportes limpios, auditados y consistentes.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 gap-4">
                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-white border border-neutral-900/15 rounded-lg paper-cut hover:border-[#5B4FE5] transition-all duration-200 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono text-[#5B4FE5] uppercase tracking-wider font-bold px-2 py-0.5 bg-[#5B4FE5]/10 rounded">
                          {stat.tag}
                        </span>
                        <span className="text-xs font-mono text-[#6B7280]">0{idx + 1}</span>
                      </div>

                      <div className="flex items-baseline gap-2">
                        <div className="font-serif text-4.5xl font-bold text-[#5B4FE5] tracking-tight group-hover:scale-105 transition-transform origin-left">
                          {stat.num}
                        </div>
                        <h3 className="font-sans font-bold text-sm text-[#111111] uppercase tracking-wide">
                          {stat.label}
                        </h3>
                      </div>

                      <p className="font-sans text-xs text-[#6B7280] leading-normal mt-2">
                        {stat.desc}
                      </p>
                    </div>

                    <div className="mt-3 pt-3 border-t border-neutral-100 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                      <span>Data Architecture</span>
                      <span>{stat.meta}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CÓMO TRABAJAMOS */}
      <section className="py-20 bg-neutral-50/50 border-b border-neutral-900/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono text-[#5B4FE5] uppercase tracking-wider font-bold mb-1 block">
              // NUESTRA METODOLOGÍA
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#111111] font-bold">
              Cómo Trabajamos
            </h2>
            <p className="font-sans text-xs text-[#6B7280] mt-1">
              Un servicio end-to-end de datos enfocado en el lenguaje de tu negocio.
            </p>
          </div>

          <div className="relative border-l border-neutral-200/80 pl-6 md:pl-8 space-y-12 max-w-3xl mx-auto">
            {steps.map((step, idx) => (
              <div key={idx} className="relative animate-in fade-in duration-300">
                {/* Large vertical line number pointer */}
                <div className="absolute -left-[35px] md:-left-[43px] top-0 w-8 h-8 rounded-full bg-white border border-[#5B4FE5] text-[#5B4FE5] font-mono text-xs font-bold flex items-center justify-center shadow-xs">
                  {step.num}
                </div>

                <div>
                  <h3 className="font-sans font-bold text-base text-[#111111] mb-1">
                    {step.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. CAPACIDADES OPERATIVAS (Servicios grid) */}
      <section id="soluciones" className="py-20 bg-[#FFFFFF] border-b border-neutral-900/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-neutral-200">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#5B4FE5] uppercase tracking-wider font-semibold mb-2">
                <span>// CAPACIDADES OPERATIVAS</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111111]">
                Nuestros Servicios de <span className="text-[#5B4FE5] font-serif italic">Datos</span>
              </h2>
            </div>
            <p className="mt-4 md:mt-0 font-sans text-xs text-[#6B7280] max-w-md leading-relaxed">
              Soluciones estructuradas diseñadas para organizar, consolidar y optimizar el almacenamiento analítico de tu organización.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((service, idx) => (
              <div
                key={idx}
                id={service.id}
                className="bg-white border border-neutral-900/15 p-6 rounded-lg paper-cut hover:border-[#5B4FE5] transition-all duration-300 group flex flex-col justify-between h-full relative"
              >
                <div>
                  <div className="flex items-start gap-2.5 mb-4">
                    <div className="p-2 bg-[#5B4FE5]/5 rounded border border-[#5B4FE5]/25">
                      {service.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono text-[#5B4FE5] uppercase font-bold tracking-wider">
                        CATEGORÍA 0{idx + 1}
                      </span>
                      <h3 className="font-sans font-bold text-base text-[#111111] group-hover:text-[#5B4FE5] transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <div className="dotted-line w-full py-1 my-2" />
                  <p className="font-sans text-xs text-[#6B7280] leading-relaxed mb-4 min-h-[48px]">
                    {service.desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-4">
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[11px] text-[#111111]">
                        <Check className="w-3.5 h-3.5 text-[#5B4FE5] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#111111] font-semibold group-hover:text-[#5B4FE5]">
                    Especificaciones Técnicas →
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

      {/* 6. INTEGRACIONES TECNOLÓGICAS (Por entorno) */}
      <section className="py-20 bg-neutral-50/50 border-b border-neutral-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono text-[#5B4FE5] uppercase tracking-wider font-bold mb-2 block">
              // ECOCOMPATIBILIDAD
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#111111]">
              Integraciones Tecnológicas
            </h2>
            <p className="font-sans text-xs text-[#6B7280] mt-1">
              Organizadas según tu entorno de infraestructura y herramientas transversales de Business Intelligence:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

            {/* AWS */}
            <div className="p-6 bg-white border border-neutral-200 rounded-lg flex flex-col justify-between hover:border-[#5B4FE5] transition-colors paper-cut">
              <div>
                <div className="text-xs font-mono font-bold text-[#5B4FE5] uppercase tracking-widest mb-3 border-b border-neutral-100 pb-2">
                  AWS Cloud
                </div>
                <ul className="space-y-2 text-xs font-sans text-[#111111]">
                  {['Amazon QuickSight', 'Amazon QuickSuite', 'Amazon Redshift', 'Amazon Athena', 'AWS Glue'].map((tech, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Azure */}
            <div className="p-6 bg-white border border-neutral-200 rounded-lg flex flex-col justify-between hover:border-[#5B4FE5] transition-colors paper-cut">
              <div>
                <div className="text-xs font-mono font-bold text-[#5B4FE5] uppercase tracking-widest mb-3 border-b border-neutral-100 pb-2">
                  Microsoft Azure
                </div>
                <ul className="space-y-2 text-xs font-sans text-[#111111]">
                  {['Azure Synapse Analytics', 'Azure Data Lake Storage', 'Azure Databricks', 'Microsoft Purview', 'Azure Data Factory'].map((tech, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Apache */}
            <div className="p-6 bg-white border border-neutral-200 rounded-lg flex flex-col justify-between hover:border-[#5B4FE5] transition-colors paper-cut">
              <div>
                <div className="text-xs font-mono font-bold text-[#5B4FE5] uppercase tracking-widest mb-3 border-b border-neutral-100 pb-2">
                  Apache On-Premise
                </div>
                <ul className="space-y-2 text-xs font-sans text-[#111111]">
                  {['Apache Spark', 'Apache Kafka', 'Apache Airflow', 'Apache Hadoop', 'Apache NiFi', 'Delta Lake'].map((tech, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Transversal BI */}
            <div className="p-6 bg-white border border-neutral-200 rounded-lg flex flex-col justify-between hover:border-[#5B4FE5] transition-colors paper-cut">
              <div>
                <div className="text-xs font-mono font-bold text-[#5B4FE5] uppercase tracking-widest mb-3 border-b border-neutral-100 pb-2">
                  Visualización & BI
                </div>
                <ul className="space-y-2 text-xs font-sans text-[#111111]">
                  {['Power BI', 'Tableau', 'Metabase'].map((tech, i) => (
                    <li key={i} className="flex items-center gap-1.5 font-semibold text-[#5B4FE5]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FE5]" />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. COMPARATIVA: ON-PREMISE VS NUBE */}
      <section id="comparativa" className="py-20 bg-[#FFFFFF] border-b border-neutral-900/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono text-[#5B4FE5] uppercase tracking-wider font-bold mb-2 block">
              // COMPARATIVO DE DEPLOYMENT
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111111]">
              On-Premise vs. Nube
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#111111] mt-3 font-semibold max-w-xl mx-auto leading-relaxed italic">
              "No se trata de cuál es mejor, sino de cuál te conviene según tu punto de partida: si ya invertiste en infraestructura propia, on-premise te rinde; si no, la nube te conviene."
            </p>
          </div>

          <div className="overflow-x-auto border border-neutral-900/15 rounded-xl bg-white shadow-xs max-w-5xl mx-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-50/80">
                  <th className="py-4 px-6 text-xs font-mono text-[#6B7280] uppercase tracking-wider w-1/4">
                    Criterio
                  </th>
                  <th className={`py-4 px-6 text-xs font-mono uppercase tracking-wider w-3/8 border-l border-neutral-200 ${highlightedCol === 'on-premise'
                      ? 'text-[#5B4FE5] font-bold border-t-2 border-t-[#5B4FE5] bg-[#5B4FE5]/5'
                      : 'text-[#111111]'
                    }`}>
                    On-Premise (Apache, libre licencia)
                  </th>
                  <th className={`py-4 px-6 text-xs font-mono uppercase tracking-wider w-3/8 border-l border-neutral-200 ${highlightedCol === 'nube'
                      ? 'text-[#5B4FE5] font-bold border-t-2 border-t-[#5B4FE5] bg-[#5B4FE5]/5'
                      : 'text-[#111111]'
                    }`}>
                    Nube Pública (AWS / Azure)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200/80 text-xs sm:text-sm font-sans">
                {comparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-neutral-50/50 transition-colors">
                    <td className="py-5 px-6 font-bold text-[#111111]">{row.criterion}</td>

                    <td className={`py-5 px-6 border-l border-neutral-200 text-[#6B7280] leading-relaxed ${highlightedCol === 'on-premise' ? 'bg-[#5B4FE5]/2 font-medium text-[#111111]' : ''
                      }`}>
                      {row.onPremise}
                    </td>

                    <td className={`py-5 px-6 border-l border-neutral-200 leading-relaxed ${highlightedCol === 'nube' ? 'bg-[#5B4FE5]/2 font-medium text-[#111111]' : 'text-[#6B7280]'
                      }`}>
                      {row.cloud}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* 8. FAQ (Datos) */}
      <section className="py-20 bg-[#FFFFFF] relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <span className="text-xs font-mono text-[#5B4FE5] uppercase tracking-wider font-bold mb-2 block">
              // PREGUNTAS TÉCNICAS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#111111]">
              Resuelve tus dudas sobre <span className="text-[#5B4FE5] font-serif italic">Soluciones de Datos</span>
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => {
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
