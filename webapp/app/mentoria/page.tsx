import { Hero } from "./components/Hero";
import { Diagnostic } from "./components/Diagnostic";
import { MethodMetrics } from "./components/MethodMetrics";
import { CurriculumContent } from "./components/CurriculumContent";
import { LearningPillars } from "./components/LearningPillars";
import { MentorAndProof } from "./components/MentorAndProof";
import { Offer } from "./components/Offer";
import { FAQ } from "./components/FAQ";
import { BottomCTA } from "./components/BottomCTA";

export default function MentoriaPage() {
    return (
        <main className="w-full bg-[var(--m-surface)]">
            <Hero />
            <Diagnostic />
            <MethodMetrics />
            <CurriculumContent />
            <LearningPillars />
            <MentorAndProof />
            <Offer />
            <FAQ />
            <BottomCTA />
        </main>
    );
}
