"use client";

import { FadeIn } from "./FadeIn";
import { BookOpenCheck, ShieldCheck, LineChart, Star } from "lucide-react";

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
        <section className="py-32 bg-[var(--light-base)] relative overflow-hidden border-y border-slate-200">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

            {/* Ambient glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <FadeIn>
                    <div className="flex flex-col md:items-center text-center justify-center mb-20 gap-4">
                        <span className="text-red-600 font-bold tracking-widest uppercase text-sm mb-2">Conteúdo Programático</span>
                        <h2 className="font-display font-black text-5xl md:text-7xl text-[var(--dark-pure)] uppercase leading-[0.9] tracking-tighter">
                            O que você vai <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">Aprender</span>
                        </h2>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {topics.map((topic, i) => {
                        const Icon = topic.icon;
                        return (
                            <FadeIn key={i} delay={0.1 + i * 0.1} className={`h-full ${topic.colSpan}`}>
                                <div className="relative h-full p-8 rounded-3xl overflow-hidden group transition-all duration-500 border border-slate-200 bg-white hover:border-red-500/30 hover:shadow-[0_10px_40px_rgba(239,68,68,0.08)]">
                                    <div className="w-16 h-16 rounded-2xl bg-[var(--light-surface)] border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-red-50 transition-all duration-500">
                                        <Icon className="w-8 h-8 text-[var(--dark-pure)] group-hover:text-red-600 transition-colors duration-500" />
                                    </div>
                                    <h3 className="font-display font-bold text-1xl md:text-2xl text-[var(--dark-pure)] mb-3 tracking-wide">
                                        {topic.title}
                                    </h3>
                                    <p className="text-[var(--dark-medium)] font-medium leading-relaxed mt-auto text-lg">
                                        {topic.description}
                                    </p>
                                </div>
                            </FadeIn>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
