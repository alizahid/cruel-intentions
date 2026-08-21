import '@radix-ui/themes/styles.css'
import '~/styles/main.css'

import { Theme } from '@radix-ui/themes'
import type { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { radiance, reaver } from '~/assets/fonts'

interface Props {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <html className={twMerge(radiance.variable, reaver.variable)} lang="en">
      <body>
        <Theme accentColor="amber" appearance="dark">
          {children}
        </Theme>
      </body>
    </html>
  )
}
