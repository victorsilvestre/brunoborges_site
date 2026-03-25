"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";

export function BiografiaEditorial() {
    return (
        <section id="biografia" className="relative py-32 lg:py-40 bg-[var(--dark-base)] overflow-hidden">
            {/* Background Glows */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[var(--green-bull)]/8 blur-[150px] rounded-full" />
                <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-[var(--gold-premium)]/6 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                    {/* Image Side */}
                    <div className="relative order-1 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="relative aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden"
                        >
                            {/* Premium Border Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold-premium)]/30 via-transparent to-[var(--green-bull)]/20 rounded-2xl blur-xl" />

                            {/* Image Container */}
                            <div className="relative w-full h-full bg-[var(--dark-surface)] rounded-2xl overflow-hidden border border-[var(--white-10)]">
                                <img
                                    src="/image_bruno-borges.webp"
                                    alt="Bruno Borges - Trader Profissional"
                                    className="w-full h-full object-cover object-center grayscale-[20%]"
                                />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            </div>

                            {/* Floating Stats Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="absolute -bottom-6 -right-6 lg:-right-10 bg-[var(--dark-elevated)] border border-[var(--white-20)] backdrop-blur-xl rounded-xl p-6 shadow-2xl"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="flex flex-col">
                                        <span className="font-display font-black text-5xl text-[var(--green-bull)] leading-none">5+</span>
                                        <span className="text-xs uppercase tracking-wider text-[var(--white-60)] font-bold mt-2">Anos de Mercado</span>
                                    </div>
                                    <div className="h-16 w-[1px] bg-[var(--white-20)]" />
                                    <div className="flex flex-col">
                                        <span className="font-display font-black text-5xl text-[var(--gold-premium)] leading-none">10+</span>
                                        <span className="text-xs uppercase tracking-wider text-[var(--white-60)] font-bold mt-2">Setups Criados</span>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Content Side */}
                    <div className="order-2 lg:order-2 space-y-8">
                        <FadeIn>
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[var(--white-20)] bg-[var(--white-10)] backdrop-blur-md mb-4">
                                <span className="text-xs font-bold tracking-widest uppercase text-[var(--gold-premium)]">Quem é Bruno Borges</span>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <h2 className="font-display font-black text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.9] tracking-tighter text-white mb-8">
                                De Trader a{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold-premium)] to-[var(--gold-hover)]">
                                    Mentor
                                </span>
                            </h2>
                        </FadeIn>

                        <div className="space-y-6 text-lg lg:text-xl text-[var(--white-60)] font-light leading-relaxed">
                            <FadeIn delay={0.2}>
                                <p>
                                    Trader Profissional especializado em{" "}
                                    <strong className="text-white font-semibold">Price Action</strong> e leitura{" "}
                                    <strong className="text-white font-semibold">Candle a Candle</strong>.
                                </p>
                            </FadeIn>

                            <FadeIn delay={0.3}>
                                <p>
                                    Com <strong className="text-white font-semibold">mais de 5 anos de experiência</strong> no mercado
                                    financeiro, decidi compartilhar meu conhecimento para ajudar pessoas comuns a alcançarem{" "}
                                    <strong className="text-white font-semibold">lucratividade e consistência</strong> no Day Trade.
                                </p>
                            </FadeIn>

                            <FadeIn delay={0.4}>
                                <p>
                                    Criador de <strong className="text-white font-semibold">padrões autorais de Price Action</strong> que
                                    aceleram o aprendizado, como o <em className="text-[var(--green-bull)]">"Preguiçoso"</em>,{" "}
                                    <em className="text-[var(--green-bull)]">"Teimoso"</em>,{" "}
                                    <em className="text-[var(--green-bull)]">"Leônidas"</em> e outros{" "}
                                    <strong className="text-white font-semibold">10+ setups testados e validados</strong> por milhares
                                    de alunos diariamente.
                                </p>
                            </FadeIn>

                            <FadeIn delay={0.5}>
                                <p className="text-[var(--white-80)] text-xl lg:text-2xl italic border-l-4 border-[var(--gold-premium)] pl-6 py-2">
                                    "Meu objetivo é formar traders que entendem o mercado, não apenas seguem robôs."
                                </p>
                            </FadeIn>
                        </div>

                        <FadeIn delay={0.6}>
                            <div className="pt-8">
                                <a
                                    href="#metodologia"
                                    className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[var(--green-bull)] text-white font-display font-bold uppercase tracking-wider hover:bg-[var(--green-hover)] transition-all hover:shadow-[var(--glow-green)] hover:scale-105"
                                >
                                    Conhecer a Metodologia
                                </a>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
