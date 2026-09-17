const steps = [
    {
        title: "1. Instalar e Configurar o Profit Pro ou TradingView",
        tag: "Recomendado",
        description:
            "Deixe seu layout pronto no tema claro ou escuro sem excesso de indicadores. No módulo introdutório da plataforma há um vídeo com o template oficial que o Bruno utiliza diariamente.",
    },
    {
        title: "2. Baixar a Apostila Oficial do Método TDS & Planilha de Risco",
        tag: "PDF + Excel",
        description:
            "Consulte a apostila para memorizar a anatomia candle a candle e preencha a planilha com seu capital operacional disponível para definir seus lotes com segurança.",
    },
    {
        title: '3. Assistir às Aulas de Nivelamento "Candle a Candle"',
        tag: "3 Horas",
        description:
            "Já liberadas na sua área de membros. Essas aulas garantem que mesmo quem nunca operou antes consiga acompanhar o ritmo dos encontros ao vivo sem nenhuma dificuldade.",
    },
    {
        title: "4. Testar a Conexão com a Sala Educacional",
        tag: "Zoom / Web",
        description:
            "Certifique-se de ter o Zoom instalado no computador ou celular e teste a sala de testes para não perder a primeira abertura de mercado às 08h45.",
    },
];

export function PreparationChecklist() {
    return (
        <section className="w-full bg-[var(--m-surface)] border-b border-[var(--m-border)] py-14 lg:py-20" id="checklist">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mb-10">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[var(--m-subtle)] border border-[var(--m-border)] rounded text-[var(--m-dark)] font-[family-name:var(--m-font-mono)] text-[11px] font-bold uppercase mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--m-bull)]" />
                        Roteiro de Boas-Vindas
                    </div>
                    <h2 className="font-[family-name:var(--m-font-display)] text-3xl sm:text-4xl text-[var(--m-dark)] font-bold tracking-tight">
                        Preparação Essencial para o Primeiro Pregão.
                    </h2>
                    <p className="mt-3 text-base text-[var(--m-body)] leading-relaxed">
                        Complete os 4 passos práticos abaixo para iniciar a mentoria 100% alinhado com a metodologia:
                    </p>
                </div>

                <div className="space-y-4">
                    {steps.map((step, i) => (
                        <div key={i} className="p-5 bg-white border border-[var(--m-border)] rounded-lg flex items-start gap-4 hover:border-[var(--m-bull)] transition-all shadow-sm">
                            <div className="pt-0.5">
                                <input
                                    type="checkbox"
                                    id={`chk${i + 1}`}
                                    className="w-5 h-5 text-[var(--m-bull)] rounded border-[var(--m-border)] focus:ring-[var(--m-bull)]"
                                />
                            </div>
                            <div className="flex-grow">
                                <div className="flex items-center justify-between gap-3 mb-1">
                                    <label htmlFor={`chk${i + 1}`} className="font-[family-name:var(--m-font-display)] text-base font-bold text-[var(--m-dark)] cursor-pointer">
                                        {step.title}
                                    </label>
                                    <span className="shrink-0 font-[family-name:var(--m-font-mono)] text-[11px] text-[var(--m-bull)] font-semibold bg-[var(--m-bull-bg)] px-2 py-0.5 rounded border border-[var(--m-bull-border)]">
                                        {step.tag}
                                    </span>
                                </div>
                                <p className="text-sm text-[var(--m-body)] leading-relaxed">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
