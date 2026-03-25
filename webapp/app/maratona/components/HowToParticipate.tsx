"use client";

import { FadeIn } from "./FadeIn";
import { ArrowRight, Send } from "lucide-react";

export function HowToParticipate() {
    return (
        <section className="py-24 bg-[var(--dark-base)] relative overflow-hidden border-b border-[var(--white-10)]">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <FadeIn>
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-600/10 border border-red-500/20 mb-8">
                        <Send className="w-8 h-8 text-red-500" />
                    </div>
                </FadeIn>

                <FadeIn delay={0.1}>
                    <h2 className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-white uppercase leading-[0.9] tracking-tighter mb-8 drop-shadow-md">
                        Como <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">Participar?</span>
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
                        <a href="https://t.me/+7OFz4IzbCLQ5MDhh" target="_blank" rel="noopener noreferrer" className="btn bg-red-600 hover:bg-red-500 text-white group relative overflow-hidden py-5 px-10 text-lg sm:w-auto flex items-center justify-center rounded-sm transition-all shadow-[0_0_30px_rgba(239,68,68,0.3)] hover:shadow-[0_0_50px_rgba(239,68,68,0.5)]">
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
