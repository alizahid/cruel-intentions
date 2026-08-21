import '~/styles/main.css'

import { Tooltip } from '@base-ui/react/tooltip'
import type { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { radiance, reaver } from '~/assets/fonts'

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
        <body className="relative isolate">{children}</body>
      </html>
    </Tooltip.Provider>
  )
}
