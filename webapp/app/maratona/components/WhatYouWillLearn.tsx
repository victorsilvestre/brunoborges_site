"use client";

import { FadeIn } from "../../components/FadeIn";
import { BookOpenCheck, ShieldCheck, LineChart, Star, Video, FileText, Zap, Trophy } from "lucide-react";

export function WhatYouWillLearn() {
    const topics = [
        {
            title: "Price Action",
            description: "Conceitos essenciais de Price Action e leitura de mercado",
            icon: LineChart,
            colSpan: "md:col-span-2 lg:col-span-1",
        },
        {
            title: "Gerenciamento",
            description: "Técnicas de Gerenciamento de Risco utilizadas por mim",
            icon: ShieldCheck,
            colSpan: "col-span-1",
        },
        {
            title: "Estratégias",
            description: "Estratégias aplicadas a qualquer ativo do mercado financeiro",
            icon: BookOpenCheck,
            colSpan: "col-span-1",
        },
        {
            title: "Muito Mais",
            description: "Conteúdo exclusivo diretamente da Mentoria Trader de Sucesso",
            icon: Star,
            colSpan: "md:col-span-1 lg:col-span-1",
        }
    ];

    return (
        <section className="py-24 bg-[var(--light-base)] relative overflow-hidden border-y border-slate-200">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

            {/* Ambient glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] blur-[120px] rounded-full pointer-events-none" style={{ background: 'var(--red-dim)' }} />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <FadeIn>
                    <div className="flex flex-col md:items-center text-center justify-center mb-14 gap-4">
                        <span className="font-bold tracking-widest uppercase text-sm mb-2" style={{ color: 'var(--red-pure)' }}>Conteúdo Programático</span>
                        <h2 className="font-display font-black text-5xl md:text-7xl text-[var(--dark-pure)] uppercase leading-[0.9] tracking-tighter">
                            O que você vai <br />
                            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, var(--green-pure), var(--green-dark))' }}>Aprender</span>
                        </h2>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {topics.map((topic, i) => {
                        const Icon = topic.icon;
                        return (
                            <FadeIn key={i} delay={0.1 + i * 0.1} className={`h-full ${topic.colSpan}`}>
                                <div className="relative h-full p-8 rounded-3xl overflow-hidden group transition-all duration-500 border border-slate-200 bg-white hover:border-[var(--green-border)] hover:shadow-[0_10px_40px_rgba(0,191,99,0.08)]">
                                    <div className="w-16 h-16 rounded-2xl bg-[var(--light-surface)] border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[var(--green-dim)] group-hover:border-[var(--green-border)] transition-all duration-500">
                                        <Icon className="w-8 h-8 text-[var(--dark-pure)] group-hover:text-[var(--green-pure)] transition-colors duration-500" />
                                    </div>
                                    <h3 className="font-display font-bold text-1xl md:text-2xl text-[var(--dark-pure)] mb-3 tracking-wide">
                                        {topic.title}
                                    </h3>
                                    <p className="text-[var(--dark-medium)] font-light leading-relaxed mt-auto text-base">
                                        {topic.description}
                                    </p>
                                </div>
                            </FadeIn>
                        );
                    })}
                </div>

                {/* Benefícios exclusivos */}
                <FadeIn delay={0.5}>
                    <div className="mt-10 rounded-3xl border border-slate-200 bg-white overflow-hidden">
                        <div className="px-8 py-5 border-b border-slate-100 flex items-center gap-3">
                            <span className="text-[10px] font-bold tracking-[0.3em] uppercase" style={{ color: 'var(--red-pure)' }}>
                                Benefícios Exclusivos
                            </span>
                            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--red-pure)' }} />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
                            {[
                                {
                                    icon: Video,
                                    title: "Gravação das Aulas",
                                    description: "Assista às aulas no seu tempo, reveja os pontos mais importantes e acompanhe toda a maratona sem perder nenhum detalhe.",
                                },
                                {
                                    icon: FileText,
                                    title: "Material Complementar: Resumão",
                                    description: "Receba o resumo estratégico de cada aula para acelerar seu aprendizado e facilitar a aplicação do conteúdo.",
                                },
                                {
                                    icon: Zap,
                                    title: "Aula Bônus ao Vivo",
                                    description: "Uma aula exclusiva com operacional na prática, ao vivo, trazendo visão real de mercado e execução comentada.",
                                },
                                {
                                    icon: Trophy,
                                    title: "Sorteio de 1 Vaga na Mentoria",
                                    description: "Participe da maratona e concorra a uma vaga na próxima Mentoria Trader de Sucesso.",
                                },
                            ].map((benefit, i) => {
                                const Icon = benefit.icon;
                                return (
                                    <div key={i} className="flex items-start gap-4 px-8 py-6 group">
                                        <div className="w-10 h-10 rounded-xl bg-[var(--light-surface)] border border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-[var(--green-dim)] group-hover:border-[var(--green-border)] transition-all duration-300">
                                            <Icon className="w-5 h-5 text-[var(--dark-pure)] group-hover:text-[var(--green-pure)] transition-colors duration-300" />
                                        </div>
                                        <div>
                                            <p className="font-display font-bold text-sm text-[var(--dark-pure)] uppercase tracking-wide mb-1">{benefit.title}</p>
                                            <p className="text-[var(--dark-medium)] text-sm font-light leading-relaxed">{benefit.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
