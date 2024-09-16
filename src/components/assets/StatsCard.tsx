export function StatsCard({ value, label, bgColor }: StatsCardProps) {
  return (
    <div className={`flex flex-col items-center justify-center w-[187px] h-[97px] ${bgColor} font-semibold rounded-[20px]`}>
      <span className="text-[25px]">{value}</span>
      <span className="text-[12px] text-center">{label}</span>
    </div>
  )
}