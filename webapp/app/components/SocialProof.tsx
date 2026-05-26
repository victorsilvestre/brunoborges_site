"use client";

import { FadeIn } from "./FadeIn";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

const testimonials = [
    { text: "Aula fantástica, com explicação focada nos detalhes e nas nossas dúvidas. Uma sensação libertadora de que é tudo muito simples se tiver disciplina e focar no SIMPLES sem inventar moda.\n\nE o mais sensacional de tudo é vcs fazerem um intensivão em pleno sábado, o dia inteiro, para atualizarem os ex-alunos das novidades e melhorias do operacional. Isso não existe em nenhum lugar. Muito obrigada. Gratidão!", author: "Debora Malta", role: "Aluna TDS", color: "var(--green-bull)" },
    { text: "Incrível essa experiência de poder participar de um super intensivo como esse...\n\nRealmente o nível foi elevado ao extremo, pois foi um sábado intenso, de muito aprendizado, novos conceitos e principal, nos preparando para um futuro brilhante dentro do trade.\n\nObrigado Bruno e Fernanda por tanta competência no que fazem. Parabéns!", author: "Carlos Lobo", role: "Aluno TDS", color: "var(--green-dark)" },
    { text: "Parabéns Bruno, vc comprova a cada dia o seu comprometimento conosco que fizemos sua mentoria, sempre procurando ajudar... DEUS lhe abençoe sempre 🙏🙏", author: "Anderson Rubinho", role: "Aluno TDS", color: "var(--green-pure)" },
    { text: "Meus mais sinceros agradecimentos, por toda a dedicação e paciência para nos repassar toda a riqueza de conhecimentos e aprendizado.\n\nBruno e Fernanda são diferenciados, realmente desejam o progresso de todos os alunos, e não são simplesmente vendedores de curso!\n\nAgradeço a Deus por fazer parte desta verdadeira família TDS.", author: "Bino", role: "Aluno TDS", color: "var(--green-bull)" },
    { text: "Como sempre as aulas do Bruno são sempre Top demais. Tô vendo cruzamento de fibo em todo quanto é canto agora. KKK", author: "Claudinei Corrêa", role: "Aluno TDS", color: "var(--green-dark)" },
    { text: "Sem sombra de dúvidas, um mentor claro e preparado, explica com paciência. Tira as dúvidas tranquilo, faz vc sentir segurança no operacional que ele ensina.\n\nParabéns Fernanda pelo suporte. E a Bruno Borges. Deus abençoe grandemente cada vez mais.", author: "Valtinho Mezari", role: "Aluno TDS", color: "var(--green-pure)" },
    { text: "Parabéns, como sempre aula top demais, dinheiro mais bem investido em mentoria que já fiz nos meus quase 6 anos de mercado.\n\nParabéns a toda equipe e principalmente ao nosso mentor Bruno. O homem da bola de cristal. Kkkk", author: "Paulo Pires", role: "Aluno TDS", color: "var(--green-bull)" },
    { text: "Como sempre, o Bruno se supera a cada aula! Excepcional operacional!!!", author: "Andre Dias", role: "Aluno TDS", color: "var(--green-dark)" },
    { text: "Obrigado a todos em especial à Fernanda e ao Bruno pela oportunidade do aprendizado e pela grandeza de compartilhar os seus conhecimentos e experiências!\n\nAbraços a todos e um ótimo final de semana!", author: "Luiz Roberto", role: "Aluno TDS", color: "var(--green-pure)" },
];

export function SocialProof({
    title,
    titleHighlight,
    titleHighlightClass,
}: {
    title: string;
    titleHighlight: string;
    titleHighlightClass: string;
}) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = scrollRef.current.clientWidth * 0.8;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="py-32 bg-[var(--dark-pure)] relative overflow-hidden border-y border-[var(--white-10)]">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--green-bull)]/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full overflow-hidden">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-xl">
                        <FadeIn>
                            <h2 className="text-[var(--white-30)] font-bold text-sm tracking-[0.2em] uppercase mb-4">
                                Depoimentos
                            </h2>
                        </FadeIn>
                        <FadeIn delay={0.1}>
                            <h3 className="font-display font-black text-4xl md:text-6xl text-white uppercase leading-[0.9] tracking-tighter">
                                {title} <br />
                                <span className={titleHighlightClass}>
                                    {titleHighlight}
                                </span>
                            </h3>
                        </FadeIn>
                    </div>
                </div>

                <FadeIn delay={0.3}>
                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                    >
                        {testimonials.map((t, idx) => {
                            const isExpanded = expandedIdx === idx;
                            return (
                            <div
                                key={idx}
                                className="w-[85vw] sm:w-[420px] shrink-0 snap-center sm:snap-start flex flex-col p-8 sm:p-10 rounded-[2rem] border border-slate-200 bg-white shadow-sm hover:border-[var(--green-pure)]/40 transition-colors h-auto"
                            >
                                <div
                                    className="font-display font-black text-6xl leading-none opacity-20 mb-6"
                                    style={{ color: t.color === "var(--white)" ? "var(--dark-pure)" : t.color }}
                                >
                                    "
                                </div>

                                <div className="flex-1">
                                    <div className="relative">
                                        <p className={`text-lg md:text-xl text-[var(--dark-medium)] font-medium italic leading-relaxed whitespace-pre-line transition-all duration-300 ${!isExpanded ? "line-clamp-4" : ""}`}>
                                            {t.text}
                                        </p>
                                        {!isExpanded && (
                                            <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                                        )}
                                    </div>
                                    <button
                                        onClick={() => setExpandedIdx(isExpanded ? null : idx)}
                                        className="mt-3 text-sm font-bold uppercase tracking-widest transition-colors cursor-pointer"
                                        style={{ color: t.color === "var(--white)" ? "var(--dark-medium)" : t.color }}
                                    >
                                        {isExpanded ? "Ler menos ↑" : "Ler mais ↓"}
                                    </button>
                                </div>

                                <div className="pt-6 border-t border-slate-100 flex items-center gap-4 mt-6">
                                    <div
                                        className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center font-display font-bold text-xl uppercase border border-slate-200 shrink-0"
                                        style={{ color: t.color === "var(--white)" ? "var(--dark-pure)" : t.color }}
                                    >
                                        {t.author.charAt(0)}
                                    </div>
                                    <div className="truncate">
                                        <div className="font-display font-bold text-base uppercase tracking-wider text-[var(--dark-pure)] truncate">
                                            {t.author}
                                        </div>
                                        <div
                                            className="text-xs tracking-widest uppercase font-bold mt-1"
                                            style={{ color: t.color === "var(--white)" ? "var(--dark-medium)" : t.color }}
                                        >
                                            {t.role}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            );
                        })}
                    </div>
                </FadeIn>

                <div className="flex md:hidden items-center justify-center gap-4 mt-4">
                    <button
                        onClick={() => scroll("left")}
                        className="p-4 rounded-full border border-[var(--white-10)] bg-white/5 active:bg-white/10 transition-colors text-white shadow-sm"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="p-4 rounded-full border border-[var(--white-10)] bg-white/5 active:bg-white/10 transition-colors text-white shadow-sm"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </section>
    );
}
