import pipFile1 from '../assets/sobre/pip file 1.png'
import image7 from '../assets/sobre/image 7.png'
import image6 from '../assets/sobre/image 6.png'
import image from '../assets/sobre/image.png'

export function About() {
  return (
    <>
      <div className="py-[80px] px-[270px] ">
        <h1 className="text-5xl  font-bold">
          Sobre o Partido da Inovação e Progresso (PIP)
        </h1>

        <section className="mb-8">
          <h2 className="text-3xl font-bold pt-1 pb-9">Nossa Missão e Visão</h2>

          <div className="mb-5">
            <h2 className="font-bold text-2xl">Missão:</h2>
            <p className='font-[Montserrat] text-xl'>Acreditamos em um Brasil mais inovador, justo e sustentável. Nossa missão é transformar ideias em ações que beneficiem a todos, criando um futuro próspero para as próximas gerações.</p>
          </div>

          <div>
            <h2 className="font-bold text-2xl">Visão:</h2>
            <p className='font-[Montserrat] text-xl'>Ser o partido que lidera as mudanças necessárias para construir um Brasil mais igualitário, inovador e sustentável, onde todos têm as mesmas oportunidades.</p>
          </div>
        </section>

        <section className='mb-8'>
          <h2 className='font-bold text-2xl mb-10'>História do PIP</h2>
          
          <div className='flex gap-10 mb-8'>
            <div className=' text-left text-xl font-[Montserrat]'>
              <p className='mb-5'>O Partido da Inovação e Progresso (PIP) nasceu de uma necessidade crescente de mudanças reais no Brasil. Fundado por líderes de diferentes setores, o PIP surgiu como uma resposta às demandas da população por políticas públicas mais inovadoras e inclusivas. Desde sua fundação, o partido tem se destacado pela defesa de propostas que visam a inovação tecnológica, sustentabilidade e justiça social.</p>
              <p> A trajetória do PIP começou com um pequeno grupo de visionários que acreditavam no poder da inovação para transformar a sociedade. Em seus primeiros anos, o partido enfrentou desafios significativos, mas sempre manteve seu compromisso com a transparência e a inclusão, ganhando rapidamente o apoio de diversas comunidades. Com o tempo, o PIP ampliou sua base de apoio, unindo cidadãos de todas as regiões do Brasil que compartilhavam o mesmo desejo de ver o país progredir de forma sustentável.À medida que crescia, o PIP se destacou pela sua abordagem inovadora na resolução de problemas complexos.</p>
            </div>
            <img src={pipFile1} alt="Moça segurando um cracha" />
          </div>
          <p className='font-[Montserrat] text-xl'>Hoje, o PIP é reconhecido como um dos partidos mais influentes na promoção de políticas que colocam a inovação e o progresso no centro das discussões nacionais. Sua história é marcada por um forte senso de propósito e dedicação à causa pública, sempre priorizando o bem-estar dos brasileiros e o futuro do país.</p>
        </section>

        <section className='mb-8'>
          <h2 className='font-bold text-2xl mb-16'>Liderança do PIP</h2>

          <img src={image7} alt="liderança do pip" />
          <p className='font-[Montserrat] text-xl py-4 '>Os líderes do PIP em uma conferência sobre políticas de inovação e progresso para o Brasil.</p>
        </section>

        <section className='mb-8'>
          <h2 className='font-bold text-2xl mb-11'>Principais Conquistas</h2>

          <p className='font-[Montserrat] text-xl mb-8'>Desde a sua fundação, o PIP tem acumulado várias conquistas que reforçam o seu compromisso com a mudança:</p>

          <ul className='list-disc pl-5'>
           <li className='text-xl '><span className='font-bold'>Educação Tecnológica:</span> Implementação de programas de educação tecnológica em escolas públicas, beneficiando milhares de estudantes.</li>
           <li className='text-xl '><span className='font-bold'>Energia Renovável:</span> Projetos de energia solar que já abastecem comunidades inteiras, promovendo a sustentabilidade.</li>
           <li className='text-xl '><span className='font-bold'>Inclusão Social:</span> Campanhas de inclusão que têm dado voz e oportunidade a grupos marginalizados em várias regiões do Brasil.</li>
          </ul>
        </section>

        <section className='mb-16'>
          <h2 className='text-2xl font-bold mb-10'>Nossos Projetos</h2>

          <div className='flex items-center gap-10 mb-8'>
            <img src={image6} alt="projeto pip energia solar" />

            <p className='italic'><span className='font-bold'>Energia Renovável:</span> O PIP lidera projetos de energia solar que já abastecem comunidades inteiras, promovendo sustentabilidade e autonomia energética.</p>
          </div>
          <div className='flex items-center gap-10'>
            <p className='italic text-right'><span className='font-bold'>Educação Tecnológica:</span> Projetos de educação tecnológica em escolas públicas, preparando a nova geração para o futuro digital do Brasil.</p>

          <img src={image} alt="projeto educação tecnologica" />
          </div>
        </section>
      </div>
    </>
  );
}
