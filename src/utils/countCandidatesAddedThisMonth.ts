export function countCandidatesAddedThisMonth(candidates: Candidate[]): number {
	const currentDate = new Date()
	const currentMonth = currentDate.getMonth()
	const currentYear = currentDate.getFullYear() 

	// Filtra candidatos adicionados no mês e ano atual
	const candidatesThisMonth = candidates.filter(candidate => {
		const addedAtDate = new Date(candidate.addedAt)
		return (
			addedAtDate.getMonth() === currentMonth &&
			addedAtDate.getFullYear() === currentYear
		)
	})

	return candidatesThisMonth.length
}
