import Image from "next/image";

export function MentorBio() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-20">
            {/* Mentor Image Frame */}
            <div className="lg:col-span-5">
                <div className="bg-white p-2.5 rounded-lg border border-[var(--m-border)] shadow-md">
                    <div className="h-[460px] overflow-hidden rounded bg-slate-100 relative">
                        <Image
                            src="/images/mentoria/mentor-bio.png"
                            alt="Bruno Borges em mesa de trading minimalista com laptop exibindo gráficos de candlestick"
                            fill
                            className="object-cover transition-all duration-300 hover:scale-[1.02]"
                        />
                    </div>
                    <div className="p-3 bg-[var(--m-dark)] text-white mt-2 rounded flex items-center justify-between">
                        <div>
                            <div className="font-[family-name:var(--m-font-display)] text-base font-bold">Bruno Borges</div>
                            <div className="font-[family-name:var(--m-font-mono)] text-[10px] text-[var(--m-bull-light)] uppercase">Especialista em Price Action • Criador do Método TDS</div>
                        </div>
                        <span className="w-2.5 h-2.5 rounded-full bg-[var(--m-bull)]" />
                    </div>
                </div>
            </div>

            {/* Mentor Text & Metrics */}
            <div className="lg:col-span-7 flex flex-col gap-5">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white border border-[var(--m-border)] rounded text-[var(--m-dark)] font-[family-name:var(--m-font-mono)] text-[10px] font-bold uppercase w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--m-bull)]" />
                    Seu Mentor
                </div>
                <h2 className="font-[family-name:var(--m-font-display)] text-3xl sm:text-4xl lg:text-5xl text-[var(--m-dark)] font-bold tracking-tight">
                    Escolha seu mentor pelo que ele pode ensinar. <span className="text-[var(--m-bull)] border-b-2 border-[var(--m-bull)]/40">Não pelo resultado que ele diz ter feito.</span>
                </h2>
                <div className="space-y-3 text-base sm:text-lg text-[var(--m-body)] leading-relaxed">
                    <p>
                        Com mais de 7 anos de experiência dedicados diariamente ao day trade e ao estudo minucioso da dinâmica do preço, Bruno Borges desenvolveu um modelo operacional focado em clareza, contextualização e rigor técnico.
                    </p>
                    <p>
                        Criador de estratégias e setups autorais consagrados na comunidade — como <strong>Preguiçoso, Teimoso, Leônidas, Responsivo</strong> e o <strong>Cruzamento de Fibonacci</strong> —, Bruno já treinou e acompanhou mais de 1.400 alunos na busca por consistência e autonomia.
                    </p>
                    <p>
                        Sem promessas de ganhos fáceis, sem fórmulas mágicas e sem dependência de indicadores atrasados: apenas a verdade nua e crua da movimentação dos preços exposta na tela para quem deseja atuar no mercado com maturidade e disciplina profissional.
                    </p>
                </div>

                {/* Metric Ticker Cards */}
                <div className="grid grid-cols-3 gap-3 pt-3 border-t border-[var(--m-border)]">
                    <div className="p-4 bg-white border border-[var(--m-border)] rounded-lg">
                        <div className="font-[family-name:var(--m-font-display)] text-2xl sm:text-3xl font-bold text-[var(--m-dark)]">7+ ANOS</div>
                        <div className="font-[family-name:var(--m-font-mono)] text-[10px] text-[var(--m-caption)] uppercase mt-1">No Mercado Vivo</div>
                    </div>
                    <div className="p-4 bg-white border border-[var(--m-border)] rounded-lg">
                        <div className="font-[family-name:var(--m-font-display)] text-2xl sm:text-3xl font-bold text-[var(--m-bull)] tabular-nums">+1.400</div>
                        <div className="font-[family-name:var(--m-font-mono)] text-[10px] text-[var(--m-caption)] uppercase mt-1">Alunos Formados</div>
                    </div>
                    <div className="p-4 bg-white border border-[var(--m-border)] rounded-lg">
                        <div className="font-[family-name:var(--m-font-display)] text-2xl sm:text-3xl font-bold text-[var(--m-dark)]">5 SETUPS</div>
                        <div className="font-[family-name:var(--m-font-mono)] text-[10px] text-[var(--m-caption)] uppercase mt-1">Autorais Validados</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
