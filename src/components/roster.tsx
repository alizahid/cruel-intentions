import { Flex, Grid, Heading, Section } from '@radix-ui/themes'
import type { Member } from '~/types/wow'
import { CharacterCard } from './character'

interface Props {
  roster: Member[]
  title: string
}

export function RosterCard({ roster, title }: Props) {
  return (
    <Section id={title.toLowerCase()} size="3">
      <Flex direction="column" gap="9">
        <Heading align="center" as="h2" color="mint" size="8">
          {title}
        </Heading>

        <Grid
          columns={{
            md: '3',
            sm: '2',
          }}
          gap="9"
        >
          {roster.map((member) => (
            <CharacterCard
              character={member}
              key={`${member.realm.id}-${member.name}`}
            />
          ))}
        </Grid>
      </Flex>
    </Section>
  )
}
