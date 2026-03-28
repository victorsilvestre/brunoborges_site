"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, TrendingUp, Target } from "lucide-react";
import { FadeIn } from "./FadeIn";

export function Hero() {
    return (
        <section className="relative min-h-[95vh] lg:min-h-screen flex items-center overflow-hidden pt-20 bg-[var(--light-base)]">
            {/* Light Background Pattern */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
                <div className="absolute right-0 top-0 -z-10 h-[500px] w-[500px] rounded-full opacity-[0.07] blur-[120px]" style={{ background: 'var(--red-pure)' }}></div>
                <div className="absolute left-1/4 bottom-0 -z-10 h-[400px] w-[400px] rounded-full opacity-[0.05] blur-[100px]" style={{ background: 'var(--green-pure)' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full mb-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Text */}
                    <div className="max-w-xl">
                        <FadeIn>
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg border mb-8" style={{ borderColor: 'var(--red-border)', background: 'var(--red-border)', color: 'var(--red-pure)' }}>
                                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--red-pure)', boxShadow: '0 0 8px var(--red-dim)' }} />
                                <span className="text-xs font-bold tracking-widest uppercase">Evento Online Exclusivo</span>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <h1 className="font-display font-black text-5xl md:text-6xl lg:text-[70px] leading-[1.05] tracking-tight mb-6 text-[var(--dark-pure)]">
                                Participe da <br />
                                <span className="text-[var(--dark-pure)]">14ª Maratona</span>{" "}
                                <span className="block italic" style={{ color: 'var(--green-dark)' }}>Trader de Sucesso</span>
                            </h1>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <p className="text-lg md:text-xl text-[var(--dark-medium)] mb-8 leading-relaxed max-w-[480px]">
                                Aprenda de forma direta, organizada e sem custo. Domine as ferramentas e estratégias para operar no mercado financeiro entendendo exatamente o que o gráfico está mostrando.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.25}>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-10">
                                <div className="inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-white shadow-sm border border-slate-200">
                                    <Calendar className="w-5 h-5" style={{ color: 'var(--red-pure)' }} />
                                    <span className="text-sm font-bold tracking-wider text-[var(--dark-pure)]">31/03 a 02/04/26</span>
                                </div>
                                <div className="inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-white shadow-sm border border-slate-200">
                                    <span className="text-sm font-bold tracking-wider text-[var(--dark-pure)]">100% Online e Gratuito</span>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.4}>
                            <div className="flex flex-col sm:flex-row gap-6 items-center">
                                <a href="https://t.me/+7OFz4IzbCLQ5MDhh" target="_blank" rel="noopener noreferrer" className="text-white py-4 px-8 text-lg w-full sm:w-auto flex items-center justify-center rounded-xl transition-all hover:-translate-y-1" style={{ background: 'var(--green-pure)', boxShadow: '0 8px 20px var(--green-dim)' }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--green-dark)'; (e.currentTarget as HTMLElement).style.boxShadow = 'var(--glow-green)'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--green-pure)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 20px var(--green-dim)'; }}>
                                    <span className="font-bold">Garantir Minha Vaga</span>
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </a>

                                {/* Social Proof block similar to reference */}
                                <div className="flex items-center gap-3 w-full sm:w-auto mt-2 sm:mt-0">
                                    <div className="flex -space-x-2">
                                        <img src="https://i.pravatar.cc/100?img=1" alt="Alunos" className="w-9 h-9 rounded-full border-2 border-white shadow-sm" />
                                        <img src="https://i.pravatar.cc/100?img=12" alt="Alunos" className="w-9 h-9 rounded-full border-2 border-white shadow-sm" />
                                        <img src="https://i.pravatar.cc/100?img=33" alt="Alunos" className="w-9 h-9 rounded-full border-2 border-white shadow-sm" />
                                    </div>
                                    <div className="flex flex-col items-start leading-tight">
                                        <div className="flex items-center text-yellow-400 text-sm">
                                            {"★".repeat(5)} <span className="text-[var(--dark-pure)] font-bold ml-1 text-base">5.0</span>
                                        </div>
                                        <span className="text-xs font-medium text-[var(--dark-medium)]">(+1,2k alunos)</span>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right Column: Illustration / Floating Elements */}
                    <div className="relative mt-16 lg:mt-0 lg:h-[600px] flex items-center justify-center">
                        <FadeIn delay={0.6} className="relative w-full max-w-lg">
                            {/* Abstract organic shape behind */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[110%] h-[110%] bg-[#fff0ed] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] -z-10 shadow-inner"></div>

                            {/* Main Setup/Trader Image Area */}
                            <div className="relative z-10 w-full aspect-[4/3] rounded-3xl bg-white border border-slate-100 shadow-2xl overflow-hidden p-6">
                                <div className="w-full h-full relative rounded-2xl overflow-hidden bg-slate-50 border border-slate-200">
                                    <img src="/images/image_tela-bruno.png" alt="Tela Bruno Borges" className="w-full h-full object-cover opacity-95" />
                                </div>
                            </div>

                            {/* Floating Widget 1: Profit / Performance */}
                            <motion.div
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="absolute -left-6 md:-left-16 top-16 md:top-24 z-20 bg-white p-5 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 w-48 max-w-[calc(100vw-40px)]"
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-xs font-medium text-[var(--dark-medium)]">Assertividade</span>
                                    <span className="text-xs font-bold flex items-center" style={{ color: 'var(--green-pure)' }}>
                                        <TrendingUp className="w-3 h-3 mr-1" /> +90%
                                    </span>
                                </div>
                                <div className="text-3xl font-black text-[var(--dark-pure)]">92,5%</div>
                                <div className="text-xs text-[var(--dark-medium)] mt-1">No último mês</div>
                            </motion.div>

                            {/* Floating Widget 3: Setup Graph */}
                            <motion.div
                                animate={{ y: [-8, 8, -8] }}
                                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
                                className="absolute right-0 md:-right-8 -bottom-12 md:-bottom-16 z-20 bg-white p-5 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 w-48 flex flex-col items-center max-w-[calc(100vw-60px)]"
                            >
                                <div className="flex justify-between w-full text-[var(--dark-medium)] text-xs font-medium mb-4">
                                    <span>Gerenciamento</span>
                                    <span className="flex items-center" style={{ color: 'var(--green-pure)' }}><TrendingUp className="w-3 h-3 mr-1" />90%</span>
                                </div>
                                <div className="relative w-24 h-24">
                                    <svg viewBox="0 0 36 36" className="w-24 h-24 max-w-full" style={{ color: 'var(--green-pure)' }}>
                                        <path
                                            className="text-slate-100"
                                            strokeWidth="4"
                                            stroke="currentColor"
                                            fill="none"
                                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        />
                                        <path
                                            strokeWidth="4"
                                            strokeDasharray="90, 100"
                                            strokeLinecap="round"
                                            stroke="currentColor"
                                            fill="none"
                                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        />
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                                        <span className="text-xl font-bold text-[var(--dark-pure)]">90%</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating Side Tools matching reference */}
                            <div className="absolute -right-16 md:-right-24 top-1/4 bg-white rounded-2xl p-2 shadow-lg border border-slate-100 hidden lg:flex flex-col gap-4 z-10">
                                <div className="p-3 rounded-xl" style={{ background: 'var(--green-dim)', color: 'var(--green-pure)' }}><Target className="w-5 h-5" /></div>
                                <div className="p-3 text-[var(--dark-medium)] hover:text-[var(--green-pure)] transition-colors"><TrendingUp className="w-5 h-5" /></div>
                                <div className="p-3 text-[var(--dark-medium)] hover:text-[var(--green-pure)] transition-colors"><Calendar className="w-5 h-5" /></div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}

