import { Flex, Heading, Link, Section, Text } from '@radix-ui/themes'
import { FACTION, GUILD, REALM, REGION } from '~/lib/config'

export function Header() {
  return (
    <Section size="3">
      <Flex direction="column" gap="9">
        <Flex asChild gap="3" justify="center">
          <nav>
            <Link highContrast href="#raiders" underline="none">
              Raiders
            </Link>

            <Link highContrast href="#progress" underline="none">
              Progress
            </Link>

            <Link highContrast href="#recruitment" underline="none">
              Apply
            </Link>
          </nav>
        </Flex>

        <Flex direction="column" gap="4">
          <Text align="center" weight="medium">
            {REGION} <Text color="gray">&#215;</Text> {REALM}{' '}
            <Text color="gray">&#215;</Text> {FACTION}
          </Text>

          <Heading align="center" color="amber" size="9">
            {GUILD}
          </Heading>
        </Flex>
      </Flex>
    </Section>
  )
}
