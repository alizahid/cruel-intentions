import { FACTION, GUILD, REALM, REGION } from '~/lib/config'

import { Link } from './link'

export function Header() {
  return (
    <header>
      <nav className="flex justify-center">
        <Link href="#raiders">Raiders</Link>
        <Link href="#progress">Progress</Link>
        <Link href="#recruitment">Apply</Link>
      </nav>

      <div className="mt-24 flex flex-col items-center text-lg lg:flex-row lg:justify-center">
        <span className="text-accent-400 font-semibold">{REGION}</span>
        <span className="mx-3 hidden lg:block">&#215;</span>
        <span className="text-accent-400 font-semibold">{REALM}</span>
        <span className="mx-3 hidden lg:block">&#215;</span>
        <span className="text-accent-400 font-semibold">{FACTION}</span>
      </div>

      <h1 className="text-primary-400 mt-4 text-6xl font-bold">{GUILD}</h1>
    </header>
  )
}
