import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { RaidCard } from '../components/raid'
import { RosterCard } from '../components/roster'
import { Blizzard } from '../lib/blizzard'
import { raider } from '../lib/raider'
import { Guild, Member, Raid, Region } from '../types'

type Props = {
  guild: Guild
  raid: Raid
  roster: Array<Member>
}

const Home: NextPage<Props> = ({ guild, raid, roster }) => {
  const officers = roster.filter(({ rank }) => rank <= 1)

  return (
    <div className="flex flex-col max-w-5xl px-6 mx-auto mb-24">
      <Head>
        <title>{guild.name}: World of Warcraft guild</title>
        <meta
          content={`${guild.name}: World of Warcraft guild on ${
            guild.realm
          }, ${guild.region.toUpperCase()}`}
          name="description"
        />
      </Head>

      <Header guild={guild} />

      <main className="flex flex-col my-24">
        <RosterCard roster={officers} title="Leadership" />

        <RosterCard className="mt-24" roster={roster} title="Raiders" />

        <RaidCard className="mt-24" raid={raid} />
      </main>

      <Footer />
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const options = {
    guild: 'Cruel Intentions',
    realm: 'Twisting Nether',
    region: 'eu'
  }

  const { guild, roster } = await Blizzard.fetch(
    options.region as Region,
    options.realm,
    options.guild,
    2
  )

  const raid = await raider.fetch(
    options.region as Region,
    options.realm,
    options.guild
  )

  return {
    props: {
      guild,
      raid,
      roster
    }
  }
}

export default Home
