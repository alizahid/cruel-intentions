import Image from 'next/image'
import { FunctionComponent } from 'react'

import { Member } from '../types/wow'
import { Icon } from './icon'

type Props = {
  character: Member
}

export const CharacterCard: FunctionComponent<Props> = ({ character }) => (
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
        <Icon className="absolute text-accent-400 -top-2 -left-2" name="star" />
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
      <div className="text-2xl font-medium text-primary-400">
        {character.name}
      </div>

      <div className="mt-2 font-medium text-neutral-400">
        {[character.race.name, character.class.name, character.spec.name].join(
          ' · '
        )}
      </div>
    </div>
  </div>
)
