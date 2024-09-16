import { Logo } from "../assets/Logo"
import { Menu } from "./Menu"

export function Header() {
  return (
    <header className="p-6 flex items-center justify-between font-[Montserrat] font-medium">
      <Logo />
      <Menu />
      <button className="bg-[#242323] p-4 rounded-full w-[171px] text-[#fff]">INICIAR</button>
    </header>
  )
}