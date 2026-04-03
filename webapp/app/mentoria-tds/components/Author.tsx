"use client";

import { motion } from "framer-motion";
import { FadeIn } from "../../components/FadeIn";
import { useModal } from "../ModalContext";

export function Author() {
    const { openModal } = useModal();
    return (
        <section className="relative py-32 bg-[var(--dark-base)] overflow-hidden">

            {/* Immersive Background Glows */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--gold-premium)]/10 blur-[150px] rounded-full" />
                <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-[var(--green-bull)]/5 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-20">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    <div className="lg:col-span-7 z-20 order-2 lg:order-1 pt-8 lg:pt-0">
                        <FadeIn>
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[var(--white-20)] bg-[var(--white-10)] backdrop-blur-md mb-8">
                                <span className="text-xs font-bold tracking-widest uppercase text-white">Seu último Mentor</span>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <h2 className="font-display font-black text-6xl md:text-8xl uppercase leading-[0.9] tracking-tighter mb-8 text-white">
                                Quem é <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--green-pure)] to-[var(--green-pure)]">Bruno Borges</span>
                            </h2>
                        </FadeIn>

                        <div className="space-y-6 text-xl text-[var(--white-60)] font-light leading-relaxed max-w-xl">
                            <FadeIn delay={0.2}>
                                <p>
                                    Trader Profissional e Mentor especializado em <strong className="text-white font-semibold">Price Action</strong>. Utilizo a leitura <strong className="text-white font-semibold">Candle a Candle</strong> todos os dias para extrair o máximo do mercado financeiro.
                                </p>
                            </FadeIn>
                            <FadeIn delay={0.3}>
                                <p>
                                    Possuo mais de <strong className="text-white font-semibold">7 anos de experiência</strong> no Mercado Financeiro e decidi ajudar pessoas comuns a alcançarem lucratividade e consistência no <strong className="text-white font-semibold">Day Trade</strong>.
                                </p>
                            </FadeIn>
                            <FadeIn delay={0.4}>
                                <p>
                                    Sou o criador de <strong className="text-white font-semibold">Padrões de Price Action</strong> que buscam acelerar o aprendizado dos alunos,
                                    como o <strong className="text-white font-semibold">“Preguiçoso”</strong> e o <strong className="text-white font-semibold">“Teimoso”</strong>.
                                    Ao todo, são mais de 10 padrões testados e validados por milhares de alunos diariamente.
                                </p>
                            </FadeIn>
                        </div>

                        <FadeIn delay={0.5} className="mt-16">
                            <div className="space-y-10">
                                <span className="font-script text-5xl text-[var(--green-bull)] block">
                                    Vamos juntos nessa jornada.
                                </span>
                                <button
                                    onClick={openModal}
                                    className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[var(--green-bull)] text-white font-display font-bold uppercase tracking-wider hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(0,191,99,0.30)] hover:shadow-[0_0_40px_rgba(0,191,99,0.50)]"
                                >
                                    Entrar para o Time
                                </button>
                            </div>
                        </FadeIn>
                    </div>

                    <div className="lg:col-span-5 relative z-10 order-1 lg:order-2 flex justify-center">
                        {/* Transparent Cutout Image */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="relative w-full max-w-md mx-auto aspect-[3/4]"
                        >
                            {/* Backglow specifically for the image */}
                            <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-[var(--gold-premium)]/20 to-transparent blur-[80px]" />

                            <img
                                src="/image_bruno-borges.webp"
                                alt="Bruno Borges"
                                className="relative z-10 w-full h-full object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                            />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
