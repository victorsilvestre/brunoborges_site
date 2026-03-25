"use client";

import { motion } from "framer-motion";
import { Clock, Zap, Target, TrendingUp } from "lucide-react";
import { FadeIn } from "./FadeIn";

export function CaraDaMadrugada() {
    return (
        <section className="relative py-32 lg:py-40 bg-black overflow-hidden border-t border-[var(--white-10)]">
            {/* Dark Atmospheric Background */}
            <div className="absolute inset-0 z-0">
                {/* Simulating early morning atmosphere */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-black to-[#0a0a0f]" />

                {/* Subtle glows */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[var(--green-bull)]/10 to-transparent blur-[120px]" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[var(--gold-premium)]/5 blur-[150px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <FadeIn>
                        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[var(--green-bull)]/30 bg-[var(--green-bull)]/10 backdrop-blur-md mb-8">
                            <Clock className="w-4 h-4 text-[var(--green-bull)]" />
                            <span className="text-xs font-bold tracking-widest uppercase text-[var(--green-bull)]">O Diferencial</span>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <h2 className="font-display font-black text-5xl md:text-6xl lg:text-7xl xl:text-8xl uppercase leading-[0.9] tracking-tighter text-white mb-8">
                            O Cara da{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--green-bull)] to-[var(--green-hover)]">
                                Madrugada
                            </span>
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <p className="text-xl lg:text-2xl text-[var(--white-60)] font-light leading-relaxed max-w-3xl mx-auto">
                            Enquanto o mundo dorme, os comprometidos{" "}
                            <strong className="text-white font-semibold">evoluem</strong>.
                        </p>
                    </FadeIn>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
                    {/* Left: Time Display */}
                    <FadeIn delay={0.3}>
                        <div className="relative">
                            {/* Large Clock Display */}
                            <div className="relative bg-gradient-to-br from-[var(--dark-elevated)] to-[var(--dark-surface)] border border-[var(--white-20)] rounded-3xl p-12 lg:p-16 overflow-hidden">
                                {/* Glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[var(--green-bull)]/10 via-transparent to-transparent" />

                                <div className="relative z-10 text-center">
                                    <span className="font-display font-black text-8xl lg:text-9xl text-[var(--green-bull)] leading-none block mb-4">
                                        05:00
                                    </span>
                                    <span className="text-sm uppercase tracking-[0.3em] text-[var(--white-40)] font-bold">
                                        Horário das Lives
                                    </span>

                                    {/* Animated Pulse */}
                                    <motion.div
                                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[var(--green-bull)]/10 blur-3xl -z-10"
                                    />
                                </div>
                            </div>

                            {/* Decorative Quote */}
                            <div className="mt-8 text-center lg:text-left">
                                <p className="text-lg italic text-[var(--white-60)] border-l-4 border-[var(--green-bull)] pl-6 py-2">
                                    "Não importa se você tem 5 minutos ou 5 horas. <br />O que importa é o{" "}
                                    <strong className="text-white font-semibold">compromisso</strong>."
                                </p>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Right: Values */}
                    <div className="space-y-6">
                        <FadeIn delay={0.4}>
                            <div className="bg-[var(--dark-surface)] border border-[var(--white-10)] rounded-2xl p-8 hover:border-[var(--green-bull)]/30 transition-all">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-xl bg-[var(--green-bull)]/10 flex items-center justify-center flex-shrink-0">
                                        <Zap className="w-7 h-7 text-[var(--green-bull)]" />
                                    </div>
                                    <div>
                                        <h3 className="font-display font-bold text-xl uppercase text-white mb-3">
                                            Disciplina Real
                                        </h3>
                                        <p className="text-[var(--white-60)] leading-relaxed">
                                            Acordar às 5h da manhã para operação e estudo não é sobre tempo livre. É sobre{" "}
                                            <strong className="text-white">prioridade e foco</strong>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.5}>
                            <div className="bg-[var(--dark-surface)] border border-[var(--white-10)] rounded-2xl p-8 hover:border-[var(--green-bull)]/30 transition-all">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-xl bg-[var(--green-bull)]/10 flex items-center justify-center flex-shrink-0">
                                        <Target className="w-7 h-7 text-[var(--green-bull)]" />
                                    </div>
                                    <div>
                                        <h3 className="font-display font-bold text-xl uppercase text-white mb-3">
                                            Performance Acima de Tudo
                                        </h3>
                                        <p className="text-[var(--white-60)] leading-relaxed">
                                            Ensino quem tem compromisso real com resultados, independentemente do tempo disponível. O
                                            mercado não espera.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.6}>
                            <div className="bg-[var(--dark-surface)] border border-[var(--white-10)] rounded-2xl p-8 hover:border-[var(--green-bull)]/30 transition-all">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-xl bg-[var(--green-bull)]/10 flex items-center justify-center flex-shrink-0">
                                        <TrendingUp className="w-7 h-7 text-[var(--green-bull)]" />
                                    </div>
                                    <div>
                                        <h3 className="font-display font-bold text-xl uppercase text-white mb-3">
                                            Mentalidade de Trader
                                        </h3>
                                        <p className="text-[var(--white-60)] leading-relaxed">
                                            Lives ao vivo às 5h da manhã provam que trading é{" "}
                                            <strong className="text-white">estilo de vida</strong>, não hobby.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>

                {/* Bottom Stats */}
                <FadeIn delay={0.7}>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                        {[
                            { num: "5:00", label: "Horário das Lives" },
                            { num: "100%", label: "Ao Vivo" },
                            { num: "Diário", label: "Segunda a Sexta" },
                            { num: "Grátis", label: "No YouTube" }
                        ].map((stat, idx) => (
                            <div
                                key={idx}
                                className="text-center p-6 bg-[var(--dark-surface)]/50 border border-[var(--white-10)] rounded-xl backdrop-blur-sm"
                            >
                                <span className="font-display font-black text-3xl lg:text-4xl text-[var(--green-bull)] block mb-2">
                                    {stat.num}
                                </span>
                                <span className="text-xs uppercase tracking-wider text-[var(--white-40)] font-bold">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
