"use client";

export function Schedule() {
    const classes = [
        {
            label: "AULA 1 - TERÇA — 05/01 — 20HRS",
            title: "Conheça e aplique o operacional lucrativo mais simples de Day Trade",
            description: "",
            highlight: false,
        },
        {
            label: "AULA 2 - QUARTA — 06/01 — 20HRS",
            title: "Utilize a melhor região para fazer entradas no mercado",
            description: "",
            highlight: true,
        },
        {
            label: "AULA 3 - QUINTA — 07/01 — 20HRS",
            title: "Aumente a sua mão do jeito certo e veja seus resultados evoluírem",
            description: "",
            highlight: false,
        },
        {
            label: "AULA 4 - BÔNUS",
            title: "Bônus Exclusivo Surpresa",
            description: "",
            highlight: false,
        },
    ];

    return (
        <section className="py-12 bg-[var(--surface-container-low)] border-y border-[var(--surface-bright)] relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <h2 className="text-3xl md:text-5xl font-display-stitch font-black text-center mb-16 uppercase tracking-tight text-[var(--text-main)]">
                    <span className="text-[var(--primary)] mr-2">/</span> Calendário Completo
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {classes.map((item, i) => (
                        <div
                            key={i}
                            className={`bg-[var(--surface)] p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow group relative flex flex-col ${
                                item.highlight
                                    ? "border-2 border-[var(--primary)] shadow-lg z-10"
                                    : `border border-[var(--surface-bright)] transform ${i === 0 ? "md:translate-y-4" : "md:translate-y-8"}`
                            }`}
                        >
                            {!item.highlight && (
                                <div className="absolute top-0 left-0 w-full h-1 bg-[var(--surface-bright)] group-hover:bg-[var(--primary)] transition-colors" />
                            )}
                            {item.highlight && (
                                <div className="absolute -top-4 right-6 bg-[var(--primary)] text-[var(--text-main)] text-xs font-bold px-3 py-1 rounded-full uppercase shadow-sm">
                                    Virada de Chave
                                </div>
                            )}
                            <div
                                className={`font-bold text-xs mb-4 tracking-widest uppercase py-1 px-3 inline-block rounded-full self-start ${
                                    item.highlight
                                        ? "bg-[var(--primary)]/20 text-[var(--primary-dark)]"
                                        : "bg-[var(--primary)]/10 text-[var(--primary)]"
                                }`}
                            >
                                {item.label}
                            </div>
                            <h3 className="text-xl font-display-stitch font-bold mb-4 text-[var(--text-main)]">
                                {item.title}
                            </h3>
                            {item.description && <p className="text-[var(--text-muted)] text-sm mt-auto">{item.description}</p>}
                        </div>
                    ))}
                </div>
                <div className="text-center mt-20">
                    <a
                        href="#inscricao"
                        className="inline-block bg-[var(--surface)] hover:bg-[var(--surface-dim)] text-[var(--text-main)] border-2 border-[var(--text-main)] font-display-stitch font-bold py-4 px-10 rounded-xl transition duration-300 text-lg uppercase tracking-wide shadow-[4px_4px_0px_rgba(162,203,16,1)] hover:shadow-[2px_2px_0px_rgba(162,203,16,1)] hover:translate-y-[2px] hover:translate-x-[2px]"
                    >
                        Quero assistir as aulas ao vivo
                    </a>
                </div>
            </div>
        </section>
    );
}
