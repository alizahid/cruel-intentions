export interface Expansion {
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

export interface Member {
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
  realm: number
  spec: {
    melee: boolean
    name: string
    role: string
  }
}

export interface Progress {
  boss: string
  heroic: boolean
  mythic: boolean
  normal: boolean
  raid: string
}
