import type { Metadata } from 'next'
import { Footer } from '~/components/footer'
import { Header } from '~/components/header'

import { ProgressCard } from '~/components/progress'
import { RecruitmentCard } from '~/components/recruitment'
import { RosterCard } from '~/components/roster'
import {
  GUILD,
  OFFICER_RANK,
  RAIDER_RANK,
  REALM,
  RECRUITMENT,
  REGION,
} from '~/lib/config'
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
    <main className="my-24 flex flex-col gap-24 text-center">
      {RECRUITMENT.length > 0 ? (
        <div className="bg-primary-400 p-3 pb-2.5 font-semibold text-black">
          We&#39;re actively recruiting the following: {RECRUITMENT.join(', ')}
        </div>
      ) : null}

      <Header />

      <RosterCard roster={officers} title="Leadership" />

      <RosterCard roster={raiders} title="Raiders" />

      <ProgressCard expansions={expansions} progress={progress} />

      <RecruitmentCard />

      <Footer />
    </main>
  )
}
