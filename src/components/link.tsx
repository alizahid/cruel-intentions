interface Props {
  children: string
  href: string
}

export function Link({ children, href }: Props) {
  return (
    <a
      className="rounded-b-lg px-3 py-6 font-semibold outline-none hover:text-primary-400 focus-visible:bg-primary-950"
      href={href}
    >
      {children}
    </a>
  )
}
