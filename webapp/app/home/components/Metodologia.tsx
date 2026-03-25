"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";
import { FadeIn } from "./FadeIn";

const setups = [
    {
        name: "Leônidas",
        description: "Padrão de reversão agressivo com confirmação de volume"
    },
    {
        name: "Responsivo",
        description: "Entrada rápida em suportes e resistências testadas"
    },
    {
        name: "Irresponsável",
        description: "Alta probabilidade em rompimentos fortes com momentum"
    },
    {
        name: "Tetra (4 Candles)",
        description: "Sequência precisa de 4 candles para entrada segura"
    },
    {
        name: "Cruzamento de Fibo",
        description: "Confluência de fibonacci para zonas de alta precisão"
    },
    {
        name: "Insano",
        description: "Padrão extremo para movimentos de alta volatilidade"
    },
    {
        name: "Teimoso",
        description: "Entrada em topos/fundos com rejeição clara"
    },
    {
        name: "Preguiçoso",
        description: "Setup de swing trade para quem tem menos tempo"
    }
];

export function Metodologia() {
    return (
        <section id="metodologia" className="relative py-32 lg:py-40 bg-[var(--dark-base)] overflow-hidden border-t border-[var(--white-10)]">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[var(--gold-premium)]/8 blur-[150px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--green-bull)]/6 blur-[140px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <FadeIn>
                        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[var(--gold-premium)]/30 bg-[var(--gold-premium)]/10 backdrop-blur-md mb-8">
                            <Sparkles className="w-4 h-4 text-[var(--gold-premium)]" />
                            <span className="text-xs font-bold tracking-widest uppercase text-[var(--gold-premium)]">A Metodologia</span>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <h2 className="font-display font-black text-5xl md:text-6xl lg:text-7xl xl:text-8xl uppercase leading-[0.9] tracking-tighter text-white mb-8">
                            Setups{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold-premium)] to-[var(--gold-hover)]">
                                Autorais
                            </span>
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <p className="text-xl lg:text-2xl text-[var(--white-60)] font-light leading-relaxed">
                            Padrões criados após anos de estudo e backtest. <br />
                            <strong className="text-white font-semibold">Testados e validados</strong> por milhares de alunos
                            diariamente.
                        </p>
                    </FadeIn>
                </div>

                {/* Setups Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {setups.map((setup, idx) => (
                        <FadeIn key={idx} delay={0.1 * idx}>
                            <motion.div
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="group relative bg-[var(--dark-surface)] border border-[var(--white-10)] rounded-2xl p-6 overflow-hidden transition-all hover:border-[var(--gold-premium)]/40 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]"
                            >
                                {/* Gradient Overlay on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold-premium)]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className="w-12 h-12 rounded-xl bg-[var(--gold-premium)]/10 flex items-center justify-center mb-4 group-hover:bg-[var(--gold-premium)]/20 transition-colors">
                                        <CheckCircle2 className="w-6 h-6 text-[var(--gold-premium)]" />
                                    </div>

                                    {/* Setup Name */}
                                    <h3 className="font-display font-bold text-xl uppercase text-white mb-3 group-hover:text-[var(--gold-premium)] transition-colors">
                                        {setup.name}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-[var(--white-60)] leading-relaxed">{setup.description}</p>
                                </div>

                                {/* Number Badge */}
                                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[var(--gold-premium)]/10 flex items-center justify-center">
                                    <span className="text-xs font-bold text-[var(--gold-premium)]">{String(idx + 1).padStart(2, "0")}</span>
                                </div>
                            </motion.div>
                        </FadeIn>
                    ))}
                </div>

                {/* Bottom Content */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mt-20">
                    {/* Left: Authority Statement */}
                    <FadeIn delay={0.3}>
                        <div className="space-y-6">
                            <h3 className="font-display font-black text-4xl lg:text-5xl uppercase leading-tight text-white">
                                Acelere Seu <span className="text-[var(--gold-premium)]">Aprendizado</span>
                            </h3>

                            <p className="text-lg text-[var(--white-60)] leading-relaxed">
                                Cada setup foi desenvolvido para identificar{" "}
                                <strong className="text-white font-semibold">oportunidades de alta probabilidade</strong> no mercado.
                                Você não precisa descobrir sozinho — eu já fiz isso por você.
                            </p>

                            <ul className="space-y-4">
                                {[
                                    "Validados com anos de backtest",
                                    "Aplicáveis em qualquer ativo",
                                    "Ensinados passo a passo na Mentoria TDS",
                                    "Usados diariamente nas lives às 5h"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[var(--green-bull)] flex-shrink-0" />
                                        <span className="text-[var(--white-80)]">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </FadeIn>

                    {/* Right: Visual Element */}
                    <FadeIn delay={0.4}>
                        <div className="relative">
                            <div className="relative aspect-square bg-gradient-to-br from-[var(--dark-elevated)] to-[var(--dark-surface)] border border-[var(--white-20)] rounded-3xl p-8 overflow-hidden">
                                {/* Decorative Elements */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold-premium)]/10 via-transparent to-transparent" />

                                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                                    <div className="mb-6">
                                        <span className="font-display font-black text-7xl lg:text-8xl text-[var(--gold-premium)] leading-none block">
                                            10+
                                        </span>
                                        <span className="text-sm uppercase tracking-wider text-[var(--white-40)] font-bold mt-2 block">
                                            Setups Exclusivos
                                        </span>
                                    </div>

                                    <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[var(--gold-premium)] to-transparent mb-6" />

                                    <p className="text-lg text-[var(--white-60)] max-w-xs leading-relaxed">
                                        Criados e aperfeiçoados ao longo de{" "}
                                        <strong className="text-white font-semibold">5+ anos</strong> de mercado
                                    </p>
                                </div>

                                {/* Animated Ring */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                                    className="absolute inset-8 border-2 border-dashed border-[var(--gold-premium)]/20 rounded-full"
                                />
                            </div>
                        </div>
                    </FadeIn>
                </div>

                {/* CTA */}
                <FadeIn delay={0.5}>
                    <div className="text-center mt-16">
                        <a
                            href="#mentorias"
                            className="inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-[var(--gold-premium)] text-black font-display font-black uppercase tracking-wider hover:bg-[var(--gold-hover)] transition-all hover:shadow-[var(--glow-gold)] hover:scale-105 text-lg"
                        >
                            Aprender os Setups
                        </a>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
