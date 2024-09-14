export function CircleSvg({ position, opacity }: CircleBgProps) {
  return (
    <div className={position}>
      <svg width="533" height="533" viewBox="0 0 533 533" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="266.5" cy="266.5" r="266" stroke="#0000FF" strokeOpacity={opacity ?? 0.1} />
      </svg>
    </div>
  )
}
