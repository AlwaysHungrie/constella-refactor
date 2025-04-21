import type { Metadata } from 'next'
import { Bebas_Neue, Roboto_Flex } from 'next/font/google'
import './globals.css'
import { TITLE } from '@/config'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bebas-neue',
})

const robotoFlex = Roboto_Flex({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-flex',
})

export const metadata: Metadata = {
  title: TITLE.constella.title,
  description: TITLE.constella.description,
  icons: {
    icon: '/pineapple.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.className} ${robotoFlex.className} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
