export type Region = 'eu'

export type Guild = {
  id: number
  name: string
  realm: string
  faction: string
  region: Region
}

export type Member = {
  id: number
  name: string
  image: string
  race: PlayableRace
  class: PlayableClass
  spec: PlayableSpec
  rank: number
}

export type PlayableRace = {
  id: number
  name: string
}

export type PlayableClass = {
  id: number
  name: string
  image: string
}

export type PlayableSpec = {
  id: number
  name: string
  image: string
  role: string
}

export type Raid = {
  slug: string
  name: string
  bosses: Array<Boss>
}

export type Boss = {
  slug: string
  name: string
  image: string
  normal: boolean
  heroic: boolean
  mythic: boolean
}
