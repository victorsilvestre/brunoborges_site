"use client";

import { FadeIn } from "../../components/FadeIn";
import { ArrowRight, Send } from "lucide-react";

export function HowToParticipate() {
    return (
        <section className="py-24 bg-[var(--dark-base)] relative overflow-hidden border-b border-[var(--white-10)]">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <FadeIn>
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-8" style={{ background: 'var(--red-dim)', border: '1px solid var(--red-border)' }}>
                        <Send className="w-8 h-8" style={{ color: 'var(--red-pure)' }} />
                    </div>
                </FadeIn>

                <FadeIn delay={0.1}>
                    <h2 className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-white uppercase leading-[0.9] tracking-tighter mb-8 drop-shadow-md">
                        Como <br />
                        <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, var(--red-pure), var(--red-hover))' }}>Participar?</span>
                    </h2>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <p className="text-xl md:text-2xl text-[var(--white-80)] max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                        Para receber os links das aulas, basta entrar no nosso <strong className="text-white">grupo exclusivo da Maratona Trader de Sucesso</strong>.
                        <br />
                        <br />
                        Você será avisado sobre cada aula e terá acesso a conteúdos bônus liberados durante o evento.
                    </p>
                </FadeIn>

                <FadeIn delay={0.3}>
                    <div className="flex justify-center">
                        <a href="https://t.me/+7OFz4IzbCLQ5MDhh" target="_blank" rel="noopener noreferrer" className="btn text-white group relative overflow-hidden py-5 px-10 text-lg sm:w-auto flex items-center justify-center rounded-sm transition-all" style={{ background: 'var(--red-pure)', boxShadow: '0 0 30px var(--red-dim)' }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--red-hover)'; (e.currentTarget as HTMLElement).style.boxShadow = 'var(--glow-red)'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--red-pure)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px var(--red-dim)'; }}>
                            <span className="relative z-10 flex items-center gap-3 font-display font-bold uppercase tracking-wider">
                                Quero Participar! <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </a>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
