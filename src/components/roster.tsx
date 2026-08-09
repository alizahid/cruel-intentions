import { twMerge } from 'tailwind-merge'

import type { Member } from '~/types/wow'

import { CharacterCard } from './character'

interface Props {
  className?: string
  roster: Member[]
  title: string
}

export function RosterCard({ className, roster, title }: Props) {
  return (
    <div
      className={twMerge('flex scroll-m-12 flex-col gap-12', className)}
      id={title.toLowerCase()}
    >
      <h2 className="font-semibold text-4xl text-accent-400">{title}</h2>

      <div className="mx-auto grid w-full max-w-5xl items-center gap-12 md:grid-cols-2 lg:grid-cols-3">
        {roster.map((member) => (
          <CharacterCard
            character={member}
            key={`${member.realm.id}-${member.name}`}
          />
        ))}
      </div>
    </div>
  )
}
