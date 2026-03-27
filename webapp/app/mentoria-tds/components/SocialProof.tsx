"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

export function SocialProof() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = scrollRef.current.clientWidth * 0.8;
            scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }
    };

    const testimonials = [
        { text: "Antes eu operava por emoção e devolvia tudo. A visão operacional do TDS virou a minha chave para a constância. Recomendo de olhos fechados.", author: "Fábio R.", role: "Aluno TDS", color: "var(--green-bull)" },
        { text: "Didática fantástica. Sem enrolação de Setup Mágico. Equipe profissional de suporte, o Bruno realmente se importa com o nosso aprendizado.", author: "Marcela T.", role: "Aluna TDS", color: "var(--green-pure)" },
        { text: "O método é direto ao ponto e não fica enrolando com teorias que não funcionam na prática. Minha leitura de fluxo melhorou absurdamente.", author: "João P.", role: "Aluno TDS", color: "var(--green-dark)" },
        { text: "Estou há 3 anos no mercado e foi só com a mentoria TDS que consegui fechar meu primeiro mês no positivo consistente. Incrível.", author: "Ricardo M.", role: "Aluno TDS", color: "var(--green-bull)" },
        { text: "As operações explicadas ao vivo fazem toda a diferença. O Mentor pega na sua mão e mostra o momento exato de entrar e sair.", author: "Camila S.", role: "Aluna TDS", color: "var(--green-pure)" },
        { text: "Nunca vi um operacional tão simples e tão eficaz. O gráfico limpo ajuda muito a não travar na hora de clicar.", author: "Lucas A.", role: "Aluno TDS", color: "var(--green-dark)" },
        { text: "Esse curso não apenas ensina a ganhar, mas ensina a proteger o capital. Isso mudou meu jogo completamente no mini índice.", author: "Pedro H.", role: "Aluno TDS", color: "var(--green-bull)" },
        { text: "O suporte é o melhor que já vi. O Bruno responde rápido, tira dúvidas no Telegram com uma paciência de outro mundo.", author: "Mariana L.", role: "Aluna TDS", color: "var(--green-pure)" },
        { text: "As aulas de sábado com os alunos operando mostram a realidade nua e crua. Foi aí que minha chave para a consistência virou.", author: "Thiago C.", role: "Aluno TDS", color: "var(--green-dark)" },
        { text: "Eu tinha muito medo de operar depois de quebrar a banca três vezes. O Bruno me ajudou a resgatar a confiança e a perder o medo. Acompanhamento maravilhoso.", author: "Roberta D.", role: "Aluna TDS", color: "var(--green-bull)" }
    ];

    return (
        <section className="py-32 bg-[var(--light-surface)] relative overflow-hidden border-y border-slate-200">
            {/* Background Orbs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--green-bull)]/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full overflow-hidden">

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-xl">
                        <FadeIn>
                            <h2 className="text-[var(--dark-medium)] font-bold text-sm tracking-[0.2em] uppercase mb-4">
                                Depoimentos
                            </h2>
                        </FadeIn>
                        <FadeIn delay={0.1}>
                            <h3 className="font-display font-black text-4xl md:text-6xl text-[var(--dark-pure)] uppercase leading-[0.9] tracking-tighter">
                                Seja o próximo <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--green-pure)] to-[var(--green-bull)]">case de sucesso</span>
                            </h3>
                        </FadeIn>
                    </div>
                </div>

                <FadeIn delay={0.3}>
                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                    >
                        {testimonials.map((t, idx) => (
                            <div
                                key={idx}
                                className="w-[85vw] sm:w-[400px] shrink-0 snap-center sm:snap-start flex flex-col justify-between p-8 sm:p-10 rounded-[2rem] border border-slate-200 bg-white shadow-sm hover:border-[var(--green-bull)]/30 transition-colors h-auto min-h-[400px]"
                            >
                                <div
                                    className="font-display font-black text-6xl leading-none opacity-20 mb-6"
                                    style={{ color: t.color === 'var(--white)' ? 'var(--dark-pure)' : t.color }}
                                >
                                    "
                                </div>

                                <p className="text-lg md:text-xl text-[var(--dark-medium)] font-medium italic leading-relaxed mb-auto">
                                    {t.text}
                                </p>

                                <div className="pt-6 border-t border-slate-100 flex items-center gap-4 mt-6">
                                    <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center font-display font-bold text-xl uppercase border border-slate-200 shrink-0" style={{ color: t.color === 'var(--white)' ? 'var(--dark-pure)' : t.color }}>
                                        {t.author.charAt(0)}
                                    </div>
                                    <div className="truncate">
                                        <div className="font-display font-bold text-base uppercase tracking-wider text-[var(--dark-pure)] truncate">
                                            {t.author}
                                        </div>
                                        <div className="text-xs tracking-widest uppercase font-bold mt-1" style={{ color: t.color === 'var(--white)' ? 'var(--dark-medium)' : t.color }}>
                                            {t.role}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </FadeIn>

                {/* Mobile controls */}
                <div className="flex md:hidden items-center justify-center gap-4 mt-4">
                    <button onClick={() => scroll('left')} className="p-4 rounded-full border border-slate-200 bg-white active:bg-slate-50 transition-colors text-[var(--dark-pure)] shadow-sm">
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button onClick={() => scroll('right')} className="p-4 rounded-full border border-slate-200 bg-white active:bg-slate-50 transition-colors text-[var(--dark-pure)] shadow-sm">
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

            </div>
        </section>
    );
}
