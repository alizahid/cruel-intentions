import { FunctionComponent } from 'react'

type Props = {
  children: string
  href: string
}

export const Link: FunctionComponent<Props> = ({ children, href }) => (
  <a
    className="px-3 py-6 font-medium transition-colors hover:text-amber-400"
    href={href}>
    {children}
  </a>
)
