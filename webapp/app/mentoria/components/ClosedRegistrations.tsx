"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowLeft, Lock } from "lucide-react";
import { LeadCaptureForm } from "../../components/LeadCaptureForm";

export function ClosedRegistrations() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="min-h-screen h-screen flex flex-col items-center justify-center relative overflow-hidden bg-[var(--m-surface)] grid-lines py-4 sm:py-6">
            {/* Logo */}
            <div
                className="relative sm:absolute sm:top-6 sm:left-1/2 sm:-translate-x-1/2 mb-2 sm:mb-0 shrink-0"
                style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.6s ease" }}
            >
                <Link href="/">
                    <Image
                        src="/images/logo/logo-reduzida-horizontal-verde-fundo-claro.svg"
                        alt="Trader Bruno Borges"
                        width={217}
                        height={82}
                        className="h-7 sm:h-9 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                        priority
                    />
                </Link>
            </div>

            {/* Main content */}
            <div
                className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 max-w-2xl min-h-0 overflow-y-auto sm:overflow-visible"
                style={{
                    opacity: mounted ? 1 : 0,
                    transform: mounted ? "translateY(0)" : "translateY(24px)",
                    transition: "opacity 0.7s ease, transform 0.7s ease",
                }}
            >
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-2 bg-[var(--m-bear-bg)] border border-[var(--m-bear-border)] rounded-full text-[var(--m-bear)] font-[family-name:var(--m-font-mono)] text-[10px] sm:text-xs font-bold uppercase mb-3 sm:mb-8 shadow-sm shrink-0">
                    <Lock className="w-3 h-3 sm:w-4 sm:h-4" />
                    Inscrições Encerradas
                </div>

                <h1 className="font-[family-name:var(--m-font-display)] text-xl sm:text-4xl lg:text-5xl text-[var(--m-dark)] font-bold tracking-tight mb-2 sm:mb-4 leading-tight">
                    As vagas dessa turma da Mentoria TDS já foram preenchidas.
                </h1>

                <p className="text-sm sm:text-lg text-[var(--m-body)] leading-snug sm:leading-relaxed mb-3 sm:mb-8">
                    Assim como uma boa operação, essa entrada passou. Mas fica tranquilo: entre na lista de espera e seja avisado assim que abrirmos uma nova turma.
                </p>

                <div className="w-full max-w-md bg-white border border-[var(--m-border)] rounded-xl shadow-lg p-4 sm:p-8 text-left shrink-0">
                    <LeadCaptureForm
                        source="lista-espera-mentoria"
                        redirectTo=""
                        buttonLabel="Entrar na lista de espera"
                        variant="light"
                        successMessage="Você entrou na lista! Vamos te avisar assim que abrirmos a próxima turma."
                    />
                </div>

                <Link
                    href="/metodologia"
                    className="mt-3 sm:mt-6 mb-2 sm:mb-0 inline-flex items-center gap-2 font-[family-name:var(--m-font-mono)] text-[10px] sm:text-xs uppercase tracking-wider font-bold text-[var(--m-caption)] hover:text-[var(--m-dark)] transition-colors shrink-0"
                >
                    <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span>Conheça mais sobre o Bruno e o Método TDS</span>
                </Link>
            </div>

            <p className="hidden sm:block sm:absolute sm:bottom-8 font-[family-name:var(--m-font-mono)] text-[11px] uppercase tracking-[0.15em] text-[var(--m-caption)]">
                Bruno Borges · Trader &amp; Mentor
            </p>
        </div>
    );
}
