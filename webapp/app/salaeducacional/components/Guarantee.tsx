import { ShieldCheck } from "lucide-react";
import { CTAButton } from "./CTAButton";

export function Guarantee() {
  return (
    <section className="py-16 md:py-24 border-t border-slate-200 bg-[var(--light-base)]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 md:gap-14 items-start">
          {/* Ícone destaque */}
          <div className="flex flex-col items-center mx-auto md:mx-0">
            <div className="w-36 h-36 rounded-2xl bg-[var(--dark-pure)] flex items-center justify-center">
              <ShieldCheck size={72} color="#BFEA24" strokeWidth={1.5} />
            </div>
          </div>

          {/* Copy */}
          <div>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block text-[var(--dark-medium)]">
              Sem risco
            </span>
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase leading-[0.9] tracking-tighter text-[var(--dark-pure)] mb-4">
              Garantia Incondicional de
              <span className="text-[var(--green-bull)]"> 7 dias.</span>
            </h2>
            <p className="text-[var(--dark-medium)] text-lg leading-snug mb-4">
              A decisão deve ser baseada em experiência, não em promessa. Por
              isso você tem 7 dias para participar ao vivo, ver o Bruno aplicar
              o Método Trader de Sucesso na prática, e sentir por conta própria
              o que a Sala Educacional entrega e se é válido para você.
            </p>
            <p className="text-[var(--dark-medium)] text-base leading-snug mb-8">
              Se em 7 dias não sentir que valeu,{" "}
              <strong className="text-[var(--dark-pure)]">
                100% do valor é devolvido. Sem perguntas. Sem burocracia.
              </strong>
            </p>

            <CTAButton
              label="Quero testar a Sala"
              className="text-base"
              hoverScaleClassName="hover:scale-[1.02]"
              style={{ background: "var(--dark-pure)", color: "#FFFFFF" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
