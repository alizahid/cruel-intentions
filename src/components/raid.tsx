import startCase from 'lodash/startCase'
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

          <div className="mt-3 text-2xl font-medium">{boss.name}</div>

          {(['normal', 'heroic', 'mythic'] as const).map((difficulty) => (
            <div className="flex mt-3" key={difficulty}>
              <div className="font-medium">{startCase(difficulty)}</div>

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
      ))}
    </div>
  </div>
)
