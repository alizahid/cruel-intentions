type Props = {
  children: string
  href: string
}

export function Link({ children, href }: Props) {
  return (
    <a className="hover:text-primary-400 px-3 py-6 font-semibold" href={href}>
      {children}
    </a>
  )
}
