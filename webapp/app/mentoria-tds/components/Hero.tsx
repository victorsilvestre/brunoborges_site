"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { FadeIn } from "../../components/FadeIn";
import { INSCRICOES_ABERTAS } from "../config";

const HOTMART_URL = "https://pay.hotmart.com/O105700075J";

export function Hero() {
    return (
        <section className="relative min-h-[95vh] lg:min-h-screen flex items-center overflow-hidden pt-20 border-b border-[var(--white-10)]">

            {/* Faixa de urgência - Vagas Limitadas */}
            {INSCRICOES_ABERTAS && (
                <div className="absolute top-0 left-0 right-0 z-20 bg-[var(--red-bear)] py-2 flex items-center justify-center">
                    <span className="text-white text-xs md:text-sm font-black uppercase tracking-[0.25em]">
                        Últimos Dias - Encerra Amanhã, 07/07
                    </span>
                </div>
            )}

            {/* Premium Background Diagram */}
            <div className="absolute inset-0 z-0 bg-black">
                <Image
                    src="/images/imagem_hero-1.jpg"
                    alt="Trader Setup Background"
                    fill
                    priority
                    className="object-cover object-[70%_50%] lg:object-[75%_50%] opacity-[0.45] grayscale-[20%] scale-105"
                />

                {/* Advanced Gradients - Protege o texto na esquerda reforçando o fade suave */}
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--dark-base)] via-[var(--dark-base)]/80 to-transparent opacity-95" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark-base)] via-[var(--dark-base)]/20 to-transparent opacity-70" />

                {/* Decorative Premium Orbs */}
                <div className="absolute top-1/4 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-[var(--green-bull)] opacity-[0.08] blur-[150px]" />
                <div className="absolute bottom-0 left-0 w-[800px] h-[800px] rounded-full bg-[var(--gold-premium)] opacity-[0.04] blur-[150px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full mb-10">
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    <div className="lg:col-span-9 xl:col-span-10 max-w-4xl">
                        <FadeIn>
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[var(--green-bull)] bg-black/50 backdrop-blur-md mb-8">
                                <span className="w-2 h-2 rounded-full bg-[var(--green-bull)] shadow-[var(--glow-green)] animate-pulse" />
                                <span className="text-xs font-bold tracking-widest uppercase text-white/80">Mentoria Trader de Sucesso</span>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <h1 className="font-display font-black text-5xl md:text-[45px] lg:text-[60px] xl:text-[80px] leading-[0.9] uppercase tracking-tighter mb-12 md:mb-10 text-white shadow-black/50 drop-shadow-2xl">
                                Pare de perder dinheiro <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--white)] to-[var(--white-80)]">tentando adivinhar</span><br />
                                <span className="text-[var(--white-80)] drop-shadow-lg">o mercado.</span>
                            </h1>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <span className="font-script text-5xl md:text-7xl text-[var(--green-bull)] block -mt-4 mb-6 md:mb-8 origin-left -rotate-1 drop-shadow-md">
                                
                            </span>
                        </FadeIn>

                        {/* <FadeIn delay={0.25}>
                            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[var(--green-bull)]/30 bg-[var(--green-bull)]/10 backdrop-blur-md mb-10 md:mb-12">
                                <span className="w-2 h-2 rounded-full bg-[var(--green-bull)] animate-pulse" />
                                <span className="text-lg md:text-xl font-bold tracking-wider uppercase text-[var(--green-bull)] italic">
                                    {INSCRICOES_ABERTAS ? "Próxima Turma: 07/07/26" : "Nova turma em breve"}
                                </span>
                            </div>
                        </FadeIn> */}

                        <FadeIn delay={0.3}>
                            <p className="text-xl md:text-2xl text-[var(--white-80)] max-w-3xl mb-8 md:mb-10 font-light leading-[1.25] drop-shadow-md">
                                Se você quer evoluir no day trade, entender o Price Action de verdade e parar de perder dinheiro no mercado esse é o caminho. A <strong className="text-white font-semibold">Mentoria Trader de Sucesso</strong> já formou mais de 1.200 alunos, e com certeza vai ajudar você a transformar seus resultados.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.4}>
                            <div className="flex flex-col sm:flex-row gap-6">
                                {INSCRICOES_ABERTAS ? (
                                    <a href={HOTMART_URL} target="_blank" rel="noopener noreferrer" className="btn btn-green group relative overflow-hidden py-5 px-10 text-lg w-full sm:w-auto flex items-center justify-center shadow-[0_0_30px_rgba(0,191,99,0.30)] hover:shadow-[0_0_50px_rgba(0,191,99,0.50)] transition-shadow">
                                        <span className="relative z-10 flex items-center gap-3 font-display font-bold uppercase tracking-wider">
                                            Garantir Minha Vaga <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                    </a>
                                ) : (
                                    <div className="btn py-5 px-10 text-lg w-full sm:w-auto flex items-center justify-center font-display font-bold uppercase tracking-wider opacity-50 cursor-not-allowed border border-white/20 text-white/50 rounded-xl">
                                        Inscrições Encerradas
                                    </div>
                                )}
                                {/* <a href="#about" className="btn btn-outline-white backdrop-blur-md bg-black/30 hover:bg-white/10 py-5 px-10 text-lg w-full sm:w-auto flex items-center justify-center font-display font-bold uppercase tracking-wider">
                                    Saiba Mais
                                </a> */}
                            </div>
                        </FadeIn>
                    </div>

                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 opacity-60 z-20"
            >
                <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-white">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
            </motion.div>


        </section>
    );
}
