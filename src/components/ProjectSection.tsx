import { CircleSvg } from "./CircleBg";

export function ProjectSection() {
  return (
    <section className="flex flex-col items-center py-[80px] px-[120px] font-[Montserrat] text-center">
      <h1 className="text-[38px] w-[436px]">Conheça nossos <span className="font-semibold">Projetos de Impacto</span></h1>
      <p className="text-[14px] mt-[44px] w-[500px]">No PIP, estamos sempre em ação. Nossos projetos em andamento
        estão mudando vidas e criando um futuro mais inovador sustentável.
        Veja como estamos transformando o Brasil, um projeto de cada vez.</p>
      <div className="flex items-center mt-[44px]">
        <div className="overflow-hidden z-30">
          <img className="rounded-[30px] w-[289px] h-[359px] object-cover" src="projetos.png" alt="grupo" />
        </div>
        <div className="overflow-hidden ml-[calc(-289px/2)] z-20">
          <img className="rounded-[30px] w-[289px] h-[321px] object-cover" src="projetos.png" alt="grupo" />
        </div>
        <div className="overflow-hidden ml-[calc(-180px)] z-10">
          <img className="rounded-[30px] w-[289px] h-[261px] object-cover" src="projetos.png" alt="grupo" />
        </div>
      </div>

      <CircleSvg position="absolute left-[25%]" />
    </section>
  )
}