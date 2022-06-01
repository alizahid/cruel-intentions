import kebabCase from 'lodash/kebabCase'
import orderBy from 'lodash/orderBy'
import sortBy from 'lodash/sortBy'

import { Region } from '../types'
import { GuildDetails, GuildRoster, Raids } from '../types/raider'
import { Expansion, Member, Progress } from '../types/wow'
import { GUILD, MAX_RANK, REALM, REGION } from './config'

export const fetchExpansions = async (): Promise<Array<Expansion>> => {
  const expansions = [
    {
      id: 8,
      name: 'Shadowlands'
    }
    // {
    //   id: 7,
    //   name: 'Battle for Azeroth'
    // },
    // {
    //   id: 6,
    //   name: 'Legion'
    // }
  ]

  const raids = await Promise.all(
    expansions.map(async ({ id, name }) => {
      const response = await fetch(
        `https://raider.io/api/v1/raiding/static-data?expansion_id=${id}`
      )

      const json: Raids = await response.json()

      return {
        id,
        name,
        raids: orderBy(
          json.raids,
          (raid) => raid.starts[REGION.toLowerCase() as Lowercase<Region>],
          'desc'
        ).map((raid) => ({
          bosses: raid.encounters.map(({ name, slug }) => ({
            name,
            slug
          })),
          name: raid.name,
          slug: raid.slug
        }))
      }
    })
  )

  return raids
}

export const fetchRoster = async (): Promise<Array<Member>> => {
  const response = await fetch(
    `https://raider.io/api/guilds/roster?region=${REGION.toLowerCase()}&realm=${kebabCase(
      REALM
    )}&guild=${encodeURIComponent(GUILD)}`
  )

  const json: GuildRoster = await response.json()

  return sortBy(
    json.guildRoster.roster
      .filter(({ rank }) => rank <= MAX_RANK)
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

export const fetchProgress = async (
  expansions: Array<Expansion>
): Promise<Array<Progress>> => {
  const response = await fetch(
    `https://raider.io/api/guilds/details?region=${REGION.toLowerCase()}&realm=${kebabCase(
      REALM
    )}&guild=${encodeURIComponent(GUILD)}`
  )

  const json: GuildDetails = await response.json()

  return expansions
    .flatMap(({ raids }) => raids)
    .flatMap((raid) => {
      const data = json.guildDetails.raidProgress.find(
        (item) => item.raid === raid.slug
      )

      return raid.bosses.map(({ slug }) => ({
        boss: slug,
        heroic: !!data?.encountersDefeated.heroic.find(
          (difficulty) => difficulty.slug === slug
        ),
        mythic: !!data?.encountersDefeated.mythic.find(
          (difficulty) => difficulty.slug === slug
        ),
        normal: !!data?.encountersDefeated.normal.find(
          (difficulty) => difficulty.slug === slug
        ),
        raid: raid.slug
      }))
    })
}
