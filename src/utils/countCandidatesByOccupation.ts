export function countCandidatesByOccupation(candidates: Candidate[]) {
  const occupationCounts = candidates.reduce((acc, candidate) => {
    const occupation = candidate.occupation
    acc[occupation] = (acc[occupation] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const formattedOutput = Object.entries(occupationCounts)
    .map(([occupation, count]) => `${count} ${occupation}`)
    .join(', ')

  return formattedOutput
}
