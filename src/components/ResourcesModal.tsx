import React from 'react';
import { X, BookOpen, Download, ArrowRight, FileText, CheckCircle2 } from 'lucide-react';
import { RESOURCES_LIST } from '../data/viData';

interface ResourcesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ResourcesModal: React.FC<ResourcesModalProps> = ({
  isOpen,
  onClose,
  onOpenContact,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white border border-neutral-900/20 w-full max-w-3xl rounded-xl p-6 sm:p-8 shadow-2xl relative paper-cut-lg max-h-[90vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full border border-neutral-300 hover:bg-neutral-100 flex items-center justify-center text-[#111111] transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <BookOpen className="w-5 h-5 text-[#5B4FE5]" />
          <span className="text-xs font-mono font-bold text-[#5B4FE5] uppercase tracking-wider">
            Centro de Recursos & Blueprints
          </span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl text-[#111111] mb-2">
          Documentación Técnica & Casos de Éxito
        </h3>
        <p className="font-sans text-xs sm:text-sm text-[#6B7280] mb-6">
          Descarga nuestros diagramas de arquitectura de referencia para nubes y guías de CRM en la nube.
        </p>

        <div className="space-y-4 mb-6">
          {RESOURCES_LIST.map((res) => (
            <div
              key={res.id}
              className="p-5 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-[#5B4FE5] transition-colors group flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1.5 max-w-xl">
                <div className="flex items-center gap-2 text-[10px] font-mono">
                  <span className="px-2 py-0.5 bg-[#5B4FE5]/10 text-[#5B4FE5] font-bold rounded">
                    {res.type}
                  </span>
                  <span className="text-[#6B7280]">• {res.readingTime}</span>
                </div>

                <h4 className="font-sans font-bold text-sm text-[#111111] group-hover:text-[#5B4FE5] transition-colors">
                  {res.title}
                </h4>

                <p className="font-sans text-xs text-[#6B7280]">
                  {res.description}
                </p>

                <div className="flex flex-wrap gap-1 pt-1">
                  {res.techStack.map((tech, idx) => (
                    <span key={idx} className="text-[10px] font-mono text-[#111111] bg-white px-2 py-0.5 rounded border border-neutral-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                className="px-4 py-2.5 bg-[#0A0A0A] hover:bg-[#5B4FE5] text-white font-sans font-bold text-xs uppercase tracking-wider rounded transition-colors shrink-0 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>DESCARGAR</span>
              </button>
            </div>
          ))}
        </div>

        <div className="p-4 bg-neutral-100 rounded-lg border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="text-[#111111] font-medium">
            ¿Necesitas un blueprint personalizado para la infraestructura de tu empresa?
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="px-4 py-2 bg-[#5B4FE5] hover:bg-[#4A3FD2] text-white font-bold uppercase tracking-wider rounded transition-colors shrink-0 cursor-pointer"
          >
            SOLICITAR BLUEPRINT A MEDIDA
          </button>
        </div>

      </div>
    </div>
  );
};
