"use client";

import {
    BookOpen,
    Brain,
    ChevronRight,
    Globe,
    Layers,
    LineChart,
    Shield,
    Target,
    TrendingUp,
    Zap,
} from "lucide-react";
import Link from "next/link";
import { FadeIn } from "../../components/FadeIn";

const sections = [
    { num: "01", name: "Operacional Limpo", icon: LineChart },
    { num: "02", name: "Fibonacci Descomplicada", icon: Layers },
    { num: "03", name: "Pontos de Parada", icon: Target },
    { num: "04", name: "Setups Autorais", icon: Zap },
    { num: "05", name: "Scalps Certeiros", icon: TrendingUp },
    { num: "06", name: "Gestão de Risco", icon: Shield },
    { num: "07", name: "Contexto de Mercado", icon: Globe },
    { num: "08", name: "Comportamento Emocional", icon: Brain },
];

export function MetodologiaTeaser() {
    return (
        <section
            id="metodologia"
            className="relative py-24 lg:py-32 bg-[var(--dark-base)] overflow-hidden border-t border-[var(--white-10)]"
        >
            {/* Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--green-bull)]/6 blur-[150px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--green-bull)]/5 blur-[140px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <FadeIn>
                        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[var(--green-border)] bg-[var(--green-dim)] backdrop-blur-md mb-8">
                            <BookOpen className="w-4 h-4 text-[var(--green-bull)]" />
                            <span className="text-xs font-bold tracking-widest uppercase text-[var(--green-bull)]">
                                A Metodologia
                            </span>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <h2 className="font-display font-black text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.9] tracking-tighter text-white mb-6">
                            Trader de{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--green-dark)] to-[var(--green-bull)]">
                                Sucesso
                            </span>
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <p className="text-lg lg:text-xl text-[var(--white-40)] font-light leading-relaxed">
                            Um método completo e validado por milhares de alunos. Do operacional limpo à gestão de risco consciente — 8 pilares que formam o trader profissional.
                        </p>
                    </FadeIn>
                </div>

                {/* Grid dos 8 pilares */}
                <FadeIn delay={0.1}>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                        {sections.map(({ num, name, icon: Icon }, idx) => (
                            <div
                                key={idx}
                                className="group bg-[var(--dark-surface)] border border-[var(--white-10)] rounded-2xl p-6 hover:border-[var(--green-border)] hover:shadow-[0_0_30px_rgba(0,191,99,0.08)] transition-all"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-xs font-black tracking-[0.2em] text-[var(--green-bull)]">{num}</span>
                                    <div className="h-px flex-1 bg-[var(--green-bull)]/15" />
                                    <Icon className="w-4 h-4 text-[var(--green-bull)]" />
                                </div>
                                <p className="font-display font-bold text-sm uppercase text-white group-hover:text-[var(--green-bull)] transition-colors leading-tight">
                                    {name}
                                </p>
                            </div>
                        ))}
                    </div>
                </FadeIn>

                {/* CTA */}
                <FadeIn delay={0.3}>
                    <div className="text-center">
                        <Link
                            href="/metodologia"
                            className="inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-[var(--green-bull)] text-white font-display font-black uppercase tracking-wider hover:bg-[var(--green-dark)] transition-all hover:shadow-[var(--glow-green)] hover:scale-105 text-lg"
                        >
                            Conhecer a Metodologia Completa
                            <ChevronRight className="w-5 h-5" />
                        </Link>
                    </div>
                </FadeIn>

            </div>
        </section>
    );
}
