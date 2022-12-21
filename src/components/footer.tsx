import kebabCase from 'lodash/kebabCase'
import Link from 'next/link'
import { FunctionComponent } from 'react'

import { GUILD, REALM, REGION } from '../lib/config'

export const Footer: FunctionComponent = () => {
  const region = REGION.toLowerCase()
  const realm = kebabCase(REALM)
  const slug = kebabCase(GUILD)

  const links = [
    {
      label: 'Armory',
      link: `https://worldofwarcraft.com/en-us/guild/${region}/${realm}/${slug}`
    },
    {
      label: 'Raider.io',
      link: `https://raider.io/guilds/${region}/${realm}/${encodeURIComponent(
        GUILD
      )}`
    },
    {
      label: 'WoWProgress',
      link: `https://www.wowprogress.com/guild/${region}/${realm}/${encodeURIComponent(
        GUILD
      )}`
    }
  ]

  return (
    <footer className="m-12 text-sm text-neutral-400">
      <p>
        &#169; {new Date().getFullYear()} {GUILD}. All rights reserved.
      </p>

      <nav className="flex justify-center mt-6">
        {links.map(({ label, link }) => (
          <Link
            className="ml-3 text-neutral-200 first:ml-0 hover:text-primary-400"
            href={link}
            key={label}>
            {label}
          </Link>
        ))}
      </nav>
    </footer>
  )
}
