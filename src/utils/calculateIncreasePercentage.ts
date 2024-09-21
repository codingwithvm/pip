export function calculateIncreasePercentage(candidates: Candidate[]) {
  const now = new Date()
  const oneDayAgo = new Date(now)
  oneDayAgo.setDate(now.getDate() - 1)

  const addedLastDay = candidates.filter(candidate => {
    const addedAt = new Date(candidate.addedAt)
    return addedAt >= oneDayAgo && addedAt <= now
  })

  const totalCandidates = candidates.length
  const addedCount = addedLastDay.length

  if (totalCandidates === 0) return 0

  const increasePercentage = (addedCount / totalCandidates) * 100

  return parseFloat(increasePercentage.toFixed(2))
}