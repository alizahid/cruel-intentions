import Image from 'next/image'

import { type Member } from '~/types/wow'

import { Icon } from './icon'

type Props = {
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
            className="absolute -left-2 -top-2 text-accent-400"
            name="star"
          />
        )}

        {character.name === 'Wazzuli' && (
          <Icon
            className="absolute -left-2 -top-2 text-rose-400"
            name="heart"
          />
        )}

        <Icon
          className="absolute -bottom-2 -right-2 text-primary-400"
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
        <div className="text-2xl font-semibold text-primary-400">
          {character.name}
        </div>

        <div className="mt-2 text-neutral-400">
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
