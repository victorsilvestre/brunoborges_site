"use client";

import { FadeIn } from "./FadeIn";
import { Target, MessageCircle, BarChart3, Users, Award, Zap, Crosshair, ShieldCheck } from "lucide-react";

const reasons = [
    { title: "Universal", text: "Funciona em qualquer ativo, mercado e tempo gráfico. Você aprende a ler o preço, não depender de cenário específico.", icon: BarChart3, colSpan: "md:col-span-2 lg:col-span-2", bg: "bg-gradient-to-br from-white to-[var(--light-elevated)]", border: "border-slate-200", glow: "group-hover:shadow-[0_0_40px_rgba(16,185,129,0.1)]" },
    { title: "Suporte", text: "Dúvida não fica acumulada. Você tem suporte para ajustar sua leitura e evoluir com consistência.", icon: MessageCircle, colSpan: "col-span-1", bg: "bg-white", border: "border-slate-200", glow: "group-hover:shadow-[0_4px_30px_rgba(0,0,0,0.05)]" },
    { title: "Validado", text: "Método aplicado diariamente em conta real. Nada de teoria solta — é prática de mercado.", icon: ShieldCheck, colSpan: "col-span-1", bg: "bg-white", border: "border-slate-200", glow: "group-hover:shadow-[0_4px_30px_rgba(0,0,0,0.05)]" },
    { title: "Resultados Reais", text: "Alunos evoluindo na leitura e construindo consistência. Resultado vem como consequência do processo bem executado.", icon: Target, colSpan: "col-span-1 lg:col-span-2", bg: "bg-gradient-to-br from-[var(--light-base)] to-white", border: "border-[var(--green-bull)]/20 lg:border-slate-200", glow: "group-hover:shadow-[0_0_40px_rgba(16,185,129,0.1)]" },
    { title: "Mesas Proprietárias", text: "Alto índice de alunos aprovados em mesas proprietárias. Preparação alinhada com o que o mercado exige de verdade.", icon: Award, colSpan: "md:col-span-2 lg:col-span-2", bg: "bg-gradient-to-tr from-[var(--gold-premium)]/5 to-transparent bg-white", border: "border-[var(--gold-premium)]/20", glow: "group-hover:shadow-[0_0_40px_rgba(212,175,55,0.15)]" },
    { title: "Prático", text: "Direto ao ponto, sem excesso de teoria. Você aprende o que realmente precisa para operar.", icon: Zap, colSpan: "col-span-1", bg: "bg-[var(--light-surface)]", border: "border-slate-200", glow: "group-hover:shadow-[0_4px_30px_rgba(0,0,0,0.05)]" },
    { title: "Acesso", text: "Contato direto comigo para ajustar sua visão de mercado. Correção de rota rápida, sem achismo.", icon: Crosshair, colSpan: "col-span-1", bg: "bg-[var(--light-surface)]", border: "border-slate-200", glow: "group-hover:shadow-[0_4px_30px_rgba(0,0,0,0.05)]" },
    { title: "Acompanhamento", text: "Acompanhamento diário no grupo exclusivo. Bastidores, análises e direcionamento contínuo.", icon: Users, colSpan: "md:col-span-2 lg:col-span-2", bg: "bg-gradient-to-bl from-[var(--light-surface)] to-[var(--light-base)]", border: "border-slate-200", glow: "group-hover:shadow-[0_0_40px_rgba(16,185,129,0.1)]" }
];

export function WhyTDSIsDifferent() {
    return (
        <section className="py-32 bg-[var(--light-base)] relative overflow-hidden border-y border-slate-200">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--green-bull)]/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <FadeIn>
                    <div className="flex flex-col md:items-center text-center justify-center mb-24 gap-6">
                        <h2 className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-[var(--dark-pure)] uppercase leading-[0.9] tracking-tighter">
                            Por que o
                            <br />
                            <span className="font-black bg-clip-text text-[var(--dark-pure)]">Time TDS</span>
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--green-bull)] to-[var(--green-bull)]">é Diferente?</span>
                        </h2>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-fr">
                    {reasons.map((reason, i) => {
                        const Icon = reason.icon;
                        return (
                            <FadeIn key={i} delay={0.1 + i * 0.05} className={`h-full ${reason.colSpan}`}>
                                <div className={`relative h-full p-8 md:p-10 rounded-3xl overflow-hidden group transition-all duration-500 border ${reason.border || 'border-slate-200'} hover:border-[var(--green-bull)]/30 ${reason.bg} ${reason.glow} shadow-sm`}>
                                    {/* Abstract background numeric */}
                                    <div className="absolute -right-6 -top-6 text-[140px] leading-none font-display font-black text-slate-900/[0.03] group-hover:text-[var(--green-bull)]/[0.05] transition-colors duration-500 pointer-events-none select-none">
                                        0{i + 1}
                                    </div>

                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[var(--green-bull)]/10 group-hover:border-[var(--green-bull)]/20 transition-all duration-500">
                                            <Icon className="w-7 h-7 text-[var(--dark-pure)] group-hover:text-[var(--green-bull)] transition-colors duration-500" />
                                        </div>
                                        <h3 className="font-display font-bold text-2xl text-[var(--dark-pure)] mb-4 uppercase tracking-wide">
                                            {reason.title}
                                        </h3>
                                        <p className="text-[var(--dark-medium)] font-medium leading-relaxed mt-auto text-lg">
                                            {reason.text}
                                        </p>
                                    </div>
                                </div>
                            </FadeIn>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
