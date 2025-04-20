'use client'

import { usePrivy } from '@privy-io/react-auth'
import useUserStore from '@/stores/userStore'
import { CreateWalletForm } from '../createWallet/createWalletForm'
import { CTAAccordian } from '../ctaAccordian'
export default function WalletsContainer() {
  const { authenticated, user } = usePrivy()
  const { token } = useUserStore()

  if (!authenticated || !token) return <></>
  if (!user?.wallet?.address) return <></>

  return (
    <div className="flex flex-col mt-4">
      <CTAAccordian title="Create a new wallet" defaultOpen={true}>
        <CreateWalletForm />
      </CTAAccordian>
    </div>
  )
}
