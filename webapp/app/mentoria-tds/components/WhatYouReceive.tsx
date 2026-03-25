"use client";

import { GraduationCap, Headphones, Users, Trophy, BookOpen, Clock } from "lucide-react";
import { FadeIn } from "./FadeIn";

export function WhatYouReceive() {
    const benefits = [
        {
            icon: <BookOpen className="w-8 h-8" />,
            title: "Acesso VITALÍCIO às aulas gravadas",
            badge: "BÔNUS",
            gradient: "from-[var(--gold-premium)] to-[var(--green-bull)]"
        },
        {
            icon: <Headphones className="w-8 h-8" />,
            title: "Suporte de Dúvidas VITALÍCIO, diretamente com o professor",
            description: "Mesmo após encerramento da Mentoria",
            badge: "BÔNUS",
            gradient: "from-[var(--green-bull)] to-[var(--gold-premium)]"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Grupo exclusivo de alunos no Telegram",
            gradient: "from-[var(--gold-premium)] to-white"
        },
        {
            icon: <GraduationCap className="w-8 h-8" />,
            title: "60 dias de mentoria AO VIVO",
            description: "3x na semana, das 19h até todas as dúvidas serem esclarecidas",
            gradient: "from-white to-[var(--green-bull)]"
        },
        {
            icon: <Trophy className="w-8 h-8" />,
            title: "Aulas operacionais aos sábados",
            description: "Alunos operando ao vivo com análise e feedback em tempo real",
            badge: "BÔNUS",
            gradient: "from-white to-[var(--gold-premium)]"
        },
        {
            icon: <Clock className="w-8 h-8" />,
            title: "+100h de conteúdo exclusivo",
            description: "Do básico ao avançado em Price Action purista",
            gradient: "from-[var(--green-bull)] to-white"
        }
    ];

    return (
        <section className="relative py-32 bg-[var(--dark-base)] overflow-hidden border-y border-[var(--white-10)]">

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
                            <span className="text-xs font-bold tracking-widest uppercase">Pacote Completo</span>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <h2 className="font-display font-black text-5xl md:text-7xl uppercase leading-[0.9] tracking-tighter mb-8 text-white">
                            O QUE VOCÊ <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[var(--green-bull)]">VAI RECEBER:</span>
                        </h2>
                    </FadeIn>
                </div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, idx) => (
                        <FadeIn key={idx} delay={0.1 * (idx % 3)} direction="up">
                            <div className="relative group h-full">
                                {/* Card */}
                                <div className="relative h-full p-8 rounded-[2rem] border border-[var(--white-10)] bg-[var(--dark-elevated)] hover:border-[var(--white-20)] transition-all duration-500 flex flex-col">

                                    {/* Icon with gradient background */}
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} p-[2px] mb-6 shrink-0`}>
                                        <div className="w-full h-full rounded-[calc(1rem-2px)] bg-[var(--dark-base)] flex items-center justify-center text-white">
                                            {benefit.icon}
                                        </div>
                                    </div>

                                    {/* Badge if exists */}
                                    {benefit.badge && (
                                        <div className="absolute top-6 right-6">
                                            <span className="px-3 py-1 rounded-full bg-[var(--gold-premium)] text-black text-xs font-bold uppercase tracking-wider">
                                                {benefit.badge}
                                            </span>
                                        </div>
                                    )}

                                    {/* Title */}
                                    <h3 className="font-display font-bold text-xl text-white uppercase mb-3 leading-tight">
                                        {benefit.title}
                                    </h3>

                                    {/* Description if exists */}
                                    {benefit.description && (
                                        <p className="text-[var(--white-60)] leading-relaxed">
                                            {benefit.description}
                                        </p>
                                    )}

                                    {/* Bottom accent line */}
                                    <div className={`mt-auto pt-6`}>
                                        <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${benefit.gradient} opacity-60 group-hover:w-full transition-all duration-500`} />
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                {/* Bottom CTA */}
                <FadeIn delay={0.6}>
                    <div className="mt-20 text-center">
                        <a
                            href="https://t.me/+MSL99oO7pmcyMWQx"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[var(--green-bull)] to-[var(--green-bull)] text-white font-display font-bold uppercase tracking-wider hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(241,20,20,0.3)]"
                        >
                            Garantir Minha Vaga
                        </a>
                    </div>
                </FadeIn>

            </div>
        </section>
    );
}
