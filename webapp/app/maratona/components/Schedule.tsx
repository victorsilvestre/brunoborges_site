"use client";

import { FadeIn } from "../../components/FadeIn";
import { Lock, LockOpen, Play, ArrowRight } from "lucide-react";

export function Schedule() {
    const days = [
        {
            subtitle: "AULA 1 - TERÇA",
            date: "15/09",
            time: "20HRS",
            topics: "Como enxergar o que o gráfico está tentando mostrar",
            description: "Antes de pensar em estratégias, entradas ou indicadores, você precisa aprender a interpretar o que está acontecendo no gráfico. Nessa aula, você vai entender a lógica por trás dos movimentos do preço, como os candles revelam a atuação do mercado e quais informações observar para deixar de operar no escuro e começar a tomar decisões com mais clareza.",
            url: ""
        },
        {
            subtitle: "AULA 2 - QUARTA",
            date: "16/09",
            time: "20HRS",
            topics: "Utilizando apenas a Fibonacci para sair positivo",
            description: "Você não precisa encher o gráfico de indicadores para encontrar boas oportunidades. Nessa aula, eu vou mostrar como utilizo apenas a Fibonacci para identificar regiões importantes, encontrar pontos de entrada, projetar alvos e controlar o risco das operações. Você vai aprender uma forma simples e objetiva de interpretar os movimentos do mercado e buscar mais consistência, sabendo exatamente onde prestar atenção antes de tomar uma decisão.",
            url: ""
        },
        {
            subtitle: "AULA 3 - QUINTA",
            date: "17/09",
            time: "20HRS",
            topics: "Como alavancar seus resultados com Scalps",
            description: "Operações rápidas não precisam ser operações apressadas. Nessa aula, você vai aprender a estruturar um scalp com contexto, confirmação e gerenciamento de risco. Vou mostrar o que observar antes da entrada, como conduzir a operação e, principalmente, como reconhecer os momentos em que ficar de fora é a melhor decisão para proteger o seu capital.",
            url: ""
        }
    ];

    return (
        <section className="py-24 bg-[var(--dark-pure)] relative overflow-hidden border-b border-[var(--white-10)]">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-[160px] rounded-full pointer-events-none" style={{ background: 'var(--green-dim)' }} />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <FadeIn>
                    <div className="text-center mb-14">
                        <h2 className="font-display font-black text-5xl md:text-7xl text-white uppercase leading-[0.9] tracking-tighter">
                            Calendário <br />
                            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, var(--green-pure), var(--green-dark))' }}>Completo</span>
                        </h2>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {days.map((day, i) => (
                        <FadeIn key={i} delay={0.1 + i * 0.1}>
                            <div className="relative p-8 rounded-3xl overflow-hidden transition-all duration-500 border border-slate-200 bg-white hover:border-[var(--green-border)] hover:shadow-[0_10px_40px_rgba(0,191,99,0.08)] flex flex-col h-full">
                                <div
                                    className="absolute top-0 left-0 w-full h-2"
                                    style={{
                                        background: day.url
                                            ? 'linear-gradient(to right, var(--green-bull), var(--green-dark))'
                                            : 'linear-gradient(to right, #F11414, #8B0000)'
                                    }}
                                />

                                <div className="mb-8 mt-2">
                                    <span className="inline-block py-1 px-3 rounded-md bg-[var(--dark-pure)] text-white text-xs font-bold tracking-widest uppercase mb-4">
                                        {day.subtitle}
                                    </span>
                                    <div className="flex items-end gap-3 font-display">
                                        <span className="text-5xl font-black tracking-tighter text-[var(--dark-pure)] leading-none">{day.date}</span>
                                        <span className="text-xl font-bold text-slate-400 mb-1">{day.time}</span>
                                    </div>
                                </div>

                                <div className="bg-[var(--light-surface)] rounded-2xl p-6 border border-slate-100 flex flex-col gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${day.url ? "bg-[var(--green-pure)]" : "bg-[var(--red-bear)]"}`}>
                                            {day.url
                                                ? <LockOpen className="w-4 h-4 text-white" />
                                                : <Lock className="w-4 h-4 text-white" />
                                            }
                                        </div>
                                        <p className="font-bold text-[var(--dark-medium)] text-sm uppercase tracking-wider">
                                            {day.topics}
                                        </p>
                                    </div>
                                    <p className="text-sm text-[var(--dark-medium)] font-light leading-relaxed">
                                        {day.description}
                                    </p>
                                    {day.url && (
                                        <a
                                            href={day.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl font-bold text-sm uppercase tracking-wider text-white transition-all duration-300"
                                            style={{ background: 'linear-gradient(to right, var(--green-pure), var(--green-dark))' }}
                                        >
                                            <Play className="w-4 h-4 fill-white" />
                                            Assistir Aula
                                        </a>
                                    )}
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                {/* CTA inscrição */}
                <FadeIn delay={0.4}>
                    <div className="mt-12 max-w-6xl mx-auto flex justify-center">
                        <a
                            href="#"
                            className="inline-flex items-center gap-3 py-4 px-8 rounded-xl font-display font-bold text-sm uppercase tracking-wider text-white transition-all duration-300 hover:scale-105"
                            style={{ background: 'linear-gradient(to right, var(--green-pure), var(--green-dark))', boxShadow: '0 0 40px var(--green-dim)' }}
                        >
                            Quero me inscrever na Maratona e receber todos os bônus <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
