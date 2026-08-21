"use client";

export function WhatYouWillLearn() {
    const items = [
        { n: "01", title: "Leitura Candle a Candle", description: "Entenda o que o preço está fazendo." },
        { n: "02", title: "Fibonacci", description: "Encontre regiões, entradas e alvos." },
        { n: "03", title: "Contexto + Gerenciamento", description: "Saiba quando operar e quando ficar de fora." },
        { n: "04", title: "Operacional na Prática", description: "Veja o Bruno aplicando tudo diretamente no gráfico." },
    ];

    return (
        <section className="py-12 section-red text-white relative pattern-dots-sm">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-display-stitch font-black mb-6 tracking-tight">
                        Em apenas 3 dias você vai aprender:
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {items.map((item, i) => (
                        <div
                            key={i}
                            className={`bg-white p-8 rounded-xl border border-white/20 shadow-xl transform hover:-translate-y-2 transition-transform duration-300 ${
                                i % 2 === 1 ? "md:translate-y-6" : ""
                            }`}
                        >
                            <div className="text-[#d32f2f] text-6xl font-display-stitch font-black mb-4 leading-none opacity-20">{item.n}</div>
                            <h3 className="text-2xl font-display-stitch font-bold mb-3 text-[var(--text-main)]">{item.title}</h3>
                            <p className="text-[var(--text-muted)] text-sm">{item.description}</p>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-20">
                    <a
                        href="#inscricao"
                        className="inline-block bg-[var(--surface)] text-[#d32f2f] hover:bg-[var(--surface-dim)] font-display-stitch font-extrabold py-5 px-12 rounded-xl transition duration-300 text-lg uppercase tracking-wide shadow-2xl border-b-4 border-[#b71c1c]"
                    >
                        Eu quero aprender
                    </a>
                </div>
            </div>
        </section>
    );
}
