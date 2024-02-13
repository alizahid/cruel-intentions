type Props = {
  children: string
  href: string
}

export function Link({ children, href }: Props) {
  return (
    <a className="px-3 py-6 font-semibold hover:text-primary-400" href={href}>
      {children}
    </a>
  )
}
