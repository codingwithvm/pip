import { CandidateSection } from "../components/candidates/CandidateSection";
import { ImpactProjectsSection } from "../components/sections/ImpactProjectsSection";
import { LeadershipSection } from "../components/sections/LeadershipSection";
import { OverviewSection } from "../components/sections/OverviewSection";
import { ProjectSection } from "../components/sections/ProjectSection";

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