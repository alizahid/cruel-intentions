import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

import { GUILD, RECRUITMENT } from '~/lib/config'

type Props = {
  className?: string
}

export function RecruitmentCard({ className }: Props) {
  return (
    <div className={twMerge('mx-6 scroll-m-12', className)} id="recruitment">
      <h2 className="text-accent-400 text-4xl font-semibold">
        Apply to join {GUILD}
      </h2>

      {RECRUITMENT.length > 0 && (
        <p className="bg-primary-400 my-6 rounded-lg p-3 pb-2.5 text-black lg:mx-auto lg:max-w-3xl">
          <span className="text-lg">
            We&#39;re actively recruiting the following:
          </span>
          <br />
          <span className="text-xl font-semibold">
            {RECRUITMENT.join(', ')}
          </span>
        </p>
      )}

      <p className="my-6 text-lg">
        Fill out the form and we&#39;ll get back to you.
      </p>

      <div className="flex justify-center">
        <a
          className="bg-primary-400 hover:bg-primary-300 active:bg-primary-500 rounded-lg p-3 pb-2.5 leading-none font-semibold text-black transition-colors"
          href="https://docs.google.com/forms/d/e/1FAIpQLSfGFfPjpKj2eo4_vAyBSw3Z-5boinYTXr2c1PqNFhjppJzKWw/viewform"
          rel="noreferrer"
          target="_blank">
          Form
        </a>
      </div>

      <p className="my-6 text-lg">Or talk to one of our officers on Discord.</p>

      <div className="flex flex-wrap justify-center gap-3">
        {[
          {
            id: '241549823168348160',
            username: 'Luga',
          },
          {
            id: '987785524007817266',
            username: 'Oesta',
          },
          {
            id: '227015787121082370',
            username: 'Mushira',
          },
          {
            id: '333521447945502731',
            username: 'Galvanuts',
          },
        ].map(({ id, username }) => (
          <Link
            className="bg-accent-400 rounded-lg p-3 pb-2.5 leading-none font-semibold text-black"
            href={`https://discordapp.com/users/${id}`}
            key={id}
            target="_blank">
            {username}
          </Link>
        ))}
      </div>
    </div>
  )
}
