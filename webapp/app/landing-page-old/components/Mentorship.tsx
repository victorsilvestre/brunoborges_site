"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, ShieldAlert, Target } from "lucide-react";
import { FadeIn } from "./FadeIn";

export function Mentorship() {
    const requirements = [
        "Obter uma renda extra",
        "Tornar-se um trader em tempo integral",
        "Aprimorar suas habilidades de investimento",
        "Acelerar seu aprendizado",
        "Ter apoio vitalício do mentor"
    ];

    const contentBlocks = [
        {
            title: "O Programa Ao Vivo",
            text: "Um programa exclusivo projetado para guiá-lo rumo ao sucesso financeiro no Day Trade, blindando a sua mente contra setups mágicos.",
            icon: <ShieldAlert className="w-6 h-6 text-[var(--gold-premium)]" />,
            borderColor: "border-[var(--gold-premium)]"
        },
        {
            title: "Método Validado",
            text: "Compartilho na prática o Método TDS que utilizo todos os dias e que irá multiplicar seus ganhos pela ótica do verdadeiro Price Action purista.",
            icon: <TrendingUp className="w-6 h-6 text-[var(--green-bull)]" />,
            borderColor: "border-[var(--green-bull)]"
        },
        {
            title: "Evolução Contínua",
            text: "Do zero ao experiente: mostro o passo a passo para lucrar e maximizo a gestão e o potencial de resultados de quem já tem bagagem no mercado.",
            icon: <Target className="w-6 h-6 text-white" />,
            borderColor: "border-[var(--white-40)]"
        }
    ];

    return (
        <section className="relative py-32 bg-[var(--dark-base)]" id="mentorship">

            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[400px] bg-[var(--gold-premium)]/5 blur-[150px] rounded-[100%]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">

                    {/* Sticky Left Column com os títulos mantidos idênticos (que o usuário validou e gostou) */}
                    <div className="lg:col-span-5 lg:sticky lg:top-32">
                        <FadeIn>
                            <h2 className="font-display font-black text-5xl md:text-7xl uppercase mb-6 leading-none text-white">
                                Mentoria <br />
                                <span className="text-[var(--green-bull)]">Trader de </span>
                                <span className="text-[var(--gold-premium)]">Sucesso</span>
                            </h2>

                            <p className="text-xl text-[var(--white-80)] leading-relaxed mb-8">
                                A Mentoria TDS é um acompanhamento completo, pensado para quem realmente quer viver do mercado e construir consistência de verdade.
                            </p>

                            <p className="text-lg text-[var(--white-60)] leading-relaxed">
                                Aqui você não compra só conhecimento. Você entra para o <strong className="text-white font-semibold">Time TDS</strong>, formado por pessoas comuns que decidiram mudar de vida com o Mercado Financeiro, usando um método objetivo, validado e que respeita o que o mercado realmente entrega.
                            </p>
                        </FadeIn>
                    </div>

                    {/* Scrolling Right Column Refinada */}
                    <div className="lg:col-span-7 space-y-12">

                        {/* Textos transformados em Info-Cards Modernos (Para fugir da aparência descritiva chata de 'prose') */}
                        <div className="grid gap-6">
                            {contentBlocks.map((block, idx) => (
                                <FadeIn key={idx} delay={0.1 + (idx * 0.1)}>
                                    <div className={`flex flex-col sm:flex-row gap-6 p-6 sm:p-8 rounded-2xl bg-[var(--dark-elevated)] border border-[var(--white-10)] border-l-4 ${block.borderColor} hover:bg-[var(--white-5)] transition-colors duration-300`}>
                                        <div className="shrink-0 p-3 bg-[var(--dark-base)] rounded-xl border border-[var(--white-10)] h-fit">
                                            {block.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-display font-bold text-xl text-white uppercase tracking-wider mb-2">
                                                {block.title}
                                            </h4>
                                            <p className="text-[var(--white-60)] text-lg leading-relaxed">
                                                {block.text}
                                            </p>
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>

                        {/* Card "Funciona pra mim" amado pelo usuário - mantido e destacado */}
                        <FadeIn delay={0.4}>
                            <div className="relative p-10 mt-8 overflow-hidden rounded-[2rem] border border-[var(--white-10)] bg-gradient-to-br from-[var(--dark-surface)] to-[var(--dark-elevated)] shadow-2xl">

                                {/* Decorative border glow e grain */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--green-bull)] opacity-[0.10] blur-3xl rounded-full mix-blend-screen pointer-events-none" />

                                <h3 className="font-display font-black text-3xl md:text-4xl text-white uppercase mb-6 relative z-10 flex items-center gap-4">
                                    <span className="w-10 h-1 bg-[var(--gold-premium)]" />
                                    Funciona pra mim?
                                </h3>

                                <p className="text-[var(--white-80)] text-lg mb-10 relative z-10 leading-relaxed">
                                    Minha metodologia foi desenvolvida para atender às necessidades de traders de todos os níveis. Ela serve para quem deseja:
                                </p>

                                <ul className="space-y-4 relative z-10">
                                    {requirements.map((req, idx) => (
                                        <motion.li
                                            key={idx}
                                            whileHover={{ x: 10 }}
                                            className="flex items-start gap-4 p-4 rounded-xl bg-[var(--dark-surface)]/50 border border-[var(--white-10)] hover:border-[var(--green-bull)]/50 transition-colors"
                                        >
                                            <ArrowUpRight className="w-6 h-6 shrink-0 text-[var(--green-bull)]" />
                                            <span className="text-white font-medium">{req}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>

                    </div>
                </div>
            </div>
        </section>
    );
}
