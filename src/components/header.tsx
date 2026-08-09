import { FACTION, GUILD, REALM, REGION } from '~/lib/config'

import { Link } from './link'

export function Header() {
  return (
    <header className="flex flex-col items-center gap-24">
      <nav className="flex justify-center">
        <Link href="#raiders">Raiders</Link>
        <Link href="#progress">Progress</Link>
        <Link href="#recruitment">Apply</Link>
      </nav>

      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-center text-lg lg:flex-row lg:justify-center">
          <span className="font-semibold text-accent-400">{REGION}</span>
          <span className="mx-3 hidden lg:block">&#215;</span>
          <span className="font-semibold text-accent-400">{REALM}</span>
          <span className="mx-3 hidden lg:block">&#215;</span>
          <span className="font-semibold text-accent-400">{FACTION}</span>
        </div>

        <h1 className="font-bold text-6xl text-primary-400">{GUILD}</h1>
      </div>
    </header>
  )
}
