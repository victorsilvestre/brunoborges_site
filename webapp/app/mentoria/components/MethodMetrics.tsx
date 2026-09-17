import { Hourglass, CalendarRange, Tv, LineChart, Infinity as InfinityIcon, Headset, ArrowRight } from "lucide-react";

const metrics = [
    {
        icon: Hourglass,
        tag: "CARGA TOTAL",
        value: "+100H",
        label: "de conteúdo denso",
        body: "Aulas conceituais, estratégias avançadas de Price Action e estudos de mercado sem filtros teóricos.",
        footerLeft: "Formação Integral",
        footerRight: "100% PRÁTICO",
    },
    {
        icon: CalendarRange,
        tag: "PERÍODO",
        value: "60 DIAS",
        label: "de acompanhamento",
        body: "Tempo suficiente para fixar padrões, corrigir maus hábitos e consolidar a segurança de execução.",
        footerLeft: "Imersão Real",
        footerRight: "PASSO A PASSO",
    },
    {
        icon: Tv,
        tag: "FREQUÊNCIA",
        value: "3X/SEM",
        label: "aulas ao vivo",
        body: "Encontros diretos e interativos com resolução de dúvidas em tempo real e avaliação gráfica profunda.",
        footerLeft: "Interatividade Ativa",
        footerRight: "AO VIVO",
    },
    {
        icon: LineChart,
        tag: "PREGÃO REAL",
        value: "30 DIAS",
        label: "de Sala Educacional",
        body: "Acompanhamento matinal ao vivo (08h45 às 10h15) vendo o comportamento de mercado em tempo real.",
        footerLeft: "Bônus Exclusivo",
        footerRight: "MERCADO ABERTO",
    },
    {
        icon: InfinityIcon,
        tag: "PERMANÊNCIA",
        value: "VITALÍCIO",
        label: "acesso às gravações",
        body: "Revise todas as aulas, análises e materiais sempre que quiser sem prazo de expiração.",
        footerLeft: "Sem Prazo Limite",
        footerRight: "GRAVADO EM HD",
    },
    {
        icon: Headset,
        tag: "SUPORTE",
        value: "DIRETO",
        label: "suporte com Bruno",
        body: "Sem intermediários ou atendentes genéricos: o próprio Bruno Borges tira suas dúvidas operacionais.",
        footerLeft: "Proximidade Total",
        footerRight: "1 ON 1",
    },
];

export function MethodMetrics() {
    return (
        <section className="w-full bg-[var(--m-surface)] border-b border-[var(--m-border)] py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mb-14">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[var(--m-subtle)] border border-[var(--m-border)] rounded text-[var(--m-dark)] font-[family-name:var(--m-font-mono)] text-[11px] font-bold uppercase mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--m-bull)]" />
                        Uma jornada completa de aprendizado
                    </div>
                    <h2 className="font-[family-name:var(--m-font-display)] text-3xl sm:text-4xl lg:text-5xl text-[var(--m-dark)] font-bold tracking-tight">
                        60 dias para mudar a forma como você enxerga o gráfico.
                    </h2>
                    <p className="mt-3 sm:mt-4 text-base sm:text-lg text-[var(--m-body)] leading-relaxed">
                        Na Mentoria Trader de Sucesso, você aprende diretamente com Bruno Borges a construir e aplicar o Método TDS. São dois meses de aulas ao vivo, estudo de mercado, replays, análises, aplicação prática e acompanhamento para desenvolver aquilo que sustenta todo o operacional: a capacidade de interpretar o preço com clareza.
                    </p>
                </div>

                {/* 6 Metrics Modular Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {metrics.map((m) => {
                        const Icon = m.icon;
                        return (
                            <div key={m.tag} className="p-6 bg-[var(--m-subtle)] rounded-lg border border-[var(--m-border)] flex flex-col justify-between hover:border-[var(--m-bull)] transition-all">
                                <div>
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="font-[family-name:var(--m-font-mono)] text-xs font-bold text-[var(--m-bull)] bg-[var(--m-bull-bg)] px-2 py-0.5 rounded border border-[var(--m-bull-border)]">{m.tag}</span>
                                        <Icon className="text-[var(--m-caption)] w-5 h-5" />
                                    </div>
                                    <div className="font-[family-name:var(--m-font-display)] text-4xl sm:text-5xl text-[var(--m-dark)] font-bold tracking-tight mb-1 tabular-nums">
                                        {m.value}
                                    </div>
                                    <div className="font-[family-name:var(--m-font-mono)] text-xs uppercase tracking-wider text-[var(--m-caption)] font-semibold mb-3">
                                        {m.label}
                                    </div>
                                    <p className="text-sm text-[var(--m-body)] leading-relaxed">
                                        {m.body}
                                    </p>
                                </div>
                                <div className="mt-6 pt-3 border-t border-[var(--m-border)] flex items-center justify-between text-[var(--m-caption)] font-[family-name:var(--m-font-mono)] text-[11px]">
                                    <span>{m.footerLeft}</span>
                                    <span className="text-[var(--m-bull)] font-bold">{m.footerRight}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Analytical Synthesis Card */}
                <div className="mt-12 p-8 bg-[var(--m-subtle)] border border-[var(--m-border)] rounded-lg text-center max-w-4xl mx-auto">
                    <span className="font-[family-name:var(--m-font-mono)] text-xs font-bold text-[var(--m-bull)] uppercase tracking-wider block mb-2">AO FINAL DA MENTORIA</span>
                    <p className="font-[family-name:var(--m-font-display)] text-xl sm:text-2xl text-[var(--m-dark)] font-medium leading-snug sm:leading-relaxed mb-4 sm:mb-8">
                        o objetivo é que você tenha muito mais clareza para abrir o gráfico, entender o que o mercado está mostrando e tomar decisões com base em uma leitura construída por você — sem depender de achismos, indicadores milagrosos ou da análise de outras pessoas.
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
