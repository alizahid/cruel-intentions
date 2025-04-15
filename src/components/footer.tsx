import kebabCase from 'lodash/kebabCase'
import Link from 'next/link'

import { GUILD, REALM, REGION } from '~/lib/config'

import { Icon } from './icon'

export function Footer() {
  const region = REGION.toLowerCase()
  const realm = kebabCase(REALM)
  const slug = kebabCase(GUILD)

  const links = [
    {
      label: 'Armory',
      link: `https://worldofwarcraft.com/en-us/guild/${region}/${realm}/${slug}`,
    },
    {
      label: 'Raider.io',
      link: `https://raider.io/guilds/${region}/${realm}/${encodeURIComponent(
        GUILD,
      )}`,
    },
    {
      label: 'WoWProgress',
      link: `https://www.wowprogress.com/guild/${region}/${realm}/${encodeURIComponent(
        GUILD,
      )}`,
    },
  ]

  return (
    <footer className="m-12 text-sm text-gray-400">
      <p>
        &#169; {new Date().getFullYear()} {GUILD}. All rights reserved.
      </p>

      <nav className="mt-6 flex justify-center gap-3">
        {links.map(({ label, link }) => (
          <Link
            className="hover:text-primary-400 text-gray-200"
            href={link}
            key={link}>
            {label}
          </Link>
        ))}
      </nav>

      <Link
        className="hover:text-primary-400 mt-6 inline-flex items-center justify-center gap-1 text-gray-200"
        href="https://alizahid.dev">
        Made with <Icon className="h-5 w-5 text-red-600" name="heart" />
      </Link>
    </footer>
  )
}
