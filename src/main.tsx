import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom'

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

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/sobre',
        element: <About />
      },
      {
        path: '/candidatos',
        element: <Candidates />
      },
      {
        path: '/projetos',
        element: <Projects />
      },
      {
        path: '/contato',
        element: <Contact />
      }
    ]
  },
  {
    path: '/admin',
    element: <AdminRoot />,
    children: [
      {
        path: '/admin',
        element: <Admin />
      },
      {
        path: 'candidatos',
        element: <AdminCandidates />
      },
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
