"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { Play } from "lucide-react";

export function VideoSection() {
    // 8 links Extraídos da própria playlist original (PL-KmsquED46aFcEZTItikmbgclFd8MDvo) do Bruno Borges
    const videos = [
        "https://www.youtube.com/embed/99lo7Y6CQwA",
        "https://www.youtube.com/embed/me01oy7m5Qo",
        "https://www.youtube.com/embed/XGm9_8p8szw",
        "https://www.youtube.com/embed/mc-BLTC9u8g",
        "https://www.youtube.com/embed/MxZHpqm0Tiw",
        "https://www.youtube.com/embed/axURBwz8Y6Y",
        "https://www.youtube.com/embed/8r9odFeCfGg",
        "https://www.youtube.com/embed/0qsh0aDGsfs"
    ];

    return (
        <section className="py-32 bg-[var(--dark-elevated)] relative overflow-hidden" id="video">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[var(--gold-premium)]/5 blur-[150px] rounded-full" />
            </div>

            {/* Container ampliado para maximizar os vídeos em tela cheia */}
            <div className="max-w-[1500px] mx-auto px-6 lg:px-12 relative z-10 w-full">
                <div className="text-center mb-20 max-w-4xl mx-auto">
                    <FadeIn>
                        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[var(--white-10)] bg-[var(--white-5)] backdrop-blur-md mb-8">
                            <Play className="w-5 h-5 text-[var(--gold-premium)] fill-current" />
                            <span className="text-sm font-bold tracking-widest uppercase text-white">Aperte o Play</span>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <h2 className="font-display font-black text-5xl md:text-7xl uppercase leading-[0.9] tracking-tighter mb-4 text-white">
                            Ouça de quem <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold-premium)] to-white">já vive do mercado</span>
                        </h2>
                    </FadeIn>
                </div>

                {/* Estrutura flexível (Flexbox) projetada com justify-center
                    3 colunas inteiras na Desktop, resultando em 3 no topo, 3 no meio e 2 perfeitamente centralizados no final 
                */}
                <div className="flex flex-wrap justify-center gap-8 md:gap-12 w-full">
                    {videos.map((src, i) => (
                        <FadeIn
                            key={i}
                            delay={0.1 * (i % 3)}
                            // O uso do calc(33.333% - 2rem) garante exatamente 3 elementos por linha descontando os gaps (gap-12 = 3rem).
                            className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-2rem)] flex-grow-0"
                        >
                            <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-[var(--white-10)] bg-black group shadow-2xl hover:border-[var(--gold-premium)]/40 hover:shadow-[0_0_50px_rgba(212,175,55,0.2)] transition-all duration-500 scale-100 hover:scale-[1.03]">
                                <iframe
                                    src={src}
                                    title={`Depoimento Mentoria TDS ${i + 1}`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="absolute top-0 left-0 w-full h-full"
                                ></iframe>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
