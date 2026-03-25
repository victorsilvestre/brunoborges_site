"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { FadeIn } from "./FadeIn";

export function HeroManifesto() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Video/Image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black">
                    {/* Placeholder for hero image - can be replaced with video */}
                    <div className="w-full h-full bg-gradient-to-br from-[var(--dark-base)] via-[var(--dark-surface)] to-black opacity-90" />

                    {/* Premium Overlays */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-60" />

                    {/* Decorative Elements */}
                    <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-[var(--gold-premium)] opacity-[0.06] blur-[150px]" />
                    <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[var(--green-bull)] opacity-[0.05] blur-[140px]" />
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
                <FadeIn delay={0.2}>
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="mb-12"
                    >
                        <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] uppercase tracking-tighter mb-8 text-white">
                            O Mercado <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold-premium)] via-[var(--gold-hover)] to-[var(--gold-premium)] animate-gradient">
                                Recompensa
                            </span>
                            <br />
                            a Disciplina
                        </h1>
                    </motion.div>
                </FadeIn>

                <FadeIn delay={0.4}>
                    <p className="text-2xl md:text-3xl lg:text-4xl text-[var(--white-60)] font-light max-w-4xl mx-auto mb-4 leading-relaxed">
                        Eu te mostro o caminho.
                    </p>
                </FadeIn>

                <FadeIn delay={0.6}>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-16">
                        <a
                            href="#metodologia"
                            className="btn btn-gold group px-12 py-6 text-lg shadow-[0_0_40px_rgba(212,175,55,0.3)] hover:shadow-[0_0_60px_rgba(212,175,55,0.5)] transition-all"
                        >
                            <span className="font-display font-black uppercase tracking-wider">
                                Conhecer Metodologia
                            </span>
                        </a>
                        <a
                            href="#biografia"
                            className="btn btn-outline-white backdrop-blur-md bg-black/30 hover:bg-white/10 px-12 py-6 text-lg font-display font-bold uppercase tracking-wider"
                        >
                            Quem Sou Eu
                        </a>
                    </div>
                </FadeIn>
            </div>

            {/* Scroll Indicator */}
            <motion.a
                href="#biografia"
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-opacity z-20 cursor-pointer"
            >
                <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-white">Descobrir</span>
                <ArrowDown className="w-5 h-5 text-white" />
            </motion.a>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--dark-base)] to-transparent z-10" />
        </section>
    );
}
