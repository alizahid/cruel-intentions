import type { Metadata } from 'next'

import { ProgressCard } from '~/components/progress'
import { RecruitmentCard } from '~/components/recruitment'
import { RosterCard } from '~/components/roster'
import { GUILD, REALM, REGION } from '~/lib/config'
import { fetchExpansions, fetchProgress, fetchRoster } from '~/lib/raider'
import { people } from '~/lib/roster'

export const metadata: Metadata = {
  description: `${GUILD}: World of Warcraft guild on ${REALM}, ${REGION.toUpperCase()}`,
  title: `${GUILD}: World of Warcraft guild`,
}

export default async function Page() {
  const expansions = await fetchExpansions()
  const progress = await fetchProgress(expansions)
  const roster = await fetchRoster()

  const officers = roster.filter(({ name }) => people.officers.includes(name))
  const raiders = roster.filter(({ name }) => people.raiders.includes(name))

  return (
    <main className="my-24 flex flex-col gap-24">
      <RosterCard roster={officers} title="Leadership" />

      <RosterCard roster={raiders} title="Raiders" />

      <ProgressCard expansions={expansions} progress={progress} />

      <RecruitmentCard />
    </main>
  )
}
