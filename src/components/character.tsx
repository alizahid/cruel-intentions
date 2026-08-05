import Image from 'next/image'

import type { Member } from '~/types/wow'

import { Icon, type IconName } from './icon'

interface Props {
  character: Member
}

export function CharacterCard({ character }: Props) {
  return (
    <div className="flex flex-col items-center">
      <figure className="relative" title={character.spec.role}>
        <Image
          alt={character.name}
          className="rounded-lg bg-primary-900"
          height={116}
          src={character.image}
          unoptimized
          width={230}
        />

        {character.rank === 0 && (
          <Icon
            className="absolute -top-2 -left-2 text-accent-400"
            name="crown"
          />
        )}

        {character.name === 'Wazzuli' && (
          <Icon
            className="absolute -top-2 -left-2 text-rose-400"
            name="heart"
          />
        )}

        <Icon
          className="absolute -right-2 -bottom-2 text-primary-400"
          name={
            character.spec.role === 'dps'
              ? icons[character.spec.melee ? 'melee' : 'ranged']
              : icons[character.spec.role]
          }
        />
      </figure>

      <div className="mt-6">
        <div className="font-semibold text-2xl text-primary-400">
          {character.name}
        </div>

        <div className="mt-2 text-gray-400">
          {[
            character.race.name,
            character.class.name,
            character.spec.name,
          ].join(' · ')}
        </div>
      </div>
    </div>
  )
}

const icons = {
  healer: 'first-aid',
  melee: 'sword',
  ranged: 'magic',
  tank: 'shield',
} as const satisfies Record<string, IconName>
