export function AdminDashboardCard({ icon, title, subtitle, firstItem, middleItem, lastItem, buttonText }: { icon: string, title: string, subtitle: string, firstItem: any, middleItem?: any, lastItem: any, buttonText: string }) {
  return (
    <div className="flex flex-col w-[220px] h-[300px] justify-between bg-white rounded-[40px] px-[31px] pb-[20px]">
      <img className="w-[60px] mt-[-30px]" src={icon} alt="User Icon" />
      <div className="flex flex-col gap-[20px] h-[80%]">
        <div className="mt-[10px] text-[18px]">
          <h1 className="font-light">{title}</h1>
          <p className="font-semibold">{subtitle}</p>
        </div>
        <div className="flex flex-col gap-[10px]">
          <div className="flex items-center gap-[10px]">
            <img className="w-[20px] h-[20px]" src="card-result-icon.png" alt="Resultado" />
            <span className="text-[14px]">{firstItem} {middleItem}</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <img className="w-[20px] h-[20px]" src="card-graph-icon.png" alt="Gráfico" />
            <span className="text-[14px]">{lastItem}</span>
          </div>
        </div>
      </div>
      <button className="flex bg-[#0000FF]/70 p-[10px] rounded-[30px] text-white items-center justify-center text-[10px] font-semibold">{buttonText}</button>
    </div>
  )
}