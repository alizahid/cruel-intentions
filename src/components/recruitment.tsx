import { FunctionComponent } from 'react'
import { twMerge } from 'tailwind-merge'

import { GUILD } from '../lib/config'

type Props = {
  className?: string
}

export const RecruitmentCard: FunctionComponent<Props> = ({ className }) => (
  <div className={twMerge('scroll-m-12 mx-6', className)} id="recruitment">
    <h2 className="text-4xl font-semibold text-accent-400">
      Apply to join {GUILD}
    </h2>

    <p className="my-6 text-lg">
      Fill out the form and we&#39;ll get back to you or join our Discord and
      talk to an officer.
    </p>

    <div className="flex justify-center">
      <a
        className="p-3 font-semibold leading-none text-black transition-colors rounded-lg hover:bg-primary-300 active:bg-primary-500 bg-primary-400"
        href="https://shorturl.at/jzFS9"
        rel="noreferrer"
        target="_blank">
        Form
      </a>

      <a
        className="p-3 ml-6 font-semibold leading-none text-black transition-colors rounded-lg hover:bg-primary-300 active:bg-primary-500 bg-primary-400"
        href="https://discord.gg/eKN47MxheF"
        rel="noreferrer"
        target="_blank">
        Discord
      </a>
    </div>
  </div>
)
