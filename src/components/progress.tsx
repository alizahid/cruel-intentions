import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

import { type Expansion, type Progress } from '~/types/wow'

import { Icon } from './icon'

type Props = {
  className?: string
  expansions: Array<Expansion>
  progress: Array<Progress>
}

export function ProgressCard({ className, expansions, progress }: Props) {
  return (
    <div className={twMerge('mx-6 scroll-m-12', className)} id="progress">
      <h2 className="text-4xl font-semibold text-accent-400">Progression</h2>

      {expansions.map((expansion) => (
        <div className="mt-12" key={expansion.id}>
          <h3 className="text-3xl font-semibold text-primary-400">
            {expansion.name}
          </h3>

          <div className="mt-12 flex flex-wrap gap-12">
            {expansion.raids.map((raid) => (
              <div className="w-full lg:mx-auto lg:max-w-md" key={raid.slug}>
                <div className="text-2xl font-bold text-accent-400">
                  {raid.name}
                </div>

                <div>
                  {raid.bosses.map((boss) => {
                    const data = progress.find(
                      (item) =>
                        item.raid === raid.slug && item.boss === boss.slug,
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
                              title={difficulty}>
                              <Icon
                                className={
                                  data?.[difficulty]
                                    ? 'text-emerald-400'
                                    : 'text-rose-400'
                                }
                                name="ok"
                              />
                            </div>
                          ),
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
