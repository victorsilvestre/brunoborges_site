"use client";

import { FadeIn } from "../../components/FadeIn";
import { ArrowRight, Trophy } from "lucide-react";

export function FinalCTA() {
    return (
        <section className="py-24 bg-[var(--dark-pure)] relative overflow-hidden border-b border-[var(--white-10)]">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

            {/* Glowing Orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] blur-[200px] rounded-full pointer-events-none" style={{ background: 'var(--green-dim)' }} />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-10">
                    <FadeIn>
                        <h2 className="text-[var(--white-50)] font-bold text-sm tracking-[0.2em] uppercase mb-4">
                            Domine o Mercado
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <h3 className="font-display font-black text-5xl md:text-7xl text-white uppercase leading-[0.9] tracking-tighter mb-6">
                            Chegou a hora do seu <span className="text-[var(--green-bull)]">sucesso no Day Trade</span>
                        </h3>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="text-base text-[var(--white-60)] font-light leading-relaxed max-w-2xl mx-auto">
                            A 15ª Maratona Trader de Sucesso será um evento 100% online e gratuito,
                            onde vou compartilhar conteúdos práticos, visão de mercado e peças valiosas do meu operacional.
                            Para garantir que você não perca nenhuma aula, entre no nosso grupo exclusivo.
                        </p>
                    </FadeIn>
                </div>

                <FadeIn delay={0.3}>
                    <div className="flex justify-center">
                        <a href="/maratona-grupo" className="btn text-white group relative overflow-hidden py-5 px-10 text-lg w-full sm:w-auto inline-flex items-center justify-center rounded-sm transition-all" style={{ background: 'var(--green-pure)', boxShadow: '0 0 40px var(--green-dim)' }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--green-dark)'; (e.currentTarget as HTMLElement).style.boxShadow = 'var(--glow-green)'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--green-pure)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 40px var(--green-dim)'; }}>
                            <span className="relative z-10 flex items-center gap-3 font-display font-bold uppercase tracking-wider">
                                Entrar no Grupo Exclusivo <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </a>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
