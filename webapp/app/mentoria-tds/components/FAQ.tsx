"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";
import { FadeIn } from "./FadeIn";

export function FAQ() {
    const faqs = [
        { q: "Qual o tempo de duração da Mentoria TDS?", a: "São 60 dias de acompanhamento com aulas 3x na semana (das 19h até não haver mais dúvidas na turma)." },
        { q: "As aulas são gravadas?", a: "Todas as aulas são AO VIVO e, após finalizar a aula, disponibilizo a gravação também. O acesso às gravações é VITALÍCIO, pois as aulas são de vocês!" },
        { q: "As turmas são cheias/lotadas?", a: "Prezo muito pela QUALIDADE e não pela QUANTIDADE. Por este motivo, a quantidade máxima por turma é de 100 alunos." },
        { q: "O suporte de dúvidas é terceirizado ou direto com o Mentor?", a: "Somente eu, Bruno (Mentor), dou suporte aos meus alunos com relação às dúvidas do operacional no Telegram." },
        { q: "O acesso ao Mentor é somente durante os 60 dias?", a: "Não! Seu acesso a mim é vitalício via Telegram. Mesmo após encerrar a mentoria, continuarei dando suporte sempre que você precisar." },
        { q: "E quanto à aula de sábado? Do que se trata?", a: "É uma aula BÔNUS que ocorre aos sábados às 8h. Nela, um aluno opera ao vivo sob minha análise, recebendo feedback prático sobre pontos positivos e negativos. É aberta para assistir vitaliciamente." },
        { q: "Você demora a responder as mensagens de dúvidas?", a: "Como não terceirizo suporte e prezo pela atenção pessoal, respondo às mensagens com a maior brevidade possível dentro do meu dia de operações. Vocês não ficarão sem resposta." },
        { q: "O seu operacional funciona no Sistema Mini Dólar?", a: "Funciona em qualquer mercado, ativo ou intervalo de tempo, inclusive perfeitamente no Mini Dólar." },
        { q: "Você tem sala de pregão ao vivo?", a: "Não trabalho com modelo de sala de sinais / EAD. Meu objetivo é te formar um trader independente." },
        { q: "Você possui Mentoria Individual?", a: "Sim, porém é um serviço adicional à parte (não obrigatório). Está disponível SOMENTE para alunos que já finalizaram a mentoria em grupo e dominam a base teórica." },
        { q: "Quais são as formas de pagamento?", a: "O pagamento é via Pix ou Mercado Pago, podendo parcelar no cartão de crédito em até 12x." },
        { q: "Como faço para entrar na Mentoria TDS?", a: "Basta entrar na Lista de Espera/Grupo VIP pelo botão oficial e aguardar os avisos. As inscrições abrem em períodos controlados." }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-32 bg-[var(--dark-base)] overflow-hidden">
            <div className="max-w-4xl mx-auto px-6">

                <div className="text-center mb-24">
                    <FadeIn>
                        <h2 className="text-[var(--white-40)] font-bold text-sm tracking-[0.2em] uppercase mb-4">
                            Transparência Total
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <h3 className="font-display font-black text-5xl md:text-7xl text-white uppercase leading-[0.9] tracking-tighter">
                            Perguntas <br /> Frequentes
                        </h3>
                    </FadeIn>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <FadeIn key={index} delay={0.05 * Math.min(index, 10)}>
                                <div
                                    className={`border border-[var(--white-10)] rounded-2xl overflow-hidden transition-colors duration-500 ${isOpen ? 'bg-[var(--dark-elevated)] border-[var(--white-20)]' : 'bg-transparent hover:border-[var(--white-20)]'}`}
                                >
                                    <button
                                        onClick={() => setOpenIndex(isOpen ? null : index)}
                                        className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                                    >
                                        <span className={`font-display font-bold text-[1.1rem] md:text-xl uppercase tracking-tighter transition-colors max-w-[90%] ${isOpen ? 'text-[var(--gold-premium)]' : 'text-white'}`}>
                                            {faq.q}
                                        </span>
                                        <motion.div
                                            animate={{ rotate: isOpen ? 90 : 0 }}
                                            transition={{ duration: 0.3 }}
                                            className={`shrink-0 ml-4 p-2 rounded-full border ${isOpen ? 'border-[var(--gold-premium)] text-[var(--gold-premium)]' : 'border-[var(--white-20)] text-white'}`}
                                        >
                                            {isOpen ? <X size={20} /> : <Plus size={20} />}
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
                                                <div className="px-6 md:px-8 pb-8 text-lg text-[var(--white-60)] leading-relaxed border-t border-[var(--white-5)] pt-6 mt-2">
                                                    {faq.a}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </FadeIn>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
