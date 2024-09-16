import { AdminCandidateRow } from "./AdminCandidateRow";

export function AdminDashboardCandidates() {
  const candidates: Candidate[] = [
    {
      firstName: "Alice",
      lastName: "Garcia",
      number: "40334",
      state: "São Paulo",
      uf: "SP",
      occupation: "PREFEITO",
      voteIntention: 45,
      photo: "../paola-silva.jpg"
    }
  ]

  return (
    <div className="border bg-white rounded-tl-[30px] rounded-tr-[30px]">
      <h1 className="px-[40px] py-[20px]">
        Lista de <strong>Candidatos</strong>
      </h1>
      <table className="w-full">
        <thead className="bg-[#E1E1E1]/30 border-b h-[40px]">
          <tr className="text-[12px] text-[#000]/40">
            <th className="w-[100px] font-medium">Foto</th>
            <th className="font-medium">Nome</th>
            <th className="font-medium">Número</th>
            <th className="font-medium">Estado</th>
            <th className="font-medium">UF</th>
            <th className="font-medium">Ocupação</th>
            <th className="font-medium">Intenção de Votos</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {candidates.map((candidate, index) => (
            <AdminCandidateRow key={index} candidate={candidate} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
