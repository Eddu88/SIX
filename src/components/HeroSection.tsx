import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, MessageSquareQuote, CheckCircle2, Database, ShieldCheck, Sparkles, Sliders } from 'lucide-react';
import { DotMatrixCanvas } from './DotMatrixCanvas';
import { TESTIMONIALS } from '../data/viData';

interface HeroSectionProps {
  onOpenContact: () => void;
  onOpenResources: () => void;
  onOpenRoiCalculator: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenContact,
  onOpenResources,
  onOpenRoiCalculator,
}) => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'testimonial' | 'architecture'>('testimonial');

  const currentTestimonial = TESTIMONIALS[currentTestimonialIndex];

  const handleNext = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-[#FFFFFF] border-b border-neutral-900/10 overflow-hidden relative">
      
      {/* Background Subtle Dot-Matrix Accents in Corners */}
      <div className="absolute top-12 right-0 w-72 h-72 bg-dot-matrix-sm opacity-20 pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-48 h-48 bg-dot-matrix-sm opacity-15 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP BADGE / MODE TOGGLE */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-50 border border-neutral-900/15 rounded-md">
            <span className="w-2 h-2 rounded-sm bg-[#5B4FE5]"></span>
            <span className="text-xs font-mono font-medium tracking-wide text-[#111111] uppercase">
              Boutique Ágil de Datos y CRM
            </span>
          </div>

          <div className="flex items-center gap-1 bg-neutral-100 p-1 rounded-md border border-neutral-200">
            <button
              onClick={() => setActiveTab('testimonial')}
              className={`px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider transition-all ${
                activeTab === 'testimonial'
                  ? 'bg-white text-[#111111] shadow-xs border border-neutral-200'
                  : 'text-[#6B7280] hover:text-[#111111]'
              }`}
            >
              Testimonios de Clientes
            </button>
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider transition-all ${
                activeTab === 'architecture'
                  ? 'bg-white text-[#111111] shadow-xs border border-neutral-200'
                  : 'text-[#6B7280] hover:text-[#111111]'
              }`}
            >
              Nuestras Especialidades
            </button>
          </div>
        </div>

        {/* MAIN HERO GRID: LEFT DOT-MATRIX | VERTICAL SEPARATOR LINE | RIGHT CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: DOT-MATRIX GRAPHIC (Hourglass / Data Flow) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 bg-neutral-50/80 rounded-xl border border-neutral-200/80 relative paper-cut-lg paper-cut-fold group transition-all duration-300 hover:border-[#5B4FE5]/40">
            
            <div className="absolute top-3 left-3 text-[10px] font-mono text-[#6B7280] uppercase tracking-widest flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FE5]"></span>
              DOT-MATRIX VECTOR MODEL
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
              <span className="font-semibold text-[#5B4FE5]">AUTOMATIZACIÓN COMERCIAL</span>
              <span className="text-[#6B7280]">Integración CRM & Nube</span>
            </div>
          </div>

          {/* VERTICAL DIVIDER LINE WITH PLUS (+) SIGNS AT TIPS (as specified in brief) */}
          <div className="hidden lg:flex col-span-1 justify-center relative self-stretch py-4">
            <div className="relative w-px bg-neutral-300/80 h-full flex flex-col justify-between items-center">
              <span className="text-[#5B4FE5] font-mono text-sm font-bold bg-white -mt-3 z-10 select-none">+</span>
              <div className="w-1 h-1 rounded-full bg-[#5B4FE5] animate-ping my-auto"></div>
              <span className="text-[#5B4FE5] font-mono text-sm font-bold bg-white -mb-3 z-10 select-none">+</span>
            </div>
          </div>

          {/* RIGHT COLUMN: HERO CONTENT & CAROUSEL */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            {/* Header Badge */}
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-[#5B4FE5] rounded flex items-center justify-center text-white text-[10px] font-bold">
                ✓
              </div>
              <span className="font-sans font-semibold text-xs text-[#111111] uppercase tracking-wider">
                {activeTab === 'testimonial' ? 'Así hablan nuestros clientes' : 'Soluciones Prácticas y Accesibles'}
              </span>
            </div>

            {/* MAIN EDITORIAL HEADLINE */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#111111] leading-tight tracking-tight">
              Lleva tus datos comerciales de Excel a <span className="text-[#5B4FE5] italic font-serif">un CRM moderno</span>.
            </h1>

            {/* CONTENT AREA: TESTIMONIAL OR ARCHITECTURE OVERVIEW */}
            {activeTab === 'testimonial' ? (
              <div className="space-y-4 pt-2">
                
                {/* Quote Box */}
                <div className="p-5 bg-neutral-50/90 rounded-lg border-l-2 border-[#5B4FE5] border-y border-r border-neutral-200">
                  <div className="flex items-start gap-3">
                    <MessageSquareQuote className="w-6 h-6 text-[#5B4FE5] shrink-0 mt-0.5" />
                    <p className="font-sans text-base sm:text-lg text-[#111111] leading-relaxed font-normal">
                      "{currentTestimonial.quote}"
                    </p>
                  </div>
                  
                  <div className="mt-4 pt-3 border-t border-neutral-200/60 flex items-center justify-between text-xs">
                    <span className="font-mono text-[#5B4FE5] font-semibold">
                      {currentTestimonial.metrics}
                    </span>
                    <span className="font-sans text-[#6B7280] font-medium">
                      {currentTestimonial.companyCategory}
                    </span>
                  </div>
                </div>

                {/* Author Info & Carousel Controls */}
                <div className="flex items-center justify-between pt-2">
                  <div>
                    <div className="font-sans font-bold text-sm text-[#111111]">
                      {currentTestimonial.clientName}
                    </div>
                    <div className="font-sans text-xs text-[#6B7280]">
                      {currentTestimonial.clientRole} · <span className="text-[#111111] font-medium">{currentTestimonial.company}</span>
                    </div>
                  </div>

                  {/* Carousel Counter & Navigation */}
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-semibold text-[#111111]">
                      {currentTestimonialIndex + 1} / {TESTIMONIALS.length}
                    </span>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={handlePrev}
                        className="w-8 h-8 border border-neutral-300 rounded hover:border-[#111111] hover:bg-neutral-100 flex items-center justify-center transition-colors cursor-pointer"
                        aria-label="Anterior testimonio"
                      >
                        <ChevronLeft className="w-4 h-4 text-[#111111]" />
                      </button>
                      <button
                        onClick={handleNext}
                        className="w-8 h-8 border border-neutral-300 rounded hover:border-[#111111] hover:bg-neutral-100 flex items-center justify-center transition-colors cursor-pointer"
                        aria-label="Siguiente testimonio"
                      >
                        <ChevronRight className="w-4 h-4 text-[#111111]" />
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            ) : (
              <div className="space-y-4 pt-2">
                <p className="font-sans text-base text-[#6B7280] leading-relaxed">
                  Ofrecemos servicios completos y ágiles en <strong className="text-[#111111]">arquitectura de datos</strong>, <strong className="text-[#111111]">ingeniería de datos</strong> y <strong className="text-[#111111]">análisis de dashboards</strong>, conectando tus sistemas con un <strong className="text-[#5B4FE5]">CRM moderno</strong> e integrado a la nube.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-neutral-50 rounded border border-neutral-200">
                    <div className="text-xs font-mono font-bold text-[#5B4FE5] mb-1">CRM & ANALYTICS</div>
                    <p className="text-xs text-[#111111]">Automatización de embudos · Conectores de datos · Dashboards en tiempo real</p>
                  </div>
                  <div className="p-3 bg-neutral-50 rounded border border-neutral-200">
                    <div className="text-xs font-mono font-bold text-[#5B4FE5] mb-1">DATA STACK</div>
                    <p className="text-xs text-[#111111]">Diseño de bases de datos cloud · Pipelines de datos · Modelado elástico</p>
                  </div>
                </div>
              </div>
            )}

            {/* CALL TO ACTION BUTTONS */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
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
  );
};
