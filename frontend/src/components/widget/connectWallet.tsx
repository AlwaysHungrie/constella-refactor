'use client'

import { usePrivy } from '@privy-io/react-auth'
import CTAButton from '../ctaButton'

export default function ConnectWallet() {
  const { authenticated, user, login } = usePrivy()

  if (authenticated) return <></>
  if (user?.wallet?.address) return <></>

  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-[#e2ebe215] mt-4 mb-2 px-6 py-4 rounded-sm">
      <CTAButton inverted className="px-12" onClick={() => login()}>
        Connect Wallet
      </CTAButton>
    </div>
  )
}
