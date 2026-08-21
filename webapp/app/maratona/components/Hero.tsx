"use client";

import Image from "next/image";
import { LeadCaptureForm } from "../../components/LeadCaptureForm";

export function Hero() {
    return (
        <section className="relative pb-8 overflow-hidden hero-bg">
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
                            <div className="w-full lg:col-span-8 flex flex-col space-y-6 relative z-20 pt-55 lg:pt-0">
                                <h1 className="text-4xl lg:text-5xl font-display-stitch font-black leading-tight tracking-tight text-[var(--text-main)]">
                                    Aprenda a{" "}
                                    <span className="bg-[var(--primary)] text-[var(--text-main)] px-2 py-1 transform -skew-x-6 inline-block">
                                        ler o gráfico
                                    </span>{" "}
                                    do jeito certo e melhore os seus resultados.
                                </h1>
                                <p className="text-sm font-display-stitch font-bold uppercase tracking-wider text-[var(--primary-dark)]">
                                    15, 16 e 17 de setembro • às 20h • online e gratuito
                                </p>
                                <p className="text-lg text-[var(--text-muted)] leading-snug">
                                    3 aulas ao vivo para você aprender a interpretar o gráfico, entender o contexto e operar com mais clareza. Faça a sua inscrição e tenha acesso as aulas, as gravações, aos resumões e a aula bônus.
                                </p>
                            </div>

                            {/* Opt-in Form */}
                            <div className="w-full lg:col-span-4 relative z-20">
                                <div id="inscricao" className="form-card bg-[var(--surface)] p-6 rounded-xl border border-[var(--surface-bright)] shadow-md relative overflow-visible max-w-md lg:max-w-full lg:ml-auto">
                                    <div className="absolute -top-3 -left-3 w-10 h-10 bg-[var(--primary)] rounded-br-full z-0" />
                                    <h3 className="text-lg font-display-stitch font-bold mb-3 text-center relative z-10 text-[var(--text-main)]">
                                        Inscreva-se gratuitamente
                                    </h3>
                                    <div className="relative z-10">
                                        <LeadCaptureForm
                                            source="maratona-set-2026"
                                            redirectTo="/maratona-grupo"
                                            buttonLabel="Quero Participar de Graça"
                                            variant="light"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
