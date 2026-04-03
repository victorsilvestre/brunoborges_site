"use client";

import { motion } from "framer-motion";
import { FadeIn } from "../../components/FadeIn";
import { useModal } from "../ModalContext";

export function Differentiators() {
    const { openModal } = useModal();
    const diffs = [
        { num: "1.", label: "Conteúdo Prático e Denso", text: "Mais de 100h de conteúdo estruturado, do zero ao Price Action Simplificado. São mais de 25 aulas pensadas para transformar sua leitura de mercado e desenvolver uma visão realmente profissional." },
        { num: "2.", label: "Mentoria de Elite", text: "Sem intermediários. Sem suporte terceirizado. Você tira dúvidas diretamente comigo, com acompanhamento próximo e direcionado." },
        { num: "3.", label: "60 Dias de Foco Total", text: "Imersão completa com análise do mercado e aulas valiosas. Entenda os movimentos do mercado e as armadilhas que fazem diferença no seu resultado." },
        { num: "4.", label: "Bônus Operacional", text: "Você não evolui sozinho. Participe de sessões práticas de Replay de Mercado com outros alunos, fortalecendo a leitura e consolidando o aprendizado." },
        { num: "5.", label: "Acesso Vitalício", text: "Todo o conteúdo liberado para você, sem prazo. Reveja aulas, operações e materiais quantas vezes quiser, no seu ritmo e conforme sua evolução." },
        { num: "6.", label: "Vagas Limitadas", text: "Turmas reduzidas para garantir qualidade no ensino e proximidade no acompanhamento. Aproveite enquanto as vagas estiverem abertas." },
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
                    <button
                        onClick={openModal}
                        className="flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-[var(--green-bull)] text-white font-display font-bold uppercase tracking-wider hover:scale-105 transition-all duration-300 shadow-[0_4px_20px_rgba(0,191,99,0.30)] hover:shadow-[0_4px_30px_rgba(0,191,99,0.50)] w-fit mx-auto mt-10"
                    >
                        Quero Fazer Parte
                    </button>
                </FadeIn>
            </div>
        </section>
    );
}
