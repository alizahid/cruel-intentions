import Image from 'next/image'
import { FunctionComponent } from 'react'

import { Member } from '../types'
import { Icon } from './icon'

type Props = {
  character: Member
}

export const CharacterCard: FunctionComponent<Props> = ({ character }) => (
  <div className="flex items-center">
    <figure className="relative" title={character.spec.role}>
      <Image
        alt={character.name}
        className="rounded-full bg-amber-900"
        height={84}
        src={character.image}
        width={84}
      />

      {character.rank === 0 && (
        <Icon className="absolute text-teal-400 -top-1 -left-1" name="star" />
      )}

      <Icon
        className="absolute -bottom-1 -right-1 text-amber-400"
        name={
          character.spec.role === 'Tank'
            ? 'shield'
            : character.spec.role === 'Healer'
            ? 'hospital'
            : 'sword'
        }
      />
    </figure>

    <div className="flex-1 ml-6">
      <div className="text-xl font-medium">{character.name}</div>

      <div className="mt-2 font-medium text-gray-400">
        {character.race.name} {character.class.name}
      </div>
    </div>
  </div>
)
