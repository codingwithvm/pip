import { Description, Dialog, DialogPanel, DialogBackdrop, DialogTitle } from "@headlessui/react"
import { useState } from "react"
import { FormUpdateCandidate } from "../forms/FormUpdateCandidate"

const TextCell = ({ text, fontWeight }: { text: string, fontWeight: 'light' | 'medium' }) => (
  <td className={`text-[14px] font-${fontWeight}`}>{text.toUpperCase()}</td>
)

export function AdminCandidateRow({ candidate }: { candidate: Candidate }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <tr id={candidate.id} className="py-[20px] cursor-pointer hover:bg-[#E1E1E1]/40 transition" onClick={() => setIsOpen(true)}>
      <td className="flex items-center justify-center py-[15px]">
        <img className="w-[50px] h-[50px] rounded-full" src={candidate.photo} alt={candidate.firstName} />
      </td>
      <td>
        <div className="flex flex-col items-center text-[14px]">
          <div className="text-[14px] font-light">{candidate.firstName.toUpperCase()}</div>
          <div className="text-[14px] font-medium">{candidate.lastName.toUpperCase()}</div>
        </div>
      </td>
      <TextCell text={candidate.number} fontWeight="medium" />
      <TextCell text={candidate.state} fontWeight="light" />
      <TextCell text={candidate.uf} fontWeight="light" />
      <TextCell text={candidate.occupation} fontWeight="medium" />
      <td className="w-[200px]">
        <div className="w-full flex flex-col justify-center items-center">
          <p className="w-[100px] text-[14px] font-light">{candidate.voteIntention}%</p>
          <div className="w-[150px] h-[10px] bg-[#4CAF50]/20 rounded-[10px]">
            <div
              className="h-[10px] bg-[#4CAF50]/70 rounded-[10px]"
              style={{ width: `${candidate.voteIntention}%` }}
            ></div>
          </div>
          <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            transition
            className="fixed inset-0 flex w-screen items-center justify-center bg-black/30 p-4 transition duration-300 ease-out data-[closed]:opacity-0"
          >
            <DialogBackdrop className="fixed inset-0 bg-black/30" />
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
              <DialogPanel className="space-y-4 border rounded-[30px] bg-white p-12">
                <DialogTitle className="font-bold">{candidate.firstName.toUpperCase()} {candidate.lastName.toUpperCase()}</DialogTitle>
                <Description>Alterar informações do candidato</Description>
                <FormUpdateCandidate
                  candidateId={candidate.id || ""}
                  firstName={candidate.firstName}
                  lastName={candidate.lastName}
                  candidateNumber={candidate.number}
                  city={candidate.state}
                  stateCode={candidate.uf}
                  candidateRole={candidate.occupation}
                  proposals={candidate.proposals}
                  profileImageUrl={candidate.photo}
                  onClose={() => setIsOpen(false)} 
                />
              </DialogPanel>
            </div>
          </Dialog>
        </div>
      </td>
    </tr>
  )
}
