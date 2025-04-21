'use client'

import PrivyProvider from '@/providers/privy'

export default function AllProviders({
  children,
}: {
  children: React.ReactNode
}) {
  return <PrivyProvider>{children}</PrivyProvider>
}
