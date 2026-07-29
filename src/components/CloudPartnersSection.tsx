import React, { useState } from 'react';
import { CLIENT_LOGOS } from '../data/viData';
import { Database, Laptop, GitMerge, FileCheck, ArrowRight, Share2, Layers } from 'lucide-react';

interface CloudPartnersSectionProps {
  onOpenContact: () => void;
}

export const CloudPartnersSection: React.FC<CloudPartnersSectionProps> = ({ onOpenContact }) => {
  const [activeCloudTab, setActiveCloudTab] = useState<'aws' | 'azure'>('aws');

  return (
    <section id="clientes" className="py-20 bg-[#FFFFFF] border-b border-neutral-900/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* INTEGRATIONS HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono text-[#5B4FE5] font-bold uppercase tracking-wider px-3 py-1 bg-[#5B4FE5]/10 rounded inline-block mb-3">
            Integraciones Tecnológicas
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#111111]">
            Compatibilidad & Despliegues en <span className="text-[#5B4FE5] font-serif italic">AWS, Azure & Ecosistemas Modernos</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#6B7280] mt-3">
            Construimos soluciones independientes y a la medida integrando bases de datos estables, CRM ágiles y tableros interactivos automatizados.
          </p>
        </div>

        {/* TECH BADGES ROW (Grayscale to full color on hover) */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 mb-16 pb-12 border-b border-neutral-200">
          
          <div className="p-4 bg-neutral-50/80 rounded-lg border border-neutral-200 grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-300 flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 bg-amber-500/10 rounded flex items-center justify-center text-amber-600 font-bold font-mono text-sm">
              AWS
            </div>
            <div>
              <div className="font-sans font-bold text-xs text-[#111111] group-hover:text-amber-600">Amazon Web Services</div>
              <div className="text-[10px] font-mono text-[#6B7280]">Almacenamiento & Cloud DB</div>
            </div>
          </div>

          <div className="p-4 bg-neutral-50/80 rounded-lg border border-neutral-200 grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-300 flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 bg-blue-500/10 rounded flex items-center justify-center text-blue-600 font-bold font-mono text-sm">
              AZ
            </div>
            <div>
              <div className="font-sans font-bold text-xs text-[#111111] group-hover:text-blue-600">Microsoft Azure</div>
              <div className="text-[10px] font-mono text-[#6B7280]">Servicios Cloud SQL</div>
            </div>
          </div>

          <div className="p-4 bg-neutral-50/80 rounded-lg border border-neutral-200 grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-300 flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 bg-emerald-500/10 rounded flex items-center justify-center text-emerald-600 font-bold font-mono text-sm">
              PG
            </div>
            <div>
              <div className="font-sans font-bold text-xs text-[#111111] group-hover:text-emerald-600">PostgreSQL</div>
              <div className="text-[10px] font-mono text-[#6B7280]">Bases de Datos Relacionales</div>
            </div>
          </div>

          <div className="p-4 bg-neutral-50/80 rounded-lg border border-neutral-200 grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-300 flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 bg-cyan-500/10 rounded flex items-center justify-center text-cyan-600 font-bold font-mono text-sm">
              ZP
            </div>
            <div>
              <div className="font-sans font-bold text-xs text-[#111111] group-hover:text-cyan-600">Zapier & APIs</div>
              <div className="text-[10px] font-mono text-[#6B7280]">Automatización de Flujos</div>
            </div>
          </div>

        </div>

        {/* INTERACTIVE CLOUD INTEGRATION MATRIX */}
        <div className="bg-neutral-50 rounded-xl p-6 sm:p-8 border border-neutral-200 mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-neutral-200">
            <div>
              <h3 className="font-serif text-2xl text-[#111111]">
                Integración del CRM con la Nube
              </h3>
              <p className="font-sans text-xs text-[#6B7280]">
                Cómo la nube y la ingeniería de datos potencian el funcionamiento de tu CRM moderno.
              </p>
            </div>

            <div className="inline-flex p-1 bg-white border border-neutral-300 rounded-md">
              <button
                onClick={() => setActiveCloudTab('aws')}
                className={`px-4 py-2 rounded text-xs font-mono font-bold uppercase transition-all ${
                  activeCloudTab === 'aws'
                    ? 'bg-[#0A0A0A] text-white shadow-xs'
                    : 'text-[#6B7280] hover:text-[#111111]'
                }`}
              >
                Ecosistema CRM
              </button>
              <button
                onClick={() => setActiveCloudTab('azure')}
                className={`px-4 py-2 rounded text-xs font-mono font-bold uppercase transition-all ${
                  activeCloudTab === 'azure'
                    ? 'bg-[#5B4FE5] text-white shadow-xs'
                    : 'text-[#6B7280] hover:text-[#111111]'
                }`}
              >
                Ecosistema Dashboards
              </button>
            </div>
          </div>

          {activeCloudTab === 'aws' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-in fade-in duration-200">
              <div className="p-4 bg-white rounded border border-neutral-200">
                <div className="text-[10px] font-mono text-amber-600 font-bold mb-1">CAPTA LEADS</div>
                <div className="font-bold text-sm text-[#111111] mb-1">API de Contactos</div>
                <p className="text-xs text-[#6B7280]">Ingesta automática de prospectos directamente desde formularios web y campañas digitales hacia tu CRM.</p>
              </div>

              <div className="p-4 bg-white rounded border border-neutral-200">
                <div className="text-[10px] font-mono text-amber-600 font-bold mb-1">BASE DE DATOS CLOUD</div>
                <div className="font-bold text-sm text-[#111111] mb-1">PostgreSQL & RDS</div>
                <p className="text-xs text-[#6B7280]">Almacenamiento estructurado y seguro con copias de respaldo automáticas en la nube para tu historial comercial.</p>
              </div>

              <div className="p-4 bg-white rounded border border-neutral-200">
                <div className="text-[10px] font-mono text-amber-600 font-bold mb-1">AUTOMATIZACIÓN</div>
                <div className="font-bold text-sm text-[#111111] mb-1">Triggers & Alertas</div>
                <p className="text-xs text-[#6B7280]">Alertas instantáneas a vendedores por WhatsApp/Email cuando ingresa un lead de alto valor.</p>
              </div>

              <div className="p-4 bg-white rounded border border-neutral-200">
                <div className="text-[10px] font-mono text-amber-600 font-bold mb-1">HISTORIAL COMERCIAL</div>
                <div className="font-bold text-sm text-[#111111] mb-1">Registro Único de Cliente</div>
                <p className="text-xs text-[#6B7280]">Control unificado de correos electrónicos, llamadas de seguimiento y notas de venta en la ficha del lead.</p>
              </div>

              <div className="p-4 bg-white rounded border border-neutral-200">
                <div className="text-[10px] font-mono text-amber-600 font-bold mb-1">SEGURIDAD</div>
                <div className="font-bold text-sm text-[#111111] mb-1">Accesos Cifrados</div>
                <p className="text-xs text-[#6B7280]">Garantía de confidencialidad y control de roles para proteger la base de datos de tu cartera de clientes.</p>
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

        {/* TECH STACK LOGO GRID */}
        <div>
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl text-[#111111]">
              Ecosistema de Tecnologías & Herramientas
            </h3>
            <p className="font-sans text-xs text-[#6B7280] mt-1">
              Diseñamos soluciones independientes integrando bases de datos, CRM y herramientas líderes del mercado.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
            {CLIENT_LOGOS.map((client, i) => (
              <div
                key={i}
                className="p-6 bg-white border border-neutral-200/80 rounded-lg flex flex-col items-center justify-center text-center hover:border-[#5B4FE5] transition-colors group cursor-default"
              >
                <div className="font-serif font-bold text-lg text-neutral-400 group-hover:text-[#111111] transition-colors tracking-tight">
                  {client.name}
                </div>
                <span className="text-[10px] font-mono text-[#6B7280] mt-1">
                  {client.category}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
