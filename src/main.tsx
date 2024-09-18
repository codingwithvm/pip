import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Root } from './components/layout/Root'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Candidates } from './pages/Candidates'
import { Projects } from './pages/Projects'
import { Contact } from './pages/Contact'

import './index.css'
import { Admin } from './pages/Admin/Admin'
import { AdminCandidates } from './pages/Admin/AdminCandidates'
import { AdminRoot } from './components/admin/AdminRoot'
import { AdminAddCandidate } from './pages/Admin/AdminAddCandidate'
import { CandidateProvider } from './hooks/CandidateProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route 
            path='/candidatos' 
            element={
              <CandidateProvider>
                <Candidates></Candidates>
                </CandidateProvider>}
          />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/contato" element={<Contact />} />
        </Route>
        <Route path="/admin" element={<AdminRoot />}>
          <Route index element={<Admin />} />
          <Route path="candidatos" element={<AdminCandidates />} />
          <Route path="adicionar-candidato" element={<AdminAddCandidate />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>,
)
