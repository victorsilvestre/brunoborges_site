import type { Metadata } from "next";
import { Roboto_Serif, Roboto } from "next/font/google";
import "./design.css";

const robotoSerif = Roboto_Serif({
    variable: "--font-design-serif",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
});

const roboto = Roboto({
    variable: "--font-design-sans",
    subsets: ["latin"],
    weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
    title: "Brand Guidelines — Bruno Borges",
    description:
        "Manual de identidade visual do Bruno Borges: cores, tipografia, logo e elementos de marca.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function DesignLayout({ children }: { children: React.ReactNode }) {
    return (
        <div
            className={`${robotoSerif.variable} ${roboto.variable}`}
            style={
                {
                    "--paper": "#FFFBF7",
                    "--ink": "#0C0D0E",
                    "--accent": "#A2CB10",
                    "--accent-deep": "#5C7A00",
                    "--rule": "rgba(12, 13, 14, 0.12)",
                    "--muted": "rgba(12, 13, 14, 0.55)",
                    "--card": "rgba(12, 13, 14, 0.03)",
                } as React.CSSProperties
            }
        >
            {children}
        </div>
    );
}
