import { FunctionComponent } from 'react'

type Props = {
  id: string
}

export const Link: FunctionComponent<Props> = ({ children, id }) => (
  <a
    className="p-6 font-medium transition-colors hover:text-amber-400"
    href={`#${id}`}>
    {children}
  </a>
)
