import Image from 'next/image'
import { FunctionComponent } from 'react'

import { Member } from '../types'
import { Icon } from './icon'

type Props = {
  character: Member
}

export const CharacterCard: FunctionComponent<Props> = ({ character }) => (
  <div className="flex flex-col items-center text-center">
    <figure className="relative" title={character.spec.role}>
      <Image
        alt={character.name}
        className="rounded-lg bg-amber-900"
        height={116 / 2}
        src={character.image}
        width={230 / 2}
      />

      {character.rank === 0 && (
        <Icon className="absolute text-teal-400 -top-2 -left-2" name="star" />
      )}

      <Icon
        className="absolute -bottom-2 -right-2 text-amber-400"
        name={
          character.spec.role === 'Tank'
            ? 'shield'
            : character.spec.role === 'Healer'
            ? 'hospital'
            : 'sword'
        }
      />
    </figure>

    <div className="mt-6">
      <div className="text-xl font-medium">{character.name}</div>

      <div className="font-medium text-gray-400">
        {character.race.name} {character.class.name}
      </div>
    </div>
  </div>
)
