import Image from "next/image";

const sections = [
    {
        number: "1",
        title: "Termos",
        content: `Ao acessar ao site Trader Bruno de Paula Borges, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.`,
    },
    {
        number: "2",
        title: "Uso de Licença",
        content: `É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Trader Bruno de Paula Borges, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:`,
        items: [
            "Modificar ou copiar os materiais;",
            "Usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);",
            "Tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Trader Bruno de Paula Borges;",
            "Remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou",
            "Transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.",
        ],
        footer: `Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por Trader Bruno de Paula Borges a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrônico ou impresso.`,
    },
    {
        number: "3",
        title: "Isenção de Responsabilidade",
        items: [
            "Os materiais no site da Trader Bruno de Paula Borges são fornecidos 'como estão'. Trader Bruno de Paula Borges não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.",
            "Além disso, o Trader Bruno de Paula Borges não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.",
        ],
    },
    {
        number: "4",
        title: "Limitações",
        content: `Em nenhum caso o Trader Bruno de Paula Borges ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Trader Bruno de Paula Borges, mesmo que Trader Bruno de Paula Borges ou um representante autorizado da Trader Bruno de Paula Borges tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos consequentes ou incidentais, essas limitações podem não se aplicar a você.`,
    },
    {
        number: "5",
        title: "Precisão dos Materiais",
        content: `Os materiais exibidos no site da Trader Bruno de Paula Borges podem incluir erros técnicos, tipográficos ou fotográficos. Trader Bruno de Paula Borges não garante que qualquer material em seu site seja preciso, completo ou atual. Trader Bruno de Paula Borges pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, Trader Bruno de Paula Borges não se compromete a atualizar os materiais.`,
    },
    {
        number: "6",
        title: "Links",
        content: `O Trader Bruno de Paula Borges não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por Trader Bruno de Paula Borges do site. O uso de qualquer site vinculado é por conta e risco do usuário.`,
    },
];

const extraSections = [
    {
        title: "Modificações",
        content: `O Trader Bruno de Paula Borges pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.`,
    },
    {
        title: "Lei Aplicável",
        content: `Estes termos e condições são regidos e interpretados de acordo com as leis do Trader Bruno de Paula Borges e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.`,
    },
];

export default function TermosDeUsoPage() {
    return (
        <main className="relative min-h-screen flex flex-col items-center overflow-hidden">
            {/* Background */}
            <div className="fixed inset-0 z-0">
                <Image
                    src="/images/image_bg-links.jpg"
                    alt="Background"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-black/80" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[var(--green-bull)]/8 blur-[140px] rounded-full" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-3xl mx-auto px-6 py-20">

                {/* Header */}
                <div className="mb-14 text-center">
                    <p className="font-display font-bold text-xs uppercase tracking-[0.3em] text-[var(--green-bull)] mb-3">
                        Trader Bruno Borges
                    </p>
                    <h1 className="font-display font-black text-4xl uppercase tracking-tight text-white leading-none mb-6">
                        Termos de Uso
                    </h1>
                    <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[var(--green-bull)] to-transparent mx-auto" />
                </div>

                {/* Numbered Sections */}
                <div className="flex flex-col gap-8">
                    {sections.map((section) => (
                        <div
                            key={section.number}
                            className="border border-[var(--white-10)] rounded-lg p-7 bg-black/30 backdrop-blur-sm"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <span className="shrink-0 w-8 h-8 rounded flex items-center justify-center bg-[var(--green-bull)]/10 border border-[var(--green-bull)]/25 font-display font-black text-xs text-[var(--green-bull)]">
                                    {section.number}
                                </span>
                                <h2 className="font-display font-bold text-base uppercase tracking-wider text-white leading-8">
                                    {section.title}
                                </h2>
                            </div>

                            {section.content && (
                                <p className="text-[var(--white-60)] text-sm leading-relaxed mb-4">
                                    {section.content}
                                </p>
                            )}

                            {section.items && (
                                <ol className="flex flex-col gap-2 mb-4 pl-1">
                                    {section.items.map((item, i) => (
                                        <li key={i} className="flex gap-3 text-sm text-[var(--white-60)] leading-relaxed">
                                            <span className="shrink-0 font-display font-bold text-[var(--green-bull)]/70 text-xs mt-[3px]">
                                                {i + 1}.
                                            </span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ol>
                            )}

                            {section.footer && (
                                <p className="text-[var(--white-60)] text-sm leading-relaxed border-t border-[var(--white-10)] pt-4 mt-2">
                                    {section.footer}
                                </p>
                            )}
                        </div>
                    ))}

                    {/* Extra Sections (no number) */}
                    {extraSections.map((section) => (
                        <div
                            key={section.title}
                            className="border border-[var(--white-10)] rounded-lg p-7 bg-black/30 backdrop-blur-sm"
                        >
                            <h2 className="font-display font-bold text-base uppercase tracking-wider text-white mb-4">
                                {section.title}
                            </h2>
                            <p className="text-[var(--white-60)] text-sm leading-relaxed">
                                {section.content}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <p className="mt-16 text-center text-[10px] uppercase tracking-[0.25em] text-[var(--white-20)] font-display font-bold">
                    Excelência em Price Action
                </p>
            </div>
        </main>
    );
}
