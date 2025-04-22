'use client'

import { usePrivy } from '@privy-io/react-auth'
import CTAButton from '../ctaButtont'

export default function ConnectWallet() {
  const { authenticated, user, login } = usePrivy()

  if (authenticated) return <></>
  if (user?.wallet?.address) return <></>

  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-[#e2ebe215] px-6 py-4 rounded-sm">
      <CTAButton onClick={login}>Connect Wallet</CTAButton>
    </div>
  )
}
