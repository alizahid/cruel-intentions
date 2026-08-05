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
        GUILD
      )}`,
    },
    {
      label: 'WoWProgress',
      link: `https://www.wowprogress.com/guild/${region}/${realm}/${encodeURIComponent(
        GUILD
      )}`,
    },
  ]

  return (
    <footer className="m-12 text-gray-400 text-sm">
      <p>
        &#169; {new Date().getFullYear()} {GUILD}. All rights reserved.
      </p>

      <nav className="mt-6 flex justify-center gap-3">
        {links.map(({ label, link }) => (
          <Link
            className="text-gray-200 leading-tight outline-none hover:text-primary-400 focus-visible:bg-primary-950"
            href={link}
            key={link}
          >
            {label}
          </Link>
        ))}
      </nav>

      <Link
        className="mt-6 inline-flex items-center justify-center gap-1 text-gray-200 leading-tight outline-none hover:text-primary-400 focus-visible:bg-primary-950"
        href="https://alizahid.dev"
      >
        Made with <Icon className="h-5 w-5 text-red-600" name="heart" />
      </Link>
    </footer>
  )
}
