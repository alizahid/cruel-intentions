import { FunctionComponent } from 'react'
import { twMerge } from 'tailwind-merge'

import { Guild } from '../types'

type Props = {
  className?: string
  guild: Guild
}

export const RecruitmentCard: FunctionComponent<Props> = ({
  className,
  guild
}) => (
  <div className={twMerge('text-center', className)} id="recruitment">
    <h2 className="text-4xl font-semibold text-teal-400">
      Apply to join {guild.name}
    </h2>

    <p className="my-6 text-lg">
      Fill out the form and we&#39;ll get back to you or join our Discord and
      talk to an officer.
    </p>

    <div className="flex justify-center">
      <a
        className="p-3 font-semibold leading-none text-black transition-colors rounded-lg hover:bg-amber-300 active:bg-amber-500 bg-amber-400"
        href="https://shorturl.at/jzFS9"
        rel="noreferrer"
        target="_blank">
        Form
      </a>

      <a
        className="p-3 ml-6 font-semibold leading-none text-black transition-colors rounded-lg hover:bg-amber-300 active:bg-amber-500 bg-amber-400"
        href="https://discord.gg/eKN47MxheF"
        rel="noreferrer"
        target="_blank">
        Discord
      </a>
    </div>
  </div>
)
