"use client";

import { useRef, useState, useCallback } from "react";
import { FadeIn } from "../../components/FadeIn";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ResultsSection() {
    const images: { src: string; position: string }[] = [
        { src: "/images/results/image_result-1.jpg", position: "object-center" },
        { src: "/images/results/image_result-2.jpg", position: "object-center" },
        { src: "/images/results/image_result-3.jpg", position: "object-bottom" },
        { src: "/images/results/image_result-4.jpg", position: "object-center" },
        { src: "/images/results/image_result-5.jpg", position: "object-center" },
        { src: "/images/results/image_result-6.jpg", position: "object-bottom" },
    ];

    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const getCardWidth = useCallback(() => {
        const container = scrollRef.current;
        if (!container) return 0;
        const card = container.firstElementChild as HTMLElement | null;
        if (!card) return 0;
        return card.offsetWidth + 24; // 24px = gap-6
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
        const index = Math.round(container.scrollLeft / cardWidth);
        setActiveIndex(index);
    }, [getCardWidth]);

    return (
        <section className="py-16 md:py-24 bg-[var(--dark-base)] border-t border-[var(--white-10)] relative overflow-hidden" id="results">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <FadeIn>
                        <h2 className="text-[var(--white-40)] font-bold text-sm tracking-[0.2em] uppercase mb-4">
                            Você é capaz de ter resultados assim todos os dias
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <h3 className="font-display font-black text-5xl md:text-7xl text-white uppercase leading-[0.9] tracking-tighter mb-8">
                            Resultados <br />
                            <span className="text-[var(--green-bull)]">Reais</span>
                        </h3>
                        <span className="font-script text-3xl md:text-4xl text-[var(--green-bull)] block -mt-4 mb-6 md:mb-8 origin-left -rotate-1">
                            #AlunosTDS
                        </span>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="text-xl text-[var(--white-60)] leading-snug">
                            Vou te ensinar a ter resultados como esses no seu dia a dia operacional. Sem setups mágicos ou indicadores milagrosos. Conheça a leitura de Price Action que transformou a vida de milhares de alunos.
                        </p>
                    </FadeIn>
                </div>

                {/* Carrossel */}
                <FadeIn delay={0.3}>
                    <div
                        ref={scrollRef}
                        onScroll={handleScroll}
                        className="flex gap-6 overflow-x-auto [scroll-snap-type:x_mandatory] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    >
                        {images.map(({ src, position }, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 [scroll-snap-align:start] w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                            >
                                <div className="relative h-80 rounded-2xl overflow-hidden border border-[var(--white-10)] bg-[var(--dark-elevated)]">
                                    <img
                                        src={src}
                                        alt={`Resultado do aluno ${i + 1}`}
                                        className={`w-full h-full object-cover opacity-90 ${position}`}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Controles: setas + bolinhas na mesma linha, abaixo das imagens */}
                    <div className="flex items-center justify-center gap-6 mt-8">
                        <button
                            onClick={() => scrollBy(-1)}
                            aria-label="Imagem anterior"
                            className="w-10 h-10 rounded-full bg-[var(--dark-elevated)] border border-[var(--white-10)] shadow-sm flex items-center justify-center text-white hover:border-[var(--green-bull)] hover:text-[var(--green-bull)] transition-all duration-200"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        <div className="flex items-center gap-2">
                            {images.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => {
                                        const container = scrollRef.current;
                                        if (!container) return;
                                        container.scrollTo({ left: i * getCardWidth(), behavior: "smooth" });
                                    }}
                                    aria-label={`Ir para imagem ${i + 1}`}
                                    className={`rounded-full transition-all duration-300 ${
                                        i === activeIndex
                                            ? "w-6 h-2 bg-[var(--green-bull)]"
                                            : "w-2 h-2 bg-[var(--white-20)] hover:bg-[var(--white-40)]"
                                    }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={() => scrollBy(1)}
                            aria-label="Próxima imagem"
                            className="w-10 h-10 rounded-full bg-[var(--dark-elevated)] border border-[var(--white-10)] shadow-sm flex items-center justify-center text-white hover:border-[var(--green-bull)] hover:text-[var(--green-bull)] transition-all duration-200"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
