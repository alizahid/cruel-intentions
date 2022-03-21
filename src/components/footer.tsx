import { FunctionComponent } from 'react'

export const Footer: FunctionComponent = () => (
  <footer className="text-sm text-center text-gray-400">
    &#169; {new Date().getFullYear()} Cruel Intentions. All rights reserved.
  </footer>
)
