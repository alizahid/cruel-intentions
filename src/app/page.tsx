import { type Metadata } from 'next'

import { ProgressCard } from '~/components/progress'
import { RecruitmentCard } from '~/components/recruitment'
import { RosterCard } from '~/components/roster'
import { GUILD, LEADER_RANK, REALM, REGION } from '~/lib/config'
import { fetchExpansions, fetchProgress, fetchRoster } from '~/lib/raider'

export const metadata: Metadata = {
  description: `${GUILD}: World of Warcraft guild on ${REALM}, ${REGION.toUpperCase()}`,
  title: `${GUILD}: World of Warcraft guild`,
}

export default async function Page() {
  const expansions = await fetchExpansions()
  const progress = await fetchProgress(expansions)
  const roster = await fetchRoster()

  const officers = roster.filter(({ rank }) => rank <= LEADER_RANK)
  const raiders = roster.filter(({ rank }) => rank > LEADER_RANK)

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
