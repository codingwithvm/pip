export function CandidateCard({ imageSrc, name, slogan, voteNumber, backgroundColor, position }: CandidateCardProps) {
  return (
    <figure className={`flex w-[514px] h-[294px] ${position} ${backgroundColor} rounded-[40px] text-left`}>
      <img className="rounded-[40px]" src={imageSrc} alt={name} />
      <figcaption className="px-6 py-4 flex flex-col justify-between text-white">
        <div className="pt-2">
          <h1 className="font-bold text-[24px]">{name.split(' ')[0]}</h1>
          <h2 className="font-bold text-[32px] mt-[-7px]">{name.split(' ')[1]}</h2>
        </div>
        <p className="font-bold text-[14px]">{slogan}</p>
        <div className="flex flex-col">
          <span className="font-medium text-[28px]">VOTE</span>
          <span className="font-bold text-[42px] mt-[-14px]">{voteNumber}</span>
        </div>
      </figcaption>
    </figure>
  )
}