import { Metadata } from "next";
import { Header } from "./home/components/Header";
import { HeroManifesto } from "./home/components/HeroManifesto";
import { BiografiaEditorial } from "./home/components/BiografiaEditorial";
import { CaraDaMadrugada } from "./home/components/CaraDaMadrugada";
import { MetodologiaTeaser } from "./home/components/MetodologiaTeaser";
import { Eventos } from "./home/components/Eventos";
import { VitrineOrganica } from "./home/components/VitrineOrganica";
import { PortfolioMentorias } from "./home/components/PortfolioMentorias";
import { Footer } from "./home/components/Footer";

export const metadata: Metadata = {
  title: "Bruno Borges | Trader Profissional & Mentor",
  description:
    "O mercado recompensa a disciplina. Aprenda Price Action e setups autorais com o trader Bruno Borges. Mentoria TDS e conteúdo gratuito disponível.",
};

export default function HomePage() {
  return (
    <main className="bg-[var(--dark-base)] min-h-screen text-white selection:bg-[var(--green-bull)] selection:text-white">
      <Header />
      <HeroManifesto />
      <BiografiaEditorial />
      <CaraDaMadrugada />
      <MetodologiaTeaser />
      <Eventos />
      <VitrineOrganica />
      <PortfolioMentorias />
      <Footer />
    </main>
  );
}
