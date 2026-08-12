import type { Metadata } from 'next'

import { ProgressCard } from '~/components/progress'
import { RecruitmentCard } from '~/components/recruitment'
import { RosterCard } from '~/components/roster'
import { GUILD, OFFICER_RANK, RAIDER_RANK, REALM, REGION } from '~/lib/config'
import { fetchExpansions, fetchProgress, fetchRoster } from '~/lib/raider'

export const metadata: Metadata = {
  description: `${GUILD}: World of Warcraft guild on ${REALM}, ${REGION.toUpperCase()}`,
  title: `${GUILD}: World of Warcraft guild`,
}

export default async function Page() {
  const expansions = await fetchExpansions()
  const progress = await fetchProgress(expansions)
  const roster = await fetchRoster()

  const officers = roster.filter((member) => OFFICER_RANK.includes(member.rank))
  const raiders = roster.filter((member) => RAIDER_RANK.includes(member.rank))

  return (
    <main className="my-24 flex flex-col gap-24">
      <RosterCard roster={officers} title="Leadership" />

      <RosterCard roster={raiders} title="Raiders" />

      <ProgressCard expansions={expansions} progress={progress} />

      <RecruitmentCard />
    </main>
  )
}
