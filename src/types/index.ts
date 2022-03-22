export type Options = {
  guild: string
  realm: string
  region: Region
  maxRank: number
}

export type Data = {
  guild: Guild
  roster: Array<Member>
  progress: Raid
}

export type Region = 'EU'

export type Guild = {
  id: number
  name: string
  realm: string
  faction: string
  region: Region
}

export type Member = {
  name: string
  image: string
  race: PlayerRace
  class: PlayerClass
  spec: PlayerSpec
  rank: number
}

export type PlayerRace = {
  slug: string
  name: string
}

export type PlayerClass = {
  slug: string
  name: string
}

export type PlayerSpec = {
  name: string
  role: string
  melee: boolean
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
