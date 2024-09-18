const TextCell = ({ text, fontWeight }: { text: string, fontWeight: 'light' | 'medium' }) => (
  <td className={`text-[14px] font-${fontWeight}`}>{text.toUpperCase()}</td>
)

export function AdminCandidateRow({ candidate }: { candidate: Candidate }) {
  return (
    <tr className="py-[20px]">
      <td className="flex items-center justify-center py-[15px]">
        <img className="w-[50px] h-[50px] rounded-full" src={candidate.photo} alt={candidate.firstName} />
      </td>
      <td>
        <div className="flex flex-col items-center text-[14px]">
          <TextCell text={candidate.firstName} fontWeight="light"/>
          <TextCell text={candidate.lastName} fontWeight="medium"/>
        </div>
      </td>
      <TextCell text={candidate.number} fontWeight="medium"/>
      <TextCell text={candidate.state} fontWeight="light"/>
      <TextCell text={candidate.uf} fontWeight="light"/>
      <TextCell text={candidate.occupation} fontWeight="medium"/>
      <td className="w-[200px]">
        <div className="w-full flex flex-col justify-center items-center">
          <span className="w-[100px] text-[14px] font-light">{candidate.voteIntention}%</span>
          <div className="w-[150px] h-[10px] bg-[#4CAF50]/20 rounded-[10px]">
            <div
              className="h-[10px] bg-[#4CAF50]/70 rounded-[10px]"
              style={{ width: `${candidate.voteIntention}%` }}
            ></div>
          </div>
        </div>
      </td>
    </tr>
  )
}