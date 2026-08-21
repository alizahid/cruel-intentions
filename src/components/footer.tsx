import { Flex, Link, Section, Text } from '@radix-ui/themes'
import kebabCase from 'lodash/kebabCase'
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
    <Section size="3">
      <Flex direction="column" gap="4">
        <Text align="center" color="gray" size="2">
          &#169; {new Date().getFullYear()} {GUILD}. All rights reserved.
        </Text>

        <Flex gap="3" justify="center">
          {links.map(({ label, link }) => (
            <Link href={link} key={link} size="2" underline="none">
              {label}
            </Link>
          ))}
        </Flex>

        <Flex alignSelf="center" asChild gap="1">
          <Link href="https://alizahid.dev" size="2" underline="none">
            Made with <Icon className="h-5 w-5 text-red-600" name="heart" /> by
            mildpanda
          </Link>
        </Flex>
      </Flex>
    </Section>
  )
}
