"use client";

import { CTAButton } from "./CTAButton";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#0C0D0E]">
      {/* Grid sutil */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(191,234,36,1) 1px, transparent 1px), linear-gradient(90deg, rgba(191,234,36,1) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Glow verde-lima */}
      <div
        className="absolute top-[-200px] right-[-100px] w-[700px] h-[700px] rounded-full opacity-[0.12] blur-[160px] pointer-events-none"
        style={{ background: "#BFEA24" }}
      />
      {/* Glow vermelho sutil */}
      <div
        className="absolute bottom-[-100px] left-[-80px] w-[500px] h-[500px] rounded-full opacity-[0.08] blur-[140px] pointer-events-none"
        style={{ background: "#E80007" }}
      />

      {/* Header com logo */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-10 flex items-center justify-between">
        <img
          src="/images/logo/logo_traderbrunoborges_fundo-escuro.png"
          alt="Trader Bruno Borges"
          className="h-8 md:h-10 object-contain"
        />
        {/* <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#BFEA24]/30 bg-[#BFEA24]/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#BFEA24] animate-pulse" />
                    <span className="text-[10px] font-bold tracking-widest uppercase text-[#BFEA24]">
                        Exclusivo · Alunos Mentoria TDS
                    </span>
                </div> */}
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-16 flex-1 flex flex-col justify-center">
        {/* Tag mobile */}
        {/* <div className="sm:hidden inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#BFEA24]/30 bg-[#BFEA24]/10 mb-6 w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#BFEA24] animate-pulse" />
                    <span className="text-[10px] font-bold tracking-widest uppercase text-[#BFEA24]">
                        Exclusivo · Alunos TDS
                    </span>
                </div> */}

        {/* Headline */}
        <h1 className="font-display font-black text-[clamp(48px,9vw,108px)] leading-[0.88] uppercase tracking-tighter mb-8 text-white">
          Você aprendeu o método.
          <br />
          <span style={{ color: "#BFEA24" }}>Agora é hora </span>
          <span className="text-white/50">de executar.</span>
        </h1>

        <p className="text-lg md:text-xl text-white/60 max-w-xl mb-10 font-light leading-snug">
          A{" "}
          <strong className="text-white font-semibold">Sala Educacional</strong>{" "}
          é onde o Método TDS sai da teoria e vai para a prática — ao vivo, todos
          os dias, com o Bruno ao seu lado. Das 8h45 às 10h15, você acompanha a
          leitura de mercado em tempo real e aprende a tomar decisões com
          convicção.
        </p>

        {/* Meta */}
        <div className="grid grid-cols-2 sm:grid-cols-4 border border-white/10 rounded-xl overflow-hidden w-full sm:w-fit mb-10">
          {[
            { label: "Horário", value: "8h45 às 10h15" },
            { label: "Início", value: "21 de Julho" },
            { label: "Frequência", value: "Todo dia útil" },
            { label: "Formato", value: "Ao vivo" },
          ].map((m, i) => (
            <div
              key={i}
              className="px-5 py-3 bg-white/[0.04] border-r border-b border-white/10 sm:border-b-0 last:border-r-0 [&:nth-child(2)]:border-r-0 sm:[&:nth-child(2)]:border-r flex flex-col gap-1"
            >
              <span className="text-[9px] text-white/30 uppercase tracking-widest font-bold">
                {m.label}
              </span>
              <span className="text-sm font-bold text-white">{m.value}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <CTAButton
            label="Garantir minha vaga"
            paddingClassName="px-10 py-5"
            textSizeClassName="text-base"
          />
          {/* <div className="flex items-center gap-2 self-center">
                        <span className="text-xs text-white/30 uppercase tracking-widest">7 dias de garantia</span>
                    </div> */}
        </div>
      </div>

      {/* Linha decorativa inferior */}
      <div
        className="relative z-10 w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, #BFEA24, transparent)",
          opacity: 0.2,
        }}
      />
    </section>
  );
}
