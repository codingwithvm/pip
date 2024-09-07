import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom'

import { Root } from './components/Root'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Candidates } from './pages/Candidates'
import { Projects } from './pages/Projects'
import { Contact } from './pages/Contact'

import './index.css'

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
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
