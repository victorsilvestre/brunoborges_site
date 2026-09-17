import { Users, ArrowRight } from "lucide-react";

const MEMBERS_AREA_URL = "https://alunos.traderbrunoborges.com.br/";

const phases = [
    {
        badge: "FASE 01 · CONSTRUA A BASE",
        title: "Aprenda a entender o que o gráfico está mostrando.",
        description:
            "Tudo começa pelos fundamentos que sustentam o Método TDS. Você aprende a interpretar o preço, reconhecer regiões importantes e entender o contexto antes de pensar em qualquer estratégia.",
        bullets: [
            "Leitura candle a candle",
            "Fibonacci e pontos de parada",
            "Padrões gráficos e contexto",
            "Gerenciamento de risco",
            "Como estudar o mercado com backtest",
        ],
    },
    {
        badge: "FASE 02 · AMPLIE SEU REPERTÓRIO",
        title: "Conheça estratégias e setups construídos a partir dessa leitura.",
        description:
            "Com a base formada, você começa a entender diferentes formas de aplicar a leitura do mercado. Entram aqui estratégias, setups autorais e variações operacionais que ajudam a enxergar oportunidades em diferentes contextos.",
        bullets: [
            "Setups como Leônidas e Responsivo",
            "Cruzamento de Fibonacci",
            "Scalps e operações em regiões de 50%",
            "Negações, dois toques e outros contextos",
            "Diferentes formas de entrada, parcial e alvo",
        ],
    },
    {
        badge: "FASE 03 · LEVE PARA A PRÁTICA",
        title: "Aplique, revise, tire dúvidas e desenvolva sua própria leitura.",
        description:
            "O aprendizado ganha profundidade quando você começa a observar o método em situações reais, revisar operações e discutir suas dúvidas. É nessa etapa que as peças começam a se conectar ao seu próprio operacional.",
        bullets: [
            "Aulas e análises ao vivo",
            "Replays e estudos de mercado",
            "Sala Educacional com mercado aberto",
            "Revisão de operações e contextos",
            "Dúvidas diretamente com Bruno",
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
                        O Que Vem Pela Frente
                    </div>
                    <h2 className="font-[family-name:var(--m-font-display)] text-3xl sm:text-4xl text-[var(--m-dark)] font-bold tracking-tight">
                        Da construção da base à aplicação do Método TDS no mercado.
                    </h2>
                    <p className="mt-3 text-base sm:text-lg text-[var(--m-body)] leading-relaxed">
                        Ao longo da Mentoria, você vai avançar por diferentes etapas de aprendizado: primeiro entende os fundamentos da leitura, depois amplia seu repertório com estratégias e setups, e então leva tudo isso para a prática com análise, revisão e acompanhamento.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {phases.map((phase, i) => (
                        <div key={i} className="bg-white p-6 rounded-xl border border-[var(--m-border)] relative">
                            <div className="flex items-center justify-between mb-4">
                                <span className="font-[family-name:var(--m-font-mono)] text-xs font-bold text-[var(--m-bull)] bg-[var(--m-bull-bg)] border border-[var(--m-bull-border)] px-2.5 py-1 rounded">
                                    {phase.badge}
                                </span>
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
                        <Users className="text-[var(--m-bull)] w-7 h-7" />
                        <div>
                            <h4 className="font-[family-name:var(--m-font-display)] text-base font-bold">Você não precisa passar por esse processo sozinho.</h4>
                            <p className="text-xs text-slate-300 font-[family-name:var(--m-font-mono)]">O grupo da turma será um dos principais canais para acompanhar avisos, compartilhar dúvidas e manter contato com Bruno e com os outros alunos ao longo da Mentoria.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center md:items-end gap-1.5 flex-shrink-0">
                        <a
                            href={MEMBERS_AREA_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[var(--m-bull)] hover:bg-[var(--m-bull-light)] text-white font-[family-name:var(--m-font-mono)] text-xs uppercase tracking-wider font-bold rounded transition-all shadow"
                        >
                            <span>Entrar no Grupo da Turma</span>
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
