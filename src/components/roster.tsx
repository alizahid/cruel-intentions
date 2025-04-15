import { twMerge } from 'tailwind-merge'

import { type Member } from '~/types/wow'

import { CharacterCard } from './character'

type Props = {
  className?: string
  roster: Array<Member>
  title: string
}

export function RosterCard({ className, roster, title }: Props) {
  return (
    <div className={twMerge('scroll-m-12', className)} id={title.toLowerCase()}>
      <h2 className="text-accent-400 text-4xl font-semibold">{title}</h2>

      <div className="mx-auto mt-12 grid max-w-5xl gap-12 lg:grid-cols-3">
        {roster.map((member) => (
          <CharacterCard character={member} key={member.name} />
        ))}
      </div>
    </div>
  )
}
