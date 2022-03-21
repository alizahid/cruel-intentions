import { FunctionComponent } from 'react'
import { twMerge } from 'tailwind-merge'

import { Member } from '../types'
import { CharacterCard } from './character'

type Props = {
  className?: string
  roster: Array<Member>
}

export const RosterCard: FunctionComponent<Props> = ({ className, roster }) => {
  const officers = roster.filter(({ rank }) => rank <= 1)

  return (
    <section className={twMerge(className)}>
      <List roster={officers} title="Leadership" />

      <List className="mt-12" roster={roster} title="Raiders" />
    </section>
  )
}

type ListProps = Props & {
  title: string
}

const List: FunctionComponent<ListProps> = ({ className, roster, title }) => (
  <div className={className}>
    <h3 className="text-2xl font-semibold text-center text-teal-400">
      {title}
    </h3>

    <div className="grid gap-12 mt-12 lg:grid-cols-2">
      {roster.map((member) => (
        <CharacterCard character={member} key={member.id} />
      ))}
    </div>
  </div>
)
