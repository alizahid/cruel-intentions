import { FunctionComponent } from 'react'

import { Guild } from '../types'

type Props = {
  guild: Guild
}

export const Footer: FunctionComponent<Props> = ({ guild }) => (
  <footer className="text-sm text-center text-gray-400">
    &#169; {new Date().getFullYear()} {guild.name}. All rights reserved.
  </footer>
)
