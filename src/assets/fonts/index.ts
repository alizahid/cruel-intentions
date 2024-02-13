import localFont from 'next/font/local'

export const radiance = localFont({
  src: [
    {
      path: './radiance-regular.woff2',
      weight: '400',
    },
    {
      path: './radiance-semibold.woff2',
      weight: '600',
    },
    {
      path: './radiance-bold.woff2',
      weight: '700',
    },
  ],
  variable: '--font-radiance',
})

export const reaver = localFont({
  src: [
    {
      path: './reaver-regular.woff2',
      weight: '400',
    },
    {
      path: './reaver-semibold.woff2',
      weight: '600',
    },
    {
      path: './reaver-bold.woff2',
      weight: '700',
    },
  ],
  variable: '--font-reaver',
})
