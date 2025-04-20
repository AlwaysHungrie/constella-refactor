'use client'

import { usePrivy } from '@privy-io/react-auth'
import useUserStore from '@/stores/userStore'
import { CreateWalletForm } from '../walletForms/createWalletForm'
import { CTAAccordian } from '../ctaAccordian'
import { authorizedGetRequest } from '@/utils/api'
import { useCallback, useEffect } from 'react'
import { useWalletStore } from '@/stores/walletStore'
import { EditWalletForm } from '../walletForms/editWalletForm'
import { formatAddress } from '@/utils/format'

export default function WalletsContainer() {
  const { authenticated, user } = usePrivy()
  const { token } = useUserStore()
  const { setWallets, wallets } = useWalletStore()

  const handleGetWallets = useCallback(
    async (token: string) => {
      if (!token) return
      try {
        const response = await authorizedGetRequest(token, 'wallet')
        setWallets(response)
      } catch (error) {
        console.error(error)
      }
    },
    [setWallets]
  )

  useEffect(() => {
    if (!token) return
    handleGetWallets(token)
  }, [handleGetWallets, token])

  if (!authenticated || !token) return <></>
  if (!user?.wallet?.address) return <></>

  return (
    <div className="flex flex-col mt-4 gap-4">
      {wallets.map((wallet) => (
        <CTAAccordian
          key={wallet.walletAddress}
          title={formatAddress(wallet.walletAddress)}
          defaultOpen={false}
        >
          <EditWalletForm wallet={wallet} />
        </CTAAccordian>
      ))}

      <CTAAccordian title="Create a new wallet" defaultOpen={true}>
        <CreateWalletForm />
      </CTAAccordian>
    </div>
  )
}
