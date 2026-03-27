import type { Metadata } from "next";
import { Inter, Montserrat, Dancing_Script } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800", "900"],
  style: ["normal", "italic"]
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["700"]
});


export const metadata: Metadata = {
  title: "Trader Bruno Borges",
  description: "Transforme sua vida com o Método TDS",
  icons: {
    icon: "/images/logo/logo_icon-black-1.png",
    shortcut: "/images/logo/logo_icon-black-1.png",
    apple: "/images/logo/logo_icon-black-1.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${montserrat.variable} ${dancingScript.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
