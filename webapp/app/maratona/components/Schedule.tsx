"use client";

import { FadeIn } from "../../components/FadeIn";
import { Lock } from "lucide-react";

export function Schedule() {
    const days = [
        {
            subtitle: "AULA 1 - TERÇA",
            date: "31/03",
            time: "20HRS",
            topics: "Aprenda a ler o gráfico sem indicadores"
        },
        {
            subtitle: "AULA 2 - QUARTA",
            date: "01/04",
            time: "20HRS",
            topics: "Lucro diário começa com negação"
        },
        {
            subtitle: "AULA 3 - QUINTA",
            date: "02/04",
            time: "20HRS",
            topics: "Scalp preciso, resultado real"
        }
    ];

    return (
        <section className="py-24 bg-[var(--light-base)] relative overflow-hidden border-b border-slate-200">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <FadeIn>
                    <div className="text-center mb-20">
                        <h2 className="font-display font-black text-5xl md:text-7xl text-[var(--dark-pure)] uppercase leading-[0.9] tracking-tighter">
                            Calendário <br />
                            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, var(--green-pure), var(--green-dark))' }}>Completo</span>
                        </h2>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {days.map((day, i) => (
                        <FadeIn key={i} delay={0.1 + i * 0.1}>
                            <div className="relative p-8 rounded-3xl overflow-hidden group transition-all duration-500 border border-slate-200 bg-white hover:border-[var(--green-border)] hover:shadow-[0_10px_40px_rgba(0,191,99,0.08)] flex flex-col h-full">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-slate-200 to-slate-300 group-hover:from-[var(--green-pure)] group-hover:to-[var(--green-dark)] transition-colors duration-500" />

                                <div className="mb-8 mt-2">
                                    <span className="inline-block py-1 px-3 rounded-md bg-[var(--dark-pure)] text-white text-xs font-bold tracking-widest uppercase mb-4">
                                        {day.subtitle}
                                    </span>
                                    <div className="flex items-end gap-3 font-display">
                                        <span className="text-5xl font-black tracking-tighter text-[var(--dark-pure)] leading-none">{day.date}</span>
                                        <span className="text-xl font-bold text-slate-400 mb-1">{day.time}</span>
                                    </div>
                                </div>

                                <div className="mt-auto bg-[var(--light-surface)] rounded-2xl p-6 border border-slate-100 flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
                                        <Lock className="w-4 h-4 text-slate-500" />
                                    </div>
                                    <p className="font-bold text-[var(--dark-medium)] text-sm uppercase tracking-wider">
                                        {day.topics}
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
