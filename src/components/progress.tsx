import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

import type { Expansion, Progress } from '~/types/wow'

import { Icon } from './icon'

interface Props {
  className?: string
  expansions: Expansion[]
  progress: Progress[]
}

export function ProgressCard({ className, expansions, progress }: Props) {
  return (
    <div className={twMerge('mx-6 scroll-m-12', className)} id="progress">
      <h2 className="font-semibold text-4xl text-accent-400">Progression</h2>

      {expansions.map((expansion) => (
        <div className="mt-12" key={expansion.id}>
          <h3 className="font-semibold text-3xl text-primary-400">
            {expansion.name}
          </h3>

          <div className="mx-auto mt-12 grid max-w-5xl gap-12 lg:grid-cols-2">
            {expansion.raids.map((raid) => (
              <div className="w-full max-w-5xl lg:mx-auto" key={raid.slug}>
                <div className="font-bold text-2xl text-accent-400">
                  {raid.name}
                </div>

                <div>
                  {raid.bosses.map((boss) => {
                    const data = progress.find(
                      (item) => item.boss === boss.slug
                    )

                    return (
                      <div className="mt-6 flex items-center" key={boss.slug}>
                        <Image
                          alt={boss.name}
                          className="rounded-lg bg-amber-600"
                          height={32}
                          src={boss.image}
                          unoptimized
                          width={32}
                        />

                        <div className="ml-3 flex-1 text-left font-semibold">
                          {boss.name}
                        </div>

                        {(['normal', 'heroic', 'mythic'] as const).map(
                          (difficulty) => (
                            <div
                              className="ml-3 first:ml-auto"
                              key={difficulty}
                              title={difficulty}
                            >
                              <Icon
                                className={
                                  data?.[difficulty]
                                    ? 'text-emerald-400'
                                    : 'text-rose-400'
                                }
                                name={data?.[difficulty] ? 'yes' : 'no'}
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
    </div>
  )
}
