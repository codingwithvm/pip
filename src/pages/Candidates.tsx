import { Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react"
import { useCandidate } from "../hooks/CandidateProvider"
import { useState } from "react"

export function Candidates() {
  const { candidates, incrementViews } = useCandidate()
  const [isOpen, setIsOpen] = useState(false)

  const groupedByRole = candidates.reduce((acc, candidate) => {
    const role = candidate.occupation
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
              <li
                key={candidate.number}
                className="flex w-[344px] h-[121px] shadow-md rounded-[10px]"
                onClick={() => {
                  incrementViews(candidate.id, candidate.views || 0)
                  setIsOpen(true)
                }}
              >
                <img className="w-[118px] h-[121px] bg-sky-200 rounded-[10px]" src={candidate.photo} alt={candidate.firstName}></img>
                <div className="px-[20px] py-[15px] flex flex-col justify-between">
                  <div className="text-[18px] mb-[10px]">
                    <p>{candidate.firstName.toUpperCase()}</p>
                    <p className="font-bold mt-[-7px]">{candidate.lastName.toUpperCase()}</p>
                  </div>
                  <div>
                    <p className="font-bold text-[24px] text-[#0000FF]/70">{candidate.number}</p>
                    <p className="text-[10px] mt-[-7px] font-light">{candidate.state}/{candidate.uf}</p>
                  </div>

                  <Dialog
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                    transition
                    className="fixed inset-0 flex items-center justify-center bg-black/30 p-4 transition duration-300 ease-out data-[closed]:opacity-0"
                  >
                    <DialogBackdrop className="fixed inset-0 bg-black/30" />
                    <div className="fixed inset-0 flex items-center justify-center p-4">
                      <DialogPanel className="bg-white rounded-[30px] shadow-md p-8 space-y-6 max-w-md w-full">
                        <div className="flex items-center gap-4">
                          <img
                            src={candidate.photo}
                            alt={candidate.firstName}
                            className="w-[60px] h-[60px] rounded-full bg-sky-200"
                          />
                          <div className="flex flex-col">
                            <DialogTitle className="font-bold text-[20px]">Carlos Alberto</DialogTitle>
                            <Description className="text-[14px] text-blue-600">{candidate.number}</Description>
                          </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                          <p className="text-[16px] font-medium">Detalhes do Candidato:</p>
                          <ul className="text-[14px] text-gray-700 list-disc pl-5">
                            <li><strong>Ocupação:</strong> {candidate.occupation}</li>
                            <li><strong>Número:</strong> {candidate.number}</li>
                            <li><strong>Estado:</strong> {candidate.state} / {candidate.uf}</li>
                            <li><strong>Visualizações:</strong> {candidate.views}</li>
                            <li><strong>Propostas:</strong> {candidate.proposals}</li>
                          </ul>
                        </div>
                        <button
                          onClick={() => setIsOpen(false)}
                          className="bg-blue-600 text-white px-4 py-2 rounded-[10px] hover:bg-blue-700 transition"
                        >
                          Fechar
                        </button>
                      </DialogPanel>
                    </div>
                  </Dialog>

                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main >
  )
}