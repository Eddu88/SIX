import React from 'react';
import { REGIONS_DATA } from '../data/viData';
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook, Youtube } from 'lucide-react';

interface FooterProps {
  onNavigate?: (to: string) => void;
  onOpenContact: () => void;
  onOpenResources: () => void;
  onOpenRoiCalculator: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenContact,
  onOpenResources,
  onOpenRoiCalculator,
}) => {
  return (
    <footer className="bg-[#0A0A0A] text-[#FFFFFF] pt-16 pb-12 border-t border-neutral-800 relative overflow-hidden">
      
      {/* Background Dot-Matrix Dark Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-dot-matrix-dark opacity-10 pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* MAIN FOOTER COLUMNS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 pb-12 border-b border-neutral-800/80">
          
          {/* COLUMN 1: BRAND & CERTIFICATIONS */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-3">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate?.('/');
                }}
                className="w-9 h-9 bg-white text-[#0A0A0A] rounded-lg flex items-center justify-center font-serif font-bold text-xl cursor-pointer"
              >
                Six
              </a>
              <div className="flex flex-col">
                <span className="font-sans font-bold text-sm tracking-widest text-white uppercase leading-none">
                  SIX DATA
                </span>
                <span className="text-[10px] text-neutral-400 font-mono mt-0.5">
                  DATA & CRM SOLUTIONS
                </span>
              </div>
            </div>

            <p className="font-sans text-xs text-neutral-400 leading-relaxed">
              Servicios completos en arquitectura, ingeniería de datos, análisis de dashboards e integración de CRM modernos en la nube.
            </p>

            <div className="pt-2 space-y-1.5 font-mono text-[10px] text-neutral-400">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FE5]"></span>
                <span>100% Independiente</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                <span>CRM & Analytics Solutions</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>Seguridad de Datos Cifrada</span>
              </div>
            </div>
          </div>

          {/* COLUMN 2: SERVICIOS */}
          <div className="space-y-3">
            <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-white border-b border-neutral-800 pb-2">
              Soluciones & Servicios
            </h4>
            <ul className="space-y-2 text-xs font-sans text-neutral-400">
              <li>
                <a
                  href="/crm"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate?.('/crm');
                  }}
                  className="hover:text-[#5B4FE5] transition-colors"
                >
                  CRM Moderno & Nube
                </a>
              </li>
              <li>
                <a
                  href="/soluciones-datos"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate?.('/soluciones-datos');
                  }}
                  className="hover:text-[#5B4FE5] transition-colors"
                >
                  Ingeniería de Datos & Pipelines
                </a>
              </li>
              <li>
                <a
                  href="/soluciones-datos"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate?.('/soluciones-datos');
                  }}
                  className="hover:text-[#5B4FE5] transition-colors"
                >
                  Arquitectura de Datos End-to-End
                </a>
              </li>
              <li>
                <a
                  href="/soluciones-datos"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate?.('/soluciones-datos');
                  }}
                  className="hover:text-[#5B4FE5] transition-colors"
                >
                  Análisis & Dashboards de Datos
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: RECURSOS */}
          <div className="space-y-3">
            <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-white border-b border-neutral-800 pb-2">
              Empresa & Recursos
            </h4>
            <ul className="space-y-2 text-xs font-sans text-neutral-400">
              <li>
                <button onClick={onOpenResources} className="hover:text-[#5B4FE5] transition-colors text-left cursor-pointer">
                  Blueprints de Arquitectura
                </button>
              </li>
              <li>
                <button onClick={onOpenRoiCalculator} className="hover:text-[#5B4FE5] transition-colors text-left cursor-pointer">
                  Calculadora ROI CRM
                </button>
              </li>
              <li>
                <a
                  href="/soluciones-datos"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate?.('/soluciones-datos');
                  }}
                  className="hover:text-[#5B4FE5] transition-colors"
                >
                  Ecosistema de Tecnologías
                </a>
              </li>
              <li>
                <a
                  href="/crm"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate?.('/crm');
                  }}
                  className="hover:text-[#5B4FE5] transition-colors"
                >
                  Tabla Excel vs CRM
                </a>
              </li>
              <li>
                <button onClick={onOpenContact} className="hover:text-[#5B4FE5] transition-colors text-left cursor-pointer">
                  Evaluación de CRM Gratuita
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: REGIONES & BANDERAS */}
          <div className="space-y-3">
            <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-white border-b border-neutral-800 pb-2">
              Presencia Regional
            </h4>
            <ul className="space-y-2 text-xs font-sans text-neutral-400">
              {REGIONS_DATA.map((reg, idx) => (
                <li key={idx} className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1.5">
                    <span>{reg.flag}</span>
                    <span className="text-white font-medium">{reg.country}</span>
                    <span className="text-[10px] text-neutral-400">({reg.city})</span>
                  </span>

                  {reg.isLaunchPartner && (
                    <span className="text-[9px] font-mono text-[#5B4FE5] border border-[#5B4FE5] px-1.5 py-0.2 rounded font-bold">
                      {reg.badgeText}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 5: CONTACTO & HORARIOS */}
          <div className="space-y-3">
            <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-white border-b border-neutral-800 pb-2">
              Contacto & Soporte
            </h4>

            <div className="space-y-2 text-xs font-sans text-neutral-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#5B4FE5] shrink-0 mt-0.5" />
                <span>Av. Víctor Andrés Belaúnde 147, San Isidro, Lima - Perú</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#5B4FE5] shrink-0" />
                <a href="mailto:contacto@six-data.cloud" className="hover:text-white transition-colors">
                  contacto@six-data.cloud
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#5B4FE5] shrink-0" />
                <span>+51 (1) 700-8890</span>
              </div>

              <div className="pt-2 border-t border-neutral-800/80 text-[11px] font-mono text-neutral-400 space-y-1">
                <div>• Horario de Atención: L-V 09:00 - 18:00</div>
                <div>• Canal de Soporte: <span className="text-[#5B4FE5] font-bold">Respuesta Rápida</span></div>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM ROW: COPYRIGHT & SOCIAL ICONS */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <div>
            © {new Date().getFullYear()} Six Data Solutions S.A.C. Todos los derechos reservados.
          </div>

          {/* SOCIAL MEDIA CIRCULAR BUTTONS */}
          <div className="flex items-center gap-2">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full border border-neutral-800 hover:border-[#5B4FE5] hover:text-[#5B4FE5] flex items-center justify-center transition-colors"
              aria-label="LinkedIn Six"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full border border-neutral-800 hover:border-[#5B4FE5] hover:text-[#5B4FE5] flex items-center justify-center transition-colors"
              aria-label="Instagram Six"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full border border-neutral-800 hover:border-[#5B4FE5] hover:text-[#5B4FE5] flex items-center justify-center transition-colors"
              aria-label="Facebook Six"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full border border-neutral-800 hover:border-[#5B4FE5] hover:text-[#5B4FE5] flex items-center justify-center transition-colors"
              aria-label="YouTube Six"
            >
              <Youtube className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://medium.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full border border-neutral-800 hover:border-[#5B4FE5] hover:text-[#5B4FE5] flex items-center justify-center transition-colors font-serif font-bold text-xs"
              aria-label="Medium Blog Six"
            >
              M
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
