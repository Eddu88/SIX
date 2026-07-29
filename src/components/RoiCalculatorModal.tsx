import React, { useState } from 'react';
import { X, Calculator, ArrowRight, CheckCircle2, Clock } from 'lucide-react';

interface RoiCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const RoiCalculatorModal: React.FC<RoiCalculatorModalProps> = ({
  isOpen,
  onClose,
  onOpenContact,
}) => {
  const [vendedoresCount, setVendedoresCount] = useState<number>(6);
  const [horasSemanales, setHorasSemanales] = useState<number>(10);
  const [crmType, setCrmType] = useState<'basico' | 'avanzado' | 'personalizado'>('avanzado');

  if (!isOpen) return null;

  // Estimation math formula
  const hourlyRate = 15; // Promedio estimado de USD por hora de vendedor / administrativo
  const totalHorasManualesAnuales = vendedoresCount * horasSemanales * 52;
  const costoManualAnual = totalHorasManualesAnuales * hourlyRate;

  // Ahorro de tiempo del 70% al 90%
  const factorAhorro = crmType === 'basico' ? 0.70 : crmType === 'avanzado' ? 0.80 : 0.90;
  const horasAhorradasAnuales = Math.round(totalHorasManualesAnuales * factorAhorro);
  const ahorroEconomicoBruto = horasAhorradasAnuales * hourlyRate;

  // Licenciamiento + cloud estimado anual
  const costoCrmLicenciasAnual = crmType === 'basico' ? 360 : crmType === 'avanzado' ? 720 : 1200;
  // Implementación única amortizada en 3 años
  const costoCrmImplementacionVi = crmType === 'basico' ? 1200 : crmType === 'avanzado' ? 2400 : 4500;
  const costoOperativoAnualCrm = (costoCrmLicenciasAnual * vendedoresCount) + (costoCrmImplementacionVi / 3);

  const estimatedAnnualSavings = Math.max(0, Math.round(ahorroEconomicoBruto - costoOperativoAnualCrm));
  const savingsPercent = Math.round((estimatedAnnualSavings / (costoManualAnual || 1)) * 100);

  const estimatedHoursPerWeekCrm = Math.round(horasSemanales * (1 - factorAhorro));
  const legacyHoursPerWeek = horasSemanales;

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
          <Calculator className="w-5 h-5 text-[#5B4FE5]" />
          <span className="text-xs font-mono font-bold text-[#5B4FE5] uppercase tracking-wider">
            Simulador de Eficiencia CRM & Nube
          </span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl text-[#111111] mb-2">
          Calculadora de Retorno CRM (Six)
        </h3>
        <p className="font-sans text-xs sm:text-sm text-[#6B7280] mb-6">
          Estima el impacto financiero y de productividad al migrar tus planillas y datos manuales comerciales a un CRM moderno integrado a la nube.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          
          {/* INPUT FORM CONTROLS */}
          <div className="space-y-4 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
            
            {/* 1. SALESPEOPLE COUNT */}
            <div>
              <div className="flex justify-between text-xs font-mono mb-1.5">
                <label className="font-bold text-[#111111]">N° DE VENDEDORES / USUARIOS:</label>
                <span className="text-[#5B4FE5] font-bold">{vendedoresCount} vendedores</span>
              </div>
              <input
                type="range"
                min="2"
                max="30"
                step="1"
                value={vendedoresCount}
                onChange={(e) => setVendedoresCount(Number(e.target.value))}
                className="w-full accent-[#5B4FE5] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-[#6B7280] mt-1">
                <span>2</span>
                <span>15</span>
                <span>30+</span>
              </div>
            </div>

            {/* 2. HOURS SPENT MANUAL */}
            <div>
              <div className="flex justify-between text-xs font-mono mb-1.5">
                <label className="font-bold text-[#111111]">HORAS SEMANALES EN REPORTES / EXCEL:</label>
                <span className="text-[#5B4FE5] font-bold">{horasSemanales} horas / semana</span>
              </div>
              <input
                type="range"
                min="2"
                max="24"
                step="1"
                value={horasSemanales}
                onChange={(e) => setHorasSemanales(Number(e.target.value))}
                className="w-full accent-[#5B4FE5] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-[#6B7280] mt-1">
                <span>2 hrs</span>
                <span>12 hrs</span>
                <span>24 hrs</span>
              </div>
            </div>

            {/* 3. CRM COMPLEJIDAD */}
            <div>
              <label className="block text-xs font-mono font-bold text-[#111111] mb-1.5">
                TIPO DE CRM E INTEGRACIÓN NUBE:
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setCrmType('basico')}
                  className={`py-2 px-2 text-xs font-mono font-bold rounded border transition-all ${
                    crmType === 'basico'
                      ? 'bg-[#0A0A0A] text-white border-[#0A0A0A]'
                      : 'bg-white text-[#6B7280] border-neutral-300 hover:text-[#111111]'
                  }`}
                >
                  Básico
                </button>
                <button
                  type="button"
                  onClick={() => setCrmType('avanzado')}
                  className={`py-2 px-2 text-xs font-mono font-bold rounded border transition-all ${
                    crmType === 'avanzado'
                      ? 'bg-[#5B4FE5] text-white border-[#5B4FE5]'
                      : 'bg-white text-[#6B7280] border-neutral-300 hover:text-[#111111]'
                  }`}
                >
                  Avanzado
                </button>
                <button
                  type="button"
                  onClick={() => setCrmType('personalizado')}
                  className={`py-2 px-2 text-xs font-mono font-bold rounded border transition-all ${
                    crmType === 'personalizado'
                      ? 'bg-neutral-800 text-white border-neutral-800'
                      : 'bg-white text-[#6B7280] border-neutral-300 hover:text-[#111111]'
                  }`}
                >
                  A Medida
                </button>
              </div>
            </div>

          </div>

          {/* SIMULATION RESULT DISPLAY */}
          <div className="p-5 bg-neutral-900 text-white rounded-lg border border-neutral-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#5B4FE5] mb-3">
                <span>EFICIENCIA ESTIMADA SIX</span>
                <span className="px-2 py-0.5 bg-[#5B4FE5]/20 rounded font-bold">-{savingsPercent}% COSTO HORAS</span>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-[11px] font-mono text-neutral-400">RETORNO ANUAL NETO ESTIMADO</div>
                  <div className="font-serif text-3xl sm:text-4xl font-bold text-[#5B4FE5] mt-0.5">
                    ${estimatedAnnualSavings.toLocaleString('en-US')} USD
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-neutral-800 text-xs">
                  <div>
                    <div className="text-[10px] font-mono text-neutral-400">TRABAJO MANUAL (EXCEL)</div>
                    <div className="font-bold text-red-400 font-mono">{legacyHoursPerWeek} hrs / semana por persona</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-neutral-400">CON CRM AUTOMÁTICO</div>
                    <div className="font-bold text-emerald-400 font-mono">{estimatedHoursPerWeekCrm} hrs / semana por persona</div>
                  </div>
                </div>

                <div className="pt-2 text-[11px] font-mono text-neutral-300 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#5B4FE5]" />
                  <span>Ahorro total de {horasAhorradasAnuales.toLocaleString('en-US')} horas productivas al año.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-neutral-800">
              <button
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                className="w-full py-3 bg-[#5B4FE5] hover:bg-[#4A3FD2] text-white font-sans font-bold text-xs uppercase tracking-wider rounded transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>AGENDAR DISEÑO DE FLUJO CRM</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
