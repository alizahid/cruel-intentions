import '../styles/global.css'

import { FunctionComponent } from 'react'

import { AppPropsWithLayout } from '../types/next'

const CruelIntentions: FunctionComponent<AppPropsWithLayout> = ({
  Component,
  pageProps
}) => {
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)
}

export default CruelIntentions
