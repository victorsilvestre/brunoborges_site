"use client";

import { FadeIn } from "../../components/FadeIn";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "A Maratona é gratuita?",
        answer: "Sim, 100% gratuita. Não existe nenhuma cobrança para participar — nem antes, nem durante, nem depois do evento. O único passo necessário é entrar no grupo exclusivo no Telegram.",
    },
    {
        question: "Preciso ter experiência no mercado financeiro?",
        answer: "Não. O conteúdo foi estruturado para funcionar tanto para quem está começando do zero quanto para quem já opera e quer refinar o operacional. O Bruno parte da base e avança com profundidade em cada aula.",
    },
    {
        question: "Como vou receber os links das aulas?",
        answer: "Tudo chega pelo grupo exclusivo no Telegram. Você recebe o aviso antes de cada aula, o link para assistir ao vivo e o acesso às gravações logo depois que cada noite encerra.",
    },
    {
        question: "Vou conseguir assistir mesmo se não puder ao vivo?",
        answer: "Sim. As gravações de todas as aulas ficam disponíveis no grupo da Maratona. Você assiste no seu tempo, no ritmo que fizer sentido pra você.",
    },
    {
        question: "O que acontece depois que a Maratona termina?",
        answer: "Você fica com o acesso ao material — gravações e resumões de cada aula. Além disso, quem participa da Maratona tem prioridade de informação sobre a próxima abertura da Mentoria Trader de Sucesso.",
    },
];

export function FAQ() {
    const [openIdx, setOpenIdx] = useState<number | null>(null);

    return (
        <section className="py-24 bg-[var(--dark-base)] relative overflow-hidden border-b border-[var(--white-10)]">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <FadeIn>
                    <div className="text-center mb-14">
                        <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-[var(--white-30)] block mb-4">
                            Dúvidas Frequentes
                        </span>
                        <h2 className="font-display font-black text-5xl md:text-6xl text-white uppercase leading-[0.9] tracking-tighter">
                            Ainda tem <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--green-pure)] to-[var(--green-dark)]">dúvidas?</span>
                        </h2>
                    </div>
                </FadeIn>

                <div className="flex flex-col gap-3">
                    {faqs.map((faq, i) => {
                        const isOpen = openIdx === i;
                        return (
                            <FadeIn key={i} delay={0.05 + i * 0.07}>
                                <button
                                    onClick={() => setOpenIdx(isOpen ? null : i)}
                                    className="w-full text-left p-6 rounded-2xl border transition-all duration-300"
                                    style={{
                                        borderColor: isOpen ? 'var(--green-border)' : 'var(--white-10)',
                                        background: isOpen ? 'var(--green-dim)' : 'rgba(255,255,255,0.03)',
                                    }}
                                >
                                    <div className="flex items-center justify-between gap-4">
                                        <span className="font-display font-bold text-base md:text-lg text-white leading-snug">
                                            {faq.question}
                                        </span>
                                        <ChevronDown
                                            className="w-5 h-5 shrink-0 transition-transform duration-300"
                                            style={{
                                                color: 'var(--green-pure)',
                                                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                            }}
                                        />
                                    </div>
                                    {isOpen && (
                                        <p className="mt-4 text-[var(--white-60)] text-base font-light leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    )}
                                </button>
                            </FadeIn>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
