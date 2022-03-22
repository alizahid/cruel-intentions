import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { RaidCard } from '../components/raid'
import { RecruitmentCard } from '../components/recruitment'
import { RosterCard } from '../components/roster'
import { Blizzard } from '../lib/blizzard'
import { raider } from '../lib/raider'
import { Guild, Member, Options, Raid } from '../types'

type Props = {
  guild: Guild
  options: Options
  raid: Raid
  roster: Array<Member>
}

const Home: NextPage<Props> = ({ guild, options, raid, roster }) => {
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

        <RecruitmentCard className="mt-24" options={options} />
      </main>

      <Footer />
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const options: Options = {
    guild: 'Cruel Intentions',
    realm: 'Twisting Nether',
    region: 'eu'
  }

  const { guild, roster } = await Blizzard.fetch(options, 2)

  const raid = await raider.fetch(options)

  return {
    props: {
      guild,
      options,
      raid,
      roster
    }
  }
}

export default Home
