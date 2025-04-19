import type { Metadata } from 'next'
import { Courier_Prime } from 'next/font/google'
import './globals.css'

const courierPrime = Courier_Prime({
  variable: '--font-courier-prime',
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Constella',
  description: 'Wallet for Autonomous Agents',
  icons: {
    icon: '/one.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${courierPrime.variable} antialiased`}>{children}</body>
    </html>
  )
}
