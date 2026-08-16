import '~/styles/main.css'

import { Tooltip } from '@base-ui/react/tooltip'
import type { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { radiance, reaver } from '~/assets/fonts'
import { Footer } from '~/components/footer'
import { Header } from '~/components/header'
import { RECRUITMENT } from '~/lib/config'

interface Props {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <Tooltip.Provider>
      <html
        className={twMerge('scroll-smooth', radiance.variable, reaver.variable)}
        lang="en"
      >
        <body className="relative isolate">
          <div className="flex flex-col text-center">
            {RECRUITMENT.length > 0 ? (
              <div className="bg-primary-400 p-3 pb-2.5 font-semibold text-black">
                We&#39;re actively recruiting the following:{' '}
                {RECRUITMENT.join(', ')}
              </div>
            ) : null}

            <Header />

            {children}

            <Footer />
          </div>
        </body>
      </html>
    </Tooltip.Provider>
  )
}
