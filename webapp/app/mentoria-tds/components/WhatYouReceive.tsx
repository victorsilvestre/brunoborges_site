"use client";

import { GraduationCap, Headphones, Users, Trophy, BookOpen, Clock, BarChart2, MonitorPlay } from "lucide-react";
import { FadeIn } from "../../components/FadeIn";
import { INSCRICOES_ABERTAS } from "../config";

const HOTMART_URL = "https://pay.hotmart.com/O105700075J";

export function WhatYouReceive() {
    const benefits = [
        {
            icon: <GraduationCap className="w-8 h-8" />,
            title: "Mentoria Ao Vivo",
            badge: "virada de chave",
            description: "60 dias de aulas e acompanhamento ao vivo, 3 vezes por semana, para acelerar sua evolução e esclarecer as dúvidas do pregão diretamente com o mentor.",
            gradient: "from-[var(--green-dark)] to-[var(--green-bull)]"
        },
        {
            icon: <MonitorPlay className="w-8 h-8" />,
            title: "Sala Educacional",
            badge: "bônus",
            description: "Acompanhe o mercado ao vivo durante 30 dias com o mentor das 8h45 às 10h15 e veja na prática como aplicar os conceitos ensinados na mentoria em cenários reais diariamente.",
            gradient: "from-[var(--green-dark)] to-[var(--green-bull)]"
        },
        {
            icon: <Headphones className="w-8 h-8" />,
            title: "Suporte de Dúvidas",
            badge: "pra sempre",
            description: "Tenha acesso contínuo para esclarecer dúvidas, ajustar sua leitura de mercado e continuar evoluindo mesmo após o encerramento da mentoria.",
            gradient: "from-[var(--green-dark)] to-[var(--green-bull)]"
        },
        {
            icon: <BookOpen className="w-8 h-8" />,
            title: "Acesso Vitalício",
            badge: "pra sempre",
            description: "Revise aulas, conceitos e conteúdos quantas vezes precisar. Aprenda no seu ritmo com o conteúdo sempre disponível na nova área de membros da Mentoria TDS.",
            gradient: "from-[var(--green-dark)] to-[var(--green-bull)]"
        },
        {
            icon: <Clock className="w-8 h-8" />,
            title: "+100H de Conteúdo",
            badge: "exclusivo",
            description: "Mais de 100 horas de conteúdo organizadas do básico ao avançado para construir uma base sólida em leitura de contexto e Price Action puro, simples e fácil.",
            gradient: "from-[var(--green-dark)] to-[var(--green-bull)]"
        },
        {
            icon: <Trophy className="w-8 h-8" />,
            title: "Aulas Operacionais",
            description: "Aulas práticas aos sábados com alunos operando junto com o mentor ou aulas de análise e aprofundamento do operacional para fortalecer sua leitura e refinar sua execução na prática.",
            gradient: "from-[var(--green-dark)] to-[var(--green-bull)]"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Grupo Exclusivo",
            badge: "comunidade",
            description: "Troque experiências com os outros alunos da sua turma, compartilhe aprendizados e evolua ao lado de traders que buscam os mesmos objetivos que você.",
            gradient: "from-[var(--green-dark)] to-[var(--green-bull)]"
        },
        {
            icon: <BarChart2 className="w-8 h-8" />,
            title: "Gestão de Risco",
            badge: "exclusivo",
            description: "Ferramentas e materiais para ajudar você a desenvolver disciplina, controle emocional e uma gestão mais eficiente das suas operações.",
            gradient: "from-[var(--green-dark)] to-[var(--green-bull)]"
        }
    ];

    return (
        <section className="relative py-16 md:py-24 bg-[var(--dark-base)] overflow-hidden border-y border-[var(--white-10)]">

            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[var(--green-bull)]/5 blur-[150px] rounded-full" />
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[var(--gold-premium)]/5 blur-[150px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center mb-24 max-w-4xl mx-auto">
                    <FadeIn>
                        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[var(--green-bull)]/20 bg-[var(--green-bull)]/10 text-[var(--green-bull)] mb-8">
                            <span className="text-xs font-bold tracking-widest uppercase">Pacote Exclusivo Para 15ª Turma</span>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <h2 className="font-display font-black text-5xl md:text-7xl uppercase leading-[0.9] tracking-tighter mb-8 text-white">
                            O QUE VOCÊ <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--green-dark)] to-[var(--green-bull)]">VAI RECEBER:</span>
                        </h2>
                    </FadeIn>
                </div>

                {/* Benefits Grid — linha 1: 4 cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {benefits.slice(0, 4).map((benefit, idx) => (
                        <FadeIn key={idx} delay={0.1 * idx} direction="up">
                            <div className="relative group h-full">
                                <div className="relative h-full p-8 rounded-[2rem] border border-[var(--white-10)] bg-[var(--dark-elevated)] hover:border-[var(--white-20)] transition-all duration-500 flex flex-col">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} p-[2px] mb-6 shrink-0`}>
                                        <div className="w-full h-full rounded-[calc(1rem-2px)] bg-[var(--dark-base)] flex items-center justify-center text-white">
                                            {benefit.icon}
                                        </div>
                                    </div>
                                    {benefit.badge && (
                                        <div className="absolute top-6 right-6">
                                            <span className="px-3 py-1 rounded-full bg-[var(--green-pure)] text-white text-xs font-bold uppercase tracking-wider">
                                                {benefit.badge}
                                            </span>
                                        </div>
                                    )}
                                    <h3 className="font-display font-bold text-xl text-white uppercase mb-3 leading-tight">
                                        {benefit.title}
                                    </h3>
                                    {benefit.description && (
                                        <p className="text-[var(--white-60)] leading-snug">
                                            {benefit.description}
                                        </p>
                                    )}
                                    <div className="mt-auto pt-6">
                                        <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${benefit.gradient} opacity-60 group-hover:w-full transition-all duration-500`} />
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                {/* Benefits Grid — linha 2: 4 cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.slice(4).map((benefit, idx) => (
                        <FadeIn key={idx + 4} delay={0.1 * idx} direction="up">
                            <div className="relative group h-full">
                                <div className="relative h-full p-8 rounded-[2rem] border border-[var(--white-10)] bg-[var(--dark-elevated)] hover:border-[var(--white-20)] transition-all duration-500 flex flex-col">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} p-[2px] mb-6 shrink-0`}>
                                        <div className="w-full h-full rounded-[calc(1rem-2px)] bg-[var(--dark-base)] flex items-center justify-center text-white">
                                            {benefit.icon}
                                        </div>
                                    </div>
                                    {benefit.badge && (
                                        <div className="absolute top-6 right-6">
                                            <span className="px-3 py-1 rounded-full bg-[var(--green-pure)] text-white text-xs font-bold uppercase tracking-wider">
                                                {benefit.badge}
                                            </span>
                                        </div>
                                    )}
                                    <h3 className="font-display font-bold text-xl text-white uppercase mb-3 leading-tight">
                                        {benefit.title}
                                    </h3>
                                    {benefit.description && (
                                        <p className="text-[var(--white-60)] leading-relaxed">
                                            {benefit.description}
                                        </p>
                                    )}
                                    <div className="mt-auto pt-6">
                                        <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${benefit.gradient} opacity-60 group-hover:w-full transition-all duration-500`} />
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                {/* Bottom CTA */}
                {INSCRICOES_ABERTAS && (
                    <FadeIn delay={0.6}>
                        <div className="mt-20 text-center">
                            <a
                                href={HOTMART_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[var(--green-bull)] to-[var(--green-bull)] text-white font-display font-bold uppercase tracking-wider hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(241,20,20,0.3)]"
                            >
                                Garantir Minha Vaga
                            </a>
                        </div>
                    </FadeIn>
                )}

            </div>
        </section>
    );
}
