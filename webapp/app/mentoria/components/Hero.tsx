import Image from "next/image";
import { CalendarDays, Video, Timer, Infinity as InfinityIcon, ArrowRight, BadgeCheck } from "lucide-react";

export function Hero() {
    return (
        <section className="relative w-full border-b border-[var(--m-border)] pt-8 pb-16 lg:pt-14 lg:pb-24 grid-lines">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Dispatch Sub-header with Status */}
                <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 mb-8 border-b border-[var(--m-border)] gap-3 text-xs font-[family-name:var(--m-font-mono)]">
                    <div className="inline-flex items-center gap-2">
                        <span className="px-2 py-0.5 bg-[var(--m-bull-bg)] border border-[var(--m-bull-border)] text-[var(--m-bull)] font-bold rounded">Inscrições Abertas</span>
                        <span className="uppercase tracking-wide text-[var(--m-dark)] font-bold">Mentoria Trader de Sucesso</span>
                    </div>
                    <div className="hidden sm:flex text-[var(--m-caption)] items-center gap-2">
                        <span>MÉTODO VALIDADO</span>
                        <span>{"//"}</span>
                        <span className="text-[var(--m-dark)] font-medium">ÍNDICE &amp; DÓLAR &amp; NASDAQ &amp; OURO</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                    {/* Left Column: Copy & Actions */}
                    <div className="lg:col-span-7 flex flex-col items-start">
                        {/* Candlestick Mini Icon + Headline */}
                        <div className="hidden sm:flex items-center gap-2 mb-4">
                            <svg className="w-5 h-6 text-[var(--m-bull)]" fill="none" viewBox="0 0 20 24" xmlns="http://www.w3.org/2000/svg">
                                <line stroke="currentColor" strokeWidth="2" x1="10" x2="10" y1="0" y2="24" />
                                <rect fill="currentColor" height="12" width="8" x="6" y="6" />
                            </svg>
                            <span className="font-[family-name:var(--m-font-mono)] text-xs font-semibold text-[var(--m-bull)] tracking-wider uppercase">PRICE ACTION PURO • SEM INDICADORES</span>
                        </div>

                        <h1 className="font-[family-name:var(--m-font-display)] text-4xl sm:text-5xl lg:text-[56px] leading-[1.08] text-[var(--m-dark)] font-bold tracking-tight mb-6">
                            Pare de tentar adivinhar o lado do mercado. <span className="text-[var(--m-bull)] bg-[var(--m-bull-bg)] px-2 py-0.5 rounded border border-[var(--m-bull-border)] inline-block">Aprenda a ler o que o gráfico está mostrando.</span>
                        </h1>

                        <p className="text-base sm:text-lg text-[var(--m-body)] leading-relaxed mb-4 sm:mb-8 pl-4 border-l-2 border-[var(--m-bull)]">
                            Uma mentoria ao vivo de Price Action para quem quer construir uma leitura própria do mercado, entender o comportamento do preço e desenvolver um operacional com um método que já formou mais de 1.400 traders de sucesso.
                        </p>

                        {/* 4 Stat Pill Blocks */}
                        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-3 py-1.5 sm:py-4 border-y border-[var(--m-border)] mb-4 sm:mb-8 bg-[var(--m-subtle)] rounded-lg">
                            <div className="p-1.5 sm:p-3 border-r border-[var(--m-border)]">
                                <div className="flex items-center gap-1.5 text-[var(--m-bull)] mb-0.5 sm:mb-1">
                                    <CalendarDays className="w-[14px] h-[14px] sm:w-[18px] sm:h-[18px]" />
                                    <span className="text-[9px] sm:text-[10px] font-[family-name:var(--m-font-mono)] text-[var(--m-caption)]">DURAÇÃO</span>
                                </div>
                                <div className="font-[family-name:var(--m-font-mono)] text-[11px] sm:text-xs uppercase tracking-tight text-[var(--m-dark)] font-bold">60 dias de mentoria</div>
                            </div>
                            <div className="p-1.5 sm:p-3 sm:border-r border-[var(--m-border)]">
                                <div className="flex items-center gap-1.5 text-[var(--m-bull)] mb-0.5 sm:mb-1">
                                    <Video className="w-[14px] h-[14px] sm:w-[18px] sm:h-[18px]" />
                                    <span className="text-[9px] sm:text-[10px] font-[family-name:var(--m-font-mono)] text-[var(--m-caption)]">FREQUÊNCIA</span>
                                </div>
                                <div className="font-[family-name:var(--m-font-mono)] text-[11px] sm:text-xs uppercase tracking-tight text-[var(--m-dark)] font-bold">3 aulas ao vivo/sem</div>
                            </div>
                            <div className="p-1.5 sm:p-3 border-r border-[var(--m-border)]">
                                <div className="flex items-center gap-1.5 text-[var(--m-bull)] mb-0.5 sm:mb-1">
                                    <Timer className="w-[14px] h-[14px] sm:w-[18px] sm:h-[18px]" />
                                    <span className="text-[9px] sm:text-[10px] font-[family-name:var(--m-font-mono)] text-[var(--m-caption)]">CARGA</span>
                                </div>
                                <div className="font-[family-name:var(--m-font-mono)] text-[11px] sm:text-xs uppercase tracking-tight text-[var(--m-dark)] font-bold">+100h de conteúdo</div>
                            </div>
                            <div className="p-1.5 sm:p-3">
                                <div className="flex items-center gap-1.5 text-[var(--m-bull)] mb-0.5 sm:mb-1">
                                    <InfinityIcon className="w-[14px] h-[14px] sm:w-[18px] sm:h-[18px]" />
                                    <span className="text-[9px] sm:text-[10px] font-[family-name:var(--m-font-mono)] text-[var(--m-caption)]">ACESSO</span>
                                </div>
                                <div className="font-[family-name:var(--m-font-mono)] text-[11px] sm:text-xs uppercase tracking-tight text-[var(--m-dark)] font-bold">Acesso vitalício</div>
                            </div>
                        </div>

                        {/* CTA Row */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full mb-5">
                            <a
                                className="h-14 px-8 bg-[var(--m-bull)] hover:bg-[var(--m-bull-light)] text-white font-[family-name:var(--m-font-mono)] text-xs uppercase tracking-wider font-bold rounded flex items-center justify-center gap-3 transition-all hover:-translate-y-0.5 group"
                                style={{ boxShadow: "0 8px 24px -6px rgba(22, 163, 74, 0.45)" }}
                                href="#inscricao"
                            >
                                <span>Quero fazer parte da Mentoria TDS</span>
                                <ArrowRight className="w-[18px] h-[18px] group-hover:translate-x-1 transition-transform" />
                            </a>
                            <div className="hidden sm:flex items-center gap-2 text-[var(--m-dark)] font-[family-name:var(--m-font-mono)] text-xs px-3.5 py-3 border border-[var(--m-border)] rounded bg-white">
                                <BadgeCheck className="text-[var(--m-bull)] w-[18px] h-[18px]" />
                                <span className="font-semibold">Método 100% Validado</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Clean Day Trading Station Card */}
                    <div className="lg:col-span-5 w-full">
                        <div className="bg-white border border-[var(--m-border)] rounded-lg shadow-lg overflow-hidden">
                            {/* Clean Trading Station Photo */}
                            <div className="relative h-80 sm:h-96 overflow-hidden bg-slate-100">
                                <Image
                                    src="/images/mentoria/hero-workstation.png"
                                    alt="Bruno Borges em estação de trading com múltiplos monitores mostrando gráficos de Price Action"
                                    fill
                                    priority
                                    className="object-cover transition-all duration-300 hover:scale-[1.02]"
                                />
                            </div>

                            {/* Benchmark Metrics Row */}
                            <div className="grid grid-cols-2 gap-0 bg-white border-t border-[var(--m-border)] divide-x divide-[var(--m-border)] text-center">
                                <div className="p-4">
                                    <div className="font-[family-name:var(--m-font-mono)] text-[9px] text-[var(--m-caption)] uppercase font-semibold">ALUNOS FORMADOS</div>
                                    <div className="font-[family-name:var(--m-font-display)] text-2xl font-bold text-[var(--m-bull)] mt-0.5 tabular-nums">+1.400</div>
                                </div>
                                <div className="p-4">
                                    <div className="font-[family-name:var(--m-font-mono)] text-[9px] text-[var(--m-caption)] uppercase font-semibold">TEMPO DE MERCADO</div>
                                    <div className="font-[family-name:var(--m-font-display)] text-2xl font-bold text-[var(--m-dark)] mt-0.5">7+ ANOS</div>
                                </div>
                            </div>

                            {/* Urgency Callout */}
                            <div className="flex items-center gap-2 font-[family-name:var(--m-font-mono)] text-xs text-[var(--m-caption)] bg-[var(--m-subtle)] px-4 py-3 border-t border-[var(--m-border)]">
                                <span className="w-2 h-2 rounded-full bg-[var(--m-bear)] shrink-0" />
                                <span>Próxima turma com vagas limitadas. Inscrições abertas até <strong className="text-[var(--m-dark)] font-bold">29/09/26</strong> ou enquanto houver vagas.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
