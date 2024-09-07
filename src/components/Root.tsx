import { Header } from "./Header"
import { Footer } from "./Footer"
import { Outlet } from "react-router-dom"

export function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}