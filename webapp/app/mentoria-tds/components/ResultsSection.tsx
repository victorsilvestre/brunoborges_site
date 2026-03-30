"use client";

import { motion } from "framer-motion";
import { FadeIn } from "../../components/FadeIn";

export function ResultsSection() {
    const images = [
        "/images/results/image_result-1.jpg",
        "/images/results/image_result-2.jpg",
        "/images/results/image_result-3.jpg",
        "/images/results/image_result-4.jpg",
        "/images/results/image_result-5.jpg",
        "/images/results/image_result-6.jpg"
    ];

    return (
        <section className="py-32 bg-[var(--dark-base)] border-t border-[var(--white-10)] relative overflow-hidden" id="results">

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <FadeIn>
                        <h2 className="text-[var(--white-40)] font-bold text-sm tracking-[0.2em] uppercase mb-4">
                            Você é capaz de ter resultados assim
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <h3 className="font-display font-black text-5xl md:text-7xl text-white uppercase leading-[0.9] tracking-tighter mb-8">
                            Resultados <br />
                            <span className="text-[var(--green-bull)]">Reais</span>
                        </h3>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="text-xl text-[var(--white-60)]">
                            Vou te ensinar a ter resultados como esses no seu dia a dia operacional. Sem setups mágicos ou indicadores milagrosos. Conheça a leitura de Price Action que transformou a vida de milhares de alunos.
                        </p>
                    </FadeIn>
                </div>

                {/* Grid de resultados tipo Masonry sem grayscale inicial */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    {images.map((src, i) => (
                        <FadeIn key={i} delay={0.1 * (i % 3)} className="break-inside-avoid">
                            <div className="relative rounded-2xl overflow-hidden border border-[var(--white-10)] bg-[var(--dark-elevated)] group hover:border-[var(--green-bull)]/50 hover:shadow-[0_0_40px_rgba(0,191,99,0.15)] transition-all duration-500">
                                <img
                                    src={src}
                                    alt={`Resultado do aluno ${i + 1}`}
                                    className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:scale-[1.03]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-end p-6">
                                    <span className="text-[var(--green-bull)] font-display font-bold uppercase tracking-widest text-xs">
                                        Operação Validada
                                    </span>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
