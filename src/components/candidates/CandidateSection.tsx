import { CandidateCard } from "./CandidateCard";
import { CircleSvg } from "../assets/CircleBg";

export function CandidateSection() {
  return (
    <section className="flex flex-col items-center py-[80px] px-[100px] font-[Montserrat] text-center mb-[80px]">
      <h1 className="text-[38px] mb-[44px] w-[421px]">Nossos Líderes à <span className="font-semibold">Frente da Mudança</span></h1>
      <p className="text-[14px] w-[900px]">Conheça alguns dos candidatos que estão liderando as pesquisas e representando a
        verdadeira essência do Partido da Inovação e Progresso. Com propostas fortes e o apoio popular crescente,
        eles estão prontos para transformar nossas ideias em ações concretas.</p>
      <div className="w-full flex mt-[110px] relative">
        <CircleSvg position="absolute z-10 left-[40%]" opacity="0.05" />
        <div className="absolute flex justify-center items-center w-[calc(100%-240px)] h-full">
          <article className="w-[260px] h-[189px] p-8 bg-white shadow-2xl rounded-[40px] ml-[200px] mt-[-60px]">
            <h1 className="text-[14px] font-medium">Confiança Crescente nas <br /><span className="font-bold">Propostas PIP</span></h1>
            <p className="text-[14px] mt-[7px]">Engajamento e Confiança <br /> dos Eleitores</p>
            <div className="text-center font-bold">
              <span>82%</span>
              <div className="w-[157px] h-[16px] rounded-[12px] bg-[#0000FF]/70"></div>
            </div>
          </article>
        </div>
        <div className="w-[50%] flex flex-col gap-[100px]">
          <CandidateCard
            imageSrc="candidato-card-homepage1.jpg"
            name="ROSANA HELENA"
            slogan="Por um futuro tecnológico"
            voteNumber="3034"
            backgroundColor="bg-[#FFD800]/70"
          />
          <CandidateCard
            imageSrc="candidato-card-homepage3.jpg"
            name="MARCELO ALVES"
            slogan="Por um futuro tecnológico"
            voteNumber="3062"
            backgroundColor="bg-[#4CAF50]/70"
            position="ml-[80px]"
          />
        </div>
        <div className="flex items-center justify-center">
          <CandidateCard
            imageSrc="candidato-card-homepage2.jpg"
            name="SAULO SUPRIANO"
            slogan="Por um futuro tecnológico"
            voteNumber="3089"
            backgroundColor="bg-[#4CAF50]/70"
            position="ml-[80px] mt-[-160px]"
          />
        </div>
      </div>
    </section>
  )
}