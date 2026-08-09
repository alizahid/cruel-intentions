import { kebabCase, orderBy, sortBy } from 'lodash'
import { create } from 'mutative'

import type { Region } from '~/types'
import type { GuildDetails, GuildRoster, Raids } from '~/types/raider'
import type { Expansion, Member, Progress } from '~/types/wow'

import { GUILD, MAX_RANK, REALM, REGION } from './config'
import { getBossIcon } from './icons'

export const fetchExpansions = async (): Promise<Expansion[]> => {
  const expansions = [
    {
      id: 11,
      name: 'Midnight',
    },
  ]

  const raids = await Promise.all(
    expansions.map(async ({ id, name }) => {
      const response = await fetch(
        `https://raider.io/api/v1/raiding/static-data?expansion_id=${String(id)}`
      )

      const json = (await response.json()) as Raids

      return {
        id,
        name,
        raids: orderBy(
          json.raids.filter((raid) => raid.slug !== 'blackrock-depths'),
          (raid) => raid.starts[REGION.toLowerCase() as Lowercase<Region>],
          'desc'
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
    })
  )

  return splitRaids(raids)
}

export const fetchRoster = async (): Promise<Member[]> => {
  const response = await fetch(
    `https://raider.io/api/guilds/roster?region=${REGION.toLowerCase()}&realm=${kebabCase(
      REALM
    )}&guild=${encodeURIComponent(GUILD)}`
  )

  const json = (await response.json()) as GuildRoster

  return sortBy(
    json.guildRoster.roster
      .filter(({ rank }) => rank <= MAX_RANK)
      .map(({ character, rank }) => ({
        class: {
          id: character.class.id,
          name: character.class.name,
          slug: character.class.name,
        },
        gender: character.gender,
        image: `https://render.worldofwarcraft.com/eu/character/${character.thumbnail.replace(
          'avatar',
          'inset'
        )}`,
        name: character.name,
        race: {
          id: character.race.id,
          name: character.race.name,
          slug: character.race.slug,
        },
        rank,
        realm: {
          id: character.realm.id,
          name: character.realm.name,
        },
        spec: {
          id: character.spec.id,
          melee: character.spec.is_melee,
          name: character.spec.name,
          role: character.spec.role,
        },
      })),
    ['rank', 'name']
  )
}

export const fetchProgress = async (
  expansions: Expansion[]
): Promise<Progress[]> => {
  const response = await fetch(
    `https://raider.io/api/guilds/details?region=${REGION.toLowerCase()}&realm=${kebabCase(
      REALM
    )}&guild=${encodeURIComponent(GUILD)}`
  )

  const json = (await response.json()) as GuildDetails

  return expansions
    .flatMap(({ raids }) => raids)
    .flatMap((raid) => {
      const data = mergeProgress(json.guildDetails.raidProgress).find(
        (item) => item.raid === raid.slug
      )

      return raid.bosses.map(({ slug }) => ({
        boss: slug,
        heroic: Boolean(
          data?.encountersDefeated.heroic.find(
            (difficulty) => difficulty.slug === slug
          )
        ),
        mythic: Boolean(
          data?.encountersDefeated.mythic.find(
            (difficulty) => difficulty.slug === slug
          )
        ),
        normal: Boolean(
          data?.encountersDefeated.normal.find(
            (difficulty) => difficulty.slug === slug
          )
        ),
        raid: raid.slug,
      }))
    })
}

function splitRaids(expansions: Expansion[]): Expansion[] {
  const midnight = expansions.findIndex((raid) => raid.id === 11)

  if (midnight >= 0) {
    const midnightTier1 = expansions[midnight].raids.findIndex(
      (raid) => raid.slug === 'tier-mn-1'
    )

    if (midnightTier1 >= 0) {
      return create(expansions, (draft) => {
        const [{ bosses }] = draft[midnight].raids.splice(midnightTier1, 1)

        draft[midnight].raids.push({
          bosses: bosses.filter((boss) =>
            ['chimaerus-the-undreamt-god'].includes(boss.slug)
          ),
          name: 'The Dreamrift',
          slug: 'the-dreamrift',
        })

        draft[midnight].raids.push({
          bosses: bosses.filter((boss) =>
            ['beloren-child-of-alar', 'midnight-falls'].includes(boss.slug)
          ),
          name: "March on Quel'Danas",
          slug: 'march-on-quel-danas',
        })

        draft[midnight].raids.push({
          bosses: bosses.filter((boss) =>
            [
              'imperator-averzian',
              'vorasius',
              'fallenking-salhadaar',
              'vaelgor-ezzorak',
              'lightblinded-vanguard',
              'crown-of-the-cosmos',
            ].includes(boss.slug)
          ),
          name: 'The Voidspire',
          slug: 'the-voidspire',
        })
      })
    }
  }

  return expansions
}

function mergeProgress(data: GuildDetails['guildDetails']['raidProgress']) {
  const midnight = data.findIndex((raid) => raid.raid === 'tier-mn-1')

  if (midnight >= 0) {
    return create(data, (draft) => {
      const [{ encountersDefeated }] = draft.splice(midnight, 1)

      draft.push({
        encountersDefeated,
        raid: 'the-dreamrift',
      })

      draft.push({
        encountersDefeated,
        raid: 'march-on-quel-danas',
      })

      draft.push({
        encountersDefeated,
        raid: 'the-voidspire',
      })
    })
  }

  return data
}
