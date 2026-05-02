"use client";

import { motion } from "framer-motion";
import { Calendar, Zap, ArrowRight, Users } from "lucide-react";
import { FadeIn } from "../../components/FadeIn";

// Defina null se não houver próxima maratona agendada
const proximaMaratona = {
    numero: "15ª",
    data: "23 de junho",
    diaSemana: "terça-feira",
    horario: "20h00 (horário de Brasília)",
    inscricaoUrl: "/maratona",
};

const stats = [
    { icon: Zap, label: "Entrada liberada", desc: "100% online e gratuita" },
    { icon: Users, label: "Muitas Edições", desc: "Centenas de traders formados" },
];

export function Eventos() {
    return (
        <section
            id="eventos"
            className="relative py-32 lg:py-40 bg-[var(--dark-surface)] overflow-hidden border-t border-[var(--white-10)]"
        >
            {/* Background glows */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[var(--green-bull)]/5 blur-[160px] rounded-full" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[var(--green-bull)]/4 blur-[140px] rounded-full" />
                {/* Subtle grid texture */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage:
                            "linear-gradient(var(--white-20) 1px, transparent 1px), linear-gradient(90deg, var(--white-20) 1px, transparent 1px)",
                        backgroundSize: "48px 48px",
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

                    {/* ── Coluna Esquerda: Texto ── */}
                    <div>
                        <FadeIn>
                            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[var(--green-border)] bg-[var(--green-dim)] backdrop-blur-md mb-8">
                                <Calendar className="w-4 h-4 text-[var(--green-bull)]" />
                                <span className="text-xs font-bold tracking-widest uppercase text-[var(--green-bull)]">
                                    Eventos
                                </span>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <h2 className="font-display font-black text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.9] tracking-tighter text-white mb-6">
                                Maratona{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--green-bull)] to-[var(--green-dark)]">
                                    Trader de Sucesso
                                </span>
                            </h2>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <p className="text-lg lg:text-xl text-[var(--white-60)] font-light leading-relaxed mb-10 max-w-xl">
                                Evento online e{" "}
                                <span className="text-white font-medium">100% gratuito</span>{" "}
                                onde Bruno Borges ensina Price Action na prática. 
                                Ao todo, <span className="text-white font-medium">são três dias de imersão e conteúdo de mentoria ao vivo,</span>{" "}
                                para que você possa conhecer algumas peças valiosas do operacional. 
                            </p>
                        </FadeIn>

                        {/* Stats row */}
                        <FadeIn delay={0.3}>
                            <div className="flex flex-col sm:flex-row gap-4 mb-10">
                                {stats.map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-3 px-4 py-3 rounded-xl border border-[var(--white-10)] bg-[var(--dark-elevated)]"
                                    >
                                        <div className="w-9 h-9 rounded-lg bg-[var(--green-dim)] flex items-center justify-center shrink-0">
                                            <item.icon className="w-4 h-4 text-[var(--green-bull)]" />
                                        </div>
                                        <div>
                                            <p className="text-white font-display font-bold text-sm uppercase tracking-wide">
                                                {item.label}
                                            </p>
                                            <p className="text-[var(--white-40)] text-xs">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>

                        {proximaMaratona && (
                            <FadeIn delay={0.4}>
                                <motion.a
                                    href={proximaMaratona.inscricaoUrl}
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[var(--green-bull)] text-white font-display font-bold uppercase text-sm tracking-wider hover:bg-[var(--green-dark)] transition-colors shadow-[var(--glow-green)]"
                                >
                                    Conheça a Maratona TDS
                                    <ArrowRight className="w-4 h-4" />
                                </motion.a>
                            </FadeIn>
                        )}
                    </div>

                    {/* ── Coluna Direita: Imagem + Card ── */}
                    <FadeIn delay={0.2} direction="left">
                        <div className="relative">
                            {/* Imagem principal */}
                            <div className="relative rounded-2xl overflow-hidden border border-[var(--white-10)]">
                                <img
                                    src="/images/chart-trading/image_chart-trading-2.jpg"
                                    alt="Gráfico de candlesticks — Maratona TDS"
                                    className="w-full h-[420px] lg:h-[500px] object-cover"
                                />
                                {/* Tint verde da marca sobre a imagem */}
                                <div className="absolute inset-0 bg-[var(--green-bull)]/10 mix-blend-screen" />
                                {/* Escurecimento geral para integrar ao tema dark */}
                                <div className="absolute inset-0 bg-[var(--dark-base)]/50" />
                                {/* Gradiente bottom para o card flutuar */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />

                                {/* Label sobre a imagem */}
                                <div className="absolute top-5 left-5">
                                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 border border-[var(--white-10)] text-white text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                                        <span className="w-2 h-2 rounded-full bg-[var(--green-bull)] animate-pulse" />
                                        Evento Online
                                    </span>
                                </div>
                            </div>

                            {/* Card: Próxima Maratona */}
                            {proximaMaratona && (
                                <motion.div
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.45 }}
                                    className="absolute -bottom-6 -left-6 right-6 lg:-left-8 lg:right-8 bg-[var(--dark-elevated)] border border-[var(--green-border)] rounded-2xl p-5 shadow-[var(--glow-green)] backdrop-blur-md"
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <p className="text-[var(--green-bull)] text-xs font-bold uppercase tracking-widest mb-1">
                                                Próxima Maratona
                                            </p>
                                            <h3 className="font-display font-black text-white text-xl uppercase mb-2">
                                                {proximaMaratona.numero} Maratona TDS
                                            </h3>
                                            <div className="flex flex-col gap-1">
                                                <span className="text-[var(--white-80)] text-sm">
                                                    {proximaMaratona.diaSemana},{" "}
                                                    {proximaMaratona.data}
                                                </span>
                                                <span className="text-[var(--white-40)] text-xs">
                                                    {proximaMaratona.horario}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="shrink-0 w-12 h-12 rounded-xl bg-[var(--green-dim)] border border-[var(--green-border)] flex items-center justify-center">
                                            <Calendar className="w-6 h-6 text-[var(--green-bull)]" />
                                        </div>
                                    </div>

                                    <div className="mt-4 pt-4 border-t border-[var(--white-10)] flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-[var(--green-bull)] animate-pulse" />
                                        <span className="text-[var(--white-60)] text-xs font-medium tracking-wider">
                                            Aprenda um jeito fácil de operar — Sem pagar nada por isso
                                        </span>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
