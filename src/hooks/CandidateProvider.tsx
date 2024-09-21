import { createContext, useEffect, useState, useContext } from "react"
import { api } from "../utils/api"

const CandidateContext = createContext({} as CandidateContextProps)

const CandidateProvider = ({ children }: CandidateProviderProps) => {
  const [candidates, setCandidates] = useState([])
  const [lastCandidate, setLastCandidate] = useState<Candidate>({
    firstName: "",
    lastName: "",
    number: "",
    photo: "",
    occupation: "",
    state: "",
    proposals: "",
    uf: "",
    addedAt: new Date(""),
    views: 0
  })

  useEffect(() => {
    loadCandidates()
  }, [])

  const loadCandidates = async () => {
    const response = await api.get('candidates')
    const candidatesApi = response.data
    setLastCandidate(candidatesApi[candidatesApi.length - 1])

    setCandidates(candidatesApi)
  }

  const saveCandidate = async (payload: Candidate) => {
    await api.post('candidates', payload)
    loadCandidates()
  }

  const updateCandidate = async (id: string, candidate: Candidate) => {
    try {
      // Endpoint para atualizar o candidato específico
      const response = await api.put(`candidates/${id}`, candidate)

      console.log("Candidate updated successfully:", response.data)
    } catch (error) {
      console.error("Error updating the candidate:", error)
    }
  }

  const deleteCandidate = async (id: string) => {
    try {
      // Endpoint para atualizar o candidato específico
      const response = await api.delete(`candidates/${id}`)

      console.log("Candidate deleted successfully:", response.data)
    } catch (error) {
      console.error("Error deleting the candidate:", error)
    }
  }

  const incrementViews = async (id: string | undefined, currentViews: number) => {
    try {
      await api.patch(`candidates/${id}`, {
        views: currentViews + 1,
      })

      loadCandidates()
    } catch (error) {
      console.error("Error updating candidate views:", error)
    }
  }

  const value: CandidateContextProps = {
    candidates,
    lastCandidate,
    loadCandidates,
    saveCandidate,
    deleteCandidate,
    updateCandidate,
    incrementViews
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