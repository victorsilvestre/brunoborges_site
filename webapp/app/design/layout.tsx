import type { Metadata } from "next";
import { Roboto_Serif, Roboto } from "next/font/google";

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
        <div className={`${robotoSerif.variable} ${roboto.variable}`}>
            {children}
        </div>
    );
}
