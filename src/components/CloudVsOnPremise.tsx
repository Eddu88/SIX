import React from 'react';
import { COMPARISON_DATA } from '../data/viData';
import { Check, X, ShieldAlert, ArrowRight } from 'lucide-react';

interface CloudVsOnPremiseProps {
  onOpenContact: () => void;
}

export const CloudVsOnPremise: React.FC<CloudVsOnPremiseProps> = ({ onOpenContact }) => {
  return (
    <section id="comparativa" className="py-20 bg-[#FFFFFF] border-b border-neutral-900/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#5B4FE5] uppercase tracking-wider font-semibold mb-2">
            <span>// ANÁLISIS COMPARATIVO</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111111]">
            Excel & Planillas vs <span className="text-[#5B4FE5] font-serif italic">CRM Moderno + Nube</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#6B7280] mt-3">
            Por qué migrar tu gestión comercial de hojas de cálculo manuales a un CRM integrado en la nube impulsa tus ventas y automatiza tus reportes.
          </p>
        </div>

        {/* COMPARISON TABLE */}
        <div className="overflow-x-auto border border-neutral-900/15 rounded-xl bg-white shadow-xs">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-50/80">
                <th className="py-4 px-6 text-xs font-mono text-[#6B7280] uppercase tracking-wider w-1/4">
                  Criterio de Evaluación
                </th>
                <th className="py-4 px-6 text-xs font-mono text-[#111111] uppercase tracking-wider w-3/8 border-l border-neutral-200">
                  Hojas de Cálculo / Excel Manual
                </th>
                <th className="py-4 px-6 text-xs font-mono text-[#5B4FE5] uppercase font-bold tracking-wider w-3/8 border-l border-neutral-200 border-t-2 border-t-[#5B4FE5] bg-[#5B4FE5]/5">
                  CRM Moderno con Nube (Propuesta Vi)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200/80 text-xs sm:text-sm">
              {COMPARISON_DATA.map((row, idx) => (
                <tr key={idx} className="hover:bg-neutral-50/50 transition-colors">
                  
                  {/* CRITERION NAME */}
                  <td className="py-5 px-6 font-sans font-bold text-[#111111]">
                    {row.feature}
                  </td>

                  {/* ON-PREMISE COLUMN */}
                  <td className="py-5 px-6 border-l border-neutral-200">
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded bg-neutral-200/70 text-neutral-600 flex items-center justify-center shrink-0 mt-0.5 font-mono text-xs">
                        ✕
                      </div>
                      <div>
                        <div className="font-bold text-[#111111] mb-1">
                          {row.onPremise.title}
                        </div>
                        <div className="text-xs text-[#6B7280] leading-relaxed">
                          {row.onPremise.description}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* CLOUD COLUMN (HIGHLIGHTED WITH TOP INDIGO ACCENT AS IN BRIEF) */}
                  <td className="py-5 px-6 border-l border-neutral-200 bg-[#5B4FE5]/2">
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded bg-[#5B4FE5]/15 text-[#5B4FE5] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                        <Check className="w-3.5 h-3.5 text-[#5B4FE5]" />
                      </div>
                      <div>
                        <div className="font-bold text-[#5B4FE5] mb-1">
                          {row.cloud.title}
                        </div>
                        <div className="text-xs text-[#111111] leading-relaxed">
                          {row.cloud.description}
                        </div>
                      </div>
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* BOTTOM CALLOUT */}
        <div className="mt-8 p-6 bg-neutral-50 rounded-xl border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
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
  );
};
