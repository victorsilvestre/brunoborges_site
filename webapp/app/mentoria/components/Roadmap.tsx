import { ShieldCheck } from "lucide-react";

const phases = [
    {
        badge: "FASE 01 • SEMANA 1",
        days: "Dias 1 a 14",
        title: "Fundamentos & Leitura Candle a Candle",
        description:
            "Descontrução de vícios de mercado. Aprendizado da mecânica interna de cada candle, volume e contexto de agressão institucional.",
        bullets: [
            "Leitura candle a candle pura",
            "Anatomia de rejeições e expansões",
            "Configuração do layout analítico limpo",
        ],
    },
    {
        badge: "FASE 02 • SEMANAS 2 A 4",
        days: "Dias 15 a 35",
        title: "Fibonacci, Pontos de Parada & Sala Matinal",
        description:
            "Início da Sala Educacional ao vivo (8h45 às 10h15). Aplicação prática da retração de 50%, confluências e pontos de decisão do preço.",
        bullets: [
            "30 dias de Sala Educacional matinal",
            "Mapeamento de regiões institucionais",
            "Gerenciamento de assimetria favorável",
        ],
    },
    {
        badge: "FASE 03 • SEMANAS 5 A 8",
        days: "Dias 36 a 60",
        title: "Setups Autorais & Autonomia Operacional",
        description:
            "Domínio dos setups consagrados (Leônidas, Responsivo, Negações e Cruzamento de Fibo). Replays profundos e consolidação da leitura autônoma.",
        bullets: [
            "16 estratégias aplicadas ao gráfico real",
            "Backtests estatísticos e plano de trade",
            "Validação da disciplina e consistência",
        ],
    },
];

export function Roadmap() {
    return (
        <section className="w-full bg-[var(--m-subtle)] border-b border-[var(--m-border)] py-14 lg:py-20" id="cronograma">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-xl mb-12">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white border border-[var(--m-border)] rounded text-[var(--m-dark)] font-[family-name:var(--m-font-mono)] text-[11px] font-bold uppercase mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--m-bull)]" />
                        Plano de Voo dos 60 Dias
                    </div>
                    <h2 className="font-[family-name:var(--m-font-display)] text-3xl sm:text-4xl text-[var(--m-dark)] font-bold tracking-tight">
                        O que esperar da sua jornada na Mentoria TDS.
                    </h2>
                    <p className="mt-3 text-base sm:text-lg text-[var(--m-body)] leading-relaxed">
                        Uma visão detalhada de como as fases do programa estão estruturadas para transformar teoria em leitura reflexa e autônoma.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {phases.map((phase, i) => (
                        <div key={i} className="bg-white p-6 rounded-xl border border-[var(--m-border)] relative">
                            <div className="flex items-center justify-between mb-4">
                                <span className="font-[family-name:var(--m-font-mono)] text-xs font-bold text-[var(--m-bull)] bg-[var(--m-bull-bg)] border border-[var(--m-bull-border)] px-2.5 py-1 rounded">
                                    {phase.badge}
                                </span>
                                <span className="font-[family-name:var(--m-font-mono)] text-xs text-[var(--m-caption)]">{phase.days}</span>
                            </div>
                            <h3 className="font-[family-name:var(--m-font-display)] text-lg font-bold text-[var(--m-dark)] mb-2">{phase.title}</h3>
                            <p className="text-sm text-[var(--m-body)] leading-relaxed mb-4">{phase.description}</p>
                            <ul className="font-[family-name:var(--m-font-mono)] text-xs text-[var(--m-caption)] space-y-2 pt-3 border-t border-[var(--m-border)]">
                                {phase.bullets.map((bullet, j) => (
                                    <li key={j} className="flex items-center gap-1.5 text-[var(--m-dark)]">
                                        <span className="text-[var(--m-bull)]">•</span> {bullet}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Ongoing Support Banner */}
                <div className="mt-8 p-6 bg-[var(--m-dark)] text-white rounded-xl flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <ShieldCheck className="text-[var(--m-bull)] w-7 h-7" />
                        <div>
                            <h4 className="font-[family-name:var(--m-font-display)] text-base font-bold">Você nunca estará sozinho nesta jornada.</h4>
                            <p className="text-xs text-slate-300 font-[family-name:var(--m-font-mono)]">Suporte contínuo diretamente com o Bruno Borges por toda a mentoria.</p>
                        </div>
                    </div>
                    <span className="font-[family-name:var(--m-font-mono)] text-xs text-[var(--m-bull-light)] bg-slate-800 px-3 py-1.5 rounded border border-slate-700">
                        CANAL INDIVIDUAL LIBERADO NO WHATSAPP
                    </span>
                </div>
            </div>
        </section>
    );
}
