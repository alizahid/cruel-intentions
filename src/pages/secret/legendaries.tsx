import axios from 'axios'
import kebabCase from 'lodash/kebabCase'
import orderBy from 'lodash/orderBy'
import { GetServerSideProps, NextPage } from 'next'
import Image from 'next/image'

import { GUILD, REALM, REGION } from '../../lib/config'
import { Character } from '../../types/legendaries'

type Props = {
  characters: Array<Character>
}

const Legendaries: NextPage<Props> = ({ characters }) => (
  <main className="m-6">
    <h1 className="text-4xl font-bold text-amber-400">Legendaries</h1>

    <section className="grid gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
      {characters.map((character) => (
        <div
          className="flex items-center p-3 rounded-lg bg-neutral-900"
          key={character.name}>
          <div className="font-medium text-2xl tabular-nums text-[#ff8000]">
            {character.legendaries.length}
          </div>

          <div className="flex mx-3">
            <Image
              alt={character.name}
              className="rounded-lg bg-amber-900"
              height={48}
              src={character.image}
              width={48}
            />
          </div>

          <div>
            <div>{character.name}</div>
            <div className="text-sm text-neutral-400 tabular-nums">
              {character.ilvl}
            </div>
          </div>

          <div className="flex flex-col items-end ml-auto">
            {character.legendaries.map((item) => (
              <div className="flex items-center" key={item.slot}>
                <div className="text-neutral-400">{item.slot}</div>
                <div className="ml-3 font-medium tabular-nums">{item.ilvl}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  </main>
)

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const { data } = await axios.get<{
    guildRoster: {
      roster: Array<{
        rank: number
        character: {
          name: string
          thumbnail: string
          items: {
            item_level_equipped: number
            items: Record<
              string,
              {
                is_legendary: boolean
                item_level: number
              }
            >
          }
        }
      }>
    }
  }>(
    `https://raider.io/api/guilds/roster?region=${REGION.toLowerCase()}&realm=${kebabCase(
      REALM
    )}&guild=${encodeURIComponent(GUILD)}`
  )

  const characters = data.guildRoster.roster
    .filter(({ rank }) => rank <= 2)
    .map(
      ({
        character: {
          items: { item_level_equipped, items },
          name,
          thumbnail
        }
      }) => ({
        ilvl: item_level_equipped,
        image: `https://render.worldofwarcraft.com/eu/character/${thumbnail}`,
        legendaries: Object.entries(items)
          .filter(([, item]) => item?.is_legendary)
          .map(([slot, { item_level }]) => ({
            ilvl: item_level,
            slot
          })),
        name
      })
    )

  return {
    props: {
      characters: orderBy(characters, 'ilvl', 'desc')
    }
  }
}

export default Legendaries
