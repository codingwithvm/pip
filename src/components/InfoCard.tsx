export function InfoCard({ percentage, description }: InfoCardProps) {
  return (
    <article className="w-[260px] h-[189px] p-8 bg-white shadow-2xl rounded-[40px]">
      <h1 className="text-[14px] font-medium">
        Apoio Popular <br />
        <span className="font-bold">Crescente</span>
      </h1>
      <p className="text-[14px] mt-[7px]">{description}</p>
      <div className="text-center font-bold">
        <span>{percentage}</span>
        <div className="w-[157px] h-[16px] rounded-[12px] bg-[#4CAF50]/70"></div>
      </div>
    </article>
  )
}
