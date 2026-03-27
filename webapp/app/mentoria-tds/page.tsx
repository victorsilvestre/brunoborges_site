import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Mentorship } from "./components/Mentorship";
import { WhatYouReceive } from "./components/WhatYouReceive";
import { VideoSection } from "./components/VideoSection";
import { Differentiators } from "./components/Differentiators";
import { ResultsSection } from "./components/ResultsSection";
import { SocialProof } from "./components/SocialProof";
import { Author } from "./components/Author";
import { FAQ } from "./components/FAQ";
import { Waitlist } from "./components/Waitlist";
import { WhyTDSIsDifferent } from "./components/WhyTDSIsDifferent";
import { NextClass } from "./components/NextClass";

export default function LandingPage() {
    return (
        <main className="bg-[var(--dark-base)] min-h-screen text-white selection:bg-[var(--green-bull)] selection:text-white">
            <Hero />
            <Features />
            <Mentorship />
            <WhyTDSIsDifferent />
            <WhatYouReceive />
            <VideoSection />
            <NextClass />
            <Differentiators />
            <ResultsSection />
            <SocialProof />
            <Author />
            <FAQ />
            <Waitlist />

            {/* Footer premium minimalista */}
            <footer className="py-12 flex flex-col items-center justify-center border-t border-[var(--white-10)] bg-black relative overflow-hidden">
                <div className="absolute bottom-0 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-[var(--gold-premium)] to-transparent opacity-30" />
                <img
                    src="/images/logo/logo_icon-white-1.png"
                    alt="Trader Bruno Borges"
                    className="h-10 w-10 object-contain opacity-40 mb-4"
                />
                <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--white-20)] font-bold">
                    &copy; {new Date().getFullYear()} — Excelência em Price Action
                </div>
            </footer>
        </main>
    );
}
