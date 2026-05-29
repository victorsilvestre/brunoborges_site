"use client";

import { FadeIn } from "../../components/FadeIn";
import { Lock, LockOpen, Play, ArrowRight, Zap } from "lucide-react";
import { INSCRICOES_ABERTAS } from "../../mentoria-tds/config";

export function Schedule() {
    const days = [
        {
            subtitle: "AULA 1 - TERÇA",
            date: "23/06",
            time: "20HRS",
            topics: "O básico que quase ninguém aprende sobre o gráfico",
            description: "A maioria dos traders pula essa etapa — e paga muito caro por isso. Nessa aula você vai entender como o preço realmente se comporta, o que o gráfico comunica antes de qualquer movimento e por que a leitura correta das obrigações dos candles é o que separa quem opera bem de quem não consegue fechar no positivo.",
            url: ""
        },
        {
            subtitle: "AULA 2 - QUARTA",
            date: "24/06",
            time: "20HRS",
            topics: "A estratégia que mudou a minha vida",
            description: "Nessa aula, eu vou compartilhar com você a primeira estratégia que eu utilizei no mercado financeiro e que transformou a minha vida. Você vai acompanhar as entradas, os alvos e o gerenciamento de risco de cada operação. Você vai aprender a aplicar essa estratégia nos principais ativos do mercado e entender por que ela funciona independente do cenário.",
            url: ""
        },
        {
            subtitle: "AULA 3 - QUINTA",
            date: "25/06",
            time: "20HRS",
            topics: "O método para fazer Scalp rápido e objetivo",
            description: "Scalp não é sobre velocidade — é sobre precisão. Nessa última aula da Maratona, você vai aprender como montar operações curtas com critério, sem ansiedade e com risco controlado. O objetivo é ensinar para você exatamente quando entrar, quando sair e quando ficar de fora do mercado para não tomar loss à toa.",
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

                                <div className="mt-auto bg-[var(--light-surface)] rounded-2xl p-6 border border-slate-100 flex flex-col gap-4">
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

                {/* CTA Grupo Telegram */}
                <FadeIn delay={0.4}>
                    <div className="mt-12 max-w-6xl mx-auto flex justify-center">
                        <a
                            href="/maratona-grupo"
                            className="inline-flex items-center gap-3 py-4 px-8 rounded-xl font-display font-bold text-sm uppercase tracking-wider text-white transition-all duration-300 hover:scale-105"
                            style={{ background: 'linear-gradient(to right, var(--green-pure), var(--green-dark))', boxShadow: '0 0 40px var(--green-dim)' }}
                        >
                            Entrar no Grupo Exclusivo <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </FadeIn>

                {/* Aviso de inscrições */}
                {INSCRICOES_ABERTAS && (
                    <FadeIn delay={0.4}>
                        <div className="mt-12 max-w-6xl mx-auto">
                            <div
                                className="relative rounded-3xl overflow-hidden border border-[var(--green-border)] p-8 md:p-10"
                                style={{ background: 'linear-gradient(135deg, var(--dark-pure) 0%, #0d2818 100%)' }}
                            >
                                {/* Glow de fundo */}
                                <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-[80px] pointer-events-none" style={{ background: 'var(--green-dim)' }} />

                                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style={{ background: 'var(--green-pure)' }}>
                                            <Zap className="w-6 h-6 text-white fill-white" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-xs font-bold tracking-widest uppercase text-[var(--green-pure)]">Próxima Turma — 15/04</span>
                                                <span className="inline-block w-2 h-2 rounded-full bg-[var(--green-pure)] animate-pulse" />
                                            </div>
                                            <p className="font-display font-black text-2xl md:text-3xl text-white uppercase leading-tight tracking-tight">
                                                Inscrições abertas:
                                                <br/>Mentoria Trader de Sucesso
                                            </p>
                                            <p className="text-[var(--red-bear)] text-sm mt-1">
                                                Vagas limitadas.
                                            </p>
                                        </div>
                                    </div>

                                    <a
                                        href="/mentoria-tds"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="shrink-0 inline-flex items-center gap-2 py-4 px-8 rounded-xl font-display font-bold text-sm uppercase tracking-wider text-white transition-all duration-300 hover:scale-105"
                                        style={{ background: 'linear-gradient(to right, var(--green-pure), var(--green-dark))', boxShadow: '0 0 30px var(--green-dim)' }}
                                    >
                                        Saiba Mais <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                )}
            </div>
        </section>
    );
}
