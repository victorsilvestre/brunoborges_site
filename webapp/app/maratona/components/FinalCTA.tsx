"use client";

import { LeadCaptureForm } from "../../components/LeadCaptureForm";

export function FinalCTA() {
    return (
        <section className="py-12 bg-[var(--surface-container)] relative overflow-hidden border-t border-[var(--surface-bright)]">
            <div className="absolute inset-0 bg-[var(--primary)]/5 pattern-dots-sm" />
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-[var(--primary)] rounded-full opacity-10 blur-3xl" />
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-[var(--primary)] rounded-full opacity-10 blur-3xl" />
            <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
                <h2 className="text-4xl md:text-6xl font-display-stitch font-black mb-6 tracking-tight text-[var(--text-main)]">
                    Faça a sua inscrição na{" "}
                    <span className="bg-[var(--primary)] text-[var(--text-main)] px-3 py-1 transform -skew-x-6 inline-block mt-4 border-b-4 border-[var(--primary-dark)]">
                        Maratona Trader de Sucesso
                    </span>
                </h2>
                <p className="text-lg text-[var(--text-muted)] mb-12 mt-8">
                    Aprenda um operacional extremamente simples, e tenha acesso a todos os bônus exclusivos dessa Maratona.
                </p>
                <div className="form-card bg-[var(--surface)] p-10 rounded-xl border-2 border-[var(--surface-bright)] shadow-2xl max-w-2xl mx-auto text-left relative">
                    <div className="absolute top-0 right-0 w-8 h-8 bg-[var(--primary)]/20 border-l border-b border-[var(--surface-bright)]" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 bg-[var(--primary)]/20 border-r border-t border-[var(--surface-bright)]" />
                    <div className="relative z-10">
                        <LeadCaptureForm
                            source="maratona-set-2026"
                            redirectTo="/maratona-grupo"
                            buttonLabel="Garantir minha vaga"
                            variant="light"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
