export type Expansion = {
  id: number
  name: string
  raids: Array<{
    name: string
    slug: string
    bosses: Array<{
      name: string
      slug: string
    }>
  }>
}

export type Member = {
  image: string
  name: string
  rank: number
  class: {
    name: string
    slug: string
  }
  race: {
    name: string
    slug: string
  }
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
