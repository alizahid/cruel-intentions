import axios from 'axios'
import kebabCase from 'lodash/kebabCase'

import { Raid, Region } from '../types'

class Raider {
  async fetch(region: Region, realm: string, guild: string): Promise<Raid> {
    const {
      data: { guildRoster }
    } = await axios.get<{
      guildRoster: {
        raid: {
          slug: string
          name: string
          encounters: Array<{
            slug: string
            name: string
            iconUrl: string
          }>
        }
      }
    }>(
      `https://raider.io/api/guilds/roster?region=${region}&realm=${kebabCase(
        realm
      )}&guild=${guild}`
    )

    const {
      data: { guildDetails }
    } = await axios.get<{
      guildDetails: {
        raidProgress: Array<{
          raid: string
          encountersDefeated: Record<
            'normal' | 'heroic' | 'mythic',
            Array<{
              slug: string
            }>
          >
        }>
      }
    }>(
      `https://raider.io/api/guilds/details?region=${region}&realm=${kebabCase(
        realm
      )}&guild=${guild}`
    )

    return {
      bosses: guildRoster.raid.encounters.map(({ iconUrl, name, slug }) => {
        const { encountersDefeated } = guildDetails.raidProgress.find(
          ({ raid }) => raid === guildRoster.raid.slug
        )!

        const normal = !!encountersDefeated.normal.find(
          (difficulty) => difficulty.slug === slug
        )
        const heroic = !!encountersDefeated.heroic.find(
          (difficulty) => difficulty.slug === slug
        )
        const mythic = !!encountersDefeated.mythic.find(
          (difficulty) => difficulty.slug === slug
        )

        return {
          heroic,
          image: `https://cdnassets.raider.io${iconUrl}`,
          mythic,
          name,
          normal,
          slug
        }
      }),
      name: guildRoster.raid.name,
      slug: guildRoster.raid.slug
    }
  }
}

export const raider = new Raider()
