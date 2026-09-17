import type { Metadata } from "next";
import { PurchaseHero } from "./components/PurchaseHero";
import { NextSteps } from "./components/NextSteps";
import { WelcomeVideo } from "./components/WelcomeVideo";
import { PreparationChecklist } from "./components/PreparationChecklist";
import { Roadmap } from "./components/Roadmap";
import { SupportCenter } from "./components/SupportCenter";
import { PurchaseFooter } from "./components/PurchaseFooter";

export const metadata: Metadata = {
    title: "Matrícula Confirmada | Mentoria TDS — Bruno Borges",
    description: "Bem-vindo à Mentoria Trader de Sucesso. Sua vaga está confirmada — veja os próximos passos para começar.",
};

export default function CompraRealizadaPage() {
    return (
        <>
            <main className="w-full bg-[var(--m-surface)]">
                <PurchaseHero />
                <NextSteps />
                <WelcomeVideo />
                <PreparationChecklist />
                <Roadmap />
                <SupportCenter />
            </main>
            <PurchaseFooter />
        </>
    );
}
