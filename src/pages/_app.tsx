import '../styles/global.scss'
import 'tailwindcss/tailwind.css'

import { AppProps } from 'next/app'
import { FunctionComponent } from 'react'

const CruelIntentions: FunctionComponent<AppProps> = ({
  Component,
  pageProps
}) => <Component {...pageProps} />

export default CruelIntentions
