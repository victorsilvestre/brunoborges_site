import { ArrowRight } from "lucide-react";
import { MentorBio } from "./MentorBio";
import { SocialProofCarousel } from "./SocialProofCarousel";

export function MentorAndProof() {
  return (
    <section
      className="w-full bg-[var(--m-subtle)] border-b border-[var(--m-border)] py-16 lg:py-24"
      id="mentor"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MentorBio />

        {/* PROVA SOCIAL: DEPOIMENTOS E VÍDEOS */}
        <div>
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white border border-[var(--m-border)] rounded text-[var(--m-dark)] font-[family-name:var(--m-font-mono)] text-[10px] font-bold uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--m-bull)]" />
              #EuSouTDS
            </div>
            <h3 className="font-[family-name:var(--m-font-display)] text-3xl sm:text-4xl lg:text-5xl text-[var(--m-dark)] font-bold tracking-tight">
              Quem passou pela Mentoria conta o que mudou na prática.
            </h3>
            <p className="mt-3 text-base sm:text-lg text-[var(--m-body)] leading-relaxed">
              Veja os relatos de alunos que desenvolveram
              mais clareza na leitura do mercado, mais autonomia para
              interpretar o gráfico e mais critério nas suas operações.
            </p>
          </div>

          <SocialProofCarousel />

          <div className="mt-12 text-center">
            <a
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[var(--m-bull)] hover:bg-[var(--m-bull-light)] text-white font-[family-name:var(--m-font-mono)] text-xs uppercase tracking-wider font-bold rounded transition-all shadow-md group"
              href="#inscricao"
            >
              <span>Quero fazer parte da Mentoria</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
