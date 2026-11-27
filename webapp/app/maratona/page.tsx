import { Metadata } from 'next';
import { Hero } from "./components/Hero";
import { Schedule } from "./components/Schedule";
import { AboutEvent } from "./components/AboutEvent";
import { Benefits } from "./components/Benefits";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import "./stitch.css";

export const metadata: Metadata = {
    title: 'Maratona TDS | Trader Bruno Borges',
    description: 'Participe da 17ª Maratona TDS Trader de Sucesso, de 5 a 8 de janeiro. Evento 100% online e gratuito, com aulas ao vivo, o Resumão e um tira-dúvidas exclusivo com o Bruno.',
};

export default function MaratonaPage() {
    return (
        <main className="maratona-stitch min-h-screen">
            <Hero />
            <Schedule />
            <AboutEvent />
            <Benefits />
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
