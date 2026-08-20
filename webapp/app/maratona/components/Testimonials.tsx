"use client";

const QuoteIcon = () => (
    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
);

export function Testimonials() {
    const testimonials = [
        {
            quote: "Aulas fantásticas, com explicações focadas nos detalhes e nas nossas dúvidas. Uma sensação libertadora de que é tudo muito simples se tiver disciplina e focar no simples sem inventar moda. Gratidão!",
            name: "Debora Malta",
            role: "Aluna TDS",
            offset: false,
        },
        {
            quote: "Meus mais sinceros agradecimentos, por toda a dedicação e paciência para nos repassar toda a riqueza de conhecimentos e aprendizado. Agradeço a Deus por fazer parte desta verdadeira família TDS.",
            name: "Bino",
            role: "Aluno TDS",
            offset: true,
        },
        {
            quote: "Sem sombra de dúvidas, um mentor claro e preparado, explica com paciência. Tira as dúvidas tranquilo, faz você sentir segurança no operacional que ele ensina. Parabéns Bruno e Fernanda!",
            name: "Valtinho Mezari",
            role: "Aluno TDS",
            offset: false,
        },
    ];

    return (
        <section className="py-24 bg-[var(--surface-container)] border-b border-[var(--surface-bright)]">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-display-stitch font-black text-center mb-16 uppercase tracking-tight text-[var(--text-main)]">
                    <span className="text-[var(--primary)] mr-2">/</span> Depoimentos
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className={`bg-[var(--surface)] p-8 rounded-xl border border-[var(--surface-bright)] shadow-sm flex flex-col relative overflow-hidden ${
                                t.offset ? "transform md:-translate-y-4" : ""
                            }`}
                        >
                            <div className="absolute top-0 right-0 w-16 h-16 bg-[var(--primary)]/10 rounded-bl-full -z-0" />
                            <div className="text-[var(--primary)] mb-6 relative z-10">
                                <QuoteIcon />
                            </div>
                            <p className="text-[var(--text-main)] text-sm leading-relaxed mb-8 italic grow relative z-10">
                                &ldquo;{t.quote}&rdquo;
                            </p>
                            <div className="mt-auto border-t border-[var(--surface-bright)] pt-4 relative z-10">
                                <div className="font-display-stitch font-bold text-lg text-[var(--text-main)]">{t.name}</div>
                                <div className="text-xs text-[var(--primary-dark)] font-bold uppercase tracking-wider">{t.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
