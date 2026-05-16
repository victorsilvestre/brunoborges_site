import { Metadata } from 'next';
import { Hero } from "./components/Hero";
import { AboutMentor } from "./components/AboutMentor";
import { AboutEvent } from "./components/AboutEvent";
import { WhatYouWillLearn } from "./components/WhatYouWillLearn";
import { HowToParticipate } from "./components/HowToParticipate";
import { Schedule } from "./components/Schedule";
import { SocialProof } from "../components/SocialProof";
import { FinalCTA } from "./components/FinalCTA";

export const metadata: Metadata = {
    title: 'Maratona TDS | Trader Bruno Borges',
    description: 'Participe da 15ª Maratona TDS Trader de Sucesso. Evento 100% online e gratuito. Aprenda Price Action, Gerenciamento e Estratégias diretamente no gráfico.',
};

export default function MaratonaPage() {
    return (
        <main className="bg-[var(--dark-base)] min-h-screen text-white selection:bg-red-500 selection:text-white">
            <Hero />
            <AboutMentor />
            <AboutEvent />
            <WhatYouWillLearn />
            <HowToParticipate />
            <Schedule />
            <SocialProof
                title="Quem já Participou"
                titleHighlight="Aprova!"
                titleHighlightClass="text-transparent bg-clip-text bg-gradient-to-r from-[var(--green-dark)] to-[var(--green-pure)]"
            />
            <FinalCTA />

            {/* Footer premium minimalista */}
            <footer className="py-12 flex flex-col items-center justify-center border-t border-[var(--white-10)] bg-black relative overflow-hidden">
                <div className="absolute bottom-0 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-[var(--gold-premium)] to-transparent opacity-30" />
                <img
                    src="/images/logo/logo_icon-white-1.png"
                    alt="Trader Bruno Borges"
                    className="h-10 w-10 object-contain opacity-40 mb-4"
                />
                <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--white-20)] font-bold">
                    &copy; {new Date().getFullYear()} — Excelência em Price Action
                </div>
            </footer>
        </main>
    );
}
