import { BannerMainLogo } from "./BannerMainLogo";

export function AdminHeader() {
  return (
    <>
      <header className="flex items-center h-[80px] border">
        <div className="flex gap-[10px]">
          <BannerMainLogo size={{ width: 60, height: 'auto' }} />
          <div className="flex flex-col justify-center font-[Montserrat]">
            <h1 className="text-[14px]"><span className="font-semibold">PIP</span> - Partido da Inovação e Progresso</h1>
            <p className="text-[12px]">Painel <span className="font-semibold">Administrativo</span></p>
          </div>
        </div>
      </header>
    </>
  )
}