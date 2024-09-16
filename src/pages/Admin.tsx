import { AdminDashboardCard } from "../components/AdminDashboardCard";

export function Admin() {
  const cardContent = [
    {
      icon: "card-user-icon.png",
      title: "Candidatos",
      subtitle: "Registrado",
      firstItem: "60",
      middleItem: "Candidatos Registrados",
      lastItem: "45% de aumento",
      buttonText: "VER CANDIDATOS"
    },
    {
      icon: "card-graphic-icon.png",
      title: "Candidatos por",
      subtitle: "Categoria",
      firstItem: "20 Deputados",
      middleItem: "25 Senadores...",
      lastItem: "35% de crescimento nas candidaturas",
      buttonText: "VER POR CATEGORIA"
    },
    {
      icon: "card-clock-icon.png",
      title: "últimos",
      subtitle: "Candidatos",
      firstItem: "5",
      middleItem: "Novos Candidatos esse mês",
      lastItem: "João Silva - 12 de Setembro",
      buttonText: "VER DETALHES"
    },
    {
      icon: "card-people-icon.png",
      title: "Candidatos",
      subtitle: "Populares",
      firstItem: "Maria Souza - ",
      middleItem: "1200 Visualizações",
      lastItem: "30% de Aumento",
      buttonText: "VER DETALHES"
    },
    {
      icon: "card-message-icon.png",
      title: "Mensagens",
      subtitle: "Recebidas",
      firstItem: "10",
      middleItem: "Mensagens não lidas",
      lastItem: "20% mais interações",
      buttonText: "VER MENSAGENS"
    },
  ]

  return (
    <section className="flex flex-col gap-[100px] w-full h-full rounded-tl-[40px] bg-[#D9D9D9]/20 py-[40px] px-[40px] font-[Montserrat]">
      <div className="flex flex-col gap-[10px]">
        <div className="flex flex-col gap-[3px]">
          <h1 className="font-[Kodchasan] font-medium text-[20px]">Seja Bem Vindo</h1>
          <p className="italic text-[10px]">ao Painel Administrativo</p>
        </div>
        <p className="font-light text-[14px]">
          Gerencie conteúdo, usuários, e muito mais de forma simples e eficiente. Utilize as ferramentas disponíveis para manter tudo atualizado e otimizado, garantindo a melhor experiência para os seus visitantes.
        </p>
      </div>
      <div className="flex flex-wrap gap-[30px]">
        {
          cardContent.map(({ icon, title, subtitle, firstItem, middleItem, lastItem, buttonText }, index) => (
            <div key={index}>
              <AdminDashboardCard
                icon={icon}
                title={title}
                subtitle={subtitle}
                firstItem={firstItem}
                middleItem={middleItem}
                lastItem={lastItem}
                buttonText={buttonText}
              />
            </div>
          ))
        }
      </div>
    </section>
  )
}