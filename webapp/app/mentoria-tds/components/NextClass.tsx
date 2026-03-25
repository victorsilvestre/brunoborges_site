"use client";

import { FadeIn } from "./FadeIn";
import { Lock, Calendar, Zap, Ticket } from "lucide-react";

export function NextClass() {
    return (
        <section className="py-32 bg-[var(--dark-base)] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[var(--dark-elevated)] via-[var(--dark-base)] to-black opacity-80" />
            <div className="absolute w-[1px] h-[50%] bg-gradient-to-b from-transparent via-[var(--white-10)] to-transparent top-0 left-1/2 -translate-x-1/2 hidden lg:block pointer-events-none" />
            <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--white-10)] to-transparent top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none" />

            {/* Glowing lines */}
            <div className="absolute -left-1/4 top-1/4 w-[1000px] h-[2px] bg-[var(--green-bull)] opacity-20 rotate-[-15deg] blur-md pointer-events-none" />
            <div className="absolute -right-1/4 bottom-1/4 w-[1000px] h-[2px] bg-[var(--gold-premium)] opacity-10 rotate-[-15deg] blur-md pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">

                {/* Header CTA Style */}
                <FadeIn className="w-full">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20 bg-[var(--black-absolute)]/40 p-10 md:p-16 rounded-[40px] border border-[var(--white-10)] backdrop-blur-xl relative overflow-hidden group hover:border-[var(--green-bull)]/40 transition-colors duration-700">
                        {/* Shimmer */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-[1500ms] ease-in-out pointer-events-none" />

                        <div className="flex-1 text-center lg:text-left z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--red-bear)]/10 border border-[var(--red-bear)]/20 text-[var(--red-bear)] text-xs font-bold uppercase tracking-widest rounded-full mb-8">
                                <Lock className="w-3 h-3" /> Vagas Limitadas
                            </div>

                            <h2 className="font-display font-black text-5xl md:text-7xl lg:text-[5rem] text-transparent bg-clip-text bg-gradient-to-r from-white to-[var(--green-bull)] uppercase leading-[0.85] tracking-tighter mb-6 relative">
                                Próxima Turma
                            </h2>

                            <span className="font-script text-2xl md:text-5xl text-[var(--green-bull)] block -mt-4 mb-6 md:mb-8 origin-left -rotate-1">
                                Aulas ao vivo + Gravadas
                            </span>

                            <p className="text-xl text-[var(--white-60)] font-light max-w-lg mx-auto lg:mx-0">
                                Reserve seu passe de acesso e prepare-se para elevar o seu operacional a um nível que você nunca imaginou ser possível.
                            </p>


                        </div>

                        {/* Dates Widget */}
                        <div className="flex flex-col gap-6 w-full lg:w-auto shrink-0 relative z-10">
                            {/* Decorative line */}
                            <div className="absolute -left-10 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[var(--white-10)] to-transparent hidden lg:block pointer-events-none" />

                            <div className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-6 group/card hover:bg-[var(--gold-premium)]/5 transition-colors">
                                <div className="w-16 h-16 rounded-2xl bg-[var(--black-absolute)] border border-[var(--gold-premium)]/40 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(212,175,55,0.1)] group-hover/card:scale-110 transition-transform">
                                    <Zap className="w-8 h-8 text-[var(--gold-premium)]" />
                                </div>
                                <div>
                                    <div className="text-xs uppercase tracking-widest text-[var(--gold-premium)] font-bold mb-1">Inscrições Abertas</div>
                                    <div className="text-3xl font-display font-black text-white tracking-wide">02/04<span className="text-white/40">/26</span></div>
                                </div>
                            </div>

                            <div className="p-6 md:p-8 rounded-3xl bg-[var(--green-bull)]/5 border border-[var(--green-bull)]/20 backdrop-blur-md flex items-center gap-6 group/card hover:bg-[var(--green-bull)]/10 transition-colors">
                                <div className="w-16 h-16 rounded-2xl bg-[#032e1f]/30 border border-[var(--green-bull)]/40 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(16,185,129,0.2)] group-hover/card:scale-110 transition-transform">
                                    <Calendar className="w-8 h-8 text-[var(--green-bull)]" />
                                </div>
                                <div>
                                    <div className="text-xs uppercase tracking-widest text-[var(--green-bull)] font-bold mb-1">Início das Aulas</div>
                                    <div className="text-3xl font-display font-black text-white tracking-wide">15/04<span className="text-white/40">/26</span></div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6 w-full max-w-sm mx-auto md:mx-0 relative z-20">
                                <a
                                    href="https://t.me/+MSL99oO7pmcyMWQx"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex-1 flex items-center justify-center gap-4 px-5 py-3 bg-white text-black rounded-2xl font-display font-black text-lg uppercase tracking-widest overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:bg-[var(--green-bull)] hover:text-white shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(16,185,129,0.4)]"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
                                    <Ticket className="w-5 h-5 shrink-0" />
                                    <span>Garantir Vaga</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
