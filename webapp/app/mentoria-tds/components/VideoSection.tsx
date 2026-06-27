"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { FadeIn } from "../../components/FadeIn";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

export function VideoSection() {
    const videos = [
        { id: "99lo7Y6CQwA" },
        { id: "me01oy7m5Qo" },
        { id: "XGm9_8p8szw" },
        { id: "mc-BLTC9u8g" },
        { id: "MxZHpqm0Tiw" },
        { id: "axURBwz8Y6Y" },
        { id: "8r9odFeCfGg" },
        { id: "0qsh0aDGsfs" },
    ];

    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [activatedVideos, setActivatedVideos] = useState<Set<number>>(new Set());

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
        <section className="py-16 md:py-24 bg-[var(--light-surface)] relative overflow-hidden border-y border-slate-200" id="video">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[var(--green-bull)]/5 blur-[150px] rounded-full" />
            </div>

            <div className="max-w-[1500px] mx-auto px-6 lg:px-12 relative z-10 w-full">
                {/* Header */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <FadeIn>
                        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-slate-200 bg-white shadow-sm mb-8">
                            <Play className="w-5 h-5 text-[var(--green-bull)] fill-current" />
                            <span className="text-sm font-bold tracking-widest uppercase text-[var(--dark-pure)]">Aperte o Play</span>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <h2 className="font-display font-black text-5xl md:text-7xl uppercase leading-[0.9] tracking-tighter mb-4 text-[var(--dark-pure)]">
                            O que os alunos <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--green-pure)] to-[var(--green-bull)]">dizem por aí</span>
                        </h2>
                    </FadeIn>
                </div>

                {/* Carrossel */}
                <FadeIn delay={0.2}>
                    {/*
                        Scroll snapping nativo:
                        - overflow-x: auto com scroll-snap-type: x mandatory
                        - Cada card tem scroll-snap-align: start
                        - Mobile:  1 card por vez (w-full)
                        - Tablet:  2 cards por vez (w-[calc(50%-12px)])
                        - Desktop: 3 cards por vez (w-[calc(33.333%-16px)])
                        As setas chamam scrollBy com a largura real do card lido do DOM.
                        Scrollbar oculta via [-ms-overflow-style:none] e [&::-webkit-scrollbar]:hidden
                    */}
                    <div
                        ref={scrollRef}
                        onScroll={handleScroll}
                        className="flex gap-6 overflow-x-auto scroll-smooth [scroll-snap-type:x_mandatory] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    >
                        {videos.map(({ id }, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 [scroll-snap-align:start] w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                            >
                                <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-slate-200 bg-black shadow-md">
                                    {activatedVideos.has(i) ? (
                                        <iframe
                                            src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                                            title={`Depoimento Mentoria TDS ${i + 1}`}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="absolute top-0 left-0 w-full h-full"
                                        />
                                    ) : (
                                        <button
                                            onClick={() => setActivatedVideos(prev => new Set(prev).add(i))}
                                            className="absolute inset-0 w-full h-full group"
                                            aria-label={`Reproduzir depoimento ${i + 1}`}
                                        >
                                            <Image
                                                src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
                                                alt={`Depoimento Mentoria TDS ${i + 1}`}
                                                fill
                                                className="object-cover"
                                            />
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-200" />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-16 h-16 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center shadow-lg transition-all duration-200 group-hover:scale-110">
                                                    <Play className="w-7 h-7 text-[var(--dark-pure)] fill-current ml-1" />
                                                </div>
                                            </div>
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Controles: setas + bolinhas na mesma linha, abaixo dos vídeos */}
                    <div className="flex items-center justify-center gap-6 mt-8">
                        <button
                            onClick={() => scrollBy(-1)}
                            aria-label="Vídeo anterior"
                            className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[var(--dark-pure)] hover:border-[var(--green-bull)] hover:text-[var(--green-bull)] transition-all duration-200"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        <div className="flex items-center gap-2">
                            {videos.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => {
                                        const container = scrollRef.current;
                                        if (!container) return;
                                        const card = container.firstElementChild as HTMLElement | null;
                                        if (!card) return;
                                        const cardWidth = card.offsetWidth + 24;
                                        container.scrollTo({ left: i * cardWidth, behavior: "smooth" });
                                    }}
                                    aria-label={`Ir para vídeo ${i + 1}`}
                                    className={`rounded-full transition-all duration-300 ${
                                        i === activeIndex
                                            ? "w-6 h-2 bg-[var(--green-bull)]"
                                            : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                                    }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={() => scrollBy(1)}
                            aria-label="Próximo vídeo"
                            className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[var(--dark-pure)] hover:border-[var(--green-bull)] hover:text-[var(--green-bull)] transition-all duration-200"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
