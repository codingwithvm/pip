export function Candidates() {
  const candidates = [
    {
      firstName: 'Lucas',
      lastName: 'Almeida',
      candidateNumber: '45123',
      profileImageUrl: '',
      candidateRole: 'PREFEITO',
      city: 'Fortaleza',
      stateCode: 'CE'
    },
    {
      firstName: 'Mariana',
      lastName: 'Costa',
      candidateNumber: '45234',
      profileImageUrl: '',
      candidateRole: 'PREFEITO',
      city: 'Salvador',
      stateCode: 'BA'
    },
    {
      firstName: 'Mariana',
      lastName: 'Costa',
      candidateNumber: '45234',
      profileImageUrl: '',
      candidateRole: 'PREFEITO',
      city: 'Salvador',
      stateCode: 'BA'
    },
    {
      firstName: 'Mariana',
      lastName: 'Costa',
      candidateNumber: '45234',
      profileImageUrl: '',
      candidateRole: 'PREFEITO',
      city: 'Salvador',
      stateCode: 'BA'
    },
    {
      firstName: 'Ana Beatriz',
      lastName: 'Sousa',
      candidateNumber: '50101',
      profileImageUrl: '',
      candidateRole: 'GOVERNADOR',
      city: 'São Paulo',
      stateCode: 'SP'
    },
    {
      firstName: 'Natanael',
      lastName: 'Ferreira',
      candidateNumber: '55111',
      profileImageUrl: '',
      candidateRole: 'DEPUTADO ESTADUAL',
      city: 'São Paulo',
      stateCode: 'SP'
    },
    {
      firstName: 'Carlos',
      lastName: 'Augusto',
      candidateNumber: '55431',
      profileImageUrl: '',
      candidateRole: 'VEREADOR',
      city: 'Rio de Janeiro',
      stateCode: 'RJ'
    }
  ]

  const groupedByRole = candidates.reduce((acc, candidate) => {
    const role = candidate.candidateRole
    if (!acc[role]) {
      acc[role] = []
    }
    acc[role].push(candidate)
    return acc
  }, {} as Record<string, typeof candidates>)

  return (
    <main>
      <section className="font-[Montserrat] flex items-center text-left flex-col py-[80px] px-[120px] mb-[10px]">
        <div>
          <h1 className="font-bold text-[38px]">Nossos Representantes do Futuro</h1>
          <p className="text-[14px]">O Partido da Inovação e Progresso (PIP) tem orgulho de apresentar seus candidatos em todo o Brasil. Com uma visão focada no desenvolvimento sustentável, na inovação e no bem-estar social, nossos candidatos estão prontos para liderar e transformar suas comunidades, estados e o país. Conheça os homens e mulheres que representarão o PIP nas próximas eleições e estarão na linha de frente para implementar as mudanças que o Brasil precisa.</p>
        </div>
      </section>
      {Object.keys(groupedByRole).map(role => (
        <section className="font-[Montserrat] text-left flex flex-col
        px-[120px] mb-[130px]" key={role}>
          <h1 className="text-[38px] mb-[49px]">CANDIDATO <span className="font-bold">A {role}</span></h1>
          <ul className="flex flex-wrap gap-[30px]">
            {groupedByRole[role].map(candidate => (
              <li className="flex w-[344px] h-[121px] shadow-md rounded-[10px]" key={candidate.candidateNumber}>
                <img className="w-[118px] h-[121px] bg-sky-200 rounded-[10px]" src="./paola-silva.jpg" alt="paola"></img>
                <div className="px-[20px] py-[15px] flex flex-col justify-between">
                  <div className="text-[18px] mb-[10px]">
                    <p>{candidate.firstName.toUpperCase()}</p>
                    <p className="font-bold mt-[-7px]">{candidate.lastName.toUpperCase()}</p>
                  </div>
                  <div>
                    <p className="font-bold text-[24px] text-[#0000FF]/70">{candidate.candidateNumber}</p>
                    <p className="text-[10px] mt-[-7px] font-light">{candidate.city}/{candidate.stateCode}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  )
}