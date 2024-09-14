export function LeadershipSection() {
  return (
    <section className="flex flex-col items-center py-[80px] px-[120px]">
      <article className="font-[Montserrat] w-full ml-[60px]">
        <div className="flex bg-[#D9D9D9]/30 rounded-[30px] p-[60px] overflow-hidden h-[410px]">
          <div className="w-[80%]">
            <h1 className="font-medium text-[32px] mb-[36px] mr-[50px] w-[548px]">
              Da inovação à execução, nossos líderes estarão sempre ao seu lado!
            </h1>
            <p className="font-regular text-[14px] w-[548px]">
              O Partido da Inovação e Progresso foi criado para cada cidadão que
              acredita em um futuro sustentável, onde a tecnologia, a inclusão e a
              justiça social caminham juntas para transformar o Brasil.
            </p>
          </div>
          <div className="rounded-[50px] mr-[-100px] mb-[-20px] overflow-hidden">
            <img className="object-contain" src="grupo-politico-home.jpg" alt="grupo politico" />
          </div>
        </div>
      </article>
    </section>
  )
}