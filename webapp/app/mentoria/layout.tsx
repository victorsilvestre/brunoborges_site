import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./mentoria.css";

const inter = Inter({
  variable: "--font-mentoria-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-mentoria-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mentoria-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bruno Borges | Mentoria TDS",
  description: "Mentoria Trader de Sucesso — aprenda a ler o mercado com Price Action.",
};

export default function MentoriaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} mentoria-page`}>
      {children}
    </div>
  );
}
