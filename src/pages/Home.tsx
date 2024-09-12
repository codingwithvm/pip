import { OverviewSection } from "../components/OverviewSection";

export function Home() {
  return (
    <main className="text-[#242323]">
      <OverviewSection />

      <section className="flex flex-col items-center py-[80px] px-[120px]">
        <article className="font-[Montserrat] w-full ml-[60px]">
          <div className="flex bg-[#D9D9D9]/30 rounded-[30px] p-[60px] overflow-hidden">
            <div className="w-[80%]">
              <h1 className="font-medium text-[30px] mb-[36px]">Da inovação à execução, <br />nossos líderes estarão sempre <br />ao seu lado!</h1>
              <p className="font-regular text-[14px]">O Partido da Inovação e Progresso foi criado para cada <br /> cidadão que acredita em um futuro sustentável, onde a <br /> tecnologia, a inclusão e a justiça social caminham juntas <br /> para transformar o Brasil.</p>
            </div>
            <div className="w-[548px] h-[365px] rounded-[50px] mb-[-200px] mr-[-100px] overflow-hidden">
              <img className="object-contain" src="grupo-politico.jpg" alt="grupo politico" />
            </div>
          </div>
        </article>
      </section>
      <section className="flex flex-col items-center py-[80px] px-[120px] font-[Montserrat] text-center">
        <h1 className="text-[38px] font-regular">Conheça nossos <br /><span className="font-semibold">Projetos de Impacto</span></h1>
        <p className="text-[14px] mt-[44px]">No PIP, estamos sempre em ação. Nossos projetos em andamento <br />
          estão mudando vidas e criando um futuro mais inovador sustentável. <br />
          Veja como estamos transformando o Brasil, um projeto de cada vez.</p>
        <div className="flex items-center mt-[44px]">
          <div className="w-[289px] h-[359px] rounded-[30px] overflow-hidden z-30">
            <img className="w-[289px] h-[359px] object-cover" src="projetos.png" alt="grupo" />
          </div>
          <div className="w-[289px] h-[321px] rounded-[30px] overflow-hidden ml-[calc(-289px/2)] z-20">
            <img className="w-[289px] h-[321px] object-cover" src="projetos.png" alt="grupo" />
          </div>
          <div className="w-[289px] h-[261px] rounded-[30px] overflow-hidden ml-[calc(-180px)] z-10">
            <img className="w-[289px] h-[321px] object-cover" src="projetos.png" alt="grupo" />
          </div>
        </div>
        <div className="absolute left-[25%]">
          <svg width="533" height="533" viewBox="0 0 533 533" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="266.5" cy="266.5" r="266" stroke="#0000FF" stroke-opacity="0.1" />
          </svg>
        </div>
      </section>
      <section className="w-full py-[80px] font-[Montserrat]">
        <div className="flex justify-around">
          <img className="w-[384px] h-[456px] rounded-[154px] object-cover" src="manifestantes.jpg" alt="manifestantes" />
          <div className="absolute flex items-end pb-[40px] left-[28%] z-20 h-[456px]">
            <article className="w-[260px] h-[189px] p-8 bg-white shadow-2xl rounded-[40px]">
              <h1 className="text-[14px] font-medium">Apoio Popular <br /><span className="font-bold">Crescente</span></h1>
              <p className="text-[14px] mt-[7px]">Aprovação das Propostas <br /> do PIP</p>
              <div className="text-center font-bold">
                <span>75%</span>
                <div className="w-[157px] h-[16px] rounded-[12px] bg-[#4CAF50]/70"></div>
              </div>
            </article>
          </div>
          <div className="absolute z-10 left-[40%]">
            <svg width="533" height="533" viewBox="0 0 533 533" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="266.5" cy="266.5" r="266" stroke="#0000FF" stroke-opacity="0.1" />
            </svg>
          </div>
          <div>
            <h1 className="text-[38px] font-regular mt-[20px] mb-[35px]">Liderando o Caminho para um <br /><span className="font-semibold">Futuro Melhor</span></h1>
            <p className="text-[14px]">
              O PIP está na vanguarda da transformação social e ambiental no Brasil. <br />
              Com uma visão clara e determinação, estamos concretizando projetos que <br />
              fazem a diferença, impactando positivamente comunidades em todo o <br />
              país e preparando o terreno para um futuro mais justo e sustentável. <br />
            </p>
            <div className="flex justify-between mt-[70px]">
              <div className="flex flex-col items-center justify-center w-[187px] h-[97px] bg-[#0000FF]/70 font-semibold rounded-[20px]">
                <span className="text-[40px]">+500</span>
                <span className="mt-[-10px] text-[14px]">Projetos concluídos</span>
              </div>
              <div className="flex flex-col items-center justify-center w-[187px] h-[97px] bg-[#FFD800]/70 font-semibold rounded-[20px]">
                <span className="text-[32px]">+300</span>
                <span className="mt-[-10px] text-[14px]">Projetos em <br /> andamento</span>
              </div>
              <div className="flex flex-col items-center justify-center w-[187px] h-[97px] bg-[#4CAF50]/70 font-semibold rounded-[20px]">
                <span className="text-[32px]">+300 mil</span>
                <span className="mt-[-10px] text-[14px]">Beneficiados</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center py-[80px] px-[120px] font-[Montserrat] text-center mb-[80px]">
        <h1 className="text-[38px] mb-[44px]">Nossos Líderes à <br /> <span className="font-semibold">Frente da Mudança</span></h1>
        <p className="text-[14px]">Conheça alguns dos candidatos que estão liderando as pesquisas e representando a <br />
          verdadeira essência do Partido da Inovação e Progresso. Com propostas fortes e o apoio popular crescente, <br />
          eles estão prontos para transformar nossas ideias em ações concretas.</p>
        <div className="w-full flex mt-[110px]">
          <div className="absolute z-10 left-[40%]">
            <svg width="533" height="533" viewBox="0 0 533 533" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="266.5" cy="266.5" r="266" stroke="#0000FF" stroke-opacity="0.05" />
            </svg>
          </div>
          <div className="absolute flex justify-center items-center w-[calc(100%-240px)] h-full">
            <article className="w-[260px] h-[189px] p-8 bg-white shadow-2xl rounded-[40px]">
              <h1 className="text-[14px] font-medium">Confiança Crescente nas <br /><span className="font-bold">Propostas PIP</span></h1>
              <p className="text-[14px] mt-[7px]">Engajamento e Confiança <br /> dos Eleitores</p>
              <div className="text-center font-bold">
                <span>82%</span>
                <div className="w-[157px] h-[16px] rounded-[12px] bg-[#0000FF]/70"></div>
              </div>
            </article>
          </div>
          <div className="w-[50%] flex flex-col gap-[100px]">
            <figure className="flex w-[514px] h-[294px] bg-[#FFD800]/70 rounded-[40px] text-left">
              <img className="rounded-[40px]" src="candidato-card-homepage1.jpg" alt="Rosana Helena" />
              <figcaption className="px-6 py-4 flex flex-col justify-between text-white">
                <div className="pt-2">
                  <h1 className="font-bold text-[24px]">ROSANA</h1>
                  <h2 className="font-bold text-[32px] mt-[-7px]">HELENA</h2>
                </div>
                <p className="font-bold text-[14px]">“Por um futuro <br />
                  tecnológico”</p>
                <div className="flex flex-col">
                  <span className="font-medium text-[28px]">VOTE</span>
                  <span className="font-bold text-[42px] mt-[-14px]">3034</span>
                </div>
              </figcaption>
            </figure>
            <figure className="flex w-[514px] h-[294px] bg-[#4CAF50]/70 rounded-[40px] text-left ml-[70px]">
              <img className="rounded-[40px]" src="candidato-card-homepage3.jpg" alt="Marcelo Alves" />
              <figcaption className="px-6 py-4 flex flex-col justify-between text-white">
                <div className="pt-2">
                  <h1 className="font-bold text-[24px]">MARCELO</h1>
                  <h2 className="font-bold text-[32px] mt-[-7px]">ALVES</h2>
                </div>
                <p className="font-bold text-[14px]">“Por um futuro <br />
                  tecnológico”</p>
                <div className="flex flex-col">
                  <span className="font-medium text-[28px]">VOTE</span>
                  <span className="font-bold text-[42px] mt-[-14px]">3062</span>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="flex items-center justify-center">
            <figure className="flex w-[514px] h-[294px] bg-[#4CAF50]/70 rounded-[40px] text-left ml-[100px] mb-[160px]">
              <img className="rounded-[40px]" src="candidato-card-homepage2.jpg" alt="Saulo Supriano" />
              <figcaption className="px-6 py-4 flex flex-col justify-between text-white">
                <div className="pt-2">
                  <h1 className="font-bold text-[24px]">SAULO</h1>
                  <h2 className="font-bold text-[32px] mt-[-7px]">SUPRIANO</h2>
                </div>
                <p className="font-bold text-[14px]">“Por um futuro <br />
                  tecnológico”</p>
                <div className="flex flex-col">
                  <span className="font-medium text-[28px]">VOTE</span>
                  <span className="font-bold text-[42px] mt-[-14px]">3089</span>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </main>
  )
}