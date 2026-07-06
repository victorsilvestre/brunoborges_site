import { Hero } from "./components/Hero";
import { WhatIs } from "./components/WhatIs";
import { NPS } from "./components/NPS";
import { MarketReading } from "./components/MarketReading";
import { ApplicationConfidence } from "./components/ApplicationConfidence";
import { FinancialResults } from "./components/FinancialResults";
import { ForWhom } from "./components/ForWhom";
import { BehavioralTransformations } from "./components/BehavioralTransformations";
import { WhatStudentsValued } from "./components/WhatStudentsValued";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { Guarantee } from "./components/Guarantee";
import { Pricing } from "./components/Pricing";
import { Calendar } from "./components/Calendar";
import { FinalCTA } from "./components/FinalCTA";

export default function SalaEducacionalPage() {
    return (
        <main className="min-h-screen text-white selection:bg-[#BFEA24] selection:text-[#0C0D0E]" style={{ background: "#0C0D0E" }}>
            <Hero />
            <WhatIs />
            <NPS />
            <MarketReading />
            <ApplicationConfidence />
            <FinancialResults />
            <ForWhom />
            <BehavioralTransformations />
            <WhatStudentsValued />
            <Testimonials />
            <FAQ />
            <Guarantee />
            <Pricing />
            <Calendar />
            <FinalCTA />

            <footer className="py-12 flex flex-col items-center justify-center border-t border-white/[0.06] bg-black relative overflow-hidden">
                <div className="absolute bottom-0 w-[400px] h-px opacity-20" style={{ background: "linear-gradient(90deg, transparent, #BFEA24, transparent)" }} />
                <img
                    src="/images/logo/logo_traderbrunoborges_fundo-escuro.png"
                    alt="Trader Bruno Borges"
                    className="h-8 object-contain opacity-50 mb-4"
                />
                {/* <div className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold">
                    &copy; {new Date().getFullYear()} — Sala Educacional Trader de Sucesso
                </div> */}
            </footer>
        </main>
    );
}
