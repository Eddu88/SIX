import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/viData';
import { Plus, Minus, HelpCircle, ChevronDown } from 'lucide-react';

interface FaqSectionProps {
  onOpenContact: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenContact }) => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1']);
  const [showAll, setShowAll] = useState<boolean>(false);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const displayedFaqs = showAll ? FAQ_ITEMS : FAQ_ITEMS.slice(0, 4);

  return (
    <section className="py-20 bg-[#FFFFFF] border-b border-neutral-900/10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#5B4FE5] uppercase tracking-wider font-semibold mb-2">
            <span>// PREGUNTAS FRECUENTES</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#111111]">
            Resuelve tus dudas sobre <span className="text-[#5B4FE5] font-serif italic">Vi Data Solutions</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#6B7280] mt-2">
            Respuestas técnicas sobre migración, arquitectura Lakehouse, gobernanza y soporte 24/7.
          </p>
        </div>

        {/* FAQ ACCORDION LIST */}
        <div className="space-y-3">
          {displayedFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <div
                key={faq.id}
                className="bg-white border border-neutral-900/15 rounded-lg overflow-hidden transition-all duration-200 paper-cut"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-neutral-50/80 transition-colors"
                >
                  <span className="font-sans font-bold text-sm sm:text-base text-[#111111]">
                    {faq.question}
                  </span>

                  <div
                    className={`w-7 h-7 rounded-full border border-neutral-300 shrink-0 flex items-center justify-center transition-all ${
                      isOpen
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

        {/* SHOW MORE BUTTON */}
        {!showAll && FAQ_ITEMS.length > 4 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-2.5 border border-neutral-900 rounded-full text-xs font-sans font-bold text-[#111111] uppercase tracking-wider hover:bg-neutral-100 transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Ver {FAQ_ITEMS.length - 4} preguntas más</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
