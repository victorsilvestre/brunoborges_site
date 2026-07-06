"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";

const faqs = [
  {
    q: "A sala é gravada ou só ao vivo?",
    a: "A Sala é ao vivo — é exatamente esse o valor dela. O mercado acontecendo em tempo real, com o Bruno lendo o gráfico na sua frente, é insubstituível por qualquer gravação. Você precisa estar lá para acompanhar.",
  },
  {
    q: "Preciso ter feito a Mentoria para participar?",
    a: "Sim. A Sala Educacional é exclusiva para alunos da Mentoria TDS. Ela pressupõe que você já entende o Método — o objetivo não é ensinar do zero, mas colocar o que você já sabe em prática ao vivo, todos os dias.",
  },
  {
    q: "E se eu não puder assistir todo dia?",
    a: "A Sala acontece todos os dias úteis das 8h45 às 10h15. Você não precisa estar em todos os dias — mas quanto mais constante for a sua presença, mais rápida é a sua evolução. A repetição é o que consolida a leitura de qualidade.",
  },
  {
    q: "Como funciona o pagamento — é mensal, recorrente?",
    a: "Sim. A Sala Educacional funciona no modelo de assinatura mensal recorrente. Você paga todo mês enquanto quiser continuar com acesso.",
  },
  {
    q: "Posso cancelar quando quiser?",
    a: "Sim. Cancele quando quiser, sem burocracia. O acesso permanece ativo até o fim do período pago.",
  },
  {
    q: "A Sala substitui a Mentoria ou é complementar?",
    a: "É complementar — e essa distinção é importante. Na Mentoria você aprende o Método. Na Sala você aprende a executar o Método. São fases diferentes de uma mesma jornada.",
  },
  {
    q: "E se eu entrar e não gostar?",
    a: "Você tem 7 dias de garantia total. Participe das primeiras sessões, experimente ao vivo. Se dentro desse período sentir que não é para você, basta solicitar o reembolso integral — sem questionamentos, sem burocracia.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const left = faqs.filter((_, i) => i % 2 === 0);
  const right = faqs.filter((_, i) => i % 2 !== 0);

  const renderItem = (faq: (typeof faqs)[0], index: number) => {
    const isOpen = openIndex === index;
    return (
      <div
        key={index}
        className="border rounded-2xl overflow-hidden transition-colors duration-300"
        style={{
          background: isOpen ? "#1A1A1A" : "transparent",
          borderColor: isOpen
            ? "rgba(191,234,36,0.25)"
            : "rgba(255,255,255,0.08)",
        }}
      >
        <button
          onClick={() => setOpenIndex(isOpen ? null : index)}
          className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none"
        >
          <span
            className="font-display font-bold text-sm md:text-base uppercase tracking-tight transition-colors max-w-[85%]"
            style={{ color: isOpen ? "#BFEA24" : "rgba(255,255,255,0.8)" }}
          >
            {faq.q}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
            className="shrink-0 ml-3 p-1.5 rounded-full border transition-colors"
            style={{
              borderColor: isOpen
                ? "rgba(191,234,36,0.4)"
                : "rgba(255,255,255,0.15)",
              color: isOpen ? "#BFEA24" : "rgba(255,255,255,0.4)",
            }}
          >
            {isOpen ? <X size={16} /> : <Plus size={16} />}
          </motion.div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
            >
              <div
                className="px-5 md:px-6 pb-6 text-sm leading-snug border-t pt-4"
                style={{
                  color: "rgba(255,255,255,0.5)",
                  borderColor: "rgba(255,255,255,0.07)",
                }}
              >
                {faq.a}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <section className="py-16 md:py-24 bg-[#0C0D0E] border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-black text-4xl md:text-5xl text-white uppercase leading-snug tracking-tighter mb-4">
            Perguntas
            <br />
            <span style={{ color: "#BFEA24" }}>Frequentes</span>
          </h2>
        </div>

        {/* Mobile: lista sequencial */}
        <div className="space-y-3 lg:hidden">
          {faqs.map((faq, i) => renderItem(faq, i))}
        </div>

        {/* Desktop: duas colunas por índice par/ímpar */}
        <div className="hidden lg:grid grid-cols-2 gap-3 items-start">
          <div className="space-y-3">
            {left.map((faq, i) => renderItem(faq, i * 2))}
          </div>
          <div className="space-y-3">
            {right.map((faq, i) => renderItem(faq, i * 2 + 1))}
          </div>
        </div>
      </div>
    </section>
  );
}
