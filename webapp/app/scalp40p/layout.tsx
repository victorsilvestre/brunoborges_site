import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./scalp40p.css";

const bodoniModa = localFont({
  src: "./fonts/BodoniModa-Variable.woff2",
  variable: "--font-s40-display",
  weight: "400 900",
  display: "swap",
});

const dmSans = localFont({
  src: "./fonts/DMSans-Variable.woff2",
  variable: "--font-s40-body",
  weight: "100 1000",
  display: "swap",
});

const description =
  "Conheça o Scalp 40P Kit de Execução de Bruno Borges: estratégia, tela do Profit, guia, mapa, checklist, diário e aulas para estudar e praticar.";

export const metadata: Metadata = {
  title: "Scalp 40P — Kit de Execução | Bruno Borges",
  description,
  openGraph: {
    title: "Scalp 40P — Kit de Execução | Bruno Borges",
    description,
    images: ["/scalp40p/scalp40p-youtube-thumb.webp"],
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#faf7f0",
};

export default function Scalp40PLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${bodoniModa.variable} ${dmSans.variable} scalp40p-page`}>
      {children}
    </div>
  );
}
