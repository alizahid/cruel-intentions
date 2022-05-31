import { FunctionComponent } from 'react'

import { Guild } from '../types'
import { Link } from './link'

type Props = {
  guild: Guild
}

export const Header: FunctionComponent<Props> = ({ guild }) => (
  <header className="text-center">
    <nav className="flex justify-center">
      <Link href="/raiders">Raiders</Link>
      <Link href="/progress">Progress</Link>
      <Link href="/recruitment">Apply</Link>
    </nav>

    <div className="flex flex-col items-center mt-24 text-lg lg:flex-row lg:justify-center">
      <span className="font-medium text-amber-200">{guild.region}</span>

      <span className="hidden mx-3 lg:block">&#215;</span>

      <span className="font-medium text-amber-200">{guild.realm}</span>

      <span className="hidden mx-3 lg:block">&#215;</span>

      <span className="font-medium text-amber-200">{guild.faction}</span>
    </div>

    <h1 className="mt-4 text-6xl font-bold text-amber-400">{guild.name}</h1>
  </header>
)
