import image8 from '../assets/projetos/image 8.png'
import image from '../assets/projetos/image.png'
export function Projects() {
  return (
    <main className="font-[Montserrat] flex text-left flex-col py-[80px] px-[120px] mb-[10px]">
      <h1 className="font-bold text-[38px]">Projetos do PIP</h1>

      <section className="mb-9">
        <h2 className="font-semibold text-[20px] mb-9">Visão Geral</h2>
        <p className="font-medium text-[14px]">No Partido da Inovação e Progresso (PIP), acreditamos que a inovação é a chave para o desenvolvimento sustentável e o bem-estar social. Nossos projetos abrangem diversas áreas, desde educação e saúde até infraestrutura e sustentabilidade, sempre com o objetivo de transformar positivamente a vida dos cidadãos brasileiros. Explore os projetos que estão moldando o futuro do Brasil.</p>
      </section>

      <section>
        <h2 className="font-semibold text-[20px] mb-5">Projetos em Destaque</h2>
        <div className='flex gap-5 items-center mb-[97px]'>
          <img src={image8} alt="uma projeto da pip" />
          <div>
            <h3 className='font-semibold text-[18px] mb-5'>Energia Renovável para Comunidades</h3>
            <p className='italic text-[14px]'>O PIP está liderando a implementação de sistemas de energia solar em comunidades rurais, proporcionando acesso à energia limpa e sustentável. Esse projeto não apenas reduz a dependência de combustíveis fósseis, mas também empodera as comunidades ao oferecer capacitação para operar e manter os sistemas.-</p>
          </div>
        </div>
        <div className='flex gap-5 items-center mb-[97px]'>
          <img src={image} alt="uma projeto da pip" />
          <div>
            <h3 className='font-semibold text-[18px] mb-5'>Educação Tecnológica nas Escolas Públicas</h3>
            <p className='italic text-[14px]'>A educação é o alicerce do progresso. Com nosso projeto de educação tecnológica, estamos equipando escolas públicas com ferramentas digitais e treinamento para professores, garantindo que os estudantes tenham acesso ao conhecimento e habilidades necessárias para prosperar no futuro digital.</p>
          </div>
        </div>
        <div className='flex gap-5 items-center mb-[97px]'>
          <img src={image} alt="uma projeto da pip" />
          <div>
            <h3 className='font-semibold text-[18px] mb-5'>Educação Tecnológica nas Escolas Públicas</h3>
            <p className='italic text-[14px]'>A educação é o alicerce do progresso. Com nosso projeto de educação tecnológica, estamos equipando escolas públicas com ferramentas digitais e treinamento para professores, garantindo que os estudantes tenham acesso ao conhecimento e habilidades necessárias para prosperar no futuro digital.</p>
          </div>
        </div>
        <div className='flex gap-5 items-center mb-[97px]'>
          <img src={image} alt="uma projeto da pip" />
          <div>
            <h3 className='font-semibold text-[18px] mb-5'>Educação Tecnológica nas Escolas Públicas</h3>
            <p className='italic text-[14px]'>A educação é o alicerce do progresso. Com nosso projeto de educação tecnológica, estamos equipando escolas públicas com ferramentas digitais e treinamento para professores, garantindo que os estudantes tenham acesso ao conhecimento e habilidades necessárias para prosperar no futuro digital.</p>
          </div>
        </div>
      </section>
    </main>
  )
}