import Image from 'next/image'

import { type Member } from '~/types/wow'

import { Icon } from './icon'

type Props = { character: Member }

export function CharacterCard({ character }: Props) {
  return (
    <div className="flex flex-col items-center">
      <figure className="relative" title={character.spec.role}>
        <Image
          alt={character.name}
          className="bg-primary-900 rounded-lg"
          height={116}
          src={character.image}
          unoptimized
          width={230}
        />

        {character.rank === 0 && (
          <Icon
            className="text-accent-400 absolute -top-2 -left-2"
            name="star"
          />
        )}

        {character.name === 'Wazzuli' && (
          <Icon
            className="absolute -top-2 -left-2 text-rose-400"
            name="heart"
          />
        )}

        <Icon
          className="text-primary-400 absolute -right-2 -bottom-2"
          name={
            character.spec.role === 'tank'
              ? 'shield'
              : character.spec.role === 'healer'
                ? 'hospital'
                : character.spec.melee
                  ? 'sword'
                  : 'arrow'
          }
        />
      </figure>

      <div className="mt-6">
        <div className="text-primary-400 text-2xl font-semibold">
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
