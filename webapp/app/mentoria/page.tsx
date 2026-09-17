import { Hero } from "./components/Hero";
import { Diagnostic } from "./components/Diagnostic";
import { CurriculumContent } from "./components/CurriculumContent";
import { LearningPillars } from "./components/LearningPillars";
import { MentorAndProof } from "./components/MentorAndProof";
import { Offer } from "./components/Offer";
import { FAQ } from "./components/FAQ";
import { BottomCTA } from "./components/BottomCTA";
import { ClosedRegistrations } from "./components/ClosedRegistrations";
import { INSCRICOES_ABERTAS } from "./config";

export default function MentoriaPage() {
    if (!INSCRICOES_ABERTAS) {
        return <ClosedRegistrations />;
    }

    return (
        <main className="w-full bg-[var(--m-surface)]">
            <Hero />
            <Diagnostic />
            <LearningPillars />
            <CurriculumContent />
            <MentorAndProof />
            <Offer />
            <FAQ />
            <BottomCTA />
        </main>
    );
}
