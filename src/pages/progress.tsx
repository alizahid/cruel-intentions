import { GetStaticProps } from 'next'
import { z } from 'zod'

import { ProgressCard } from '../components/progress'
import { RecruitmentCard } from '../components/recruitment'
import { RosterCard } from '../components/roster'
import { MainLayout } from '../layouts/main'
import { GUILD, MAX_RANK, REALM, REGION } from '../lib/config'
import { raider } from '../lib/raider'
import { Data } from '../types'
import { NextPageWithLayout } from '../types/next'

const schema = z.object({})

type Props = z.infer<typeof schema>

const Home: NextPageWithLayout<Data> = ({ guild, progress, roster }) => {
  const officers = roster.filter(({ rank }) => rank <= 1)
  const raiders = roster.filter(({ rank }) => rank > 1)

  return (
    <>
      <RosterCard className="py-12" roster={officers} title="Leadership" />

      <RosterCard className="py-12" roster={raiders} title="Raiders" />

      <ProgressCard className="py-12" progress={progress} />

      <RecruitmentCard className="mt-24" guild={guild} />
    </>
  )
}

Home.getLayout = (page) => (
  <MainLayout guild={page.props.guild}>{page}</MainLayout>
)

export const getStaticProps: GetStaticProps<Data> = async () => {
  const props = await raider.fetch({
    guild: GUILD,
    maxRank: MAX_RANK,
    realm: REALM,
    region: REGION
  })

  return {
    props
  }
}

export default Home
