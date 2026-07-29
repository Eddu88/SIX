import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Mail, Phone, Building, User, MessageSquare } from 'lucide-react';

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactDrawer: React.FC<ContactDrawerProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    cloudInterest: 'aws',
    serviceTopic: 'lakehouse',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      company: '',
      phone: '',
      cloudInterest: 'aws',
      serviceTopic: 'lakehouse',
      message: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      
      {/* BACKGROUND CLICK OUTSIDE */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* DRAWER PANEL */}
      <div className="relative w-full max-w-lg bg-white border-l border-neutral-900/20 h-full overflow-y-auto p-6 sm:p-8 shadow-2xl flex flex-col justify-between z-10">
        
        <div>
          {/* HEADER */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-neutral-200">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-[#0A0A0A] rounded text-white font-serif font-bold text-sm flex items-center justify-center">
                Six
              </div>
              <div>
                <span className="font-sans font-bold text-xs uppercase tracking-wider text-[#111111] block">
                  CONSULTORÍA SIX DATA
                </span>
                <span className="font-mono text-[10px] text-[#6B7280]">
                  Respuesta en menos de 2 horas hábiles
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full border border-neutral-300 hover:bg-neutral-100 flex items-center justify-center text-[#111111] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {!submitted ? (
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#111111] mb-2">
                Conversemos sobre tu <span className="text-[#5B4FE5] italic">plataforma</span>
              </h3>
              <p className="font-sans text-xs text-[#6B7280] mb-6">
                Completa tus datos para agendar una sesión con nuestros principales consultores en datos y CRM.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* NOMBRE COMPLETO */}
                <div>
                  <label className="block text-xs font-mono font-bold text-[#111111] uppercase mb-1">
                    Nombre Completo *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#6B7280] absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="Ej. Ing. Carlos Mendoza"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full text-xs font-sans pl-9 pr-3 py-2.5 bg-neutral-50 border border-neutral-300 rounded focus:border-[#5B4FE5] focus:outline-none"
                    />
                  </div>
                </div>

                {/* CORREO CORPORATIVO */}
                <div>
                  <label className="block text-xs font-mono font-bold text-[#111111] uppercase mb-1">
                    Correo Corporativo *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#6B7280] absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="carlos.mendoza@empresa.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full text-xs font-sans pl-9 pr-3 py-2.5 bg-neutral-50 border border-neutral-300 rounded focus:border-[#5B4FE5] focus:outline-none"
                    />
                  </div>
                </div>

                {/* EMPRESA & TELÉFONO GRID */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#111111] uppercase mb-1">
                      Empresa *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Banco del Sur"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full text-xs font-sans px-3 py-2.5 bg-neutral-50 border border-neutral-300 rounded focus:border-[#5B4FE5] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-[#111111] uppercase mb-1">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      placeholder="+51 987 654 321"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full text-xs font-sans px-3 py-2.5 bg-neutral-50 border border-neutral-300 rounded focus:border-[#5B4FE5] focus:outline-none"
                    />
                  </div>
                </div>

                {/* TEMA DE INTERÉS */}
                <div>
                  <label className="block text-xs font-mono font-bold text-[#111111] uppercase mb-1">
                    Servicio Requerido *
                  </label>
                  <select
                    value={formData.serviceTopic}
                    onChange={(e) => setFormData({ ...formData, serviceTopic: e.target.value })}
                    className="w-full text-xs font-sans p-2.5 bg-neutral-50 border border-neutral-300 rounded focus:border-[#5B4FE5] focus:outline-none"
                  >
                    <option value="crm">CRM Moderno & Integración Nube</option>
                    <option value="engineering">Ingeniería de Datos & Pipelines</option>
                    <option value="architecture">Arquitectura de Datos End-to-End</option>
                    <option value="analytics">Análisis & Dashboards de Datos</option>
                  </select>
                </div>

                {/* NUBE PREFERIDA */}
                <div>
                  <label className="block text-xs font-mono font-bold text-[#111111] uppercase mb-1">
                    Plataforma Cloud Principal
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['aws', 'azure', 'both'].map((cloud) => (
                      <button
                        type="button"
                        key={cloud}
                        onClick={() => setFormData({ ...formData, cloudInterest: cloud })}
                        className={`py-2 text-xs font-mono font-bold rounded border transition-all uppercase ${
                          formData.cloudInterest === cloud
                            ? 'bg-[#5B4FE5] text-white border-[#5B4FE5]'
                            : 'bg-neutral-50 text-[#6B7280] border-neutral-300'
                        }`}
                      >
                        {cloud === 'both' ? 'Multicloud' : cloud.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>

                {/* MENSAJE O DESCRIPCIÓN DEL PROYECTO */}
                <div>
                  <label className="block text-xs font-mono font-bold text-[#111111] uppercase mb-1">
                    Detalles del Proyecto / Desafío
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Cuéntanos brevemente tus objetivos de volumen de datos, plazos o infraestructura actual..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full text-xs font-sans p-3 bg-neutral-50 border border-neutral-300 rounded focus:border-[#5B4FE5] focus:outline-none resize-none"
                  ></textarea>
                </div>

                {/* SUBMIT BUTTON */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 bg-[#0A0A0A] hover:bg-[#5B4FE5] text-white font-sans font-bold text-xs uppercase tracking-wider rounded transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    {loading ? (
                      <span className="font-mono text-xs">ENVIANDO SOLICITUD...</span>
                    ) : (
                      <>
                        <span>SOLICITAR SESIÓN DE ARQUITECTURA</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            </div>
          ) : (
            <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
              <div className="w-16 h-16 bg-[#5B4FE5]/10 text-[#5B4FE5] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="font-serif text-2xl text-[#111111]">
                ¡Solicitud Recibida con Éxito!
              </h3>

              <p className="font-sans text-xs text-[#6B7280] max-w-sm mx-auto leading-relaxed">
                Gracias, <strong className="text-[#111111]">{formData.fullName}</strong>. Un especialista sénior de <strong className="text-[#5B4FE5]">Six Data</strong> revisará los requerimientos de <span className="font-medium text-[#111111]">{formData.company}</span> y se pondrá en contacto al correo <span className="underline text-[#111111]">{formData.email}</span>.
              </p>

              <div className="p-4 bg-neutral-50 rounded border border-neutral-200 text-left text-xs space-y-1 font-mono text-[#6B7280]">
                <div>• Código de Ticket: <span className="text-[#111111] font-bold">#SIX-DATA-{Math.floor(1000 + Math.random() * 9000)}</span></div>
                <div>• SLA de Respuesta: <span className="text-[#5B4FE5] font-bold">&lt; 2 Horas Hábiles</span></div>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#0A0A0A] text-white text-xs font-bold uppercase rounded hover:bg-[#5B4FE5] transition-colors"
                >
                  VOLVER A LA PÁGINA
                </button>
              </div>
            </div>
          )}
        </div>

        {/* FOOTER OF DRAWER */}
        <div className="pt-6 border-t border-neutral-200 text-[11px] text-[#6B7280] font-mono flex items-center justify-between">
          <div className="flex items-center gap-1">
            <ShieldCheck className="w-4 h-4 text-[#5B4FE5]" />
            <span>Garantía de confidencialidad NDA</span>
          </div>
          <span>Soporte Dedicado Six</span>
        </div>

      </div>
    </div>
  );
};
