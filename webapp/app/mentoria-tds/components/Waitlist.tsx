"use client";

import { FadeIn } from "../../components/FadeIn";
import { ArrowRight } from "lucide-react";

export function Waitlist() {
    return (
        <section id="waitlist" className="relative py-32 bg-[var(--light-surface)] overflow-hidden border-y border-slate-200">

            {/* Background Orbs */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[var(--green-dark)]/10 blur-[150px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">

                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                        <div>
                            <FadeIn>
                                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[var(--green-bull)]/20 bg-[var(--green-bull)]/5 text-[var(--green-bull)] mb-8">
                                    <span className="w-2 h-2 rounded-full bg-[var(--green-bull)] animate-pulse" />
                                    <span className="text-xs font-bold tracking-widest uppercase text-[var(--dark-pure)]">Inscrições Abertas</span>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.1}>
                                <h2 className="font-display font-black text-6xl md:text-7xl uppercase leading-[0.9] tracking-tighter mb-6 text-[var(--dark-pure)]">
                                    Venha <br />
                                    <span className="text-[var(--green-pure)]">Rápido</span>
                                </h2>
                            </FadeIn>

                            <FadeIn delay={0.2}>
                                <p className="text-xl text-[var(--dark-medium)] font-medium leading-relaxed mb-8">
                                    Faça parte da próxima turma da Mentoria.{" "} 
                                    <strong className="text-[var(--dark-pure)] font-bold">Clique no link ao lado</strong>, 
                                    realize sua inscrição e entre para o grupo oficial de Alunos TDS.
                                    <br /><br />
                                    As <strong className="text-[var(--dark-pure)] font-bold">vagas são limitadas</strong>, 
                                    aproveite essa oportunidade única de transformar a sua jornada no mercado financeiro.
                                </p>
                            </FadeIn>
                        </div>

                        <FadeIn delay={0.3} direction="left">
                            <div className="bg-white p-10 rounded-[2rem] shadow-xl border border-slate-200 relative overflow-hidden text-center">

                                {/* Gold header accent */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--green-dark)] to-[var(--green-pure)]/20" />

                                <div className="py-8 flex flex-col items-center justify-center">
                                    <div className="w-20 h-20 mb-8 opacity-80">
                                        <svg viewBox="0 0 24 24" fill="var(--green-pure)" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8C16.49 10.38 15.82 14.32 15.48 16.14C15.34 16.91 15.06 17.17 14.79 17.19C14.21 17.25 13.77 16.81 13.2 16.44C12.3 15.85 11.79 15.49 10.92 14.92C9.9 14.25 10.56 13.88 11.12 13.29C11.27 13.14 13.84 10.81 13.89 10.59C13.9 10.56 13.9 10.45 13.84 10.4C13.78 10.35 13.68 10.37 13.61 10.38C13.51 10.4 11.83 11.51 8.57 13.71C8.09 14.04 7.66 14.2 7.27 14.19C6.84 14.18 6.01 13.95 5.39 13.74C4.63 13.5 4.02 13.37 4.08 12.94C4.11 12.72 4.41 12.49 4.9 12.25C8.07 10.87 10.18 9.96 11.24 9.53C14.25 8.28 14.88 8.06 15.29 8.05C15.38 8.05 15.58 8.07 15.71 8.17C15.81 8.25 15.84 8.36 15.85 8.44C15.83 8.53 16.64 8.8 16.64 8.8Z" />
                                        </svg>
                                    </div>

                                    <a
                                        href="/mentoria-tds/checkout"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full bg-[var(--green-pure)] text-[var(--ligth-elevated)] font-display font-black text-lg uppercase tracking-wider py-6 sm:px-8 rounded-xl hover:bg-[var(--green-pure)]/85 transition-colors duration-300 flex items-center justify-center gap-3 mt-4 group shadow-sm"
                                    >
                                        Quero entrar! <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                    </a>

                                    <p className="text-center text-sm text-[var(--dark-medium)] mt-6 uppercase tracking-widest font-bold">
                                        Grupo Oficial de Alunos TDS
                                    </p>
                                </div>

                            </div>
                        </FadeIn>

                    </div>
                </div>
            </div>
        </section>
    );
}
