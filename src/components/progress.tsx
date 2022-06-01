import Image from 'next/image'
import { FunctionComponent } from 'react'
import { twMerge } from 'tailwind-merge'

import { Expansion, Progress } from '../types/wow'
import { Icon } from './icon'

type Props = {
  className?: string
  expansions: Array<Expansion>
  progress: Array<Progress>
}

export const ProgressCard: FunctionComponent<Props> = ({
  className,
  expansions,
  progress
}) => (
  <div className={twMerge('scroll-m-12 mx-6', className)} id="progress">
    <h2 className="text-4xl font-semibold text-accent-400">Progression</h2>

    {expansions.map((expansion) => (
      <div className="mt-12" key={expansion.id}>
        <h3 className="text-3xl font-semibold text-primary-400">
          {expansion.name}
        </h3>

        <div className="flex flex-wrap gap-12 mt-12">
          {expansion.raids.map((raid) => (
            <div className="w-full lg:mx-auto lg:max-w-md" key={raid.slug}>
              <div className="text-2xl font-medium text-accent-400">
                {raid.name}
              </div>

              <div>
                {raid.bosses.map((boss) => {
                  const data = progress.find(
                    (progress) =>
                      progress.raid === raid.slug && progress.boss === boss.slug
                  )

                  return (
                    <div className="flex items-center mt-6" key={boss.slug}>
                      <Image
                        alt={boss.name}
                        className="rounded-lg bg-amber-600"
                        height={32}
                        src={`https://cdnassets.raider.io/images/${raid.slug}/bossicons/${boss.slug}.jpg`}
                        width={32}
                      />

                      <div className="flex-1 ml-3 font-medium text-left">
                        {boss.name}
                      </div>

                      {(['normal', 'heroic', 'mythic'] as const).map(
                        (difficulty) => (
                          <div className="ml-3 first:ml-auto" key={difficulty}>
                            <Icon
                              className={
                                data?.[difficulty]
                                  ? 'text-emerald-400'
                                  : 'text-rose-400'
                              }
                              name="ok"
                            />
                          </div>
                        )
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}

    {/* <div className="grid max-w-5xl gap-12 mx-auto mt-12 lg:grid-cols-3">
      {progress.bosses.map((boss) => (
        <div className="flex flex-col items-center" key={boss.slug}>
          <Image
            alt={boss.name}
            className="rounded-lg bg-primary-900"
            height={56}
            src={boss.image}
            width={56}
          />

          <div className="my-3 text-2xl font-medium text-primary-400">
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
    </div> */}
  </div>
)
