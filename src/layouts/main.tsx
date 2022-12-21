import Head from 'next/head'
import { FunctionComponent, ReactNode } from 'react'

import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { GUILD, REALM, RECRUITMENT, REGION } from '../lib/config'

type Props = {
  children: ReactNode
}

export const MainLayout: FunctionComponent<Props> = ({ children }) => (
  <div className="flex flex-col text-center">
    <Head>
      <title>{`${GUILD}: World of Warcraft guild`}</title>
      <meta
        content={`${GUILD}: World of Warcraft guild on ${REALM}, ${REGION.toUpperCase()}`}
        name="description"
      />
    </Head>

    {RECRUITMENT.length > 0 && (
      <div className="p-3 font-medium text-black bg-primary-400">
        We&#39;re actively recruiting the following: {RECRUITMENT.join(', ')}
      </div>
    )}

    <Header />

    <main className="flex flex-col my-24">{children}</main>

    <Footer />
  </div>
)
