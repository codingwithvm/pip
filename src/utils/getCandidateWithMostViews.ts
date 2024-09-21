export function getCandidateWithMostViews(candidates: Candidate[]) {
  if (candidates.length === 0) {
    return null
  }

  const candidate = candidates.reduce((prev, current) => {
    return (prev.views > current.views) ? prev : current
  })

  return candidate
}

export function calculateViewPercentage(topCandidate: Candidate | null, candidates: Candidate[]): string {
  if (!topCandidate || candidates.length === 0) return "N/A"

  const totalViews = candidates.reduce((sum, candidate) => sum + (candidate.views || 0), 0)
  
  if (totalViews === 0) return "N/A"

  const percentage = ((topCandidate.views || 0) / totalViews) * 100
  return percentage.toFixed(2) + '%'
}
