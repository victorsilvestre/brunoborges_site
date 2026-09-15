import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function BottomCTA() {
    return (
        <section className="w-full bg-[var(--m-dark)] text-white py-14 border-t border-[var(--m-border)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                    <Image
                        src="/images/logo/logo-reduzida-horizontal-branca-fundo-escuro.svg"
                        alt="Trader Bruno Borges"
                        width={217}
                        height={82}
                        className="h-16 w-auto shrink-0"
                    />
                    <div className="w-px self-stretch bg-[var(--m-border)]/30 shrink-0" />
                    <div>
                        <span className="font-[family-name:var(--m-font-mono)] text-xs text-[var(--m-bull)] uppercase tracking-wider font-bold">Inscrições Abertas</span>
                        <h3 className="font-[family-name:var(--m-font-display)] text-2xl sm:text-3xl font-bold mt-1 text-white">
                            Aprenda a operar com clareza, segurança e tranquilidade na frente do gráfico.
                        </h3>
                        <p className="font-[family-name:var(--m-font-mono)] text-xs text-slate-400 mt-1 uppercase tracking-wide">
                            Mentoria Trader de Sucesso • Vagas limitadas por ordem de matrícula.
                        </p>
                    </div>
                </div>
                <a className="flex-shrink-0 h-11 px-5 bg-[var(--m-bull)] hover:bg-[var(--m-bull-light)] text-white font-[family-name:var(--m-font-mono)] text-[11px] uppercase tracking-wider font-bold rounded flex items-center justify-center gap-2 transition-all shadow-lg group" href="#inscricao">
                    <span>Garantir Minha Vaga Agora</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
            </div>
        </section>
    );
}
