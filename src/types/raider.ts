import type { RaidDifficulty, Region } from './index'

export interface Raids {
  raids: Array<{
    encounters: Array<{
      name: string
      slug: string
    }>
    icon: string
    name: string
    slug: string
    starts: Record<Lowercase<Region>, string>
  }>
}

export interface GuildRoster {
  guildRoster: {
    raid: {
      encounters: Array<{
        iconUrl: string
        name: string
        slug: string
      }>
      name: string
      slug: string
    }
    roster: Array<{
      character: {
        class: {
          id: number
          name: string
          slug: string
        }
        name: string
        gender: 'male' | 'female'
        race: {
          id: number
          name: string
          slug: string
        }
        realm: {
          id: number
          name: string
          slug: string
        }
        spec: {
          id: number
          is_melee: boolean
          name: string
          role: string
          slug: string
        }
        thumbnail: string
      }
      rank: number
    }>
  }
}

export interface GuildDetails {
  guildDetails: {
    raidProgress: Array<{
      encountersDefeated: Record<
        RaidDifficulty,
        Array<{
          slug: string
        }>
      >
      raid: string
    }>
  }
}
