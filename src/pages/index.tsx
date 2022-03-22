import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { ProgressCard } from '../components/progress'
import { RecruitmentCard } from '../components/recruitment'
import { RosterCard } from '../components/roster'
import { raider } from '../lib/raider'
import { Data } from '../types'

const Home: NextPage<Data> = ({ guild, progress, roster }) => {
  const officers = roster.filter(({ rank }) => rank <= 1)
  const raiders = roster.filter(({ rank }) => rank > 1)

  return (
    <div className="flex flex-col max-w-5xl px-6 mx-auto mb-24">
      <Head>
        <title>{guild.name}: World of Warcraft guild</title>
        <meta
          content={`${guild.name}: World of Warcraft guild on ${guild.realm}, ${guild.region}`}
          name="description"
        />
      </Head>

      <Header guild={guild} />

      <main className="flex flex-col my-24">
        <RosterCard roster={officers} title="Leadership" />

        <RosterCard className="mt-24" roster={raiders} title="Raiders" />

        <ProgressCard className="mt-24" progress={progress} />

        <RecruitmentCard className="mt-24" guild={guild} />
      </main>

      <Footer guild={guild} />
    </div>
  )
}

export const getStaticProps: GetStaticProps<Data> = async () => {
  const props = await raider.fetch({
    guild: 'Cruel Intentions',
    maxRank: 2,
    realm: 'Twisting Nether',
    region: 'EU'
  })

  return {
    props
  }
}

export default Home
