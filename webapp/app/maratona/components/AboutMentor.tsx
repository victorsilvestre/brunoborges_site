"use client";

import { FadeIn } from "../../components/FadeIn";

const stats = [
    { value: "+7", label: "Anos operando", sub: "mercado real" },
    { value: "+10", label: "Padrões autorais", sub: "testados na prática" },
    { value: "+1,4k", label: "Traders formados", sub: "método próprio" },
];

export function AboutMentor() {
    return (
        <section className="relative bg-[var(--light-base)] overflow-hidden border-b border-slate-200">

            {/* Glow verde sutil */}
            <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[var(--green-bull)]/5 blur-[180px] rounded-full pointer-events-none z-0" />
            {/* Glow direita — profundidade */}
            <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-[var(--green-dim)]/30 blur-[120px] rounded-full pointer-events-none z-0" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center justify-center text-center py-16 max-w-3xl mx-auto">

                    <FadeIn>
                        <span className="inline-block text-[10px] font-bold tracking-[0.35em] uppercase text-[var(--green-dark)] mb-6">
                            Quem vai te ensinar
                        </span>
                    </FadeIn>

                    {/* Headline manifesto */}
                    <FadeIn delay={0.1}>
                        <h2 className="font-display font-black uppercase leading-[0.88] tracking-tighter text-[var(--dark-pure)] mb-8"
                            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}>
                            Eu já estive<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--green-pure)] to-[var(--green-dark)]">
                                Onde você está agora
                            </span>
                        </h2>
                    </FadeIn>

                    <div className="space-y-3 mb-10 max-w-lg">
                        <FadeIn delay={0.2}>
                            <p className="text-[var(--dark-medium)] text-base font-light leading-snug">
                                Trader Profissional com mais de <strong className="text-[var(--dark-pure)] font-semibold">7 anos operando</strong> no mercado financeiro.
                                Especialista em <strong className="text-[var(--dark-pure)] font-semibold">Price Action</strong> e leitura{" "}
                                <strong className="text-[var(--dark-pure)] font-semibold">Candle a Candle</strong> sem indicadores.
                            </p>
                        </FadeIn>
                        <FadeIn delay={0.3}>
                            <p className="text-[var(--dark-medium)] text-base font-light leading-snug">
                                Criou padrões autorais como o <strong className="text-[var(--dark-pure)] font-semibold">"Preguiçoso"</strong>,{" "}
                                <strong className="text-[var(--dark-pure)] font-semibold">"Teimoso"</strong> {" "}
                                <strong className="text-[var(--dark-pure)] font-semibold">"Responsivo"</strong> e{" "}
                                <strong className="text-[var(--dark-pure)] font-semibold">"Leônidas"</strong> — ao todo, são mais de{" "}
                                <strong className="text-[var(--dark-pure)] font-semibold">10 padrões</strong> de Price Action
                                validados por milhares de traders todos os dias.
                            </p>
                        </FadeIn>
                    </div>

                    {/* Stats — prova prática */}
                    <FadeIn delay={0.4}>
                        <div className="flex items-start justify-center gap-3 sm:gap-6">
                            {stats.map((s, i) => (
                                <div key={i} className="flex items-start gap-3 sm:gap-6">
                                    <div className="min-w-0">
                                        <div className="font-display font-black text-xl sm:text-3xl text-[var(--green-dark)] leading-none tabular-nums">
                                            {s.value}
                                        </div>
                                        <div className="text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-[var(--dark-pure)] mt-1 whitespace-nowrap">{s.label}</div>
                                        <div className="text-[7px] sm:text-[9px] uppercase tracking-wider text-[var(--dark-medium)] mt-0.5 whitespace-nowrap">{s.sub}</div>
                                    </div>
                                    {i < stats.length - 1 && (
                                        <div className="h-10 w-px bg-slate-200 self-center shrink-0" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </FadeIn>

                </div>
            </div>
        </section>
    );
}
