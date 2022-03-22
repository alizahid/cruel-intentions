import { FunctionComponent } from 'react'
import { twMerge } from 'tailwind-merge'

import { Member } from '../types'
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
  <div className={twMerge('scroll-mt-12', className)} id={title.toLowerCase()}>
    <h2 className="text-4xl font-semibold text-center text-teal-400">
      {title}
    </h2>

    <div className="grid gap-12 mt-12 lg:grid-cols-2">
      {roster.map((member) => (
        <CharacterCard character={member} key={member.name} />
      ))}
    </div>
  </div>
)
