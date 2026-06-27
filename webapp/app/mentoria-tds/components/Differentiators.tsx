"use client";

import { motion } from "framer-motion";
import { FadeIn } from "../../components/FadeIn";
import { INSCRICOES_ABERTAS } from "../config";

const HOTMART_URL = "https://pay.hotmart.com/O105700075J";

export function Differentiators() {
    const diffs = [
        { num: "1.", label: "Conteúdo Prático", text: "Mais de 100 horas de conteúdo estruturado para levar você do básico ao avançado. Um método organizado, direto ao ponto e pensado para transformar conhecimento em execução prática." },
        { num: "2.", label: "Acompanhamento", text: "Aqui você aprende diretamente com quem desenvolveu o método. Sem suporte terceirizado, sem repassar dúvidas para outras pessoas. Correções, direcionamento e acompanhamento próximos durante toda a jornada." },
        { num: "3.", label: "60 Dias de Imersão", text: "Durante dois meses você acompanha aulas ao vivo, análises de mercado e sessões práticas que aceleram o aprendizado e ajudam a consolidar a leitura de mercado no dia a dia operacional." },
        { num: "4.", label: "Evolução Contínua", text: "Além da mentoria principal, você participa de aulas bônus, lives exclusivas, encontros operacionais e iniciativas criadas para aprofundar seu conhecimento e continuar evoluindo dia após dia." },
        { num: "5.", label: "Acesso Vitalício", text: "Todo o conteúdo permanece disponível para consulta na sua área de membros. Revise aulas, materiais, estratégias e conceitos sempre que precisar, respeitando o seu ritmo e a sua fase de evolução." },
        { num: "6.", label: "Turmas Selecionadas", text: "Turmas reduzidas para garantir proximidade, qualidade nas interações e um acompanhamento mais eficiente. Menos volume, mais atenção para quem realmente deseja evoluir." },
        { num: "7.", label: "Mesas Proprietárias", text: "Alto índice de aprovação dos alunos em mesas proprietárias. Você opera com capital de terceiros, sem arriscar o próprio dinheiro, e ganha em dólar." },
        { num: "8.", label: "Método Comprovado", text: "Funciona em qualquer ativo, mercado e tempo gráfico — e não é teoria. São mais de 1.200 alunos aplicando o método em conta real todos os dias, com resultados que falam por si." },
    ];

    return (
        <section className="py-16 md:py-24 bg-[var(--light-base)] border-y border-slate-200">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <div className="max-w-3xl">
                        <FadeIn delay={0.1}>
                            <h3 className="font-display font-black text-5xl md:text-7xl text-[var(--dark-pure)] uppercase leading-[0.9] tracking-tighter">
                                Por que a Família TDS<br />
                                <span className="text-[var(--green-bull)]">é diferente?</span>
                            </h3>
                            <span className="font-script text-3xl md:text-4xl text-[var(--green-bull)] block mt-4 -rotate-1">
                                #EuSouTDS
                            </span>
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
                                <p className="text-[var(--dark-medium)] font-medium text-lg leading-snug">
                                    {d.text}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
                {INSCRICOES_ABERTAS && (
                    <FadeIn delay={0.2} className="w-full md:w-auto shrink-0">
                        <a
                            href={HOTMART_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-[var(--green-bull)] text-white font-display font-bold uppercase tracking-wider hover:scale-105 transition-all duration-300 shadow-[0_4px_20px_rgba(0,191,99,0.30)] hover:shadow-[0_4px_30px_rgba(0,191,99,0.50)] w-fit mx-auto mt-10"
                        >
                            Quero Fazer Parte da Próxima Turma TDS
                        </a>
                    </FadeIn>
                )}
            </div>
        </section>
    );
}
