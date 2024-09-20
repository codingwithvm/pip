declare type InfoCardProps = {
  percentage: string
  description: string
}

declare type StatsCardProps = {
  value: string
  label: string
  bgColor: string
}

declare type CandidateCardProps = {
  imageSrc: string
  name: string
  slogan: string
  voteNumber: string
  backgroundColor: string
  position?: string
}

declare type CircleBgProps = {
  position: string 
  opacity?: string
}

declare type BannerMainLogoProps = {
  size?: {
    width: number
    height?: number | string
  }
}

declare type Candidate = {
  id?: string
  firstName: string
  lastName: string
  number: string
  state: string
  uf: string
  occupation: string
  voteIntention?: number
  photo: string
}

declare type FormValues = {
  firstName: string
  lastName: string
  candidateNumber: string
  city: string
  stateCode: string
  candidateRole: string
  proposals: string
  profileImageUrl: string
}

declare type CandidateContextProps = {
  candidates: Candidate[]
  lastCandidate: Candidate
  loadCandidates: () => Promise<void>
  saveCandidate: (payload: Candidate) => Promise<void>
  updateCandidate: (id: string, candidate: Candidate) => Promise<void>
}

declare type CandidateProviderProps = {
  children: ReactNode
}