import { FunctionComponent } from 'react'

import { Guild } from '../types'

type Props = {
  guild: Guild
}

export const Header: FunctionComponent<Props> = ({ guild }) => (
  <section className="text-center">
    <h2 className="flex items-center justify-center text-xl">
      <span className="font-medium text-amber-200">
        {guild.region.toUpperCase()}
      </span>

      <span className="mx-3">&#215;</span>

      <span className="font-medium text-amber-200">{guild.realm}</span>

      <span className="mx-3">&#215;</span>

      <span className="font-medium text-amber-200">{guild.faction}</span>
    </h2>

    <h1 className="mt-4 text-4xl font-bold text-amber-400">{guild.name}</h1>
  </section>
)
