import { CheckCircle2, ArrowRight } from "lucide-react";

const pillars = [
    {
        tag: "PILAR 01",
        num: "01.",
        title: "MENTORIA AO VIVO",
        body: "Durante 60 dias, você participa de aulas ao vivo três vezes por semana diretamente com Bruno Borges, construindo o Método TDS do básico ao avançado com tempo para tirar dúvidas e aprofundar cada detalhe do movimento.",
        footer: "3 encontros semanais ao vivo",
        badge: false,
    },
    {
        tag: "PILAR 02",
        num: "02.",
        title: "SALA EDUCACIONAL",
        body: "Durante 30 dias, acompanhe Bruno das 8h45 às 10h15 analisando o mercado ao vivo e aplicando, em cenários reais de abertura e volatilidade, os conceitos estudados na Mentoria — reforçando a prática da leitura em tempo real.",
        footer: "Segunda a Sexta, 8h45 às 10h15",
        badge: true,
    },
    {
        tag: "PILAR 03",
        num: "03.",
        title: "AULAS PRÁTICAS",
        body: "Replays de mercado, análises, estudos de contexto e encontros aos sábados ajudam a aprofundar o operacional e transformar conceito em leitura prática, permitindo testar hipóteses com velocidade e sem exposição desnecessária.",
        footer: "Replays e encontros de fim de semana",
        badge: false,
    },
    {
        tag: "PILAR 04",
        num: "04.",
        title: "ACOMPANHAMENTO CONTÍNUO",
        body: "Tire dúvidas diretamente com Bruno, participe do grupo exclusivo da turma com traders alinhados e mantenha acesso vitalício às gravações para revisar o conteúdo sempre que precisar sanar uma situação específica de mercado.",
        footer: "Canal direto com o mentor",
        badge: false,
    },
];

export function LearningPillars() {
    return (
        <section className="w-full bg-[var(--m-surface)] border-b border-[var(--m-border)] py-16 lg:py-24" id="funcionamento">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mb-14">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[var(--m-subtle)] border border-[var(--m-border)] rounded text-[var(--m-dark)] font-[family-name:var(--m-font-mono)] text-[11px] font-bold uppercase mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--m-bull)]" />
                        Muito além das aulas gravadas
                    </div>
                    <h2 className="font-[family-name:var(--m-font-display)] text-3xl sm:text-4xl lg:text-5xl text-[var(--m-dark)] font-bold tracking-tight">
                        Você aprende estudando o método e vendo como ele se comporta na prática.
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-[var(--m-body)] leading-relaxed">
                        A Mentoria TDS combina conteúdo estruturado, acompanhamento e contato constante com situações reais de mercado para que o aprendizado não fique apenas na teoria.
                    </p>
                </div>

                {/* 4 Core Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {pillars.map((p) => (
                        <div key={p.tag} className="bg-[var(--m-subtle)] p-8 rounded-lg border border-[var(--m-border)] flex flex-col justify-between relative hover:border-[var(--m-bull)] transition-all">
                            {p.badge && (
                                <div className="absolute top-4 right-4 bg-[var(--m-bull)] text-white font-[family-name:var(--m-font-mono)] text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded">
                                    Bônus Exclusivo
                                </div>
                            )}
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="font-[family-name:var(--m-font-mono)] text-xs font-bold text-[var(--m-bull)] bg-[var(--m-bull-bg)] border border-[var(--m-bull-border)] px-2 py-0.5 rounded">{p.tag}</span>
                                    <span className="font-[family-name:var(--m-font-mono)] text-xs text-[var(--m-caption)]">{p.num}</span>
                                </div>
                                <h3 className="font-[family-name:var(--m-font-display)] text-2xl font-bold text-[var(--m-dark)] mb-3 uppercase tracking-tight">{p.title}</h3>
                                <p className="text-sm text-[var(--m-body)] leading-relaxed mb-6">
                                    {p.body}
                                </p>
                            </div>
                            <div className="pt-4 border-t border-[var(--m-border)] flex items-center gap-2 text-[var(--m-dark)] font-[family-name:var(--m-font-mono)] text-xs uppercase font-semibold">
                                <CheckCircle2 className="text-[var(--m-bull)] w-[18px] h-[18px]" />
                                <span>{p.footer}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footnote */}
                <div className="mt-12 text-center max-w-3xl mx-auto">
                    <p className="font-[family-name:var(--m-font-display)] text-xl sm:text-2xl text-[var(--m-body)] mb-8">
                        O objetivo não é fazer você depender do mentor. <span className="text-[var(--m-dark)] font-bold underline decoration-[var(--m-bull)]">É ensinar você a construir uma leitura própria do mercado seguindo um método validado.</span>
                    </p>
                    <a className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[var(--m-bull)] hover:bg-[var(--m-bull-light)] text-white font-[family-name:var(--m-font-mono)] text-xs uppercase tracking-wider font-bold rounded transition-all shadow-md group" href="#inscricao">
                        <span>Garantir Minha Vaga</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
}
