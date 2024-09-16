declare type InfoCardProps = {
  percentage: string
  description: string
}

declare type StatsCardProps = {
  value: string
  label: string
  bgColor: string
}

declare type CandidateCardProps = {
  imageSrc: string
  name: string
  slogan: string
  voteNumber: string
  backgroundColor: string
  position?: string
}

declare type CircleBgProps = {
  position: string 
  opacity?: string
}

declare type BannerMainLogoProps = {
  size?: {
    width: number
    height?: number | string
  }
}