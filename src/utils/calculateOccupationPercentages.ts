export function calculateOccupationPercentages(candidates: Candidate[]) {
  function countCandidatesByOccupation(candidates: Candidate[]) {
    return candidates.reduce((acc, candidate) => {
      const occupation = candidate.occupation
      acc[occupation] = (acc[occupation] || 0) + 1
      return acc
    }, {} as Record<string, number>)
  }

  function calculateHighestOccupationPercentage(occupationCounts: Record<string, number>) {
    const totalCandidates = Object.values(occupationCounts).reduce((sum, count) => sum + count, 0);
    const [highestOccupation, highestCount] = Object.entries(occupationCounts).reduce(
      (max, entry) => (entry[1] > max[1] ? entry : max),
      ['', 0]
    );

    const percentage = ((highestCount / totalCandidates) * 100).toFixed(2);
    return `${highestCount} ${highestOccupation} (${percentage}%)`;
  }

  const occupationCounts = countCandidatesByOccupation(candidates)
  const formattedCounts = calculateHighestOccupationPercentage(occupationCounts)
  return formattedCounts
}
