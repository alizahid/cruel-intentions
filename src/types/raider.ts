import { type RaidDifficulty, type Region } from './index'

export type Raids = {
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

export type GuildRoster = {
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
          name: string
          slug: string
        }
        name: string
        race: {
          name: string
          slug: string
        }
        spec: {
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

export type GuildDetails = {
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
