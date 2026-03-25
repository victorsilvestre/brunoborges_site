"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "./FadeIn";

export function Hero() {
    return (
        <section className="relative min-h-[95vh] lg:min-h-screen flex items-center overflow-hidden pt-20 border-b border-[var(--white-10)]">

            {/* Premium Background Diagram */}
            <div className="absolute inset-0 z-0 bg-black">
                <img
                    src="/hero_trader_setup.png"
                    alt="Trader Setup Background"
                    // mantendo o object-position focado no trader e subindo o eixo Y (25%) para revelar a parte superior da imagem.
                    className="w-full h-full object-cover object-[75%_63%] opacity-[0.45] grayscale-[20%] scale-105"
                />

                {/* Advanced Gradients - Protege o texto na esquerda reforçando o fade suave */}
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--dark-base)] via-[var(--dark-base)]/80 to-transparent opacity-95" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark-base)] via-[var(--dark-base)]/20 to-transparent opacity-70" />

                {/* Decorative Premium Orbs */}
                <div className="absolute top-1/4 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-[var(--green-bull)] opacity-[0.08] blur-[150px]" />
                <div className="absolute bottom-0 left-0 w-[800px] h-[800px] rounded-full bg-[var(--gold-premium)] opacity-[0.04] blur-[150px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full mb-10">
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    <div className="lg:col-span-9 xl:col-span-10 max-w-4xl">
                        <FadeIn>
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[var(--white-10)] bg-black/50 backdrop-blur-md mb-8">
                                <span className="w-2 h-2 rounded-full bg-[var(--green-bull)] shadow-[var(--glow-green)] animate-pulse" />
                                <span className="text-xs font-bold tracking-widest uppercase text-white/80">Mentoria TDS</span>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <h1 className="font-display font-black text-6xl md:text-[85px] lg:text-[110px] xl:text-[120px] leading-[0.85] uppercase tracking-tighter mb-4 md:mb-6 text-white shadow-black/50 drop-shadow-2xl">
                                Aprenda o <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--white)] to-[var(--white-40)]">Método que</span><br />
                                <span className="text-[var(--gold-premium)] drop-shadow-lg">Mais Forma</span>
                            </h1>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <span className="font-script text-5xl md:text-7xl text-[var(--green-bull)] block -mt-4 mb-6 md:mb-8 origin-left -rotate-1 drop-shadow-md">
                                Traders Consistentes!
                            </span>
                        </FadeIn>

                        <FadeIn delay={0.25}>
                            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[var(--green-bull)]/30 bg-[var(--green-bull)]/10 backdrop-blur-md mb-10 md:mb-12">
                                <span className="w-2 h-2 rounded-full bg-[var(--green-bull)] animate-pulse" />
                                <span className="text-lg md:text-xl font-bold tracking-wider uppercase text-[var(--green-bull)] italic">Próxima Turma: 15/04/26</span>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <p className="text-xl md:text-2xl text-[var(--white-80)] max-w-3xl mb-12 font-light leading-relaxed drop-shadow-md">
                                Se você quer evoluir no day trade, entender o Price Action de verdade e parar de devolver dinheiro para o mercado, a <strong className="text-white font-semibold">Mentoria Trader de Sucesso</strong> é o caminho certo.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.4}>
                            <div className="flex flex-col sm:flex-row gap-6">
                                <a href="https://t.me/+MSL99oO7pmcyMWQx" target="_blank" rel="noopener noreferrer" className="btn btn-green group relative overflow-hidden py-5 px-10 text-lg w-full sm:w-auto flex items-center justify-center shadow-[0_0_30px_rgba(0,255,136,0.3)] hover:shadow-[0_0_50px_rgba(0,255,136,0.5)] transition-shadow">
                                    <span className="relative z-10 flex items-center gap-3 font-display font-bold uppercase tracking-wider">
                                        Garantir Minha Vaga <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                </a>
                                <a href="#about" className="btn btn-outline-white backdrop-blur-md bg-black/30 hover:bg-white/10 py-5 px-10 text-lg w-full sm:w-auto flex items-center justify-center font-display font-bold uppercase tracking-wider">
                                    Conhecer o Método
                                </a>
                            </div>
                        </FadeIn>
                    </div>

                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 z-20"
            >
                <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-white">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
            </motion.div>
        </section>
    );
}
