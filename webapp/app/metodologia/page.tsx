import { Metadata } from "next";
import { Header } from "../home/components/Header";
import { Metodologia } from "../home/components/Metodologia";
import { Footer } from "../home/components/Footer";

export const metadata: Metadata = {
    title: "Metodologia TDS | Bruno Borges",
    description:
        "Conheça a metodologia completa do Trader de Sucesso. Do operacional limpo à gestão de risco verdadeira — um método validado por milhares de alunos.",
};

export default function MetodologiaPage() {
    return (
        <main className="bg-[var(--dark-base)] min-h-screen text-white selection:bg-[var(--green-bull)] selection:text-white">
            <Header />
            <Metodologia />
            <Footer />
        </main>
    );
}
