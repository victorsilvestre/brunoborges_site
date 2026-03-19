"use client";

import { Crosshair, Crown, Zap, MessageSquare } from "lucide-react";
import { FadeIn } from "./FadeIn";

export function Features() {
    const features = [
        {
            icon: <Crosshair className="w-8 h-8 text-[var(--green-bull)]" />,
            num: "01",
            title: "Crença Fundamental",
            text: "Não importa seu histórico, oferecemos uma mudança de vida real e duradoura. O mercado premia a disciplina, não o talento."
        },
        {
            icon: <Crown className="w-8 h-8 text-[var(--gold-premium)]" />,
            num: "02",
            title: "Soluções Específicas",
            text: "Uma abordagem única e comprovada que abrange o desenvolvimento emocional. Você opera quem você é."
        },
        {
            icon: <Zap className="w-8 h-8 text-[var(--white)]" />,
            num: "03",
            title: "Operacional Testado",
            text: "Price Action purista. Aprenda a ler os movimentos sem indicadores poluindo a tela. Gráfico limpo, mente limpa."
        },
        {
            icon: <MessageSquare className="w-8 h-8 text-[var(--red-bear)]" />,
            num: "04",
            title: "Suporte Direto",
            text: "Você nunca estará sozinho. Suporte direto e exclusivo com o Mentor para blindar a sua jornada diária."
        }
    ];

    return (
        <section id="about" className="py-32 relative bg-[var(--light-base)] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="max-w-3xl mb-24">
                    <FadeIn>
                        <h2 className="text-[var(--dark-medium)] font-bold text-sm tracking-[0.2em] uppercase mb-4">
                            Fundamentos
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <h3 className="font-display font-black text-5xl md:text-6xl lg:text-7xl text-[var(--dark-pure)] uppercase leading-[0.9] tracking-tighter">
                            A base de um <br />
                            <span className="text-[var(--green-bull)]">Trader de Elite.</span>
                        </h3>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
                    {features.map((feature, i) => (
                        <FadeIn key={i} delay={i * 0.1} direction="up" className="relative group">
                            {/* Massive background number */}
                            <div className="absolute -top-16 -left-8 font-display font-black text-[180px] leading-none text-[var(--dark-pure)] opacity-[0.03] select-none pointer-events-none transition-transform duration-500 group-hover:-translate-y-4">
                                {feature.num}
                            </div>

                            <div className="relative z-10">
                                <div className="mb-8 p-4 inline-flex bg-[var(--dark-pure)] rounded-2xl shadow-xl transform transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                                    {feature.icon}
                                </div>

                                <h4 className="font-display font-black text-2xl md:text-3xl text-[var(--dark-pure)] uppercase mb-4 tracking-tight">
                                    {feature.title}
                                </h4>

                                <p className="text-[var(--dark-medium)] text-lg leading-relaxed max-w-sm">
                                    {feature.text}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>

            </div>
        </section>
    );
}
