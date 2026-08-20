"use client";

import Image from "next/image";

export function AboutEvent() {
    return (
        <section className="py-24 bg-[var(--surface)] relative overflow-hidden">
            <div className="absolute right-0 top-0 w-1/3 h-full bg-[var(--surface-container-low)] -skew-x-12 transform origin-top-right -z-10 hidden lg:block" />
            <div className="container mx-auto px-4">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-16 max-w-6xl mx-auto">
                    {/* About Content */}
                    <div className="w-full lg:w-7/12 space-y-6">
                        <h2 className="text-3xl md:text-5xl font-display-stitch font-black leading-tight tracking-tight text-[var(--text-main)]">
                            Pare de tentar adivinhar{" "}
                            <span className="bg-[var(--primary)]/20 px-1 border-b-4 border-[var(--primary)]">
                                pra que lado o mercado vai
                            </span>
                            .
                        </h2>
                        <div className="space-y-4 text-[var(--text-muted)] text-lg">
                            <p>
                                Durante 3 dias, o Bruno vai mostrar na prática como ele utiliza Price Action puro, Fibonacci e leitura de contexto para fazer as suas operações.
                            </p>
                            <p>
                                Não importa se você está começando agora ou se já opera há anos. Se você ainda busca mais clareza, consistência e confiança na leitura do gráfico, a Maratona é para você.
                            </p>
                        </div>
                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 mt-8">
                            <div className="p-6 bg-[var(--surface-container)] rounded-xl border-l-4 border-[var(--primary)] shadow-sm">
                                <div className="text-4xl font-display-stitch font-black text-[var(--text-main)] mb-1">+7</div>
                                <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-bold font-display-stitch">Anos operando</div>
                                <div className="text-xs text-[var(--text-muted)] opacity-70 mt-1">Mercado Real</div>
                            </div>
                            <div className="p-6 bg-[var(--surface-container)] rounded-xl border-l-4 border-[var(--primary)] shadow-sm">
                                <div className="text-4xl font-display-stitch font-black text-[var(--text-main)] mb-1">+10</div>
                                <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-bold font-display-stitch">Padrões autorais</div>
                                <div className="text-xs text-[var(--text-muted)] opacity-70 mt-1">Validados na Prática</div>
                            </div>
                            <div className="p-6 bg-[var(--surface-container)] rounded-xl border-l-4 border-[var(--primary)] shadow-sm col-span-2 md:col-span-1">
                                <div className="text-4xl font-display-stitch font-black text-[var(--text-main)] mb-1">+1.4k</div>
                                <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-bold font-display-stitch">Traders formados</div>
                                <div className="text-xs text-[var(--text-muted)] opacity-70 mt-1">Método TDS</div>
                            </div>
                        </div>
                        <div className="pt-8">
                            <a
                                href="#inscricao"
                                className="inline-block bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-[var(--text-main)] font-display-stitch font-bold py-4 px-10 rounded-xl transition duration-300 text-lg uppercase tracking-wide shadow-[4px_4px_0px_rgba(0,0,0,0.1)] hover:shadow-[2px_2px_0px_rgba(0,0,0,0.1)] hover:translate-y-[2px] hover:translate-x-[2px]"
                            >
                                Quero me inscrever
                            </a>
                        </div>
                    </div>

                    {/* About Image */}
                    <div className="w-full lg:w-5/12 mx-auto relative">
                        <div className="absolute top-4 -left-4 w-full h-full border-4 border-[var(--primary)] rounded-xl z-0 hidden md:block" />
                        <div className="relative z-10 rounded-xl overflow-hidden shadow-xl border border-[var(--surface-bright)] transform md:-rotate-2 transition-transform hover:rotate-0 duration-300">
                            {/* Painel com fundo sólido para ancorar a imagem recortada do Bruno */}
                            <div className="relative w-full h-[420px] md:h-[520px] bg-gradient-to-b from-[var(--surface-container)] to-[var(--primary)]/15 overflow-hidden">
                                <Image
                                    src="/images/bruno/bruno_meio-corpo_camiseta-preta_neutro.png"
                                    alt="Bruno Borges, Mentor TDS"
                                    fill
                                    className="object-contain object-bottom scale-100"
                                />
                            </div>
                            <div className="absolute bottom-6 left-6 bg-[var(--surface)] text-[var(--text-main)] px-4 py-2 rounded font-display-stitch font-bold uppercase tracking-widest text-xs shadow-md border-l-4 border-[var(--primary)] flex items-center z-20">
                                <span className="w-2 h-2 bg-[var(--primary)] rounded-full mr-2" /> Trader Bruno Borges • Mentor
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
