import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/next';
import { GoogleTagManager } from '@next/third-parties/google';
import { Inter, Montserrat, Dancing_Script, JetBrains_Mono } from "next/font/google";
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

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
});


export const metadata: Metadata = {
  title: "Trader Bruno Borges",
  description: "Transforme sua vida com o Método TDS",
  icons: {
    icon: "/images/logo/logo_icon-black_new.png",
    shortcut: "/images/logo/logo_icon-black_new.png",
    apple: "/images/logo/logo_icon-black_new.png",
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
      className={`${inter.variable} ${montserrat.variable} ${dancingScript.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <GoogleTagManager gtmId="GTM-557S97RM" />
      <body className="min-h-full flex flex-col">{children}<Analytics /></body>
    </html>
  );
}
