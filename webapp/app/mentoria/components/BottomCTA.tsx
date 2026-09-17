import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function BottomCTA() {
    return (
        <section className="w-full bg-[var(--m-dark)] text-white py-10 sm:py-14 border-t border-[var(--m-border)]">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-4 sm:gap-6">
                <div>
                    <span className="font-[family-name:var(--m-font-mono)] text-xs text-[var(--m-bull)] uppercase tracking-wider font-bold">Inscrições Abertas</span>
                    <h3 className="font-[family-name:var(--m-font-display)] text-xl sm:text-3xl font-bold mt-1 text-white leading-snug sm:leading-normal">
                        Aprenda a operar com clareza, segurança e tranquilidade na frente do gráfico.
                    </h3>
                    <p className="font-[family-name:var(--m-font-mono)] text-[11px] sm:text-xs text-slate-400 mt-2 sm:mt-1 uppercase tracking-wide">
                        Mentoria Trader de Sucesso • Vagas limitadas por ordem de matrícula.
                    </p>
                </div>

                <a className="inline-flex flex-shrink-0 h-11 px-5 bg-[var(--m-bull)] hover:bg-[var(--m-bull-light)] text-white font-[family-name:var(--m-font-mono)] text-[11px] uppercase tracking-wider font-bold rounded items-center justify-center gap-2 transition-all shadow-lg group" href="#inscricao">
                    <span>Garantir Minha Vaga</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <div className="w-24 h-px bg-[var(--m-border)]/30" />

                <Image
                    src="/images/logo/logo-reduzida-horizontal-branca-fundo-escuro.svg"
                    alt="Trader Bruno Borges"
                    width={217}
                    height={82}
                    className="h-12 sm:h-14 w-auto shrink-0 opacity-70"
                />
            </div>
        </section>
    );
}
