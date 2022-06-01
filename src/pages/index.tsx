import { GetStaticProps } from 'next'

import { ProgressCard } from '../components/progress'
import { RecruitmentCard } from '../components/recruitment'
import { RosterCard } from '../components/roster'
import { MainLayout } from '../layouts/main'
import { fetchExpansions, fetchProgress, fetchRoster } from '../lib/raider'
import { NextPageWithLayout } from '../types/next'
import { Expansion, Member, Progress } from '../types/wow'

type Props = {
  expansions: Array<Expansion>
  progress: Array<Progress>
  roster: Array<Member>
}

const Home: NextPageWithLayout<Props> = ({ expansions, progress, roster }) => {
  const officers = roster.filter(({ rank }) => rank <= 1)
  const raiders = roster.filter(({ rank }) => rank > 1)

  return (
    <>
      <RosterCard roster={officers} title="Leadership" />

      <RosterCard className="mt-12" roster={raiders} title="Raiders" />

      <ProgressCard
        className="mt-24"
        expansions={expansions}
        progress={progress}
      />

      <RecruitmentCard className="mt-24" />
    </>
  )
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>

export const getStaticProps: GetStaticProps<Props> = async () => {
  const expansions = await fetchExpansions()
  const progress = await fetchProgress(expansions)
  const roster = await fetchRoster()

  return {
    props: {
      expansions,
      progress,
      roster
    }
  }
}

export default Home
