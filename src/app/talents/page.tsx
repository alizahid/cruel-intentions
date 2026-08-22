import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Content } from './content'

export const metadata: Metadata = {
  title: 'Talents',
}

export default function Page() {
  return (
    <Suspense>
      <Content />
    </Suspense>
  )
}
