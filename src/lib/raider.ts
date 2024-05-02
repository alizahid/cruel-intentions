import { kebabCase, orderBy, sortBy } from 'lodash'

import { type Region } from '~/types'
import { type GuildDetails, type GuildRoster, type Raids } from '~/types/raider'
import { type Expansion, type Member, type Progress } from '~/types/wow'

import { GUILD, MAX_RANK, REALM, REGION } from './config'
import { getBossIcon } from './icons'

export const fetchExpansions = async (): Promise<Array<Expansion>> => {
  const expansions = [
    {
      id: 9,
      name: 'Dragonflight',
    },
  ]

  const raids = await Promise.all(
    expansions.map(async ({ id, name }) => {
      const response = await fetch(
        `https://raider.io/api/v1/raiding/static-data?expansion_id=${String(id)}`,
      )

      const json = (await response.json()) as Raids

      return {
        id,
        name,
        raids: orderBy(
          json.raids,
          (raid) => raid.starts[REGION.toLowerCase() as Lowercase<Region>],
          'desc',
        ).map((raid) => ({
          bosses: raid.encounters.map((boss) => ({
            image: getBossIcon(boss.slug),
            name: boss.name.startsWith('Awakened')
              ? boss.name.slice(9)
              : boss.name,
            slug: boss.slug,
          })),
          name: raid.name,
          slug: raid.slug,
        })),
      }
    }),
  )

  return raids
}

export const fetchRoster = async (): Promise<Array<Member>> => {
  const response = await fetch(
    `https://raider.io/api/guilds/roster?region=${REGION.toLowerCase()}&realm=${kebabCase(
      REALM,
    )}&guild=${encodeURIComponent(GUILD)}`,
  )

  const json = (await response.json()) as GuildRoster

  return sortBy(
    json.guildRoster.roster
      .filter(({ rank }) => rank <= MAX_RANK)
      .map(({ character, rank }) => ({
        class: {
          name: character.class.name,
          slug: character.class.name,
        },
        image: `https://render.worldofwarcraft.com/eu/character/${character.thumbnail.replace(
          'avatar',
          'inset',
        )}`,
        name: character.name,
        race: {
          name: character.race.name,
          slug: character.race.slug,
        },
        rank,
        spec: {
          melee: character.spec.is_melee,
          name: character.spec.name,
          role: character.spec.role,
        },
      })),
    ['rank', 'name'],
  )
}

export const fetchProgress = async (
  expansions: Array<Expansion>,
): Promise<Array<Progress>> => {
  const response = await fetch(
    `https://raider.io/api/guilds/details?region=${REGION.toLowerCase()}&realm=${kebabCase(
      REALM,
    )}&guild=${encodeURIComponent(GUILD)}`,
  )

  const json = (await response.json()) as GuildDetails

  return expansions
    .flatMap(({ raids }) => raids)
    .flatMap((raid) => {
      const data = json.guildDetails.raidProgress.find(
        (item) => item.raid === raid.slug,
      )

      return raid.bosses.map(({ slug }) => ({
        boss: slug,
        heroic: Boolean(
          data?.encountersDefeated.heroic.find(
            (difficulty) => difficulty.slug === slug,
          ),
        ),
        mythic: Boolean(
          data?.encountersDefeated.mythic.find(
            (difficulty) => difficulty.slug === slug,
          ),
        ),
        normal: Boolean(
          data?.encountersDefeated.normal.find(
            (difficulty) => difficulty.slug === slug,
          ),
        ),
        raid: raid.slug,
      }))
    })
}
