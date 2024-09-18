import { Link } from "react-router-dom";

export function AdminSideMenu() {
  return (
    <aside className="flex flex-col w-[300px] h-full p-[40px] font-[Montserrat]">
      <ul className="flex flex-col gap-[40px] text-[18px] font-medium">
        <li className="flex items-center gap-[18px]">
          <img className="w-[20px] h-[20px]" src="../dashboard-side-menu-icon.png" alt="Dashboard" />
          <h1><Link to={'/admin'}>Dashboard</Link></h1>
        </li>
        <li>
          <div className="flex items-center gap-[18px]">
            <img className="w-[20px] h-[20px]" src="../list-side-menu-icon.png" alt="Candidatos" />
            <h1>Candidatos</h1>
          </div>
          <ul className="flex flex-col gap-[10px] items-center pl-[30px]">
            <li className="mt-[10px]">
              <div className="flex items-center gap-2">
                <div className="w-[3px] h-[3px] bg-black rounded-full"></div>
                <h1 className="text-[12px]"><Link to={'/admin/candidatos'}>Lista de Candidatos</Link></h1>
              </div>
              <p className="font-light text-[10px] pl-[10px]">Visualize e edite os candidatos registrados.</p>
            </li>
            <li className="mt-[10px]">
              <div className="flex items-center gap-2">
                <div className="w-[3px] h-[3px] bg-black rounded-full"></div>
                <h1 className="text-[12px]"><Link to={'/admin/adicionar-candidato'}>Adicionar Novo</Link></h1>
              </div>
              <p className="font-light text-[10px] pl-[10px]">Insira novos candidatos no banco de dados</p>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  )
}