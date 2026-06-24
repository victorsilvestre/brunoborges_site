"use client";

import { Check, ArrowRight, X, Lock } from "lucide-react";
import { FadeIn } from "../../components/FadeIn";

const HOTMART_URL = "";

const items = [
    {
        label: "60 dias de acompanhamento comigo",
        value: "R$ 1.500,00",
    },
    {
        label: "4 Setups de Price Action Autorais e Exclusivos",
        value: "R$ 1.200,00",
    },
    {
        label: "Mentorias Individuais com Alunos Antigos - Aulas de Sábado",
        value: "R$ 500,00",
    },
    {
        label: "30 dias de Sala Educacional Ao Vivo",
        value: "R$ 499,00",
    },
    {
        label: "Apostila digital do Operacional Completo",
        value: "R$ 250,00",
    },
    {
        label: "Estratégias e Regras de Coloração do Método no Profit para facilitar o aprendizado",
        value: "R$ 250,00",
    },
];

const TOTAL_FICTICIO = "R$ 4.199,00";
const PARCELAS = "12x R$ 124,11";
const PRECO_FINAL = "R$ 1.200,00";
const ECONOMIA = "R$ 2.999,00";

export function Pricing() {
    return (
        <section className="relative py-16 md:py-24 bg-[var(--dark-base)] overflow-hidden border-y border-[var(--white-10)]">

            {/* Background glows */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 left-1/3 w-[700px] h-[700px] bg-[var(--green-bull)]/5 blur-[160px] rounded-full" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[var(--red-bear)]/5 blur-[130px] rounded-full" />
            </div>

            <div className="max-w-2xl mx-auto px-4 sm:px-6 relative z-10">

                {/* Header */}
                <div className="text-center mb-12">
                    <FadeIn delay={0.1}>
                        <h2 className="font-display font-black text-5xl md:text-6xl uppercase leading-[0.9] tracking-tighter mb-6 text-white">
                            O método mais completo<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--green-dark)] to-[var(--green-bull)]">
                                pelo menor preço
                            </span>
                        </h2>
                    </FadeIn>
                </div>

                {/* Card principal */}
                <FadeIn delay={0.2} direction="up">
                    <div className="relative rounded-[2rem] border border-[var(--white-10)] bg-[var(--dark-elevated)] overflow-hidden">

                        {/* Accent top line */}
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--green-bull)] to-transparent opacity-50" />

                        <div className="p-6 sm:p-8 md:p-12">

                            {/* Badge vagas limitadas */}
                            <div className="flex justify-center mb-8">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-[var(--white)] text-xs font-bold uppercase tracking-widest" style={{ background: 'var(--green-bull)', borderColor: 'var(--green-bull)' }}>
                                    <Lock className="w-3 h-3" /> Oferta Exclusiva Para a Próxima Turma
                                </div>
                            </div>

                            {/* Lista de itens */}
                            <ul className="mb-8">
                                {items.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-start justify-between gap-4 py-4 border-b border-[var(--white-10)] last:border-0"
                                    >
                                        <div className="flex items-start gap-4">
                                            <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-[var(--green-bull)]/15 border border-[var(--green-bull)]/30 flex items-center justify-center">
                                                <Check className="w-3.5 h-3.5 text-[var(--green-bull)]" />
                                            </span>
                                            <span className="text-[var(--white-80)] font-medium text-base leading-snug">
                                                {item.label}
                                            </span>
                                        </div>
                                        <span className="flex-shrink-0 text-sm font-bold text-[var(--red-bear)] line-through opacity-70 whitespace-nowrap pt-0.5">
                                            {item.value}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* Total sem desconto */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex-1 h-[1px] bg-[var(--white-10)]" />
                                <span className="text-[var(--white-20)] text-xs font-bold uppercase tracking-widest whitespace-nowrap">total sem desconto</span>
                                <div className="flex-1 h-[1px] bg-[var(--white-10)]" />
                            </div>

                            <div className="flex items-center justify-between px-1 mb-8">
                                <span className="text-[var(--white-40)] font-bold uppercase tracking-wider text-sm">
                                    Valor total
                                </span>
                                <div className="flex items-center gap-2">
                                    <X className="w-4 h-4 text-[var(--red-bear)]" />
                                    <span className="font-display font-black text-2xl text-[var(--red-bear)] line-through decoration-2">
                                        {TOTAL_FICTICIO}
                                    </span>
                                </div>
                            </div>

                            {/* Divisor "você paga apenas" */}
                            <div className="relative mb-8">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--green-border)] to-transparent" />
                                </div>
                                <div className="relative flex justify-center">
                                    <span className="bg-[var(--dark-elevated)] px-6 text-[var(--green-bull)] text-xs font-bold uppercase tracking-[0.25em]">
                                        Você paga apenas
                                    </span>
                                </div>
                            </div>

                            {/* Bloco de preço — parcelas em destaque máximo, à vista secundário */}
                            <div className="flex flex-col items-center text-center gap-3 mb-8">

                                {/* Destaque principal: parcelas */}
                                <span className="font-display font-black text-5xl md:text-6xl text-[var(--green-bull)] drop-shadow-[0_0_30px_rgba(0,191,99,0.35)] leading-none">
                                    {PARCELAS}
                                </span>
                                <span className="text-[var(--white-20)] text-xs font-bold uppercase tracking-widest">
                                    no cartão de crédito
                                </span>
                                <br />
                                {/* Separador */}
                                <span className="text-[var(--white-20)] text-sm font-medium mt-1">
                                    {" "}
                                </span>

                                {/* Destaque secundário: à vista */}
                                <span className="font-display font-black text-3xl md:text-4xl text-white leading-none">
                                    {PRECO_FINAL}
                                </span>
                                <span className="text-[var(--white-20)] text-xs font-bold uppercase tracking-widest">
                                    à vista
                                </span>

                                {/* Badge de economia */}
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--green-bull)]/10 border border-[var(--green-border)] mt-2">
                                    <span className="w-2 h-2 rounded-full bg-[var(--green-bull)] animate-pulse" />
                                    <span className="text-[var(--green-bull)] text-xs font-bold uppercase tracking-widest">
                                        Economia de {ECONOMIA}
                                    </span>
                                </div>
                            </div>

                            {/* CTA */}
                            <a
                                href={HOTMART_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full relative overflow-hidden flex items-center justify-center gap-3 py-5 px-8 rounded-xl bg-[var(--green-bull)] hover:bg-[var(--green-dark)] text-white font-display font-black text-lg uppercase tracking-wider transition-all duration-300 shadow-[0_0_40px_rgba(0,191,99,0.25)] hover:shadow-[0_0_60px_rgba(0,191,99,0.40)] hover:scale-[1.02] group"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    Quero fazer a mentoria TDS
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                            </a>


                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
