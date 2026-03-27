"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";

export function Differentiators() {
    const diffs = [
        { num: "1.", label: "Conteúdo Prático & Denso", text: "Mais de +100h de conteúdo, guiando do básico ao Price Action purista. Assista a 25 aulas que moldarão sua nova visão de mercado." },
        { num: "2.", label: "Mentoria de Elite Direta", text: "Sem suportes terceirizados. Tira-dúvidas exclusivo pelo Telegram e WhatsApp DIRETAMENTE com BRUNO." },
        { num: "3.", label: "60 Dias de Fogo", text: "Foco integral operando junto com o Mentor, entendendo as armadilhas e as movimentações do mercado ao vivo da forma certa e profissional." },
        { num: "4.", label: "Bônus Operacional", text: "Você não estará sozinho. Nossos alunos operam juntos aos sábados, solidificando o aprendizado com quem de fato está no campo de batalha." },
        { num: "5.", label: "Acesso Vitalício", text: "Seu acesso a todo o conteúdo é liberado permanentemente. Sem restrições, pondendo rever aulas, operações e materiais sempre que necessário." },
        { num: "6.", label: "Apenas 100 Vagas", text: "Turma intencionalmente reduzida para manter a qualidade do acompanhamento individual 1x1 em alta performance." },
    ];

    return (
        <section className="py-32 bg-[var(--light-base)] border-y border-slate-200">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <div className="max-w-3xl">
                        <FadeIn>
                            <h2 className="text-[var(--dark-medium)] font-bold text-sm tracking-[0.2em] uppercase mb-4">
                                Diferenciais
                            </h2>
                        </FadeIn>
                        <FadeIn delay={0.1}>
                            <h3 className="font-display font-black text-5xl md:text-7xl text-[var(--dark-pure)] uppercase leading-[0.9] tracking-tighter">
                                Por que a Mentoria TDS<br />
                                <span className="text-[var(--green-bull)]">é diferente?</span>
                            </h3>
                        </FadeIn>
                    </div>
                </div>

                {/* List Layout with rich text */}
                <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                    {diffs.map((d, i) => (
                        <FadeIn
                            key={i}
                            delay={i * 0.1}
                            className="relative group flex flex-col md:flex-row gap-6 lg:gap-8 items-start pb-12 border-b border-slate-200"
                        >
                            <div className="font-script text-5xl md:text-6xl text-[var(--green-dark)] shrink-0">
                                {d.num}
                            </div>

                            <div>
                                <h4 className="font-display font-black text-2xl text-[var(--dark-pure)] uppercase mb-4 tracking-tight group-hover:text-[var(--green-bull)] transition-colors">
                                    {d.label}
                                </h4>
                                <p className="text-[var(--dark-medium)] font-medium text-lg leading-relaxed">
                                    {d.text}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
                <FadeIn delay={0.2} className="w-full md:w-auto shrink-0">
                    <a
                        href="https://t.me/+MSL99oO7pmcyMWQx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-[var(--green-bull)] text-white font-display font-bold uppercase tracking-wider hover:scale-105 transition-all duration-300 shadow-[0_4px_20px_rgba(0,191,99,0.30)] hover:shadow-[0_4px_30px_rgba(0,191,99,0.50)] w-fit mx-auto mt-10"
                    >
                        Quero Fazer Parte
                    </a>
                </FadeIn>
            </div>
        </section>
    );
}
