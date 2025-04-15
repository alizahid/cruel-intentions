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
      <h2 className="text-accent-400 text-4xl font-semibold">Progression</h2>

      {expansions.map((expansion) => (
        <div className="mt-12" key={expansion.id}>
          <h3 className="text-primary-400 text-3xl font-semibold">
            {expansion.name}
          </h3>

          <div className="mx-auto mt-12 grid max-w-5xl gap-12 lg:grid-cols-2">
            {expansion.raids.map((raid) => (
              <div className="w-full max-w-5xl lg:mx-auto" key={raid.slug}>
                <div className="text-accent-400 text-2xl font-bold">
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
                          {boss.slug}
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
