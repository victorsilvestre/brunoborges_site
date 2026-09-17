"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

export function WelcomeVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="w-full bg-[var(--m-surface)] border-b border-[var(--m-border)] py-14 lg:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[var(--m-border)] rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Video Player */}
            <div className="lg:col-span-7">
              <div className="relative h-64 sm:h-80 bg-slate-900 rounded-lg overflow-hidden border border-[var(--m-border)] shadow group">
                {playing ? (
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/ZzGee37vf-s?autoplay=1"
                    title="Mensagem do Mentor: Instruções Iniciais"
                    allow="accelerate-compute; autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setPlaying(true)}
                    className="relative w-full h-full cursor-pointer"
                    aria-label="Assistir vídeo de boas-vindas"
                  >
                    <Image
                      src="/images/bruno/bruno_meio-corpo_camiseta-preta_neutro.png"
                      alt="Bruno Borges dando as boas-vindas aos novos alunos da mentoria"
                      fill
                      className="object-contain object-[85%_top] scale-90 opacity-90 group-hover:scale-95 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-[var(--m-bull)] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 fill-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 bg-[var(--m-dark)]/90 backdrop-blur-sm px-3 py-2 rounded text-white flex items-center justify-between text-xs font-[family-name:var(--m-font-mono)]">
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[var(--m-bull)]" />
                        <span>BOAS-VINDAS À MENTORIA TDS</span>
                      </span>
                      <span className="text-[var(--m-bull-light)]">21:38</span>
                    </div>
                  </button>
                )}
              </div>
            </div>

            {/* Copy */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="inline-flex items-center gap-1.5 font-[family-name:var(--m-font-mono)] text-xs text-[var(--m-bull)] font-bold uppercase mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--m-bull)]" />
                <span>Uma mensagem do Bruno Borges</span>
              </div>
              <h3 className="font-[family-name:var(--m-font-display)] text-2xl sm:text-3xl font-bold text-[var(--m-dark)] mb-3">
                Conheça um pouco mais sobre o Bruno e a Mentoria TDS
              </h3>
              <p className="text-sm text-[var(--m-body)] leading-relaxed mb-4">
                Neste vídeo, Bruno dá as boas-vindas à nova turma, conta um
                pouco da trajetória que o trouxe até aqui e compartilha o que
                você pode esperar da Mentoria e do Método TDS.
              </p>
              <div className="p-3 bg-[var(--m-subtle)] rounded border border-[var(--m-border)] text-xs font-[family-name:var(--m-font-mono)] text-[var(--m-dark)] space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[var(--m-bull)]">✓</span>
                  <span>Boas-vindas à nova turma</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[var(--m-bull)]">✓</span>
                  <span>A trajetória do Bruno no mercado</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[var(--m-bull)]">✓</span>
                  <span>O que esperar da Mentoria TDS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
