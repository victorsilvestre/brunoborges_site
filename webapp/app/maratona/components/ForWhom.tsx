"use client";

import { FadeIn } from "../../components/FadeIn";
import { TrendingUp, Compass, ArrowRight } from "lucide-react";

const profiles = [
    {
        icon: Compass,
        tag: "Iniciante",
        title: "Você está começando agora",
        description: "Já tentou entender o mercado mas sente que falta uma base sólida? Na Maratona, você vai aprender a leitura do gráfico do jeito certo — do zero, sem pressupor nenhum conhecimento anterior. Sem atalhos que não funcionam. Sem linguagem complicada que afasta mais do que ensina. Sem indicadores milagrosos.",
    },
    {
        icon: TrendingUp,
        tag: "Intermediário",
        title: "Você já opera, mas ainda não é consistente",
        description: "Conhece os conceitos, fez alguns cursos, mas na hora de operar ainda erra mais do que gostaria e não consegue fechar positivo no mês. A Maratona vai ajudar você a identificar o que está quebrando o seu operacional — seja leitura de contexto, gestão de risco ou disciplina na execução das operações. Não é sobre aprender mais conteúdo. É sobre aplicar o que já sabe de forma mais precisa.",
    },
];

export function ForWhom() {
    return (
        <section className="py-24 bg-[var(--dark-pure)] relative overflow-hidden border-b border-[var(--white-10)]">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] blur-[120px] rounded-full pointer-events-none" style={{ background: 'var(--green-dim)' }} />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <FadeIn>
                    <div className="mb-14 text-center">
                        <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-[var(--green-pure)] block mb-4">
                            Público do Evento
                        </span>
                        <h2 className="font-display font-black text-5xl md:text-7xl text-white uppercase leading-[0.9] tracking-tighter">
                            Esta Maratona <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--green-pure)] to-[var(--green-dark)]">é para você?</span>
                        </h2>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {profiles.map((profile, i) => {
                        const Icon = profile.icon;
                        return (
                            <FadeIn key={i} delay={0.1 + i * 0.15}>
                                <div className="relative p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/8 hover:border-[var(--green-border)] transition-all duration-300 h-full">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style={{ background: 'var(--green-dim)', border: '1px solid var(--green-border)' }}>
                                            <Icon className="w-6 h-6" style={{ color: 'var(--green-pure)' }} />
                                        </div>
                                        <span className="text-[10px] font-bold tracking-[0.3em] uppercase px-3 py-1 rounded-full" style={{ background: 'var(--green-dim)', color: 'var(--green-pure)' }}>
                                            {profile.tag}
                                        </span>
                                    </div>
                                    <h3 className="font-display font-black text-2xl text-white uppercase leading-tight tracking-tight mb-4">
                                        {profile.title}
                                    </h3>
                                    <p className="text-[var(--white-60)] text-base font-light leading-relaxed">
                                        {profile.description}
                                    </p>
                                </div>
                            </FadeIn>
                        );
                    })}
                </div>

                <FadeIn delay={0.4}>
                    <div className="flex justify-center mt-12">
                        <a href="/maratona-grupo" className="text-white py-3 px-7 text-base flex items-center justify-center gap-2 rounded-xl transition-all hover:-translate-y-1" style={{ background: 'var(--green-pure)', boxShadow: '0 8px 20px var(--green-dim)' }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--green-dark)'; (e.currentTarget as HTMLElement).style.boxShadow = 'var(--glow-green)'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--green-pure)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 20px var(--green-dim)'; }}>
                            <span className="font-bold">Entrar no Grupo Exclusivo</span>
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
