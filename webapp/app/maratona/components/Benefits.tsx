"use client";

export function Benefits() {
    const items = [
        {
            n: "01",
            title: "Aulas ao vivo",
            description:
                "Quatro noites com o Bruno, de 5 a 8/01, às 20h, com uma aula surpresa no último dia. As aulas não serão gravadas: ao vivo é onde você participa e tira as suas dúvidas na hora.",
        },
        {
            n: "02",
            title: "O Resumão",
            description:
                "Uma apostila com o conteúdo da Maratona, produzida pelo time depois do evento e enviada no grupo do Telegram para todos os inscritos que entrarem nele.",
        },
    ];

    return (
        <section className="py-12 section-red text-white relative pattern-dots-sm">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-display-stitch font-black mb-6 tracking-tight">
                        O que você leva ao se inscrever:
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {items.map((item) => (
                        <div
                            key={item.n}
                            className="bg-white p-8 rounded-xl border border-white/20 shadow-xl transform hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="text-[#d32f2f] text-6xl font-display-stitch font-black mb-4 leading-none opacity-20">{item.n}</div>
                            <h3 className="text-2xl font-display-stitch font-bold mb-3 text-[var(--text-main)]">{item.title}</h3>
                            <p className="text-[var(--text-muted)] text-sm">{item.description}</p>
                        </div>
                    ))}
                    <div className="md:col-span-2 bg-white p-8 md:p-10 rounded-xl border border-white/20 ring-4 ring-[var(--primary)] shadow-2xl transform hover:-translate-y-2 transition-transform duration-300">
                        <div className="inline-block bg-[var(--primary)] text-[var(--text-main)] text-xs font-display-stitch font-black uppercase tracking-wider px-3 py-1 rounded mb-4">
                            Bônus exclusivo para inscritos
                        </div>
                        <h3 className="text-3xl md:text-4xl font-display-stitch font-black mb-3 text-[var(--text-main)]">
                            Tira-dúvidas ao vivo com o Bruno
                        </h3>
                        <p className="text-sm font-display-stitch font-bold uppercase tracking-wider text-[#d32f2f] mb-4">
                            Segunda-feira, 11/01 • logo após a Live de Sucesso (20h30)
                        </p>
                        <p className="text-[var(--text-muted)] text-base">
                            Depois da Live de Sucesso, o Bruno abre uma sala no Zoom só para quem se inscreveu na Maratona. É a sua chance de conversar direto com ele: tirar dúvidas, falar sobre o mercado e perguntar sobre o método. O link chega pelo grupo do Telegram.
                        </p>
                    </div>
                </div>
                <div className="text-center mt-20">
                    <a
                        href="#inscricao"
                        className="inline-block bg-[var(--surface)] text-[#d32f2f] hover:bg-[var(--surface-dim)] font-display-stitch font-extrabold py-5 px-12 rounded-xl transition duration-300 text-lg uppercase tracking-wide shadow-[0_4px_0_#b71c1c,0_20px_25px_-5px_rgba(0,0,0,0.25)]"
                    >
                        Quero garantir minha vaga
                    </a>
                </div>
            </div>
        </section>
    );
}
