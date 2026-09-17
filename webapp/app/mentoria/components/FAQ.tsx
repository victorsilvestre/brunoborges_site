"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5562982612893?text=" + encodeURIComponent("Olá! Queria mais informações sobre a Mentoria Trader de Sucesso.");

const faqs = [
    {
        q: "1. Preciso ter experiência em Day Trade para entrar?",
        a: "Não. A mentoria foi estruturada em uma lógica progressiva que começa pelos fundamentos absolutos da leitura candle a candle e movimentação do preço, avançando de forma didática até estratégias sofisticadas. Tanto iniciantes com vontade de aprender do jeito certo quanto operadores experientes que buscam consistência aproveitam o método integralmente.",
    },
    {
        q: "2. Quanto tempo dura a mentoria?",
        a: "A mentoria tem a duração de 60 dias de acompanhamento ativo, com 3 encontros ao vivo semanais. Além disso, os participantes contam com 30 dias de acesso diário à Sala Educacional matinal durante o horário do pregão ao vivo.",
    },
    {
        q: "3. As aulas ficam gravadas?",
        a: "Sim! Todas as aulas ao vivo, replays comentados e sessões de alinhamento são gravados em alta definição e disponibilizados na área de membros. Você tem acesso vitalício a esse acervo para assistir no seu ritmo e revisar quantas vezes quiser.",
    },
    {
        q: "4. O que é a Sala Educacional?",
        a: "A Sala Educacional é um ambiente exclusivo onde você acompanha Bruno Borges em tempo real, das 8h45 às 10h15, com o mercado aberto. O foco não é passar calls ou sinais, mas ensinar você a raciocinar o Price Action na hora em que o candle está se formando, consolidando a mentalidade analítica.",
    },
    {
        q: "5. O suporte é direto com Bruno?",
        a: "Sim, o suporte operacional é feito diretamente com o Bruno Borges. Você não falará com monitores terceirizados ou respostas robotizadas. As dúvidas de gráfico, contexto e gerenciamento são analisadas individualmente pelo próprio mentor.",
    },
    {
        q: "6. O método funciona apenas no Mini Índice?",
        a: "Não. Como o Método TDS é fundamentado em Price Action puro (leitura de oferta, demanda e psicologia de mercado através do preço), os conceitos e setups funcionam em qualquer ativo gráfico líquido: Mini Dólar, Ações, Nasdaq, S&P500 e Criptoativos.",
    },
    {
        q: "7. Quais são as formas de pagamento?",
        a: "Você pode pagar à vista via PIX ou Boleto Bancário pelo valor promocional de R$ 1.200,00, ou parcelar em até 12x de R$ 124,11 no cartão de crédito (com possibilidade de utilizar dois cartões simultaneamente para aprovação facilitada).",
    },
    {
        q: "8. E se eu entrar e perceber que a mentoria não é para mim?",
        a: "Você conta com uma garantia incondicional de 15 dias corridos. Assista às primeiras aulas, participe dos encontros ao vivo e analise todo o ecossistema TDS. Se achar que não valeu a pena, basta nos enviar um e-mail ou mensagem e reembolsaremos 100% do seu dinheiro, sem ressentimentos.",
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="w-full bg-[var(--m-subtle)] border-b border-[var(--m-border)] py-16 lg:py-24" id="faq">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white border border-[var(--m-border)] rounded text-[var(--m-dark)] font-[family-name:var(--m-font-mono)] text-[11px] font-bold uppercase mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--m-bull)]" />
                        Perguntas Frequentes
                    </div>
                    <h2 className="font-[family-name:var(--m-font-display)] text-3xl sm:text-4xl lg:text-5xl text-[var(--m-dark)] font-bold tracking-tight">
                        Tire todas as suas dúvidas sobre a TDS.
                    </h2>
                    <p className="mt-3 text-base sm:text-lg text-[var(--m-body)] leading-relaxed">
                        Respostas objetivas e transparentes para as principais perguntas de quem quer ingressar na mentoria.
                    </p>
                </div>

                {/* FAQ Accordion List */}
                <div className="space-y-3">
                    {faqs.map((item, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <div key={i} className={`bg-white border rounded-lg transition-all ${isOpen ? "border-[var(--m-bull)]" : "border-[var(--m-border)]"}`}>
                                <button
                                    type="button"
                                    onClick={() => setOpenIndex(isOpen ? null : i)}
                                    className="w-full p-5 text-left flex items-center justify-between gap-4"
                                    aria-expanded={isOpen}
                                >
                                    <span className="font-[family-name:var(--m-font-display)] text-base sm:text-lg font-bold text-[var(--m-dark)]">{item.q}</span>
                                    <ChevronDown className={`text-[var(--m-caption)] w-5 h-5 flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                                </button>
                                <div className={`faq-content ${isOpen ? "is-open" : ""}`}>
                                    <div className="px-5 pb-5 text-[var(--m-body)] text-sm leading-relaxed border-t border-[var(--m-border)] pt-4">
                                        {item.a}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Help Banner */}
                <div className="mt-10 text-center p-6 bg-white border border-[var(--m-border)] rounded-lg">
                    <p className="text-base text-[var(--m-body)]">
                        Ainda ficou com alguma dúvida sobre a turma? Fale com nosso time de atendimento.
                    </p>
                    <a className="inline-flex items-center gap-2 mt-2 font-[family-name:var(--m-font-mono)] text-xs uppercase tracking-wider font-bold text-[var(--m-bull)] hover:underline" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-[18px] h-[18px]" />
                        <span>Conversar via WhatsApp de Atendimento</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
