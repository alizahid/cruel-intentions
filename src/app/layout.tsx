import '~/styles/main.css'

import { type ServerRuntime } from 'next'
import { type ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

import { radiance, reaver } from '~/assets/fonts'
import { Footer } from '~/components/footer'
import { Header } from '~/components/header'
import { RECRUITMENT } from '~/lib/config'

export const runtime: ServerRuntime = 'edge'

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <html
      className={twMerge('scroll-smooth', radiance.variable, reaver.variable)}
      lang="en">
      <body>
        <div className="flex flex-col text-center">
          {RECRUITMENT.length > 0 && (
            <div className="bg-primary-400 p-3 pb-2.5 font-semibold text-black">
              We&#39;re actively recruiting the following:{' '}
              {RECRUITMENT.join(', ')}
            </div>
          )}

          <Header />

          <main className="my-24 flex flex-col">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  )
}
