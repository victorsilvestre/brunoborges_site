import { Metadata } from 'next';
import { Hero } from "./components/Hero";
import { Schedule } from "./components/Schedule";
import { AboutEvent } from "./components/AboutEvent";
import { WhatYouWillLearn } from "./components/WhatYouWillLearn";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import "./stitch.css";

export const metadata: Metadata = {
    title: 'Maratona TDS | Trader Bruno Borges',
    description: 'Participe da 16ª Maratona TDS Trader de Sucesso. Evento 100% online e gratuito. Aprenda Price Action, Gerenciamento e Estratégias diretamente no gráfico.',
};

export default function MaratonaPage() {
    return (
        <main className="maratona-stitch min-h-screen">
            <Hero />
            <Schedule />
            <AboutEvent />
            <WhatYouWillLearn />
            <Testimonials />
            <FAQ />
            <FinalCTA />

            <footer className="bg-[var(--surface)] py-10 text-center text-[var(--text-muted)] text-sm border-t border-[var(--surface-bright)]">
                <div className="container mx-auto px-4">
                    <p>&copy; {new Date().getFullYear()} Trader de Sucesso. Todos os direitos reservados.</p>
                </div>
            </footer>
        </main>
    );
}
