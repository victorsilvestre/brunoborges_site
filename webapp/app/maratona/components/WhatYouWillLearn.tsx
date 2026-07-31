"use client";

import { FadeIn } from "../../components/FadeIn";
import { BookOpenCheck, ShieldCheck, LineChart, Zap, Users, Video, FileText } from "lucide-react";

export function WhatYouWillLearn() {
    const topics = [
        {
            title: "Price Action",
            description: "Leitura pura do preço, sem indicadores. Você vai entender as obrigações de cada candle e por que o mercado se move desse jeito.",
            icon: LineChart,
            accent: true,
        },
        {
            title: "Gerenciamento",
            description: "Como proteger o seu capital e realizar as entradas. Sem gerenciamento, nenhuma estratégia funciona no longo prazo.",
            icon: ShieldCheck,
            accent: false,
        },
        {
            title: "Estratégias",
            description: "Os padrões de Price Action que eu utilizo no mercado diariamente — testados e validados em todos os ativos do mercado financeiro por milhares de alunos.",
            icon: BookOpenCheck,
            accent: false,
        },
        {
            title: "Análise ao Vivo",
            description: "Acompanhe o gráfico e as operações sendo lidos em tempo real. Ver o método sendo aplicado na prática é a forma mais direta para melhorar os seus resultados.",
            icon: Zap,
            accent: false,
        },
        {
            title: "Grupo Exclusivo",
            description: "Acesso ao grupo da Maratona no Telegram com bônus exclusivos, avisos de cada aula e conteúdos extras liberados antes, durante e após o evento.",
            icon: Users,
            accent: false,
        },
    ];

    return (
        <section className="py-24 bg-[var(--light-base)] relative overflow-hidden border-y border-slate-200">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] blur-[120px] rounded-full pointer-events-none" style={{ background: 'var(--green-dim)' }} />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <FadeIn>
                    <div className="flex flex-col md:items-center text-center justify-center mb-14 gap-4">
                        <span className="font-bold tracking-widest uppercase text-sm mb-2" style={{ color: 'var(--green-dark)' }}>Conteúdo Programático</span>
                        <h2 className="font-display font-black text-5xl md:text-7xl text-[var(--dark-pure)] uppercase leading-[0.9] tracking-tighter">
                            O que você vai <br />
                            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, var(--green-pure), var(--green-dark))' }}>Aprender</span>
                        </h2>
                    </div>
                </FadeIn>

                {/* Grid 2x2 no mobile, 5 colunas no desktop */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-6">
                    {topics.map((topic, i) => {
                        const Icon = topic.icon;
                        return (
                            <FadeIn
                                key={i}
                                delay={0.08 + i * 0.08}
                                className="h-full"
                            >
                                <div
                                    className={`relative h-full p-6 md:p-7 rounded-3xl overflow-hidden group transition-all duration-500 border ${
                                        topic.accent
                                            ? "bg-[var(--dark-pure)] border-[var(--green-border)] hover:border-[var(--green-pure)]"
                                            : "bg-white border-slate-200 hover:border-[var(--green-border)] hover:shadow-[0_10px_40px_rgba(0,191,99,0.07)]"
                                    }`}
                                >
                                    {/* Ícone maior e preenchido */}
                                    <div
                                        className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500 ${
                                            topic.accent
                                                ? "bg-[var(--green-pure)]"
                                                : "bg-[var(--light-surface)] border border-slate-100 group-hover:bg-[var(--green-dim)] group-hover:border-[var(--green-border)]"
                                        }`}
                                    >
                                        <Icon
                                            className={`w-7 h-7 md:w-8 md:h-8 transition-colors duration-500 ${
                                                topic.accent
                                                    ? "text-white"
                                                    : "text-[var(--dark-pure)] group-hover:text-[var(--green-pure)]"
                                            }`}
                                            strokeWidth={topic.accent ? 2.5 : 2}
                                        />
                                    </div>
                                    <h3
                                        className={`font-display font-bold text-lg md:text-xl mb-2 tracking-wide leading-tight ${
                                            topic.accent ? "text-white" : "text-[var(--dark-pure)]"
                                        }`}
                                    >
                                        {topic.title}
                                    </h3>
                                    <p
                                        className={`font-light leading-relaxed text-sm md:text-base ${
                                            topic.accent ? "text-[var(--white-60)]" : "text-[var(--dark-medium)]"
                                        }`}
                                    >
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
                            <span className="text-[10px] font-bold tracking-[0.3em] uppercase" style={{ color: 'var(--green-dark)' }}>
                                Benefícios Exclusivos
                            </span>
                            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--green-pure)' }} />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
                            {[
                                {
                                    icon: Video,
                                    title: "Gravação das Aulas",
                                    description: "Assista às aulas no seu tempo, reveja os pontos mais importantes e não perca nenhum detalhe.",
                                },
                                {
                                    icon: FileText,
                                    title: "Resumão de Cada Aula",
                                    description: "Receba o resumo estratégico de cada noite para acelerar o aprendizado e facilitar a aplicação.",
                                },
                                {
                                    icon: Zap,
                                    title: "Aula Bônus ao Vivo",
                                    description: "Uma aula exclusiva com operacional na prática, ao vivo, com visão real de mercado e execução comentada.",
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
