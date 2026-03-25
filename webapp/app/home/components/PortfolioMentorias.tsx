"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Star, Award, Lock } from "lucide-react";
import { FadeIn } from "./FadeIn";
import Link from "next/link";

export function PortfolioMentorias() {
    return (
        <section id="mentorias" className="relative py-32 lg:py-40 bg-[var(--dark-base)] overflow-hidden border-t border-[var(--white-10)]">
            {/* Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-[var(--green-bull)]/8 blur-[150px] rounded-full" />
                <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[var(--gold-premium)]/8 blur-[150px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <FadeIn>
                        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[var(--gold-premium)]/30 bg-[var(--gold-premium)]/10 backdrop-blur-md mb-8">
                            <Award className="w-4 h-4 text-[var(--gold-premium)]" />
                            <span className="text-xs font-bold tracking-widest uppercase text-[var(--gold-premium)]">Mentorias</span>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <h2 className="font-display font-black text-5xl md:text-6xl lg:text-7xl xl:text-8xl uppercase leading-[0.9] tracking-tighter text-white mb-8">
                            Transforme sua{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold-premium)] to-[var(--gold-hover)]">
                                Carreira
                            </span>
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <p className="text-xl lg:text-2xl text-[var(--white-60)] font-light leading-relaxed">
                            Escolha o caminho ideal para sua evolução no mercado.
                        </p>
                    </FadeIn>
                </div>

                {/* Mentorias Grid */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                    {/* Card A: Mentoria TDS */}
                    <FadeIn delay={0.3}>
                        <motion.div
                            whileHover={{ y: -12 }}
                            className="group relative bg-gradient-to-br from-[var(--dark-elevated)] to-[var(--dark-surface)] border-2 border-[var(--green-bull)]/40 rounded-3xl p-8 lg:p-10 overflow-hidden shadow-2xl hover:shadow-[0_0_60px_rgba(16,185,129,0.3)] transition-all"
                        >
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--green-bull)]/10 via-transparent to-transparent opacity-50" />

                            {/* Badge */}
                            <div className="relative z-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--green-bull)]/20 border border-[var(--green-bull)]/40 mb-6">
                                <Star className="w-4 h-4 text-[var(--green-bull)]" fill="currentColor" />
                                <span className="text-xs font-bold tracking-widest uppercase text-[var(--green-bull)]">
                                    Produto Principal
                                </span>
                            </div>

                            <div className="relative z-10">
                                <h3 className="font-display font-black text-4xl lg:text-5xl uppercase text-white mb-4">
                                    Mentoria TDS
                                </h3>

                                <p className="text-lg text-[var(--white-60)] mb-8 leading-relaxed">
                                    O programa completo para você dominar Price Action, gerenciamento de risco e os setups autorais do
                                    zero ao profissional.
                                </p>

                                {/* Features */}
                                <ul className="space-y-4 mb-10">
                                    {[
                                        "Aulas ao vivo + gravadas",
                                        "Todos os 10+ setups autorais",
                                        "Comunidade exclusiva",
                                        "Suporte direto do Bruno",
                                        "Lives diárias às 5h (ao vivo)",
                                        "Certificado de conclusão"
                                    ].map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-[var(--green-bull)] flex-shrink-0" />
                                            <span className="text-[var(--white-80)]">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <Link
                                    href="/mentoria-tds"
                                    className="group/btn w-full flex items-center justify-center gap-3 px-8 py-5 rounded-xl bg-[var(--green-bull)] text-white font-display font-black uppercase tracking-wider hover:bg-[var(--green-hover)] transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_50px_rgba(16,185,129,0.5)]"
                                >
                                    Conhecer a Mentoria TDS
                                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            {/* Decorative Corner */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[var(--green-bull)]/20 to-transparent rounded-bl-[100px]" />
                        </motion.div>
                    </FadeIn>

                    {/* Card B: Mentoria Individual */}
                    <FadeIn delay={0.4}>
                        <motion.div
                            whileHover={{ y: -12 }}
                            className="group relative bg-gradient-to-br from-black via-[var(--dark-elevated)] to-black border-2 border-[var(--gold-premium)]/60 rounded-3xl p-8 lg:p-10 overflow-hidden shadow-2xl hover:shadow-[0_0_60px_rgba(212,175,55,0.4)] transition-all"
                        >
                            {/* Premium Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold-premium)]/15 via-transparent to-transparent" />

                            {/* Exclusive Badge */}
                            <div className="relative z-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--gold-premium)] to-[var(--gold-hover)] mb-6">
                                <Lock className="w-4 h-4 text-black" />
                                <span className="text-xs font-bold tracking-widest uppercase text-black">Exclusivo Ex-Alunos TDS</span>
                            </div>

                            <div className="relative z-10">
                                <h3 className="font-display font-black text-4xl lg:text-5xl uppercase mb-2">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold-premium)] to-[var(--gold-hover)]">
                                        Mentoria
                                    </span>
                                    <br />
                                    <span className="text-white">Individual</span>
                                </h3>

                                <p className="text-lg text-[var(--white-60)] mb-8 leading-relaxed">
                                    Acompanhamento personalizado 1:1 para quem já passou pela Mentoria TDS e quer levar suas operações
                                    ao próximo nível.
                                </p>

                                {/* Exclusive Features */}
                                <ul className="space-y-4 mb-10">
                                    {[
                                        "Sessões 1:1 com o Bruno",
                                        "Análise personalizada de trades",
                                        "Estratégias avançadas exclusivas",
                                        "Acesso prioritário a novos conteúdos",
                                        "Suporte via WhatsApp direto",
                                        "Acompanhamento de performance"
                                    ].map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-[var(--gold-premium)] flex-shrink-0" />
                                            <span className="text-[var(--white-80)]">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Premium CTA */}
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--gold-premium)] to-[var(--gold-hover)] rounded-xl blur-xl opacity-50" />
                                    <a
                                        href="https://t.me/+MSL99oO7pmcyMWQx"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/btn relative w-full flex items-center justify-center gap-3 px-8 py-5 rounded-xl bg-gradient-to-r from-[var(--gold-premium)] to-[var(--gold-hover)] text-black font-display font-black uppercase tracking-wider hover:opacity-90 transition-all"
                                    >
                                        Solicitar Acesso
                                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                    </a>
                                </div>

                                {/* Requirement Note */}
                                <div className="mt-6 p-4 rounded-xl bg-[var(--gold-premium)]/5 border border-[var(--gold-premium)]/20">
                                    <p className="text-sm text-[var(--gold-premium)] text-center">
                                        <Lock className="w-4 h-4 inline mr-2" />
                                        <strong>Requisito:</strong> Ter concluído a Mentoria TDS
                                    </p>
                                </div>
                            </div>

                            {/* Premium Corner Decoration */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[var(--gold-premium)]/30 to-transparent rounded-bl-[120px]" />

                            {/* Animated Ring */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                                className="absolute -top-20 -right-20 w-64 h-64 border-2 border-dashed border-[var(--gold-premium)]/10 rounded-full"
                            />
                        </motion.div>
                    </FadeIn>
                </div>

                {/* Bottom Note */}
                <FadeIn delay={0.5}>
                    <div className="text-center mt-16">
                        <p className="text-lg text-[var(--white-40)] max-w-2xl mx-auto">
                            Comece pela <strong className="text-white font-semibold">Mentoria TDS</strong> e construa sua base sólida.
                            A mentoria individual é o próximo passo para traders que já dominam os fundamentos.
                        </p>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
