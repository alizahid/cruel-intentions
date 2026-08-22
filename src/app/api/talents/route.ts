import { type NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  class: z.string(),
  difficulty: z.string(),
  level: z.string(),
  spec: z.string(),
})

export async function POST(request: NextRequest) {
  const input = schema.parse(await request.json())

  const [$dungeons, $bosses] = await Promise.all([
    Promise.all(
      dungeons.map(async (item) => {
        const response = await fetch(
          `https://www.archon.gg/wow/builds/${input.spec}/${input.class}/mythic-plus/overview/${input.level}/${item.id}/this-week`
        )

        const text = await response.text()

        return {
          ...item,
          code: getCode(text),
        }
      })
    ),
    Promise.all(
      bosses.map(async (item) => {
        const response = await fetch(
          `https://www.archon.gg/wow/builds/${input.spec}/${input.class}/raid/overview/${input.difficulty}/${item.id}`
        )

        const text = await response.text()

        return {
          ...item,
          code: getCode(text),
        }
      })
    ),
  ])

  return NextResponse.json(
    groups.map((group) => ({
      ...group,
      data: group.id === 'keystone' ? $dungeons : $bosses,
    }))
  )
}

const codeRegex = /"exportCode"\s*:\s*"([^"]*)"/

function getCode(html: string) {
  const matches = html.match(codeRegex)

  return matches?.[1]
}

const groups = [
  {
    icon: '8039569',
    id: 'raid',
    name: 'Bosses',
  },
  {
    icon: '6025441',
    id: 'keystone',
    name: 'Dungeons',
  },
]

const dungeons = [
  {
    icon: '6025441',
    id: 'all-dungeons',
    name: 'All dungeons',
  },
  {
    icon: '7956175',
    id: 'altar-of-fangs',
    name: 'Altar of Fangs',
  },
  {
    icon: '7266214',
    id: 'den-of-nalorakk',
    name: 'Den of Nalorakk',
  },
  {
    icon: '2011123',
    id: 'kings-rest',
    name: "Kings' Rest",
  },
  {
    icon: '7266213',
    id: 'murder-row',
    name: 'Murder Row',
  },
  {
    icon: '4578416',
    id: 'ruby-life-pools',
    name: 'Ruby Life Pools',
  },
  {
    icon: '2011143',
    id: 'sethraliss',
    name: 'Temple of Sethraliss',
  },
  {
    icon: '7354408',
    id: 'the-blinding-vale',
    name: 'The Blinding Vale',
  },
  {
    icon: '7439626',
    id: 'voidscar-arena',
    name: 'Voidscar Arena',
  },
]

const bosses = [
  {
    icon: '8039569',
    id: 'all-bosses',
    name: 'All bosses',
  },
  {
    icon: '3012069',
    id: 'nymrissa',
    name: 'Nymrissa Wavecaller',
  },
  {
    icon: '7966621',
    id: 'nekzali',
    name: "Nek'zali the Soulcoiler",
  },
  {
    icon: '7966620',
    id: 'sentinels',
    name: 'Entombed Sentinels',
  },
  {
    icon: '7966622',
    id: 'explorers',
    name: 'The Lost Explorers',
  },
  {
    icon: '7966618',
    id: 'vashnik',
    name: 'Vashnik the Malignant',
  },
  {
    icon: '7966619',
    id: 'sszorak',
    name: 'Sszorak',
  },
  {
    icon: '7966623',
    id: 'the-twin-fangs',
    name: 'The Twin Fangs',
  },
  {
    icon: '7966625',
    id: 'the-coiled-altar',
    name: 'The Coiled Altar',
  },
  {
    icon: '7966624',
    id: 'ulatek',
    name: "Ula'tek",
  },
]
