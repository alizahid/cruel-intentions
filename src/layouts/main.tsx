import Head from 'next/head'
import { FunctionComponent, ReactNode } from 'react'

import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { Guild } from '../types'

type Props = {
  children: ReactNode
  guild: Guild
}

export const MainLayout: FunctionComponent<Props> = ({ children, guild }) => (
  <div className="flex flex-col px-6">
    <Head>
      <title>{guild.name}: World of Warcraft guild</title>
      <meta
        content={`${guild.name}: World of Warcraft guild on ${guild.realm}, ${guild.region}`}
        name="description"
      />
    </Head>

    <Header guild={guild} />

    <main className="flex flex-col my-24">{children}</main>

    <Footer guild={guild} />
  </div>
)
