import { AdminDashboardCard } from "../../components/admin/dashboard/AdminDashboardCard";
import { AdminWrapper } from "../../components/admin/layout/AdminWrapper";
import { useCandidate } from "../../hooks/CandidateProvider";
import { calculateIncreasePercentage } from "../../utils/calculateIncreasePercentage";
import { calculateOccupationPercentages } from "../../utils/calculateOccupationPercentages";
import { countCandidatesAddedThisMonth } from "../../utils/countCandidatesAddedThisMonth";
import { countCandidatesByOccupation } from "../../utils/countCandidatesByOccupation";
import { formatDateToDayMonth } from "../../utils/formatDateToDayMonth";

export function Admin() {
  const { candidates, lastCandidate } = useCandidate()

  const cardContent = [
    {
      icon: "card-user-icon.png",
      title: "Candidatos",
      subtitle: "Registrado",
      firstItem: candidates.length,
      middleItem: "Candidatos Registrados",
      lastItem: `${calculateIncreasePercentage(candidates)}% de aumento`,
      buttonText: "VER CANDIDATOS"
    },
    {
      icon: "card-graphic-icon.png",
      title: "Candidatos por",
      subtitle: "Categoria",
      firstItem: countCandidatesByOccupation(candidates),
      lastItem: calculateOccupationPercentages(candidates),
      buttonText: "VER POR CATEGORIA"
    },
    {
      icon: "card-clock-icon.png",
      title: "últimos",
      subtitle: "Candidatos",
      firstItem: `${countCandidatesAddedThisMonth(candidates)} Novos Candidatos esse mês`,
      lastItem: `${lastCandidate.firstName.toLowerCase()} - ${formatDateToDayMonth(lastCandidate.addedAt)}`,
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