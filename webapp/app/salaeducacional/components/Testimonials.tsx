"use client";

import { useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        text: "A sala é simplesmente ESPETACULAR, ela traz uma esperança enorme. Eu estou no mercado há 5 anos patinando, achava que não era mais pra mim, mas depois que iniciei a mentoria do Bruno e começamos a operar juntos na Sala, tudo clareou.",
        author: "Nadson",
        role: "Aluno TDS",
    },
    {
        text: "No fundo eu era uma torcedora. Hoje sinto que estou crescendo e a cada dia mais confiante. Sabe aquela sensação da luz no fim do túnel? É o que está acontecendo comigo. Voltei a operar na conta real assim que a sala começou e estou consistente desde então.",
        author: "Elienai",
        role: "Aluno TDS",
    },
    {
        text: "Estou a mais de 5 anos no mercado e já participei de dezenas de salas. Esta sala é totalmente diferente. O Bruno está 100% focado na operação, no gráfico, e o fato de ninguém poder falar é o principal.",
        author: "Granderei",
        role: "Aluno TDS",
    },
    {
        text: "Já fiz 10 mentorias e participei de várias salas ao vivo. Nenhuma das anteriores entregou algo tão concreto, conciso e sem dubiedade.",
        author: "Abraão",
        role: "Aluno TDS",
    },
    {
        text: "Minha assinatura já seria anual na sala, sem saber nem o valor. Já estou há mais de 1 ano no curso fazendo todos, e essa sala veio como mais uma bomba.",
        author: "Felipe",
        role: "Aluno TDS",
    },
    {
        text: "A sala do Bruno veio para revolucionar o resultado dos alunos. Depois da sala tudo mudou. Consegui reverter o negativo e passar a fechar os dias no positivo.",
        author: "Italo",
        role: "Aluno TDS",
    },
];

export function Testimonials() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const getCardWidth = useCallback(() => {
        const container = scrollRef.current;
        if (!container) return 0;
        const card = container.firstElementChild as HTMLElement | null;
        if (!card) return 0;
        return card.offsetWidth + 24;
    }, []);

    const scrollBy = (dir: 1 | -1) => {
        const container = scrollRef.current;
        if (!container) return;
        container.scrollBy({ left: dir * getCardWidth(), behavior: "smooth" });
    };

    const handleScroll = useCallback(() => {
        const container = scrollRef.current;
        if (!container) return;
        const cardWidth = getCardWidth();
        if (cardWidth === 0) return;
        setActiveIndex(Math.round(container.scrollLeft / cardWidth));
    }, [getCardWidth]);

    return (
        <section className="py-16 md:py-24 border-t border-white/[0.06]" style={{ background: "#111312" }}>
            <div className="max-w-5xl mx-auto px-6">

                <div className="text-center mb-16">
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block text-white/30">
                        Depoimentos
                    </span>
                    <h2 className="font-display font-black text-4xl md:text-5xl uppercase leading-[0.9] tracking-tighter text-white mb-4">
                        Nas palavras de<br />
                        <span style={{ color: "#BFEA24" }}>quem viveu.</span>
                    </h2>
                </div>

                {/* Carrossel */}
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex gap-6 overflow-x-auto pb-4 [scroll-snap-type:x_mandatory] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 [scroll-snap-align:start] w-[85vw] sm:w-[400px] flex flex-col rounded-3xl p-7 border"
                            style={{ background: "#1A1A1A", borderColor: "rgba(255,255,255,0.08)" }}
                        >
                            <span className="font-serif text-4xl leading-none mb-4 select-none" style={{ color: "#BFEA24", opacity: 0.5 }}>"</span>
                            <p className="text-base text-white/60 italic leading-snug flex-1">{t.text}</p>
                            <div className="pt-5 mt-5 border-t border-white/10 flex items-center gap-4">
                                <div
                                    className="w-10 h-10 rounded-full flex items-center justify-center font-display font-black text-base flex-shrink-0"
                                    style={{ background: "rgba(191,234,36,0.15)", color: "#BFEA24" }}
                                >
                                    {t.author.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-display font-bold text-sm uppercase tracking-wide text-white">{t.author}</p>
                                    <p className="text-[10px] uppercase tracking-widest font-bold mt-0.5" style={{ color: "#BFEA24" }}>{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Controles */}
                <div className="flex items-center justify-center gap-5 mt-8">
                    <button
                        onClick={() => scrollBy(-1)}
                        aria-label="Anterior"
                        className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-white/30 hover:text-white transition-all duration-200"
                        style={{ background: "rgba(255,255,255,0.04)" }}
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    <div className="flex items-center gap-2">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => {
                                    scrollRef.current?.scrollTo({ left: i * getCardWidth(), behavior: "smooth" });
                                }}
                                aria-label={`Ir para depoimento ${i + 1}`}
                                className="rounded-full transition-all duration-300"
                                style={{
                                    width: i === activeIndex ? "24px" : "8px",
                                    height: "8px",
                                    background: i === activeIndex ? "#BFEA24" : "rgba(255,255,255,0.2)",
                                }}
                            />
                        ))}
                    </div>

                    <button
                        onClick={() => scrollBy(1)}
                        aria-label="Próximo"
                        className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-white/30 hover:text-white transition-all duration-200"
                        style={{ background: "rgba(255,255,255,0.04)" }}
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>

            </div>
        </section>
    );
}
