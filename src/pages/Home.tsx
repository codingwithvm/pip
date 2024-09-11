import { BannerMainLogo } from "../components/BannerMainLogo";
import { BannerMainLogoBg } from "../components/BannerMainLogoBg";

export function Home() {
  return (
    <section className="flex items-center flex-col text-[#242323]">
      <h1 className="w-[804px] text-[48px] text-center font-[Kodchasan] text-[#474343] mb-[65px]">Transformando ideias em <b>ações</b>, <b>inovando</b> vidas</h1>
      <div className="absolute top-[90px] right-[160px]">
        <BannerMainLogoBg />
      </div>
      <div className="mb-[100px]">
        <BannerMainLogo />
      </div>
      <article>
        <h1 className="text-[22px]"><b>+60</b> candidatos eleitos</h1>
        <div className="flex mt-[18px]">
          <img width={80} height={80} className="bg-black rounded-full border border-white" src="mario-lopes-da-silva.png" alt="" />
          <img width={80} height={80} className="bg-black rounded-full border border-white ml-[-10px]" src="mario-lopes-da-silva.png" alt="" />
          <img width={80} height={80} className="bg-black rounded-full border border-white ml-[-10px]" src="mario-lopes-da-silva.png" alt="" />
        </div>
      </article>
      <figure className="absolute top-[240px] left-[100px] text-center">
        <img width={281} className="rounded-[50px]" src="./mario-lopes-da-silva.png" alt="presidente do partido" />
        <figcaption className="pt-[22px] font-[Montserrat] font-semibold text-[24px]">Mario Lopes da Silva</figcaption>
        <figcaption className="font-[Kodchasan]">Presidente do Partido</figcaption>
      </figure>
      <div className="absolute top-[240px] right-[100px] font-[Kodchasan]">
        <h2 className="font-bold text-[42px]">+300</h2>
        <p className="font-regular text-[26px]">Projetos <br />em andamento</p>
      </div>
      <figure className="absolute top-[586px] right-[100px] text-center">
        <img width={281} className="rounded-[50px]" src="./lucas-fernandes-costa.png" alt="presidente do partido" />
        <figcaption className="pt-[22px] font-[Montserrat] font-semibold text-[24px]">Lucas Fernandes Costa</figcaption>
        <figcaption className="font-[Kodchasan]">Vice-Presidente do Partido</figcaption>
      </figure>
      <article className="flex flex-col w-full px-[100px] mt-[-100px] mb-[100px] font-[Montserrat] text-[18px] font-light">
        <h1>Candidatos eleitos <br />em 28 Estados do <span className="font-semibold">BRASIL</span></h1>
        <div className="flex mt-[20px] gap-[8px]">
          <div className="flex items-center justify-center w-[42px] h-[42px] bg-[#868282] text-white rounded-full font-[Kodchasan] font-semibold text-[12px]">CE</div>
          <div className="flex items-center justify-center w-[42px] h-[42px] bg-[#868282] text-white rounded-full font-[Kodchasan] font-semibold text-[12px]">SP</div>
          <div className="flex items-center justify-center w-[42px] h-[42px] bg-[#868282] text-white rounded-full font-[Kodchasan] font-semibold text-[12px]">RJ</div>
          <div className="flex items-center justify-center w-[42px] h-[42px] bg-[#868282] text-white rounded-full font-[Kodchasan] font-semibold text-[12px]">PE</div>
          <div className="flex items-center justify-center w-[42px] h-[42px] bg-[#868282] text-white rounded-full font-[Kodchasan] font-semibold text-[12px]">AM</div>
          <div className="flex items-center justify-center w-[42px] h-[42px] bg-[#868282] opacity-[33%] text-white rounded-full font-semibold text-[22px] pt-[-10px]">+</div>
        </div>
      </article>
    </section>
  )
}