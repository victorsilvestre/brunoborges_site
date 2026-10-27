import type { Metadata, Viewport } from "next";
import { Roboto, Roboto_Serif } from "next/font/google";
import { SESSAO } from "./config";
import "./salaeducacional.css";

const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
  variable: "--font-sala-display",
  style: ["normal", "italic"],
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-sala-body",
  weight: ["400", "500", "700"],
  display: "swap",
});

const description = `Sala Educacional do Trader Bruno Borges: acompanhe o Método TDS ao vivo, todo dia útil das ${SESSAO.inicio} às ${SESSAO.fim}. Exclusiva para alunos da Mentoria Trader de Sucesso.`;

export const metadata: Metadata = {
  title: "Sala Educacional | Trader Bruno Borges",
  description,
  openGraph: {
    title: "Sala Educacional | Trader Bruno Borges",
    description,
    images: ["/salaeducacional/bruno-hero.webp"],
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0C0D0E",
};

export default function SalaEducacionalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${robotoSerif.variable} ${roboto.variable} sala-page`}>
      {children}
    </div>
  );
}
