import image8 from '../assets/projetos/image 8.png'
import image from '../assets/projetos/image.png'
export function Projects() {
  return (
    <article className="my-[96px] mx-[136px]">
      <h1 className="font-bold text-5xl mb-2">Projetos do PIP</h1>

      <section className="mb-[95px]">
        <h2 className="font-semibold text-2xl mb-[46px]">Visão Geral</h2>
        <p className="font-medium text-xl">No Partido da Inovação e Progresso (PIP), acreditamos que a inovação é a chave para o desenvolvimento sustentável e o bem-estar social. Nossos projetos abrangem diversas áreas, desde educação e saúde até infraestrutura e sustentabilidade, sempre com o objetivo de transformar positivamente a vida dos cidadãos brasileiros. Explore os projetos que estão moldando o futuro do Brasil.</p>
      </section>

      <section>
        <h2 className="font-semibold text-2xl mb-[61px] ">Projetos em Destaque</h2>
        <div className='flex gap-5 items-center mb-[97px]'>
          <img src={image8} alt="uma projeto da pip" />
          <div>
            <h3 className='font-semibold text-2xl mb-[31px]'>Energia Renovável para Comunidades</h3>
            <p className='italic text-lg'>O PIP está liderando a implementação de sistemas de energia solar em comunidades rurais, proporcionando acesso à energia limpa e sustentável. Esse projeto não apenas reduz a dependência de combustíveis fósseis, mas também empodera as comunidades ao oferecer capacitação para operar e manter os sistemas.-</p>
          </div>
        </div>
        <div className='flex gap-5 items-center mb-[97px]'>
          <img src={image} alt="uma projeto da pip" />
          <div>
            <h3 className='font-semibold text-2xl mb-[31px]'>Educação Tecnológica nas Escolas Públicas</h3>
            <p className='italic text-lg'>A educação é o alicerce do progresso. Com nosso projeto de educação tecnológica, estamos equipando escolas públicas com ferramentas digitais e treinamento para professores, garantindo que os estudantes tenham acesso ao conhecimento e habilidades necessárias para prosperar no futuro digital.</p>
          </div>
        </div>
        <div className='flex gap-5 items-center mb-[97px]'>
          <img src={image} alt="uma projeto da pip" />
          <div>
            <h3 className='font-semibold text-2xl mb-[31px]'>Educação Tecnológica nas Escolas Públicas</h3>
            <p className='italic text-lg'>A educação é o alicerce do progresso. Com nosso projeto de educação tecnológica, estamos equipando escolas públicas com ferramentas digitais e treinamento para professores, garantindo que os estudantes tenham acesso ao conhecimento e habilidades necessárias para prosperar no futuro digital.</p>
          </div>
        </div>
        <div className='flex gap-5 items-center mb-[97px]'>
          <img src={image} alt="uma projeto da pip" />
          <div>
            <h3 className='font-semibold text-2xl mb-[31px]'>Educação Tecnológica nas Escolas Públicas</h3>
            <p className='italic text-lg'>A educação é o alicerce do progresso. Com nosso projeto de educação tecnológica, estamos equipando escolas públicas com ferramentas digitais e treinamento para professores, garantindo que os estudantes tenham acesso ao conhecimento e habilidades necessárias para prosperar no futuro digital.</p>
          </div>
        </div>
      </section>
    </article>
  )
}