import { Link } from "react-router-dom"

export function Menu() {
  const options = ["Início", "Sobre", "Candidatos", "Projetos", "Contato"]

  return (
    <ul className="flex gap-[60px] text-[16px]">
      {options.map((index, item) => (
        <li key={item} className="cursor-pointer hover:opacity-[80%] transition">
          {index === options[0] ? <Link to={'/'}>{index}</Link> : <Link to={`/${index}`}>{index}</Link>}
        </li>
      ))}
    </ul>
  )
}

export function FooterMenu() {
  const menus = [
    { title: "Sobre o PIP", list: ["Quem Somos", "Nossa História", "Missão e Valores", "Nossa Equipe"] },
    { title: "Propostas", list: ["Plano de Governo", "Educação", "Saúde", "Sustentabilidade"] },
    { title: "Envolva-se", list: ["Seja um Voluntário", "Doe para o PIP", "Participe dos Eventos", "Cadastre-se"] },
    { title: "Fique Conectado", list: ["Atualizações", "Blog", "Redes Sociais", "Contato"] },
  ]

  return (
    <div className="flex gap-[120px]">
      {menus.map((item, index) => (
        <div key={index} className="flex flex-col gap-[18px] text-[18px]">
          <h1 className="font-bold">{item.title}</h1>
          <ul className="flex flex-col gap-[18px] text-[14px]">
            {item.list.map((itemList, index) => (
              <li key={index} className="cursor-pointer hover:opacity-[80%] transition">{itemList}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}