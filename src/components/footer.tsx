import kebabCase from 'lodash/kebabCase'
import Link from 'next/link'
import { FunctionComponent } from 'react'

import { Guild } from '../types'

type Props = {
  guild: Guild
}

export const Footer: FunctionComponent<Props> = ({ guild }) => {
  const region = guild.region.toLowerCase()
  const realm = kebabCase(guild.realm)
  const slug = kebabCase(guild.name)

  const links = [
    {
      label: 'Armory',
      link: `https://worldofwarcraft.com/en-us/guild/${region}/${realm}/${slug}`
    },
    {
      label: 'Raider.io',
      link: `https://raider.io/guilds/${region}/${realm}/${encodeURIComponent(
        guild.name
      )}`
    },
    {
      label: 'WoWProgress',
      link: `https://www.wowprogress.com/guild/${region}/${realm}/${encodeURIComponent(
        guild.name
      )}`
    }
  ]

  return (
    <footer className="p-12 text-sm text-center text-neutral-400">
      <p>
        &#169; {new Date().getFullYear()} {guild.name}. All rights reserved.
      </p>

      <nav className="flex justify-center mt-6">
        {links.map(({ label, link }) => (
          <Link href={link} key={label}>
            <a className="ml-3 text-neutral-200 first:ml-0 hover:text-amber-400">
              {label}
            </a>
          </Link>
        ))}
      </nav>
    </footer>
  )
}
