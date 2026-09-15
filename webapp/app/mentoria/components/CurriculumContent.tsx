import { TrendingUp, Ruler, PauseCircle, Shapes, RotateCcw, Shield, ArrowRight } from "lucide-react";

const modules = [
    {
        icon: TrendingUp,
        tag: "MÓDULO 01",
        title: "LEITURA CANDLE A CANDLE",
        body: "Aprenda a interpretar o gráfico candle por candle e entender o que o preço está mostrando antes de pensar em uma operação.",
    },
    {
        icon: Ruler,
        tag: "MÓDULO 02",
        title: "FIBONACCI",
        body: "Entenda como utilizar a Fibonacci dentro do Método TDS para interpretar movimentos e identificar regiões importantes do gráfico.",
    },
    {
        icon: PauseCircle,
        tag: "MÓDULO 03",
        title: "PONTOS DE PARADA",
        body: "Aprenda a identificar regiões em que o preço pode reagir e como utilizá-las com rigor dentro da sua análise pré-mercado.",
    },
    {
        icon: Shapes,
        tag: "MÓDULO 04",
        title: "PADRÕES GRÁFICOS",
        body: "Reconheça comportamentos recorrentes do mercado e aprenda a interpretá-los dentro do contexto correto sem ruídos.",
    },
    {
        icon: RotateCcw,
        tag: "MÓDULO 05",
        title: "BACKTEST DO OPERACIONAL",
        body: "Aprenda a estudar o mercado, revisar situações passadas e validar o seu operacional com método, dados estatísticos e repetição.",
    },
    {
        icon: Shield,
        tag: "MÓDULO 06",
        title: "GERENCIAMENTO DE RISCO",
        body: "Entenda como estruturar a assimetria e o risco das suas operações para proteger o capital enquanto desenvolve o seu operacional.",
    },
];

const setups: { name: string }[] = [
    { name: "Scalps" },
    { name: "Scalps Certeiros" },
    { name: "Operando Região de 50%" },
    { name: "Operando Apenas M5" },
    { name: "Operando Setups" },
    { name: "Cruzamento de Fibonacci" },
    { name: "Setup Leônidas" },
    { name: "Setup Responsivo" },
    { name: "Operando 2 Toques" },
    { name: "Operando Negações" },
    { name: "Estratégia 40 Pontos" },
    { name: "Entrando e Saindo nos Alvos" },
    { name: "Parcial nos Alvos" },
    { name: "Alongando os Alvos" },
    { name: "Operando Nasdaq" },
    { name: "Operando Modo High End" },
];

export function CurriculumContent() {
    return (
        <section className="w-full bg-[var(--m-subtle)] border-b border-[var(--m-border)] py-16 lg:py-24" id="conteudo">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mb-14">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white border border-[var(--m-border)] rounded text-[var(--m-dark)] font-[family-name:var(--m-font-mono)] text-[11px] font-bold uppercase mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--m-bull)]" />
                        Conteúdo Programado
                    </div>
                    <h2 className="font-[family-name:var(--m-font-display)] text-3xl sm:text-4xl lg:text-5xl text-[var(--m-dark)] font-bold tracking-tight">
                        Do básico da leitura do gráfico à aplicação completa do Método TDS.
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-[var(--m-body)] leading-relaxed">
                        Durante a Mentoria, você terá contato com mais de 20 conteúdos voltados à leitura, construção, aplicação e gestão do seu operacional. Tudo começa pelos fundamentos do Método TDS. Depois, você passa a conectar essas bases a diferentes estratégias, contextos e formas de atuação no mercado.
                    </p>
                </div>

                {/* SUB-BLOCO A: A base do Método TDS */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="w-3 h-3 bg-[var(--m-bull)] rounded-sm" />
                        <h3 className="font-[family-name:var(--m-font-display)] text-2xl sm:text-3xl text-[var(--m-dark)] font-bold">
                            Primeiro, você constrói a base.
                        </h3>
                    </div>
                    <p className="font-[family-name:var(--m-font-mono)] text-xs text-[var(--m-caption)] uppercase mb-6 tracking-wide">
                        Esses são os fundamentos que sustentam todo o restante da Mentoria.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {modules.map((m) => {
                            const Icon = m.icon;
                            return (
                                <div key={m.tag} className="bg-white p-6 rounded-lg border border-[var(--m-border)] hover:border-[var(--m-bull)] transition-all group">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="font-[family-name:var(--m-font-mono)] text-[11px] font-bold text-[var(--m-bull)] bg-[var(--m-bull-bg)] border border-[var(--m-bull-border)] px-2 py-0.5 rounded">{m.tag}</span>
                                        <Icon className="text-[var(--m-caption)] group-hover:text-[var(--m-bull)] w-5 h-5 transition-colors" />
                                    </div>
                                    <h4 className="font-[family-name:var(--m-font-display)] text-lg font-bold text-[var(--m-dark)] mb-2">{m.title}</h4>
                                    <p className="text-sm text-[var(--m-body)] leading-relaxed">
                                        {m.body}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* SUB-BLOCO B: Aplicação do Método / 16 setups */}
                <div className="mb-14">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="w-3 h-3 bg-[var(--m-dark)] rounded-sm" />
                        <h3 className="font-[family-name:var(--m-font-display)] text-2xl sm:text-3xl text-[var(--m-dark)] font-bold">
                            Depois da base, começa a aplicação.
                        </h3>
                    </div>
                    <p className="font-[family-name:var(--m-font-mono)] text-xs text-[var(--m-caption)] uppercase mb-6 tracking-wide">
                        Com os fundamentos construídos, você começa a conectar as peças do Método TDS e aplicá-las em diferentes situações encontradas no mercado.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {setups.map((s) => (
                            <div key={s.name} className="p-3.5 bg-white border border-[var(--m-border)] rounded-lg hover:border-[var(--m-bull)] transition-all flex items-center justify-between group">
                                <div className="flex items-center gap-2.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--m-bull)]" />
                                    <span className="font-[family-name:var(--m-font-display)] text-sm font-bold text-[var(--m-dark)]">{s.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Card de Princípio Fundamental */}
                <div className="p-8 bg-white border border-[var(--m-border)] rounded-lg shadow-sm">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[var(--m-subtle)] border border-[var(--m-border)] rounded text-[var(--m-dark)] font-[family-name:var(--m-font-mono)] text-[10px] font-bold uppercase mb-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--m-bull)]" />
                            Princípio Fundamental
                        </div>
                        <h3 className="font-[family-name:var(--m-font-display)] text-2xl sm:text-3xl text-[var(--m-dark)] font-bold mb-3 leading-tight">
                            Não é sobre decorar 20 estratégias. É sobre aprender a enxergar o mercado da forma certa.
                        </h3>
                        <p className="text-base sm:text-lg text-[var(--m-body)] leading-relaxed mb-6">
                            Você não precisa operar todas as abordagens apresentadas. O objetivo é que, ao dominar a base de leitura, você tenha repertório e discernimento técnico para escolher os estilos e contextos com os quais mais se identifica — executando com frieza, critério e alta precisão.
                        </p>
                        <a className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[var(--m-bull)] hover:bg-[var(--m-bull-light)] text-white font-[family-name:var(--m-font-mono)] text-xs uppercase tracking-wider font-bold rounded transition-all shadow-md group" href="#inscricao">
                            <span>Quero fazer parte da Mentoria</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
