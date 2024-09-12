import { BannerMainLogo } from "./BannerMainLogo";
import { BannerMainLogoBg } from "./BannerMainLogoBg";

export function OverviewSection() {
  const candidates = [
    "rita-cassia.jpg",
    "paulo-dijaniro.jpg",
    "paola-silva.jpg"
  ]

  const partyLeaders = [
    {
      name: 'Mario Lopes da Silva',
      role: 'Presidente do Partido',
      image: './mario-lopes-da-silva.png',
      position: 'left-[100px]'
    },
    {
      name: 'Lucas Fernandes Costa',
      role: 'Vice-Presidente do Partido',
      image: './lucas-fernandes-costa.png',
      position: 'right-[100px] top-[586px]'
    }
  ]

  return (
    <section className="flex items-center flex-col">
      <h1 className="w-[804px] text-[40px] text-center font-[Kodchasan] text-[#474343] mb-[65px]">
        Transformando ideias em <b>ações</b>, <b>inovando</b> vidas
      </h1>
      <div className="absolute top-[90px] right-[160px]">
        <BannerMainLogoBg />
      </div>
      <div className="mb-[100px]">
        <BannerMainLogo />
      </div>

      <article>
        <h1 className="text-[22px]">
          <b>+60</b> candidatos eleitos
        </h1>
        <div className="flex mt-[18px]">
          {candidates.map((src, i) => (
            <img
              key={i}
              width={80}
              height={80}
              className={`bg-black rounded-full border border-white ${i > 0 ? 'ml-[-10px]' : ''}`}
              src={src}
              alt={`Imagem ${i + 1}`}
            />
          ))}
        </div>
      </article>

      {partyLeaders.map((leader, index) => (
        <figure key={index} className={`absolute top-[240px] ${leader.position} text-center`}>
          <img width={281} className="rounded-[50px]" src={leader.image} alt={leader.role} />
          <figcaption className="pt-[22px] font-[Montserrat] font-semibold text-[24px]">
            {leader.name}
          </figcaption>
          <figcaption className="font-[Kodchasan]">{leader.role}</figcaption>
        </figure>
      ))}

      <div className="absolute top-[240px] right-[100px] font-[Kodchasan]">
        <h2 className="font-bold text-[42px]">+300</h2>
        <p className="font-regular text-[26px]">
          Projetos <br />
          em andamento
        </p>
      </div>

      <article className="flex flex-col w-full px-[100px] mt-[-100px] mb-[100px] font-[Montserrat] text-[18px] font-light">
        <h1>
          Candidatos eleitos <br />
          em 28 Estados do <span className="font-semibold">BRASIL</span>
        </h1>
        <div className="flex mt-[20px] gap-[8px]">
          {['CE', 'SP', 'RJ', 'PE', 'AM'].map((state, index) => (
            <div key={index} className="flex items-center justify-center w-[42px] h-[42px] bg-[#868282] text-white rounded-full font-[Kodchasan] font-semibold text-[12px]">
              {state}
            </div>
          ))}
          <div className="flex items-center justify-center w-[42px] h-[42px] bg-[#868282] opacity-[33%] text-white rounded-full font-semibold text-[22px]">+</div>
        </div>
      </article>
    </section>
  )
}