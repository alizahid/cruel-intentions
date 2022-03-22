import axios from 'axios'
import kebabCase from 'lodash/kebabCase'
import sortBy from 'lodash/sortBy'
import startCase from 'lodash/startCase'

import { Data, Options } from '../types'

class Raider {
  async fetch({ guild, maxRank, realm, region }: Options): Promise<Data> {
    const {
      data: { guildRoster }
    } = await axios.get<{
      guildRoster: {
        guild: {
          id: number
          name: string
          faction: string
        }
        raid: {
          slug: string
          name: string
          encounters: Array<{
            slug: string
            name: string
            iconUrl: string
          }>
        }
        roster: Array<{
          character: {
            name: string
            thumbnail: string
            race: {
              slug: string
              name: string
            }
            class: {
              slug: string
              name: string
            }
            spec: {
              slug: string
              name: string
              role: string
              is_melee: boolean
            }
          }
          rank: number
        }>
      }
    }>(
      `https://raider.io/api/guilds/roster?region=${region.toLowerCase()}&realm=${kebabCase(
        realm
      )}&guild=${encodeURIComponent(guild)}`
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
      `https://raider.io/api/guilds/details?region=${region.toLowerCase()}&realm=${kebabCase(
        realm
      )}&guild=${encodeURIComponent(guild)}`
    )

    return {
      guild: {
        faction: startCase(guildRoster.guild.faction),
        id: guildRoster.guild.id,
        name: guild,
        realm,
        region
      },
      progress: {
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
      },
      roster: sortBy(
        guildRoster.roster
          .filter(({ rank }) => rank <= maxRank)
          .map(({ character, rank }) => ({
            class: {
              name: character.class.name,
              slug: character.class.name
            },
            image: `https://render.worldofwarcraft.com/eu/character/${character.thumbnail.replace(
              'avatar',
              'inset'
            )}`,
            name: character.name,
            race: {
              name: character.race.name,
              slug: character.race.slug
            },
            rank,
            spec: {
              melee: character.spec.is_melee,
              name: character.spec.name,
              role: character.spec.role
            }
          })),
        ['rank', 'name']
      )
    }
  }
}

export const raider = new Raider()
