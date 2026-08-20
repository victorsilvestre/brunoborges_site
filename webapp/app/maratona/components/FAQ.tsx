"use client";

const faqs = [
    {
        question: "A Maratona é gratuita?",
        answer: "Sim, 100% gratuita. Não existe nenhuma cobrança para participar — nem antes, nem durante, nem depois do evento. O único passo necessário é entrar no grupo exclusivo no Telegram.",
    },
    {
        question: "Preciso ter experiência no mercado financeiro?",
        answer: "Não. O conteúdo foi estruturado para funcionar tanto para quem está começando do zero quanto para quem já opera e quer refinar o operacional. O Bruno parte da base e avança com profundidade em cada aula.",
    },
    {
        question: "Como vou receber os links das aulas?",
        answer: "Tudo chega pelo grupo exclusivo no Telegram. Você recebe o aviso antes de cada aula, o link para assistir ao vivo e o acesso às gravações no dia seguinte.",
    },
    {
        question: "Vou conseguir assistir mesmo se não puder ao vivo?",
        answer: "Sim. As gravações de todas as aulas ficam disponíveis no grupo da Maratona. Você assiste no seu tempo, no ritmo que fizer sentido pra você.",
    },
];

export function FAQ() {
    return (
        <section className="py-24 bg-[var(--surface)]">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl md:text-5xl font-display-stitch font-black text-center mb-16 uppercase tracking-tight text-[var(--text-main)]">
                    <span className="text-[var(--primary)] mr-2 bg-[var(--primary)]/10 px-2 rounded">?</span> Dúvidas Frequentes
                </h2>
                <div className="space-y-6">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="bg-[var(--surface-container)] p-6 md:p-8 rounded-xl border border-[var(--surface-bright)] shadow-sm hover:border-[var(--primary)]/50 transition-colors"
                        >
                            <h3 className="text-xl font-display-stitch font-bold mb-3 flex items-start text-[var(--text-main)]">
                                <span className="text-[var(--primary)] mr-3 text-2xl leading-none">•</span> {faq.question}
                            </h3>
                            <p className="text-[var(--text-muted)] md:ml-7 text-sm leading-relaxed">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
