'use client'

import { usePrivy } from '@privy-io/react-auth'
import { formatAddress } from '../../utils/format'
import useUserStore from '@/stores/userStore'
export default function DisconnectWallet() {
  const { logout, user, authenticated } = usePrivy()
  const { clearToken } = useUserStore()

  if (!authenticated || !user?.wallet?.address) return <></>

  return (
    <div
      className="text-textgreen cursor-pointer mt-2 ml-auto hover:underline"
      onClick={async () => {
        await logout()
        clearToken()
      }}
    >
      Disconnect ({formatAddress(user.wallet.address)})
    </div>
  )
}