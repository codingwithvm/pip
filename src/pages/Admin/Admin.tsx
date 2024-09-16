import { AdminDashboardCard } from "../../components/admin/dashboard/AdminDashboardCard";
import { AdminWrapper } from "../../components/admin/layout/AdminWrapper";

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
    <AdminWrapper>
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
    </AdminWrapper>
  )
}