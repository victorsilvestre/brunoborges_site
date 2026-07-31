"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FadeIn } from "../../components/FadeIn";

export function BiografiaEditorial() {
    return (
        <section id="biografia" className="relative overflow-hidden bg-[var(--dark-base)] pt-32 lg:pt-40 pb-0">

            {/* Background glows */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[var(--green-bull)]/8 blur-[150px] rounded-full" />
                <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-[var(--gold-premium)]/6 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">

                    {/* Left — content */}
                    <div className="space-y-8 pb-32 lg:pb-48">

                        <FadeIn delay={0.2}>
                            <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl uppercase leading-[1.0] tracking-tighter text-white mt-10">
                                De Trader{" "}<br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--green-dark)] via-[var(--green-bull)] to-[var(--green-pure)]">
                                    a Mentor
                                </span>
                            </h2>
                        </FadeIn>

                        <FadeIn delay={0.35}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <p className="text-lg text-[var(--white-40)] leading-relaxed">
                                    Trader Profissional especializado em Price Action e leitura
                                    Candle a Candle. Com mais de 7 anos de mercado financeiro,
                                    decidiu compartilhar o conhecimento para ajudar alunos
                                    a alcançar lucratividade real.
                                </p>
                                <p className="text-lg text-[var(--white-40)] leading-relaxed">
                                    Criador de padrões autorais como o "Preguiçoso", "Teimoso"
                                    e "Leônidas" — contando com mais de 10 setups testados e validados por
                                    milhares de alunos todos os dias. Você pode ser um deles.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.45}>
                            <blockquote className="border-l-2 border-[var(--gold-premium)] pl-5">
                                <p className="text-[var(--white-60)] italic text-sm leading-relaxed">
                                    "Meu objetivo é formar traders que entendam verdadeiramente o mercado financeiro. 
                                    Que saibem analisar e entender o movimento do gráfico, ao invés de seguirem indicadores "milagrosos"."
                                </p>
                            </blockquote>
                        </FadeIn>

                        <FadeIn delay={0.55}>
                            <div className="flex items-center gap-4 lg:gap-8">
                                <div>
                                    <span className="font-display font-black text-4xl lg:text-5xl text-[var(--green-bull)] leading-none">+7</span>
                                    <p className="text-[10px] uppercase tracking-widest text-[var(--white-40)] font-bold mt-1">
                                        Anos de Mercado
                                    </p>
                                </div>
                                <div className="h-12 w-px bg-[var(--white-20)]" />
                                <div>
                                    <span className="font-display font-black text-4xl lg:text-5xl text-[var(--green-pure)] leading-none">+10</span>
                                    <p className="text-[10px] uppercase tracking-widest text-[var(--white-40)] font-bold mt-1">Setups Criados</p>
                                </div>
                                <div className="h-12 w-px bg-[var(--white-20)]" />
                                <div>
                                    <span className="font-display font-black text-4xl lg:text-5xl text-[var(--green-dark)] leading-none">+1,4k</span>
                                    <p className="text-[10px] uppercase tracking-widest text-[var(--white-40)] font-bold mt-1">Alunos Formados</p>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.65}>
                            <a
                                href="#metodologia"
                                className="inline-flex items-center gap-3 px-10 py-4 bg-[var(--green-bull)] text-white font-display font-bold uppercase tracking-wider text-sm hover:bg-[var(--green-dark)] transition-all hover:shadow-[var(--glow-green)] hover:scale-105"
                            >
                                Conhecer a Metodologia
                            </a>
                        </FadeIn>
                    </div>

                    {/* Right — photo + nome sobreposto */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Foto com máscara no container */}
                        <div className="relative w-full aspect-[3/4]">
                            <Image
                                src="/images/bruno/bruno_transparent.png"
                                alt="Bruno Borges"
                                fill
                                className="object-contain object-bottom"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>

                    </motion.div>

                </div>
            </div>

            {/* Nome centralizado sobrepondo a base da seção */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative z-20 w-full overflow-hidden leading-none select-none pointer-events-none -mt-16 lg:-mt-24"
            >
                <p
                    className="font-display font-black uppercase tracking-tighter text-white text-center whitespace-nowrap"
                    style={{ fontSize: "clamp(3rem, 10vw, 9rem)" }}
                >
                    Bruno Borges
                </p>
            </motion.div>
        </section>
    );
}
