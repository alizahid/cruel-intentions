import Image from 'next/image'
import { FunctionComponent } from 'react'
import { twMerge } from 'tailwind-merge'

import { Raid } from '../types'
import { Icon } from './icon'

type Props = {
  className?: string
  raid: Raid
}

export const RaidCard: FunctionComponent<Props> = ({ className, raid }) => (
  <div className={twMerge('scroll-mt-12', className)} id="progress">
    <h2 className="text-4xl font-semibold text-center text-teal-400">
      {raid.name}
    </h2>

    <div className="grid gap-12 mt-12 lg:grid-cols-3">
      {raid.bosses.map((boss) => (
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
                <div className="font-semibold text-gray-400">
                  {difficulty[0].toUpperCase()}
                </div>

                <Icon
                  className={twMerge(
                    'ml-3',
                    boss[difficulty] ? 'text-emerald-400' : 'text-rose-400'
                  )}
                  name={boss[difficulty] ? 'success' : 'cancel'}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
)
