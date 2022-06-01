import { FunctionComponent } from 'react'

type Props = {
  children: string
  href: string
}

export const Link: FunctionComponent<Props> = ({ children, href }) => (
  <a className="px-3 py-6 font-medium hover:text-primary-400" href={href}>
    {children}
  </a>
)
