import React from 'react';
import { METRIC_STATS } from '../data/viData';
import { Award, Cloud, ShieldCheck, Database, ArrowUpRight } from 'lucide-react';

interface AboutAndStatsProps {
  onOpenContact: () => void;
}

export const AboutAndStats: React.FC<AboutAndStatsProps> = ({ onOpenContact }) => {
  return (
    <section className="py-20 bg-[#FFFFFF] border-b border-neutral-900/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: NARRATIVE WITH VERTICAL STEP INDICATOR */}
          <div className="lg:col-span-6 flex gap-6">
            
            {/* Step / Section Marker "02" */}
            <div className="hidden sm:flex flex-col items-center shrink-0 pt-1">
              <span className="font-mono font-bold text-xs text-[#5B4FE5] px-2 py-1 bg-neutral-100 rounded border border-neutral-200">
                02
              </span>
              <div className="w-px bg-neutral-200 flex-1 my-3"></div>
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#5B4FE5] uppercase tracking-wider font-semibold">
                <span>// QUIÉNES SOMOS & TRACK RECORD</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111111] leading-snug">
                Potencia tu negocio con una <span className="text-[#5B4FE5] font-serif italic">solución práctica</span> e independiente de datos.
              </h2>

              <p className="font-sans text-base text-[#6B7280] leading-relaxed">
                En <strong className="text-[#111111]">Vi</strong> somos una boutique ágil de especialistas dedicados a construir entornos de <strong className="text-[#111111]">arquitectura de datos</strong>, automatización de <strong className="text-[#111111]">ingeniería de datos</strong> y diseño de <strong className="text-[#111111]">dashboards de análisis</strong>.
              </p>

              <p className="font-sans text-base text-[#6B7280] leading-relaxed">
                Ayudamos a startups y empresas en crecimiento a migrar su historial comercial e información dispersa a un <strong className="text-[#5B4FE5]">CRM moderno</strong> integrado a la nube, automatizando pipelines de ventas y reportes para acelerar tu crecimiento sin licencias costosas ni vendor lock-in.
              </p>

              {/* HIGHLIGHTED KEYWORD CAPSULES */}
              <div className="pt-2 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-neutral-50 border border-neutral-200 rounded text-xs font-mono text-[#111111]">
                  • Automatización CRM
                </span>
                <span className="px-3 py-1 bg-[#5B4FE5]/10 border border-[#5B4FE5]/30 rounded text-xs font-mono text-[#5B4FE5] font-semibold">
                  • Ingeniería End-to-End
                </span>
                <span className="px-3 py-1 bg-neutral-50 border border-neutral-200 rounded text-xs font-mono text-[#111111]">
                  • Dashboards e Insights
                </span>
              </div>

              <div className="pt-4">
                <button
                  onClick={onOpenContact}
                  className="px-5 py-3 bg-[#0A0A0A] hover:bg-[#5B4FE5] text-white font-sans font-bold text-xs uppercase tracking-wider rounded-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>SOLICITAR EVALUACIÓN DE CRM</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: 2x2 METRICS GRID */}
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
                    <span>Boutique Data Agency</span>
                    <span className="text-[#5B4FE5] font-bold">100% Independiente</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
