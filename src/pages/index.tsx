import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { RosterCard } from '../components/roster'
import { Blizzard } from '../lib/blizzard'
import { Guild, Member } from '../types'

type Props = {
  guild: Guild
  roster: Array<Member>
}

const Home: NextPage<Props> = ({ guild, roster }) => (
  <div className="flex flex-col max-w-5xl px-6 mx-auto my-24">
    <Head>
      <title>{guild.name}</title>
    </Head>

    <Header guild={guild} />

    <main className="flex flex-col my-24">
      <RosterCard roster={roster} />
    </main>

    <Footer />
  </div>
)

export const getStaticProps: GetStaticProps<Props> = async () => {
  const props = await Blizzard.fetch(
    'eu',
    'Twisting Nether',
    'Cruel Intentions',
    2
  )

  return {
    props
  }
}

export default Home
