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
    id: number
    name: string
    slug: string
  }
  gender: 'male' | 'female'
  image: string
  name: string
  race: {
    id: number
    name: string
    slug: string
  }
  rank: number
  realm: {
    id: number
    name: string
  }
  spec: {
    id: number
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
