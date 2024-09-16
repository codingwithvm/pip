import { Logo } from "../assets/Logo";
import { FooterMenu } from "./Menu";
import { SocialBar } from "../assets/SocialBar";

export function Footer() {
  return (
    <footer className="px-14 py-4 font-[Montserrat]">
      <div className="flex justify-between">
        <div className="flex flex-col justify-between">
          <Logo />
          <SocialBar />
        </div>
        <FooterMenu />
      </div>
    </footer>
  )
}