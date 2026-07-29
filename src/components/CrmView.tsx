import React, { useState } from 'react';
import { DotMatrixCanvas } from './DotMatrixCanvas';
import { ArrowRight, Check, X, ChevronLeft, ChevronRight, MessageSquareQuote, Plus, Minus, Calculator, Server, Cloud, Sliders, Settings } from 'lucide-react';

interface CrmViewProps {
  onNavigate: (to: string) => void;
  onOpenContact: () => void;
  onOpenResources: () => void;
  onOpenRoiCalculator: () => void;
}

export const CrmView: React.FC<CrmViewProps> = ({
  onNavigate,
  onOpenContact,
  onOpenResources,
  onOpenRoiCalculator,
}) => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'crm' | 'dashboards'>('crm');

  const testimonials = [
    {
      quote: "Migramos todo nuestro historial de ventas y clientes disperso en planillas de Excel a un CRM moderno en la nube. Ahora el equipo comercial tiene trazabilidad y automatizaciones de seguimiento, incrementando los cierres en un 25%.",
      clientName: "Ing. Fernando Valdivia",
      clientRole: "Director de Operaciones",
      company: "Distribuidora del Sur (Logística & Distribución)",
      metrics: "+25% en conversión de ventas & 0 planillas perdidas.",
      companyCategory: "Logística y Distribución",
      dotMatrixShape: "hourglass"
    },
    {
      quote: "Simplificamos el control de contratos y el seguimiento comercial. Con Twenty instalado en nuestro servidor local, no dependemos de cobros mensuales externos y la información de la empresa nunca sale de nuestras oficinas.",
      clientName: "Carlos M. Sotomayor",
      clientRole: "Socio Principal",
      company: "Logística Global Co.",
      metrics: "Ahorro de $12K anuales en licencias & Control 100% local.",
      companyCategory: "Servicios Corporativos",
      dotMatrixShape: "data-flow"
    },
    {
      quote: "La flexibilidad de Twenty CRM en nuestra propia nube de AWS nos dio el 100% de propiedad sobre el historial de nuestros prospectos. Los tableros comerciales se alimentan de forma instantánea y automática.",
      clientName: "Dra. María Elena Ramos",
      clientRole: "Gerente de Growth",
      company: "FinTech Innova",
      metrics: "+60% productividad del equipo comercial & Reportes automáticos.",
      companyCategory: "Tecnología Financiera",
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

  const deploymentComparison = [
    {
      criterion: 'Dónde viven tus datos',
      onPremise: 'En tu oficina, en tu propia infraestructura física.',
      cloud: 'En tu propia cuenta de AWS o Azure — nunca en servidores de Six ni de terceros.'
    },
    {
      criterion: 'Mensualidades',
      onPremise: 'Ninguna.',
      cloud: 'Ninguna licencia; solo el costo de consumo directo de tu infraestructura cloud.'
    },
    {
      criterion: 'Acceso remoto',
      onPremise: 'Limitado a tu red local (o vía conexión segura VPN).',
      cloud: 'Disponible de forma segura desde cualquier lugar bajo tu propia cuenta.'
    },
    {
      criterion: 'Ideal para',
      onPremise: 'Negocios con oficinas estables y fijas, sin requerimientos de acceso externo constante.',
      cloud: 'Equipos comerciales distribuidos o que necesitan consultar información desde varios lugares.'
    }
  ];

  const services = [
    {
      title: 'Implementación de Twenty CRM',
      desc: 'Instalación y configuración del CRM open source Twenty en tu propio servidor físico local o en tu propia cuenta de nube (AWS/Azure).',
      icon: <Server className="w-5 h-5 text-[#5B4FE5]" />,
      features: ['Instalación limpia en tu infraestructura', 'Propiedad absoluta del código', 'Cero dependencias externas']
    },
    {
      title: 'Integración & Migración de Datos',
      desc: 'Llevamos todos tus contactos, notas, tareas pendientes y ventas dispersas (Excel, WhatsApp, notas o cuadernos) hacia el nuevo CRM centralizado.',
      icon: <Settings className="w-5 h-5 text-[#5B4FE5]" />,
      features: ['Limpieza de duplicados', 'Importación de historiales', 'Mapeo de campos a medida']
    },
    {
      title: 'Personalización a tu Negocio',
      desc: 'Adaptamos campos personalizados, fases del embudo de ventas (pipeline), disparadores (triggers) de correo/WhatsApp y registros de llamadas a tu proceso.',
      icon: <Sliders className="w-5 h-5 text-[#5B4FE5]" />,
      features: ['Alertas automáticas de leads', 'WhatsApp & Email Connect', 'Configuración de pipelines']
    },
    {
      title: 'Análisis y Ciencia de Datos',
      desc: 'Conectamos dashboards ejecutivos dinámicos en vivo sobre tu base de datos CRM, calculando el rendimiento del equipo y proyecciones comerciales.',
      icon: <Calculator className="w-5 h-5 text-[#5B4FE5]" />,
      features: ['Power BI & Looker Studio', 'Métricas de comisiones', 'Pronósticos comerciales']
    }
  ];

  const comparison = [
    {
      feature: 'Seguimiento de Leads (Pipeline)',
      onPremise: {
        title: 'Excel / Hojas de Cálculo',
        description: 'Registro manual e inconexo; pérdida de oportunidades por falta de alertas o historial disperso.',
        isAdvantage: false
      },
      cloud: {
        title: 'CRM Twenty a tu Medida',
        description: 'Pipeline visual en tiempo real con alertas automáticas de seguimiento de leads.',
        isAdvantage: true
      }
    },
    {
      feature: 'Consolidación del Dato',
      onPremise: {
        title: 'Silos de Archivos y Notas',
        description: 'Archivos y notas duplicadas o perdidas ("ventas_final_v2.xlsx", chats de WhatsApp sueltos).',
        isAdvantage: false
      },
      cloud: {
        title: 'CRM Twenty a tu Medida',
        description: 'Base de datos única centralizada, alojada en tu propio servidor o tu propia nube.',
        isAdvantage: true
      }
    },
    {
      feature: 'Reportes & Análisis',
      onPremise: {
        title: 'Reportes Manuales',
        description: 'Gráficos estáticos construidos a mano cada semana con alto margen de error.',
        isAdvantage: false
      },
      cloud: {
        title: 'CRM Twenty a tu Medida',
        description: 'Dashboards automatizados conectados en vivo a tu base de datos sin procesos manuales.',
        isAdvantage: true
      }
    },
    {
      feature: 'Integración & Conexiones',
      onPremise: {
        title: 'Aislado',
        description: 'Datos aislados, sin conexión con campañas digitales ni correos de contacto.',
        isAdvantage: false
      },
      cloud: {
        title: 'CRM Twenty a tu Medida',
        description: 'Ecosistema conectado vía APIs con tu web, WhatsApp y automatizaciones (Zapier).',
        isAdvantage: true
      }
    },
    {
      feature: 'Propiedad de los datos',
      onPremise: {
        title: 'Vulnerable',
        description: 'Información dispersa en dispositivos personales y archivos locales desprotegidos.',
        isAdvantage: false
      },
      cloud: {
        title: 'CRM Twenty a tu Medida',
        description: 'Centralizados en infraestructura que es 100% tuya, no de un proveedor externo de software.',
        isAdvantage: true
      }
    },
    {
      feature: 'Escalabilidad',
      onPremise: {
        title: 'Limitada',
        description: 'Límite de filas en hojas de cálculo y lentitud severa a medida que crecen los registros.',
        isAdvantage: false
      },
      cloud: {
        title: 'CRM Twenty a tu Medida',
        description: 'Almacenamiento elástico e incremental que escala sin perder rendimiento.',
        isAdvantage: true
      }
    }
  ];

  const faqs = [
    {
      question: '¿Qué pasa si no tengo ni Excel, solo contactos en WhatsApp o en cuadernos?',
      answer: 'Es una situación muy común en empresas en crecimiento. Nos encargamos de recolectar esa información dispersa, estructurarla en una planilla limpia inicial y migrarla de forma ordenada al CRM. A partir de ese momento, tu equipo comercial abandona el registro manual y empieza a centralizar todo en el pipeline.'
    },
    {
      question: '¿Mis datos quedan en servidores de Six o en los míos?',
      answer: 'Quedan 100% en tu poder. Instalamos Twenty CRM en tu propio servidor local físico (on-premise) o en tu propia cuenta de AWS o Azure. Nosotros no tenemos acceso a tu base de datos ni cobramos mensualidades por almacenar tu información.'
    },
    {
      question: '¿Puedo tener el CRM en la nube sin depender de un tercero?',
      answer: 'Sí, totalmente. Al configurar Twenty CRM en tu propia cuenta de nube (por ejemplo, AWS o Azure), la plataforma corre bajo tus credenciales. Eres dueño absoluto de la base de datos y de la infraestructura, eliminando el vendor lock-in típico de los CRM comerciales propietarios.'
    },
    {
      question: '¿Ustedes desarrollan el CRM desde cero o parten de una base ya construida?',
      answer: 'No desarrollamos software desde cero para no hacerte perder tiempo ni presupuesto. Partimos de Twenty CRM, una robusta y moderna plataforma de código abierto. Nuestro trabajo consiste en instalarla en tu infraestructura, migrar tus datos actuales y adaptarla a las necesidades exactas de tu proceso de ventas.'
    },
    {
      question: '¿Es costoso implementar y mantener esta arquitectura de CRM?',
      answer: 'No. Al ser software open source, eliminas las licencias mensuales por usuario (que en plataformas tradicionales pueden ser muy costosas a escala). Solo pagas por nuestro servicio único de integración y personalización y, si decides alojarlo en la nube, el costo directo de tu hosting de infraestructura que suele ser mínimo.'
    }
  ];

  return (
    <div className="animate-in fade-in duration-300">
      
      {/* 1. HERO SECTION (Carrusel Testimonial) */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-[#FFFFFF] border-b border-neutral-900/10 overflow-hidden relative">
        <div className="absolute top-12 right-0 w-72 h-72 bg-dot-matrix-sm opacity-20 pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-10 w-48 h-48 bg-dot-matrix-sm opacity-15 pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* LEFT: DOT-MATRIX GRAPHIC */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 bg-neutral-50/80 rounded-xl border border-neutral-200/80 relative paper-cut-lg paper-cut-fold group transition-all duration-300 hover:border-[#5B4FE5]/40">
              <div className="absolute top-3 left-3 text-[10px] font-mono text-[#6B7280] uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FE5]"></span>
                CRM TWENTY ARCHITECTURE
              </div>

              <div className="py-6 flex items-center justify-center my-2">
                <DotMatrixCanvas
                  shape={currentTestimonial.dotMatrixShape === 'hourglass' ? 'hourglass' : currentTestimonial.dotMatrixShape === 'cloud-network' ? 'cloud' : 'data-flow'}
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
                <span className="font-semibold text-[#5B4FE5]">TWENTY OPEN CRM</span>
                <span className="text-[#6B7280]">100% Independent Stack</span>
              </div>
            </div>

            {/* RIGHT: CONTENT (CARRUSEL) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-[#5B4FE5] rounded flex items-center justify-center text-white text-[10px] font-bold">
                  ✓
                </div>
                <span className="font-sans font-semibold text-xs text-[#111111] uppercase tracking-wider">
                  Así hablan nuestros clientes
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6.5xl text-[#111111] leading-tight tracking-tight">
                Organiza tus contactos, notas y tareas en un <span className="text-[#5B4FE5] italic font-serif">CRM que sigue siendo tuyo</span>.
              </h1>

              <p className="font-sans text-base text-[#6B7280] leading-relaxed">
                Implementamos <strong>Twenty</strong>, el CRM de código abierto más moderno, directamente en tu propio servidor o en tu cuenta de nube. Sin mensualidades abusivas y con total propiedad de tus datos comerciales.
              </p>

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
                    {currentTestimonialIndex + 1} / {testimonials.length}
                  </span>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={handlePrevTestimonial}
                      className="w-8 h-8 border border-neutral-300 rounded hover:border-[#111111] hover:bg-neutral-100 flex items-center justify-center transition-colors cursor-pointer"
                      aria-label="Anterior testimonio"
                    >
                      <ChevronLeft className="w-4 h-4 text-[#111111]" />
                    </button>
                    <button
                      onClick={handleNextTestimonial}
                      className="w-8 h-8 border border-neutral-300 rounded hover:border-[#111111] hover:bg-neutral-100 flex items-center justify-center transition-colors cursor-pointer"
                      aria-label="Siguiente testimonio"
                    >
                      <ChevronRight className="w-4 h-4 text-[#111111]" />
                    </button>
                  </div>
                </div>
              </div>

              {/* CTAs */}
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
                  VER CASOS & BLUEPRINTS
                </button>

                <button
                  onClick={onOpenRoiCalculator}
                  className="px-4 py-3.5 text-xs font-mono text-[#5B4FE5] hover:underline flex items-center gap-1 cursor-pointer ml-auto"
                >
                  <span>Calcular ROI CRM ↗</span>
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. QUIÉNES SOMOS & PROPUESTA */}
      <section className="py-20 bg-[#FFFFFF] border-b border-neutral-900/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#5B4FE5] uppercase tracking-wider font-semibold">
                <span>// INTEGRACIÓN Y ADAPTACIÓN</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111111] leading-snug">
                Integramos y adaptamos <span className="text-[#5B4FE5] font-serif italic">Twenty CRM open source</span> a tu medida — sin depender de terceros.
              </h2>

              <p className="font-sans text-base text-[#6B7280] leading-relaxed">
                No desarrollamos un CRM desde cero. Partimos de Twenty, una base ya construida y de código abierto, y nos enfocamos en integrar tus datos comerciales dispersos (Excel, WhatsApp, notas, cuadernos, lo que exista hoy) y en adaptar la herramienta a tu proceso de ventas específico.
              </p>

              <div className="pt-4">
                <button
                  onClick={onOpenContact}
                  className="px-5 py-3 bg-[#0A0A0A] hover:bg-[#5B4FE5] text-white font-sans font-bold text-xs uppercase tracking-wider rounded-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>SOLICITAR EVALUACIÓN DE CRM</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="p-6 bg-white border border-neutral-900/15 rounded-lg paper-cut hover:border-[#5B4FE5] transition-all duration-200 group flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono text-[#5B4FE5] uppercase tracking-wider font-bold px-2 py-0.5 bg-[#5B4FE5]/10 rounded">
                        PROPIEDAD
                      </span>
                      <span className="text-xs font-mono text-[#6B7280]">01</span>
                    </div>
                    <div className="font-serif text-4xl sm:text-5xl font-bold text-[#5B4FE5] mb-2">100%</div>
                    <h3 className="font-sans font-bold text-sm text-[#111111] uppercase tracking-wide mb-1">Control de tus Datos</h3>
                    <p className="font-sans text-xs text-[#6B7280]">Instalado en tu propio servidor o tu propia nube, nunca en la de terceros.</p>
                  </div>
                </div>

                <div className="p-6 bg-white border border-neutral-900/15 rounded-lg paper-cut hover:border-[#5B4FE5] transition-all duration-200 group flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono text-[#5B4FE5] uppercase tracking-wider font-bold px-2 py-0.5 bg-[#5B4FE5]/10 rounded">
                        MIGRACIONES
                      </span>
                      <span className="text-xs font-mono text-[#6B7280]">02</span>
                    </div>
                    <div className="font-serif text-4xl sm:text-5xl font-bold text-[#5B4FE5] mb-2">50+</div>
                    <h3 className="font-sans font-bold text-sm text-[#111111] uppercase tracking-wide mb-1">Procesos Automatizados</h3>
                    <p className="font-sans text-xs text-[#6B7280]">Migraciones exitosas desde datos dispersos hacia tu CRM centralizado.</p>
                  </div>
                </div>

                <div className="p-6 bg-white border border-neutral-900/15 rounded-lg paper-cut hover:border-[#5B4FE5] transition-all duration-200 group flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono text-[#5B4FE5] uppercase tracking-wider font-bold px-2 py-0.5 bg-[#5B4FE5]/10 rounded">
                        REPORTES
                      </span>
                      <span className="text-xs font-mono text-[#6B7280]">03</span>
                    </div>
                    <div className="font-serif text-4xl sm:text-5xl font-bold text-[#5B4FE5] mb-2">-80%</div>
                    <h3 className="font-sans font-bold text-sm text-[#111111] uppercase tracking-wide mb-1">Tiempo en Reportes</h3>
                    <p className="font-sans text-xs text-[#6B7280]">Adiós a la consolidación manual de datos cada viernes por la tarde.</p>
                  </div>
                </div>

                <div className="p-6 bg-white border border-neutral-900/15 rounded-lg paper-cut hover:border-[#5B4FE5] transition-all duration-200 group flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono text-[#5B4FE5] uppercase tracking-wider font-bold px-2 py-0.5 bg-[#5B4FE5]/10 rounded">
                        TRAZABILIDAD
                      </span>
                      <span className="text-xs font-mono text-[#6B7280]">04</span>
                    </div>
                    <div className="font-serif text-4xl sm:text-5xl font-bold text-[#5B4FE5] mb-2">10x</div>
                    <h3 className="font-sans font-bold text-sm text-[#111111] uppercase tracking-wide mb-1">Trazabilidad de Ventas</h3>
                    <p className="font-sans text-xs text-[#6B7280]">Todo el recorrido del cliente y rendimiento comercial en un solo lugar.</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CRM ON-PREMISE VS CRM EN TU PROPIA NUBE */}
      <section className="py-20 bg-neutral-50/50 border-b border-neutral-900/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono text-[#5B4FE5] uppercase tracking-wider font-bold mb-2 block">
              // OPCIONES DE DESPLIEGUE CRM
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#111111]">
              CRM On-Premise vs. CRM en tu propia Nube
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#111111] mt-3 font-semibold max-w-xl mx-auto leading-relaxed italic">
              "No se trata de nube de terceros vs. servidor propio — en ambos casos el CRM es tuyo, corre en tu infraestructura, y no pagas licencia mensual a nadie."
            </p>
          </div>

          <div className="overflow-x-auto border border-neutral-900/15 rounded-xl bg-white shadow-xs max-w-4xl mx-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-50/80">
                  <th className="py-4 px-6 text-xs font-mono text-[#6B7280] uppercase tracking-wider w-1/4">
                    Criterio
                  </th>
                  <th className="py-4 px-6 text-xs font-mono text-[#111111] uppercase tracking-wider w-3/8 border-l border-neutral-200">
                    On-Premise (tu propio servidor físico)
                  </th>
                  <th className="py-4 px-6 text-xs font-mono text-[#5B4FE5] uppercase font-bold tracking-wider w-3/8 border-l border-neutral-200 bg-[#5B4FE5]/5">
                    En tu propia Nube (tu cuenta AWS/Azure)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200/80 text-xs sm:text-sm font-sans">
                {deploymentComparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-neutral-50/50 transition-colors">
                    <td className="py-4 px-6 font-bold text-[#111111]">{row.criterion}</td>
                    <td className="py-4 px-6 border-l border-neutral-200 text-[#6B7280] leading-relaxed">{row.onPremise}</td>
                    <td className="py-4 px-6 border-l border-neutral-200 bg-[#5B4FE5]/2 text-[#111111] leading-relaxed font-medium">{row.cloud}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* 4. CAPACIDADES OPERATIVAS (Servicios CRM) */}
      <section id="soluciones" className="py-20 bg-[#FFFFFF] border-b border-neutral-900/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-neutral-200">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#5B4FE5] uppercase tracking-wider font-semibold mb-2">
                <span>// CAPACIDADES OPERATIVAS DE CRM</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111111]">
                Nuestros Servicios de <span className="text-[#5B4FE5] font-serif italic">CRM & Datos</span>
              </h2>
            </div>
            <p className="mt-4 md:mt-0 font-sans text-xs text-[#6B7280] max-w-md leading-relaxed">
              Módulos de integración y adaptación enfocados en llevar tus ventas al siguiente nivel sin mensualidades de software corporativo propietario.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white border border-neutral-900/15 p-6 rounded-lg paper-cut hover:border-[#5B4FE5] transition-all duration-300 group flex flex-col justify-between h-full relative"
              >
                <div>
                  <div className="flex items-start gap-2.5 mb-4">
                    <div className="p-2 bg-[#5B4FE5]/5 rounded border border-[#5B4FE5]/25">
                      {service.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono text-[#5B4FE5] uppercase font-bold tracking-wider">
                        SERVICIOS CRM 0{idx + 1}
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
                    Ver especificaciones →
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

      {/* 5. INTEGRACIÓN DEL CRM CON LA NUBE (Ecosistema) */}
      <section className="py-20 bg-neutral-50/50 border-b border-neutral-900/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-neutral-200">
            <div>
              <h3 className="font-serif text-3xl text-[#111111]">
                Integración del CRM con la Nube
              </h3>
              <p className="font-sans text-xs text-[#6B7280] mt-1">
                La nube y la ingeniería de datos en tu propia cuenta o servidor para el máximo rendimiento de Twenty CRM.
              </p>
            </div>

            <div className="inline-flex p-1 bg-white border border-neutral-300 rounded-md">
              <button
                onClick={() => setActiveTab('crm')}
                className={`px-4 py-2 rounded text-xs font-mono font-bold uppercase transition-all ${
                  activeTab === 'crm'
                    ? 'bg-[#0A0A0A] text-white shadow-xs'
                    : 'text-[#6B7280] hover:text-[#111111]'
                }`}
              >
                Ecosistema CRM
              </button>
              <button
                onClick={() => setActiveTab('dashboards')}
                className={`px-4 py-2 rounded text-xs font-mono font-bold uppercase transition-all ${
                  activeTab === 'dashboards'
                    ? 'bg-[#5B4FE5] text-white shadow-xs'
                    : 'text-[#6B7280] hover:text-[#111111]'
                }`}
              >
                Ecosistema Dashboards
              </button>
            </div>
          </div>

          {activeTab === 'crm' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-in fade-in duration-200">
              <div className="p-4 bg-white rounded border border-neutral-200">
                <div className="text-[10px] font-mono text-amber-600 font-bold mb-1">CAPTA LEADS</div>
                <div className="font-bold text-sm text-[#111111] mb-1">API de Contactos</div>
                <p className="text-xs text-[#6B7280]">Ingesta automática de prospectos directamente desde formularios web y campañas digitales hacia tu CRM.</p>
              </div>

              <div className="p-4 bg-white rounded border border-neutral-200">
                <div className="text-[10px] font-mono text-amber-600 font-bold mb-1">BASE DE DATOS</div>
                <div className="font-bold text-sm text-[#111111] mb-1">PostgreSQL en tu Infraestructura</div>
                <p className="text-xs text-[#6B7280]">Almacenamiento estructurado y seguro alojado en tu servidor o tu propia nube, con backups automáticos.</p>
              </div>

              <div className="p-4 bg-white rounded border border-neutral-200">
                <div className="text-[10px] font-mono text-amber-600 font-bold mb-1">AUTOMATIZACIÓN</div>
                <div className="font-bold text-sm text-[#111111] mb-1">Triggers & Alertas</div>
                <p className="text-xs text-[#6B7280]">Alertas instantáneas a vendedores por WhatsApp/Email cuando ingresa un lead de alto valor.</p>
              </div>

              <div className="p-4 bg-white rounded border border-neutral-200">
                <div className="text-[10px] font-mono text-amber-600 font-bold mb-1">HISTORIAL COMERCIAL</div>
                <div className="font-bold text-sm text-[#111111] mb-1">Ficha Única de Cliente</div>
                <p className="text-xs text-[#6B7280]">Control unificado de correos electrónicos, llamadas de seguimiento y notas de venta en la ficha del lead.</p>
              </div>

              <div className="p-4 bg-white rounded border border-neutral-200">
                <div className="text-[10px] font-mono text-amber-600 font-bold mb-1">SEGURIDAD</div>
                <div className="font-bold text-sm text-[#111111] mb-1">Accesos Cifrados</div>
                <p className="text-xs text-[#6B7280]">Garantía de confidencialidad y control de roles bajo tu propia y absoluta infraestructura.</p>
              </div>

              <div className="p-4 bg-white rounded border border-neutral-200">
                <div className="text-[10px] font-mono text-amber-600 font-bold mb-1">SINCRONIZACIÓN</div>
                <div className="font-bold text-sm text-[#111111] mb-1">API Sync de Negocios</div>
                <p className="text-xs text-[#6B7280]">Conexión directa de catálogos e inventarios en la nube con las fichas de cotizaciones del CRM.</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-in fade-in duration-200">
              <div className="p-4 bg-white rounded border border-neutral-200">
                <div className="text-[10px] font-mono text-[#5B4FE5] font-bold mb-1">ETL AUTOMÁTICO</div>
                <div className="font-bold text-sm text-[#111111] mb-1">Pipelines de Datos</div>
                <p className="text-xs text-[#6B7280]">Tuberías automáticas que extraen, limpian y transforman los datos comerciales de tu CRM.</p>
              </div>

              <div className="p-4 bg-white rounded border border-neutral-200">
                <div className="text-[10px] font-mono text-[#5B4FE5] font-bold mb-1">KPI COMERCIALES</div>
                <div className="font-bold text-sm text-[#111111] mb-1">Métricas de Negocio</div>
                <p className="text-xs text-[#6B7280]">Cálculo instantáneo de tasas de conversión de vendedores, valor del ticket promedio y comisiones.</p>
              </div>

              <div className="p-4 bg-white rounded border border-neutral-200">
                <div className="text-[10px] font-mono text-[#5B4FE5] font-bold mb-1">DASHBOARD EN VIVO</div>
                <div className="font-bold text-sm text-[#111111] mb-1">Looker Studio / Power BI</div>
                <p className="text-xs text-[#6B7280]">Visualizaciones dinámicas que se actualizan de forma automática en tiempo real sin procesos manuales.</p>
              </div>

              <div className="p-4 bg-white rounded border border-neutral-200">
                <div className="text-[10px] font-mono text-[#5B4FE5] font-bold mb-1">FILTROS DINÁMICOS</div>
                <div className="font-bold text-sm text-[#111111] mb-1">Visualización Segmentada</div>
                <p className="text-xs text-[#6B7280]">Navega y filtra tu volumen de facturación por vendedor, mes, canal de adquisición o producto.</p>
              </div>

              <div className="p-4 bg-white rounded border border-neutral-200">
                <div className="text-[10px] font-mono text-[#5B4FE5] font-bold mb-1">PROYECCIÓN</div>
                <div className="font-bold text-sm text-[#111111] mb-1">Análisis de Tendencias</div>
                <p className="text-xs text-[#6B7280]">Estimaciones inteligentes de ventas de cierre de mes basadas en el comportamiento histórico de tu embudo.</p>
              </div>

              <div className="p-4 bg-white rounded border border-neutral-200">
                <div className="text-[10px] font-mono text-[#5B4FE5] font-bold mb-1">REPORTING DIRECTIVO</div>
                <div className="font-bold text-sm text-[#111111] mb-1">Programación de Informes</div>
                <p className="text-xs text-[#6B7280]">Envío automático de resúmenes en PDF de los resultados comerciales cada inicio de semana.</p>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 6. ECOSISTEMA DE TECNOLOGÍAS (CRM) */}
      <section className="py-12 bg-[#FFFFFF] border-b border-neutral-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h4 className="font-serif text-xl font-bold text-[#111111]">Ecosistema de Tecnologías Soportadas</h4>
            <p className="text-xs text-[#6B7280] font-sans mt-0.5">Integraciones independientes utilizando herramientas comerciales líderes.</p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 max-w-4xl mx-auto">
            {['Twenty (CRM open source)', 'PostgreSQL', 'Power BI', 'Looker Studio', 'Python', 'Supabase', 'AWS Cloud', 'Azure Cloud', 'Zapier'].map((tech, i) => (
              <div key={i} className="px-4 py-2 bg-white border border-neutral-200 rounded text-center shadow-xs">
                <span className="font-bold text-xs text-[#111111]">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. COMPARATIVA: CONTACTOS DISPERSOS VS CRM TWENTY */}
      <section className="py-20 bg-[#FFFFFF] border-b border-neutral-900/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono text-[#5B4FE5] uppercase tracking-wider font-bold mb-2 block">
              // EVOLUCIÓN OPERACIONAL
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111111]">
              Contactos Dispersos vs. CRM Twenty a tu Medida
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#6B7280] mt-3">
              Descubre los incrementos en cierres de ventas y ahorro de horas manuales consolidadas al dar el paso hacia un CRM.
            </p>
          </div>

          <div className="overflow-x-auto border border-neutral-900/15 rounded-xl bg-white shadow-xs max-w-5xl mx-auto mb-8">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-50/80">
                  <th className="py-4 px-6 text-xs font-mono text-[#6B7280] uppercase tracking-wider w-1/4">
                    Criterio de Evaluación
                  </th>
                  <th className="py-4 px-6 text-xs font-mono text-[#111111] uppercase tracking-wider w-3/8 border-l border-neutral-200">
                    Contactos y Notas Dispersas (Excel, WhatsApp, cuadernos)
                  </th>
                  <th className="py-4 px-6 text-xs font-mono text-[#5B4FE5] uppercase font-bold tracking-wider w-3/8 border-l border-neutral-200 border-t-2 border-t-[#5B4FE5] bg-[#5B4FE5]/5">
                    CRM Twenty a tu Medida (Propuesta Six)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200/80 text-xs sm:text-sm font-sans">
                {comparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-neutral-50/50 transition-colors">
                    <td className="py-5 px-6 font-bold text-[#111111]">{row.feature}</td>
                    
                    <td className="py-5 px-6 border-l border-neutral-200">
                      <div className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded bg-neutral-200/70 text-neutral-600 flex items-center justify-center shrink-0 mt-0.5 font-mono text-xs">✕</div>
                        <div>
                          <div className="font-bold text-[#111111] mb-1">{row.onPremise.title}</div>
                          <div className="text-xs text-[#6B7280] leading-relaxed">{row.onPremise.description}</div>
                        </div>
                      </div>
                    </td>

                    <td className="py-5 px-6 border-l border-neutral-200 bg-[#5B4FE5]/2">
                      <div className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded bg-[#5B4FE5]/15 text-[#5B4FE5] flex items-center justify-center shrink-0 mt-0.5 font-bold"><Check className="w-3.5 h-3.5 text-[#5B4FE5]" /></div>
                        <div>
                          <div className="font-bold text-[#5B4FE5] mb-1">{row.cloud.title}</div>
                          <div className="text-xs text-[#111111] leading-relaxed">{row.cloud.description}</div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-neutral-50 rounded-xl border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-5xl mx-auto">
            <div>
              <h4 className="font-serif text-lg text-[#111111] font-bold">
                ¿Deseas evaluar el ROI comercial de migrar a un CRM?
              </h4>
              <p className="font-sans text-xs text-[#6B7280]">
                Realizamos un análisis gratuito de tus planillas actuales y diseñamos tu blueprint comercial ideal.
              </p>
            </div>

            <button
              onClick={onOpenContact}
              className="px-5 py-3 bg-[#0A0A0A] hover:bg-[#5B4FE5] text-white font-sans font-bold text-xs uppercase tracking-wider rounded-md transition-all shrink-0 flex items-center gap-2 cursor-pointer"
            >
              <span>SOLICITAR PROPUESTA CRM</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 8. FAQ (CRM) */}
      <section className="py-20 bg-[#FFFFFF] relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-[#5B4FE5] uppercase tracking-wider font-bold mb-2 block">
              // PREGUNTAS SOBRE VENTAS & REPORTES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#111111]">
              Resuelve tus dudas sobre <span className="text-[#5B4FE5] font-serif italic">CRM & Analytics</span>
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
