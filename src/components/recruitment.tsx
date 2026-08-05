import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

import { GUILD, RECRUITMENT } from '~/lib/config'
import { officers } from '~/lib/roster'

interface Props {
  className?: string
}

export function RecruitmentCard({ className }: Props) {
  return (
    <div className={twMerge('mx-6 scroll-m-12', className)} id="recruitment">
      <h2 className="font-semibold text-4xl text-accent-400">
        Apply to join {GUILD}
      </h2>

      {RECRUITMENT.length > 0 ? (
        <p className="my-6 rounded-lg bg-primary-400 p-3 pb-2.5 text-black lg:mx-auto lg:max-w-3xl">
          <span className="text-lg">
            We&#39;re actively recruiting the following:
          </span>
          <br />
          <span className="font-semibold text-xl">
            {RECRUITMENT.join(', ')}
          </span>
        </p>
      ) : null}

      {/* <p className="my-6 text-lg">
        Fill out the form and we&#39;ll get back to you.
      </p> */}

      {/* <div className="flex justify-center">
        <a
          className="rounded-lg bg-primary-400 p-3 pb-2.5 font-semibold text-black leading-none transition-colors hover:bg-primary-300 active:bg-primary-500"
          href="https://docs.google.com/forms/d/e/1FAIpQLSfGFfPjpKj2eo4_vAyBSw3Z-5boinYTXr2c1PqNFhjppJzKWw/viewform"
          rel="noreferrer"
          target="_blank"
        >
          Form
        </a>
      </div> */}

      <p className="my-6 text-lg">Talk to one of our officers on Discord.</p>

      <div className="flex flex-wrap justify-center gap-3">
        {officers.map(({ id, username }) => (
          <Link
            className="rounded-lg bg-accent-400 p-3 pb-2.5 font-semibold text-black leading-none outline-none ring-accent-200 focus-visible:ring-2"
            href={`https://discordapp.com/users/${id}`}
            key={id}
            target="_blank"
          >
            {username}
          </Link>
        ))}
      </div>
    </div>
  )
}
