import { FunctionComponent } from 'react'
import { twMerge } from 'tailwind-merge'

import { GUILD, RECRUITMENT } from '../lib/config'

type Props = {
  className?: string
}

export const RecruitmentCard: FunctionComponent<Props> = ({ className }) => (
  <div className={twMerge('scroll-m-12 mx-6', className)} id="recruitment">
    <h2 className="text-4xl font-semibold text-accent-400">
      Apply to join {GUILD}
    </h2>

    {RECRUITMENT.length > 0 && (
      <p className="p-3 my-6 font-medium text-black rounded-lg lg:max-w-3xl lg:mx-auto bg-primary-400">
        <span className="text-lg">
          We&#39;re actively recruiting the following:
        </span>
        <br />
        <span className="text-xl">{RECRUITMENT.join(', ')}</span>
      </p>
    )}

    <p className="my-6 text-lg">
      Fill out the form and we&#39;ll get back to you.
    </p>

    <div className="flex justify-center">
      <a
        className="p-3 font-semibold leading-none text-black transition-colors rounded-lg hover:bg-primary-300 active:bg-primary-500 bg-primary-400"
        href="https://forms.gle/vcx78QHhUDUtjiP99"
        rel="noreferrer"
        target="_blank">
        Form
      </a>
    </div>

    <p className="my-6 text-lg">Or talk to one of our officers on Discord.</p>

    <div className="flex flex-wrap justify-center gap-3">
      {['Asphyxiation#5885', 'mildpanda#5382', 'Moshira#7226'].map(
        (officer) => (
          <div
            className="p-3 font-semibold leading-none text-black rounded-lg bg-accent-400"
            key={officer}>
            {officer}
          </div>
        )
      )}
    </div>
  </div>
)
