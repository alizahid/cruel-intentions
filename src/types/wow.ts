export type Expansion = {
  id: number
  name: string
  raids: Array<{
    bosses: Array<{
      image: string
      name: string
      slug: string
    }>
    name: string
    slug: string
  }>
}

export type Member = {
  class: {
    name: string
    slug: string
  }
  image: string
  name: string
  race: {
    name: string
    slug: string
  }
  rank: number
  spec: {
    melee: boolean
    name: string
    role: string
  }
}

export type Progress = {
  boss: string
  heroic: boolean
  mythic: boolean
  normal: boolean
  raid: string
}
