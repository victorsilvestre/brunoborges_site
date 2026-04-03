"use client";

import { Check, ArrowRight, X } from "lucide-react";
import { FadeIn } from "../../components/FadeIn";
import { useModal } from "../ModalContext";

const items = [
    {
        label: "60 dias de acompanhamento",
        value: "R$ 1.500,00",
    },
    {
        label: "Grupo de estudos ao vivo",
        value: "R$ 400,00",
    },
    {
        label: "Indicadores do Método TDS",
        value: "R$ 250,00",
    },
    {
        label: "Apostila digital do Método",
        value: "R$ 150,00",
    },
];

const TOTAL_FICTICIO = "R$ 2.300,00";
const PRECO_FINAL = "R$ 700,00";

export function Pricing() {
    const { openModal } = useModal();

    return (
        <section className="relative py-32 bg-[var(--dark-base)] overflow-hidden border-y border-[var(--white-10)]">

            {/* Background glows */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 left-1/3 w-[700px] h-[700px] bg-[var(--green-bull)]/5 blur-[160px] rounded-full" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[var(--red-bear)]/5 blur-[130px] rounded-full" />
            </div>

            <div className="max-w-2xl mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center mb-16">

                    <FadeIn delay={0.1}>
                        <h2 className="font-display font-black text-5xl md:text-6xl uppercase leading-[0.9] tracking-tighter mb-6 text-white">
                            Tudo isso por<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--green-dark)] to-[var(--green-bull)]">
                                muito menos</span>
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.15}>
                        <p className="text-[var(--white-60)] text-lg max-w-xl mx-auto">
                            Veja tudo o que você está levando — e quanto custaria investir em cada item separadamente:
                        </p>
                    </FadeIn>
                </div>

                {/* Card principal */}
                <FadeIn delay={0.2} direction="up">
                    <div className="relative rounded-[2rem] border border-[var(--white-10)] bg-[var(--dark-elevated)] overflow-hidden">

                        {/* Accent top line */}
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--green-bull)] to-transparent opacity-50" />

                        <div className="p-8 md:p-12">

                            {/* Lista de itens */}
                            <ul className="space-y-4 mb-10">
                                {items.map((item, idx) => (
                                    <li key={idx} className="flex items-center justify-between gap-6 py-4 border-b border-[var(--white-10)] last:border-0">
                                        <div className="flex items-center gap-4">
                                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--green-bull)]/15 border border-[var(--green-bull)]/30 flex items-center justify-center">
                                                <Check className="w-3.5 h-3.5 text-[var(--green-bull)]" />
                                            </span>
                                            <span className="text-[var(--white-80)] font-medium text-base md:text-lg leading-snug">
                                                {item.label}
                                            </span>
                                        </div>
                                        <span className="flex-shrink-0 text-sm md:text-base font-bold text-[var(--red-bear)] line-through decoration-[var(--red-bear)] opacity-80 whitespace-nowrap">
                                            {item.value}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* Separador com seta */}
                            <div className="flex items-center gap-4 mb-8">
                                <div className="flex-1 h-[1px] bg-[var(--white-10)]" />
                                <span className="text-[var(--white-20)] text-xs font-bold uppercase tracking-widest">total sem desconto</span>
                                <div className="flex-1 h-[1px] bg-[var(--white-10)]" />
                            </div>

                            {/* Preço riscado */}
                            <div className="flex items-center justify-between mb-6 px-2">
                                <span className="text-[var(--white-40)] font-display font-bold uppercase tracking-wider text-sm">
                                    Valor total
                                </span>
                                <div className="flex items-center gap-3">
                                    <X className="w-5 h-5 text-[var(--red-bear)]" />
                                    <span className="font-display font-black text-2xl md:text-3xl text-[var(--red-bear)] line-through decoration-[var(--red-bear)] decoration-2">
                                        {TOTAL_FICTICIO}
                                    </span>
                                </div>
                            </div>

                            {/* Divisor premium */}
                            <div className="relative my-8">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--green-border)] to-transparent" />
                                </div>
                                <div className="relative flex justify-center">
                                    <span className="bg-[var(--dark-elevated)] px-6 text-[var(--green-bull)] text-xs font-bold uppercase tracking-[0.25em]">
                                        Você paga apenas
                                    </span>
                                </div>
                            </div>

                            {/* Preço final */}
                            <div className="flex flex-col items-center text-center gap-4 mb-10">
                                <p className="text-[var(--white-40)] text-xs font-bold uppercase tracking-widest">Investimento final</p>
                                <span className="font-display font-black text-5xl md:text-7xl text-[var(--green-bull)] drop-shadow-[0_0_30px_rgba(0,191,99,0.35)] leading-none whitespace-nowrap">
                                    {PRECO_FINAL}
                                </span>
                                <span className="text-[var(--white-40)] text-sm font-medium tracking-wide">à vista</span>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--green-bull)]/10 border border-[var(--green-border)] mt-2">
                                    <span className="w-2 h-2 rounded-full bg-[var(--green-bull)] animate-pulse" />
                                    <span className="text-[var(--green-bull)] text-xs font-bold uppercase tracking-widest">Economia de R$ 1.600,00</span>
                                </div>
                            </div>

                            {/* CTA */}
                            <button
                                onClick={openModal}
                                className="w-full relative overflow-hidden flex items-center justify-center gap-3 py-5 px-8 rounded-xl bg-[var(--green-bull)] hover:bg-[var(--green-dark)] text-white font-display font-black text-lg uppercase tracking-wider transition-all duration-300 shadow-[0_0_40px_rgba(0,191,99,0.25)] hover:shadow-[0_0_60px_rgba(0,191,99,0.40)] hover:scale-[1.02] group"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    Fazer Minha Inscrição
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                            </button>
                            <p className="text-center text-[var(--white-20)] text-xs mt-4 uppercase tracking-widest font-bold">
                                Vagas limitadas · Próxima turma: 15/04/26
                            </p>

                        </div>
                    </div>
                </FadeIn>

            </div>
        </section>
    );
}
