import { FunctionComponent } from 'react'
import { twMerge } from 'tailwind-merge'

import { Member } from '../types/wow'
import { CharacterCard } from './character'

type Props = {
  className?: string
  roster: Array<Member>
  title: string
}

export const RosterCard: FunctionComponent<Props> = ({
  className,
  roster,
  title
}) => (
  <div className={twMerge('scroll-m-12', className)} id={title.toLowerCase()}>
    <h2 className="text-4xl font-semibold text-accent-400">{title}</h2>

    <div className="grid max-w-5xl gap-12 mx-auto mt-12 lg:grid-cols-3">
      {roster.map((member) => (
        <CharacterCard character={member} key={member.name} />
      ))}
    </div>
  </div>
)
