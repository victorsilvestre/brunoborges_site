"use client";

import { FadeIn } from "./FadeIn";
import { LineChart, BookOpen, TrendingUp } from "lucide-react";

export function AboutEvent() {
    return (
        <section id="about" className="py-24 bg-[var(--dark-pure)] relative overflow-hidden border-b border-[var(--white-10)]">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

            {/* Glowing Orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-[150px] rounded-full pointer-events-none" style={{ background: 'var(--green-dim)' }} />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-3xl">
                        <FadeIn>
                            <h2 className="text-[var(--white-20)] font-bold text-sm tracking-[0.2em] uppercase mb-4">
                                Sobre o evento
                            </h2>
                        </FadeIn>
                        <FadeIn delay={0.1}>
                            <h3 className="font-display font-black text-5xl md:text-6xl text-white uppercase leading-[0.95] tracking-tighter mb-6">
                                Transforme a sua visão de mercado <br />
                                <span className="text-[var(--green-bull)]">em lucro</span>
                            </h3>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <p className="text-lg md:text-xl text-[var(--white-60)] font-medium leading-relaxed max-w-2xl">
                                Durante 3 dias intensivos de muito aprendizado, análise técnica estruturada e insights, vou compartilhar peças valiosas do meu operacional.
                                <br />
                                <br />
                                Descubra comigo durante a Maratona Trader de Sucesso como estruturar um operacional consistente e aprimorar para sempre as suas habilidades no Day Trade.
                            </p>
                        </FadeIn>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                    <FadeIn delay={0.3}>
                        <div className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                            <LineChart className="w-10 h-10 text-[var(--green-bull)] mb-6" />
                            <h3 className="text-2xl font-display font-bold text-white mb-4 uppercase">Para Todos os Níveis</h3>
                            <p className="text-[var(--white-60)] leading-relaxed text-lg">
                                Do iniciante ao avançado. Conteúdo estruturado para você entender a lógica institucional por trás dos movimentos de preço.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <div className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                            <BookOpen className="w-10 h-10 mb-6" style={{ color: 'var(--green-bull)' }} />
                            <h3 className="text-2xl font-display font-bold text-white mb-4 uppercase">100% Prático</h3>
                            <p className="text-[var(--white-60)] leading-relaxed text-lg">
                                Esqueça teorias complicadas. O foco é te ensinar na prática aquilo que aplico todos os dias operando no mercado financeiro.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
