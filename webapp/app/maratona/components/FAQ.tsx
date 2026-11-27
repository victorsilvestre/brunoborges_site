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
        answer: "Tudo chega pelo grupo exclusivo no Telegram. Você recebe o aviso antes de cada aula, o link para assistir ao vivo e, depois, o link do tira-dúvidas com o Bruno.",
    },
    {
        question: "As aulas vão ser gravadas?",
        answer: "Não. Nesta edição as aulas acontecem só ao vivo, por isso reserve os horários (de 5 a 8 de janeiro, às 20h). Depois da Maratona, todos os inscritos que estiverem no grupo recebem o Resumão, uma apostila com o conteúdo.",
    },
    {
        question: "Como funciona o tira-dúvidas com o Bruno?",
        answer: "Na segunda-feira, 11/01, logo após a Live de Sucesso (20h30), o Bruno abre uma sala no Zoom exclusiva para quem se inscreveu na Maratona. O link chega pelo grupo do Telegram, e você pode participar ativamente: tirar dúvidas, falar sobre o mercado e perguntar sobre o método.",
    },
    {
        question: "Quando recebo o Resumão?",
        answer: "O Resumão é produzido depois da Maratona e enviado no grupo do Telegram para todos os inscritos que entrarem nele. Assim que o material fica pronto, a gente envia.",
    },
];

export function FAQ() {
    return (
        <section className="py-12 bg-[var(--surface)]">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl md:text-5xl font-display-stitch font-black text-center mb-16 uppercase tracking-tight text-[var(--text-main)]">
                    Dúvidas Frequentes
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
                            <p className="text-[var(--text-muted)] md:ml-7 text-sm leading-snug">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
