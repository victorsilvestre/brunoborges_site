"use client";

import { FadeIn } from "../../components/FadeIn";

const stats = [
    { value: "+7", label: "Anos operando", sub: "mercado real" },
    { value: "+10", label: "Padrões autorais", sub: "testados na prática" },
    { value: "+1,4k", label: "Traders formados", sub: "método próprio" },
];

export function AboutMentor() {
    return (
        <section className="relative bg-[var(--dark-pure)] overflow-hidden border-b border-[var(--white-10)]">

            {/* Candlestick grid background */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <svg
                    className="absolute inset-0 w-full h-full opacity-[0.04]"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                >
                    <defs>
                        <pattern id="candle-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <line x1="0" y1="40" x2="40" y2="40" stroke="white" strokeWidth="0.5" />
                            <line x1="40" y1="0" x2="40" y2="40" stroke="white" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#candle-grid)" />
                </svg>

                {/* Candlestick bars decorativos */}
                {[
                    { x: "5%",  bottom: "10%", h: 120, bodyH: 60, bodyY: 30, bull: true  },
                    { x: "8%",  bottom: "10%", h: 80,  bodyH: 40, bodyY: 20, bull: false },
                    { x: "11%", bottom: "10%", h: 140, bodyH: 80, bodyY: 30, bull: true  },
                    { x: "14%", bottom: "10%", h: 60,  bodyH: 30, bodyY: 15, bull: false },
                    { x: "17%", bottom: "10%", h: 100, bodyH: 55, bodyY: 22, bull: true  },
                    { x: "75%", bottom: "5%",  h: 110, bodyH: 65, bodyY: 25, bull: true  },
                    { x: "78%", bottom: "5%",  h: 70,  bodyH: 35, bodyY: 18, bull: false },
                    { x: "81%", bottom: "5%",  h: 130, bodyH: 75, bodyY: 28, bull: true  },
                    { x: "84%", bottom: "5%",  h: 90,  bodyH: 50, bodyY: 20, bull: false },
                    { x: "87%", bottom: "5%",  h: 150, bodyH: 85, bodyY: 35, bull: true  },
                    { x: "90%", bottom: "5%",  h: 65,  bodyH: 35, bodyY: 15, bull: false },
                ].map((c, i) => (
                    <svg
                        key={i}
                        className="absolute"
                        style={{ left: c.x, bottom: c.bottom, width: 14, height: c.h, opacity: 0.12 }}
                        viewBox={`0 0 14 ${c.h}`}
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {/* wick */}
                        <line x1="7" y1="0" x2="7" y2={c.h} stroke={c.bull ? "var(--green-bull)" : "var(--red-pure)"} strokeWidth="1.5" />
                        {/* body */}
                        <rect x="2" y={c.bodyY} width="10" height={c.bodyH} fill={c.bull ? "var(--green-bull)" : "var(--red-pure)"} rx="1" />
                    </svg>
                ))}
            </div>

            {/* Glow verde principal */}
            <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[var(--green-bull)]/6 blur-[180px] rounded-full pointer-events-none z-0" />
            {/* Glow direita — profundidade */}
            <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-[var(--green-dim)]/20 blur-[120px] rounded-full pointer-events-none z-0" />

            {/* Noise overlay */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04] mix-blend-overlay pointer-events-none z-0" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-12 items-center">

                    {/* Coluna da imagem — integrada, sem borda de card */}
                    <div className="lg:col-span-5 relative flex items-end justify-center order-2 lg:order-1">

                        {/* Linha vertical editorial */}
                        <div className="hidden lg:block absolute left-0 top-8 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--green-bull)]/30 to-transparent" />

                        {/* Highlight de chão sob Bruno */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-20 bg-[var(--green-bull)]/20 blur-[50px] rounded-full" />

                        <div className="relative w-full max-w-[420px]">
                            <img
                                src="/images/bruno/img_bruno-blusa-preta_transparent.png"
                                alt="Bruno Borges"
                                className="relative z-10 w-full h-auto object-contain object-center"
                                style={{ filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.8)) drop-shadow(0 0 40px rgba(0,191,99,0.08))" }}
                            />
                        </div>
                    </div>

                    {/* Coluna de conteúdo */}
                    <div className="lg:col-span-7 flex flex-col justify-center py-16 lg:pl-16 order-1 lg:order-2">

                        <FadeIn>
                            <span className="inline-block text-[10px] font-bold tracking-[0.35em] uppercase text-[var(--green-pure)] mb-6">
                                Quem vai te ensinar
                            </span>
                        </FadeIn>

                        {/* Headline manifesto */}
                        <FadeIn delay={0.1}>
                            <h2 className="font-display font-black uppercase leading-[0.88] tracking-tighter text-white mb-8"
                                style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}>
                                Eu já estive<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--green-pure)] to-[var(--green-dark)]">
                                    Onde você está agora
                                </span>
                            </h2>
                        </FadeIn>

                        <div className="space-y-3 mb-10 max-w-lg">
                            <FadeIn delay={0.2}>
                                <p className="text-[var(--white-60)] text-base font-light leading-relaxed">
                                    Trader Profissional com mais de <strong className="text-white font-semibold">7 anos operando</strong> no mercado financeiro.
                                    Especialista em <strong className="text-white font-semibold">Price Action</strong> e leitura{" "}
                                    <strong className="text-white font-semibold">Candle a Candle</strong> sem indicadores.
                                </p>
                            </FadeIn>
                            <FadeIn delay={0.3}>
                                <p className="text-[var(--white-60)] text-base font-light leading-relaxed">
                                    Criou padrões autorais como o <strong className="text-white font-semibold">"Preguiçoso"</strong>,{" "}
                                    <strong className="text-white font-semibold">"Teimoso"</strong> {" "}
                                    <strong className="text-white font-semibold">"Responsivo"</strong> e{" "}
                                    <strong className="text-white font-semibold">"Leônidas"</strong> — ao todo, são mais de{" "}
                                    <strong className="text-white font-semibold">10 padrões</strong> de Price Action
                                    validados por milhares de traders todos os dias.
                                </p>
                            </FadeIn>
                        </div>

                        {/* Stats — prova prática */}
                        <FadeIn delay={0.4}>
                            <div className="flex flex-wrap items-start gap-6">
                                {stats.map((s, i) => (
                                    <div key={i} className="flex items-start gap-6">
                                        <div>
                                            <div className="font-display font-black text-3xl text-[var(--green-bull)] leading-none tabular-nums">
                                                {s.value}
                                            </div>
                                            <div className="text-[10px] font-bold uppercase tracking-widest text-white mt-1">{s.label}</div>
                                            <div className="text-[9px] uppercase tracking-wider text-[var(--white-30)] mt-0.5">{s.sub}</div>
                                        </div>
                                        {i < stats.length - 1 && (
                                            <div className="h-10 w-px bg-[var(--white-10)] self-center" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </FadeIn>

                    </div>
                </div>
            </div>

            {/* Linha de chão — separação sutil para próxima seção */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--green-bull)]/20 to-transparent" />
        </section>
    );
}
