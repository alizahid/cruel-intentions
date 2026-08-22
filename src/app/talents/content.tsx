'use client'

import { Button, Callout, Flex, Grid, Heading, Select } from '@radix-ui/themes'
import { parseAsStringEnum, useQueryState } from 'nuqs'
import { useCallback, useState } from 'react'
import { Copyable } from '~/components/copyable'

export function Content() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>()
  const [data, setData] =
    useState<
      {
        data: {
          code: string
          icon: string
          id: string
          name: string
        }[]
        icon: string
        id: string
        name: string
      }[]
    >()

  const [$class, setClass] = useQueryState(
    'class',
    parseAsStringEnum(classes.map((item) => item.id))
  )
  const [spec, setSpec] = useQueryState(
    'spec',
    parseAsStringEnum(
      classes.find((item) => item.id === $class).specs.map((item) => item.id)
    )
  )
  const [difficulty, setDifficulty] = useQueryState(
    'difficulty',
    parseAsStringEnum(['normal', 'heroic', 'mythic'])
  )
  const [level, setLevel] = useQueryState(
    'level',
    parseAsStringEnum(['10', 'high-keys'])
  )

  const onChangeClass = useCallback(
    (next: string) => {
      setClass(next)
      setSpec(undefined)
    },
    [setClass, setSpec]
  )

  const onSubmit = useCallback(async () => {
    setLoading(true)
    setError(undefined)

    try {
      const response = await fetch('/api/talents', {
        body: JSON.stringify({
          class: $class,
          difficulty,
          level,
          spec,
        }),
        method: 'POST',
      })

      const json = await response.json()

      setData(json)
    } catch (exception) {
      setError(exception.mastery)
    } finally {
      setLoading(false)
    }
  }, [$class, spec, difficulty, level])

  const specs = $class
    ? classes.find((item) => item.id === $class).specs
    : undefined

  return (
    <Flex direction="column" gap="6" p="4">
      <Heading color="amber">Talents</Heading>

      {error ? (
        <Callout.Root color="red" size="1">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      ) : null}

      <Flex
        align="start"
        direction={{
          initial: 'column',
          sm: 'row',
        }}
        gap="4"
      >
        <Flex gap="4">
          {/* @ts-expect-error */}
          <Select.Root onValueChange={setDifficulty} value={difficulty ?? ''}>
            <Select.Trigger placeholder="Raid difficulty" />

            <Select.Content>
              <Select.Item value="normal">Normal</Select.Item>
              <Select.Item value="heroic">Heroic</Select.Item>
              <Select.Item value="mythic">Mythic</Select.Item>
            </Select.Content>
          </Select.Root>

          {/* @ts-expect-error */}
          <Select.Root onValueChange={setLevel} value={level ?? ''}>
            <Select.Trigger placeholder="Keystone level" />

            <Select.Content>
              <Select.Item value="10">10s</Select.Item>
              <Select.Item value="high-keys">High keys</Select.Item>
            </Select.Content>
          </Select.Root>
        </Flex>

        <Flex gap="4">
          <Select.Root onValueChange={onChangeClass} value={$class ?? ''}>
            <Select.Trigger placeholder="Class" />

            <Select.Content>
              {classes.map((item) => (
                <Select.Item key={item.id} value={item.id}>
                  {item.name}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>

          {specs ? (
            <Select.Root onValueChange={setSpec} value={spec ?? ''}>
              <Select.Trigger placeholder="Specialization" />

              <Select.Content>
                {specs.map((item) => (
                  <Select.Item key={item.id} value={item.id}>
                    {item.name}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>
          ) : null}
        </Flex>

        <Button
          disabled={loading || !$class || !spec}
          loading={loading}
          onClick={onSubmit}
        >
          Fetch
        </Button>
      </Flex>

      {data ? (
        <Grid
          columns={{
            sm: '2',
          }}
          gap="6"
        >
          {data.map((group) => (
            <Flex direction="column" gap="3" key={group.id}>
              <Heading as="h2" size="3">
                {group.name}
              </Heading>

              {group.data.map((item) => (
                <Copyable key={item.id} label={item.name} value={item.code} />
              ))}
            </Flex>
          ))}
        </Grid>
      ) : null}
    </Flex>
  )
}

const classes = [
  {
    id: 'death-knight',
    name: 'Death Knight',
    specs: [
      {
        id: 'frost',
        name: 'Frost',
      },
      {
        id: 'unholy',
        name: 'Unholy',
      },
      {
        id: 'blood',
        name: 'Blood',
      },
    ],
  },
  {
    id: 'demon-hunter',
    name: 'Demon Hunter',
    specs: [
      {
        id: 'havoc',
        name: 'Havoc',
      },
      {
        id: 'devourer',
        name: 'Devourer',
      },
      {
        id: 'vengeance',
        name: 'Vengeance',
      },
    ],
  },
  {
    id: 'druid',
    name: 'Druid',
    specs: [
      {
        id: 'feral',
        name: 'Feral',
      },
      {
        id: 'balance',
        name: 'Balance',
      },
      {
        id: 'guardian',
        name: 'Guardian',
      },
      {
        id: 'restoration',
        name: 'Restoration',
      },
    ],
  },
  {
    id: 'hunter',
    name: 'Hunter',
    specs: [
      {
        id: 'survival',
        name: 'Survival',
      },
      {
        id: 'beast-mastery',
        name: 'Beast Mastery',
      },
      {
        id: 'marksmanship',
        name: 'Marksmanship',
      },
    ],
  },
  {
    id: 'monk',
    name: 'Monk',
    specs: [
      {
        id: 'windwalker',
        name: 'Windwalker',
      },
      {
        id: 'brewmaster',
        name: 'Brewmaster',
      },
      {
        id: 'mistweaver',
        name: 'Mistweaver',
      },
    ],
  },
  {
    id: 'paladin',
    name: 'Paladin',
    specs: [
      {
        id: 'retribution',
        name: 'Retribution',
      },
      {
        id: 'protection',
        name: 'Protection',
      },
      {
        id: 'holy',
        name: 'Holy',
      },
    ],
  },
  {
    id: 'rogue',
    name: 'Rogue',
    specs: [
      {
        id: 'assassination',
        name: 'Assassination',
      },
      {
        id: 'outlaw',
        name: 'Outlaw',
      },
      {
        id: 'subtlety',
        name: 'Subtlety',
      },
    ],
  },
  {
    id: 'shaman',
    name: 'Shaman',
    specs: [
      {
        id: 'enhancement',
        name: 'Enhancement',
      },
      {
        id: 'elemental',
        name: 'Elemental',
      },
      {
        id: 'restoration',
        name: 'Restoration',
      },
    ],
  },
  {
    id: 'warrior',
    name: 'Warrior',
    specs: [
      {
        id: 'arms',
        name: 'Arms',
      },
      {
        id: 'fury',
        name: 'Fury',
      },
      {
        id: 'protection',
        name: 'Protection',
      },
    ],
  },
  {
    id: 'evoker',
    name: 'Evoker',
    specs: [
      {
        id: 'augmentation',
        name: 'Augmentation',
      },
      {
        id: 'devastation',
        name: 'Devastation',
      },
      {
        id: 'preservation',
        name: 'Preservation',
      },
    ],
  },
  {
    id: 'mage',
    name: 'Mage',
    specs: [
      {
        id: 'arcane',
        name: 'Arcane',
      },
      {
        id: 'fire',
        name: 'Fire',
      },
      {
        id: 'frost',
        name: 'Frost',
      },
    ],
  },
  {
    id: 'priest',
    name: 'Priest',
    specs: [
      {
        id: 'shadow',
        name: 'Shadow',
      },
      {
        id: 'discipline',
        name: 'Discipline',
      },
      {
        id: 'holy',
        name: 'Holy',
      },
    ],
  },
  {
    id: 'warlock',
    name: 'Warlock',
    specs: [
      {
        id: 'affliction',
        name: 'Affliction',
      },
      {
        id: 'demonology',
        name: 'Demonology',
      },
      {
        id: 'destruction',
        name: 'Destruction',
      },
    ],
  },
]
