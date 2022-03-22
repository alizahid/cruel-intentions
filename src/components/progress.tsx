import startCase from 'lodash/startCase'
import Image from 'next/image'
import { FunctionComponent } from 'react'
import { twMerge } from 'tailwind-merge'

import { Raid } from '../types'

type Props = {
  className?: string
  progress: Raid
}

export const ProgressCard: FunctionComponent<Props> = ({
  className,
  progress
}) => (
  <div className={className} id="progress">
    <h2 className="text-4xl font-semibold text-center text-teal-400">
      {progress.name}
    </h2>

    <div className="grid max-w-5xl gap-12 mx-auto mt-12 lg:grid-cols-3">
      {progress.bosses.map((boss) => (
        <div className="flex flex-col items-center text-center" key={boss.slug}>
          <Image
            alt={boss.name}
            className="rounded-lg bg-amber-900"
            height={56}
            src={boss.image}
            width={56}
          />

          <div className="my-3 text-2xl font-medium text-amber-400">
            {boss.name}
          </div>

          <div className="flex">
            {(['normal', 'heroic', 'mythic'] as const).map((difficulty) => (
              <div className="flex ml-6 first:ml-0" key={difficulty}>
                <div
                  className={twMerge(
                    'font-medium',
                    boss[difficulty] ? 'text-emerald-400' : 'text-rose-400'
                  )}>
                  {startCase(difficulty)}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
)
