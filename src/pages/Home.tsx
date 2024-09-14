import { CandidateSection } from "../components/CandidateSection";
import { ImpactProjectsSection } from "../components/ImpactProjectsSection";
import { LeadershipSection } from "../components/LeadershipSection";
import { OverviewSection } from "../components/OverviewSection";
import { ProjectSection } from "../components/ProjectSection";

export function Home() {
  return (
    <main className="text-[#242323]">
      <OverviewSection />
      <LeadershipSection />
      <ProjectSection />
      <ImpactProjectsSection />  
      <CandidateSection />  
    </main>
  )
}