import { createContext, useEffect, useState, useContext } from "react"
import { api } from "../utils/api"

const CandidateContext = createContext({} as CandidateContextProps)

const CandidateProvider = ({ children }: CandidateProviderProps) => {
  const [candidates, setCandidates] = useState([])

  useEffect(() => {
    console.log("carregando candidatos")
    loadCandidates()
  }, [])

  const loadCandidates = async () => {
    const response = await api.get('candidates')
    const candidatesApi = response.data

    setCandidates(candidatesApi)
    console.log(candidates)
  }

  const saveCandidate = async (payload: Candidate) => {
    await api.post('candidates', payload)

    loadCandidates()
  }

  const value: CandidateContextProps = {
    candidates,
    loadCandidates,
    saveCandidate
  }

  return (
    <CandidateContext.Provider value={value}>{children}</CandidateContext.Provider>
  )
}

const useCandidate = () => {
  const context = useContext(CandidateContext)

  if (!context) {
    throw new Error("useCandidate must be used within a CandidateProvidr")
  }

  return context
}

export { CandidateProvider, useCandidate }