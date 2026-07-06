import { Check, ArrowRight } from "lucide-react";

const HOTMART_URL = "https://pay.hotmart.com/O105700075J";

export function Pricing() {
  const includes = [
    "Acesso à Sala ao vivo todo dia útil",
    "Análise pré-abertura com Método TDS",
    "Acompanhamento do pregão 8h45 às 10h15",
    "Ambiente silencioso e focado no operacional",
    "Cancele quando quiser",
  ];

  return (
    <section className="relative py-16 md:py-24 bg-[#0C0D0E] border-t border-white/[0.06] overflow-hidden">
      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full opacity-[0.07] blur-[160px] pointer-events-none"
        style={{ background: "#BFEA24" }}
      />

      <div className="max-w-md mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block text-white/30">
            Oferta de lançamento
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl uppercase leading-[0.9] tracking-tighter text-white mb-4">
            Invista em
            <br />
            <span style={{ color: "#BFEA24" }}>consistência.</span>
          </h2>
        </div>

        {/* Card */}
        <div
          className="relative rounded-3xl border overflow-hidden"
          style={{
            background: "#111312",
            borderColor: "rgba(255,255,255,0.08)",
          }}
        >
          <div
            className="absolute top-0 left-0 w-full h-[2px]"
            style={{
              background:
                "linear-gradient(90deg, transparent, #BFEA24, transparent)",
              opacity: 0.4,
            }}
          />

          <div className="p-5 md:p-7">
            {/* Badge */}
            <div className="flex justify-center mb-8">
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
                style={{ background: "#BFEA24", color: "#0C0D0E" }}
              >
                Assinatura Mensal
              </div>
            </div>

            {/* O que inclui */}
            <ul className="mb-8 space-y-0">
              {includes.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 py-4 border-b border-white/[0.06] last:border-0"
                >
                  <span
                    className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{
                      background: "rgba(191,234,36,0.12)",
                      border: "1px solid rgba(191,234,36,0.25)",
                    }}
                  >
                    <Check className="w-3 h-3" style={{ color: "#BFEA24" }} />
                  </span>
                  <span className="text-sm text-white/70 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Divisor */}
            <div className="relative mb-7">
              <div className="absolute inset-0 flex items-center">
                <div
                  className="w-full h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(191,234,36,0.2), transparent)",
                  }}
                />
              </div>
              <div className="relative flex justify-center">
                <span
                  className="px-5 text-[10px] font-bold uppercase tracking-[0.25em]"
                  style={{
                    background: "#111312",
                    color: "rgba(191,234,36,0.7)",
                  }}
                >
                  Você paga apenas
                </span>
              </div>
            </div>

            {/* Preço */}
            <div className="flex flex-col items-center text-center gap-2 mb-8">
              <span
                className="text-sm font-bold line-through"
                style={{ color: "rgba(255,255,255,0.2)" }}
              >
                R$ 499,90/mês
              </span>
              <span
                className="font-display font-black leading-none tracking-tighter"
                style={{ fontSize: "clamp(56px,12vw,80px)", color: "#BFEA24" }}
              >
                R$ 249,90
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">
                por mês · assinatura recorrente
              </span>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mt-2"
                style={{
                  background: "rgba(191,234,36,0.08)",
                  border: "1px solid rgba(191,234,36,0.2)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: "#BFEA24" }}
                />
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: "#BFEA24" }}
                >
                  50% off — preço de lançamento
                </span>
              </div>
            </div>

            {/* CTA */}
            <a
              href={HOTMART_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full relative overflow-hidden flex items-center justify-center gap-3 py-5 px-4 rounded-xl font-display font-black text-lg uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] group"
              style={{ background: "#BFEA24", color: "#0C0D0E" }}
            >
              <span className="relative z-10 flex items-center gap-3">
                Quero Assinar
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </a>

            <p className="text-center text-xs text-white/20 mt-4 uppercase tracking-widest">
              7 dias de garantia · cancele quando quiser
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
