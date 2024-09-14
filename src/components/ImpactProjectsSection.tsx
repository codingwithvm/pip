import { CircleSvg } from "./CircleBg"
import { InfoCard } from "./InfoCard"
import { StatsCard } from "./StatsCard"

export function ImpactProjectsSection() {
  return (
    <section className="w-full py-[80px] font-[Montserrat]">
      <div className="flex justify-around">
        <img className="w-[384px] h-[456px] rounded-[154px] object-cover" src="manifestantes.jpg" alt="manifestantes" />
        <div className="absolute flex items-end pb-[40px] left-[28%] z-20 h-[456px]">
          <InfoCard percentage="75%" description="Aprovação das Propostas do PIP" />
        </div>
        <CircleSvg position="absolute z-10 left-[40%]" />
        <div>
          <h1 className="text-[38px] font-regular mt-[20px] mb-[35px]">
            Liderando o Caminho para um <br />
            <span className="font-semibold">Futuro Melhor</span>
          </h1>
          <p className="text-[14px]">
            O PIP está na vanguarda da transformação social e ambiental no Brasil. <br />
            Com uma visão clara e determinação, estamos concretizando projetos que <br />
            fazem a diferença, impactando positivamente comunidades em todo o <br />
            país e preparando o terreno para um futuro mais justo e sustentável.
          </p>

          <div className="flex justify-between mt-[70px]">
            <StatsCard value="+500" label="Projetos concluídos" bgColor="bg-[#0000FF]/70" />
            <StatsCard value="+300" label="Projetos em andamento" bgColor="bg-[#FFD800]/70" />
            <StatsCard value="+300 mil" label="Beneficiados" bgColor="bg-[#4CAF50]/70" />
          </div>
        </div>
      </div>
    </section>
  )
}
