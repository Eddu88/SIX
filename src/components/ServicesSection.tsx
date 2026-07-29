import React, { useState } from 'react';
import { SERVICES } from '../data/viData';
import { ServiceCard } from '../types';
import { DotMatrixCanvas } from './DotMatrixCanvas';
import { ArrowRight, X, Check, Layers, Cpu, Database, Server, Shield, Sparkles } from 'lucide-react';

interface ServicesSectionProps {
  onOpenContact: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenContact }) => {
  const [selectedService, setSelectedService] = useState<ServiceCard | null>(null);

  return (
    <section id="soluciones" className="py-20 bg-[#FFFFFF] border-b border-neutral-900/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-neutral-200">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#5B4FE5] uppercase tracking-wider font-semibold mb-2">
              <span>// CAPACIDADES OPERATIVAS</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111111]">
              Soluciones <span className="text-[#5B4FE5] font-serif italic">Vi</span> para Plataformas de Datos
            </h2>
          </div>

          <p className="mt-4 md:mt-0 font-sans text-xs text-[#6B7280] max-w-md leading-relaxed">
            Estructuras ágiles y accesibles integradas con bases de datos en la nube y tableros interactivos para potenciar tus ventas.
          </p>
        </div>

        {/* 3-COLUMN SERVICES GRID WITH ORIGAMI PAPER-FOLD CORNERS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="bg-white border border-neutral-900/15 p-6 rounded-lg paper-cut paper-cut-fold hover:border-[#5B4FE5] transition-all duration-300 group cursor-pointer flex flex-col justify-between h-full relative"
            >
              <div>
                {/* Header Row: Category Badge & Dot Matrix Icon */}
                <div className="flex items-start justify-between mb-4">
                  <span className="text-[10px] font-mono text-[#5B4FE5] uppercase font-bold tracking-wider px-2.5 py-1 bg-[#5B4FE5]/10 rounded">
                    {service.category.toUpperCase()}
                  </span>

                  <div className="p-2 bg-neutral-50 rounded border border-neutral-200 group-hover:border-[#5B4FE5]/40 transition-colors">
                    <DotMatrixCanvas
                      shape={service.dotMatrixShape}
                      width={64}
                      height={64}
                      dotColor="#5B4FE5"
                      dotSize={2.2}
                      spacing={6}
                      animate={true}
                    />
                  </div>
                </div>

                {/* SERVICE TITLE */}
                <h3 className="font-sans font-bold text-lg text-[#111111] mb-2 group-hover:text-[#5B4FE5] transition-colors">
                  {service.title}
                </h3>

                {/* DOTTED SEPARATOR LINE (as specified in brief) */}
                <div className="dotted-line w-full py-1 my-3" />

                {/* DESCRIPTION */}
                <p className="font-sans text-xs text-[#6B7280] leading-relaxed mb-4">
                  {service.shortDesc}
                </p>

                {/* TECH STACK CHIPS */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {service.awsStack.map((tech, i) => (
                    <span key={i} className="text-[10px] font-mono text-[#111111] bg-neutral-100 px-2 py-0.5 rounded border border-neutral-200">
                      {tech}
                    </span>
                  ))}
                  {service.azureStack.map((tech, i) => (
                    <span key={i} className="text-[10px] font-mono text-[#5B4FE5] bg-[#5B4FE5]/5 px-2 py-0.5 rounded border border-[#5B4FE5]/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* BOTTOM FOOTER: CIRCULAR ARROW BUTTON (as specified in brief) */}
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

      {/* SERVICE DETAIL MODAL */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white border border-neutral-900/20 w-full max-w-2xl rounded-xl p-6 sm:p-8 shadow-2xl relative paper-cut-lg max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full border border-neutral-300 hover:bg-neutral-100 flex items-center justify-center text-[#111111] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono text-[#5B4FE5] font-bold px-3 py-1 bg-[#5B4FE5]/10 rounded uppercase">
                {selectedService.category}
              </span>
              <span className="text-xs font-mono text-[#6B7280]">PROPUESTA INDEPENDIENTE</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#111111] mb-3">
              {selectedService.title}
            </h3>

            <p className="font-sans text-sm text-[#6B7280] leading-relaxed mb-6">
              {selectedService.fullDesc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
              <div className="p-4 bg-neutral-50 rounded border border-neutral-200">
                <div className="text-xs font-mono font-bold text-[#111111] mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  TECNOLOGÍAS ASOCIADAS
                </div>
                <ul className="space-y-1.5 text-xs text-[#111111] font-mono">
                  {selectedService.awsStack.map((tech, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="text-[#5B4FE5]">✓</span> {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-neutral-50 rounded border border-neutral-200">
                <div className="text-xs font-mono font-bold text-[#5B4FE5] mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  ENFOQUE DE INTEGRACIÓN
                </div>
                <ul className="space-y-1.5 text-xs text-[#111111] font-mono">
                  {selectedService.azureStack.map((tech, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="text-[#5B4FE5]">✓</span> {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-sans font-bold text-xs uppercase text-[#111111] mb-3">
                Características & Entregables de Arquitectura
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedService.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#111111]">
                    <Check className="w-4 h-4 text-[#5B4FE5] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => {
                  setSelectedService(null);
                  onOpenContact();
                }}
                className="px-6 py-3 bg-[#0A0A0A] hover:bg-[#5B4FE5] text-white font-sans font-bold text-xs uppercase tracking-wider rounded-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>AGENDAR DISEÑO DE ARQUITECTURA</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-3 text-xs font-mono text-[#6B7280] hover:text-[#111111]"
              >
                Cerrar ventana
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
