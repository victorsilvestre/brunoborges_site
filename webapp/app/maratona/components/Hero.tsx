"use client";

import Image from "next/image";

export function Hero() {
    return (
        <section className="relative pb-8 overflow-hidden hero-bg hero-bg-soft">
            {/* Imagem de fundo do Hero — largura total, desvanecendo radialmente nas bordas (mais forte na base) */}
            <div className="hero-image-fade absolute inset-x-0 top-0 h-[420px] lg:h-[640px]" aria-hidden="true">
                <Image
                    src="/images/hero/img-hero-maratona-v4.png"
                    alt=""
                    fill
                    priority
                    className="object-cover object-[75%_25%]"
                />
            </div>

            <div className="container mx-auto px-4 relative">
                {/* Grid de sobreposição: espaçador do tamanho da imagem + conteúdo alinhado à base, sobrepondo metade da imagem */}
                <div className="grid max-w-7xl mx-auto">
                    <div className="col-start-1 row-start-1 h-[420px] lg:h-[640px]" aria-hidden="true" />

                    {/* Conteúdo — mesma célula do espaçador, alinhado à base: metade sobrepõe a imagem, metade continua abaixo dela */}
                    <div className="col-start-1 row-start-1 self-end relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-8 items-end">
                            {/* Hero Content */}
                            <div className="w-full lg:col-span-6 xl:col-span-7 flex flex-col items-start space-y-6 relative z-20 pt-55 lg:pt-0">
                                <h1 className="text-4xl xl:text-5xl text-balance font-display-stitch font-black leading-tight tracking-tight text-[var(--text-main)]">
                                    Aplique o{" "}
                                    <span className="bg-[var(--primary)] text-[var(--text-main)] px-2 py-1 transform -skew-x-6 inline-block">
                                        Método TDS
                                    </span>{" "}
                                    <br className="hidden lg:block" />
                                    <span className="lg:whitespace-nowrap">durante quatro dias ao vivo</span>{" "}
                                    <br className="hidden lg:block" />
                                    com{"\u00A0"}o{"\u00A0"}Bruno.
                                </h1>
                                <p className="text-sm font-display-stitch font-bold uppercase tracking-wider text-[var(--primary-dark)]">
                                    De 5 a 8 de janeiro • às 20h • online e gratuito
                                </p>
                                <p className="text-lg text-[var(--text-muted)] leading-snug">
                                    4 aulas ao vivo para você aprender a interpretar o gráfico, entender o contexto e operar com mais clareza. Faça a sua inscrição e receba também o Resumão e um tira-dúvidas exclusivo com o Bruno.
                                </p>
                                <a
                                    href="#inscricao"
                                    className="inline-block bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-[var(--text-main)] font-display-stitch font-bold py-3 px-7 rounded-lg transition duration-300 text-sm uppercase tracking-wide shadow-[3px_3px_0px_rgba(0,0,0,0.1)] hover:shadow-[1px_1px_0px_rgba(0,0,0,0.1)] hover:translate-y-[2px] hover:translate-x-[2px]"
                                >
                                    Quero participar de graça
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
