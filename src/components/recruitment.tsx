import { Button, Flex, Heading, Section, Text } from '@radix-ui/themes'

import { GUILD } from '~/lib/config'
import { officers } from '~/lib/roster'

export function RecruitmentCard() {
  return (
    <Section id="recruitment" size="3">
      <Flex align="center" direction="column" gap="6">
        <Heading align="center" as="h2" color="mint" size="8">
          Apply to join {GUILD}
        </Heading>

        <Text align="center">Talk to one of our officers on Discord.</Text>

        <Flex gap="3" justify="center" wrap="wrap">
          {officers.map(({ id, username }) => (
            <Button asChild key={id}>
              <a
                href={`https://discordapp.com/users/${id}`}
                rel="noopener"
                target="_blank"
              >
                {username}
              </a>
            </Button>
          ))}
        </Flex>
      </Flex>
    </Section>
  )
}
