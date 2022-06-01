import { RaidDifficulty, Region } from './index'

export type Raids = {
  raids: Array<{
    name: string
    slug: string
    starts: Record<Lowercase<Region>, string>
    encounters: Array<{
      name: string
      slug: string
    }>
  }>
}

export type GuildRoster = {
  guildRoster: {
    raid: {
      name: string
      slug: string
      encounters: Array<{
        iconUrl: string
        name: string
        slug: string
      }>
    }
    roster: Array<{
      rank: number
      character: {
        name: string
        thumbnail: string
        class: {
          name: string
          slug: string
        }
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
      }
    }>
  }
}

export type GuildDetails = {
  guildDetails: {
    raidProgress: Array<{
      raid: string
      encountersDefeated: Record<
        RaidDifficulty,
        Array<{
          slug: string
        }>
      >
    }>
  }
}
